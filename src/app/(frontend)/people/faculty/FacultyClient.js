"use client";
import { useState, useEffect } from "react";
import FacultyCard from "../../../../components/people/FacultyCard";
import { Search, X, Mail, MapPin, GraduationCap, BookOpen, FileText, BookOpen as CourseIcon, GraduationCap as  Users } from "lucide-react";

export default function FacultyClient({ facultyList }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredFaculty = facultyList.filter((member) =>
        member.faculty_name.toLowerCase().includes(searchTerm.toLowerCase())
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFaculty.length > 0 ? (
                    filteredFaculty.map((member, index) => (
                        <FacultyCard
                            key={index}
                            name={member.faculty_name}
                            designation={member.faculty_designation}
                            email={member.faculty_email}
                            phdFrom={member.faculty_phd_detail}
                            office={member.faculty_office}
                            onClick={() => openModal(member)}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No faculty members match your search
                    </div>
                )}
            </div>

            {isModalOpen && selectedFaculty && (
                <div className="fixed inset-0 backdrop-blur-md bg-opacity-80 z-50 flex items-center justify-center p-6">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Faculty Profile</h2>
                            <button
                                onClick={closeModal}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="overflow-y-auto p-6 flex-grow">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-1/3 flex-shrink-0">
                                    <img
                                        src={selectedFaculty.faculty_image.url || "/api/placeholder/300/300"}
                                        alt={selectedFaculty.faculty_name}
                                        className="w-full aspect-square object-cover rounded-lg shadow-sm"
                                    />
                                </div>

                                <div className="w-full md:w-2/3">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedFaculty.faculty_name}</h3>
                                            <p className="text-lg text-gray-600 mb-4">{selectedFaculty.faculty_designation}</p>
                                        </div>
                                        
                                        {/* Links moved to the right side */}
                                        <div className="flex gap-3">
                                            {selectedFaculty.linked_in_faculty && (
                                                <a
                                                    href={selectedFaculty.linked_in_faculty}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                                                    title="LinkedIn Profile"
                                                >
                                                    
                                                    <img src="/linked_in_logo.webp" height={30} width={30} alt="Google Scholar" />
                                                </a>
                                            )}

                                            {selectedFaculty.google_scholar_url && (
                                                <a
                                                    href={selectedFaculty.google_scholar_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full transition-colors"
                                                    title="Google Scholar"
                                                >
                                                    <img src="/google_scholar.png" height={30} width={30} alt="Google Scholar" />
                                                </a>
                                            )}

                                            {selectedFaculty.faculty_group_web_page && (
                                                <a
                                                    href={selectedFaculty.faculty_group_web_page}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 "
                                                    title="Faculty Group Web Page"
                                                >
                                                    {selectedFaculty.faculty_group_web_page}
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Mail size={18} className="text-gray-500" />
                                            <span className="text-gray-700">{selectedFaculty.faculty_email}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <GraduationCap size={18} className="text-gray-500" />
                                            <span className="text-gray-700">{selectedFaculty.faculty_phd_detail}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} className="text-gray-500" />
                                            <span className="text-gray-700">Office: {selectedFaculty.faculty_office}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <BookOpen size={18} className="text-gray-500" />
                                            <h4 className="font-semibold text-gray-900">Research Interests</h4>
                                        </div>
                                        <div className="pl-6">
                                            <div className="flex flex-wrap gap-2">
                                                {selectedFaculty.faculty_research_interests?.map((interest, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                    >
                                                        {interest.research_interest_faculty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-8 mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <FileText size={20} className="text-gray-500" />
                                    <h4 className="font-semibold text-gray-900 text-xl">Selected Publications</h4>
                                </div>
                                <div className="pl-6">
                                    <ul className="space-y-3 list-disc list-inside text-gray-700 text-lg">
                                        {selectedFaculty.faculty_publications?.map((pub, index) => (
                                            <li key={index}>{pub.faculty_publication}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-3">
                                    <CourseIcon size={20} className="text-gray-500" />
                                    <h4 className="font-semibold text-gray-900 text-xl">Recent Courses Taught</h4>
                                </div>
                                <div className="pl-6">
                                    <ul className="space-y-3 text-gray-700 text-lg">
                                        {selectedFaculty.faculty_course_taught?.map((course, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="inline-block w-1 h-1 rounded-full bg-gray-400 mt-3 mr-2"></span>
                                                <span className="mr-4">{course.faculty_course_code}</span>
                                                <span>{course.faculty_course_name}</span>
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