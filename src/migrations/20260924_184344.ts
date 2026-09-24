import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "researchfacilities" DROP CONSTRAINT "researchfacilities_research_facility_usage_charges_id_media_id_fk";
  
  ALTER TABLE "researchfacilities" DROP CONSTRAINT "researchfacilities_research_facility_forms_id_media_id_fk";
  
  DROP INDEX "researchfacilities_research_facility_usage_charges_idx";
  DROP INDEX "researchfacilities_research_facility_forms_idx";
  ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_usage_file_id" integer;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_usage_file_id_media_id_fk" FOREIGN KEY ("research_facility_usage_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "researchfacilities_research_facility_usage_file_idx" ON "researchfacilities" USING btree ("research_facility_usage_file_id");
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_usage_charges_id";
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_forms_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "researchfacilities" DROP CONSTRAINT "researchfacilities_research_facility_usage_file_id_media_id_fk";
  
  DROP INDEX "researchfacilities_research_facility_usage_file_idx";
  ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_usage_charges_id" integer;
  ALTER TABLE "researchfacilities" ADD COLUMN "research_facility_forms_id" integer;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_usage_charges_id_media_id_fk" FOREIGN KEY ("research_facility_usage_charges_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_forms_id_media_id_fk" FOREIGN KEY ("research_facility_forms_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "researchfacilities_research_facility_usage_charges_idx" ON "researchfacilities" USING btree ("research_facility_usage_charges_id");
  CREATE INDEX "researchfacilities_research_facility_forms_idx" ON "researchfacilities" USING btree ("research_facility_forms_id");
  ALTER TABLE "researchfacilities" DROP COLUMN "research_facility_usage_file_id";`)
}
