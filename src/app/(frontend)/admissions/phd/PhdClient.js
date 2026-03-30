'use client';
import React, { useState } from 'react';

export default function PhDClient({ phdData }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const phdTypes = phdData?.phd_types || [];
  const activeType = phdTypes[activeIndex] || {};

  return (

    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        PhD Programme
      </h1>


      {/* GLOBAL WRITE-UP */}

      {phdData?.general_writeup && (

        <div className="bg-gray-50 p-6 rounded-lg mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            General Information
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {phdData.general_writeup}
          </p>

        </div>

      )}


      {/* TABS */}

      {phdTypes.length > 0 && (

        <>

          <h2 className="text-2xl font-semibold text-center mb-4">
            PhD Types
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">

            {phdTypes.map((type, index) => (

              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-lg font-medium transition cursor-pointer ${
                  index === activeIndex
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >

                {type.phd_type_name || `Type ${index + 1}`}

              </button>

            ))}

          </div>

        </>

      )}


      {/* ELIGIBILITY */}

      {activeType?.eligibility && (

        <div className="bg-gray-50 p-6 rounded-lg mb-6">

          <h4 className="text-xl font-semibold mb-4">
            Eligibility Criteria
          </h4>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {activeType.eligibility}
          </p>

        </div>

      )}


      {/* ADMISSION PROCESS */}

      {activeType?.admission_process && (

        <div className="bg-gray-50 p-6 rounded-lg mb-6">

          <h4 className="text-xl font-semibold mb-4">
            Admission Process
          </h4>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {activeType.admission_process}
          </p>

        </div>

      )}


      {/* BROCHURE LINKS — SAME BUTTON */}

      {activeType?.brochure_links &&
        activeType.brochure_links.length > 0 && (

          <div className="bg-gray-50 p-6 rounded-lg mb-6">

            <h4 className="text-xl font-semibold mb-4">
              Brochures & Documents
            </h4>

            <div className="space-y-3">

              {activeType.brochure_links.map((brochure, index) => (

                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-white rounded-lg border border-gray-200"
                >

                  <span className="text-gray-700">
                    {brochure.link_text}
                  </span>

                  <a
                    href={brochure.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition text-center"
                  >
                    Download PDF
                  </a>

                </div>

              ))}

            </div>

          </div>

        )}


      {/* EXTERNAL FELLOWSHIPS */}

      {phdData?.external_fellowships &&
        phdData.external_fellowships.length > 0 && (

          <div className="bg-gray-50 p-6 rounded-lg">

            <h4 className="text-xl font-semibold mb-4">
              External Fellowships
            </h4>

            <div className="grid gap-4 md:grid-cols-2">

              {phdData.external_fellowships.map((link, index) => (

                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-200"
                >

                  <a
                    href={link.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-black hover:text-blue-800 font-medium"
                  >

                    {link.link_name}

                  </a>

                </div>

              ))}

            </div>

          </div>

        )}


      {/* EMPTY STATE */}

      {phdTypes.length === 0 && (

        <div className="text-center py-8 text-gray-500">
          <p>PhD fellowship information coming soon...</p>
        </div>

      )}

    </div>

  );
}