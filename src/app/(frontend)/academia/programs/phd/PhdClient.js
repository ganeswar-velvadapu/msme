'use client';

import React, { useState } from 'react';

export default function PhDClient({ phdList }) {
  const [activeSubTab, setActiveSubTab] = useState('about');

  const phdContent = phdList[0] || {};
  const {
    about = '',
    course_and_thesis = '',
    curriculum_link = '',
    brochure_link = '',
  } = phdContent;

  const subTabs = [
    { key: 'about', label: 'About the PhD Program' },
    { key: 'course_and_thesis', label: 'Course and Thesis Requirements' },
    { key: 'eligibility_and_admissions', label: 'Eligibility and Admissions' },
  ];

  const renderTabContent = () => {
    switch (activeSubTab) {
      case 'about':
        const brochureUrl = typeof brochure_link === 'object' ? brochure_link?.url : brochure_link;
        return (
          <div className="space-y-6 text-center">
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">{about}</div>
            {brochureUrl && (
              <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <h4 className="text-xl font-semibold mb-4 text-center">Programme Brochure</h4>
                <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <iframe
                    src={brochureUrl}
                    className="w-full h-[600px] border-none"
                    title="PhD Brochure PDF"
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
            )}
          </div>
        );
      case 'course_and_thesis':
        const curriculumUrl = typeof curriculum_link === 'object' ? curriculum_link?.url : curriculum_link;
        return (
          <div className="space-y-6 text-center">
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">{course_and_thesis}</div>
            {curriculumUrl && (
              <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <h4 className="text-xl font-semibold mb-4 text-center">Curriculum PDF</h4>
                <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <iframe
                    src={curriculumUrl}
                    className="w-full h-[600px] border-none"
                    title="PhD Curriculum PDF"
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
            )}
          </div>
        );
      case 'eligibility_and_admissions':
        return (<div className='flex w-full justify-center'>
          <a href='/admissions/phd' target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block">Click Here</a>
        </div>);
      default:
        return null;
    }
  };

  return (
    <div className="bg-white m-8 text-black p-8 rounded-xl max-w-5xl mx-auto">

      {/* Sub Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 border-b pb-4">
        {subTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition ${activeSubTab === tab.key
              ? 'bg-black text-white shadow-md hover:cursor-pointer'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:cursor-pointer'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-800 leading-relaxed text-center px-4 whitespace-pre-wrap">
        {renderTabContent()}
      </div>
    </div>
  );
}
