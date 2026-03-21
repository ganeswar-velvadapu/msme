import { CollectionConfig } from "payload";

export const ResearchFacilities: CollectionConfig = {
    slug: "researchfacilities",
    fields: [
        {
            name: "research_facility_no",
            type: "text",
            label : "Research Facility Number"
        },
        {
            name: "research_facility_name",
            type: "text",
            label: "Equipment Name"
        },
        {
            name: "research_facility_location",
            type: "text",
            label: "Equipment Location"
        },
        {
            name: "research_facility_fic",
            type: "text",
            label: "Research Facility FIC"
        },
        {
            name: "research_facility_staff_incharge",
            type: "text",
            label: "Research Facility Staff incharge"
        },
        {
            name: "research_facility_usage_charges",
            type: "text",
            label: "Research Facility Usage charges"
        },
        {
            name: "research_facility_forms",
            type: "text",
            label: "Research Facility Forms"
        }
    ]
}