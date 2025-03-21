"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaRegHandshake } from "react-icons/fa";


interface HeaderSettingsData {
    id: number;
    favicon: string;
    headerLogo: string;
    siteTitle: string;
    siteURL: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface HeaderSettingsResponse {
    message: string;
    data: HeaderSettingsData;
  }
  
  interface NavbarProps {
    headerSettings: HeaderSettingsResponse;
  }

const Navbar: React.FC<NavbarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true); // Adds the border when scrolling
            } else {
                setScrolled(false); // Removes the border when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 px-2 bg-[#ECF3F1]`}>
            <div
                className={`max-w-screen-xl mx-auto flex items-center justify-between ${
                    scrolled ? "border-b border-gray-300 h-[58px] md:h-[75px]" : "h-[58px] md:h-[114px]"
                }`}
            >
                {/* Left: Home Button */}
                <Link href="/" className="flex items-center space-x-2 ml-2 md:ml-0">
                    <span className="self-center lg:text-[29px] text-[20px] font-semibold whitespace-nowrap dark:text-white">
                        {/* {headerSettings?.data?.siteTitle} */}
                        Shakil
                    </span>
                </Link>

                {/* Center: Navigation Links */}
                <div
                    className={`${
                        isMenuOpen ? "absolute right-2 top-full w-44 bg-[#333] shadow-md " : "hidden"
                    } md:flex md:space-x-8 md:items-center`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8">
                        <li>
                            <Link
                                href="#about-us"
                                className="block hover:text-[#448C74] py-2 px-4 md:p-0 font-semi-bold md:text-gray-700 text-gray-400 border-b border-gray-400 md:border-0"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#service-section"
                                className="block hover:text-[#448C74] py-2 px-4 md:p-0 font-semi-bold md:text-gray-700 text-gray-400 border-b border-gray-400 md:border-0"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#works"
                                className="block hover:text-[#448C74] py-2 px-4 md:p-0 font-semi-bold md:text-gray-700 text-gray-400 border-b border-gray-400 md:border-0"
                            >
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#pricing"
                                className="block hover:text-[#448C74] py-2 px-4 md:p-0 font-semi-bold md:text-gray-700 text-gray-400 border-b border-gray-400 md:border-0"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#stories"
                                className="block hover:text-[#448C74] py-2 px-4 md:p-0 font-semi-bold md:text-gray-700 text-gray-400 border-b border-gray-400 md:border-0"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="block hover:text-[#448C74] py-2 px-4 md:p-0 font-semi-bold md:text-gray-700 text-gray-400"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right: Hire Me Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-4 py-2 text-black rounded-xl shadow hover:bg-[#448C74] border border-black hover:border-[#448C74] hover:text-white flex gap-x-2 items-center"
                    >
                        <span>Hire Me</span>
                        <span>
                            <FaRegHandshake size={20} />
                        </span>
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
