import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_researchfacilities_priority" AS ENUM('high', 'low');
  CREATE TYPE "public"."enum_projects_project_type" AS ENUM('Consultancy Projects', 'Research Projects');
  CREATE TYPE "public"."enum_projects_project_status" AS ENUM('Ongoing', 'Completed');
  CREATE TYPE "public"."enum_collaborations_collaboration_type" AS ENUM('Industrial Collaboration', 'Institutional Collaboration');
  CREATE TYPE "public"."enum_alumni_alumni_degree" AS ENUM('B.Tech.', 'M.Tech.', 'PhD');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "placements_btech_placements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"registered_students" numeric,
  	"placed_students" numeric,
  	"min_c_t_c" numeric,
  	"max_c_t_c" numeric,
  	"median_c_t_c" numeric
  );
  
  CREATE TABLE "placements_mtech_placements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"registered_students" numeric,
  	"placed_students" numeric,
  	"min_c_t_c" numeric,
  	"max_c_t_c" numeric,
  	"median_c_t_c" numeric
  );
  
  CREATE TABLE "placements_companies_hired" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"company_name" varchar
  );
  
  CREATE TABLE "placements" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"news_tag" varchar,
  	"news_date" timestamp(3) with time zone,
  	"news_title" varchar,
  	"news_short_description" varchar,
  	"news_read_more_description" varchar,
  	"news_web_page" varchar,
  	"news_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"events_tag" varchar,
  	"events_date" timestamp(3) with time zone,
  	"events_title" varchar,
  	"events_description" varchar,
  	"events_venue" varchar,
  	"events_image_id" integer,
  	"events_web_page" varchar,
  	"events_pdf_broucher_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "researchareas_research_area_photo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "researchareas_research_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_area_type" varchar
  );
  
  CREATE TABLE "researchareas" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"research_area_name" varchar,
  	"about_research_area" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "researchareas_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"faculty_id" integer
  );
  
  CREATE TABLE "researchfacilities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"research_facility_name" varchar NOT NULL,
  	"research_facility_location" varchar,
  	"research_facility_fic" varchar,
  	"research_facility_fic_email" varchar,
  	"research_facility_staff_incharge" varchar,
  	"research_facility_usage_charges" varchar,
  	"research_facility_forms" varchar,
  	"research_facility_image_url_id" integer,
  	"priority" "enum_researchfacilities_priority" DEFAULT 'low' NOT NULL,
  	"writeup" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_title" varchar,
  	"project_pi" varchar,
  	"project_duration" varchar,
  	"project_agency" varchar,
  	"project_type" "enum_projects_project_type",
  	"project_status" "enum_projects_project_status",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "collaborations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"collaboration_type" "enum_collaborations_collaboration_type",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faculty_faculty_research_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_interest_faculty" varchar
  );
  
  CREATE TABLE "faculty_faculty_publications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_publication" varchar
  );
  
  CREATE TABLE "faculty_faculty_course_taught" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_course_code" varchar,
  	"faculty_course_name" varchar
  );
  
  CREATE TABLE "faculty" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"faculty_image_id" integer,
  	"faculty_group_web_page" varchar,
  	"faculty_cv_id" integer,
  	"linked_in_faculty" varchar,
  	"google_scholar_url" varchar,
  	"scopus_id" varchar,
  	"orcid_id" varchar,
  	"faculty_name" varchar,
  	"faculty_designation" varchar,
  	"faculty_email" varchar,
  	"faculty_phd_detail" varchar,
  	"faculty_office" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "staff_staff_research_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_interest_staff" varchar
  );
  
  CREATE TABLE "staff_fic_staff" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fic_staff_option" varchar
  );
  
  CREATE TABLE "staff" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"staff_image_id" integer,
  	"staff_name" varchar,
  	"staff_designation" varchar,
  	"staff_email" varchar,
  	"staff_education" varchar,
  	"staff_office" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btech" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"btech_student_name" varchar,
  	"btech_roll_no" varchar,
  	"btech_batch" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "mtech" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"mtech_student_name" varchar,
  	"mtech_roll_no" varchar,
  	"mtech_batch" varchar,
  	"mtech_specialization" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "phd_phd_research_interest" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_interest_phd" varchar
  );
  
  CREATE TABLE "phd_phd_course_ta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phd_course_code" varchar,
  	"phd_course_name" varchar
  );
  
  CREATE TABLE "phd" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"phd_image_id" integer,
  	"phd_name" varchar,
  	"phd_roll_no" varchar,
  	"phd_email" varchar,
  	"phd_masters" varchar,
  	"phd_lab" varchar,
  	"phd_bachelors" varchar,
  	"phd_advisor" varchar,
  	"phd_research_topic" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "alumni" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alumni_student_name" varchar,
  	"alumni_degree" "enum_alumni_alumni_degree",
  	"alumni_batch" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btech_p_curriculum_about_curriculum" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"curriculum_description" varchar
  );
  
  CREATE TABLE "btech_p" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about_about_btech_program" varchar,
  	"about_program_section_btech_program" varchar,
  	"about_program_section_btech_program_descriptiom" varchar,
  	"about_academic_handbook_link_id" integer,
  	"curriculum_msme_curriculum_link_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "mtech_p_specializations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"brochure_link_id" integer,
  	"curriculum_link_id" integer,
  	"course_and_thesis" varchar
  );
  
  CREATE TABLE "mtech_p" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "phd_p" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about" varchar,
  	"brochure_link_id" integer,
  	"curriculum_link_id" integer,
  	"course_and_thesis" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "adjunct_faculty_adjunct_faculty_research_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_interest_faculty" varchar
  );
  
  CREATE TABLE "adjunct_faculty_adjunct_faculty_publications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_publication" varchar
  );
  
  CREATE TABLE "adjunct_faculty_adjunct_faculty_course_taught" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_course_code" varchar,
  	"faculty_course_name" varchar
  );
  
  CREATE TABLE "adjunct_faculty" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"adjunct_faculty_image_id" integer,
  	"adjunct_faculty_group_web_page" varchar,
  	"adjunct_faculty_cv_id" integer,
  	"adjunct_linked_in_faculty" varchar,
  	"adjunct_google_scholar_url" varchar,
  	"adjunct_scopus_id" varchar,
  	"adjunct_orcid_id" varchar,
  	"adjunct_faculty_name" varchar,
  	"adjunct_faculty_designation" varchar,
  	"adjunct_faculty_email" varchar,
  	"adjunct_faculty_phd_detail" varchar,
  	"adjunct_faculty_office" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "professors_in_practice_pop_faculty_research_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_interest_faculty" varchar
  );
  
  CREATE TABLE "professors_in_practice_pop_faculty_publications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_publication" varchar
  );
  
  CREATE TABLE "professors_in_practice_pop_faculty_course_taught" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_course_code" varchar,
  	"faculty_course_name" varchar
  );
  
  CREATE TABLE "professors_in_practice" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"pop_faculty_image_id" integer,
  	"pop_faculty_group_web_page" varchar,
  	"pop_faculty_cv_id" integer,
  	"pop_linked_in_faculty" varchar,
  	"pop_google_scholar_url" varchar,
  	"pop_scopus_id" varchar,
  	"pop_orcid_id" varchar,
  	"pop_faculty_name" varchar,
  	"pop_faculty_designation" varchar,
  	"pop_faculty_email" varchar,
  	"pop_faculty_phd_detail" varchar,
  	"pop_faculty_office" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "books" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"book_name" varchar,
  	"book_cover_page_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "books_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"faculty_id" integer
  );
  
  CREATE TABLE "nptel_lectures" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nptel_course_name" varchar,
  	"nptel_course_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "nptel_lectures_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"faculty_id" integer
  );
  
  CREATE TABLE "distinguished_faculty_faculty_research_interests" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"research_interest_faculty" varchar
  );
  
  CREATE TABLE "distinguished_faculty_faculty_publications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_publication" varchar
  );
  
  CREATE TABLE "distinguished_faculty_faculty_course_taught" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_course_code" varchar,
  	"faculty_course_name" varchar
  );
  
  CREATE TABLE "distinguished_faculty" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"faculty_image_id" integer,
  	"faculty_group_web_page" varchar,
  	"faculty_cv_id" integer,
  	"linked_in_faculty" varchar,
  	"google_scholar_url" varchar,
  	"scopus_id" varchar,
  	"orcid_id" varchar,
  	"faculty_name" varchar,
  	"faculty_designation" varchar,
  	"faculty_email" varchar,
  	"faculty_phd_detail" varchar,
  	"faculty_office" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"placements_id" integer,
  	"news_id" integer,
  	"events_id" integer,
  	"researchareas_id" integer,
  	"researchfacilities_id" integer,
  	"projects_id" integer,
  	"collaborations_id" integer,
  	"faculty_id" integer,
  	"staff_id" integer,
  	"btech_id" integer,
  	"mtech_id" integer,
  	"phd_id" integer,
  	"alumni_id" integer,
  	"btech_p_id" integer,
  	"mtech_p_id" integer,
  	"phd_p_id" integer,
  	"adjunct_faculty_id" integer,
  	"professors_in_practice_id" integer,
  	"books_id" integer,
  	"nptel_lectures_id" integer,
  	"distinguished_faculty_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "about_about_the_department_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"thrust" varchar,
  	"thrust_area" varchar
  );
  
  CREATE TABLE "about_timeline_at_iith" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"timeline_content" varchar
  );
  
  CREATE TABLE "about_explore" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"program_name" varchar,
  	"link_to_program" varchar
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about_msme" varchar DEFAULT 'Materials Science is an interdisciplinary branch of engineering that deals with the discovery and design of materials for nanotechnology, manufacturing, semiconductor, biomedical, and energy applications. The branch''s core involves building materials via various synthesis and processing routes, followed by experimentally and computationally characterizing materials'' innate crystal structure and unique properties, and ultimately maximizing their performance, efficiency, and sustainability in real-world applications. Modern metallurgists explore innovative processing routes to transform minerals into metals and work in an interdisciplinary team alongside materials scientists to design metals for extraction in batteries, light-weight manufacturing, and for space as well as extreme environments. ',
  	"about_msme_image_id" integer,
  	"about_the_department_description" varchar,
  	"vision" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "mtech_admissions_specializations_eligibility" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"details" varchar
  );
  
  CREATE TABLE "mtech_admissions_specializations_admission_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"details" varchar
  );
  
  CREATE TABLE "mtech_admissions_specializations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"brochure_id" integer
  );
  
  CREATE TABLE "mtech_admissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "btech_admissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"admission_process_btech" varchar,
  	"link_to_jee_website" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "phd_admissions_external_fellowships" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_name" varchar,
  	"link_url" varchar
  );
  
  CREATE TABLE "phd_admissions_phd_types_brochure_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_text" varchar,
  	"link_file_id" integer
  );
  
  CREATE TABLE "phd_admissions_phd_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phd_type_name" varchar,
  	"eligibility" varchar,
  	"admission_process" varchar
  );
  
  CREATE TABLE "phd_admissions_faculty_research_research_topics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"topic" varchar NOT NULL
  );
  
  CREATE TABLE "phd_admissions_faculty_research" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faculty_name" varchar NOT NULL
  );
  
  CREATE TABLE "phd_admissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"general_writeup" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "timetable_time_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"time_table_year" varchar,
  	"time_table_link" varchar
  );
  
  CREATE TABLE "timetable" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "hod_message" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hod_message" varchar,
  	"select_hod_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "placements_btech_placements" ADD CONSTRAINT "placements_btech_placements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."placements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "placements_mtech_placements" ADD CONSTRAINT "placements_mtech_placements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."placements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "placements_companies_hired" ADD CONSTRAINT "placements_companies_hired_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."placements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news" ADD CONSTRAINT "news_news_image_id_media_id_fk" FOREIGN KEY ("news_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_events_image_id_media_id_fk" FOREIGN KEY ("events_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "researchareas_research_area_photo" ADD CONSTRAINT "researchareas_research_area_photo_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "researchareas_research_area_photo" ADD CONSTRAINT "researchareas_research_area_photo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."researchareas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "researchareas_research_areas" ADD CONSTRAINT "researchareas_research_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."researchareas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "researchareas_rels" ADD CONSTRAINT "researchareas_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."researchareas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "researchareas_rels" ADD CONSTRAINT "researchareas_rels_faculty_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "researchfacilities" ADD CONSTRAINT "researchfacilities_research_facility_image_url_id_media_id_fk" FOREIGN KEY ("research_facility_image_url_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "collaborations" ADD CONSTRAINT "collaborations_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faculty_faculty_research_interests" ADD CONSTRAINT "faculty_faculty_research_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faculty_faculty_publications" ADD CONSTRAINT "faculty_faculty_publications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faculty_faculty_course_taught" ADD CONSTRAINT "faculty_faculty_course_taught_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faculty" ADD CONSTRAINT "faculty_faculty_image_id_media_id_fk" FOREIGN KEY ("faculty_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faculty" ADD CONSTRAINT "faculty_faculty_cv_id_media_id_fk" FOREIGN KEY ("faculty_cv_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "staff_staff_research_interests" ADD CONSTRAINT "staff_staff_research_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff_fic_staff" ADD CONSTRAINT "staff_fic_staff_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "staff" ADD CONSTRAINT "staff_staff_image_id_media_id_fk" FOREIGN KEY ("staff_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "phd_phd_research_interest" ADD CONSTRAINT "phd_phd_research_interest_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_phd_course_ta" ADD CONSTRAINT "phd_phd_course_ta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd" ADD CONSTRAINT "phd_phd_image_id_media_id_fk" FOREIGN KEY ("phd_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btech_p_curriculum_about_curriculum" ADD CONSTRAINT "btech_p_curriculum_about_curriculum_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."btech_p"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btech_p" ADD CONSTRAINT "btech_p_about_academic_handbook_link_id_media_id_fk" FOREIGN KEY ("about_academic_handbook_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btech_p" ADD CONSTRAINT "btech_p_curriculum_msme_curriculum_link_id_media_id_fk" FOREIGN KEY ("curriculum_msme_curriculum_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "mtech_p_specializations" ADD CONSTRAINT "mtech_p_specializations_brochure_link_id_media_id_fk" FOREIGN KEY ("brochure_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "mtech_p_specializations" ADD CONSTRAINT "mtech_p_specializations_curriculum_link_id_media_id_fk" FOREIGN KEY ("curriculum_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "mtech_p_specializations" ADD CONSTRAINT "mtech_p_specializations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mtech_p"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_p" ADD CONSTRAINT "phd_p_brochure_link_id_media_id_fk" FOREIGN KEY ("brochure_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "phd_p" ADD CONSTRAINT "phd_p_curriculum_link_id_media_id_fk" FOREIGN KEY ("curriculum_link_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "adjunct_faculty_adjunct_faculty_research_interests" ADD CONSTRAINT "adjunct_faculty_adjunct_faculty_research_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."adjunct_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "adjunct_faculty_adjunct_faculty_publications" ADD CONSTRAINT "adjunct_faculty_adjunct_faculty_publications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."adjunct_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "adjunct_faculty_adjunct_faculty_course_taught" ADD CONSTRAINT "adjunct_faculty_adjunct_faculty_course_taught_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."adjunct_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "adjunct_faculty" ADD CONSTRAINT "adjunct_faculty_adjunct_faculty_image_id_media_id_fk" FOREIGN KEY ("adjunct_faculty_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "adjunct_faculty" ADD CONSTRAINT "adjunct_faculty_adjunct_faculty_cv_id_media_id_fk" FOREIGN KEY ("adjunct_faculty_cv_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professors_in_practice_pop_faculty_research_interests" ADD CONSTRAINT "professors_in_practice_pop_faculty_research_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professors_in_practice"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professors_in_practice_pop_faculty_publications" ADD CONSTRAINT "professors_in_practice_pop_faculty_publications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professors_in_practice"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professors_in_practice_pop_faculty_course_taught" ADD CONSTRAINT "professors_in_practice_pop_faculty_course_taught_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professors_in_practice"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professors_in_practice" ADD CONSTRAINT "professors_in_practice_pop_faculty_image_id_media_id_fk" FOREIGN KEY ("pop_faculty_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professors_in_practice" ADD CONSTRAINT "professors_in_practice_pop_faculty_cv_id_media_id_fk" FOREIGN KEY ("pop_faculty_cv_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "books" ADD CONSTRAINT "books_book_cover_page_id_media_id_fk" FOREIGN KEY ("book_cover_page_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "books_rels" ADD CONSTRAINT "books_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "books_rels" ADD CONSTRAINT "books_rels_faculty_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nptel_lectures_rels" ADD CONSTRAINT "nptel_lectures_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."nptel_lectures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nptel_lectures_rels" ADD CONSTRAINT "nptel_lectures_rels_faculty_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "distinguished_faculty_faculty_research_interests" ADD CONSTRAINT "distinguished_faculty_faculty_research_interests_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."distinguished_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "distinguished_faculty_faculty_publications" ADD CONSTRAINT "distinguished_faculty_faculty_publications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."distinguished_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "distinguished_faculty_faculty_course_taught" ADD CONSTRAINT "distinguished_faculty_faculty_course_taught_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."distinguished_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "distinguished_faculty" ADD CONSTRAINT "distinguished_faculty_faculty_image_id_media_id_fk" FOREIGN KEY ("faculty_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "distinguished_faculty" ADD CONSTRAINT "distinguished_faculty_faculty_cv_id_media_id_fk" FOREIGN KEY ("faculty_cv_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_placements_fk" FOREIGN KEY ("placements_id") REFERENCES "public"."placements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_researchareas_fk" FOREIGN KEY ("researchareas_id") REFERENCES "public"."researchareas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_researchfacilities_fk" FOREIGN KEY ("researchfacilities_id") REFERENCES "public"."researchfacilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_collaborations_fk" FOREIGN KEY ("collaborations_id") REFERENCES "public"."collaborations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faculty_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_staff_fk" FOREIGN KEY ("staff_id") REFERENCES "public"."staff"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_btech_fk" FOREIGN KEY ("btech_id") REFERENCES "public"."btech"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_mtech_fk" FOREIGN KEY ("mtech_id") REFERENCES "public"."mtech"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_phd_fk" FOREIGN KEY ("phd_id") REFERENCES "public"."phd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_alumni_fk" FOREIGN KEY ("alumni_id") REFERENCES "public"."alumni"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_btech_p_fk" FOREIGN KEY ("btech_p_id") REFERENCES "public"."btech_p"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_mtech_p_fk" FOREIGN KEY ("mtech_p_id") REFERENCES "public"."mtech_p"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_phd_p_fk" FOREIGN KEY ("phd_p_id") REFERENCES "public"."phd_p"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_adjunct_faculty_fk" FOREIGN KEY ("adjunct_faculty_id") REFERENCES "public"."adjunct_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_professors_in_practice_fk" FOREIGN KEY ("professors_in_practice_id") REFERENCES "public"."professors_in_practice"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_books_fk" FOREIGN KEY ("books_id") REFERENCES "public"."books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_nptel_lectures_fk" FOREIGN KEY ("nptel_lectures_id") REFERENCES "public"."nptel_lectures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_distinguished_faculty_fk" FOREIGN KEY ("distinguished_faculty_id") REFERENCES "public"."distinguished_faculty"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_about_the_department_sections" ADD CONSTRAINT "about_about_the_department_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_timeline_at_iith" ADD CONSTRAINT "about_timeline_at_iith_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_explore" ADD CONSTRAINT "about_explore_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about" ADD CONSTRAINT "about_about_msme_image_id_media_id_fk" FOREIGN KEY ("about_msme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "mtech_admissions_specializations_eligibility" ADD CONSTRAINT "mtech_admissions_specializations_eligibility_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mtech_admissions_specializations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "mtech_admissions_specializations_admission_process" ADD CONSTRAINT "mtech_admissions_specializations_admission_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mtech_admissions_specializations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "mtech_admissions_specializations" ADD CONSTRAINT "mtech_admissions_specializations_brochure_id_media_id_fk" FOREIGN KEY ("brochure_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "mtech_admissions_specializations" ADD CONSTRAINT "mtech_admissions_specializations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mtech_admissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_admissions_external_fellowships" ADD CONSTRAINT "phd_admissions_external_fellowships_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd_admissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_admissions_phd_types_brochure_links" ADD CONSTRAINT "phd_admissions_phd_types_brochure_links_link_file_id_media_id_fk" FOREIGN KEY ("link_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "phd_admissions_phd_types_brochure_links" ADD CONSTRAINT "phd_admissions_phd_types_brochure_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd_admissions_phd_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_admissions_phd_types" ADD CONSTRAINT "phd_admissions_phd_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd_admissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_admissions_faculty_research_research_topics" ADD CONSTRAINT "phd_admissions_faculty_research_research_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd_admissions_faculty_research"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "phd_admissions_faculty_research" ADD CONSTRAINT "phd_admissions_faculty_research_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."phd_admissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "timetable_time_table" ADD CONSTRAINT "timetable_time_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."timetable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hod_message" ADD CONSTRAINT "hod_message_select_hod_id_faculty_id_fk" FOREIGN KEY ("select_hod_id") REFERENCES "public"."faculty"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "placements_btech_placements_order_idx" ON "placements_btech_placements" USING btree ("_order");
  CREATE INDEX "placements_btech_placements_parent_id_idx" ON "placements_btech_placements" USING btree ("_parent_id");
  CREATE INDEX "placements_mtech_placements_order_idx" ON "placements_mtech_placements" USING btree ("_order");
  CREATE INDEX "placements_mtech_placements_parent_id_idx" ON "placements_mtech_placements" USING btree ("_parent_id");
  CREATE INDEX "placements_companies_hired_order_idx" ON "placements_companies_hired" USING btree ("_order");
  CREATE INDEX "placements_companies_hired_parent_id_idx" ON "placements_companies_hired" USING btree ("_parent_id");
  CREATE INDEX "placements_updated_at_idx" ON "placements" USING btree ("updated_at");
  CREATE INDEX "placements_created_at_idx" ON "placements" USING btree ("created_at");
  CREATE INDEX "news_news_image_idx" ON "news" USING btree ("news_image_id");
  CREATE INDEX "news_updated_at_idx" ON "news" USING btree ("updated_at");
  CREATE INDEX "news_created_at_idx" ON "news" USING btree ("created_at");
  CREATE INDEX "events_events_image_idx" ON "events" USING btree ("events_image_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "researchareas_research_area_photo_order_idx" ON "researchareas_research_area_photo" USING btree ("_order");
  CREATE INDEX "researchareas_research_area_photo_parent_id_idx" ON "researchareas_research_area_photo" USING btree ("_parent_id");
  CREATE INDEX "researchareas_research_area_photo_image_idx" ON "researchareas_research_area_photo" USING btree ("image_id");
  CREATE INDEX "researchareas_research_areas_order_idx" ON "researchareas_research_areas" USING btree ("_order");
  CREATE INDEX "researchareas_research_areas_parent_id_idx" ON "researchareas_research_areas" USING btree ("_parent_id");
  CREATE INDEX "researchareas_updated_at_idx" ON "researchareas" USING btree ("updated_at");
  CREATE INDEX "researchareas_created_at_idx" ON "researchareas" USING btree ("created_at");
  CREATE INDEX "researchareas_rels_order_idx" ON "researchareas_rels" USING btree ("order");
  CREATE INDEX "researchareas_rels_parent_idx" ON "researchareas_rels" USING btree ("parent_id");
  CREATE INDEX "researchareas_rels_path_idx" ON "researchareas_rels" USING btree ("path");
  CREATE INDEX "researchareas_rels_faculty_id_idx" ON "researchareas_rels" USING btree ("faculty_id");
  CREATE INDEX "researchfacilities_research_facility_image_url_idx" ON "researchfacilities" USING btree ("research_facility_image_url_id");
  CREATE INDEX "researchfacilities_updated_at_idx" ON "researchfacilities" USING btree ("updated_at");
  CREATE INDEX "researchfacilities_created_at_idx" ON "researchfacilities" USING btree ("created_at");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "collaborations_logo_idx" ON "collaborations" USING btree ("logo_id");
  CREATE INDEX "collaborations_updated_at_idx" ON "collaborations" USING btree ("updated_at");
  CREATE INDEX "collaborations_created_at_idx" ON "collaborations" USING btree ("created_at");
  CREATE INDEX "faculty_faculty_research_interests_order_idx" ON "faculty_faculty_research_interests" USING btree ("_order");
  CREATE INDEX "faculty_faculty_research_interests_parent_id_idx" ON "faculty_faculty_research_interests" USING btree ("_parent_id");
  CREATE INDEX "faculty_faculty_publications_order_idx" ON "faculty_faculty_publications" USING btree ("_order");
  CREATE INDEX "faculty_faculty_publications_parent_id_idx" ON "faculty_faculty_publications" USING btree ("_parent_id");
  CREATE INDEX "faculty_faculty_course_taught_order_idx" ON "faculty_faculty_course_taught" USING btree ("_order");
  CREATE INDEX "faculty_faculty_course_taught_parent_id_idx" ON "faculty_faculty_course_taught" USING btree ("_parent_id");
  CREATE INDEX "faculty_faculty_image_idx" ON "faculty" USING btree ("faculty_image_id");
  CREATE INDEX "faculty_faculty_cv_idx" ON "faculty" USING btree ("faculty_cv_id");
  CREATE INDEX "faculty_updated_at_idx" ON "faculty" USING btree ("updated_at");
  CREATE INDEX "faculty_created_at_idx" ON "faculty" USING btree ("created_at");
  CREATE INDEX "staff_staff_research_interests_order_idx" ON "staff_staff_research_interests" USING btree ("_order");
  CREATE INDEX "staff_staff_research_interests_parent_id_idx" ON "staff_staff_research_interests" USING btree ("_parent_id");
  CREATE INDEX "staff_fic_staff_order_idx" ON "staff_fic_staff" USING btree ("_order");
  CREATE INDEX "staff_fic_staff_parent_id_idx" ON "staff_fic_staff" USING btree ("_parent_id");
  CREATE INDEX "staff_staff_image_idx" ON "staff" USING btree ("staff_image_id");
  CREATE INDEX "staff_updated_at_idx" ON "staff" USING btree ("updated_at");
  CREATE INDEX "staff_created_at_idx" ON "staff" USING btree ("created_at");
  CREATE INDEX "btech_updated_at_idx" ON "btech" USING btree ("updated_at");
  CREATE INDEX "btech_created_at_idx" ON "btech" USING btree ("created_at");
  CREATE INDEX "mtech_updated_at_idx" ON "mtech" USING btree ("updated_at");
  CREATE INDEX "mtech_created_at_idx" ON "mtech" USING btree ("created_at");
  CREATE INDEX "phd_phd_research_interest_order_idx" ON "phd_phd_research_interest" USING btree ("_order");
  CREATE INDEX "phd_phd_research_interest_parent_id_idx" ON "phd_phd_research_interest" USING btree ("_parent_id");
  CREATE INDEX "phd_phd_course_ta_order_idx" ON "phd_phd_course_ta" USING btree ("_order");
  CREATE INDEX "phd_phd_course_ta_parent_id_idx" ON "phd_phd_course_ta" USING btree ("_parent_id");
  CREATE INDEX "phd_phd_image_idx" ON "phd" USING btree ("phd_image_id");
  CREATE INDEX "phd_updated_at_idx" ON "phd" USING btree ("updated_at");
  CREATE INDEX "phd_created_at_idx" ON "phd" USING btree ("created_at");
  CREATE INDEX "alumni_updated_at_idx" ON "alumni" USING btree ("updated_at");
  CREATE INDEX "alumni_created_at_idx" ON "alumni" USING btree ("created_at");
  CREATE INDEX "btech_p_curriculum_about_curriculum_order_idx" ON "btech_p_curriculum_about_curriculum" USING btree ("_order");
  CREATE INDEX "btech_p_curriculum_about_curriculum_parent_id_idx" ON "btech_p_curriculum_about_curriculum" USING btree ("_parent_id");
  CREATE INDEX "btech_p_about_about_academic_handbook_link_idx" ON "btech_p" USING btree ("about_academic_handbook_link_id");
  CREATE INDEX "btech_p_curriculum_curriculum_msme_curriculum_link_idx" ON "btech_p" USING btree ("curriculum_msme_curriculum_link_id");
  CREATE INDEX "btech_p_updated_at_idx" ON "btech_p" USING btree ("updated_at");
  CREATE INDEX "btech_p_created_at_idx" ON "btech_p" USING btree ("created_at");
  CREATE INDEX "mtech_p_specializations_order_idx" ON "mtech_p_specializations" USING btree ("_order");
  CREATE INDEX "mtech_p_specializations_parent_id_idx" ON "mtech_p_specializations" USING btree ("_parent_id");
  CREATE INDEX "mtech_p_specializations_brochure_link_idx" ON "mtech_p_specializations" USING btree ("brochure_link_id");
  CREATE INDEX "mtech_p_specializations_curriculum_link_idx" ON "mtech_p_specializations" USING btree ("curriculum_link_id");
  CREATE INDEX "mtech_p_updated_at_idx" ON "mtech_p" USING btree ("updated_at");
  CREATE INDEX "mtech_p_created_at_idx" ON "mtech_p" USING btree ("created_at");
  CREATE INDEX "phd_p_brochure_link_idx" ON "phd_p" USING btree ("brochure_link_id");
  CREATE INDEX "phd_p_curriculum_link_idx" ON "phd_p" USING btree ("curriculum_link_id");
  CREATE INDEX "phd_p_updated_at_idx" ON "phd_p" USING btree ("updated_at");
  CREATE INDEX "phd_p_created_at_idx" ON "phd_p" USING btree ("created_at");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_research_interests_order_idx" ON "adjunct_faculty_adjunct_faculty_research_interests" USING btree ("_order");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_research_interests_parent_id_idx" ON "adjunct_faculty_adjunct_faculty_research_interests" USING btree ("_parent_id");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_publications_order_idx" ON "adjunct_faculty_adjunct_faculty_publications" USING btree ("_order");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_publications_parent_id_idx" ON "adjunct_faculty_adjunct_faculty_publications" USING btree ("_parent_id");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_course_taught_order_idx" ON "adjunct_faculty_adjunct_faculty_course_taught" USING btree ("_order");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_course_taught_parent_id_idx" ON "adjunct_faculty_adjunct_faculty_course_taught" USING btree ("_parent_id");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_image_idx" ON "adjunct_faculty" USING btree ("adjunct_faculty_image_id");
  CREATE INDEX "adjunct_faculty_adjunct_faculty_cv_idx" ON "adjunct_faculty" USING btree ("adjunct_faculty_cv_id");
  CREATE INDEX "adjunct_faculty_updated_at_idx" ON "adjunct_faculty" USING btree ("updated_at");
  CREATE INDEX "adjunct_faculty_created_at_idx" ON "adjunct_faculty" USING btree ("created_at");
  CREATE INDEX "professors_in_practice_pop_faculty_research_interests_order_idx" ON "professors_in_practice_pop_faculty_research_interests" USING btree ("_order");
  CREATE INDEX "professors_in_practice_pop_faculty_research_interests_parent_id_idx" ON "professors_in_practice_pop_faculty_research_interests" USING btree ("_parent_id");
  CREATE INDEX "professors_in_practice_pop_faculty_publications_order_idx" ON "professors_in_practice_pop_faculty_publications" USING btree ("_order");
  CREATE INDEX "professors_in_practice_pop_faculty_publications_parent_id_idx" ON "professors_in_practice_pop_faculty_publications" USING btree ("_parent_id");
  CREATE INDEX "professors_in_practice_pop_faculty_course_taught_order_idx" ON "professors_in_practice_pop_faculty_course_taught" USING btree ("_order");
  CREATE INDEX "professors_in_practice_pop_faculty_course_taught_parent_id_idx" ON "professors_in_practice_pop_faculty_course_taught" USING btree ("_parent_id");
  CREATE INDEX "professors_in_practice_pop_faculty_image_idx" ON "professors_in_practice" USING btree ("pop_faculty_image_id");
  CREATE INDEX "professors_in_practice_pop_faculty_cv_idx" ON "professors_in_practice" USING btree ("pop_faculty_cv_id");
  CREATE INDEX "professors_in_practice_updated_at_idx" ON "professors_in_practice" USING btree ("updated_at");
  CREATE INDEX "professors_in_practice_created_at_idx" ON "professors_in_practice" USING btree ("created_at");
  CREATE INDEX "books_book_cover_page_idx" ON "books" USING btree ("book_cover_page_id");
  CREATE INDEX "books_updated_at_idx" ON "books" USING btree ("updated_at");
  CREATE INDEX "books_created_at_idx" ON "books" USING btree ("created_at");
  CREATE INDEX "books_rels_order_idx" ON "books_rels" USING btree ("order");
  CREATE INDEX "books_rels_parent_idx" ON "books_rels" USING btree ("parent_id");
  CREATE INDEX "books_rels_path_idx" ON "books_rels" USING btree ("path");
  CREATE INDEX "books_rels_faculty_id_idx" ON "books_rels" USING btree ("faculty_id");
  CREATE INDEX "nptel_lectures_updated_at_idx" ON "nptel_lectures" USING btree ("updated_at");
  CREATE INDEX "nptel_lectures_created_at_idx" ON "nptel_lectures" USING btree ("created_at");
  CREATE INDEX "nptel_lectures_rels_order_idx" ON "nptel_lectures_rels" USING btree ("order");
  CREATE INDEX "nptel_lectures_rels_parent_idx" ON "nptel_lectures_rels" USING btree ("parent_id");
  CREATE INDEX "nptel_lectures_rels_path_idx" ON "nptel_lectures_rels" USING btree ("path");
  CREATE INDEX "nptel_lectures_rels_faculty_id_idx" ON "nptel_lectures_rels" USING btree ("faculty_id");
  CREATE INDEX "distinguished_faculty_faculty_research_interests_order_idx" ON "distinguished_faculty_faculty_research_interests" USING btree ("_order");
  CREATE INDEX "distinguished_faculty_faculty_research_interests_parent_id_idx" ON "distinguished_faculty_faculty_research_interests" USING btree ("_parent_id");
  CREATE INDEX "distinguished_faculty_faculty_publications_order_idx" ON "distinguished_faculty_faculty_publications" USING btree ("_order");
  CREATE INDEX "distinguished_faculty_faculty_publications_parent_id_idx" ON "distinguished_faculty_faculty_publications" USING btree ("_parent_id");
  CREATE INDEX "distinguished_faculty_faculty_course_taught_order_idx" ON "distinguished_faculty_faculty_course_taught" USING btree ("_order");
  CREATE INDEX "distinguished_faculty_faculty_course_taught_parent_id_idx" ON "distinguished_faculty_faculty_course_taught" USING btree ("_parent_id");
  CREATE INDEX "distinguished_faculty_faculty_image_idx" ON "distinguished_faculty" USING btree ("faculty_image_id");
  CREATE INDEX "distinguished_faculty_faculty_cv_idx" ON "distinguished_faculty" USING btree ("faculty_cv_id");
  CREATE INDEX "distinguished_faculty_updated_at_idx" ON "distinguished_faculty" USING btree ("updated_at");
  CREATE INDEX "distinguished_faculty_created_at_idx" ON "distinguished_faculty" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_placements_id_idx" ON "payload_locked_documents_rels" USING btree ("placements_id");
  CREATE INDEX "payload_locked_documents_rels_news_id_idx" ON "payload_locked_documents_rels" USING btree ("news_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_researchareas_id_idx" ON "payload_locked_documents_rels" USING btree ("researchareas_id");
  CREATE INDEX "payload_locked_documents_rels_researchfacilities_id_idx" ON "payload_locked_documents_rels" USING btree ("researchfacilities_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_collaborations_id_idx" ON "payload_locked_documents_rels" USING btree ("collaborations_id");
  CREATE INDEX "payload_locked_documents_rels_faculty_id_idx" ON "payload_locked_documents_rels" USING btree ("faculty_id");
  CREATE INDEX "payload_locked_documents_rels_staff_id_idx" ON "payload_locked_documents_rels" USING btree ("staff_id");
  CREATE INDEX "payload_locked_documents_rels_btech_id_idx" ON "payload_locked_documents_rels" USING btree ("btech_id");
  CREATE INDEX "payload_locked_documents_rels_mtech_id_idx" ON "payload_locked_documents_rels" USING btree ("mtech_id");
  CREATE INDEX "payload_locked_documents_rels_phd_id_idx" ON "payload_locked_documents_rels" USING btree ("phd_id");
  CREATE INDEX "payload_locked_documents_rels_alumni_id_idx" ON "payload_locked_documents_rels" USING btree ("alumni_id");
  CREATE INDEX "payload_locked_documents_rels_btech_p_id_idx" ON "payload_locked_documents_rels" USING btree ("btech_p_id");
  CREATE INDEX "payload_locked_documents_rels_mtech_p_id_idx" ON "payload_locked_documents_rels" USING btree ("mtech_p_id");
  CREATE INDEX "payload_locked_documents_rels_phd_p_id_idx" ON "payload_locked_documents_rels" USING btree ("phd_p_id");
  CREATE INDEX "payload_locked_documents_rels_adjunct_faculty_id_idx" ON "payload_locked_documents_rels" USING btree ("adjunct_faculty_id");
  CREATE INDEX "payload_locked_documents_rels_professors_in_practice_id_idx" ON "payload_locked_documents_rels" USING btree ("professors_in_practice_id");
  CREATE INDEX "payload_locked_documents_rels_books_id_idx" ON "payload_locked_documents_rels" USING btree ("books_id");
  CREATE INDEX "payload_locked_documents_rels_nptel_lectures_id_idx" ON "payload_locked_documents_rels" USING btree ("nptel_lectures_id");
  CREATE INDEX "payload_locked_documents_rels_distinguished_faculty_id_idx" ON "payload_locked_documents_rels" USING btree ("distinguished_faculty_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "about_about_the_department_sections_order_idx" ON "about_about_the_department_sections" USING btree ("_order");
  CREATE INDEX "about_about_the_department_sections_parent_id_idx" ON "about_about_the_department_sections" USING btree ("_parent_id");
  CREATE INDEX "about_timeline_at_iith_order_idx" ON "about_timeline_at_iith" USING btree ("_order");
  CREATE INDEX "about_timeline_at_iith_parent_id_idx" ON "about_timeline_at_iith" USING btree ("_parent_id");
  CREATE INDEX "about_explore_order_idx" ON "about_explore" USING btree ("_order");
  CREATE INDEX "about_explore_parent_id_idx" ON "about_explore" USING btree ("_parent_id");
  CREATE INDEX "about_about_msme_image_idx" ON "about" USING btree ("about_msme_image_id");
  CREATE INDEX "mtech_admissions_specializations_eligibility_order_idx" ON "mtech_admissions_specializations_eligibility" USING btree ("_order");
  CREATE INDEX "mtech_admissions_specializations_eligibility_parent_id_idx" ON "mtech_admissions_specializations_eligibility" USING btree ("_parent_id");
  CREATE INDEX "mtech_admissions_specializations_admission_process_order_idx" ON "mtech_admissions_specializations_admission_process" USING btree ("_order");
  CREATE INDEX "mtech_admissions_specializations_admission_process_parent_id_idx" ON "mtech_admissions_specializations_admission_process" USING btree ("_parent_id");
  CREATE INDEX "mtech_admissions_specializations_order_idx" ON "mtech_admissions_specializations" USING btree ("_order");
  CREATE INDEX "mtech_admissions_specializations_parent_id_idx" ON "mtech_admissions_specializations" USING btree ("_parent_id");
  CREATE INDEX "mtech_admissions_specializations_brochure_idx" ON "mtech_admissions_specializations" USING btree ("brochure_id");
  CREATE INDEX "phd_admissions_external_fellowships_order_idx" ON "phd_admissions_external_fellowships" USING btree ("_order");
  CREATE INDEX "phd_admissions_external_fellowships_parent_id_idx" ON "phd_admissions_external_fellowships" USING btree ("_parent_id");
  CREATE INDEX "phd_admissions_phd_types_brochure_links_order_idx" ON "phd_admissions_phd_types_brochure_links" USING btree ("_order");
  CREATE INDEX "phd_admissions_phd_types_brochure_links_parent_id_idx" ON "phd_admissions_phd_types_brochure_links" USING btree ("_parent_id");
  CREATE INDEX "phd_admissions_phd_types_brochure_links_link_file_idx" ON "phd_admissions_phd_types_brochure_links" USING btree ("link_file_id");
  CREATE INDEX "phd_admissions_phd_types_order_idx" ON "phd_admissions_phd_types" USING btree ("_order");
  CREATE INDEX "phd_admissions_phd_types_parent_id_idx" ON "phd_admissions_phd_types" USING btree ("_parent_id");
  CREATE INDEX "phd_admissions_faculty_research_research_topics_order_idx" ON "phd_admissions_faculty_research_research_topics" USING btree ("_order");
  CREATE INDEX "phd_admissions_faculty_research_research_topics_parent_id_idx" ON "phd_admissions_faculty_research_research_topics" USING btree ("_parent_id");
  CREATE INDEX "phd_admissions_faculty_research_order_idx" ON "phd_admissions_faculty_research" USING btree ("_order");
  CREATE INDEX "phd_admissions_faculty_research_parent_id_idx" ON "phd_admissions_faculty_research" USING btree ("_parent_id");
  CREATE INDEX "timetable_time_table_order_idx" ON "timetable_time_table" USING btree ("_order");
  CREATE INDEX "timetable_time_table_parent_id_idx" ON "timetable_time_table" USING btree ("_parent_id");
  CREATE INDEX "hod_message_select_hod_idx" ON "hod_message" USING btree ("select_hod_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "placements_btech_placements" CASCADE;
  DROP TABLE "placements_mtech_placements" CASCADE;
  DROP TABLE "placements_companies_hired" CASCADE;
  DROP TABLE "placements" CASCADE;
  DROP TABLE "news" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "researchareas_research_area_photo" CASCADE;
  DROP TABLE "researchareas_research_areas" CASCADE;
  DROP TABLE "researchareas" CASCADE;
  DROP TABLE "researchareas_rels" CASCADE;
  DROP TABLE "researchfacilities" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "collaborations" CASCADE;
  DROP TABLE "faculty_faculty_research_interests" CASCADE;
  DROP TABLE "faculty_faculty_publications" CASCADE;
  DROP TABLE "faculty_faculty_course_taught" CASCADE;
  DROP TABLE "faculty" CASCADE;
  DROP TABLE "staff_staff_research_interests" CASCADE;
  DROP TABLE "staff_fic_staff" CASCADE;
  DROP TABLE "staff" CASCADE;
  DROP TABLE "btech" CASCADE;
  DROP TABLE "mtech" CASCADE;
  DROP TABLE "phd_phd_research_interest" CASCADE;
  DROP TABLE "phd_phd_course_ta" CASCADE;
  DROP TABLE "phd" CASCADE;
  DROP TABLE "alumni" CASCADE;
  DROP TABLE "btech_p_curriculum_about_curriculum" CASCADE;
  DROP TABLE "btech_p" CASCADE;
  DROP TABLE "mtech_p_specializations" CASCADE;
  DROP TABLE "mtech_p" CASCADE;
  DROP TABLE "phd_p" CASCADE;
  DROP TABLE "adjunct_faculty_adjunct_faculty_research_interests" CASCADE;
  DROP TABLE "adjunct_faculty_adjunct_faculty_publications" CASCADE;
  DROP TABLE "adjunct_faculty_adjunct_faculty_course_taught" CASCADE;
  DROP TABLE "adjunct_faculty" CASCADE;
  DROP TABLE "professors_in_practice_pop_faculty_research_interests" CASCADE;
  DROP TABLE "professors_in_practice_pop_faculty_publications" CASCADE;
  DROP TABLE "professors_in_practice_pop_faculty_course_taught" CASCADE;
  DROP TABLE "professors_in_practice" CASCADE;
  DROP TABLE "books" CASCADE;
  DROP TABLE "books_rels" CASCADE;
  DROP TABLE "nptel_lectures" CASCADE;
  DROP TABLE "nptel_lectures_rels" CASCADE;
  DROP TABLE "distinguished_faculty_faculty_research_interests" CASCADE;
  DROP TABLE "distinguished_faculty_faculty_publications" CASCADE;
  DROP TABLE "distinguished_faculty_faculty_course_taught" CASCADE;
  DROP TABLE "distinguished_faculty" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "about_about_the_department_sections" CASCADE;
  DROP TABLE "about_timeline_at_iith" CASCADE;
  DROP TABLE "about_explore" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "mtech_admissions_specializations_eligibility" CASCADE;
  DROP TABLE "mtech_admissions_specializations_admission_process" CASCADE;
  DROP TABLE "mtech_admissions_specializations" CASCADE;
  DROP TABLE "mtech_admissions" CASCADE;
  DROP TABLE "btech_admissions" CASCADE;
  DROP TABLE "phd_admissions_external_fellowships" CASCADE;
  DROP TABLE "phd_admissions_phd_types_brochure_links" CASCADE;
  DROP TABLE "phd_admissions_phd_types" CASCADE;
  DROP TABLE "phd_admissions_faculty_research_research_topics" CASCADE;
  DROP TABLE "phd_admissions_faculty_research" CASCADE;
  DROP TABLE "phd_admissions" CASCADE;
  DROP TABLE "timetable_time_table" CASCADE;
  DROP TABLE "timetable" CASCADE;
  DROP TABLE "hod_message" CASCADE;
  DROP TYPE "public"."enum_researchfacilities_priority";
  DROP TYPE "public"."enum_projects_project_type";
  DROP TYPE "public"."enum_projects_project_status";
  DROP TYPE "public"."enum_collaborations_collaboration_type";
  DROP TYPE "public"."enum_alumni_alumni_degree";`)
}
