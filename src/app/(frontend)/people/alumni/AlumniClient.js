"use client";
import { useState, useMemo } from "react";

export default function AlumniClient({ alumniList }) {
  // Sample data for demonstration
  const sampleAlumni = alumniList || [
    { alumni_student_name: "John Doe", alumni_degree: "BTech", alumni_batch: "2020" },
    { alumni_student_name: "Jane Smith", alumni_degree: "MTech", alumni_batch: "2020" },
    { alumni_student_name: "Alice Johnson", alumni_degree: "PhD", alumni_batch: "2019" },
    { alumni_student_name: "Bob Wilson", alumni_degree: "BTech", alumni_batch: "2021" },
    { alumni_student_name: "Carol Brown", alumni_degree: "MTech", alumni_batch: "2019" },
    { alumni_student_name: "David Lee", alumni_degree: "PhD", alumni_batch: "2018" },
    { alumni_student_name: "Emma Davis", alumni_degree: "BTech", alumni_batch: "2022" },
    { alumni_student_name: "Frank Miller", alumni_degree: "MTech", alumni_batch: "2021" },
  ];

  const dataToUse = alumniList || sampleAlumni;

  // Get unique degrees and sort them
  const degrees = useMemo(() => {
    const uniqueDegrees = [...new Set(dataToUse.map(student => student.alumni_degree))];
    // Sort degrees in order: BTech, MTech, PhD
    return uniqueDegrees.sort((a, b) => {
      const order = { 'BTech': 1, 'MTech': 2, 'PhD': 3 };
      return (order[a] || 999) - (order[b] || 999);
    });
  }, [dataToUse]);

  // Get unique years and sort them in descending order
  const batchYears = useMemo(() => {
    const years = [...new Set(dataToUse.map(student => student.alumni_batch))];
    return years.sort((a, b) => b - a); // Descending order
  }, [dataToUse]);

  const [selectedDegree, setSelectedDegree] = useState(degrees[0] || "");
  const [selectedYear, setSelectedYear] = useState("All");

  // Filter students based on selected degree and year
  const filteredStudents = useMemo(() => {
    let filtered = dataToUse.filter(student => student.alumni_degree === selectedDegree);
    
    if (selectedYear !== "All") {
      filtered = filtered.filter(student => student.alumni_batch === selectedYear);
    }
    
    // Sort by batch year (descending) and then by name
    return filtered.sort((a, b) => {
      const yearDiff = b.alumni_batch - a.alumni_batch;
      if (yearDiff !== 0) return yearDiff;
      return a.alumni_student_name.localeCompare(b.alumni_student_name);
    });
  }, [dataToUse, selectedDegree, selectedYear]);

  // Get years for selected degree
  const availableYears = useMemo(() => {
    const years = [...new Set(dataToUse
      .filter(student => student.alumni_degree === selectedDegree)
      .map(student => student.alumni_batch))];
    return years.sort((a, b) => b - a);
  }, [dataToUse, selectedDegree]);

  // Reset year selection when degree changes
  const handleDegreeChange = (degree) => {
    setSelectedDegree(degree);
    setSelectedYear("All");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">Alumni</h1>
      
      {/* Degree Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Filter by Degree</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {degrees.map((degree, index) => (
            <button
              key={index}
              onClick={() => handleDegreeChange(degree)}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedDegree === degree
                  ? "bg-black text-white opacity-80"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-black"
              }`}
            >
              {degree}
            </button>
          ))}
        </div>
      </div>

      {/* Year Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Filter by Year</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedYear("All")}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              selectedYear === "All"
                ? "bg-black text-white opacity-80"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-black"
            }`}
          >
            All Years
          </button>
          {availableYears.map((year, index) => (
            <button
              key={index}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedYear === year
                  ? "bg-black text-white opacity-80"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-black"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

     

      {/* Alumni Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-black opacity-80">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Degree</th>
              <th className="py-3 px-4 text-left">Batch</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-100 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-4">{student.alumni_student_name}</td>
                  <td className="py-3 px-4">{student.alumni_degree}</td>
                  <td className="py-3 px-4">{student.alumni_batch}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-8 text-center text-gray-500">
                  No alumni found for the selected criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}