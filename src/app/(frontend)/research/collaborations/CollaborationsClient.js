"use client"
import { useState } from 'react';

export default function CollaborationsClient({collaborations}) {
  const [activeTab, setActiveTab] = useState('institutional');

  const filteredCollaborations = collaborations.filter(collab => 
    activeTab === 'industrial' 
      ? collab.collaboration_type === "Industrial Collaboration" 
      : collab.collaboration_type === "Institutional Collaboration"
  );

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Our Collaborations</h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'institutional' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-200'
              } transition-colors duration-200`}
              onClick={() => setActiveTab('institutional')}
            >
              Institutional
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'industrial' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-200'
              } transition-colors duration-200`}
              onClick={() => setActiveTab('industrial')}
            >
              Industrial
            </button>
          </div>
        </div>
        
        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCollaborations.map((collab) => (
            <div key={collab.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-black mb-4">{collab.institute_name}</h3>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-medium">Collaborator:</span> {collab.collaborator_name}</p>
                <p><span className="font-medium">Faculty:</span> {collab.faculty_collaborator_name}</p>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-black text-sm font-medium rounded-full">
                    {collab.collaboration_type === "Industrial Collaboration" ? "Industry" : "Institution"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCollaborations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No collaborations found.</p>
          </div>
        )}
      </div>
    </div>
  );
}