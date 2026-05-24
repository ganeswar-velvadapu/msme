'use client';
import { useState } from 'react';

export default function MTechClient({ mtechList }) {
  const [activeSpecializationIndex, setActiveSpecializationIndex] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState("about");

  const mtechContent = mtechList[0] || {};
  const { about = "", specializations = [] } = mtechContent;
  const activeSpecialization = specializations[activeSpecializationIndex] || {};

  const subTabs = [
    { key: "about", label: "About" },
    { key: "course_and_thesis", label: "Course and Thesis Requirements" },
    { key: "eligibility_and_admissions", label: "Eligibility and Admissions" },
  ];

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl max-w-6xl mx-auto">

      <div className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
        {about}
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4">Specializations</h2>

      {/* Specialization Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {specializations.map((spec, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSpecializationIndex(index);
              setActiveSubTab("about");
            }}
            className={`px-5 py-2 rounded-lg font-medium transition ${index === activeSpecializationIndex
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {spec.short_name || spec.name || `Specialization ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      {/* Sub Tabs — Same Style as B.Tech */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
        {subTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            className={`px-5 py-2 text-base font-semibold rounded-md transition ${activeSubTab === tab.key
              ? "bg-black text-white hover:cursor-pointer"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:cursor-pointer"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="text-gray-800 text-base leading-relaxed px-4 space-y-4">
        {activeSubTab === "about" && (
          <div className="space-y-4">
            <p>{activeSpecialization.description || "No information available."}</p>
            {(() => {
              const brochureUrl = typeof activeSpecialization.brochure_link === 'object' ? activeSpecialization.brochure_link?.url : activeSpecialization.brochure_link;
              if (!brochureUrl) return null;
              return (
                <div className="bg-gray-100 p-6 rounded-lg mt-6">
                  <h4 className="text-xl font-semibold mb-4 text-center">Specialization Brochure</h4>
                  <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <iframe
                      src={brochureUrl}
                      className="w-full h-[600px] border-none"
                      title="Brochure PDF"
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
        {activeSubTab === "course_and_thesis" && (
          <div className="space-y-6">
            <div className='flex w-full justify-center text-center'>
              <p>{activeSpecialization.course_and_thesis}</p>
            </div>
            {(() => {
              const curriculumUrl = typeof activeSpecialization.curriculum_link === 'object' ? activeSpecialization.curriculum_link?.url : activeSpecialization.curriculum_link;
              if (!curriculumUrl) return null;
              return (
                <div className="bg-gray-100 p-6 rounded-lg mt-6">
                  <h4 className="text-xl font-semibold mb-4 text-center">Curriculum PDF</h4>
                  <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <iframe
                      src={curriculumUrl}
                      className="w-full h-[600px] border-none"
                      title="Curriculum PDF"
                    />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={curriculumUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors duration-150 inline-flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
        {activeSubTab === "eligibility_and_admissions" && (
          <div className='flex w-full justify-center'>
            <a href='/admissions/mtech' target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block">Click Here</a>
          </div>
        )}
      </div>
    </div>
  );
}
