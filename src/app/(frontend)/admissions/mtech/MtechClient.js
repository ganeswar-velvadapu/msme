'use client';
import { useState } from 'react';

export default function MTechClient({ mtech }) {
  const [activeSpecializationIndex, setActiveSpecializationIndex] = useState(0);

  // Extract specializations from the mtech data
  const specializations_mtech = mtech?.specializations_mtech || [];
  const activeSpecialization = specializations_mtech[activeSpecializationIndex] || {};

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">M.Tech Admission</h1>
      <h2 className="text-2xl font-semibold text-center mb-4">Specializations</h2>

      {/* Specialization Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {specializations_mtech.map((spec, index) => (
          <button
            key={spec.id}
            onClick={() => setActiveSpecializationIndex(index)}
            className={`px-5 py-2 rounded-lg font-medium transition ${index === activeSpecializationIndex
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {spec.name_mtech_ad || `Specialization ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Content Section */}
      {activeSpecialization.name_mtech_ad && (
        <div className="text-gray-800 text-base leading-relaxed px-4 space-y-6">
          {/* Specialization Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {activeSpecialization.name_mtech_ad}
            </h3>
          </div>

          {/* Eligibility Section */}
          {activeSpecialization.eligibility_mtech_ad && activeSpecialization.eligibility_mtech_ad.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Eligibility Criteria</h4>
              {activeSpecialization.eligibility_mtech_ad.map((eligibility, index) => (
                <div key={eligibility.id || index} className="mb-4 last:mb-0">
                  <div className="font-medium text-blue-600 mb-2">
                    {eligibility.category_mtech_ad}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {eligibility.details_mtech_ad}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Admission Process Section */}
          {activeSpecialization.admission_process_mtech && activeSpecialization.admission_process_mtech.length > 0 && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Admission Process</h4>
              {activeSpecialization.admission_process_mtech.map((process, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="font-medium text-green-600 mb-2">
                    {process.admission_type_mtech}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {process.admission_details_mtech}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Brochure Link */}
          {activeSpecialization.brochure_link_mtech && (
            <div className="text-center">
              <a
                href={activeSpecialization.brochure_link_mtech}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Download Brochure
              </a>
            </div>
          )}

          {/* No Data Message */}
          {(!activeSpecialization.eligibility_mtech_ad || activeSpecialization.eligibility_mtech_ad.length === 0) &&
            (!activeSpecialization.admission_process_mtech || activeSpecialization.admission_process_mtech.length === 0) && (
              <div className="text-center py-8 text-gray-500">
                <p>More details coming soon...</p>
              </div>
            )}
        </div>
      )}

      {/* No Specializations Message */}
      {specializations_mtech.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No specializations available at the moment.</p>
        </div>
      )}
    </div>
  );
}