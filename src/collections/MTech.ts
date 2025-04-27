import { CollectionConfig } from "payload";


export const MTech: CollectionConfig = {
    slug: "mtech",
    fields: [
        {
            name: "mtech_student_name",
            type: "text",
            label: "Enter student name",
            required: true
        },
        {
            name: "mtech_roll_no",
            type: "text",
            label: "Enter Roll Number",
            required: true
        },
        {
            name: "mtech_batch",
            type: "text",
            label: "Enter Batch",
          
        },
        {
            name : "mtech_specialization",
            type : "text",
            label : 'Enter Specialization',
            
        }
    ]
}