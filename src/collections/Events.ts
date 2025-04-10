import { CollectionConfig } from "payload";

export const Events:CollectionConfig = {
    slug : "events",
    fields : [
        {
            name : "events_category",
            type : "text",
            label : "Enter Category",
            required : true,
        },
        {
            name : "events_date",
            type : "date",
            label : "Date",
            required : true,
        },
        {
            name : "events_title",
            type : "text",
            label : "Enter Title",
            required : true,
        },
        {
            name : "events_description",
            type : "text",
            label : "Enter Description",
            required : true,
        },
        {
            name : "events_venue",
            type : "text",
            label : "Enter Venue",
            required : true,
        },
    ]

}
