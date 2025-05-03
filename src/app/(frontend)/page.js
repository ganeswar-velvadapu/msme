import { getPayload } from "payload";
import config from "@payload-config";
import CustomSwiper from "@/components/homeComponents/Carousel/Carousel";
import AfterCarousel from "@/components/homeComponents/afterCarousel/AfterCarousel";

export default async function Home() {
  const payload = await getPayload({ config });

  // Fetch home carousel images
  const global = await payload.findGlobal({ slug: "homecarousel" });

  const images =
    global?.home_carousel_images?.map(
      (item) => item.carousel_image?.url
    ) || [];

  return (
    <>
      <CustomSwiper images={images} />
      <AfterCarousel />
    </>
  );
}
