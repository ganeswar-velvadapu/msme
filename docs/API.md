# API Reference

This application exposes two kinds of API surface:

1. **Payload's auto-generated REST & GraphQL API** — one set of CRUD endpoints per collection/global, generated automatically from `payload.config.ts`. These are not hand-written in this repo; they're produced by the files under `src/app/(payload)/api/`.
2. **Custom Next.js API routes** — hand-written endpoints for things Payload doesn't provide, currently just the contact form.

The public frontend pages (`src/app/(frontend)/...`) do **not** call either of these over HTTP for their own data — they use Payload's local API (`getPayload({ config }).find(...)`) directly inside server components, which is faster and doesn't need an API surface at all. The endpoints below matter for the admin panel, for any external integrations, and for the contact form.

## Payload's Generated REST API

### Endpoint pattern

```text
GET    /api/<collection-slug>          List documents (paginated)
GET    /api/<collection-slug>/<id>     Fetch one document by ID
POST   /api/<collection-slug>          Create a document
PATCH  /api/<collection-slug>/<id>     Update a document
DELETE /api/<collection-slug>/<id>     Delete a document
GET    /api/globals/<global-slug>      Fetch a global (singleton) document
POST   /api/globals/<global-slug>      Update a global
```

### Purpose

Generic CRUD access to every content type registered in `payload.config.ts`.

### Authentication

**Needs verification, but by Payload's default behavior:** a collection or global that does not define an explicit `access` object (which is every collection in this codebase except `media`) defaults to open access — read **and** write operations are not restricted by default unless a collection specifies otherwise. `src/collections/Media.ts` is the only collection with an explicit access rule (`read: () => true`, i.e. explicitly public reads). No collection in this codebase defines `create`, `update`, or `delete` access rules of its own. In practice, the admin panel's own login screen is what stops most people from reaching the write endpoints in normal use, but the underlying REST/GraphQL write endpoints are not restricted by field-level `access` config in the code as it stands. Confirming actual runtime access behavior requires testing against a running instance.

### Collection slugs available

`users`, `media`, `placements`, `news`, `events`, `researchareas`, `researchfacilities`, `projects`, `collaborations`, `faculty`, `staff`, `btech`, `mtech`, `phd`, `alumni`, `btech-p`, `mtech-p`, `phd-p`, `adjunct-faculty`, `professors-in-practice`, `books`, `nptel-lectures`, `distinguished-faculty`

### Global slugs available

`about`, `mtech-admission`, `btech-admission`, `phd-admission`, `timetable`, `hod-message` — (see `src/globals/*.ts` for each global's own file name; the slug is set inside each file, e.g. `HODMessage.ts` registers `hod-message`)

### Example Request

```text
GET /api/faculty?limit=10&where[faculty_designation][equals]=Professor
```

### Example Response

```json
{
  "docs": [
    {
      "id": "abc123",
      "faculty_name": "Example Name",
      "faculty_designation": "Professor",
      "faculty_email": "example@iith.ac.in"
    }
  ],
  "totalDocs": 1,
  "limit": 10,
  "page": 1,
  "totalPages": 1
}
```

### Errors

Standard Payload error shape — a 4xx/5xx status with a JSON body containing an `errors` array describing what went wrong (e.g. a required field missing on `POST`). **Needs verification:** exact error payloads for this codebase's collections weren't inspected in detail since no collection defines custom validation beyond field types.

### Implementation

`src/app/(payload)/api/[...slug]/route.ts` — a Payload-generated file that wires up `REST_GET`, `REST_POST`, `REST_PATCH`, `REST_DELETE`, `REST_PUT`, and `REST_OPTIONS` from `@payloadcms/next/routes`. Do not hand-edit this file; it can be regenerated/overwritten by Payload tooling.

## Payload's Generated GraphQL API

### Endpoint

```text
POST /api/graphql
```

A GraphQL Playground is also available at `/api/graphql-playground` for interactive querying during development.

### Purpose

Same data as the REST API, queryable with GraphQL instead.

### Authentication

Same as the REST API above — governed by each collection/global's `access` config, which is unset (open) for everything except `media`'s explicit public read rule.

### Implementation

`src/app/(payload)/api/graphql/route.ts` — wires up `GRAPHQL_POST` from `@payloadcms/next/routes`. Also auto-generated; do not hand-edit.

## Custom Route: Contact Form Email

### Endpoint

```text
POST /api/contact
```

### Purpose

Receives the public contact form's submission and sends two emails via Gmail: a confirmation to the visitor, and a notification to the department office.

### Authentication

None — this is a public, unauthenticated endpoint by design (anyone can submit the public contact form).

### Request

JSON body:

| Field | Required | Notes |
|---|---|---|
| `name` | Yes (used in email content) | Visitor's name |
| `email` | Yes | Where the confirmation email is sent |
| `mobile` | No | Displayed in the office notification email as "Not provided" if omitted |
| `message` | Yes | The message body, included in both emails |

### Example Request

```json
{
  "name": "Jane Student",
  "email": "jane@example.com",
  "mobile": "9999999999",
  "message": "I'd like more information about the M.Tech program."
}
```

### Response

A JSON object with a `message` string.

### Example Response

```json
{
  "message": "Emails sent successfully"
}
```

### Errors

On any failure sending mail (bad `APP_PASSWORD`, Gmail rejecting the send, etc.), responds with HTTP 500:

```json
{
  "message": "Failed to send emails"
}
```

The error itself is logged server-side via `console.error` but not returned to the client in detail.

### Implementation

`src/app/api/contact/route.js` — exports a `POST` handler that builds a `nodemailer` Gmail transporter using the `APP_PASSWORD` environment variable and sends both emails with `transporter.sendMail(...)`.

**Note:** the frontend caller (`src/app/(frontend)/contact/page.js`) currently posts to the hardcoded absolute URL `https://msme-website.vercel.app/api/contact` rather than the relative path `/api/contact`. This means the form always submits to the production deployment, even when testing against a local or staging environment. **Needs verification** whether this is intentional.
