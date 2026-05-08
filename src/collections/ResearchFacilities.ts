import { CollectionConfig } from "payload";

export const ResearchFacilities: CollectionConfig = {
    slug: "researchfacilities",
    admin: {
        useAsTitle: "research_facility_name",
    },
    fields: [
        {
            name: "research_facility_name",
            type: "text",
            label: "Equipment Name",
            required: true,
        },
        {
            name: "research_facility_location",
            type: "text",
            label: "Equipment Location",
        },
        {
            name: "research_facility_fic",
            type: "text",
            label: "Research Facility FIC",
        },
        {
            name: "research_facility_fic_email",
            type: "email",
            label: "Research Facility FIC email",
        },
        {
            name: "research_facility_staff_incharge",
            type: "text",
            label: "Research Facility Staff incharge",
        },
        {
            name: "research_facility_usage_charges",
            type: "text",
            label: "Research Facility Usage charges",
        },
        {
            name: "research_facility_forms",
            type: "text",
            label: "Research Facility Forms",
        },
        {
            name: "research_facility_image_url",
            type: "upload",
            relationTo : "media",
            label: "Research Facility Image URL"
        },
        {
            name: "priority",
            type: "select",
            label: "Priority",
            options: [
                { label: "High", value: "high" },
                { label: "Low", value: "low" },
            ],
            defaultValue: "low",
            required: true,
        },
    ]
}