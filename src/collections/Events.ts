import { CollectionConfig } from "payload";

export const Events:CollectionConfig = {
    slug : "events",
    fields : [
        {
            name : "events_tag",
            type : "text",
            label : "Enter Tag",
        },
        {
            name : "events_date",
            type : "date",
            label : "Date",
        },
        {
            name : "events_title",
            type : "text",
            label : "Enter Title",

        },
        {
            name : "events_description",
            type : "text",
            label : "Enter Description",
          
        },
        {
            name : "events_venue",
            type : "text",
            label : "Enter Venue",
        
        },
        {
            name : "events_image",
            type : "upload",
            label : "Upload Image",
            relationTo : "media"
        },
        {
            name : "events_web_page",
            type : "text",
            label : "Enter Web Page Link",
        },
        {
            name : "events_pdf_broucher_link",
            type : "text",
            label : "Enter PDF/Broucher Link",
        },
    ]

}
