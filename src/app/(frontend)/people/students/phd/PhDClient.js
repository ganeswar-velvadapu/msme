"use client";
import { useState, useMemo, useEffect } from "react";
import { Search, X, Mail, GraduationCap, BookOpen, Microscope } from "lucide-react";
import PhdCard from "../../../../../components/people/PhDCard";
export default function PhDClient({ phdStudents }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = useMemo(() => {
    if (!Array.isArray(phdStudents)) return [];
    return phdStudents
      .filter((student) =>
        student?.phd_name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        (a?.phd_name || "").localeCompare(b?.phd_name || "")
      );
  }, [phdStudents, searchTerm]);

  const closeModal = () => {
    setSelectedStudent(null);
    document.body.style.overflow = "auto";
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    document.body.style.overflow = "hidden";
  };

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
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-black mb-6">PhD Students</h1>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mb-12">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search scholars by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black placeholder-gray-400 transition-all"
        />
      </div>

      {/* Students Grid */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredStudents.map((student) => (
            <PhdCard
              key={student.id}
              name={student.phd_name}
              roll_no={student.phd_roll_no}
              image_url={student.phd_image?.url}
              onClick={() => openModal(student)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500">No scholars found matching your search.</p>
        </div>
      )}

      {/* Profile Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/60 z-[10000] flex items-center justify-center p-4 md:p-6">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h2 className="text-lg font-bold text-black uppercase tracking-wider">
                Scholar Profile
              </h2>
              <button
                onClick={closeModal}
                className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 lg:p-10">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative group rounded-lg overflow-hidden bg-gray-50 shadow-inner">
                    <img
                      src={selectedStudent?.phd_image?.url || "/api/placeholder/400/400"}
                      alt={selectedStudent?.phd_name}
                      className="w-full aspect-square object-cover  transition-all duration-500"
                    />
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail size={18} className="text-gray-400" />
                      <span className="text-sm font-medium break-all">{selectedStudent.phd_email || "N/A"}</span>
                    </div>
                    {selectedStudent.phd_lab && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Microscope size={18} className="text-gray-400" />
                        <span className="text-sm font-medium">{selectedStudent.phd_lab}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="mb-8 pb-6 border-b border-gray-100">
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {selectedStudent.phd_name}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium tracking-tight">
                      Roll No: {selectedStudent.phd_roll_no}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Advisor & Research */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Advisor</h4>
                        <p className="text-gray-800 font-semibold">{selectedStudent.phd_advisor || "N/A"}</p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Research Topic</h4>
                        <p className="text-gray-800 font-semibold leading-snug">{selectedStudent.phd_research_topic || "N/A"}</p>
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4 flex items-center gap-2">
                        <GraduationCap size={16} /> Education
                      </h4>
                      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="text-gray-400 font-medium">Masters:</span> {selectedStudent.phd_masters || "N/A"}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="text-gray-400 font-medium">Bachelors:</span> {selectedStudent.phd_bachelors || "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Research Interests */}
                    {selectedStudent.phd_research_interest?.length > 0 && (
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4 flex items-center gap-2">
                          <BookOpen size={16} /> Research Interests
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedStudent.phd_research_interest.map((interest, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-md text-xs font-medium hover:border-black transition-colors"
                            >
                              {interest.research_interest_phd}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TA Duties */}
                    {selectedStudent.phd_course_ta?.length > 0 && (
                      <div className="pt-6 border-t border-gray-100">
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Teaching Assistant Duties</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedStudent.phd_course_ta.map((course, idx) => (
                            <div key={idx} className="p-3 border border-gray-100 rounded-lg bg-white shadow-sm">
                              <p className="text-xs font-bold text-black">{course.phd_course_code}</p>
                              <p className="text-sm text-gray-600 line-clamp-1">{course.phd_course_name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
