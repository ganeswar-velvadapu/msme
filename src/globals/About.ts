import { GlobalConfig } from "payload";

export const About: GlobalConfig = {
    slug: "about",
    fields: [
        {
            name: "about_msme",
            type: "textarea",

            label: "About MSME"
        },
        {
            name: "about_the_department",
            type: "textarea",

            label: "About the Department"
        },
        {
            name: "vision",
            type: "textarea",
            label: "Vision"
        },
        {
            name: "timeline_at_iith",
            type: "array",

            fields: [
                {
                    name: "year",
                    type: "number",

                    label: "Enter the year"
                },
                {
                    name: "timeline",
                    type: "text",

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

                    label: "Enter the Program name"
                },
                {
                    name: "program_brief_description",
                    type: "text",

                    label: "Enter program description"
                },
                {
                    name: "link_to_program",
                    type: "text",

                    label: "Enter redirect link"
                },
            ]
        },
    ]
}