"use client"
import { useState } from 'react';

export default function ResearchAreasClient({researchAreas}) {
  
  

  const [expandedArea, setExpandedArea] = useState(null);

  const toggleExpand = (id) => {
    if (expandedArea === id) {
      setExpandedArea(null);
    } else {
      setExpandedArea(id);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Research Areas</h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {researchAreas.map((area) => (
            <div 
              key={area.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(area.id)}
              >
                <h2 className="text-2xl font-bold text-black">{area.research_area_name}</h2>
                <button className="text-black">
                  {expandedArea === area.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>

              {expandedArea === area.id && (
                <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">About this Research Area</h3>
                    <p className="text-gray-700">{area.about_research_area}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">Research Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {area.research_areas.map((subArea, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium"
                        >
                          {subArea.research_area_type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Faculty Members</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {area.research_areas_associated_faculty.map((faculty, index) => (
                        <div 
                          key={index} 
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <p className="font-medium text-black">{faculty.research_area_faculty_name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}