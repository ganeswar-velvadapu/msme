"use client";
import { useState } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    { date: new Date(2025, 2, 6), title: "MSME Export Promotion Workshop", time: "10:00 AM" },
    { date: new Date(2025, 2, 11), title: "Funding Opportunities Seminar", time: "2:00 PM" },
    { date: new Date(2025, 2, 19), title: "Digital Marketing for MSMEs", time: "11:00 AM" },
    { date: new Date(2025, 2, 27), title: "Supply Chain Management Session", time: "3:00 PM" }
  ]);
  // Helper functions for calendar
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  
  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Create array of days for the current month
  const totalDays = daysInMonth(currentYear, currentMonth);
  const firstDay = firstDayOfMonth(currentYear, currentMonth);
  
  // Create calendar days array with empty slots for days before the 1st
  const days = Array(firstDay).fill(null);
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }
  
  // Month navigation
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  // Check if a day has events
  const hasEvents = (day) => {
    if (!day) return false;
    return events.some(event => {
      return event.date.getFullYear() === currentYear &&
             event.date.getMonth() === currentMonth &&
             event.date.getDate() === day;
    });
  };
  
  // Get events for a specific day
  const getEventsForDay = (day) => {
    if (!day) return [];
    return events.filter(event => 
      event.date.getFullYear() === currentYear &&
      event.date.getMonth() === currentMonth &&
      event.date.getDate() === day
    );
  };
  
  // Handle day selection
  const handleDayClick = (day) => {
    if (!day) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };
  
  // Add new event
  const addEvent = (title, time) => {
    if (!selectedDate || !title) return;
    
    const newEvent = {
      date: new Date(selectedDate),
      title,
      time: time || "12:00 PM"
    };
    
    setEvents([...events, newEvent]);
  };

  // Format month name
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">MSME Calendar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={prevMonth}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              &larr;
            </button>
            <h2 className="text-xl font-semibold">{monthName} {currentYear}</h2>
            <button 
              onClick={nextMonth}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              &rarr;
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="py-2 font-medium bg-gray-100">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {days.map((day, index) => (
              <div 
                key={index}
                onClick={() => handleDayClick(day)}
                className={`
                  py-2 border hover:bg-gray-50 cursor-pointer relative
                  ${hasEvents(day) ? 'font-bold' : ''}
                  ${selectedDate && day === selectedDate.getDate() && 
                    currentMonth === selectedDate.getMonth() && 
                    currentYear === selectedDate.getFullYear() ? 
                    'bg-blue-100 border-blue-300' : ''}
                `}
              >
                {day}
                {hasEvents(day) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Events Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-3">
            {selectedDate ? 
              `Events for ${selectedDate.toLocaleDateString()}` : 
              "Upcoming Events"
            }
          </h3>
          
          {selectedDate ? (
            <>
              <div className="mb-4">
                {getEventsForDay(selectedDate.getDate()).length > 0 ? (
                  <div className="space-y-3">
                    {getEventsForDay(selectedDate.getDate()).map((event, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-2 py-1">
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-600">{event.time}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No events for this day</p>
                )}
              </div>
              
              {/* Add Event Form */}
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">Add New Event</h4>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    id="eventTitle"
                    placeholder="Event title"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="text" 
                    id="eventTime"
                    placeholder="Time (e.g. 3:00 PM)"
                    className="w-full p-2 border rounded"
                  />
                  <button 
                    onClick={() => {
                      const title = document.getElementById('eventTitle').value;
                      const time = document.getElementById('eventTime').value;
                      addEvent(title, time);
                      document.getElementById('eventTitle').value = '';
                      document.getElementById('eventTime').value = '';
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                  >
                    Add Event
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              {events
                .sort((a, b) => a.date - b.date)
                .slice(0, 5)
                .map((event, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-2 py-1">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-gray-600">
                      {event.date.toLocaleDateString()} • {event.time}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}