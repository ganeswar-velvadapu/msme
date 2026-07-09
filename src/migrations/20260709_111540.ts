import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_usage_charges_id" integer;
  ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_forms_id" integer;
  ALTER TABLE "staff" ADD COLUMN "staff_personal_webpage" varchar;
  ALTER TABLE "about" ADD COLUMN "department_brochure_id" integer;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_usage_charges_id_media_id_fk" FOREIGN KEY ("research_facility_usage_charges_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_forms_id_media_id_fk" FOREIGN KEY ("research_facility_forms_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about" ADD CONSTRAINT "about_department_brochure_id_media_id_fk" FOREIGN KEY ("department_brochure_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "researchfacilities_research_facility_usage_charges_idx" ON "researchfacilities" USING btree ("research_facility_usage_charges_id");
  CREATE INDEX "researchfacilities_research_facility_forms_idx" ON "researchfacilities" USING btree ("research_facility_forms_id");
  CREATE INDEX "about_department_brochure_idx" ON "about" USING btree ("department_brochure_id");
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_usage_charges";
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_forms";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "researchfacilities" DROP CONSTRAINT "researchfacilities_research_facility_usage_charges_id_media_id_fk";
  
  ALTER TABLE "researchfacilities" DROP CONSTRAINT "researchfacilities_research_facility_forms_id_media_id_fk";
  
  ALTER TABLE "about" DROP CONSTRAINT "about_department_brochure_id_media_id_fk";
  
  DROP INDEX "researchfacilities_research_facility_usage_charges_idx";
  DROP INDEX "researchfacilities_research_facility_forms_idx";
  DROP INDEX "about_department_brochure_idx";
  ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_usage_charges" varchar;
  ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_forms" varchar;
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_usage_charges_id";
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_forms_id";
  ALTER TABLE "staff" DROP COLUMN "staff_personal_webpage";
  ALTER TABLE "about" DROP COLUMN "department_brochure_id";`)
}
