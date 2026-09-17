# Development Guide

## "I want to change X — where do I go?"

| I want to... | Start here |
|---|---|
| Change the homepage | `src/app/(frontend)/page.js` (composes `HeroVideo` and `AfterCarousel`) |
| Change the site navigation menu | `src/constants/menu.js` |
| Change the header/footer | `src/components/Navbar/Navbar.js`, `src/components/Footer/Footer.js` |
| Change how Faculty listing looks/filters | `src/app/(frontend)/people/faculty/FacultyClient.js` |
| Change what data the Faculty page fetches | `src/app/(frontend)/people/faculty/page.js` |
| Add a field to Faculty profiles (e.g. an office phone number) | `src/collections/Faculty.ts`, then run `pnpm generate-types` |
| Add a brand-new content type | Create `src/collections/YourThing.ts` (export a `CollectionConfig`), register it in `payload.config.ts`'s `collections` array |
| Add a brand-new singleton page's content (like "About") | Create `src/globals/YourThing.ts` (export a `GlobalConfig`), register it in `payload.config.ts`'s `globals` array |
| Add a new public page/route | Create a new folder + `page.js` under `src/app/(frontend)/` |
| Change the contact-form email wording | `src/app/api/contact/route.js` |
| Add a new API endpoint | Add `route.ts`/`route.js` under `src/app/` following Next.js conventions (see `src/app/api/contact/route.js`) |
| Change database behavior/relationships | Edit the collection/global file, then `pnpm generate` + `pnpm migrate` |
| Change styling/theme | Tailwind utility classes directly in component JSX, plus `src/app/(frontend)/globals.css` |
| Change how the events calendar behaves | `src/components/homeComponents/eventscalendar/` and `src/components/homeComponents/calendar/Calendar.js` |
| Change placements charts/stats | `src/components/placements/PlacementStats.js`, `CompanyGrid.js`, `YearFilter.js`, and `src/app/(frontend)/careers/placements/PlacementClient.js` |

## Adding a Feature — General Workflow

Most features in this codebase follow the same pattern: a Payload collection/global holds the data, a server `page.js` fetches it, and a client component renders it. For a typical new feature:

```text
1. Define or extend a collection/global in src/collections/ or src/globals/
   (this is your "what data exists" step)
        ↓
2. Register it in payload.config.ts (collections[] / globals[] array), if new
        ↓
3. Run `pnpm generate-types` to refresh payload-types.ts
        ↓
4. Create/update a page.js under src/app/(frontend)/... that calls
   payload.find() / findByID() / findGlobal() to fetch the data
        ↓
5. Create/update a *Client.js component that receives the fetched data as
   props and renders the UI (search, filters, cards, etc.)
        ↓
6. If new fields need database columns that don't exist yet, run
   `pnpm generate` then `pnpm migrate`
        ↓
7. Add the new page to src/constants/menu.js if it should appear in navigation
        ↓
8. Test locally with `pnpm dev`, then commit
```

If the feature needs a genuinely new backend behavior that Payload's CRUD doesn't cover (like the contact form's email-sending), add a standalone Next.js API route under `src/app/` instead of trying to force it into a collection.

## Code Conventions

These are conventions followed in the codebase, not prescriptive rules:

- **Server/Client split:** a route's `page.js` does data fetching (server-side, via Payload's local API); a co-located `*Client.js` file (marked `"use client"`) handles rendering and interactivity. Follow this split for new pages rather than fetching data inside a client component.
- **File naming:** collection files are named after their content (e.g. `Faculty.ts`, `News.ts`); client components are named `<PageName>Client.js`; detail/profile client components are named `<Thing>Profile.js` (e.g. `FacultyProfile.js`).
- **Field naming inside collections:** fields are prefixed with the entity name in most "people" collections, e.g. `faculty_name`, `faculty_email`, and the adjunct/POP/distinguished variants prefix similarly (`adjunct_faculty_name`, `pop_faculty_name`). Follow this prefixing convention if you add fields to keep patterns consistent, though it isn't enforced anywhere.
- **Styling:** Tailwind utility classes written inline in JSX; no CSS modules or styled-components in use.
- **Language:** the codebase mixes `.js` (most frontend pages/components) and `.ts`/`.tsx` (collections, globals, and Payload-generated files). `tsconfig.json` has `strict: false` and `allowJs: true`, so there's no enforced "everything must be TypeScript" rule — new frontend pages can reasonably follow the existing `.js` pattern, while new collections should follow the existing `.ts` pattern (Payload's own types expect this).
- **Import alias:** `@/` maps to `src/` (configured in `tsconfig.json`) — e.g. `import { Faculty } from '@/collections/Faculty'`. Use this alias for new imports rather than long relative paths, matching most of the existing code.
- **Linting:** `eslint.config.mjs` extends `next/core-web-vitals`. Run `pnpm lint` before committing.
