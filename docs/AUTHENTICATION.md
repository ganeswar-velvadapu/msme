# Authentication

The public website itself has **no visitor-facing accounts** — nobody logs in to browse faculty pages, news, or events. The only authentication in this application protects the **admin panel** (`/admin`), where department staff manage content.

## Mechanism

Authentication is Payload CMS's built-in auth system, enabled on the `users` collection:

```ts
// src/collections/Users.ts
export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,   // ← this line turns on Payload's built-in email/password auth
  fields: [],
};
```

Setting `auth: true` with no further options gives this collection Payload's default authentication behavior: email + password login, password hashing, and session tokens — without any custom fields beyond what Payload provides automatically (email, password hash, etc.). No custom login/registration UI exists in this codebase — the whole flow is Payload's own generated admin UI under `/admin`.

## Login Flow

```text
Staff member visits /admin
        ↓
Payload's admin UI (src/app/(payload)/admin/[[...segments]]/page.tsx) renders
the login screen if there's no valid session
        ↓
Staff enters email + password, submits
        ↓
Payload's internal auth logic checks credentials against the `users` table,
using PAYLOAD_SECRET to sign a token/cookie on success
        ↓
On success: redirected into the admin dashboard, with an authenticated
session stored in a cookie
On failure: error shown on the login form
```

## Registration Flow

There is no self-service registration UI wired into the public site. New admin users are created either:
- By an existing authenticated admin, from within `/admin`'s Users section, or
- Directly via Payload's REST/local API.

**Needs verification:** whether the very first user is created through a one-time setup flow (Payload's default "create first user" screen when the `users` collection is empty) — this is standard Payload behavior but wasn't something this codebase customizes.

## Where authentication state is stored

Entirely inside Payload's own session/cookie handling — there is no custom cookie or `localStorage`/`sessionStorage` auth logic anywhere in `src/`. The signing secret is `PAYLOAD_SECRET` (see [README.md](../README.md#environment-variables)).

## Middleware

No custom authentication middleware exists in this codebase (no `middleware.ts` at the project root, and no custom middleware wired into `payload.config.ts`). Access checks happen inside Payload itself.

## Authorization / Roles

The `users` collection defines no `roles` field and no custom `access` rules — Payload's default behavior applies uniformly to any authenticated user; there's no concept of "editor" vs. "super-admin" roles built into this codebase. **Needs verification:** if role-based permissions are needed going forward, they would need to be added explicitly (a `roles` field plus corresponding `access` functions on the relevant collections).

## Token Expiration / Refresh

Not customized anywhere in this codebase — whatever Payload's default token/session lifetime is applies. **Needs verification:** exact expiry duration, since no `tokenExpiration` or related auth option is set on the `Users` collection.

## Logout

Handled entirely by Payload's built-in admin UI (a logout action inside `/admin`) — there's no custom logout route in `src/app/`.

## Protected Routes

- `/admin` and its sub-routes (all under `src/app/(payload)/admin/`) require an authenticated `users` session — enforced by Payload's admin UI itself.
- The generated REST/GraphQL API (`/api/[...slug]`, `/api/graphql`) is **not** explicitly gated by any custom `access` rules in the collection/global files in this codebase (see [API.md](./API.md#authentication) for the caveat about Payload's default open access when no `access` config is set). This is worth revisiting if tighter API security is desired.
- No page under `src/app/(frontend)/` is protected — the entire public site is intentionally open to all visitors.