"use client"
import { useState } from 'react';

export default function Projects() {
  // State for filtering
  const [activeProjectType, setActiveProjectType] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  
  // Dummy data based on your schema
  const projectsData = [
    {
      id: 1,
      project_title: "Advanced Machine Learning for Climate Prediction",
      project_pi: "Dr. Sarah Johnson",
      project_duration: "2023-2025",
      project_agency: "National Science Foundation",
      project_type: "Research Projects",
      project_status: "Ongoing"
    },
    {
      id: 2,
      project_title: "Smart City Infrastructure Optimization",
      project_pi: "Dr. Michael Chen",
      project_duration: "2022-2024",
      project_agency: "Department of Transportation",
      project_type: "Research Projects",
      project_status: "Ongoing"
    },
    {
      id: 3,
      project_title: "Quantum Computing Applications in Cryptography",
      project_pi: "Dr. Robert Taylor",
      project_duration: "2021-2023",
      project_agency: "Department of Defense",
      project_type: "Research Projects",
      project_status: "Completed"
    },
    {
      id: 4,
      project_title: "Pharmaceutical Process Optimization",
      project_pi: "Dr. Emily Rodriguez",
      project_duration: "2023-2024",
      project_agency: "Johnson Pharmaceuticals",
      project_type: "Consultancy Projects",
      project_status: "Ongoing"
    },
    {
      id: 5,
      project_title: "Renewable Energy Integration Solutions",
      project_pi: "Dr. David Wilson",
      project_duration: "2022-2023",
      project_agency: "GreenPower Corp",
      project_type: "Consultancy Projects",
      project_status: "Completed"
    },
    {
      id: 6,
      project_title: "Sustainable Materials for Construction",
      project_pi: "Dr. Lisa Brown",
      project_duration: "2022-2024",
      project_agency: "BuildTech Industries",
      project_type: "Consultancy Projects",
      project_status: "Ongoing"
    },
    {
      id: 7,
      project_title: "Neural Networks for Medical Imaging",
      project_pi: "Dr. James Miller",
      project_duration: "2021-2024",
      project_agency: "National Institutes of Health",
      project_type: "Research Projects",
      project_status: "Ongoing"
    },
    {
      id: 8,
      project_title: "Cybersecurity Risk Assessment Framework",
      project_pi: "Dr. Jennifer Garcia",
      project_duration: "2023-2024",
      project_agency: "SecureTech Systems",
      project_type: "Consultancy Projects",
      project_status: "Ongoing"
    }
  ];

  const filteredProjects = projectsData.filter(project => 
    (activeProjectType === 'all' || project.project_type === activeProjectType) &&
    (activeStatus === 'all' || project.project_status === activeStatus)
  );

  // Count summary statistics
  const projectStats = {
    total: projectsData.length,
    research: projectsData.filter(p => p.project_type === "Research Projects").length,
    consultancy: projectsData.filter(p => p.project_type === "Consultancy Projects").length,
    ongoing: projectsData.filter(p => p.project_status === "Ongoing").length,
    completed: projectsData.filter(p => p.project_status === "Completed").length
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Research Projects</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of ongoing and completed research and consultancy projects across various disciplines.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Total Projects</h3>
            <p className="text-3xl font-bold text-black mt-2">{projectStats.total}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Research</h3>
            <p className="text-3xl font-bold text-black mt-2">{projectStats.research}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Consultancy</h3>
            <p className="text-3xl font-bold text-black mt-2">{projectStats.consultancy}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Ongoing</h3>
            <p className="text-3xl font-bold text-black mt-2">{projectStats.ongoing}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Completed</h3>
            <p className="text-3xl font-bold text-black mt-2">{projectStats.completed}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Filter by Project Type</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeProjectType === 'all' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  onClick={() => setActiveProjectType('all')}
                >
                  All Types
                </button>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeProjectType === 'Research Projects' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  onClick={() => setActiveProjectType('Research Projects')}
                >
                  Research
                </button>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeProjectType === 'Consultancy Projects' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  onClick={() => setActiveProjectType('Consultancy Projects')}
                >
                  Consultancy
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Filter by Status</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeStatus === 'all' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  onClick={() => setActiveStatus('all')}
                >
                  All Status
                </button>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeStatus === 'Ongoing' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  onClick={() => setActiveStatus('Ongoing')}
                >
                  Ongoing
                </button>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium ${activeStatus === 'Completed' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  onClick={() => setActiveStatus('Completed')}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-black line-clamp-2">{project.project_title}</h2>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.project_status === 'Ongoing' ? 'bg-gray-200 text-gray-800' : 'bg-black text-white'
                  }`}>
                    {project.project_status}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <span className="text-gray-500 font-medium w-24 flex-shrink-0">PI:</span>
                    <span className="text-black">{project.project_pi}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 font-medium w-24 flex-shrink-0">Duration:</span>
                    <span className="text-black">{project.project_duration}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 font-medium w-24 flex-shrink-0">Agency:</span>
                    <span className="text-black">{project.project_agency}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-block text-xs font-medium px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                    {project.project_type === 'Research Projects' ? 'Research' : 'Consultancy'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500">No projects match your current filters.</p>
            <button 
              className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={() => {
                setActiveProjectType('all');
                setActiveStatus('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}