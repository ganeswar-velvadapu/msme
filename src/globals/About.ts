import { GlobalConfig } from "payload";

export const About: GlobalConfig = {
    slug: "about",
    fields: [
        {
            name: "about_msme",
            type: "textarea",
            label: "About MSME",
            defaultValue: `Materials Science is an interdisciplinary branch of engineering that deals with the discovery and design of materials for nanotechnology, manufacturing, semiconductor, biomedical, and energy applications. The branch's core involves building materials via various synthesis and processing routes, followed by experimentally and computationally characterizing materials' innate crystal structure and unique properties, and ultimately maximizing their performance, efficiency, and sustainability in real-world applications. Modern metallurgists explore innovative processing routes to transform minerals into metals and work in an interdisciplinary team alongside materials scientists to design metals for extraction in batteries, light-weight manufacturing, and for space as well as extreme environments. `
        },
        {
            name: "about_msme_image",
            type: "upload",
            relationTo: "media",
            label: "About MSME Image"
        },
        {
            name: "about_the_department",
            type: "group",
            fields: [
                {
                    name: "description",
                    type: "textarea",
                    label: "Enter Department Description"
                },
                {
                    name: "sections",
                    type: "array",
                    fields: [
                        {
                            name: "Thrust",
                            type: "text",
                            label: "Enter Section Heading"
                        },
                        {
                            name: "Thrust_Area",
                            type: "textarea",
                            label: "Enter Section Content"
                        },
                    ],
                }
            ]
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
                    name: "timeline_content",
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
                    name: "link_to_program",
                    type: "text",

                    label: "Enter redirect link"
                },
            ]
        },
    ]
}