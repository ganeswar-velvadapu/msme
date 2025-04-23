import { GlobalConfig } from "payload";

export const About: GlobalConfig = {
    slug: "about",
    fields: [
        {
            name: "about_msme",
            type: "textarea",
            required: true,
            label: "About MSME"
        },
        {
            name: "about_the_department",
            type: "textarea",
            required: true,
            label: "About the Department"
        },
        {
            name: "message_from_hod",
            type: "textarea",
            required: true,
            label: "Message from HOD"
        },
        {
            name: "timeline_at_iith",
            type: "array",
            required: true,
            fields: [
                {
                    name: "year",
                    type: "number",
                    required: true,
                    label: "Enter the year"
                },
                {
                    name: "timeline",
                    type: "text",
                    required: true,
                    label: "Enter content of the year"
                },
            ]
        },
        {
            name: "Explore",
            type: "array",
            required: true,
            fields: [
                {
                    name: "program_name",
                    type: "text",
                    required: true,
                    label: "Enter the Program name"
                },
                {
                    name: "program_brief_description",
                    type: "text",
                    required: true,
                    label: "Enter program description"
                },
                {
                    name: "link_to_program",
                    type: "text",
                    required: true,
                    label: "Enter redirect link"
                },
            ]
        },
    ]
}