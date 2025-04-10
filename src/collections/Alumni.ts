import { CollectionConfig } from "payload";


export const Alumni: CollectionConfig = {
    slug: "alumni",
    fields: [
        {
            name: "alumni_student_name",
            type: "text",
            label: "Enter student name",
            required: true
        },
        {
            name: "alumni_degree",
            type: "text",
            label: "Enter Degree",
            required: true
        },
        {
            name: "alumni_batch",
            type: "text",
            label: "Enter Batch",
            required: true
        }
    ]
}