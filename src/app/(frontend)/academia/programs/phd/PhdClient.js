'use client';

import React, { useState } from 'react';

export default function PhDClient({ phdList }) {
  const [activeSubTab, setActiveSubTab] = useState('about');

  const phdContent = phdList[0] || {};
  const {
    about = '',
    course_and_thesis = '',
    eligibility_and_admissions = '',
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
        return <div>{about}</div>;
      case 'course_and_thesis':
        return <div>{course_and_thesis}</div>;
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
    <div className="bg-white m-8 text-black p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">PhD Programme</h1>

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

      {/* Brochure Link */}
      {brochure_link && (
        <div className="mt-8 text-center">
          <a
            href={brochure_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Brochure (PDF)
          </a>
        </div>
      )}
    </div>
  );
}
