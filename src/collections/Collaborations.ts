import { CollectionConfig } from "payload";

export const Collaborations:CollectionConfig = {
    slug : "collaborations",
    fields : [
        {
            name : "collaborator_name",
            type : "text",
            label : "Name of the collaborator"
        },
        {
            name : "faculty_collaborator_name",
            type : "text",
            label : "Name of the faculty"
        },
        {
            name : "institute_name",
            type : "text",
            label : "Institute or Industry Name"
        },
        {
            name : "collaboration_type",
            type : "select",
            options : [
                "Industrial Collaboration",
                "Institutional Collaboration"
            ],
            label : "Collaboration Type"
        }
    ]
}