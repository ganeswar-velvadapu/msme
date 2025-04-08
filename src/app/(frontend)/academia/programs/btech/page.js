"use client"
import { useState } from "react";

export default function BTechProgram() {
  const [activeTab, setActiveTab] = useState("major");

  // Major Program Data
  const majorProgramData = {
    title: "B.Tech in Materials Science and Metallurgical Engineering",
    description: "The B.Tech program in Materials Science and Metallurgical Engineering is a four-year undergraduate degree that provides students with a strong foundation in the principles of materials science, metallurgy, and engineering applications.",
    highlights: [
      "Comprehensive curriculum covering fundamentals of materials science and engineering",
      "Hands-on laboratory experience with state-of-the-art equipment",
      "Industry internships and research opportunities",
      "Final year capstone design projects with industry collaboration",
      "International exchange programs with partner universities"
    ],
    careerOpportunities: [
      "Materials Engineer in manufacturing and production industries",
      "Research and Development in advanced materials",
      "Process Engineer in metallurgical industries",
      "Materials Consultant for engineering firms",
      "Quality Assurance and Control in manufacturing",
      "Graduate studies in materials science and related fields"
    ],
    courseStructure: [
      {
        year: "First Year",
        courses: [
          "Introduction to Materials Science",
          "Engineering Mathematics I & II",
          "Physics of Materials",
          "Chemistry of Materials",
          "Engineering Drawing and Design",
          "Computer Programming",
          "Humanities and Social Sciences Electives"
        ]
      },
      {
        year: "Second Year",
        courses: [
          "Thermodynamics of Materials",
          "Structure of Materials",
          "Mechanical Behavior of Materials",
          "Transport Phenomena in Materials Processing",
          "Phase Transformations",
          "Materials Characterization Techniques",
          "Engineering Analysis and Design"
        ]
      },
      {
        year: "Third Year",
        courses: [
          "Extractive Metallurgy",
          "Physical Metallurgy",
          "Ceramic Materials",
          "Polymer Science and Engineering",
          "Electronic Materials",
          "Materials Processing",
          "Departmental Electives"
        ]
      },
      {
        year: "Fourth Year",
        courses: [
          "Composite Materials",
          "Corrosion and Degradation of Materials",
          "Materials Selection and Design",
          "Industrial Training",
          "Capstone Design Project",
          "Advanced Electives",
          "Open Electives"
        ]
      }
    ]
  };

  // Minor Program Data
  const minorProgramData = {
    title: "Minor in Materials Science and Engineering",
    description: "The Minor in Materials Science and Engineering allows students from other disciplines to gain specialized knowledge in materials science, complementing their major degree with valuable skills in materials selection, characterization, and application.",
    eligibility: "Open to undergraduate students from all engineering and science disciplines who have completed their first year with a minimum CGPA of 7.5.",
    requirements: "Students must complete a minimum of 20 credits from the designated courses to earn a Minor in Materials Science and Engineering.",
    courses: [
      "Fundamentals of Materials Science (4 credits)",
      "Mechanical Properties of Materials (3 credits)",
      "Materials Characterization (4 credits)",
      "Functional Materials (3 credits)",
      "Polymers and Composites (3 credits)",
      "Nanomaterials and Applications (3 credits)",
      "Computational Materials Science (3 credits)",
      "Biomaterials (3 credits)",
      "Energy Materials (3 credits)"
    ],
    note: "Students need to select at least 6 courses from the above list, ensuring a minimum of 20 credits. Not all courses are offered every semester. Course availability and schedule should be confirmed with the department."
  };

  // Admissions Requirements Data
  const admissionsData = {
    title: "Admissions Requirements for B.Tech Program",
    entranceExam: "Admission to the B.Tech program in Materials Science and Metallurgical Engineering is primarily through the Joint Entrance Examination (JEE) Advanced.",
    eligibility: [
      "Candidates must have passed 10+2 examination with Physics, Chemistry, and Mathematics as compulsory subjects.",
      "Minimum of 75% marks in aggregate in the qualifying examination (65% for reserved categories).",
      "Valid JEE Advanced rank within the cutoff specified for the program."
    ],
    admissionProcess: [
      "Qualify in JEE Main examination.",
      "Appear and qualify in JEE Advanced examination.",
      "Participate in the Joint Seat Allocation Authority (JoSAA) counseling process.",
      "Choose Materials Science and Metallurgical Engineering as per preference and rank."
    ],
    documents: [
      "JEE Advanced admit card and score card",
      "Class 10 and 12 mark sheets and certificates",
      "Category certificate (if applicable)",
      "Medical fitness certificate",
      "Transfer/Migration certificate from previous institution",
      "Passport size photographs",
      "Aadhar card or other government ID proof"
    ],
    importantDates: [
      { event: "JEE Main Examination", timing: "January and April (Tentative)" },
      { event: "JEE Advanced Examination", timing: "May/June (Tentative)" },
      { event: "JoSAA Counselling", timing: "June-July (Tentative)" },
      { event: "Admission and Registration", timing: "July-August (Tentative)" },
      { event: "Orientation Program", timing: "Last week of July (Tentative)" },
      { event: "Commencement of Classes", timing: "First week of August (Tentative)" }
    ],
    
  };

  // Academic Handbooks Data
  const handbooksData = [
    {
      title: "Undergraduate Handbook 2024-25",
      description: "Comprehensive guide to B.Tech program policies, procedures, and requirements",
      link: "/documents/ug-handbook-2024.pdf"
    },
    {
      title: "Academic Rules and Regulations",
      description: "Detailed information on academic policies, grading system, and examination procedures",
      link: "/documents/academic-rules-2024.pdf"
    },
    {
      title: "Laboratory Safety Manual",
      description: "Guidelines for safety procedures in departmental laboratories",
      link: "/documents/lab-safety-manual.pdf"
    },
    {
      title: "Student Code of Conduct",
      description: "Expectations and guidelines for student behavior and academic integrity",
      link: "/documents/student-code-of-conduct.pdf"
    },
    {
      title: "Internship and Placement Guide",
      description: "Information on internship opportunities and placement procedures",
      link: "/documents/internship-placement-guide.pdf"
    }
  ];

  // Curriculum Data
  const curriculumData = [
    {
      semester: "Semester-wise Course Structure",
      description: "Detailed semester-wise breakdown of courses including core subjects, electives, and labs",
      link: "/documents/semester-wise-courses.pdf"
    },
    {
      semester: "Course Syllabi",
      description: "Comprehensive syllabi for all courses offered in the B.Tech program",
      link: "/documents/course-syllabi.pdf"
    },
    {
      semester: "Laboratory Manuals",
      description: "Instruction manuals for all laboratory courses in the curriculum",
      link: "/documents/lab-manuals.pdf"
    },
    {
      semester: "Elective Courses Booklet",
      description: "List and descriptions of departmental and open electives available to B.Tech students",
      link: "/documents/elective-courses.pdf"
    },
    {
      semester: "Project Guidelines",
      description: "Guidelines for B.Tech project work including timelines, evaluation criteria, and report formats",
      link: "/documents/project-guidelines.pdf"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-black mb-4">B.Tech Programme</h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {["major", "minor", "admissions", "handbooks", "curriculum"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {tab === "major" ? "Major" :
             tab === "minor" ? "Minor" :
             tab === "admissions" ? "Admissions Requirements" :
             tab === "handbooks" ? "Academic Handbooks" :
             "Curriculum & Courses"}
          </button>
        ))}
      </div>

      {/* Major Program */}
      {activeTab === "major" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">{majorProgramData.title}</h2>
          <p className="text-gray-700 mb-6">{majorProgramData.description}</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-black">Program Highlights</h3>
            <ul className="list-disc pl-6 mb-6">
              {majorProgramData.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700 mb-2">{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-black">Course Structure</h3>
            <div className="space-y-6">
              {majorProgramData.courseStructure.map((yearData, yearIndex) => (
                <div key={yearIndex} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-black">{yearData.year}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {yearData.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-gray-700 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-black">Career Opportunities</h3>
            <ul className="list-disc pl-6">
              {majorProgramData.careerOpportunities.map((opportunity, index) => (
                <li key={index} className="text-gray-700 mb-2">{opportunity}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Minor Program */}
      {activeTab === "minor" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">{minorProgramData.title}</h2>
          <p className="text-gray-700 mb-6">{minorProgramData.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-black">Eligibility</h3>
            <p className="text-gray-700">{minorProgramData.eligibility}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-black">Requirements</h3>
            <p className="text-gray-700 mb-4">{minorProgramData.requirements}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-black">Available Courses</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2">
                {minorProgramData.courses.map((course, index) => (
                  <li key={index} className="text-gray-700">{course}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-black">
            <p className="text-gray-700 italic">{minorProgramData.note}</p>
          </div>
        </div>
      )}

      {/* Admissions Requirements */}
      {activeTab === "admissions" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">{admissionsData.title}</h2>
          <p className="text-gray-700 mb-6">{admissionsData.entranceExam}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-black">Eligibility Criteria</h3>
            <ul className="list-disc pl-6">
              {admissionsData.eligibility.map((item, index) => (
                <li key={index} className="text-gray-700 mb-2">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-black">Admission Process</h3>
            <ol className="list-decimal pl-6">
              {admissionsData.admissionProcess.map((step, index) => (
                <li key={index} className="text-gray-700 mb-2">{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-black">Required Documents</h3>
            <ul className="list-disc pl-6">
              {admissionsData.documents.map((doc, index) => (
                <li key={index} className="text-gray-700 mb-2">{doc}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-black">Important Dates (Tentative)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-4 text-left">Event</th>
                    <th className="py-3 px-4 text-left">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionsData.importantDates.map((date, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b">{date.event}</td>
                      <td className="py-3 px-4 border-b">{date.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          
        </div>
      )}

      {/* Academic Handbooks */}
      {activeTab === "handbooks" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Academic Handbooks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {handbooksData.map((handbook, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-black mb-2">{handbook.title}</h3>
                <p className="text-gray-600 mb-4">{handbook.description}</p>
                <a 
                  href={handbook.link} 
                  className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Curriculum and Course Booklet */}
      {activeTab === "curriculum" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Curriculum and Course Booklet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumData.map((item, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-black mb-2">{item.semester}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}