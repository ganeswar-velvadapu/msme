"use client";

import { useState, useEffect } from "react";
import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
} from "@schedule-x/calendar";
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";
import { Calendar, Clock, MapPin, ExternalLink, FileText, X } from "lucide-react";
import { createEventsServicePlugin } from "@schedule-x/events-service";

export default function EventsCalendarClient({ materialsScienceEvents, isHome }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [eventsService] = useState(() => createEventsServicePlugin());

  const selectedTimeZone = "Asia/Kolkata";

  // Format date helper for the custom modal
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const eventDate = new Date(dateString);
    return eventDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format time helper for the custom modal
  const formatTime = (dateString) => {
    if (!dateString) return "";
    const eventDate = new Date(dateString);
    return eventDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Get image URL or placeholder
  const getImageUrl = (event) => {
    if (event.events_image && event.events_image.url) {
      return event.events_image.url;
    }
    return null;
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
  };

  // Initialize Schedule-X Calendar
  const monthGrid = createViewMonthGrid();
  const monthAgenda = createViewMonthAgenda();
  const week = createViewWeek();
  const day = createViewDay();

  const calendar = useNextCalendarApp({
    views: [monthGrid, monthAgenda, week, day],
    defaultView: isHome ? monthAgenda.name : monthGrid.name,
    timezone: selectedTimeZone,
    events: [],
    plugins: [eventsService],
    callbacks: {
      onEventClick(calendarEvent) {
        if (isHome) {
          window.location.href = "/events";
          return;
        }
        const originalEvent = materialsScienceEvents.find(
          (e) => e.id === calendarEvent.id
        );
        if (originalEvent) {
          setSelectedEvent(originalEvent);
          setIsModalOpen(true);
        }
      },
    },
  });

  useEffect(() => {
    setMounted(true);

    const clientFormattedEvents = (materialsScienceEvents || [])
      .map((event) => {
        if (!event.events_date) return null;
        try {
          const instant = Temporal.Instant.from(event.events_date);
          const start = instant.toZonedDateTimeISO(selectedTimeZone);
          const end = start;

          return {
            id: event.id,
            title: event.events_title || "Untitled Event",
            start: start,
            end: end,
          };
        } catch (error) {
          console.error("Error formatting event for Schedule-X:", error, event);
          // Fallback to plain date
          try {
            const plainDateStr = event.events_date.split("T")[0];
            return {
              id: event.id,
              title: event.events_title || "Untitled Event",
              start: Temporal.PlainDate.from(plainDateStr),
              end: Temporal.PlainDate.from(plainDateStr),
            };
          } catch (innerError) {
            return null;
          }
        }
      })
      .filter(Boolean);

    // Defer the set call to ensure the calendar component has mounted and initialized the plugin
    const timer = setTimeout(() => {
      try {
        if (calendar && typeof calendar.setTimezone === "function") {
          calendar.setTimezone(selectedTimeZone);
        }
        eventsService.set(clientFormattedEvents);
      } catch (err) {
        console.warn("Could not set events/timezone on initial mount. Retrying...", err);
        // Fallback retry if mounting took slightly longer
        const retryTimer = setTimeout(() => {
          try {
            if (calendar && typeof calendar.setTimezone === "function") {
              calendar.setTimezone(selectedTimeZone);
            }
            eventsService.set(clientFormattedEvents);
          } catch (retryErr) {
            console.error("Failed to set events/timezone on retry:", retryErr);
          }
        }, 150);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [materialsScienceEvents, eventsService, calendar, selectedTimeZone]);

  if (!mounted) {
    return (
      <div className="animate-pulse bg-gray-50/50 border border-gray-100 rounded-2xl h-[500px] w-full flex items-center justify-center text-gray-400">
        <span className="text-sm font-medium">Loading Events Calendar...</span>
      </div>
    );
  }

  return (
    <div className={`w-full ${isHome ? "max-w-lg mx-auto px-4" : ""}`}>
      {/* Timezone Selector Row */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 bg-gray-50 border border-gray-100 p-3 rounded-2xl">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Calendar Timezone:
        </span>
        Asia/Kolkata
      </div>

      {!isHome && (
        <div className="mb-4 text-center">
          <p className="text-xs text-gray-400 font-medium flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Note: Click on any event to view full details (description, venue, brochure, etc.)
          </p>
        </div>
      )}

      <div className="sx-react-calendar-wrapper shadow-md rounded-2xl overflow-hidden border border-gray-100 bg-white">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>

      {/* Premium Event Details Modal */}
      {isModalOpen && selectedEvent && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={closeEventModal}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] my-8 shadow-2xl transform transition-all overflow-y-auto border border-gray-100 scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header/Image Section */}
            <div className="relative">
              {getImageUrl(selectedEvent) ? (
                <div className="h-72 w-full bg-slate-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <img
                    src={getImageUrl(selectedEvent)}
                    alt={selectedEvent.events_title}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              ) : (
                <div className="h-40 w-full bg-gradient-to-br from-gray-50 to-slate-100 flex items-center justify-center border-b border-gray-100">
                  <Calendar className="h-16 w-16 text-gray-300" />
                </div>
              )}

              <button
                onClick={closeEventModal}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all z-10 text-gray-500 hover:text-gray-800"
              >
                <X className="h-5 w-5" />
              </button>

              {selectedEvent.events_tag && (
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-black text-white uppercase tracking-wider shadow-sm">
                    {selectedEvent.events_tag}
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              {/* Date & Time Info */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  {formatDate(selectedEvent.events_date)}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <Clock className="h-4 w-4 text-gray-500" />
                  {formatTime(selectedEvent.events_date)}
                </span>
              </div>

              <h2 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-5 leading-tight">
                {selectedEvent.events_title}
              </h2>

              {/* Description */}
              {selectedEvent.events_description && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-base">About This Event</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                    {selectedEvent.events_description}
                  </p>
                </div>
              )}

              {/* Location/Venue */}
              {selectedEvent.events_venue && (
                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-2 text-base">Location</h3>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-gray-700 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{selectedEvent.events_venue}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                {selectedEvent.events_web_page && (
                  <a
                    href={selectedEvent.events_web_page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 active:bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Event Website
                  </a>
                )}

                {selectedEvent.events_pdf_broucher_link && (
                  <a
                    href={selectedEvent.events_pdf_broucher_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 font-semibold py-3 px-4 rounded-xl transition-all shadow-sm"
                  >
                    <FileText className="h-4 w-4 text-gray-500" />
                    Download Brochure
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styled JSX for Responsive Calendar Dimensions */}
      <style jsx global>{`
        .sx-react-calendar-wrapper {
          width: 100%;
          height: ${isHome ? "450px" : "700px"};
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .scale-in {
          animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
