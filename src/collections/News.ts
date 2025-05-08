    import { CollectionConfig } from "payload";

    export const News:CollectionConfig = {
        slug : "news",
        fields : [
            {
                name : "news_tag",
                type : "text",
                label : "Enter Tag",
        
            },
            {
                name : "news_date",
                type : "date",
                label : "Date",
            
            },
            {
                name : "news_title",
                type : "text",
                label : "Enter title",
                
            },
            {
                name : "news_short_description",
                type : "text",
                label : "Enter short description",
            
            },
            {
                name : "news_read_more_description",
                type : "text",
                label : "Enter read more description",
            
            },
            {
                name : "news_web_page",
                type : "text",
                label : "Website Link",
            
            },
            {
                name : "news_image",
                type : "upload",
                relationTo : "media",
                label : "Upload Image"
            },
        ]

    }
