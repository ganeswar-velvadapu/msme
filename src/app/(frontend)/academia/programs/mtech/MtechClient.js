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
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">M.Tech Programme</h1>

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
          <div>
            <p>{activeSpecialization.description || "No information available."}</p>
            {activeSpecialization.brochure_link && (
              <a
                href={activeSpecialization.brochure_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                View Brochure
              </a>
            )}
          </div>
        )}
        {activeSubTab === "course_and_thesis" && (
          <>
            <div className='flex w-full justify-center'>
              <a href={activeSpecialization.curriculum_link} target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block">Curriculum Link</a>
            </div>
            <div className='flex w-full justify-center'>
              <a href={activeSpecialization.course_and_thesis} target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block">View More</a>
            </div>
          </>
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
