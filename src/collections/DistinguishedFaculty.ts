import { CollectionConfig } from "payload";

export const DistinguishedFaculty: CollectionConfig = {
    slug: "distinguished-faculty",
    admin: {
        useAsTitle: "faculty_name", 
    },
    fields: [
        {
            name: "faculty_image",
            type: "upload",
            relationTo: "media",

            label: "Upload Faculty Image"
        },
        {
            name: "faculty_group_web_page",
            type: "text",
            label: "Faculty Group Web Page"
        },
        {
            name: "faculty_cv",
            type: "upload",
            relationTo: "media",
            label: "Upload CV (PDF)"
        },
        {
            name: "linked_in_faculty",
            type: "text",
            label: "LinkedIn URL"
        },
        {
            name: "google_scholar_url",
            type: "text",
            label: "Google Scholar link"
        },
        {
            name: "scopus_id",
            type: "text",
            label: "Scopus ID"
        },
        {
            name: "orcid_id",
            type: "text",
            label: "ORCID ID"
        },
        {
            name: "faculty_name",
            type: "text",

            label: "Enter Faculty Name"
        },
        {
            name: "faculty_designation",
            type: "text",

            label: "Faculty Designation"
        },
        {
            name: "faculty_email",
            type: "email",

            label: "Enter Faculty Email"
        },
        {
            name: "faculty_phd_detail",
            type: "text",

            label: "Enter PhD details"
        },
        {
            name: "faculty_office",
            type: "text",

            label: "Enter Faculty Office"
        },
        {
            name: "faculty_research_interests",
            type: "array",
            fields: [
                {
                    name: "research_interest_faculty",
                    type: "text",

                    label: "Enter Research Interest"
                }
            ],
            label: "Faculty Research Interest"
        },
        {
            name: "faculty_publications",
            type: "array",
            fields: [
                {
                    name: "faculty_publication",
                    type: "text",

                    label: "Enter Publication Name"
                }
            ],
            label: "Faculty Publications"
        },
        {
            name: "faculty_course_taught",
            type: "array",
            fields: [
                {
                    name: "faculty_course_code",
                    type: "text",

                    label: "Enter Course Code"
                },
                {
                    name: "faculty_course_name",
                    type: "text",

                    label: "Enter Course Name"
                }
            ],
            label: "Faculty Courses"
        }
    ]

}
