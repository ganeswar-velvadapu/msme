import UpcomingEvents from "../Events/Events";
import MSME from "../msme/Msme";
import LatestNews from "../News/News";

export default function AfterCarousel() {
  return (
    <div className="opacity-100">
      {/* Hero section with MSME */}
      <div className="relative bg-gray-100 text-black overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute left-0 bottom-0 h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(255,255,255,0.05)" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,245.3C672,256,768,224,864,186.7C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute left-0 bottom-0 h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(255,255,255,0.1)" d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,245.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
          <div className="w-full">
            <MSME />
          </div>
        </div>
      </div>
      
      {/* News Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="w-full mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-10 flex justify-center sm:justify-start">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
                News
              </h2>
            </div>
            
            <div className="w-full">
              <LatestNews limit={6} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Events Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="w-full mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-10 flex justify-center sm:justify-start">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
                Events
              </h2>
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