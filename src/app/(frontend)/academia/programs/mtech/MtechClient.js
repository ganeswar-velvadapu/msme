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
            className={`px-5 py-2 rounded-lg font-medium transition ${
              index === activeSpecializationIndex
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {spec.short_name || spec.name || `Specialization ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="border-b flex justify-center gap-6 mb-6">
        {subTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            className={`py-2 px-3 font-semibold transition ${
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
          <p>{activeSpecialization.course_and_thesis || "No information available."}</p>
        )}
        {activeSubTab === "eligibility_and_admissions" && (
          <div>
            {activeSpecialization.eligibility_and_admissions && activeSpecialization.eligibility_and_admissions.length > 0 ? (
              activeSpecialization.eligibility_and_admissions.map((section, index) => (
                <div key={index} className="mb-4">
                  {section.heading && <h3 className="text-lg font-semibold">{section.heading} : </h3>}
                   <p>{section.content || "No content available."}</p>
                </div>
              ))
            ) : (
              <p>No eligibility and admissions information available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
