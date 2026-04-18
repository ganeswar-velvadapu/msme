"use client"
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';
export default function Footer() {
    const headEmail = `head@msme.iith.ac.in`;
    const officeEmail = `office@msme.iith.ac.in`
    const location = "MSME Block, IIT Hyderabad, Kandi, Sangareddy, Hyderabad, Telangana, India";
    const copyright = "© 2025 Department of Materials Science and Metallurgical Engineering, IIT Hyderabad. All rights reserved.";

    const footerLinks = {
        about: [
            { name: "Department", url: "/about" },
            { name: "History", url: "/about" },
          
        ],
        academics: [
            { name: "Programs", url: "/academia/programs/btech" },
            //{ name: "Curriculum", url: "/academics/curriculum" },
            { name: "TimeTable", url: "/academia/timetable" },
            //{ name: "Student Resources", url: "/academics/resources" }
        ],
        research: [
            { name: "Areas", url: "/research/areas" },
            { name: "Facilities", url: "/research/facilities" },
            { name: "Projects", url: "/research/projects" },
            { name: "Collaborations", url: "/research/collaborations" },
        ],
        quickLinks: [
            { name: "IITH Home", url: "https://iith.ac.in" },
            { name: "IITH ERP", url: "https://erp.iith.ac.in" },
            { name: "AIMS IITH", url: "https://aims.iith.ac.in" },
            { name: "Library", url: "https://library.iith.ac.in" }
        ]
    };

    const socialLinks = [
        { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/" },
        { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/" },
        { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/" },
        { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/" }
    ];

    return (
        <footer className="bg-gray-100 text-black">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between mb-12 pb-12 border-b border-gray-300">
                    <div className="max-w-md mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold mb-3">Department of Materials Science and Metallurgical Engineering</h2>
                        <h3 className="text-lg text-gray-600 mb-4">IIT Hyderabad</h3>

                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-black hover:bg-gray-700 text-white transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="mr-3 text-black text-lg mt-1 flex-shrink-0" />
                                <span className="text-gray-800">{location}</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3 text-black text-lg flex-shrink-0" />
                                <Link href={`mailto:${headEmail}`} className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                                    {headEmail}
                                </Link>

                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3 text-black text-lg flex-shrink-0" />
                                <Link href={`mailto:${officeEmail}`} className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                                    {officeEmail}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-300 capitalize">{section}</h3>
                            <ul className="space-y-3">
                                {links.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.url} className="group flex items-center text-gray-700 hover:text-black transition-all duration-300">
                                            <FaChevronRight className="mr-2 text-xs text-gray-600 group-hover:translate-x-1 transition-transform duration-300" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-200 py-6">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm text-gray-600">{copyright}</p>
                </div>
            </div>
        </footer>
    );
}
