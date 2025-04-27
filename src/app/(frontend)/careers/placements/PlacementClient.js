'use client'

import React, { useState, useEffect } from 'react';
// import { Bar } from 'recharts';

// Custom components for better organization
import YearFilter from '../../../../components/placements/YearFilter';
import PlacementStats from '../../../../components/placements/PlacementStats';
import CompanyGrid from '../../../../components/placements/CompanyGrid';

export default function PlacementsClient({ placements, years }) {
  const [selectedYear, setSelectedYear] = useState(years[0] || new Date().getFullYear());
  const [currentPlacement, setCurrentPlacement] = useState(null);
  const [activeTab, setActiveTab] = useState('btech');

  useEffect(() => {
    const placement = placements.find(p => p.year === selectedYear);
    setCurrentPlacement(placement || null);
  }, [selectedYear, placements]);

  if (placements.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-10 text-center max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Placement Data</h2>
          <p className="text-gray-600">There is currently no placement data available. Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--blueshade)] mb-2">Placement Statistics</h1>
          {/* <div className="h-1 w-24 bg-blue-600 mx-auto my-4 rounded"></div> */}
        </div>

        {/* Year Filter */}
        <YearFilter 
          years={years} 
          selectedYear={selectedYear} 
          onChange={year => setSelectedYear(parseInt(year))} 
        />

        {currentPlacement && (
          <div className="mt-10 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 sm:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Placements {currentPlacement.year}
                </h2>
                <p className="text-gray-600 mt-2">
                  Placement statistics for the academic year {currentPlacement.year}-{currentPlacement.year + 1}
                </p>
              </div>

              {/* Tabs for B.Tech and M.Tech */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('btech')}
                    className={`${
                      activeTab === 'btech'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200`}
                  >
                    B.Tech Placements
                  </button>
                  <button
                    onClick={() => setActiveTab('mtech')}
                    className={`${
                      activeTab === 'mtech'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200`}
                  >
                    M.Tech Placements
                  </button>
                </nav>
              </div>

              {/* Display stats based on the active tab */}
              {activeTab === 'btech' && currentPlacement.btech_placements && (
                <PlacementStats 
                  data={currentPlacement.btech_placements[0]} 
                  type="B.Tech" 
                />
              )}
              
              {activeTab === 'mtech' && currentPlacement.mtech_placements && (
                <PlacementStats 
                  data={currentPlacement.mtech_placements[0]} 
                  type="M.Tech" 
                />
              )}

              {/* Companies Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Recruiting Companies
                  {/* <div className="h-1 w-16 bg-blue-500 mt-2 rounded"></div> */}
                </h3>
                
                <CompanyGrid companies={currentPlacement.companiesHired} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}