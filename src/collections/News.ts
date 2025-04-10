import { CollectionConfig } from "payload";

export const News:CollectionConfig = {
    slug : "news",
    fields : [
        {
            name : "news_category",
            type : "text",
            label : "Enter Category",
            required : true,
        },
        {
            name : "news_date",
            type : "date",
            label : "Date",
            required : true,
        },
        {
            name : "news_title",
            type : "text",
            label : "Enter title",
            required : true,
        },
        {
            name : "news_short_description",
            type : "text",
            label : "Enter short description",
            required : true,
        },
        {
            name : "read_more_description",
            type : "text",
            label : "Enter read more description",
            required : true,
        },
        {
            name : "news_image",
            type : "upload",
            relationTo : "media",
            label : "Upload Image"
        },
    ]

}
