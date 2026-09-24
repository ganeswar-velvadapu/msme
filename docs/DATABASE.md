# Database

## Technology

**PostgreSQL**, accessed exclusively through Payload CMS's `@payloadcms/db-vercel-postgres` adapter, configured in `payload.config.ts`:

```ts
db: vercelPostgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI || '',
  },
}),
```

There is no hand-written SQL and no separate ORM in application code — every table, column, and relationship is derived automatically by Payload from the collection/global definitions in `src/collections/` and `src/globals/`. Payload creates and evolves the actual Postgres tables via the migration files in `src/migrations/` (see below).

## How the schema is defined

Each file in `src/collections/` exports a `CollectionConfig` object (roughly: one table). Each file in `src/globals/` exports a `GlobalConfig` object (a single-row table, since a global has exactly one record — e.g. "About the Department" text is a global, not a collection, because there's only ever one). Both are registered centrally in `payload.config.ts`:

```ts
collections: [Users, Media, Placements, News, Events, ResearchAreas, ResearchFacilities,
  Projects, Collaborations, Faculty, Staff, BTech, MTech, PhD, Alumni, BTech_P, MTech_P,
  PhD_P, AdjunctFaculty, popFaculty, Books, NPTEL, DistinguishedFaculty],
globals: [About, MTechAdmission, BTechAdmission, PhDAdmission, TimeTable, HODMessage],
```

Whenever a collection or global's fields change, its underlying Postgres schema needs to change too — that's what the migration files handle (see "Migrations" below).

## Collections (tables)

| Collection (slug) | What it stores | Notable fields |
|---|---|---|
| `users` | Admin panel login accounts | Just Payload's built-in auth fields (email, hashed password) — no custom fields defined |
| `media` | Every uploaded file (images, PDFs) across the whole site | `alt` (required alt text); the actual file is stored by Payload's upload handling |
| `faculty` | Regular faculty profiles | `faculty_name`, `faculty_designation`, `faculty_email`, `faculty_office`, `faculty_phd_detail`, `faculty_research_interests[]`, `faculty_publications[]`, `faculty_course_taught[]`, links to `faculty_image`/`faculty_cv` (→ `media`) |
| `distinguished-faculty` | Distinguished faculty profiles | Same shape as `faculty` |
| `adjunct-faculty` | Adjunct faculty profiles | Same shape as `faculty`, fields prefixed `adjunct_` |
| `professors-in-practice` | Professors of Practice profiles | Same shape as `faculty`, fields prefixed `pop_` |
| `staff` | Non-faculty department staff | `staff_image` (→ `media`) plus other identifying fields |
| `btech`, `mtech`, `phd` | Current student directories by program | Name, roll number, batch; `phd` additionally has advisor, lab, research topic/interests, TA course history |
| `alumni` | Alumni directory | `alumni_student_name`, `alumni_degree` (select), `alumni_batch` |
| `news` | News items shown on the homepage/News page | `news_title`, `news_tag`, `news_date`, `news_short_description`, `news_read_more_description`, `news_web_page`, `news_image` (→ `media`) |
| `events` | Events shown on the homepage/Events calendar | `events_title`, `events_tag`, `events_date` (day + time), `events_description`, `events_venue`, `events_image` (→ `media`), `events_web_page`, `events_pdf_broucher_link` |
| `placements` | Yearly placement statistics | `year`, `btech_placements[]`/`mtech_placements[]` (each entry: registered/placed student counts, min/max/median CTC), `companiesHired[]` |
| `researchareas` | Research area listings | `research_area_name`, `research_area_photo[]` (→ `media`), `research_areas[]` (sub-areas), `about_research_area`, `research_areas_associated_faculty` (→ `faculty`) |
| `researchfacilities` | Shared research facilities/equipment | `research_facility_name`, `_location`, `_fic` (faculty-in-charge), `_fic_email`, `_staff_incharge`, `_usage_charges` (→ `media`), `_forms` (→ `media`), `_image_url` (→ `media`), `priority` (select), `writeup` |
| `projects` | Sponsored/funded research projects | `project_title`, `project_pi`, `project_duration`, `project_agency`, `project_type` (select), `project_status` (select) |
| `collaborations` | Institutional/industry collaborations | `logo` (→ `media`), `collaboration_type` (select) |
| `books` | Books authored by faculty | `book_name`, `book_associated_faculty` (→ `faculty`), `book_cover_page` (→ `media`) |
| `nptel-lectures` | NPTEL course listings by faculty | `nptel_course_name`, `nptel_course_link`, `course_associated_faculty` (→ `faculty`) |
| `btech-p`, `mtech-p`, `phd-p` | Academic *program* content (curriculum, handbooks) for B.Tech/M.Tech/PhD — distinct from the `btech`/`mtech`/`phd` *student directories* above | Program descriptions, curriculum arrays, links to handbook/brochure files (→ `media`) |

## Globals (single-record tables)

| Global (slug) | What it stores |
|---|---|
| `about` | The "About" page content: department description, thrust areas, HOD-adjacent content, `department_brochure` (→ `media`) |
| `hod-message` | The Head of Department's message; `select_hod` references a record in `faculty` (→ `faculty`) |
| `btech-admission`, `mtech-admission`, `phd-admission` | Admissions page content per program, including brochure/link files (→ `media`) |
| `timetable` | The academic timetable shown on `academia/timetable` |

## Relationships

```text
faculty ◀──────────────┬── researchareas.research_areas_associated_faculty
                        ├── books.book_associated_faculty
                        ├── nptel-lectures.course_associated_faculty
                        └── hod-message.select_hod

media ◀── (referenced by nearly every collection/global for images, CVs, brochures, forms —
           faculty, distinguished-faculty, adjunct-faculty, professors-in-practice, staff,
           news, events, collaborations, books, researchareas, researchfacilities,
           btech-p, mtech-p, phd-p, about, hod-message-adjacent globals, admission globals)

users     — standalone; not referenced by any content collection, used only for admin auth
```

Every "profile picture," "CV upload," "brochure," or "logo" field across the schema is a `relationship`/`upload` field pointing at the `media` collection — Payload stores the relation as a foreign key to `media`'s `id`, and the actual binary file lives on disk (or wherever the upload adapter is configured to store it) with `media` holding the metadata (including `alt` text).

`faculty` is the only collection referenced *from* other collections as a relationship target (via `researchareas`, `books`, `nptel-lectures`, and the `hod-message` global) — no other content collection is cross-referenced this way. **Needs verification:** whether `staff`, `distinguished-faculty`, `adjunct-faculty`, and `professors-in-practice` were intentionally left out of these cross-references (e.g. a research area associated with an adjunct faculty member currently has no way to be modeled) or whether that's a gap in the schema.

## Indexes

No custom indexes are defined in any collection/global config. Indexing (beyond whatever Payload/Postgres create automatically for primary keys and relationship foreign keys) is handled entirely by Payload's defaults.

## How the application accesses the database

Exclusively through Payload:

- **Frontend pages** call the local API — `const payload = await getPayload({ config }); payload.find({ collection: "..." })` / `payload.findByID(...)` / `payload.findGlobal(...)` — directly inside server components (see `src/app/(frontend)/**/page.js`).
- **Payload's admin panel and generated REST/GraphQL API** (`src/app/(payload)/`) also go through the same underlying Payload instance.
- **`src/app/my-route/route.ts`** is the only custom route that queries the database directly, via `payload.find({ collection: "users" })`.

There is no direct `pg`/SQL client usage anywhere in `src/`.

## Migrations

Located in `src/migrations/`, each with a `.ts` file (the up/down migration logic) and a matching `.json` file (a schema snapshot). They're aggregated in `src/migrations/index.ts` and registered with Payload automatically.

```bash
# After changing a collection/global's fields:
pnpm generate      # payload migrate:create — generates a new migration from the config diff
pnpm migrate        # payload migrate — applies pending migrations to the database
```

Migration file names are timestamps (e.g. `20260825_064243`), reflecting when each schema change was generated.