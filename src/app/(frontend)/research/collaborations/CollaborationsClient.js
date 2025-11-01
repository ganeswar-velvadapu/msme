"use client";
import { useState } from "react";

export default function CollaborationsClient({ collaborations }) {
  // console.log(collaborations)
  const [activeTab, setActiveTab] = useState("institutional");

  const filteredCollaborations = collaborations.filter((collab) =>
    activeTab === "industrial"
      ? collab.collaboration_type === "Industrial Collaboration"
      : collab.collaboration_type === "Institutional Collaboration"
  );

  // console.log(filteredCollaborations)

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Our Collaborations</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <button
              className={`px-6 py-3 font-medium ${activeTab === "institutional"
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
                } transition-colors duration-200`}
              onClick={() => setActiveTab("institutional")}
            >
              Institutional
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "industrial"
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
                } transition-colors duration-200`}
              onClick={() => setActiveTab("industrial")}
            >
              Industrial
            </button>
          </div>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredCollaborations.map((collab) => (
            <div
              key={collab.id}
              className="bg-white w-36 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            >
              {collab.logo?.url && (
                <img
                  src={collab.logo?.url}
                  alt="Collaboration Logo"
                  className="w-32 h-auto object-contain"
                />
              )}
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