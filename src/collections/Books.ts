import { CollectionConfig } from "payload";

export const Books: CollectionConfig = {
    slug: "books",
    admin: {
        useAsTitle: "book_name",
    },
    fields: [
        {
            name: "book_name",
            type: "text",
            label: "Enter book name",
        },
        {
            name: "book_associated_faculty",
            type: "relationship",
            label: "Associated Faculty Members",
            relationTo: "faculty",
            hasMany: true,
            admin: {
                allowCreate: false,
                isSortable: true
            }
        },
        {
            name: "book_cover_page",
            type: "upload",
            relationTo: "media",
            label: "Upload Book Cover Page"
        }
    ]
}