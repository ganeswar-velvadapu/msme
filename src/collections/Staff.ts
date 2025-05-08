import { CollectionConfig } from "payload";


export const Staff: CollectionConfig = {
    slug: "staff",
    fields: [
        {
            name: "staff_image",
            type: "upload",
            relationTo: "media",
     
            label: "Upload staff Image"
        },
        {
            name: "staff_name",
            type: "text",
            label: "Enter staff Name"
        },
        {
            name: "staff_designation",
            type: "text",

            label: "staff Designation"
        },
        {
            name: "staff_email",
            type: "email",

            label: "Enter staff Email"
        },
        {
            name: "staff_education",
            type: "text",

            label: "Enter Education details"
        },
        {
            name: "staff_office",
            type: "text",

            label: "Enter staff Office"
        },
        {
            name: "staff_research_interests",
            type: "array",
            fields: [
                {
                    name: "research_interest_staff",
                    type: "text",
                    label: "Enter Research Interest"
                }
            ],
        }
    ]

}