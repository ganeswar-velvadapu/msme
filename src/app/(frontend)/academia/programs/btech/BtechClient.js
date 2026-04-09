'use client';
import { useState } from "react";

export default function BTechClient({ btechList }) {
  const [activeTab, setActiveTab] = useState("about");

  const btechContent = btechList[0] || {};

  const {
    about = {},
    curriculum = {},
  } = btechContent;

  const {
    program_section = {},
    academic_handbook_link = "",
    about_btech_program = "",
  } = about;

  const {
    about_curriculum = [],
    msme_curriculum_link = "",
  } = curriculum;

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">B.Tech Programme</h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-5 py-2 text-base font-semibold rounded-md transition ${activeTab === "about"
            ? "bg-black text-white hover:cursor-pointer"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:cursor-pointer"
            }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("curriculum")}
          className={`px-5 py-2 text-base font-semibold rounded-md transition ${activeTab === "curriculum"
            ? "bg-black text-white hover:cursor-pointer"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:cursor-pointer"
            }`}
        >
          Curriculum & Courses
        </button>
        <button
          onClick={() => setActiveTab("admission")}
          className={`px-5 py-2 text-base font-semibold rounded-md transition ${activeTab === "admission"
            ? "bg-black text-white hover:cursor-pointer"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:cursor-pointer"
            }`}
        >
          Admissions Requirements
        </button>
      </div>

      {/* About Section */}
      {activeTab === "about" && (
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">{about_btech_program}</p>

          <div>
            <h2 className="text-2xl font-bold mb-2">{program_section.btech_program}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {program_section.btech_program_descriptiom}
            </p>
          </div>

          {/* Academic Handbook */}
          {academic_handbook_link && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Academic Handbook</h3>
              <a
                href={academic_handbook_link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Academic Handbook
              </a>
            </div>
          )}
        </div>
      )}

      {/* Curriculum Section */}
      {activeTab === "curriculum" && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Curriculum</h3>
          <div className="space-y-4">
            {about_curriculum.map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <p className="text-gray-800 text-base">{item.curriculum_description}</p>
              </div>
            ))}
          </div>

          {/* Curriculum PDF */}
          {msme_curriculum_link && (
            <a
              href={msme_curriculum_link}
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Curriculum PDF
            </a>
          )}
        </div>
      )}

      {/* Admission Section */}
      {activeTab === "admission" && (
        <div className='flex w-full justify-center'>
          <a href='/admissions/btech' target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block">Click Here</a>
        </div>
      )}
    </div>
  );
}
