"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavHeading() {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Measure the sticky Header height so NavHeading can reserve space when Header becomes fixed
        const updateHeaderHeight = () => {
            const stickyHeader = document.querySelector("header.is-sticky");
            if (stickyHeader) {
                setHeaderHeight(stickyHeader.offsetHeight);
            }
        };

        window.addEventListener("resize", updateHeaderHeight);
        return () => window.removeEventListener("resize", updateHeaderHeight);
    }, []);

    return (
        <div className="py-4 sm:py-5 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo + Title section */}
                    <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full md:w-auto">
                        <Link
                            href="https://www.iith.ac.in/"
                            className="shrink-0 hover:opacity-90 transition-all duration-200 relative group"
                            aria-label="IIT Hyderabad"
                        >
                            <div className="p-1 rounded-lg group-hover:shadow-md transition-all duration-300">
                                <img
                                    src="https://www.iith.ac.in/assets/images/logo.png"
                                    className="w-auto h-14 sm:h-16 md:h-20 transition-transform duration-300 group-hover:scale-105 bg-transparent"
                                    alt="IIT Hyderabad Logo"
                                />
                            </div>
                        </Link>

                        {/* Title — md and above only */}
                        <div className="hidden md:flex flex-col text-left min-w-0">
                            <style jsx global>{`
                                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
                            `}</style>
                            <Link href="/" className="group transition-all duration-300">
                                <h1
                                    className="font-['Montserrat'] md:text-2xl lg:text-3xl font-bold leading-tight break-words"
                                    style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.1)" }}
                                >
                                    Materials Science and Metallurgical Engineering
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}