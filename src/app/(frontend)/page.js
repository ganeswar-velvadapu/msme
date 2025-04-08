import AfterCarousel from "@/components/homeComponents/afterCarousel/AfterCarousel";
import CustomSwiper from "@/components/homeComponents/Carousel/Carousel";
import Image from "next/image";

export default function Home() {

  const images = [
    "https://lh7-rt.googleusercontent.com/slidesz/AGV_vUd46LsVgqr-0E_YNs3wolJkrdlYj78fYmnkF59Kr7FHklpWVxQ7lC6b6RucmfrPi5rfJwTQ924Q4ozqvHW6FjkBYZQdkSqPICFSdpvUYzQZ8SzULHm_ILb6fjhVlx17LodCqnaosvq7beYk7iHzWA=s2048?key=H7QixwRKWBkCSOcfw9h8YV1D",
    ]
  return (
    <>
        <CustomSwiper images={images}/>
        <AfterCarousel/>
    </>
    );
}
