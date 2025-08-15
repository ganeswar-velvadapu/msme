import { CollectionConfig } from "payload";

export const Collaborations:CollectionConfig = {
    slug : "collaborations",
    fields : [
        {
            name: "collaboration_image",
            type: "upload",
            relationTo: "media",
            label: "Logo"
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