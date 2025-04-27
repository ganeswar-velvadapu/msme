"use client"
import { useState, useEffect } from 'react';

export default function ResearchFacilities() {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Dummy data for carousel (important facilities)
  const carouselData = [
    {
      id: 1,
      research_facility_name: "Advanced Materials Characterization Lab",
      research_facility_location: "Building A, Room 201",
      research_facility_fic: "Dr. Jennifer Smith",
      research_facility_fic_email: "jsmith@university.edu",
      research_facility_staff_incharge: "michael.tech@university.edu",
      research_facility_usage_charges: "$50/hour",
      research_facility_forms: "materials_lab_request.pdf",
      research_facility_image_url: "/api/placeholder/1000/500"
    },
    {
      id: 2,
      research_facility_name: "High-Performance Computing Cluster",
      research_facility_location: "Computing Center, Floor 3",
      research_facility_fic: "Dr. Robert Chen",
      research_facility_fic_email: "rchen@university.edu",
      research_facility_staff_incharge: "hpc.admin@university.edu",
      research_facility_usage_charges: "$20/CPU hour",
      research_facility_forms: "hpc_access_request.pdf",
      research_facility_image_url: "/api/placeholder/1000/500"
    },
    {
      id: 3,
      research_facility_name: "Nanofabrication Facility",
      research_facility_location: "Science Complex, Wing B",
      research_facility_fic: "Dr. Sarah Johnson",
      research_facility_fic_email: "sjohnson@university.edu",
      research_facility_staff_incharge: "nano.lab@university.edu",
      research_facility_usage_charges: "$75/hour",
      research_facility_forms: "nanofab_request.pdf",
      research_facility_image_url: "/api/placeholder/1000/500"
    }
  ];

  // Dummy data for all facilities table
  const allFacilities = [
    ...carouselData,
    {
      id: 4,
      research_facility_name: "Electron Microscopy Suite",
      research_facility_location: "Building C, Room 105",
      research_facility_fic: "Dr. James Wilson",
      research_facility_fic_email: "jwilson@university.edu",
      research_facility_staff_incharge: "microscopy@university.edu",
      research_facility_usage_charges: "$60/hour",
      research_facility_forms: "microscopy_request.pdf"
    },
    {
      id: 5,
      research_facility_name: "Biotechnology Research Center",
      research_facility_location: "Life Sciences Building, Floor 2",
      research_facility_fic: "Dr. Maria Garcia",
      research_facility_fic_email: "mgarcia@university.edu",
      research_facility_staff_incharge: "biotech@university.edu",
      research_facility_usage_charges: "$45/hour",
      research_facility_forms: "biotech_access.pdf"
    },
    {
      id: 6,
      research_facility_name: "Robotics & Automation Lab",
      research_facility_location: "Engineering Hall, Room 302",
      research_facility_fic: "Dr. Thomas Lee",
      research_facility_fic_email: "tlee@university.edu",
      research_facility_staff_incharge: "robotics@university.edu",
      research_facility_usage_charges: "$55/hour",
      research_facility_forms: "robotics_lab_access.pdf"
    },
    {
      id: 7,
      research_facility_name: "Climate Simulation Chamber",
      research_facility_location: "Earth Sciences Building, Basement",
      research_facility_fic: "Dr. Elizabeth Brown",
      research_facility_fic_email: "ebrown@university.edu",
      research_facility_staff_incharge: "climate.lab@university.edu",
      research_facility_usage_charges: "$80/hour",
      research_facility_forms: "climate_chamber_request.pdf"
    },
    {
      id: 8,
      research_facility_name: "NMR Spectroscopy Facility",
      research_facility_location: "Chemistry Building, Room 110",
      research_facility_fic: "Dr. David Kim",
      research_facility_fic_email: "dkim@university.edu",
      research_facility_staff_incharge: "nmr@university.edu",
      research_facility_usage_charges: "$65/hour",
      research_facility_forms: "nmr_request.pdf"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [carouselData.length]);

  // Next slide handler
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  // Previous slide handler
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Research Facilities</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art research facilities available to faculty, researchers, and students to support cutting-edge research and innovation.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mb-16 relative">
          <h2 className="text-2xl font-bold text-black mb-6">Featured Facilities</h2>
          
          <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
            {/* Carousel */}
            <div className="relative h-96">
              {carouselData.map((facility, index) => (
                <div 
                  key={facility.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-black mb-4">{facility.research_facility_name}</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-medium">Location:</span> {facility.research_facility_location}</p>
                        <p><span className="font-medium">Faculty in Charge:</span> {facility.research_facility_fic}</p>
                        <p><span className="font-medium">Contact:</span> {facility.research_facility_fic_email}</p>
                        <p><span className="font-medium">Usage Fee:</span> {facility.research_facility_usage_charges}</p>
                        <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
                          Request Access
                        </button>
                      </div>
                    </div>
                    <div className="relative h-full bg-gray-200">
                      <img 
                        src={facility.research_facility_image_url} 
                        alt={facility.research_facility_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">All Research Facilities</h2>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty In Charge</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage Fee</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allFacilities.map((facility) => (
                    <tr key={facility.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{facility.research_facility_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{facility.research_facility_location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{facility.research_facility_fic}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{facility.research_facility_fic_email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{facility.research_facility_usage_charges}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 text-xs">
                          Request Access
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}