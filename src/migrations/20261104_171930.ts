import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_application_form_id" integer;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_application_form_id_media_id_fk" FOREIGN KEY ("research_facility_application_form_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "researchfacilities_research_facility_application_form_idx" ON "researchfacilities" USING btree ("research_facility_application_form_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "researchfacilities" DROP CONSTRAINT "researchfacilities_research_facility_application_form_id_media_id_fk";
  
  DROP INDEX "researchfacilities_research_facility_application_form_idx";
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_application_form_id";`)
}
