import { CollectionConfig } from "payload";


export const HomeCarousel:CollectionConfig = {

    slug : "homeCarousel",
    fields : [
        {
            name : "carousel_image",
            label : "Upload Carousel Image",
            type : "upload",
            relationTo : "media",
            required : true
        }
    ]
}