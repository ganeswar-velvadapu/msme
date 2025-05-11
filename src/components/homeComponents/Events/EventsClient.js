"use client";
import { useState, useRef } from "react";

export default function EventsClient({ materialsScienceEvents }) {
  const scrollRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format date function
  const formatDate = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get image URL or use placeholder
  const getImageUrl = (event) => {
    if (event.events_image && event.events_image.url) {
      return event.events_image.url;
    }
    return "/api/placeholder/400/400"; 
  };
  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
  };

  // Event Modal Component
  const EventModal = () => {
    if (!selectedEvent) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-blur-sm p-4">
        <div 
          className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] shadow-2xl transform transition-all overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img 
              src={getImageUrl(selectedEvent)}
              alt={selectedEvent.events_title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <button 
              onClick={closeEventModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-500 bg-opacity-80 text-white">
                {selectedEvent.events_tag}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(selectedEvent.events_date)}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {selectedEvent.events_time}
              </span>
            </div>

            <h2 className="font-bold text-2xl text-gray-800 mb-4">{selectedEvent.events_title}</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-2">About This Event</h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedEvent.events_description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-700 mb-2">Location</h3>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{selectedEvent.events_venue}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {selectedEvent.events_web_page && (
                <a 
                  href={selectedEvent.events_web_page} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Event Website
                </a>
              )}
              
              {selectedEvent.events_pdf_broucher_link && (
                <a 
                  href={selectedEvent.events_pdf_broucher_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Download Brochure
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="">
        <div
          ref={scrollRef}
          className=""
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {materialsScienceEvents.map((event, index) => (
              <div
                key={index}
                className="event-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-indigo-200 transition-all duration-300 cursor-pointer"
                onClick={() => openEventModal(event)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={getImageUrl(event)} 
                    alt={event.events_title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                      {event.events_tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(event.events_date)}
                    </div>
                    |
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.events_time}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-indigo-700 transition-colors duration-200">
                    {event.events_title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {event.events_description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 mr-1 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="truncate">{event.events_venue}</span>
                  </div>
                  
                  <button 
                    className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 flex items-center transition-colors duration-200"
                  >
                    See details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && <EventModal />}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .event-card {
          animation: fadeIn 0.5s ease-out;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
