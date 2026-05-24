'use client';
import React, { useState, useRef, useEffect } from 'react';

function AccordionItem({ faculty, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen, faculty]);


  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between px-4 sm:px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-semibold text-sm sm:text-base truncate">
            {faculty.faculty_name}
          </span>

        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            marginLeft: '12px',
            color: '#9ca3af',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <div ref={bodyRef} className="border-t border-gray-100 px-4 sm:px-5 py-4 bg-white">
          {faculty.research_topics && faculty.research_topics.length > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {faculty.research_topics.map((topic, tIndex) => (
                <div
                  key={tIndex}
                  className="flex items-start gap-2 bg-gray-50 rounded-md px-3 py-2"
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: '6px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#9ca3af',
                    }}
                  />
                  <span className="text-sm text-gray-700 leading-snug">{topic.topic}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">No research topics listed.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PhDClient({ phdData }) {
  const [mainTab, setMainTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaculty, setOpenFaculty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const phdTypes = [
    ...(phdData?.phd_types || []),
    { phd_type_name: "External", isMock: true },
    { phd_type_name: "Interdisciplinary", isMock: true },
  ];
  const activeType = phdTypes[activeIndex] || {};
  const facultyList = phdData?.faculty_research || [];

  const filteredFaculty = facultyList.filter((faculty) => {
    const q = searchQuery.toLowerCase();
    return (
      faculty.faculty_name?.toLowerCase().includes(q) ||
      (faculty.research_topics &&
        faculty.research_topics.some((t) => t.topic?.toLowerCase().includes(q)))
    );
  });

  const mainTabs = [
    { label: 'Programme Info' },
    ...(facultyList.length > 0 ? [{ label: 'Research Topics' }] : []),
    ...(phdData?.external_fellowships?.length > 0
      ? [{ label: 'Other Fellowships' }]
      : []),
  ];

  const handleToggle = (index) => {
    setOpenFaculty((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="bg-white text-black p-6 sm:p-10 rounded-xl w-full max-w-4xl">

        {/* TOP-LEVEL TABS — centered */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {mainTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setMainTab(i)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${mainTab === i
                ? 'bg-black text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 0: PROGRAMME INFO */}
        {mainTab === 0 && (
          <div>
            {phdData?.general_writeup && (
              <div className="bg-gray-50 p-5 sm:p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {phdData.general_writeup}
                </p>
              </div>
            )}

            {phdTypes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
                  PhD Types
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {phdTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${index === activeIndex
                        ? 'bg-black text-white shadow'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                    >
                      {type.phd_type_name || `Type ${index + 1}`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeType?.isMock ? (
              <div className="bg-gray-50 p-5 sm:p-6 rounded-lg mb-4 text-center text-gray-500">
                No content available currently
              </div>
            ) : (
              <>
                {activeType?.eligibility && (
                  <div className="bg-gray-50 p-5 sm:p-6 rounded-lg mb-4">
                    <h4 className="text-lg sm:text-xl font-semibold mb-3">Eligibility Criteria</h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {activeType.eligibility}
                    </p>
                  </div>
                )}

                {activeType?.admission_process && (
                  <div className="bg-gray-50 p-5 sm:p-6 rounded-lg mb-4">
                    <h4 className="text-lg sm:text-xl font-semibold mb-3">Admission Process</h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {activeType.admission_process}
                    </p>
                  </div>
                )}

                {activeType?.brochure_links && activeType.brochure_links.length > 0 && (
                  <div className="bg-gray-50 p-5 sm:p-6 rounded-lg mb-4 space-y-6">
                    <h4 className="text-lg sm:text-xl font-semibold mb-3 text-center">Brochures &amp; Documents</h4>
                    <div className="space-y-6">
                      {activeType.brochure_links.map((brochure, index) => {
                        const brochureUrl = typeof brochure.link_file === 'object' ? brochure.link_file?.url : (brochure.link_file || brochure.link_url);
                        if (!brochureUrl) return null;
                        return (
                          <div
                            key={index}
                            className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4"
                          >
                            <div className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                              {brochure.link_text}
                            </div>
                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                              <iframe
                                src={brochureUrl}
                                className="w-full h-[600px] border-none"
                                title={brochure.link_text || `Brochure PDF ${index + 1}`}
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
                      })}
                    </div>
                  </div>
                )}
              </>
            )}


            {phdTypes.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>PhD fellowship information coming soon...</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 1: FACULTY RESEARCH */}
        {mainTab === 1 && (
          <div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search by faculty name or research topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition-colors duration-200"
              />
            </div>



            <div className="space-y-2">
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty, index) => (
                  <AccordionItem
                    key={index}
                    faculty={faculty}
                    index={index}
                    isOpen={openFaculty === index}
                    onToggle={handleToggle}
                  />
                ))
              ) : (
                <div className="text-center py-10 text-gray-400 text-sm">
                  <p>No results found for &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2 (or dynamic): OTHER FELLOWSHIPS */}
        {mainTabs[mainTab]?.label === 'Other Fellowships' && (
          <div>
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg">
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                Other Fellowships
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                {phdData.external_fellowships.map((link, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors duration-200"
                  >
                    <a
                      href={link.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2 hover:text-gray-600 text-sm sm:text-base"
                    >
                      {link.link_name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}