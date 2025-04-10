"use client";

import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavHeading() {
    // const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Add scroll effect
    useEffect(() => {
        // const handleScroll = () => {
        //   // setScrolled(window.scrollY > 10);
        // };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial states
        handleResize();

        // window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            // window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`py-4 sm:py-5 transition-all duration-300 `}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    {/* Logo section */}
                    <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        <Link
                            href="https://www.iith.ac.in/"
                            className="shrink-0 hover:opacity-90 transition-all duration-200 relative group"
                            aria-label="IIT Hyderabad"
                        >
                            <div className="p-1 rounded-lg group-hover:shadow-md transition-all duration-300">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/200px-IIT_Hyderabad_Insignia.svg.png"
                                    className="w-36 h-32 transition-transform duration-300 group-hover:scale-105 bg-white"
                                    alt="IIT Hyderabad Logo"
                                />
                            </div>
                            {/* <span className="opacity-0 group-hover:opacity-100 absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 transition-all duration-300 rounded-full"></span> */}
                        </Link>
                        <div className="hidden md:flex md:flex-col text-center md:text-left md:mt-2 md:pl-4 md:ml-40">
                            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
              `}</style>

                            <Link href="/" className="group transition-all duration-300 transform">
                                <h1
                                    className="font-['Montserrat'] text-sm sm:text-xl md:text-4xl  font-bold"
                                    style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.1)" }}
                                >
                                    Materials Science and Metallurgical Engineering
                                </h1>
                            </Link>

                            <Link
                                href="https://www.iith.ac.in/"
                                className="group transition-all duration-300 mt-1"
                            >
                                <h2
                                    className="font-['Montserrat'] text-base sm:text-sm md:text-2xl font-medium text-black group-hover:text-gray-500 transition-colors duration-300 tracking-wide"
                                >
                                    Indian Institute of Technology Hyderabad
                                </h2>
                            </Link>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Component for social media links
function SocialLink({ href, icon, label, color }) {
    return (
        <Link
            href={href}
            className="group relative flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            <div
                className="m-1 rounded-full transition-all duration-300 transform group-hover:scale-110 ring-2 ring-gray-100 group-hover:ring-gray-200"
                style={{ backgroundColor: `${color}15` }}
            >
                <div className="text-3xl" style={{ color: color }}>
                    {icon}
                </div>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white text-xs px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {label}
            </span>
        </Link>
    );
}
