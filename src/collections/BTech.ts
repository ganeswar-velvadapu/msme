import { CollectionConfig } from "payload";


export const BTech: CollectionConfig = {
    slug: "btech",
    fields: [
        {
            name: "btech_student_name",
            type: "text",
            label: "Enter student name",
            required: true
        },
        {
            name: "btech_roll_no",
            type: "text",
            label: "Enter Roll Number",
            required: true
        },
        {
            name: "btech_batch",
            type: "text",
            label: "Enter Batch",
            required: true
        }
    ]
}