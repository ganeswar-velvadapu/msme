"use client"
import { useState } from "react";

export default function PhDProgram() {
  const [activeTab, setActiveTab] = useState("specializations");

  // PhD Specializations Data
  const specializationsData = [
    {
      title: "Materials Science and Engineering",
      description: "Focus on the relationship between structure, properties, processing, and performance of materials across multiple length scales.",
      researchAreas: [
        "Advanced structural materials",
        "Nanostructured materials and composites",
        "Materials characterization and testing",
        "Computational materials design",
        "Sustainable materials development"
      ],
      coreSubjects: [
        "Advanced Materials Characterization",
        "Thermodynamics and Kinetics of Materials",
        "Mechanical Behavior of Materials",
        "Research Methods in Materials Science"
      ]
    },
    {
      title: "Manufacturing Systems and Engineering",
      description: "Research on advanced manufacturing processes, systems optimization, and industrial engineering applications in materials processing.",
      researchAreas: [
        "Novel manufacturing technologies",
        "Process optimization and control",
        "Additive manufacturing",
        "Sustainable manufacturing",
        "Smart manufacturing systems"
      ],
      coreSubjects: [
        "Advanced Manufacturing Processes",
        "Manufacturing Systems Engineering",
        "Industrial Operations Research",
        "Digital Manufacturing Technologies"
      ]
    },
    {
      title: "Thermal and Fluid Sciences",
      description: "Study of heat transfer, fluid mechanics, and thermodynamics with applications in materials processing and energy systems.",
      researchAreas: [
        "Heat transfer in materials processing",
        "Computational fluid dynamics",
        "Thermal management systems",
        "Phase change phenomena",
        "Energy conversion systems"
      ],
      coreSubjects: [
        "Advanced Heat Transfer",
        "Computational Fluid Dynamics",
        "Multiphase Flow Systems",
        "Thermal Analysis of Materials"
      ]
    },
    {
      title: "Control and Dynamics",
      description: "Research on dynamic systems, control theory, and their applications in materials and manufacturing processes.",
      researchAreas: [
        "Process control systems",
        "Robotic systems in manufacturing",
        "Dynamic modeling of materials processes",
        "Intelligent control systems",
        "Autonomous systems"
      ],
      coreSubjects: [
        "Advanced Control Systems",
        "System Dynamics and Modeling",
        "Nonlinear Control Theory",
        "AI and Control Applications"
      ]
    },
    {
      title: "Robotics and Mechatronics",
      description: "Integration of mechanical, electronic, and computational systems for applications in materials handling and processing.",
      researchAreas: [
        "Robotic systems for material testing",
        "Automated materials processing",
        "Sensor integration and data acquisition",
        "Human-robot collaboration",
        "Mechatronic systems design"
      ],
      coreSubjects: [
        "Advanced Robotics Systems",
        "Mechatronic System Design",
        "Sensing and Instrumentation",
        "Automation in Materials Processing"
      ]
    }
  ];

  // MSME CIP Data
  const cipData = {
    description: "The MSME Collaborative Industry Program (CIP) connects PhD students with industry partners for research projects that address real-world challenges while advancing fundamental knowledge in materials science and engineering.",
    benefits: [
      "Direct engagement with industry challenges and applications",
      "Access to advanced industry facilities and equipment",
      "Potential for additional financial support through industry sponsorship",
      "Enhanced career opportunities through industry networking",
      "Development of both research and professional skills"
    ],
    structure: [
      "Joint supervision by academic faculty and industry mentor",
      "Research problem formulation with industry input",
      "Regular progress reviews with both academic and industry advisors",
      "Industry site visits and extended placements",
      "Intellectual property agreements established at project initiation"
    ],
    partnerCompanies: [
      "Materials Innovation Corporation",
      "Advanced Metallurgical Systems",
      "Global Materials Technologies",
      "Aerospace Materials Research Lab",
      "Sustainable Materials Solutions Inc.",
      "Quantum Materials Design"
    ],
    applicationProcess: "PhD students interested in the CIP program should indicate their interest during the admission process. Selection for the program is competitive and based on academic credentials, research interests, and alignment with available industry projects."
  };

  // Admissions Requirements Data
  const admissionsData = {
    eligibility: [
      "Master's degree in Mechanical Engineering, Materials Science, Metallurgical Engineering, or related fields from a recognized institution",
      "Minimum of 65% marks or equivalent CGPA in both Bachelor's and Master's degrees (60% for SC/ST/PwD candidates)",
      "Candidates with valid GATE/NET/CSIR/UGC scores may be given preference",
      "Exceptional candidates with B.Tech degrees and outstanding academic records may be considered"
    ],
    selectionProcess: [
      "Initial screening of applications based on academic credentials and research statement",
      "Written test focusing on fundamentals of materials science, engineering mathematics, and research aptitude",
      "Technical interview by departmental selection committee",
      "Research aptitude and potential assessment",
      "Final selection and assignment of research supervisors"
    ],
    documents: [
      "Completed application form",
      "Statement of Purpose (SOP) outlining research interests and career goals",
      "Detailed curriculum vitae",
      "Bachelor's and Master's degree certificates and transcripts",
      "Valid GATE/NET/CSIR/UGC score card (if applicable)",
      "Two letters of recommendation from academic references",
      "Research proposal (optional but recommended)",
      "Proof of English language proficiency for international applicants (TOEFL/IELTS)"
    ],
    financialSupport: "Qualified full-time PhD scholars receive financial assistance as per institute norms. This typically includes a monthly stipend, tuition fee waiver, and contingency grant for research expenses. Additional fellowships from external agencies (UGC, CSIR, etc.) or industry sponsors may also be available for eligible candidates."
  };

  // Selection Process Data
  const selectionProcessData = {
    stages: [
      {
        title: "Application Screening",
        description: "Initial assessment of academic qualifications, research background, and alignment with departmental research areas."
      },
      {
        title: "Written Examination",
        description: "Comprehensive test of fundamental knowledge in materials science and engineering, research methodology, and analytical skills."
      },
      {
        title: "Technical Interview",
        description: "In-depth discussion with faculty panel on research interests, previous work, and technical knowledge in the proposed area of specialization."
      },
      {
        title: "Research Potential Assessment",
        description: "Evaluation of critical thinking, problem-solving abilities, and research aptitude through presentation of research ideas or past projects."
      },
      {
        title: "Final Selection",
        description: "Holistic review of candidate's performance across all stages and matching with available research supervisors and projects."
      }
    ],
    evaluationCriteria: [
      "Academic excellence and consistency throughout educational career",
      "Depth of knowledge in the proposed research area",
      "Research aptitude and analytical skills",
      "Communication and presentation abilities",
      "Motivation and commitment to research",
      "Alignment with departmental research priorities"
    ],
    importantDates: [
      { event: "Application Submission Deadline", date: "March 31 (for July intake) / October 31 (for January intake)" },
      { event: "Written Test", date: "April (for July intake) / November (for January intake)" },
      { event: "Interview Process", date: "May (for July intake) / December (for January intake)" },
      { event: "Announcement of Results", date: "June (for July intake) / December (for January intake)" },
      { event: "Registration and Admission", date: "July (for July intake) / January (for January intake)" }
    ]
  };

  // Academic Handbooks Data
  const handbooksData = [
    {
      title: "PhD Student Handbook",
      description: "Comprehensive guide to PhD program policies, procedures, and expectations",
      link: "/documents/phd-handbook.pdf"
    },
    {
      title: "Research Ethics Guide",
      description: "Guidelines for responsible conduct of research, ethical considerations, and integrity in research",
      link: "/documents/research-ethics.pdf"
    },
    {
      title: "Laboratory Safety Manual",
      description: "Safety protocols and procedures for laboratory work in materials science and engineering",
      link: "/documents/lab-safety.pdf"
    },
    {
      title: "Dissertation Guidelines",
      description: "Format, structure, and submission requirements for PhD dissertations",
      link: "/documents/dissertation-guidelines.pdf"
    }
  ];

  // Curriculum Data
  const curriculumData = {
    programStructure: [
      "Coursework (minimum 12 credits)",
      "Comprehensive examination",
      "Research proposal presentation",
      "Annual progress reviews",
      "Publication of research findings",
      "Dissertation writing and defense"
    ],
    coursework: {
      core: [
        "Research Methodology",
        "Advanced Materials Characterization Techniques",
        "Scientific Writing and Communication"
      ],
      electives: [
        "Specialization-specific advanced courses",
        "Interdisciplinary electives",
        "Advanced mathematics courses"
      ]
    },
    timeline: [
      { phase: "Coursework Phase", duration: "1st year", activities: "Completion of required courses, selection of research area" },
      { phase: "Comprehensive Examination", duration: "End of 1st year", activities: "Written and oral examination to evaluate subject knowledge" },
      { phase: "Research Proposal", duration: "Beginning of 2nd year", activities: "Presentation of detailed research plan and methodology" },
      { phase: "Research Phase", duration: "2nd-4th year", activities: "Focused research work, data collection and analysis" },
      { phase: "Publication Phase", duration: "3rd-4th year", activities: "Preparation and submission of research papers" },
      { phase: "Dissertation Writing", duration: "4th-5th year", activities: "Compilation of research findings into dissertation" },
      { phase: "Defense", duration: "End of program", activities: "Final presentation and defense of dissertation" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-black">PhD Programme</h1>
      <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
        Our doctoral program prepares the next generation of leaders in materials science and engineering through 
        rigorous coursework and innovative research that pushes the boundaries of the field.
      </p>
      
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {["specializations", "msme-cip", "admissions", "selection", "handbooks", "curriculum"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {tab === "specializations" ? "PhD Specializations" :
             tab === "msme-cip" ? "MSME CIP" :
             tab === "admissions" ? "Admissions Requirements" :
             tab === "selection" ? "Selection Process" :
             tab === "handbooks" ? "Academic Handbooks" :
             "Curriculum & Courses"}
          </button>
        ))}
      </div>

      {/* PhD Specializations Tab Content */}
      {activeTab === "specializations" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">PhD Specializations</h2>
          
          <div className="space-y-8">
            {specializationsData.map((specialization, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-black">{specialization.title}</h3>
                <p className="text-gray-700 mb-4">{specialization.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Research Areas</h4>
                    <ul className="space-y-2">
                      {specialization.researchAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Core Subjects</h4>
                    <ul className="space-y-2">
                      {specialization.coreSubjects.map((subject, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <span className="text-gray-700">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MSME CIP Tab Content */}
      {activeTab === "msme-cip" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">MSME Collaborative Industry Program (CIP)</h2>
          
          <p className="text-gray-700 mb-6">{cipData.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Program Benefits</h3>
              <ul className="space-y-2">
                {cipData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Program Structure</h3>
              <ul className="space-y-2">
                {cipData.structure.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4 text-black">Partner Companies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cipData.partnerCompanies.map((company, index) => (
                <div key={index} className="bg-white p-4 rounded border border-gray-200">
                  <p className="font-medium text-gray-800">{company}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-black">Application Process</h3>
            <p className="text-gray-700">{cipData.applicationProcess}</p>
          </div>
        </div>
      )}

      {/* Admissions Requirements Tab Content */}
      {activeTab === "admissions" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Admissions Requirements</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Eligibility Criteria</h3>
            <ul className="list-disc pl-6 space-y-2">
              {admissionsData.eligibility.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Required Documents</h3>
            <ul className="list-disc pl-6 space-y-2">
              {admissionsData.documents.map((doc, index) => (
                <li key={index} className="text-gray-700">{doc}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-black">Financial Support</h3>
            <p className="text-gray-700">{admissionsData.financialSupport}</p>
          </div>
        </div>
      )}

      {/* Selection Process Tab Content */}
      {activeTab === "selection" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Selection Process</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Selection Stages</h3>
            <div className="space-y-4">
              {selectionProcessData.stages.map((stage, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Stage {index + 1}: {stage.title}</h4>
                  <p className="text-gray-700">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Evaluation Criteria</h3>
            <ul className="list-disc pl-6 space-y-2">
              {selectionProcessData.evaluationCriteria.map((criteria, index) => (
                <li key={index} className="text-gray-700">{criteria}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Important Dates (Tentative)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-4 text-left">Event</th>
                    <th className="py-3 px-4 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {selectionProcessData.importantDates.map((date, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b">{date.event}</td>
                      <td className="py-3 px-4 border-b">{date.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Academic Handbooks Tab Content */}
      {activeTab === "handbooks" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Academic Handbooks</h2>
          
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

      {/* Curriculum and Course Booklet Tab Content */}
      {activeTab === "curriculum" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">Curriculum and Course Structure</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Program Structure Overview</h3>
            <ul className="list-disc pl-6 space-y-2">
              {curriculumData.programStructure.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Core Courses</h3>
              <ul className="space-y-2">
                {curriculumData.coursework.core.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-black">Elective Courses</h3>
              <ul className="space-y-2">
                {curriculumData.coursework.electives.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">PhD Program Timeline</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-4 text-left">Phase</th>
                    <th className="py-3 px-4 text-left">Timeline</th>
                    <th className="py-3 px-4 text-left">Key Activities</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculumData.timeline.map((phase, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b font-medium">{phase.phase}</td>
                      <td className="py-3 px-4 border-b">{phase.duration}</td>
                      <td className="py-3 px-4 border-b">{phase.activities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gray-50 p-8 rounded-lg text-center shadow-md mt-8">
        <h2 className="text-2xl font-bold text-black mb-4">Ready to Apply?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Join our community of researchers and innovators pushing the boundaries of materials science and engineering.
        </p>
        <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}