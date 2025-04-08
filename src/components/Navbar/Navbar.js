"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgClose, CgMenu } from "react-icons/cg";

// Using the menu.js data directly
const main = [
    {
        "name": "About",
        "url": "/about",
    },
    {
        "name": "Research",
        "url": "/research",
        "hasChildren": true,
        "children": [
            {
                "name": "Research Areas",
                "url": "/research/areas",
            },
            {
                "name": "Research Facilities",
                "url": "/research/facilities",
            },
            {
                "name": "Projects",
                "url": "/research/projects",
            },
            {
                "name": "Collaborations",
                "url": "/research/collaborations",
            }
        ]
    },
    {
        "name": "People",
        "url": "/people/faculty",
        "hasChildren": true,
        "children": [
            {
                "name": "Faculty",
                "url": "/people/faculty"
            },
            {
                "name": "Staff",
                "url": "/people/staff"
            },
            {
                "name": "Students",
                "url": "/people/students/ug",
                "hasChildren": true,
                "children": [
                    {
                        "name": "B Tech",
                        "url": "/people/students/btech"
                    },
                    {
                        "name": "M Tech",
                        "url": "/people/students/mtech"
                    },
                    {
                        "name": "PhD",
                        "url": "/people/students/phd"
                    }
                ]
            },
            {
                "name": "Alumni",
                "url": "/people/alumni"
            }
        ]
    },
    {
        "name": "Academia",
        "url": "/academia",
        "hasChildren": true,
        "children": [
            {
                "name": "Programs",
                "url": "/academia/programs/btech",
                "hasChildren": true,
                "children": [
                    {
                        "name": "B Tech",
                        "url": "/academia/programs/btech"
                    },
                    {
                        "name": "M Tech",
                        "url": "/academia/programs/mtech"
                    },
                    {
                        "name": "PhD",
                        "url": "/academia/programs/phd"
                    },
                ]
            },
            {
                "name": "Course Curriculum",
                "url": "",
                "hasChildren" : true,
                "children": [
                    {
                        "name": "UG Course Curriculum",
                        "url": "/academia/programs/btech"
                    },
                    {
                        "name": "PG Course Curriculum",
                        "url": "/academia/programs/mtech"
                    },
                ]
            },
            {
                "name": "Time Table",
                "url": ""
            }
        ]
    },
    {
        "name": "Careers",
        "url": "/careers",
    },
    {
        "name": "Contact",
        "url": "/contact",
    }
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [sticky, setSticky] = useState(false);
    const headerRef = useRef(null);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [openNestedDropdowns, setOpenNestedDropdowns] = useState({});

    const pathname = usePathname();
    const asPath = pathname;

    useEffect(() => {
        const header = headerRef.current;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            scrollY > 0 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showMenu && !headerRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showMenu]);

    const handleLinkClick = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(false);
            setOpenDropdowns({});
            setOpenNestedDropdowns({});
        }
    };

    const toggleDropdown = (menuName, e) => {
        if (window.innerWidth < 1024) {
            e.stopPropagation();
            setOpenDropdowns((prev) => ({
                ...prev,
                [menuName]: !prev[menuName],
            }));
        }
    };

    const toggleNestedDropdown = (menuName, e) => {
        if (window.innerWidth < 1024) {
            e.stopPropagation();
            setOpenNestedDropdowns((prev) => ({
                ...prev,
                [menuName]: !prev[menuName],
            }));
        }
    };

    return (
        <header
            className={`bg-gray-100 transition-all duration-300 shadow-lg ${sticky ? "fixed top-0 left-0 w-full shadow-xl z-50" : ""
                }`}
            ref={headerRef}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-center h-20"> 
                    <button
                        className="lg:hidden flex items-center justify-center w-12 h-12 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        onClick={() => setShowMenu(!showMenu)}
                        aria-label={showMenu ? "Close menu" : "Open menu"}
                        aria-expanded={showMenu}
                    >
                        {showMenu ? (
                            <CgClose className="text-2xl" />
                        ) : (
                            <CgMenu className="text-2xl" />
                        )}
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
                        <ul className="flex space-x-8 items-center">
                            {main.map((menu, i) => (
                                <React.Fragment key={`menu-${i}`}>
                                    {menu.hasChildren ? (
                                        <li className="relative group">
                                            <Link
                                                href={menu.url}
                                                className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 text-lg font-medium py-2 px-1 border-b-2 border-transparent hover:border-gray-800 transition-colors duration-200"
                                                aria-haspopup="true"
                                            >
                                                {menu.name}
                                                <IoIosArrowDown className="ml-1 text-sm transition-transform duration-200 group-hover:rotate-180" />
                                            </Link>
                                            <ul className="hidden group-hover:block absolute left-0 top-full bg-white shadow-xl rounded-md py-2 min-w-[250px] z-10 border-t-2 border-gray-800">
                                                {menu.children.map((child, j) => (
                                                    <li key={`children-${j}`} className="relative group/nested">
                                                        {child.hasChildren ? (
                                                            <>
                                                                <Link
                                                                    href={child.url}
                                                                    className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-base cursor-pointer"
                                                                >
                                                                    {child.name}
                                                                    <IoIosArrowForward className="ml-1 text-sm transition-transform duration-200 group-hover/nested:rotate-90" />
                                                                </Link>
                                                                <ul className="hidden group-hover/nested:block absolute left-full top-0 bg-white shadow-xl rounded-md py-2 min-w-[250px] z-20 border-l-2 border-gray-800">
                                                                    {child.children.map((grandchild, k) => (
                                                                        <li key={`grandchild-${k}`}>
                                                                            <Link
                                                                                href={grandchild.url}
                                                                                className={`block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-base ${asPath === grandchild.url ? "font-medium text-gray-900 bg-gray-50" : ""
                                                                                    }`}
                                                                                onClick={handleLinkClick}
                                                                            >
                                                                                {grandchild.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={child.url}
                                                                className={`block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-base ${asPath === child.url ? "font-medium text-gray-900 bg-gray-50" : ""
                                                                    }`}
                                                                onClick={handleLinkClick}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>

                                    ) : (
                                        <li>
                                            <Link
                                                href={menu.url}
                                                className={`block py-2 px-1 text-lg font-medium border-b-2 ${asPath === menu.url
                                                    ? "text-gray-900 border-gray-800"
                                                    : "text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-800"
                                                    } transition-colors duration-200`}
                                                onClick={handleLinkClick}
                                            >
                                                {menu.name}
                                            </Link>
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu overlay */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                        onClick={() => setShowMenu(false)}
                    ></div>
                    <div
                        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${showMenu ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-gray-800 font-semibold text-lg">Menu</span>
                            <button
                                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full"
                                onClick={() => setShowMenu(false)}
                                aria-label="Close menu"
                            >
                                <CgClose className="text-xl" />
                            </button>
                        </div>
                        <ul className="py-4">
                            {main.map((menu, i) => (
                                <React.Fragment key={`menu-mobile-${i}`}>
                                    {menu.hasChildren ? (
                                        <li className="border-b border-gray-100">
                                            <span
                                                className="flex items-center justify-between px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer text-lg"
                                                onClick={(e) => toggleDropdown(menu.name, e)}
                                                aria-expanded={openDropdowns[menu.name]}
                                                aria-haspopup="true"
                                            >
                                                {menu.name}
                                                <IoIosArrowDown
                                                    className={`transform transition-transform duration-200 ${openDropdowns[menu.name] ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </span>
                                            <ul
                                                className={`${openDropdowns[menu.name] ? "max-h-screen" : "max-h-0"
                                                    } overflow-hidden transition-all duration-300 bg-gray-50`}
                                            >
                                                {menu.children.map((child, j) => (
                                                    <li key={`children-mobile-${j}`}>
                                                        {child.hasChildren ? (
                                                            <>
                                                                <span
                                                                    className="flex items-center justify-between px-8 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-base cursor-pointer"
                                                                    onClick={(e) => toggleNestedDropdown(child.name, e)}
                                                                    aria-expanded={openNestedDropdowns[child.name]}
                                                                    aria-haspopup="true"
                                                                >
                                                                    {child.name}
                                                                    <IoIosArrowDown
                                                                        className={`transform transition-transform duration-200 ${openNestedDropdowns[child.name] ? "rotate-180" : ""
                                                                            }`}
                                                                    />
                                                                </span>
                                                                <ul
                                                                    className={`${openNestedDropdowns[child.name] ? "max-h-screen" : "max-h-0"
                                                                        } overflow-hidden transition-all duration-300 bg-gray-100`}
                                                                >
                                                                    {child.children.map((grandchild, k) => (
                                                                        <li key={`grandchild-mobile-${k}`}>
                                                                            <Link
                                                                                href={grandchild.url}
                                                                                className={`block py-3 px-12 text-gray-600 hover:text-gray-900 hover:bg-gray-200 text-base ${asPath === grandchild.url ? "font-medium text-gray-900 bg-gray-200" : ""
                                                                                    }`}
                                                                                onClick={handleLinkClick}
                                                                            >
                                                                                {grandchild.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={child.url}
                                                                className={`block py-3 px-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-base ${asPath === child.url ? "font-medium text-gray-900 bg-gray-100" : ""
                                                                    }`}
                                                                onClick={handleLinkClick}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ) : (
                                        <li className="border-b border-gray-100">
                                            <Link
                                                href={menu.url}
                                                className={`block px-6 py-3 text-lg ${asPath === menu.url
                                                    ? "text-gray-900 font-medium bg-gray-50"
                                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                    }`}
                                                onClick={handleLinkClick}
                                            >
                                                {menu.name}
                                            </Link>
                                        </li>
                                    )}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;