"use client";
import { useState } from 'react';

export default function ResearchAreasClient({ researchAreas }) {
  const [expandedArea, setExpandedArea] = useState(null);

  const toggleExpand = (id) => {
    if (expandedArea === id) {
      setExpandedArea(null);
    } else {
      setExpandedArea(id);
    }
  };

  // Sample data for demonstration
  const sampleResearchAreas = researchAreas || [
    {
      id: 1,
      research_area_name: "Artificial Intelligence & Machine Learning",
      about_research_area: "Our AI research focuses on developing cutting-edge algorithms and models that can solve complex real-world problems. We explore deep learning, natural language processing, computer vision, and reinforcement learning to create intelligent systems that can understand, learn, and adapt.",
      research_area_photo: {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
      },
      research_areas: [
        { research_area_type: "Deep Learning" },
        { research_area_type: "Natural Language Processing" },
        { research_area_type: "Computer Vision" },
        { research_area_type: "Reinforcement Learning" }
      ],
      research_areas_associated_faculty: [
        { research_area_faculty_name: "Dr. Sarah Chen" },
        { research_area_faculty_name: "Prof. Michael Rodriguez" },
        { research_area_faculty_name: "Dr. Aisha Patel" }
      ]
    },
    {
      id: 2,
      research_area_name: "Renewable Energy Systems",
      about_research_area: "Advancing sustainable energy solutions through innovative research in solar, wind, and battery technologies. Our interdisciplinary approach combines materials science, engineering, and environmental studies to create more efficient and cost-effective renewable energy systems.",
      research_area_photo: {
        url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop"
      },
      research_areas: [
        { research_area_type: "Solar Energy" },
        { research_area_type: "Wind Power" },
        { research_area_type: "Energy Storage" },
        { research_area_type: "Smart Grids" }
      ],
      research_areas_associated_faculty: [
        { research_area_faculty_name: "Dr. Emily Johnson" },
        { research_area_faculty_name: "Prof. David Kim" }
      ]
    }
  ];

  const dataToUse = researchAreas || sampleResearchAreas;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Research Areas
            </h1>
          </div>
          
        </div>

        {/* Research Areas Grid */}
        <div className="space-y-8">
          {dataToUse.map((area, areaIndex) => (
            <div 
              key={area.id || areaIndex} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div 
                className="p-8 cursor-pointer flex justify-between items-center bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
                onClick={() => toggleExpand(area.id || areaIndex)}
              >
                <div className="flex items-center space-x-4">
                  
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{area.research_area_name}</h2>
                </div>
                
                <button className="p-2 rounded-full hover:bg-white transition-all duration-300 shadow-md">
                  <div className={`transform transition-transform duration-300 ${expandedArea === (area.id || areaIndex) ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-500 ${expandedArea === (area.id || areaIndex) ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
                  
                  {/* Content Layout */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Photo */}
                    <div className="lg:col-span-1">
                      {area.research_area_photo && (
                        <div className="relative group">
                          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div> */}
                          <img 
                            src={area.research_area_photo.url} 
                            alt={area.research_area_name} 
                            className="relative w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" 
                          />
                        </div>
                      )}
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* About Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          {/* <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> */}
                          About this Research Area
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{area.about_research_area}</p>
                      </div>

                      {/* Research Specializations */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          {/* <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> */}
                          Research Specializations
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {area.research_areas?.map((subArea, index) => (
                            <span 
                              key={index} 
                              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 rounded-full text-sm font-semibold border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                              {subArea.research_area_type}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Faculty Members */}
                      <div className='overflow-y-auto'>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          Faculty Members
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {area.research_areas_associated_faculty?.map((faculty, index) => (
                            <div 
                              key={index} 
                              className="group p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                            >
                              <div className="flex items-center space-x-3">
                                <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                  {faculty.research_area_faculty_name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}