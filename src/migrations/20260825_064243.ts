import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "btech_p_curriculum_curriculum_files" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"curriculum_heading" varchar NOT NULL,
  	"curriculum_file_id" integer NOT NULL
  );
  
  ALTER TABLE "btech_p" DROP CONSTRAINT "btech_p_curriculum_msme_curriculum_link_id_media_id_fk";
  
  DROP INDEX "btech_p_curriculum_curriculum_msme_curriculum_link_idx";
  ALTER TABLE "btech_p_curriculum_curriculum_files" ADD CONSTRAINT "btech_p_curriculum_curriculum_files_curriculum_file_id_media_id_fk" FOREIGN KEY ("curriculum_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btech_p_curriculum_curriculum_files" ADD CONSTRAINT "btech_p_curriculum_curriculum_files_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."btech_p"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "btech_p_curriculum_curriculum_files_order_idx" ON "btech_p_curriculum_curriculum_files" USING btree ("_order");
  CREATE INDEX "btech_p_curriculum_curriculum_files_parent_id_idx" ON "btech_p_curriculum_curriculum_files" USING btree ("_parent_id");
  CREATE INDEX "btech_p_curriculum_curriculum_files_curriculum_file_idx" ON "btech_p_curriculum_curriculum_files" USING btree ("curriculum_file_id");
  ALTER TABLE "btech_p" DROP COLUMN "curriculum_msme_curriculum_link_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "btech_p_curriculum_curriculum_files" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "btech_p_curriculum_curriculum_files" CASCADE;
  ALTER TABLE "btech_p" ADD COLUMN "curriculum_msme_curriculum_link_id" integer;
  ALTER TABLE "btech_p" ADD CONSTRAINT "btech_p_curriculum_msme_curriculum_link_id_media_id_fk" FOREIGN KEY ("curriculum_msme_curriculum_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "btech_p_curriculum_curriculum_msme_curriculum_link_idx" ON "btech_p" USING btree ("curriculum_msme_curriculum_link_id");`)
}
