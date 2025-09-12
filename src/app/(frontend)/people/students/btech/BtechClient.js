"use client"
import { useState, useMemo } from "react";

export default function UgStudentsClient({students}) {
  const batchYears = useMemo(() => {
    const years = [...new Set(students.map(student => student.btech_batch))];
    return years.sort((a, b) => b - a);
  }, [students]);

  const [selectedYear, setSelectedYear] = useState(batchYears[0] || "");

  const filteredAndSortedStudents = useMemo(() => {
    const filtered = students.filter(student => student.btech_batch == selectedYear);
    // Sort by roll number - handles both string and numeric roll numbers
    return filtered.sort((a, b) => {
      const rollA = a.btech_roll_no;
      const rollB = b.btech_roll_no;
      
      // If both are numbers, compare numerically
      if (!isNaN(rollA) && !isNaN(rollB)) {
        return Number(rollA) - Number(rollB);
      }
      
      // Otherwise, compare as strings (alphanumeric)
      return String(rollA).localeCompare(String(rollB), undefined, { numeric: true });
    });
  }, [students, selectedYear]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">
        B.Tech
      </h1>
      
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
                  <td className="py-3 px-4">{student.btech_student_name}</td>
                  <td className="py-3 px-4">{student.btech_roll_no}</td>
                  <td className="py-3 px-4">{student.btech_batch}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-8 text-center text-gray-500">
                  No students found for the selected year.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}