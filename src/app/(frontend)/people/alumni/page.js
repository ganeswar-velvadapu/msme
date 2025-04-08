"use client"
import { useState, useMemo } from "react";

export default function Alumni() {
// Dummy student data
const dummyStudentData = [
{ studentName: "Alex Johnson", degree: "B.Tech", batch: 2021 },
{ studentName: "Maria Garcia", degree: "B.Tech", batch: 2021 },
{ studentName: "James Wilson", degree: "B.Tech", batch: 2021 },
{ studentName: "Emma Davis", degree: "B.Tech", batch: 2021 },
{ studentName: "Olivia Chen", degree: "B.Tech", batch: 2022 },
{ studentName: "Noah Smith", degree: "B.Tech", batch: 2022 },
{ studentName: "Sophia Kim", degree: "B.Tech", batch: 2022 },
{ studentName: "Liam Patel", degree: "B.Tech", batch: 2022 },
{ studentName: "Isabella Wright", degree: "B.Tech", batch: 2023 },
{ studentName: "Ethan Brown", degree: "B.Tech", batch: 2023 },
{ studentName: "Mia Taylor", degree: "B.Tech", batch: 2023 },
{ studentName: "Lucas Evans", degree: "B.Tech", batch: 2023 },
{ studentName: "Charlotte Lee", degree: "B.Tech", batch: 2024 },
{ studentName: "Benjamin Moore", degree: "B.Tech", batch: 2024 },
{ studentName: "Amelia Clark", degree: "B.Tech", batch: 2024 },
{ studentName: "Henry Adams", degree: "B.Tech", batch: 2024 }
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
    Alumni
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
                <td className="py-3 px-4">{student.studentName}</td>
                <td className="py-3 px-4">{student.degree}</td>
                <td className="py-3 px-4">{student.batch}</td>
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