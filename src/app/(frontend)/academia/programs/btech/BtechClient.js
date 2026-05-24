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
    <div className="bg-white m-8 text-black p-8 rounded-xl max-w-6xl mx-auto">

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
          {(() => {
            const handbookUrl = typeof academic_handbook_link === 'object' ? academic_handbook_link?.url : academic_handbook_link;
            if (!handbookUrl) return null;
            return (
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Academic Handbook</h3>
                <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <iframe
                    src={handbookUrl}
                    className="w-full h-[600px] border-none"
                    title="Academic Handbook PDF"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href={handbookUrl}
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
          {(() => {
            const curriculumUrl = typeof msme_curriculum_link === 'object' ? msme_curriculum_link?.url : msme_curriculum_link;
            if (!curriculumUrl) return null;
            return (
              <div className="bg-gray-100 p-6 rounded-lg">
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
