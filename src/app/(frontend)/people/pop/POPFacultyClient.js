"use client";
import { useState, useEffect } from "react";
import POPFacultyCard from "../../../../components/people/POPFacultyCard";
import {
  Search,
  BookOpen as CourseIcon,
  GraduationCap as Users,
} from "lucide-react";

export default function POPFacultyClient({ facultyList }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaculty = facultyList.filter((member) =>
    member.pop_faculty_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Faculty Members</h1>

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
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map((member) => (
            <POPFacultyCard
              key={member.id}
              name={member.pop_faculty_name}
              designation={member.pop_faculty_designation}
              email={member.pop_faculty_email}
              phdFrom={member.pop_faculty_phd_detail}
              office={member.pop_faculty_office}
              id={member.id}
              image_url={member?.pop_faculty_image?.url}
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
