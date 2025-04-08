    "use client"
    import { useState } from "react";

    export default function MTechProgram() {
    const [activeTab, setActiveTab] = useState("specializations");
    const [activeSpecialization, setActiveSpecialization] = useState("ie");

    // Specialization Data
    const specializationData = {
        ie: {
        title: "Industrial Engineering (IE)",
        description: "The Industrial Engineering specialization focuses on optimizing complex processes, systems, and organizations for enhanced performance and efficiency in materials manufacturing and processing industries.",
        courses: [
            "Advanced Manufacturing Processes",
            "Materials Processing Operations",
            "Process Modeling and Simulation",
            "Quality Engineering and Management",
            "Supply Chain Management in Materials Industry",
            "Automation in Materials Processing",
            "Industrial Ergonomics and Safety",
            "Production Planning and Control"
        ],
        researchAreas: [
            "Process optimization in materials manufacturing",
            "Advanced manufacturing technologies",
            "Sustainable manufacturing processes",
            "Quality control systems in materials production",
            "Industry 4.0 applications in materials processing"
        ],
        careerProspects: [
            "Process Engineer in metallurgical and materials industries",
            "Manufacturing Systems Engineer",
            "Quality Control Manager",
            "Production Planning Specialist",
            "Industrial Consultant for materials-based manufacturing",
            "Research and Development in industrial processes"
        ]
        },
        icme: {
        title: "Integrated Computational Materials Engineering (ICME)",
        description: "The ICME specialization integrates computational approaches with experimental techniques to accelerate materials discovery, design, and optimization across multiple length and time scales.",
        courses: [
            "Computational Thermodynamics and Kinetics",
            "Finite Element Analysis for Materials",
            "Multiscale Materials Modeling",
            "Machine Learning in Materials Science",
            "Computational Design of Materials",
            "High-Performance Computing in Materials Science",
            "Advanced Programming for Materials Simulations",
            "Data Science for Materials Research"
        ],
        researchAreas: [
            "Multi-scale modeling of materials properties",
            "Computational prediction of phase transformations",
            "AI and machine learning for materials discovery",
            "Integrated design of materials and components",
            "Digital twins for materials processing and performance"
        ],
        careerProspects: [
            "Computational Materials Scientist",
            "Materials Modeling Specialist",
            "R&D Engineer in advanced materials development",
            "Data Scientist in materials industry",
            "Software Developer for materials simulation tools",
            "Research Scientist in computational materials science"
        ]
        },
        msme: {
        title: "Materials Science and Metallurgical Engineering (MSME)",
        description: "The core MSME specialization provides advanced training in the fundamental aspects and applications of materials science and metallurgical engineering with emphasis on structure-property-processing relationships.",
        courses: [
            "Advanced Physical Metallurgy",
            "Materials Characterization Techniques",
            "Advanced Materials Processing",
            "Mechanical Behavior of Materials",
            "Functional Materials",
            "Corrosion Science and Engineering",
            "Phase Transformations in Materials",
            "Nanomaterials and Nanotechnology"
        ],
        researchAreas: [
            "Novel alloy development and characterization",
            "Advanced structural materials",
            "Nanostructured materials and composites",
            "Surface engineering and coatings",
            "Corrosion and degradation mechanisms"
        ],
        careerProspects: [
            "Materials Engineer in manufacturing industry",
            "Research Scientist in materials development",
            "Technical Consultant for materials selection",
            "Failure Analysis Specialist",
            "Quality Control Engineer",
            "Academic and research positions"
        ]
        },
        smd: {
        title: "Sustainable Materials Development (SMD)",
        description: "The Sustainable Materials Development specialization focuses on designing and developing materials and processes that minimize environmental impact while meeting technological and economic requirements.",
        courses: [
            "Green Materials Processing",
            "Recycling and Materials Recovery",
            "Life Cycle Assessment of Materials",
            "Biodegradable and Eco-friendly Materials",
            "Energy Materials and Devices",
            "Materials for Environmental Remediation",
            "Sustainable Composites",
            "Resource-Efficient Manufacturing"
        ],
        researchAreas: [
            "Biodegradable and sustainable polymers",
            "Recycling technologies for complex materials",
            "Materials for renewable energy systems",
            "Low-carbon manufacturing processes",
            "Critical materials substitution and recovery"
        ],
        careerProspects: [
            "Sustainability Engineer in materials industry",
            "Environmental Compliance Specialist",
            "Recycling Technology Developer",
            "Green Materials Researcher",
            "Energy Materials Scientist",
            "Consultant for sustainable manufacturing"
        ]
        }
    };

    // Admissions Requirements Data
    const admissionsData = {
        title: "Admissions Requirements for M.Tech Program",
        eligibility: [
        "B.Tech/B.E. or equivalent degree in Metallurgical Engineering, Materials Science, Mechanical Engineering, Chemical Engineering, or related disciplines from a recognized institution.",
        "Minimum of 60% marks (or CGPA of 6.5 on a 10-point scale) in the qualifying degree (55% for SC/ST/PwD candidates).",
        "Valid GATE score in relevant disciplines (XE, MT, ME, CH, or PI).",
        "For sponsored candidates: Minimum two years of work experience in relevant industry or R&D organization."
        ],
        admissionProcess: [
        "Shortlisting based on valid GATE score or departmental screening test for sponsored candidates.",
        "Personal interview for shortlisted candidates.",
        "Final selection based on academic performance, GATE score, and interview performance.",
        "Separate merit lists for regular and sponsored categories."
        ],
        documents: [
        "Online application form",
        "GATE score card (for regular candidates)",
        "Bachelor's degree certificate and mark sheets",
        "Sponsorship certificate (for sponsored candidates)",
        "Work experience certificates (for sponsored candidates)",
        "Category certificate (if applicable)",
        "Photo ID proof",
        "Recent passport-sized photographs"
        ],
        importantDates: [
        { event: "Online Application Opens", timing: "February (for July admission) / September (for January admission)" },
        { event: "Last Date for Online Application", timing: "March (for July admission) / October (for January admission)" },
        { event: "Screening Test for Sponsored Candidates", timing: "April (for July admission) / November (for January admission)" },
        { event: "Interview for Shortlisted Candidates", timing: "May (for July admission) / November (for January admission)" },
        { event: "Announcement of Results", timing: "June (for July admission) / December (for January admission)" },
        { event: "Registration and Admission", timing: "July (for July admission) / January (for January admission)" },
        { event: "Commencement of Classes", timing: "Last week of July (for July admission) / First week of January (for January admission)" }
        ],
        financialAssistance: "Ministry of Education (MoE) assistantship is available for regular (full-time) GATE-qualified M.Tech students as per institute norms. The current stipend amount is ₹12,400 per month for the duration of the program (subject to satisfactory academic performance).",
        contact: "For more information about M.Tech admissions, please contact the Postgraduate Admissions Office at pgadmissions@msme.edu or call +91-XXXX-XXXXXX."
    };

    // Academic Handbooks Data
    const handbooksData = [
        {
        title: "M.Tech Student Handbook 2024-25",
        description: "Comprehensive guide to M.Tech program policies, procedures, and requirements",
        link: "/documents/mtech-handbook-2024.pdf"
        },
        {
        title: "Postgraduate Academic Regulations",
        description: "Detailed information on academic policies, grading system, and examination procedures for PG programs",
        link: "/documents/pg-academic-regulations-2024.pdf"
        },
        {
        title: "M.Tech Thesis Guidelines",
        description: "Instructions and format for M.Tech thesis preparation and submission",
        link: "/documents/mtech-thesis-guidelines.pdf"
        },
        {
        title: "Research Ethics and Academic Integrity",
        description: "Guidelines for maintaining highest standards of research ethics and academic integrity",
        link: "/documents/research-ethics-guide.pdf"
        },
        {
        title: "Laboratory Protocols and Safety Manual",
        description: "Standard operating procedures and safety guidelines for research laboratories",
        link: "/documents/lab-safety-pg-manual.pdf"
        }
    ];

    // Curriculum Data
    const curriculumData = [
        {
        title: "Core Curriculum Structure",
        description: "Core courses common to all M.Tech specializations in MSME department",
        link: "/documents/mtech-core-curriculum.pdf"
        },
        {
        title: "Industrial Engineering (IE) Specialization Courses",
        description: "Detailed syllabus for all courses under the IE specialization",
        link: "/documents/mtech-ie-courses.pdf"
        },
        {
        title: "Integrated Computational Materials Engineering (ICME) Specialization Courses",
        description: "Detailed syllabus for all courses under the ICME specialization",
        link: "/documents/mtech-icme-courses.pdf"
        },
        {
        title: "Materials Science and Metallurgical Engineering (MSME) Specialization Courses",
        description: "Detailed syllabus for all courses under the MSME specialization",
        link: "/documents/mtech-msme-courses.pdf"
        },
        {
        title: "Sustainable Materials Development (SMD) Specialization Courses",
        description: "Detailed syllabus for all courses under the SMD specialization",
        link: "/documents/mtech-smd-courses.pdf"
        },
        {
        title: "Elective Courses Booklet",
        description: "List and descriptions of departmental and institute electives available to M.Tech students",
        link: "/documents/mtech-elective-courses.pdf"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-black">M.Tech Programme</h1>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
            {["specializations", "admissions", "handbooks", "curriculum"].map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
            >
                {tab === "specializations" ? "Specializations" :
                tab === "admissions" ? "Admissions Requirements" :
                tab === "handbooks" ? "Academic Handbooks" :
                "Curriculum & Courses"}
            </button>
            ))}
        </div>

        {/* Specializations Tab Content */}
        {activeTab === "specializations" && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black text-center">M.Tech Specializations</h2>
            
            {/* Specialization Selection Buttons */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
                {Object.keys(specializationData).map((spec) => (
                <button
                    key={spec}
                    onClick={() => setActiveSpecialization(spec)}
                    className={`px-4 py-2 rounded-md font-medium transition-all ${
                    activeSpecialization === spec
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                >
                    {spec.toUpperCase()}
                </button>
                ))}
            </div>
            
            {/* Selected Specialization Content */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-black">{specializationData[activeSpecialization].title}</h3>
                <p className="text-gray-700 mb-6">{specializationData[activeSpecialization].description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Key Courses</h4>
                    <ul className="space-y-2">
                    {specializationData[activeSpecialization].courses.map((course, index) => (
                        <li key={index} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span className="text-gray-700">{course}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Research Areas</h4>
                    <ul className="space-y-2">
                    {specializationData[activeSpecialization].researchAreas.map((area, index) => (
                        <li key={index} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span className="text-gray-700">{area}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
                
                <div>
                <h4 className="text-lg font-semibold mb-3 text-black">Career Prospects</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {specializationData[activeSpecialization].careerProspects.map((prospect, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span className="text-gray-700">{prospect}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        )}

        {/* Admissions Requirements Tab Content */}
        {activeTab === "admissions" && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">{admissionsData.title}</h2>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-black">Eligibility Criteria</h3>
                <ul className="list-disc pl-6 space-y-2">
                {admissionsData.eligibility.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                ))}
                </ul>
            </div>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-black">Admission Process</h3>
                <ol className="list-decimal pl-6 space-y-2">
                {admissionsData.admissionProcess.map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                ))}
                </ol>
            </div>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-black">Required Documents</h3>
                <ul className="list-disc pl-6 space-y-2">
                {admissionsData.documents.map((doc, index) => (
                    <li key={index} className="text-gray-700">{doc}</li>
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
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-black">Financial Assistance</h3>
                <p className="text-gray-700">{admissionsData.financialAssistance}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{admissionsData.contact}</p>
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
            <h2 className="text-2xl font-bold mb-6 text-black text-center">Curriculum and Course Booklet</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {curriculumData.map((item, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
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