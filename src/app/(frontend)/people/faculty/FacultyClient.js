"use client";
import { useState, useEffect } from "react";
import FacultyCard from "../../../../components/people/FacultyCard";
import { Search, X, Mail, MapPin, GraduationCap, BookOpen, FileText, BookOpen as CourseIcon } from "lucide-react";

export default function FacultyClient({ faculty }) {


    const facultyData = [
        {
            name: "Dr. Sarah Johnson",
            designation: "Associate Professor",
            email: "sarah.johnson@university.edu",
            phdFrom: "Stanford University",
            office: "Engineering Building, Room 305",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Machine Learning",
                "Computer Vision",
                "Artificial Intelligence",
                "Neural Networks"
            ],
            publications: [
                "Johnson, S., & Smith, T. (2023). Advances in Deep Learning for Image Recognition. IEEE Transactions on Pattern Analysis.",
                "Ahmed, K., Johnson, S., & Miller, R. (2022). Self-Supervised Learning in Computer Vision. Conference on Computer Vision and Pattern Recognition.",
                "Johnson, S., & Garcia, D. (2021). Transfer Learning Approaches for Medical Imaging. Nature Machine Intelligence."
            ],
            courses: [
                "CS401: Introduction to Machine Learning",
                "CS550: Advanced Computer Vision",
                "CS610: Deep Learning Fundamentals"
            ]
        },
        {
            name: "Dr. Michael Chen",
            designation: "Professor",
            email: "michael.chen@university.edu",
            phdFrom: "Massachusetts Institute of Technology",
            office: "Science Center, Room 412",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Quantum Computing",
                "Theoretical Physics",
                "Computational Mathematics",
                "Algorithm Design"
            ],
            publications: [
                "Chen, M., & Williams, J. (2023). Quantum Algorithms for Optimization Problems. Quantum Information Processing.",
                "Park, S., Chen, M., & Zhang, L. (2022). Error Correction in Quantum Computing. Physical Review Letters.",
                "Chen, M. (2021). Quantum Supremacy: Theoretical Frameworks and Practical Applications. Journal of Quantum Physics."
            ],
            courses: [
                "PHYS520: Quantum Mechanics",
                "MATH460: Computational Algorithms",
                "CS680: Quantum Computing"
            ]
        },
        {
            name: "Dr. Amina Patel",
            designation: "Assistant Professor",
            email: "amina.patel@university.edu",
            phdFrom: "California Institute of Technology",
            office: "Engineering Building, Room 218",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Robotics",
                "Human-Computer Interaction",
                "Autonomous Systems",
                "Embedded Systems"
            ],
            publications: [
                "Patel, A., & Thompson, K. (2023). Autonomous Navigation in Dynamic Environments. Robotics and Automation Letters.",
                "Patel, A., Wilson, R., & Roberts, J. (2022). Human-Robot Collaboration in Manufacturing. International Journal of Robotics Research.",
                "Johnson, T., & Patel, A. (2021). Reinforcement Learning for Robot Control. IEEE Transactions on Robotics."
            ],
            courses: [
                "ME540: Robotics Engineering",
                "CS470: Human-Computer Interaction",
                "EE505: Embedded Systems Design"
            ]
        },
        {
            name: "Dr. James Wilson",
            designation: "Professor",
            email: "james.wilson@university.edu",
            phdFrom: "Harvard University",
            office: "Science Center, Room 305",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Biotechnology",
                "Genetic Engineering",
                "Molecular Biology",
                "Synthetic Biology"
            ],
            publications: [
                "Wilson, J., & Roberts, A. (2023). CRISPR Applications in Genetic Disease Treatment. Nature Biotechnology.",
                "Lee, S., Wilson, J., & Garcia, M. (2022). Synthetic Biology Approaches to Sustainable Biofuels. Biotechnology Advances.",
                "Wilson, J., & Thompson, R. (2021). Gene Editing Technologies: Ethical Considerations and Future Directions. Science Ethics."
            ],
            courses: [
                "BIO480: Advanced Genetic Engineering",
                "BIO550: Biotechnology Applications",
                "BIO610: Molecular Biology Techniques"
            ]
        },
        {
            name: "Dr. Emily Rodriguez",
            designation: "Associate Professor",
            email: "emily.rodriguez@university.edu",
            phdFrom: "University of California, Berkeley",
            office: "Engineering Building, Room 415",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Data Science",
                "Natural Language Processing",
                "Information Retrieval",
                "Statistical Computing"
            ],
            publications: [
                "Rodriguez, E., & Thompson, J. (2023). Large Language Models for Scientific Literature Analysis. Computational Linguistics.",
                "Rodriguez, E., Chen, T., & Davis, S. (2022). Information Extraction from Unstructured Data. Data Mining and Knowledge Discovery.",
                "Miller, K., & Rodriguez, E. (2021). Statistical Methods for Big Data Analysis. Journal of Data Science."
            ],
            courses: [
                "STAT440: Advanced Statistical Methods",
                "CS520: Natural Language Processing",
                "DATA600: Big Data Analytics"
            ]
        },
        {
            name: "Dr. Robert Taylor",
            designation: "Professor",
            email: "robert.taylor@university.edu",
            phdFrom: "Princeton University",
            office: "Science Center, Room 210",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Materials Science",
                "Nanotechnology",
                "Semiconductor Physics",
                "Renewable Energy Materials"
            ],
            publications: [
                "Taylor, R., & Lee, H. (2023). Novel Materials for Quantum Computing Applications. Advanced Materials.",
                "Kim, J., Taylor, R., & Wu, Y. (2022). Nanomaterials in Solar Cell Technology. Nature Energy.",
                "Taylor, R., & Anderson, P. (2021). Two-Dimensional Materials for Electronic Applications. Science."
            ],
            courses: [
                "MATS510: Advanced Materials Science",
                "PHYS480: Semiconductor Physics",
                "ENGR590: Nanotechnology Applications"
            ]
        },
        {
            name: "Dr. Lisa Johnson",
            designation: "Assistant Professor",
            email: "lisa.johnson@university.edu",
            phdFrom: "University of Michigan",
            office: "Engineering Building, Room 325",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Cybersecurity",
                "Network Security",
                "Cryptography",
                "Privacy Engineering"
            ],
            publications: [
                "Johnson, L., & Williams, T. (2023). Quantum-Resistant Cryptographic Protocols. IEEE Security & Privacy.",
                "Park, M., Johnson, L., & Martin, K. (2022). Privacy Preservation in Machine Learning Models. ACM Transactions on Privacy and Security.",
                "Johnson, L. (2021). Zero-Knowledge Proofs for Authentication Systems. Journal of Information Security."
            ],
            courses: [
                "CS530: Network Security",
                "CS580: Applied Cryptography",
                "CS620: Security and Privacy"
            ]
        },
        {
            name: "Dr. David Kim",
            designation: "Professor",
            email: "david.kim@university.edu",
            phdFrom: "Cornell University",
            office: "Science Center, Room 405",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Sustainable Energy",
                "Environmental Engineering",
                "Clean Technology",
                "Climate Change Mitigation"
            ],
            publications: [
                "Kim, D., & Rodriguez, S. (2023). Advanced Battery Technologies for Grid Storage. Energy & Environmental Science.",
                "Li, W., Kim, D., & Chen, J. (2022). Carbon Capture and Utilization Approaches. Nature Sustainability.",
                "Kim, D., & Thompson, B. (2021). Life Cycle Assessment of Renewable Energy Systems. Journal of Cleaner Production."
            ],
            courses: [
                "ENVE510: Sustainable Energy Systems",
                "ENVE550: Climate Change Engineering",
                "ENGR590: Clean Technology Innovation"
            ]
        },
        {
            name: "Dr. Sophia Martinez",
            designation: "Associate Professor",
            email: "sophia.martinez@university.edu",
            phdFrom: "University of Cambridge",
            office: "Engineering Building, Room 212",
            imgUrl: "/api/placeholder/300/300",
            researchInterests: [
                "Cloud Computing",
                "Distributed Systems",
                "Edge Computing",
                "Internet of Things"
            ],
            publications: [
                "Martinez, S., & Johnson, K. (2023). Secure Data Processing in Edge Computing Environments. IEEE Transactions on Cloud Computing.",
                "Martinez, S., Lee, R., & Wilson, T. (2022). Resource Allocation in Heterogeneous Cloud Systems. ACM Computing Surveys.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal.",
                "Chen, P., & Martinez, S. (2021). IoT Architecture for Smart Cities. Internet of Things Journal."
            ],
            courses: [
                "CS540: Cloud Computing Architecture",
                "CS560: Distributed Systems",
                "CS630: Internet of Things"
            ]
        }
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter faculty based on name search
    const filteredFaculty = facultyData.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle modal open/close
    const openModal = (faculty) => {
        setSelectedFaculty(faculty);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Close modal with escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Faculty Members</h1>

            {/* Search Input */}
            <div className="relative max-w-md mb-10">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search faculty by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-gray-800"
                />
            </div>

            {/* Faculty Grid - 3 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFaculty.length > 0 ? (
                    filteredFaculty.map((member, index) => (
                        <FacultyCard
                            key={index}
                            name={member.name}
                            designation={member.designation}
                            email={member.email}
                            phdFrom={member.phdFrom}
                            office={member.office}
                            onClick={() => openModal(member)}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No faculty members match your search
                    </div>
                )}
            </div>

            {/* Faculty Detail Modal */}
            {isModalOpen && selectedFaculty && (
                <div className="fixed inset-0 backdrop-blur-md bg-opacity-80 z-50 flex items-center justify-center p-6">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Modal Header with Close Button */}
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Faculty Profile</h2>
                            <button
                                onClick={closeModal}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="overflow-y-auto p-6 flex-grow">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Faculty Photo */}
                                <div className="w-full md:w-1/3 flex-shrink-0">
                                    <img
                                        src={selectedFaculty.imgUrl || "/api/placeholder/300/300"}
                                        alt={selectedFaculty.name}
                                        className="w-full aspect-square object-cover rounded-lg shadow-sm"
                                    />
                                </div>

                                {/* Faculty Details */}
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedFaculty.name}</h3>
                                    <p className="text-lg text-gray-600 mb-4">{selectedFaculty.designation}</p>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Mail size={18} className="text-gray-500" />
                                            <span className="text-gray-700">{selectedFaculty.email}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <GraduationCap size={18} className="text-gray-500" />
                                            <span className="text-gray-700">PhD from {selectedFaculty.phdFrom}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} className="text-gray-500" />
                                            <span className="text-gray-700">Office: {selectedFaculty.office}</span>
                                        </div>
                                    </div>

                                    {/* Research Interests */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <BookOpen size={18} className="text-gray-500" />
                                            <h4 className="font-semibold text-gray-900">Research Interests</h4>
                                        </div>
                                        <div className="pl-6">
                                            <div className="flex flex-wrap gap-2">
                                                {selectedFaculty.researchInterests?.map((interest, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                    >
                                                        {interest}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Selected Publications - Full Width with Larger Font */}
                            <div className="w-full mt-8 mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <FileText size={20} className="text-gray-500" />
                                    <h4 className="font-semibold text-gray-900 text-xl">Selected Publications</h4>
                                </div>
                                <div className="pl-6">
                                    <ul className="space-y-3 list-disc list-inside text-gray-700 text-lg">
                                        {selectedFaculty.publications?.map((pub, index) => (
                                            <li key={index}>{pub}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Recent Courses - Full Width with Larger Font */}
                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-3">
                                    <CourseIcon size={20} className="text-gray-500" />
                                    <h4 className="font-semibold text-gray-900 text-xl">Recent Courses Taught</h4>
                                </div>
                                <div className="pl-6">
                                    <ul className="space-y-3 text-gray-700 text-lg">
                                        {selectedFaculty.courses?.map((course, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-3 mr-2"></span>
                                                <span>{course}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}