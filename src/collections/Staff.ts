import { CollectionConfig } from "payload";


export const Staff: CollectionConfig = {
    slug: "staff",
    fields: [
        {
            name: "staff_image",
            type: "upload",
            relationTo: "media",

            label: "Upload Staff Image"
        },
        {
            name: "staff_name",
            type: "text",
            label: "Enter Staff Name"
        },
        {
            name: "staff_designation",
            type: "text",
            label: "Staff Designation"
        },
        {
            name: "staff_email",
            type: "email",

            label: "Enter Staff Email"
        },
        {
            name: "staff_education",
            type: "text",

            label: "Enter Education details"
        },
        {
            name: "staff_office",
            type: "text",

            label: "Enter Staff Office"
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
        },
        {
            name: "fic_staff",
            type: "array",
            label : "FIC ",
            fields: [
                {
                    name: "fic_staff_option",
                    type: "text",
                    label: "Facility in charge"
                }
            ],
        }
    ]

}