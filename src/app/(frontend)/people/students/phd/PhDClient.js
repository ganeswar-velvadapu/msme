"use client";
import { useState, useMemo } from "react";

export default function PhDClient({ phdStudents }) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const sortedStudents = useMemo(() => {
    if (!Array.isArray(phdStudents)) return [];
    return [...phdStudents].sort((a, b) =>
      (a?.phd_name || "").localeCompare(b?.phd_name || "")
    );
  }, [phdStudents]);

  const handleViewDetails = (student) => {
    setSelectedStudent(student ?? null);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          PhD
        </h1>

        {sortedStudents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-medium text-black mb-2">
              No Data Found
            </h2>
            <p className="text-gray-700 text-center max-w-md">
              There are currently no PhD students available in the database.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStudents.map((student, index) => (
              <div
                key={student?.id ?? index}
                className="rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center mb-4">
                  {student?.phd_image?.url ? (
                    <img
                      src={student.phd_image.url}
                      alt={student?.phd_name ?? "PhD Student"}
                      className="w-32 h-32 object-cover mb-4 rounded"
                    />
                  ) : (
                    <div className="w-32 h-32 mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}

                  <h2 className="text-xl font-semibold text-black text-center">
                    {student?.phd_name ?? "N/A"}
                  </h2>
                  <p className="text-gray-700 mt-1">
                    {student?.phd_roll_no ?? ""}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Research Topic:</span>{" "}
                    {student?.phd_research_topic ?? "N/A"}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Advisor:</span>{" "}
                    {student?.phd_advisor ?? "N/A"}
                  </p>
                </div>

                <button
                  onClick={() => handleViewDetails(student)}
                  className="w-full cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/60 z-50 flex items-center justify-center p-6">
          <div className="bg-white p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-black">
                {selectedStudent?.phd_name ?? "N/A"}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                {selectedStudent?.phd_image?.url ? (
                  <img
                    src={selectedStudent.phd_image.url}
                    alt={selectedStudent?.phd_name ?? "PhD Student"}
                    className="w-40 h-40 object-cover mb-4 rounded"
                  />
                ) : (
                  <div className="w-40 h-40 mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <p className="text-gray-700 font-medium mb-1">
                  {selectedStudent?.phd_roll_no ?? ""}
                </p>
                <p className="text-gray-700 mb-4">
                  {selectedStudent?.phd_email ?? ""}
                </p>
              </div>

              <div className="md:w-2/3">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Education
                  </h3>
                  <p className="text-gray-700">
                    <strong>Bachelors:</strong>{" "}
                    {selectedStudent?.phd_bachelors ?? "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <strong>Masters:</strong>{" "}
                    {selectedStudent?.phd_masters ?? "N/A"}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Research Topic
                  </h3>
                  <p className="text-gray-700">
                    {selectedStudent?.phd_research_topic ?? "N/A"}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(
                      selectedStudent?.phd_research_interest
                    ) && selectedStudent.phd_research_interest.length > 0 ? (
                      selectedStudent.phd_research_interest.map(
                        (interest, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {interest?.research_interest_phd ?? "N/A"}
                          </span>
                        )
                      )
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No research interests listed
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Teaching Assistant for Courses
                  </h3>
                  <div className="bg-gray-100 rounded p-3">
                    {Array.isArray(selectedStudent?.phd_course_ta) &&
                    selectedStudent.phd_course_ta.length > 0 ? (
                      selectedStudent.phd_course_ta.map((course, idx) => (
                        <div
                          key={idx}
                          className={
                            idx > 0
                              ? "mt-2 pt-2 border-t border-gray-200"
                              : ""
                          }
                        >
                          <p className="font-medium text-black">
                            {course?.phd_course_code ?? "N/A"} —{" "}
                            {course?.phd_course_name ?? "N/A"}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No courses assigned
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="bg-black cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
