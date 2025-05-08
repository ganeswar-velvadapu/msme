import { CollectionConfig } from "payload";


export const BTech: CollectionConfig = {
    slug: "btech",
    fields: [
        {
            name: "btech_student_name",
            type: "text",
            label: "Enter student name",
        },
        {
            name: "btech_roll_no",
            type: "text",
            label: "Enter Roll Number",
    
        },
        {
            name: "btech_batch",
            type: "text",
            label: "Enter Batch",

        }
    ]
}