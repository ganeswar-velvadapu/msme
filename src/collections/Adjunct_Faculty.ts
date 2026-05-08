import { CollectionConfig } from "payload";

export const AdjunctFaculty: CollectionConfig = {
  slug: "adjunct-faculty",
  admin: {
    useAsTitle: "adjunct_faculty_name",
  },
  fields: [
    {
      name: "adjunct_faculty_image",
      type: "upload",
      relationTo: "media",

      label: "Upload Faculty Image",
    },
    {
      name: "adjunct_faculty_group_web_page",
      type: "text",
      label: "Faculty Group Web Page",
    },
    {
      name: "adjunct_linked_in_faculty",
      type: "text",
      label: "LinkedIn URL",
    },
    {
      name: "adjunct_google_scholar_url",
      type: "text",
      label: "Google Scholar link",
    },
    {
      name: "adjunct_scopus_id",
      type: "text",
      label: "Scopus ID",
    },
    {
      name: "adjunct_orcid_id",
      type: "text",
      label: "ORCID ID",
    },
    {
      name: "adjunct_faculty_name",
      type: "text",

      label: "Enter Faculty Name",
    },
    {
      name: "adjunct_faculty_designation",
      type: "text",

      label: "Faculty Designation",
    },
    {
      name: "adjunct_faculty_email",
      type: "email",

      label: "Enter Faculty Email",
    },
    {
      name: "adjunct_faculty_phd_detail",
      type: "text",

      label: "Enter PhD details",
    },
    {
      name: "adjunct_faculty_office",
      type: "text",

      label: "Enter Faculty Office",
    },
    {
      name: "adjunct_faculty_research_interests",
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
      name: "adjunct_faculty_publications",
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
      name: "adjunct_faculty_course_taught",
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
