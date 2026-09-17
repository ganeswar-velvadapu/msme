# MSME Website — Department of Materials Science & Metallurgical Engineering

## Project Overview

This is the public website for the Department of Materials Science and Metallurgical Engineering (MSME) at IIT Hyderabad. It's a content-driven site: faculty profiles, staff and student directories, news, events, research areas/facilities/projects, placements, academic programs, and admissions information. All of that content is entered and edited by department staff through an admin panel, and the public pages read it and render it.

The application is built as a single Next.js project that embeds **Payload CMS** directly inside it, rather than being a separate frontend calling a separate backend service. Payload provides the admin UI (at `/admin`), the database layer, file uploads, and auto-generated REST/GraphQL APIs. The custom frontend pages under `src/app/(frontend)/` read data from Payload using its "local API" (a direct, in-process function call — not an HTTP round trip) and render it as React Server Components.

Who this is for:
- **Department staff / admins** use `/admin` to add and edit faculty, news, events, placements data, etc. No coding involved.
- **Site visitors** browse the public pages to find faculty, programs, news, and department information.
- **Developers** maintain the Next.js pages/components, the Payload collection/field definitions, and the couple of custom API routes.

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend framework | Next.js 16 (App Router), React 19 | Server-rendered pages, routing, React components |
| CMS / Backend | Payload CMS 3 (`payload`, `@payloadcms/next`) | Content modeling, admin UI, auto-generated REST & GraphQL APIs, file uploads |
| Database | PostgreSQL, via `@payloadcms/db-vercel-postgres` | Stores all content (faculty, news, events, etc.) and Payload's internal tables (users, media, migrations) |
| Rich text | `@payloadcms/richtext-lexical` | Powers any rich-text fields in the admin panel |
| Image processing | `sharp` | Generates resized image variants for uploaded media |
| Styling | Tailwind CSS 4 | Utility-first CSS across all frontend components |
| Auth | Payload's built-in auth (on the `users` collection) | Protects the `/admin` panel and the write endpoints of the auto-generated API |
| Email | `nodemailer` (Gmail SMTP) | Sends confirmation/notification emails from the public contact form |
| Calendar UI | `@schedule-x/*` | Renders the interactive events calendar on the homepage and Events page |
| Charts | `recharts` | Renders placement statistics charts |
| Package manager | `pnpm` (per `packageManager` field and CI scripts) | **Needs verification:** some tooling (Dockerfile, `README`'s own `npm run build`... see Troubleshooting) references `npm` instead |

## Architecture Overview

There is no separate backend server — Payload CMS runs *inside* the Next.js process. A request for a page follows this path:

```text
Browser
  │  requests e.g. /people/faculty
  ▼
Next.js App Router (src/app/(frontend)/people/faculty/page.js)
  │  runs on the server, calls Payload's "local API" directly
  ▼
Payload (getPayload({ config }).find({ collection: "faculty" }))
  │
  ▼
PostgreSQL database (via @payloadcms/db-vercel-postgres)
  │
  ▼
Payload returns plain JS objects (documents)
  │
  ▼
page.js passes the data as props into a Client Component
(e.g. FacultyClient.js — marked "use client")
  │
  ▼
Client Component renders the UI, handles search/filter/interactivity in the browser
  │
  ▼
Browser shows the finished page
```

Separately, the auto-generated Payload REST and GraphQL APIs (under `/api/...` and `/admin`) exist for the admin panel itself and for any external tooling — the department-facing pages **don't** call these over HTTP; they use the in-process local API instead, which is faster and avoids a network hop.

The one exception is the contact form, which is a genuine client-side `fetch()` call to a custom Next.js API route (`/api/contact`) that sends email via Gmail.

## Repository Structure

```text
msme/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # All public-facing pages (grouped route, no URL prefix)
│   │   │   ├── layout.js        # Root HTML shell: fonts, <Header>, <Footer>
│   │   │   ├── page.js          # Homepage
│   │   │   ├── about/, contact/, credits/, events/, news/
│   │   │   ├── academia/        # Program pages (btech/mtech/phd) + timetable
│   │   │   ├── admissions/      # Admission info pages per program
│   │   │   ├── careers/placements/
│   │   │   ├── people/          # Faculty, staff, students, alumni, etc.
│   │   │   └── research/        # Areas, facilities, projects, collaborations
│   │   ├── (payload)/           # Payload's own routes — admin UI + REST/GraphQL API
│   │   │   ├── admin/           # The CMS admin panel (auto-generated, do not hand-edit)
│   │   │   └── api/             # Auto-generated REST (`[...slug]`) and GraphQL routes
│   │   ├── api/contact/route.js # Custom API route: handles the contact form, sends email
│   │   └── my-route/route.ts    # Example/scratch route querying the `users` collection
│   ├── collections/             # Payload collection (≈ database table) definitions
│   ├── globals/                 # Payload "global" (single-record) definitions
│   ├── components/              # Shared React components (Navbar, Footer, cards, etc.)
│   ├── constants/menu.js        # Site navigation structure (drives the Navbar)
│   └── migrations/              # Auto-generated Postgres migration files
├── payload.config.ts            # Central Payload config: registers every collection/global, DB adapter
├── payload-types.ts             # Auto-generated TypeScript types for all collections/globals
├── next.config.mjs              # Next.js config, wraps app with Payload's plugin
├── Dockerfile                   # Container build for deployment
├── Jenkinsfile                  # CI/CD pipeline (build + deploy on the department's server)
└── update_script.sh             # Manual deploy/restart script used on the production host
```

## Prerequisites

- **Node.js** (Dockerfile uses Node 22; Jenkins pipeline uses Node 24 — either works, but keep it consistent with what you deploy with)
- **pnpm** (the project's declared package manager — `pnpm@11.5.3`)
- **PostgreSQL** database, reachable via a connection string
- A Gmail account (or app-specific password) if you want the contact form to actually send email locally

## Installation

```bash
git clone <https://github.com/ganeswar-velvadapu/msme.git>
cd msme
pnpm install
```

Create a `.env` file in the project root (see [Environment Variables](#environment-variables) below), then run any pending database migrations:

```bash
pnpm migrate
```

## Environment Variables

Define these in a `.env` file at the project root (never commit this file — it's already excluded via `.gitignore`).

| Variable | Used in | Purpose |
|---|---|---|
| `DATABASE_URI` | `payload.config.ts` | PostgreSQL connection string Payload uses to connect to the database |
| `PAYLOAD_SECRET` | `payload.config.ts` | Secret key Payload uses to sign authentication tokens/cookies for `/admin` logins. **Needs verification:** no fallback is safe for production — the code falls back to an empty string if unset |
| `APP_PASSWORD` | `src/app/api/contact/route.js` | Password/app-password for the `website@msme.iith.ac.in` Gmail account used to send contact-form emails |

```env
DATABASE_URI=<your-postgres-connection-string>
PAYLOAD_SECRET=<a-long-random-string>
APP_PASSWORD=<gmail-app-password>
```

`NEXT_PUBLIC_SERVER_URL` is **not** read from `.env` — it's hardcoded in `next.config.mjs` to `https://msme.iith.ac.in`. If you're running locally or deploying elsewhere, you'll want to change that hardcoded value (see Troubleshooting).

## Running the Application

```bash
# Development (hot reload)
pnpm dev

# Production build
pnpm build
pnpm start
```

By default Next.js serves on **port 3000**. There's no separate backend process to start — Payload runs inside the same Next.js server, so `/admin` and the API routes come up automatically alongside the frontend pages.

You'll also need a running PostgreSQL instance that `DATABASE_URI` can reach, and any pending migrations applied (`pnpm migrate`).

## Common Development Tasks

| I want to... | Where to look |
|---|---|
| Add a new public page | Create a folder + `page.js` under `src/app/(frontend)/` |
| Add a new content type (e.g. "Alumni Events") | Create a new file in `src/collections/`, export a `CollectionConfig`, register it in `payload.config.ts`'s `collections` array |
| Add/change a field on existing content (e.g. add a phone number to Faculty) | Edit the relevant file in `src/collections/`, then run `pnpm generate-types` to refresh `payload-types.ts` |
| Change how a listing page looks/filters (e.g. Faculty search) | Edit the matching `*Client.js` file (e.g. `FacultyClient.js`) |
| Change what data a page fetches | Edit the server `page.js` for that route (the `payload.find(...)` calls) |
| Add a new API endpoint | Add a `route.ts`/`route.js` file under `src/app/` following Next.js route conventions (see `src/app/api/contact/route.js` as a template) |
| Change the contact-form email content | Edit `src/app/api/contact/route.js` |
| Change the site navigation menu | Edit `src/constants/menu.js` |
| Add a new environment variable | Add it to `.env`, reference it with `process.env.YOUR_VAR` in server-side code only |


See `docs/ARCHITECTURE.md`, `docs/API.md`, `docs/DATABASE.md`, `docs/DEVELOPMENT.md`, and `docs/AUTHENTICATION.md` for deeper detail.