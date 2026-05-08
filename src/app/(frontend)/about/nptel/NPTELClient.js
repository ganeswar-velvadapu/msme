"use client";
import { useState, useMemo } from "react";
import { Search, ExternalLink } from "lucide-react";

const NPTELClient = ({ lectures }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLectures = useMemo(() => {
    if (!Array.isArray(lectures)) return [];
    return lectures.filter((lecture) =>
      lecture?.nptel_course_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [lectures, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-black mb-6">NPTEL Lectures</h1>
        <p className="text-gray-600 max-w-2xl">
          Online courses and video lectures developed by our faculty members as part of the National Programme on Technology Enhanced Learning.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mb-12">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search courses by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black placeholder-gray-400 transition-all"
        />
      </div>

      {/* Lectures Grid */}
      {filteredLectures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <div
              key={lecture.id}
              className="group bg-white border border-gray-100 rounded-lg p-6 flex flex-col hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >

              <h3 className="text-xl font-bold text-black mb-4  min-h-[2.5rem]">
                {lecture.nptel_course_name}
              </h3>
              
              {lecture.course_associated_faculty && lecture.course_associated_faculty.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                    Instructor(s)
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {lecture.course_associated_faculty.map((faculty, idx) => (
                      <span
                        key={faculty.id || idx}
                        className="text-sm text-gray-600"
                      >
                        {faculty.faculty_name}{idx < lecture.course_associated_faculty.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto">
                <a
                  href={lecture.nptel_course_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  View Course Details
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500">No courses found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default NPTELClient;