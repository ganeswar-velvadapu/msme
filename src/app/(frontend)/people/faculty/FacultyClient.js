"use client";
import { useState, useEffect, useMemo } from "react";
import FacultyCard from "../../../../components/people/FacultyCard";
import { Search } from "lucide-react";

export default function FacultyClient({ facultyList }) {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedAndFilteredFaculty = useMemo(() => {
    if (!Array.isArray(facultyList)) return [];

    return facultyList
      .filter((member) =>
        member?.faculty_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        (a?.faculty_name || "").localeCompare(b?.faculty_name || "")
      );
  }, [facultyList, searchTerm]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Faculty Members
      </h1>

      <div className="relative max-w-md mb-10">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search faculty by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-gray-800"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAndFilteredFaculty.length > 0 ? (
          sortedAndFilteredFaculty.map((member) => (
            <FacultyCard
              key={member?.id}
              id={member?.id}
              name={member?.faculty_name ?? "N/A"}
              designation={member?.faculty_designation ?? ""}
              email={member?.faculty_email ?? ""}
              phdFrom={member?.faculty_phd_detail ?? ""}
              office={member?.faculty_office ?? ""}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No faculty members match your search
          </div>
        )}
      </div>
    </div>
  );
}
