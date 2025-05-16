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
        return <div>{eligibility_and_admissions}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Sub Tabs as Pills */}
      <h2 className="text-xl font-semibold text-center mb-2">Specializations</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {subTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                activeSubTab === tab.key
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="prose whitespace-pre-wrap max-w-none mt-6">
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
