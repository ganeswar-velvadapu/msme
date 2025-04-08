"use client"
import { useState, useMemo } from "react";

export default function MTech() {
  // Dummy student data
  const dummyStudentData = [
    { studentName: "Alex Johnson", rollNo: "CS2021001", batch: 2021, specialization: "Artificial Intelligence" },
    { studentName: "Maria Garcia", rollNo: "CS2021002", batch: 2021, specialization: "Cybersecurity" },
    { studentName: "James Wilson", rollNo: "CS2021003", batch: 2021, specialization: "Data Science" },
    { studentName: "Emma Davis", rollNo: "CS2021004", batch: 2021, specialization: "Software Engineering" },
    { studentName: "Olivia Chen", rollNo: "CS2022001", batch: 2022, specialization: "Artificial Intelligence" },
    { studentName: "Noah Smith", rollNo: "CS2022002", batch: 2022, specialization: "Cybersecurity" },
    { studentName: "Sophia Kim", rollNo: "CS2022003", batch: 2022, specialization: "Data Science" },
    { studentName: "Liam Patel", rollNo: "CS2022004", batch: 2022, specialization: "Software Engineering" },
    { studentName: "Isabella Wright", rollNo: "CS2023001", batch: 2023, specialization: "Artificial Intelligence" },
    { studentName: "Ethan Brown", rollNo: "CS2023002", batch: 2023, specialization: "Cybersecurity" },
    { studentName: "Mia Taylor", rollNo: "CS2023003", batch: 2023, specialization: "Data Science" },
    { studentName: "Lucas Evans", rollNo: "CS2023004", batch: 2023, specialization: "Software Engineering" },
    { studentName: "Charlotte Lee", rollNo: "CS2024001", batch: 2024, specialization: "Artificial Intelligence" },
    { studentName: "Benjamin Moore", rollNo: "CS2024002", batch: 2024, specialization: "Cybersecurity" },
    { studentName: "Amelia Clark", rollNo: "CS2024003", batch: 2024, specialization: "Data Science" },
    { studentName: "Henry Adams", rollNo: "CS2024004", batch: 2024, specialization: "Software Engineering" }
  ];

  
  const batchYears = useMemo(() => {
    const years = [...new Set(dummyStudentData.map(student => student.batch))];
    return years.sort((a, b) => b - a); // Sorting in descending order
  }, [dummyStudentData]);

  const [selectedYear, setSelectedYear] = useState(batchYears[0] || "");
  const filteredStudents = dummyStudentData.filter(student => student.batch == selectedYear);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">
        M.Tech
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
            <tr className="bg-gray-200  text-black  opacity-80">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Roll No</th>
              <th className="py-3 px-4 text-left">Batch</th>
              <th className="py-3 px-4 text-left">specialization</th>
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
                  <td className="py-3 px-4">{student.studentName}</td>
                  <td className="py-3 px-4">{student.rollNo}</td>
                  <td className="py-3 px-4">{student.batch}</td>
                  <td className="py-3 px-4">{student.specialization}</td>
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