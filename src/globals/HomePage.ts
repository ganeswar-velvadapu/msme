import { GlobalConfig } from "payload";

export const HomePageContent: GlobalConfig = {
    slug : "homePageContent",
    fields : [
        {
            name : "main_content",
            type : "textarea",
            label : "Main Content",
            required : true
        }
    ]
}