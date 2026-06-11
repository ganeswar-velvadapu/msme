"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Search, ExternalLink, ChevronLeft, ChevronRight, Play } from "lucide-react";

// Robust helper to extract and clean YouTube embed URL from watch/playlist/share links
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const cleanUrl = url.trim();
  const playlistRegExp = /[?&]list=([^#\&\?]+)/;
  const playlistMatch = cleanUrl.match(playlistRegExp);
  const playlistId = playlistMatch ? playlistMatch[1] : null;
  const videoRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = cleanUrl.match(videoRegExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;

  if (videoId) {
    let embedUrl = `https://www.youtube.com/embed/${videoId}`;
    if (playlistId) {
      embedUrl += `?list=${playlistId}`;
    }
    return embedUrl;
  }
  if (playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  }
  if (cleanUrl.includes("youtube.com/embed/")) {
    return cleanUrl;
  }
  return null;
}

// Reusable premium native carousel component
const Carousel = ({ items, renderItem, emptyMessage }) => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 5);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      
      // Initial checks
      checkScroll();
      const timer = setTimeout(checkScroll, 100);
      
      window.addEventListener("resize", checkScroll);
      
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, [items]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by 1 card on smaller screens, or full view on desktop
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <p className="text-gray-500">{emptyMessage || "No items found."}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full px-1">
      {/* Slider Viewport */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-6 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Render only if there is overflow (either left scrollable or right scrollable) */}
      {(showLeft || showRight) && (
        <>
          {showLeft && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-2 hover:bg-gray-50 border border-gray-100 transition-all z-10 hover:scale-110 cursor-pointer flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-black" />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-2 hover:bg-gray-50 border border-gray-100 transition-all z-10 hover:scale-110 cursor-pointer flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-black" />
            </button>
          )}
        </>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default function AboutClient({
  aboutList = [],
  hodMessage = {},
  books = [],
  nptelLectures = [],
}) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("about");

  // Keep state activeTab synchronized with search parameter tab
  useEffect(() => {
    if (tabParam && ["about", "department", "history", "explore"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const aboutContent = aboutList[0] || {};

  const {
    about_msme,
    about_msme_image,
    about_the_department = {},
    timeline_at_iith = [],
    Explore = [],
  } = aboutContent;

  // Fallback defaults in case the PostgreSQL global data was reset during schema synchronization
  const defaultAboutMsme = "Materials Science is an interdisciplinary branch of engineering that deals with the discovery and design of materials for nanotechnology, manufacturing, semiconductor, biomedical, and energy applications. The branch's core involves building materials via various synthesis and processing routes, followed by experimentally and computationally characterizing materials' innate crystal structure and unique properties, and ultimately maximizing their performance, efficiency, and sustainability in real-world applications. Modern metallurgists explore innovative processing routes to transform minerals into metals and work in an interdisciplinary team alongside materials scientists to design metals for extraction in batteries, light-weight manufacturing, and for space as well as extreme environments.";

  const defaultDepartmentDescription = "Welcome to the department of the Materials Science and Metallurgical Engineering (MSME) at IIT Hyderabad. The MSME department was established in 2010. With a strength of full-time faculty members, postdocs, staff, and students the department is well-equipped to offer diverse academic programs and be at the forefront of cutting-edge research.";

  const defaultDepartmentSections = [
    {
      Thrust: "Research Thrust",
      Thrust_Area: "Our key research thrusts include the development of novel alloys for critical industries (defence, aerospace, automotive), the design and fabrication of functional materials and devices (spintronics, thermoelectrics, flexible electronics), multiscale modeling of materials and defects, sustainable metallurgy and green steelmaking, advanced manufacturing techniques such as metal additive manufacturing, and the application of cutting-edge characterization techniques."
    },
    {
      Thrust: "Academic Programs",
      Thrust_Area: "We offer B.Tech., M.Tech. and PhD programs in MSME and various specialized areas such as Industrial Metallurgy, Semiconductor Materials, Integrated Computational Materials Engineering. Additionally in an interdisciplinary partnership with other departments at IITH, we offer B.Tech. in Computational Engineering, M.Tech. in additive manufacturing, E-waste Resource engineering, and Lightweighting technology."
    },
    {
      Thrust: "Facilities",
      Thrust_Area: "Our department boasts state-of-the-art facilities, including transmission electron microscopes, scanning electron microscopes, focused ion beam systems, thin-film XRD, a Physical Property Measurement System, sputtering, CVD and PLD systems, a high-temperature nanoindenter, high-temperature UTM with DIC, rolling mills, and advanced computational tools like ThermoCalc, VASP, and our in-house MicroSim software for computational modeling."
    },
    {
      Thrust: "Accolades",
      Thrust_Area: "Our faculty have received numerous prestigious national and international awards in recognition of their excellence in research and contributions to science and engineering. These accolades include the SERB STAR Award, Japan Society for the Promotion of Science (JSPS) Fellowship, INSA Young Scientist Award, INSA Associate Fellowships, Ramanujan Fellowship (DST), ASM-IIM Visiting Lectureship Award, ASM International Outstanding Young Metallurgist Award, and many others."
    }
  ];

  const activeAboutMsme = about_msme || defaultAboutMsme;
  const deptDescription = about_the_department?.description || defaultDepartmentDescription;
  const deptSections = (about_the_department?.sections && about_the_department.sections.length > 0)
    ? about_the_department.sections
    : defaultDepartmentSections;

  // Search logic for books
  const [bookSearchTerm, setBookSearchTerm] = useState("");
  const filteredBooks = useMemo(() => {
    if (!Array.isArray(books)) return [];
    return books.filter((book) =>
      book?.book_name?.toLowerCase().includes(bookSearchTerm.toLowerCase())
    );
  }, [books, bookSearchTerm]);

  // Search logic for NPTEL lectures
  const [nptelSearchTerm, setNptelSearchTerm] = useState("");
  const filteredLectures = useMemo(() => {
    if (!Array.isArray(nptelLectures)) return [];
    return nptelLectures.filter((lecture) =>
      lecture?.nptel_course_name?.toLowerCase().includes(nptelSearchTerm.toLowerCase())
    );
  }, [nptelLectures, nptelSearchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {["about", "department", "history", "explore"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* About MSME & HOD Message */}
      {activeTab === "about" && (
        <div className="space-y-12">
          {activeAboutMsme && (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-black border-b border-gray-100 pb-3">
                What is Materials Science and Metallurgical Engineering?
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {about_msme_image?.url && (
                  <div className="w-full md:w-60 lg:w-72 flex-shrink-0">
                      <img
                        src={about_msme_image.url}
                        alt="From Atoms to Application"
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    <p className="text-[10px] text-gray-400 mt-2.5 italic text-center leading-normal max-w-sm mx-auto">
                      Generated by Google Gemini using the prompt: Can you create an image that captures the essence of &apos;From Atoms to Applications&apos; of materials science and engineering?
                    </p>
                  </div>
                )}
                <div className="flex-grow">
                  <p className="text-gray-700 text-lg leading-relaxed text-justify whitespace-pre-line">
                    {activeAboutMsme}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* HOD Message Component */}
          {hodMessage && (hodMessage.hod_message || hodMessage.select_hod) && (
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* HOD Photo Side */}
                <div className="lg:w-1/3 bg-gray-50 flex items-center justify-center p-8 lg:p-12">
                  <div className="relative group">
                    <img
                      src={hodMessage?.select_hod?.faculty_image?.url || "/api/placeholder/400/500"}
                      alt={hodMessage?.select_hod?.faculty_name || "HOD"}
                      className="relative rounded-lg shadow-xl w-full max-w-[300px] aspect-[4/5] object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* Message Side */}
                <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center">
                  <div className="mb-8">
                    <svg
                      className="w-12 h-12 text-gray-200 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <div className="text-gray-700 text-lg leading-relaxed italic whitespace-pre-line">
                      {hodMessage?.hod_message || "Message content goes here..."}
                    </div>
                  </div>

                  {/* HOD Info at the Bottom */}
                  <div className="border-t border-gray-100 pt-8 mt-4">
                    <h3 className="text-2xl font-bold text-black uppercase tracking-tight">
                      {hodMessage?.select_hod?.faculty_name}
                    </h3>
                    <p className="text-gray-500 font-medium mt-1">
                      Head of the Department
                    </p>
                    <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase font-semibold">
                      Materials Science and Metallurgical Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* About the Department & Books & NPTEL Lectures */}
      {activeTab === "department" && (
        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-black text-center">About the Department</h2>

            {/* Department Description */}
            {deptDescription && (
              <p className="text-gray-700 whitespace-pre-line mb-6">
                {deptDescription}
              </p>
            )}

            {/* Section List */}
            {deptSections.length > 0 && (
              <div className="space-y-6">
                {deptSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {section.Thrust}
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {section.Thrust_Area}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Books Carousel Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-3">Books</h2>
              <p className="text-gray-600 max-w-2xl">
                A collection of books authored and edited by our faculty members.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md mb-8">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search books by title..."
                value={bookSearchTerm}
                onChange={(e) => setBookSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black placeholder-gray-400 transition-all"
              />
            </div>

            {/* Carousel Rendering */}
            <Carousel
              items={filteredBooks}
              emptyMessage="No books found matching your search."
              renderItem={(book) => (
                <div
                  key={book.id}
                  className="group bg-white border border-gray-100 rounded-lg overflow-hidden flex flex-col hover:border-gray-300 transition-all duration-300 h-full shadow-sm"
                >
                  {/* Book Cover */}
                  <div className="aspect-[3/4] relative bg-gray-50 overflow-hidden">
                    <img
                      src={book?.book_cover_page?.url || "/api/placeholder/400/600"}
                      alt={book.book_name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-black mb-2 min-h-[1.5rem] line-clamp-2">
                      {book.book_name}
                    </h3>
                    
                    {book.book_associated_faculty && book.book_associated_faculty.length > 0 && (
                      <div className="mt-auto pt-4">
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                          Associated Faculty
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {book.book_associated_faculty.map((faculty, idx) => (
                            <span
                              key={faculty.id || idx}
                              className="text-sm text-gray-600 font-medium"
                            >
                              {faculty.faculty_name}{idx < book.book_associated_faculty.length - 1 ? "," : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            />
          </div>

          {/* NPTEL Lectures Carousel Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-3">NPTEL Lectures</h2>
              <p className="text-gray-600 max-w-2xl">
                Online courses and video lectures developed by our faculty members as part of the National Programme on Technology Enhanced Learning.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md mb-8">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search courses by name..."
                value={nptelSearchTerm}
                onChange={(e) => setNptelSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black placeholder-gray-400 transition-all"
              />
            </div>

            {/* Carousel Rendering */}
            <Carousel
              items={filteredLectures}
              emptyMessage="No courses found matching your search."
              renderItem={(lecture) => {
                const embedUrl = getYouTubeEmbedUrl(lecture.nptel_course_link);
                return (
                  <div
                    key={lecture.id}
                    className="group bg-white border border-gray-100 rounded-lg overflow-hidden flex flex-col hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md h-full"
                  >
                    {/* YouTube Embed Player */}
                    {embedUrl ? (
                      <div className="aspect-video w-full bg-black relative">
                        <iframe
                          src={embedUrl}
                          title={lecture.nptel_course_name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gray-50 flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                        <Play size={36} className="mb-2 text-gray-300" />
                        <span className="text-sm font-medium">Video preview not available</span>
                      </div>
                    )}

                    {/* Course Info */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 min-h-[2.5rem]">
                        {lecture.nptel_course_name}
                      </h3>
                      
                      {lecture.course_associated_faculty && lecture.course_associated_faculty.length > 0 && (
                        <div className="mb-6">
                          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                            Instructor(s)
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {lecture.course_associated_faculty.map((faculty, idx) => (
                              <span
                                key={faculty.id || idx}
                                className="text-sm text-gray-600 font-medium"
                              >
                                {faculty.faculty_name}{idx < lecture.course_associated_faculty.length - 1 ? "," : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <a
                          href={lecture.nptel_course_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-black hover:text-gray-600 transition-colors"
                        >
                          Watch on YouTube
                          <ExternalLink size={14} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      )}

      {/* Timeline */}
      {activeTab === "history" && timeline_at_iith.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Department History and Timeline</h2>
          <div className="relative">
            {timeline_at_iith.map((item, index) => (
              <div key={index} className="flex mb-8 relative">
                <div className="w-24 md:w-32 flex-shrink-0 text-right pr-4">
                  <div className="font-bold text-black">{item.year}</div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-black absolute top-1 -left-2"></div>
                  {index < timeline_at_iith.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 absolute left-0 top-5"></div>
                  )}
                </div>
                <div className="flex-grow pl-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <p className="text-gray-700">{item.timeline_content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explore */}
      {activeTab === "explore" && Explore.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Explore MSME</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Explore.map((item, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-black mb-2">{item.program_name}</h3>
                <a
                  href={item.link_to_program}
                  className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
