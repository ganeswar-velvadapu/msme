import { CollectionConfig, createClientCollectionConfig } from "payload";

export const ResearchAreas:CollectionConfig = {
    slug : "researchareas",
    fields : [
        {
            name : "research_area_name",
            type:"text",
            label : "Research Area Name"
        },
        {
            name : "research_area_photo",
            type : "upload",
            relationTo : "media",
            label : "Research Area Photo"
        },
        {
            name : "research_areas",
            type:"array",
            label : "Research Areas",
            fields :[
                {
                    name : "research_area_type",
                    type : "text",
                    label : "Research Area Type"
                }
            ]
        },
        {
            name : "about_research_area",
            type : "textarea",
            label : "About Research Area"
        },
        {
            name : "research_areas_associated_faculty",
            type:"array",
            label : "Research Areas associated faculty",
            fields :[
                {
                    name : "research_area_faculty_name",
                    type : "text",
                    label : "Research Area Faculty Name"
                }
            ]
        },
    ]
}