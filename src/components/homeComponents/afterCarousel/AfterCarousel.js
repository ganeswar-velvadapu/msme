import EventsCalendar from "../eventscalendar/EventsCalendar";
import MSME from "../msme/Msme";
import LatestNews from "../News/News";
import Link from "next/link";

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

      <div className="py-16 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* News Section */}
            <div className="flex flex-col px-4 sm:px-12 lg:border-r border-gray-200">
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">News</h2>
                
              </div>
              <div className="flex-grow">
                <LatestNews isHome={true} limit={10} />
              </div>
              <div className="mt-8 text-center">
                <Link href="/news" className="text-gray-500 hover:text-black font-semibold flex items-center justify-center gap-1 transition-colors text-xs uppercase tracking-wider">
                  Click here to know more details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Events Section */}
            <div className="flex flex-col px-4 sm:px-12 pt-16 lg:pt-0">
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Events</h2>
              </div>
              <div className="flex-grow">
                <EventsCalendar isHome={true} />
              </div>
              <div className="mt-8 text-center">
                <Link href="/events" className="text-gray-500 hover:text-black font-semibold flex items-center justify-center gap-1 transition-colors text-xs uppercase tracking-wider">
                  Click here to know more details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}