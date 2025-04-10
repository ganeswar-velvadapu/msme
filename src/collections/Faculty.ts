import { CollectionConfig } from "payload";

export const Faculty: CollectionConfig = {
    slug: "faculty",
    fields: [
        {
            name: "faculty_image",
            type: "upload",
            relationTo: "media",
            required: true,
            label: "Upload Faculty Image"
        },
        {
            name: "faculty_name",
            type: "text",
            required: true,
            label: "Enter Faculty Name"
        },
        {
            name: "faculty_designation",
            type: "text",
            required: true,
            label: "Faculty Designation"
        },
        {
            name: "faculty_email",
            type: "email",
            required: true,
            label: "Enter Faculty Email"
        },
        {
            name: "faculty_phd_detail",
            type: "text",
            required: true,
            label: "Enter PhD details"
        },
        {
            name: "faculty_office",
            type: "text",
            required: true,
            label: "Enter Faculty Office"
        },
        {
            name: "faculty_research_interests",
            type: "array",
            fields: [
                {
                    name: "research_interest_faculty",
                    type: "text",
                    required: true,
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
                    required: true,
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
                    required: true,
                    label: "Enter Course Code"
                },
                {
                    name: "faculty_course_name",
                    type: "text",
                    required: true,
                    label: "Enter Course Name"
                }
            ],
            label: "Faculty Courses"
        }
    ]

}
