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
    <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">M.Tech Program</h1>

      <div className="text-center text-lg text-gray-700 mb-6">
        {about}
      </div>

      <h2 className="text-xl font-semibold mb-2 text-center">Specializations</h2>

      {/* Specialization Buttons - Center Aligned */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {specializations.map((spec, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSpecializationIndex(index);
              setActiveSubTab("about");
            }}
            className={`px-4 py-2 rounded font-medium ${
              index === activeSpecializationIndex
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {spec.short_name || spec.name || `Specialization ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="border-b flex justify-center gap-6 mb-4">
        {subTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            className={`py-2 px-3 font-semibold ${
              activeSubTab === tab.key
                ? "border-b-2 border-black text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="p-2 text-gray-800 text-center">
        {activeSubTab === "about" && (
         <div>
            <p>{activeSpecialization.description || "No information available."}</p>
            <a
            href={activeSpecialization.brochure_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View Brochure
          </a>
         </div>
        )}
        {activeSubTab === "course_and_thesis" && (
          <p>{activeSpecialization.course_and_thesis || "No information available."}</p>
        )}
        {activeSubTab === "eligibility_and_admissions" && (
          <p>{activeSpecialization.eligibility_and_admissions || "No information available."}</p>
        )}
        {/* {activeSpecialization.brochure_link && activeSubTab !== "about" && (
          <a
            href={activeSpecialization.brochure_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View Brochure
          </a>
        )} */}
      </div>
    </div>
  );
}
