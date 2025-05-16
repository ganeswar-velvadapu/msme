'use client';
import { useState } from "react";

export default function BTechClient({ btechList }) {
  const [activeTab, setActiveTab] = useState("about");

  const btechContent = btechList[0] || {};

  const {
    about = {},
    admission = "",
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
    <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="mb-4">
        <div className="flex space-x-4 border-b">
          <button
            onClick={() => setActiveTab("about")}
            className={`py-2 px-4 text-lg font-semibold ${activeTab === "about" ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`py-2 px-4 text-lg font-semibold ${activeTab === "curriculum" ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab("admission")}
            className={`py-2 px-4 text-lg font-semibold ${activeTab === "admission" ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            Admission
          </button>
        </div>

        {activeTab === "about" && (
          <div className="p-4">
            <p className="text-gray-700 mb-6">{about_btech_program}</p>

            <h2 className="text-2xl font-bold mb-2">{program_section.btech_program}</h2>
            <p className="text-gray-700 mb-4">{program_section.btech_program_descriptiom}</p>
            <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">Handbook</h3>
        {academic_handbook_link && (
          <a
            href={academic_handbook_link}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Academic Handbook
          </a>
        )}
      </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Curriculum</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              {about_curriculum.map((item, i) => (
                <li key={i}>{item.curriculum_description}</li>
              ))}
            </ul>
            {msme_curriculum_link && (
              <a
                href={msme_curriculum_link}
                className="inline-block mt-3 text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Curriculum PDF
              </a>
            )}
          </div>
        )}

        {activeTab === "admission" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Admissions</h3>
            <p className="text-gray-800">{admission}</p>
          </div>
        )}
      </div>

    </div>
  );
}
