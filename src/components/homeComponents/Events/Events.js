"use client";
import { useState, useEffect, useRef } from "react";

export default function UpcomingEvents() {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const materialsScienceEvents = [
    {
      eventName: "Advanced Materials Symposium",
      eventDescription:
        "Explore the latest breakthroughs in nanomaterials, composites, and smart materials with leading researchers and industry experts.",
      eventDate: "2025-04-15",
      eventVenue: "Innovation Hall, Central Campus",
    },
    {
      eventName: "Metallurgical Processing Workshop",
      eventDescription:
        "Hands-on training in modern metallurgical processing techniques, including heat treatment and alloy design.",
      eventDate: "2025-04-22",
      eventVenue: "Materials Lab, Engineering Building",
    },
    {
      eventName: "Sustainable Materials Seminar",
      eventDescription:
        "Learn about eco-friendly materials and sustainable manufacturing practices for a greener future.",
      eventDate: "2025-05-10",
      eventVenue: "Green Auditorium",
    },
    {
      eventName: "Mechanical Properties Masterclass",
      eventDescription:
        "Deep dive into mechanical testing methods and performance analysis of advanced materials.",
      eventDate: "2025-05-17",
      eventVenue: "Testing Lab, East Wing",
    },
    {
      eventName: "Corrosion and Material Degradation Forum",
      eventDescription:
        "Expert discussion on corrosion prevention, material durability, and failure analysis in critical industries.",
      eventDate: "2025-06-05",
      eventVenue: "City Conference Center",
    },
    {
      eventName: "Additive Manufacturing Workshop",
      eventDescription:
        "Learn about the latest advancements in 3D printing and additive manufacturing for metals and polymers.",
      eventDate: "2025-06-20",
      eventVenue: "Manufacturing Sciences Hall",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!paused && scrollContainer) {
          scrollContainer.scrollTop += 1;

          // Reset to top when reaching bottom
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
  }, [paused]);

  // Format event type based on name (for tag-like display)
  const getEventType = (eventName) => {
    if (eventName.includes("Workshop")) return "Workshop";
    if (eventName.includes("Conference")) return "Conference";
    if (eventName.includes("Seminar")) return "Seminar";
    if (eventName.includes("Forum")) return "Forum";
    if (eventName.includes("Masterclass")) return "Masterclass";
    return "Event";
  };

  // Event type color mapping to match news tag colors
  const eventTypeColors = {
    Workshop: "bg-emerald-100 text-emerald-800",
    Conference: "bg-indigo-100 text-indigo-800",
    Seminar: "bg-sky-100 text-sky-800",
    Forum: "bg-violet-100 text-violet-800",
    Masterclass: "bg-amber-100 text-amber-800",
    Event: "bg-rose-100 text-rose-800",
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 relative">
          Upcoming Events
          {/* <span className="absolute -bottom-2 left-0 w-20 h-1 bg-indigo-600"></span> */}
        </h2>
      </div>
      <div
        className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={scrollRef}
          className="h-[550px] md:h-[650px] overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
        >
          {materialsScienceEvents.map((item, index) => {
            const eventType = getEventType(item.eventName);
            const eventDate = new Date(item.eventDate);
            return (
              <div
                key={index}
                className="event-item p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span 
                    className={`text-xs font-medium px-3 py-1 rounded-full ${eventTypeColors[eventType]}`}
                  >
                    {eventType}
                  </span>
                  <span className="text-xs text-gray-500">
                    {eventDate.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center justify-center bg-indigo-100 rounded-lg p-3 w-16 h-16 text-center flex-shrink-0">
                    <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                      {eventDate.toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                    <span className="text-2xl font-bold text-indigo-800">
                      {eventDate.getDate()}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {item.eventName}
                    </h3>
                    
                    <div className="text-gray-600 text-sm flex-grow">
                      {item.eventDescription}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-xs text-gray-700">
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
                  {item.eventVenue}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Matching styles from news component */}
      <style jsx>{`
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