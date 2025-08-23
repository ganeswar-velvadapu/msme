"use client";
import { useState } from 'react';

export default function ResearchAreasClient({ researchAreas }) {


  // console.log(researchAreas[0].research_area_photo)



  // // Sample data for demonstration
  // const sampleResearchAreas = researchAreas || [
  //   {
  //     id: 1,
  //     research_area_name: "Materials For Energy and Environment",
  //     about_research_area: "Materials science plays a crucial role in advancing technologies for sustainable energy and environmental protection. At MSME, thermoelectric materials, are gaining traction for waste heat recovery, and are being engineered at the nanoscale to enhance their efficiency and scalability. Researchers are investigating batteries, especially lithium-ion and emerging solid-state types, are central to energy storage solutions. Material innovations in electrochemical processes are ongoing to improving their performance, safety, and lifespan. We are also actively investigating materials and catalysts routes for green hydrogen production, technology that is a cornerstone of a sustainable energy future. Researchers at MSME are exploring critical minerals are essential for the global transition to clean energy technologies like solar, wind, and electric vehicles. Additionally, we are developing carbon capture technologies that leverage advanced porous materials, such as metal-organic frameworks (MOFs), to selectively capture CO₂ from industrial emissions.",
  //     research_area_photo: {
  //       url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
  //     },
  //     research_areas: [
  //       { research_area_type: "100% Recyclable Materials" },
  //       { research_area_type: "Thermoelectric Materials" },
  //       { research_area_type: "Green Hydrogen" },
  //       { research_area_type: "Solar Energy" },
  //       { research_area_type: "Battery Technology" }
  //     ],
  //     research_areas_associated_faculty: [
  //       { research_area_faculty_name: "Suhash R. Dey" },
  //       { research_area_faculty_name: "Atul Deshpande" },
  //       { research_area_faculty_name: "Heman R. Devi" },
  //       { research_area_faculty_name: "Deepu J. Babu" },
  //       { research_area_faculty_name: "Suresh Perumal" },
  //       { research_area_faculty_name: "Ashok Kamaraj" },
  //       { research_area_faculty_name: "Anuj Goyal" }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     research_area_name: "Artificial Intelligence & Machine Learning",
  //     about_research_area: "Our AI research focuses on developing cutting-edge algorithms and models that can solve complex real-world problems. We explore deep learning, natural language processing, computer vision, and reinforcement learning to create intelligent systems that can understand, learn, and adapt.",
  //     research_area_photo: {
  //       url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  //     },
  //     research_areas: [
  //       { research_area_type: "Deep Learning" },
  //       { research_area_type: "Natural Language Processing" },
  //       { research_area_type: "Computer Vision" },
  //       { research_area_type: "Reinforcement Learning" }
  //     ],
  //     research_areas_associated_faculty: [
  //       { research_area_faculty_name: "Dr. Sarah Chen" },
  //       { research_area_faculty_name: "Prof. Michael Rodriguez" },
  //       { research_area_faculty_name: "Dr. Aisha Patel" }
  //     ]
  //   }
  // ];

  const dataToUse = researchAreas || sampleResearchAreas;

  // Icon components for different research areas
  const getResearchIcon = (icons) => {

    return (
      <>
        <div className="p-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {icons.map((icon, index) => (
              <div key={icon.id || index} className="flex justify-center">
                <img
                  src={icon.image.url}
                  alt={`Icon ${index + 1}`}
                  className="w-30 h-30 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Areas
          </h1>
        </div>

        {/* Research Areas Cards */}
        <div className="space-y-6">
          {dataToUse.map((area, areaIndex) => (
            <div
              key={area.id || areaIndex}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
                  {area.research_area_name}
                </h2>



                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-base leading-relaxed text-justify">
                    {area.about_research_area}
                  </p>
                </div>

                {/* Research Icons */}
                {getResearchIcon(area.research_area_photo)}


                <h3 className='mb-4 font-bold text-xl'>Faculty Memebers</h3>
                {/* Faculty Members Tags */}
                <div className="flex flex-wrap gap-3">
                  

                  {area.research_areas_associated_faculty?.map((faculty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {faculty.research_area_faculty_name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}