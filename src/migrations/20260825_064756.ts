import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "btech_p_curriculum_curriculum_files" ALTER COLUMN "curriculum_heading" DROP NOT NULL;
  ALTER TABLE "btech_p_curriculum_curriculum_files" ALTER COLUMN "curriculum_file_id" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "btech_p_curriculum_curriculum_files" ALTER COLUMN "curriculum_heading" SET NOT NULL;
  ALTER TABLE "btech_p_curriculum_curriculum_files" ALTER COLUMN "curriculum_file_id" SET NOT NULL;`)
}
