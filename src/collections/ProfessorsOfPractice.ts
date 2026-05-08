import { CollectionConfig } from "payload";

export const popFaculty: CollectionConfig = {
  slug: "professors-in-practice",
  admin: {
    useAsTitle: "pop_faculty_name",
  },
  fields: [
    {
      name: "pop_faculty_image",
      type: "upload",
      relationTo: "media",

      label: "Upload Faculty Image",
    },
    {
      name: "pop_faculty_group_web_page",
      type: "text",
      label: "Faculty Group Web Page",
    },
    {
      name: "pop_linked_in_faculty",
      type: "text",
      label: "LinkedIn URL",
    },
    {
      name: "pop_google_scholar_url",
      type: "text",
      label: "Google Scholar link",
    },
    {
      name: "pop_scopus_id",
      type: "text",
      label: "Scopus ID",
    },
    {
      name: "pop_orcid_id",
      type: "text",
      label: "ORCID ID",
    },
    {
      name: "pop_faculty_name",
      type: "text",

      label: "Enter Faculty Name",
    },
    {
      name: "pop_faculty_designation",
      type: "text",

      label: "Faculty Designation",
    },
    {
      name: "pop_faculty_email",
      type: "email",

      label: "pop_Enter Faculty Email",
    },
    {
      name: "pop_faculty_phd_detail",
      type: "text",

      label: "Enter PhD details",
    },
    {
      name: "pop_faculty_office",
      type: "text",

      label: "Enter Faculty Office",
    },
    {
      name: "pop_faculty_research_interests",
      type: "array",
      fields: [
        {
          name: "research_interest_faculty",
          type: "text",

          label: "Enter Research Interest",
        },
      ],
      label: "Faculty Research Interest",
    },
    {
      name: "pop_faculty_publications",
      type: "array",
      fields: [
        {
          name: "faculty_publication",
          type: "text",

          label: "Enter Publication Name",
        },
      ],
      label: "Faculty Publications",
    },
    {
      name: "pop_faculty_course_taught",
      type: "array",
      fields: [
        {
          name: "faculty_course_code",
          type: "text",

          label: "Enter Course Code",
        },
        {
          name: "faculty_course_name",
          type: "text",

          label: "Enter Course Name",
        },
      ],
      label: "Faculty Courses",
    },
  ],
};
