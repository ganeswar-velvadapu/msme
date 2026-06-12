'use client';
import { useState } from 'react';

export default function MTechClient({ mtech }) {
  const [activeSpecializationIndex, setActiveSpecializationIndex] = useState(0);

  const specializations = mtech?.specializations || [];
  const activeSpecialization = specializations[activeSpecializationIndex] || {};

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Specializations</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {specializations.map((spec, index) => (
          <button
            key={spec.id}
            onClick={() => setActiveSpecializationIndex(index)}
            className={`px-5 py-2 rounded-lg font-medium transition cursor-pointer ${
              index === activeSpecializationIndex
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {spec.name || `Specialization ${index + 1}`}
          </button>
        ))}
      </div>

      {activeSpecialization.name && (
        <div className="text-gray-800 text-base leading-relaxed px-4 space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {activeSpecialization.name}
            </h3>
          </div>

          {activeSpecialization.eligibility &&
            activeSpecialization.eligibility.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">
                  Eligibility Criteria
                </h4>

                {activeSpecialization.eligibility.map((eligibility, index) => (
                  <div
                    key={eligibility.id || index}
                    className="mb-4 last:mb-0"
                  >
                    <div className="font-medium text-black mb-2">
                      {eligibility.category}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {eligibility.details}
                    </p>
                  </div>
                ))}
              </div>
            )}

          {activeSpecialization.admissionProcess &&
            activeSpecialization.admissionProcess.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">
                  Admission Process
                </h4>

                {activeSpecialization.admissionProcess.map(
                  (process, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="font-medium text-black mb-2">
                        {process.type}
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {process.details}
                      </p>
                    </div>
                  )
                )}
              </div>
            )}

          {(() => {
            const brochureUrl =
              typeof activeSpecialization.brochure === 'object'
                ? activeSpecialization.brochure?.url
                : activeSpecialization.brochure;

            if (!brochureUrl) return null;

            return (
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="text-xl font-semibold mb-4 text-center">
                  Admission Brochure
                </h4>

                <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <iframe
                    src={brochureUrl}
                    className="w-full h-[600px] border-none"
                    title="Admission Brochure PDF"
                  />
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    href={brochureUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors duration-150 inline-flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            );
          })()}

          {(!activeSpecialization.eligibility ||
            activeSpecialization.eligibility.length === 0) &&
            (!activeSpecialization.admissionProcess ||
              activeSpecialization.admissionProcess.length === 0) && (
              <div className="text-center py-8 text-gray-500">
                <p>More details coming soon...</p>
              </div>
            )}
        </div>
      )}

      {specializations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No specializations available at the moment.</p>
        </div>
      )}
    </div>
  );
}