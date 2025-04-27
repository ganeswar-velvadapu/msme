import { GlobalConfig } from "payload";

export const HomeCarousel:GlobalConfig = {
    slug : "homecarousel",
    fields : [
        {
            name : "home_carousel_images",
            type : "array",
            fields : [
                {
                    name : "carousel_image",
                    type : "upload",
                    relationTo : "media",
                    label : "Upload Image"
                }
            ]
        }
    ]
}