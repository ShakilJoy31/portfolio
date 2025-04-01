"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaRegHandshake } from "react-icons/fa";
import CustomButton from "./Button";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`backdrop-blur-lg fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${
      scrolled ? "bg-[#ffffff44]" : "bg-[#363e61]"
    }`}>
      <div className="max-w-screen-xl mx-auto flex items-center h-[58px] md:h-[75px] px-2 md:px-0">
        {/* Logo - Always on left */}
        <Link href="/" className="flex-shrink-0 z-30">
          <span className="self-center lg:text-[29px] text-[20px] font-semibold whitespace-nowrap text-white">
            Shakil
          </span>
        </Link>

        {/* Mobile: Horizontal Scrollable Navigation */}
        <div className="md:hidden flex-1 overflow-x-auto no-scrollbar ml-4">
          <div className="flex space-x-4 w-max">
            {[
              { href: "#about-us", label: "About" },
              { href: "#service-section", label: "Services" },
              { href: "#works", label: "Works" },
              { href: "#pricing", label: "Pricing" },
              { href: "#stories", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-white whitespace-nowrap font-medium hover:bg-[#ffffff20]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: Centered Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {[
              { href: "#about-us", label: "About" },
              { href: "#service-section", label: "Services" },
              { href: "#works", label: "Works" },
              { href: "#pricing", label: "Pricing" },
              { href: "#stories", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-semi-bold text-white hover:text-gray-400 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Hire Me Button (Right-aligned) */}
        <div className="hidden md:block ml-auto">
          <CustomButton>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-xl shadow bg-[#448C74] border border-white text-white flex gap-x-2 items-center"
            >
              <span>Hire Me</span>
              <FaRegHandshake size={20} />
            </Link>
          </CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;