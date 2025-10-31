"use client";
import { Mail, MapPin, GraduationCap, BookOpen, FileText, BookOpen as CourseIcon, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FacultyProfile({ faculty }) {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/people/faculty"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Faculty Directory
                </Link>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Faculty Image */}
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <img
                                    src={faculty.faculty_image?.url || "/api/placeholder/400/400"}
                                    alt={faculty.faculty_name}
                                    className="w-full aspect-square object-cover rounded-lg shadow-md"
                                />

                                {/* Social Links */}
                                <div className="mt-6 flex justify-center gap-4">
                                    {faculty.linked_in_faculty && (
                                        <a
                                            href={faculty.linked_in_faculty}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                                            title="LinkedIn Profile"
                                        >
                                            <img src="/linked_in_logo.webp" height={24} width={24} alt="LinkedIn" />
                                        </a>
                                    )}

                                    {faculty.google_scholar_url && (
                                        <a
                                            href={faculty.google_scholar_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors"
                                            title="Google Scholar"
                                        >
                                            <img src="/google_scholar.png" height={24} width={24} alt="Google Scholar" />
                                        </a>
                                    )}

                                    {faculty.faculty_group_web_page && (
                                        <a
                                            href={faculty.faculty_group_web_page}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                                            title="Faculty Group Web Page"
                                        >
                                            <Users size={24} className="text-green-700" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Faculty Details */}
                            <div className="w-full md:w-2/3">
                                <div className="mb-6">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{faculty.faculty_name}</h1>
                                    <p className="text-xl text-gray-600 mb-6">{faculty.faculty_designation}</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Mail size={18} className="text-gray-500" />
                                            <span className="text-gray-700">{faculty.faculty_email}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <GraduationCap size={18} className="text-gray-500" />
                                            <span className="text-gray-700">{faculty.faculty_phd_detail}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-gray-500" />
                                            <span className="text-gray-700">Office: {faculty.faculty_office}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Research Interests */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <BookOpen size={20} className="text-gray-500" />
                                        <h2 className="text-xl font-semibold text-gray-900">Research Interests</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {faculty.faculty_research_interests?.map((interest, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {interest.research_interest_faculty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Publications */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <FileText size={20} className="text-gray-500" />
                                <h2 className="text-xl font-semibold text-gray-900">Selected Publications</h2>
                            </div>
                            <div className="space-y-3">
                                {faculty.faculty_publications?.map((pub, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span>
                                        <p className="text-gray-700 leading-relaxed">{pub.faculty_publication}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Courses Taught */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <CourseIcon size={20} className="text-gray-500" />
                                <h2 className="text-xl font-semibold text-gray-900">Recent Courses Taught</h2>
                            </div>
                            <div className="space-y-3">
                                {faculty.faculty_course_taught?.map((course, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        {course?.faculty_course_code ? <span className="font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm min-w-16">
                                            {course?.faculty_course_code}
                                        </span> : <></>}

                                        <span className="text-gray-700">{course.faculty_course_name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}