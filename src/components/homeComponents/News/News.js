"use client";
import { useState, useEffect, useRef } from "react";

export default function LatestNews() {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Sample data - replace with your actual data
  const materialsScienceNews = [
    {
      id: 1,
      title: "New Advanced Materials Research Facility Opens",
      content:
        "Our department has launched a cutting-edge research facility dedicated to advanced materials and metallurgy.",
      fullContent:
        "Our department has launched a cutting-edge research facility dedicated to advanced materials and metallurgy. The new lab features high-temperature furnaces, electron microscopes, and mechanical testing equipment to support groundbreaking research in material properties and innovations. This $3 million investment will facilitate collaboration with industries and provide students with hands-on experience in material synthesis and characterization. Several projects are already underway, focusing on sustainable alloys and next-generation composites.",
      date: "2025-03-25",
      tag: "Research",
      image: "/api/placeholder/800/400",
    },
    {
      id: 2,
      title: "Students Win National Materials Innovation Challenge",
      content:
        "A team of students secured first place in a national competition with their innovative self-healing material design.",
      fullContent:
        "A team of undergraduate students secured first place in the National Materials Innovation Challenge with their self-healing composite material. The material, inspired by biological regeneration processes, demonstrated the ability to repair microcracks autonomously. The team’s innovation, using microcapsules filled with healing agents embedded within the polymer matrix, was praised for its potential applications in aerospace and automotive industries. The competition included 35 teams from top engineering schools nationwide. Their victory brings a $12,000 prize and industry internship opportunities.",
      date: "2025-03-20",
      tag: "Achievement",
      image: "/api/placeholder/800/400",
    },
    {
      id: 3,
      title: "Department Partners with Industry for Green Metallurgy Project",
      content:
        "Our department collaborates with leading industries to develop eco-friendly metal extraction techniques.",
      fullContent:
        "Our department collaborates with leading industries to develop eco-friendly metal extraction techniques, aiming to reduce carbon emissions and toxic byproducts. This five-year initiative focuses on refining metallurgical processes using sustainable reagents and energy-efficient methods. Faculty and graduate researchers will work with industry partners to scale lab discoveries into viable industrial solutions. The partnership provides research funding and hands-on experience for students interested in sustainable metallurgy careers. Initial trials on low-energy metal refining are set to begin this summer.",
      date: "2025-03-15",
      tag: "Partnership",
      image: "/api/placeholder/800/400",
    },
    {
      id: 4,
      title: "New Graduate Program in Nanomaterials Engineering Announced",
      content:
        "Starting Fall 2025, we will offer a graduate program focused on nanotechnology and advanced materials.",
      fullContent:
        "Starting Fall 2025, we will offer a specialized graduate program in Nanomaterials Engineering, equipping students with expertise in nanoscale materials for applications in energy, medicine, and manufacturing. The curriculum will cover quantum materials, nano-fabrication techniques, and functional coatings. A key feature of the program includes collaborations with top nanotechnology labs and industry placements. Applications are now open, with scholarships available for qualified applicants. An information session for prospective students will be held next month.",
      date: "2025-03-10",
      tag: "Academic",
      image: "/api/placeholder/800/400",
    },
    {
      id: 5,
      title: "Professor Lee Receives Materials Science Excellence Award",
      content:
        "Dr. Lee has been honored with the prestigious Materials Science Excellence Award for his work in alloy development.",
      fullContent:
        "Dr. Michael Lee has been honored with the prestigious Materials Science Excellence Award for his work in high-performance alloys. His pioneering research on lightweight, high-strength alloys has revolutionized applications in aerospace and automotive sectors. The award, presented by the International Society of Materials Science, recognizes his contributions to both fundamental materials science and industry applications. Dr. Lee has also mentored over 40 graduate students and established international collaborations to advance alloy research worldwide.",
      date: "2025-03-05",
      tag: "Faculty",
      image: "/api/placeholder/800/400",
    },
    {
      id: 6,
      title: "International Conference on Materials Science and Engineering Announced",
      content:
        "Our department will host an international conference on materials science, featuring world-renowned experts.",
      fullContent:
        "Our department will host the International Conference on Materials Science and Engineering this coming fall, bringing together top researchers and industry leaders. Scheduled for October 20-23, 2025, the conference will feature keynote addresses by Dr. Elena Vasquez from the European Advanced Materials Institute and Prof. Takashi Murakami from Kyoto University. Topics include emerging trends in biomaterials, energy storage materials, and smart materials. Abstract submissions are open, and early registration discounts are available until July 1st. Special sessions will be dedicated to graduate students and young researchers.",
      date: "2025-02-28",
      tag: "Event",
      image: "/api/placeholder/800/400",
    },
  ];

  // Updated tag color mapping with more vibrant colors
  const tagColors = {
    Research: "bg-indigo-100 text-indigo-800",
    Achievement: "bg-emerald-100 text-emerald-800",
    Partnership: "bg-sky-100 text-sky-800",
    Academic: "bg-amber-100 text-amber-800",
    Faculty: "bg-rose-100 text-rose-800",
    Event: "bg-violet-100 text-violet-800",
  };

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!paused && scrollContainer && !isPopupOpen) {
          scrollContainer.scrollTop += 1;
          if (
            scrollContainer.scrollTop + scrollContainer.clientHeight >=
            scrollContainer.scrollHeight
          ) {
            scrollContainer.scrollTop = 0;
          }
        }
      }, 50);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, [paused, isPopupOpen]);

  const handleReadMore = (item) => {
    setSelectedNews(item);
    setIsPopupOpen(true);
    setPaused(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPaused(false);
    document.body.style.overflow = "auto";
  };

  const handlePopupBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isPopupOpen) {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isPopupOpen]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 relative">
          Latest News
          {/* <span className="absolute -bottom-2 left-0 w-20 h-1 bg-indigo-600"></span> */}
        </h2>
      </div>
      <div
        className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => !isPopupOpen && setPaused(false)}
      >
        <div
          ref={scrollRef}
          className="h-[550px] md:h-[650px] overflow-y-auto scrollbar-hide grid grid-cols-1 gap-4 p-4"
        >
          {materialsScienceNews.map((item) => (
            <div
              key={item.id}
              className="news-item p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[item.tag]}`}
                >
                  {item.tag}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDate(item.date)}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800 cursor-pointer hover:text-indigo-700 transition-colors duration-200 mb-2">
                {item.title}
              </h3>
              
              <div className="mt-2 text-gray-600 text-sm flex-grow">
                {item.content}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleReadMore(item)}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center group bg-indigo-50 px-3 py-1 rounded-full"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && selectedNews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80 backdrop-blur-md p-4"
          onClick={handlePopupBackgroundClick}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden animate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-72 object-cover object-center"
              />
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-indigo-900 to-transparent">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${tagColors[selectedNews.tag]} mb-3 inline-block`}
                >
                  {selectedNews.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedNews.title}
                </h3>
                <p className="text-indigo-100 text-sm">
                  {formatDate(selectedNews.date)}
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedNews.fullContent}
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6 flex justify-between items-center">
                <button
                  onClick={closePopup}
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-popup {
          animation: popup 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}