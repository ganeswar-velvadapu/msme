import { CollectionConfig } from "payload";

export const PhD: CollectionConfig = {
    slug: "phd",
    fields: [
        {
            name: "phd_image",
            type: "upload",
            relationTo: "media",
            required: true,
            label: "Upload phd Image"
        },
        {
            name: "phd_name",
            type: "text",
            required: true,
            label: "Enter phd Name"
        },
        {
            name: "phd_roll_no",
            type: "text",
            required: true,
            label: "Enter PhD Roll Number"
        },
        {
            name: "phd_email",
            type: "email",
            required: true,
            label: "Enter phd Email"
        },
        {
            name: "phd_education",
            type: "text",
            required: true,
            label: "Enter education details"
        },
        {
            name: "phd_advisor",
            type: "text",
            required: true,
            label: "Enter phd Advisor"
        },
        {
            name: "phd_research_topic",
            type : "text",
            label: "PhD Research Topic",
            required : true
        },
        {
            name: "phd_research_interest",
            type: "array",
            fields: [
                {
                    name: "research_interest_phd",
                    type: "text",
                    required: true,
                    label: "Enter Research Interest"
                }
            ],
            label: "PhD Research Interest"
        },
        {
            name: "phd_course_ta",
            type: "array",
            fields: [
                {
                    name: "phd_course_code",
                    type: "text",
                    required: true,
                    label: "Enter Course Code"
                },
                {
                    name: "phd_course_name",
                    type: "text",
                    required: true,
                    label: "Enter Course Name"
                }
            ],
            label: "Teaching assistant for courses"
        }
    ]

}
