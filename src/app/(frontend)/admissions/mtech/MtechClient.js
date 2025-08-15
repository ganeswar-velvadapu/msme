'use client';
import { useState } from 'react';

export default function MTechClient({ mtechList }) {
  const [activeSpecializationIndex, setActiveSpecializationIndex] = useState(0);
  const [activeNameIndex, setActiveNameIndex] = useState(0);

  const mtechContent = mtechList[0] || {};
  const { specializations = [] } = mtechContent;
  
  const activeSpecialization = specializations[activeSpecializationIndex] || {};
  const { name: specializationNames = [] } = activeSpecialization;
  const activeNameEntry = specializationNames[activeNameIndex] || {};

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">M.Tech Admission</h1>

      <h2 className="text-2xl font-semibold text-center mb-4">Specializations</h2>

      {/* Specialization Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {specializations.map((spec, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSpecializationIndex(index);
              setActiveNameIndex(0);
            }}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              index === activeSpecializationIndex
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Specialization {index + 1}
          </button>
        ))}
      </div>

      {/* Name/Entry Tabs within Specialization */}
      {specializationNames.length > 0 && (
        <div className="border-b flex justify-center gap-6 mb-6">
          {specializationNames.map((nameEntry, index) => (
            <button
              key={index}
              onClick={() => setActiveNameIndex(index)}
              className={`py-2 px-3 font-semibold transition ${
                activeNameIndex === index
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {nameEntry.type_of_scholarship || `Entry ${index + 1}`}
            </button>
          ))}
        </div>
      )}

      {/* Content Section */}
      <div className="text-gray-800 text-base leading-relaxed px-4 space-y-4">
        {activeNameEntry.type_of_scholarship && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              {activeNameEntry.type_of_scholarship}
            </h3>
          </div>
        )}
        
        <div>
          <h4 className="text-lg font-semibold mb-2">Admission Requirements</h4>
          <p>{activeNameEntry.admission || "No admission information available."}</p>
        </div>
      </div>
    </div>
  );
}