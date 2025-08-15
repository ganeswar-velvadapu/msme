'use client';

import React, { useState } from 'react';

export default function PhDClient({ phdList }) {
  const [activeEntryIndex, setActiveEntryIndex] = useState(0);

  const phdEntries = phdList || [];
  const activeEntry = phdEntries[activeEntryIndex] || {};
  
  const {
    name = '',
    type_of_scholarship = '',
    brochure_link = '',
    admission = '',
  } = activeEntry;

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">PhD Programme</h1>

      {/* Entry Selection Tabs */}
      {phdEntries.length > 1 && (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {phdEntries.map((entry, index) => (
            <button
              key={index}
              onClick={() => setActiveEntryIndex(index)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                activeEntryIndex === index
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {entry.name || `Entry ${index + 1}`}
            </button>
          ))}
        </div>
      )}

      {/* Content Section */}
      <div className="space-y-6">
        {/* Specialization Name */}
        {name && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          </div>
        )}

        {/* Type of Scholarship */}
        {type_of_scholarship && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Type of Scholarship</h3>
            <p className="text-gray-800">{type_of_scholarship}</p>
          </div>
        )}

        {/* Admission Requirements */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Admission Requirements</h3>
          <div className="text-gray-800 leading-relaxed px-4 whitespace-pre-wrap">
            {admission || 'No admission information available.'}
          </div>
        </div>

        {/* Brochure Link */}
        {brochure_link && (
          <div className="text-center mt-8">
            <a
              href={brochure_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View Brochure (PDF)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}