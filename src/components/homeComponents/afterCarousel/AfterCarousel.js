import UpcomingEvents from "../Events/Events";
import MSME from "../msme/Msme";
import LatestNews from "../News/News";

export default function AfterCarousel() {
  return (
    <div className="relative">
      {/* Parallax Background - very light/faded like watermark */}
      <div
        className="absolute inset-0 -z-10 w-full h-full"
        style={{
          backgroundImage: "url('/scrolling_background.jpeg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.12,
        }}
      />

      {/* Content layers */}
      <div className="relative text-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10">
          <div className="w-full">
            <MSME />
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 sm:mb-16">
              <div className="flex flex-col items-center">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
                    News
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full">
              <LatestNews />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 sm:mb-16">
              <div className="flex flex-col items-center">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
                    Events
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full">
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}