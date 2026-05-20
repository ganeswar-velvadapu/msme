"use client";
import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import DistinguishedFacultyCard from "../../../../components/people/DistinguishedFacultyCard";

export default function DistinguishedFacultyClient({ facultyList }) {
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
        Distinguished Faculty
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {sortedAndFilteredFaculty.length > 0 ? (
          sortedAndFilteredFaculty.map((member) => (
            <DistinguishedFacultyCard
              key={member?.id}
              id={member?.id}
              name={member?.faculty_name ?? "N/A"}
              designation={member?.faculty_designation ?? ""}
              image_url={member?.faculty_image?.url}
              href={`/people/distinguished/${member?.id}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No distinguished faculty members match your search
          </div>
        )}
      </div>
    </div>
  );
}
