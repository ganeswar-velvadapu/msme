import AfterCarousel from "@/components/homeComponents/afterCarousel/AfterCarousel";
import CustomSwiper from "@/components/homeComponents/Carousel/Carousel";
import Image from "next/image";

export default function Home() {

  const images = [
    "https://images.unsplash.com/photo-1741851373559-6879db14fd8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742855751015-5bda25456249?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1672855635926-c0c4c0483bf6?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  return (
    <>
        <CustomSwiper images={images}/>
        <AfterCarousel/>
    </>
    );
}
