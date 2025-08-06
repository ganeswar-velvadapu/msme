import { CollectionConfig } from "payload";

export const Collaborations: CollectionConfig = {
    slug: "collaborations",
    fields: [

        {
            name: "logo",
            type: "upload",
            relationTo: "media",
            label: "Upload Collaboration Logo"
        },
        {
            name: "collaboration_type",
            type: "select",
            options: [
                "Industrial Collaboration",
                "Institutional Collaboration"
            ],
            label: "Collaboration Type"
        }
    ]
}