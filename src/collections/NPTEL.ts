import { CollectionConfig } from "payload";


export const NPTEL: CollectionConfig = {
    slug: "nptel-lectures",
    admin: {
        useAsTitle: "nptel_course_name",
    },
    fields: [
        {
            name: "nptel_course_name",
            type: "text",
            label: "Enter NPTEL course name",
        },
        {
            name: "nptel_course_link",
            type: "text",
            label: "Enter NPTEL course link",
        },
        {
            name: "course_associated_faculty",
            type: "relationship",
            label: "Associated Faculty Member",
            relationTo: "faculty",
            hasMany: true,
            admin: {
                allowCreate: false,
                isSortable: true
            }
        }
    ]
}