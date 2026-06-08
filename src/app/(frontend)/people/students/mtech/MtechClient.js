"use client"
import { useState, useMemo } from "react";

export default function PgStudentsClient({students}) {
  const batchYears = useMemo(() => {
    const years = [...new Set(students.map(student => student.mtech_batch))];
    return years.sort((a, b) => b - a);
  }, [students]);

  const [selectedYear, setSelectedYear] = useState(batchYears[0] || "");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedStudents = useMemo(() => {
    let filtered = students.filter(student => student.mtech_batch == selectedYear);
    
    // Apply search filter if search term exists
    if (searchTerm.trim()) {
      filtered = filtered.filter(student => 
        student.mtech_student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.mtech_specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort by roll number - handles both string and numeric roll numbers
    return filtered.sort((a, b) => {
      const rollA = a.mtech_roll_no;
      const rollB = b.mtech_roll_no;
      
      // If both are numbers, compare numerically
      if (!isNaN(rollA) && !isNaN(rollB)) {
        return Number(rollA) - Number(rollB);
      }
      
      // Otherwise, compare as strings (alphanumeric)
      return String(rollA).localeCompare(String(rollB), undefined, { numeric: true });
    });
  }, [students, selectedYear, searchTerm]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">
        M.Tech.
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {batchYears.map(year => (
          <button
            key={year}
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

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-black opacity-80">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Roll No</th>
              <th className="py-3 px-4 text-left">Batch</th>
              <th className="py-3 px-4 text-left">Specialization</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedStudents.length > 0 ? (
              filteredAndSortedStudents.map((student, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-100 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-4">{student.mtech_student_name}</td>
                  <td className="py-3 px-4">{student.mtech_roll_no}</td>
                  <td className="py-3 px-4">{student.mtech_batch}</td>
                  <td className="py-3 px-4">{student.mtech_specialization}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-500">
                  {searchTerm ? 'No students found matching your search.' : 'No students found for the selected year.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}