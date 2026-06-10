import { CollectionConfig } from "payload";


export const Alumni: CollectionConfig = {
    slug: "alumni",
    fields: [
        {
            name: "alumni_student_name",
            type: "text",
            label: "Enter student name",

        },
        {
            name: "alumni_degree",
            type: "select",
            label: "Enter Degree",
            options: ["B.Tech.", "M.Tech.", "PhD"]
        },
        {
            name: "alumni_batch",
            type: "text",
            label: "Enter Batch",

        }
    ]
}