import { CollectionConfig } from "payload";

export const Projects:CollectionConfig = {
    slug : "projects",
    fields : [
        {
            name : "project_title",
            type : "text",
            label : "Enter project title"
        },
        {
            name : "project_pi",
            type : "text",
            label : "PI"
        },
        {
            name : "project_duration",
            type : "text",
            label : "Project duration"
        },
        {
            name : "project_agency",
            type : "text",
            label : "Project agency"
        },
        {
            name : "project_type",
            type : "select",
            options : ["Consultancy Projects","Research Projects"],
            label : "Project Type"
        },
        {
            name : "project_status",
            type : "select",
            options : ["Ongoing","Completed"],
            label : "Project Status"
        }
    ]
}