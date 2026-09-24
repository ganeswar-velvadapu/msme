# Architecture

## System Architecture

The application has three major components living inside **one Next.js process**:

1. **Public frontend** (`src/app/(frontend)/`) — server-rendered React pages that visitors browse. Each route is a folder with a `page.js` (a React Server Component that fetches data) and often a matching `*Client.js` file (a `"use client"` component that handles interactivity like search boxes and filters).

2. **Payload CMS** (configured in `payload.config.ts`, mounted under `src/app/(payload)/`) — provides:
   - The `/admin` panel department staff use to create/edit content.
   - Auto-generated REST endpoints under `/api/[...slug]` and a GraphQL endpoint under `/api/graphql`.
   - A "local API" (`getPayload({ config })` then `.find()`, `.findByID()`, `.findGlobal()`) that the frontend pages call **directly**, in-process, instead of making HTTP requests to the REST API.

3. **PostgreSQL database**, accessed only through Payload's database adapter (`@payloadcms/db-vercel-postgres`). Nothing in the frontend code talks to the database directly — all reads and writes go through Payload.

A handful of custom Next.js API routes sit alongside Payload's generated ones for things Payload doesn't handle out of the box — currently just the contact-form emailer (`src/app/api/contact/route.js`).

```text
                     ┌─────────────────────────────────────────┐
                     │              Next.js server              │
                     │                                           │
  Browser  ───────▶  │  (frontend) route  ──▶  Payload local API │ ──▶ PostgreSQL
                     │  e.g. page.js          .find() etc.       │
                     │        │                                  │
                     │        ▼                                  │
                     │  *Client.js (rendered on server,           │
                     │  hydrated in browser for interactivity)    │
                     │                                           │
  Browser  ───────▶  │  /admin  (Payload admin UI) ──────────────│ ──▶ PostgreSQL
  Browser  ───────▶  │  /api/[...slug], /api/graphql (Payload)   │ ──▶ PostgreSQL
  Browser  ───────▶  │  /api/contact (custom route) ─────────────│ ──▶ Gmail (nodemailer)
                     └─────────────────────────────────────────┘
```

## Request Lifecycle

### 1. Visitor browses the Faculty listing page

```text
Browser requests GET /people/faculty
        ↓
src/app/(frontend)/people/faculty/page.js runs on the server
        ↓
getPayload({ config }) then payload.find({ collection: "faculty", limit: 1000000000 })
        ↓
Payload's local API queries PostgreSQL directly (no HTTP hop)
        ↓
page.js receives an array of faculty documents
        ↓
Rendered into <FacultyClient facultyList={faculty.docs} />
        ↓
FacultyClient.js ("use client") receives the full list as a prop, and
handles search/sort entirely in the browser using useState/useMemo — no
further network requests are made as the visitor types in the search box
        ↓
Browser displays the faculty grid
```

### 2. Visitor opens one faculty member's profile

```text
Browser requests GET /people/faculty/<id>
        ↓
src/app/(frontend)/people/faculty/[id]/page.js runs on the server
        ↓
payload.findByID({ collection: "faculty", id })
        ↓
   found?  ──▶ renders <FacultyProfile faculty={faculty} />
   not found / error ──▶ renders a "Faculty Not Found" fallback UI
        ↓
Browser displays the profile (or the not-found message)
```

### 3. Visitor submits the Contact form

```text
Browser fills out the form on /contact (a client component with useState)
        ↓
On submit, browser calls fetch("https://msme-website.vercel.app/api/contact", { method: "POST", body: formData })
        ↓
src/app/api/contact/route.js (a Next.js API route, NOT part of Payload) receives the POST
        ↓
Creates a nodemailer transporter using Gmail + APP_PASSWORD
        ↓
Sends two emails: a confirmation to the visitor, a notification to office@msme.iith.ac.in
        ↓
Returns { message: "Emails sent successfully" } (200) or an error (500)
        ↓
Browser shows a success message, or an error message from the caught exception
```

**Needs verification:** the fetch target is a hardcoded absolute URL rather than a relative path, so this flow always hits the production deployment regardless of which environment is running the frontend code — see the README's Troubleshooting section.

### 4. Department staff adds a News item

```text
Staff logs into /admin (Payload admin UI, uses the `users` collection for auth)
        ↓
Opens the "News" collection, fills in news_title, news_short_description,
news_date, news_tag, optionally uploads news_image (stored via the Media collection)
        ↓
Payload validates the fields against src/collections/News.ts's field definitions
        ↓
Payload writes the row to the "news" table in PostgreSQL (and, if an image
was uploaded, a corresponding "media" row + resized image files via sharp)
        ↓
Next time a visitor loads / or /news, page.js's payload.find({ collection: "news" })
picks up the new row automatically — no code deploy needed
```

## Frontend Architecture

- **Routing:** Next.js App Router. Every folder under `src/app/(frontend)/` maps to a URL path; the `(frontend)` segment itself is a route group and does not appear in the URL. Dynamic segments like `people/faculty/[id]/page.js` map to `/people/faculty/123`.
- **Pages vs. Client components:** the convention throughout this codebase is that `page.js` is a Server Component (sometimes explicitly marked `"use server"`, sometimes implicit) that fetches data through Payload's local API, and a co-located `*Client.js` file (marked `"use client"`) receives that data as props and renders the interactive UI (search, filters, modals, animations). This split keeps database access on the server while still allowing rich client-side interactivity.
- **Data fetching:** always through `getPayload({ config }).find(...)`, `.findByID(...)`, or `.findGlobal(...)` inside `page.js` files — never `fetch()` calls to Payload's own REST API from the frontend. The one exception is the contact form, which does use `fetch()`, but against the custom `/api/contact` route, not Payload.
- **State management:** local component state only (`useState`, `useMemo`, `useEffect` in the various `*Client.js` files). There is no global state library (no Redux/Zustand/Context-based store) — each page's client component manages its own UI state independently.
- **Forms:** plain controlled React forms (`useState` + `onChange` + `onSubmit`), e.g. the contact form in `src/app/(frontend)/contact/page.js`. There is no shared form library (no react-hook-form/formik) in use.
- **Navigation:** the site menu is data-driven from `src/constants/menu.js`, which `Navbar.js` (`src/components/Navbar/Navbar.js`) renders, including nested dropdowns for sections like Research and People.
- **Layout:** `src/app/(frontend)/layout.js` wraps every frontend page with the shared `<Header>` (Navbar) and `<Footer>`, loads the local Inter font, and sets the page `<title>`/`<meta description>`.
- **Authentication state:** the public frontend has no visitor-facing login — there's nothing to track here. Only `/admin` has a login flow, and that's handled entirely inside Payload's own admin UI, not by any code in `src/components` or `src/app/(frontend)`.

## Backend Architecture

There isn't a traditional "controller/service" backend layer written by hand — Payload CMS fills that role:

- **Routes:** Payload auto-generates REST routes for every collection/global under `/api/[...slug]` (see `src/app/(payload)/api/[...slug]/route.ts`) and a GraphQL endpoint at `/api/graphql`. These files are generated by Payload and explicitly marked "DO NOT MODIFY."
- **Business logic / validation:** lives declaratively inside each collection/global's field definitions in `src/collections/*.ts` and `src/globals/*.ts` — field `type`s (text, email, number, select, upload, relationship, array, group) and `required` flags are Payload's validation layer. There are no custom `hooks` (Payload's mechanism for custom server-side logic on create/update) defined in any collection in this codebase.
- **Database layer:** entirely inside Payload, configured once in `payload.config.ts` via `vercelPostgresAdapter`. Frontend code never writes raw SQL or uses an ORM directly.
- **Middleware:** none custom-written; Payload's own internal request handling covers authentication checks for `/admin` and the generated API.
- **Error handling:** frontend pages that call `findByID` wrap the call in `try/catch` and render a fallback UI on failure (see the Faculty profile page above). The custom `/api/contact` route wraps its `nodemailer` calls in `try/catch` and returns a JSON error with a 500 status on failure.

## Data Flow

All content displayed on the public site originates from PostgreSQL, entered through `/admin`. There is no CMS-external data source, no CSV import, and no third-party content API. The flow is uniformly:

```text
Admin enters content in /admin
   → Payload validates against the collection/global's field schema
   → Payload writes to PostgreSQL (+ Media/sharp for any uploaded files)
   → A frontend page.js calls payload.find()/findByID()/findGlobal() on the next request
   → Data is passed as props into a Client Component for rendering
```

The only data that does **not** originate from Payload is what a visitor types into the contact form, which is emailed out and not persisted anywhere in the database.

## External Services

| Service | Why it's used | Where it's called | Data sent | Data received |
|---|---|---|---|---|
| **Gmail SMTP** (via `nodemailer`) | Sends contact-form confirmation and notification emails | `src/app/api/contact/route.js` | Visitor's name, email, mobile number, and message | Delivery success/failure (no structured response is stored) |
| **PostgreSQL** (via `@payloadcms/db-vercel-postgres`) | Primary data store for all collections/globals | Everywhere Payload's local/REST/GraphQL API is used | Full content documents (create/read/update/delete) | Query results / write confirmations |

**Needs verification:** `@payloadcms/payload-cloud` is included as a plugin in `payload.config.ts`, which typically integrates with Payload Cloud hosting features (e.g. cloud storage for uploads). No corresponding environment variables or explicit configuration were found, so it's unclear whether this plugin is actively doing anything in this deployment or is a leftover from a starter template.