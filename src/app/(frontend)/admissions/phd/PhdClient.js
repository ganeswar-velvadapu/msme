'use client';
import React, { useState } from 'react';

export default function PhDClient({ phdData }) {
  const [activeFellowshipIndex, setActiveFellowshipIndex] = useState(0);
  
  // Extract data from the phdData object
  const fellowships = phdData?.fellowships_phd || [];

  
  const activeFellowship = fellowships[activeFellowshipIndex] || {};

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">PhD Programme</h1>
      
      {/* Fellowship Type Selection */}
      {fellowships.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-center mb-4">Fellowship Types</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {fellowships.map((fellowship, index) => (
              <button
                key={fellowship.id || index}
                onClick={() => setActiveFellowshipIndex(index)}
                className={`px-6 py-3 rounded-lg font-medium transition cursor-pointer ${
                  index === activeFellowshipIndex
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {fellowship.fellowship_type || `Fellowship ${index + 1}`}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Active Fellowship Details */}
      {activeFellowship.fellowship_type && (
        <div className="space-y-6">
          {/* Fellowship Title */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold text-gray-800">
              {activeFellowship.fellowship_type}
            </h3>
          </div>

         

          {/* Brochure Links */}
          {activeFellowship.brochure_links && activeFellowship.brochure_links.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Brochures & Documents</h4>
              <div className="space-y-3">
                {activeFellowship.brochure_links.map((brochure, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-700">{brochure.link_text}</span>
                    <a
                      href={brochure.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                    >
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Links */}
          {activeFellowship.additional_links && activeFellowship.additional_links.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Important Links</h4>
              <div className="grid gap-4 md:grid-cols-2">
                {activeFellowship.additional_links.map((link, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-800 mb-1">{link.link_name}</h5>
                        {link.link_description && (
                          <p className="text-sm text-gray-600 mb-2">{link.link_description}</p>
                        )}
                      </div>
                    </div>
                    <a
                      href={link.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-black hover:text-blue-800 font-medium text-sm mt-2"
                    >
                      Visit Link →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

 

   
      {/* No Data Message */}
      {fellowships.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>PhD fellowship information coming soon...</p>
        </div>
      )}

    </div>
  );
}