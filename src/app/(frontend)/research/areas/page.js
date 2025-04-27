"use client"
import { useState } from 'react';

export default function ResearchAreas() {
  
  const researchAreasData = [
    {
      id: 1,
      research_area_name: "Artificial Intelligence",
      research_areas: [
        { research_area_type: "Machine Learning" },
        { research_area_type: "Natural Language Processing" },
        { research_area_type: "Computer Vision" }
      ],
      about_research_area: "Our AI research focuses on developing novel algorithms and models to solve complex problems across various domains. We explore deep learning architectures, reinforcement learning strategies, and cognitive computing approaches to advance the field of artificial intelligence.",
      research_areas_associated_faculty: [
        { research_area_faculty_name: "Dr. Emily Rodriguez" },
        { research_area_faculty_name: "Dr. James Wilson" },
        { research_area_faculty_name: "Dr. Sarah Johnson" }
      ]
    },
    {
      id: 2,
      research_area_name: "Cybersecurity",
      research_areas: [
        { research_area_type: "Network Security" },
        { research_area_type: "Cryptography" },
        { research_area_type: "Security Analytics" }
      ],
      about_research_area: "The Cybersecurity research group investigates cutting-edge methods to protect digital infrastructure from evolving threats. Our research encompasses vulnerability assessment, intrusion detection systems, and secure system design principles to safeguard critical data and networks.",
      research_areas_associated_faculty: [
        { research_area_faculty_name: "Dr. Michael Chen" },
        { research_area_faculty_name: "Dr. Lisa Taylor" },
        { research_area_faculty_name: "Dr. Robert Williams" }
      ]
    },
    {
      id: 3,
      research_area_name: "Quantum Computing",
      research_areas: [
        { research_area_type: "Quantum Algorithms" },
        { research_area_type: "Quantum Information Theory" },
        { research_area_type: "Quantum Error Correction" }
      ],
      about_research_area: "Our Quantum Computing research explores the principles and applications of quantum mechanics in computation. We develop quantum algorithms, study quantum error correction techniques, and investigate quantum information theory to advance the field towards practical quantum computing technologies.",
      research_areas_associated_faculty: [
        { research_area_faculty_name: "Dr. David Peterson" },
        { research_area_faculty_name: "Dr. Catherine Brown" },
        { research_area_faculty_name: "Dr. Steven Lee" }
      ]
    },
    {
      id: 4,
      research_area_name: "Biotechnology",
      research_areas: [
        { research_area_type: "Genomics" },
        { research_area_type: "Bioinformatics" },
        { research_area_type: "Synthetic Biology" }
      ],
      about_research_area: "The Biotechnology research area combines biological sciences with computational approaches to solve complex biological problems. Our work spans genomics, proteomics, and bioinformatics to develop new tools and methods for understanding biological systems and creating innovative biotechnological applications.",
      research_areas_associated_faculty: [
        { research_area_faculty_name: "Dr. Maria Garcia" },
        { research_area_faculty_name: "Dr. Alex Thompson" },
        { research_area_faculty_name: "Dr. Thomas Wilson" }
      ]
    }
  ];

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
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our diverse research areas where faculty and students collaborate to solve complex problems and advance knowledge across multiple disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {researchAreasData.map((area) => (
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