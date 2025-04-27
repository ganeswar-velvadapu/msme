import { CollectionConfig } from "payload";

export const ResearchFacilitiesCarousel: CollectionConfig = {
    slug: "researchfacilitiescarousel",
    fields: [


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
            name: "research_facility_fic_email",
            type: "email",
            label: "Research Facility FIC email"
        },
        {
            name: "research_facility_staff_incharge",
            type: "email",
            label: "Research Facility Staff incharge"
        },
        {
            name: "research_facility_usage_charges",
            type: "email",
            label: "Research Facility Usage charges"
        },
        {
            name: "research_facility_forms",
            type: "email",
            label: "Research Facility Forms"
        },
        {
            name: "research_facility_image_url",
            type: "email",
            label: "Research Facility Image URL"
        },

    ]
}