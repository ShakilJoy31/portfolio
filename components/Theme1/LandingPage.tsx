"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import AboutSection from "@/components/Theme1/AboutSection";
import ServiceSection from "@/components/Theme1/ServiceSection";
import EducationAndExperience from "@/components/Theme1/EducationAndExperience";
import Skills from "@/components/Theme1/Skills";
import Portfolio from "@/components/Theme1/Portfolio";
import ContactSection from "@/components/Theme1/ContactSection";
import LetsTalk from "@/components/Theme1/LetsTalk";
import GoogleMap from "@/components/Theme1/GoogleMap";
import Paragraph from "@/components/utility/Paragraph/Paragraph";
import Certificates from "./Certificates";

export default function LandingHome() {
  const [showScreen, setShowScreen] = useState(true);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 700,
      once: false,
    });
    const timer = setTimeout(() => {
      setIsSlidingUp(true);
      setTimeout(() => {
        setShowScreen(false);
      }, 500);
    }, 1000);

    return () => {
      clearTimeout(timer);
      AOS.refresh();
    };
  }, []);


  return (
    <div className="text-white px-2">
      {/* Black Screen */}
      {showScreen && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${isSlidingUp && 'make-custom-curve'} ${isSlidingUp ? "animate-slide-up-fast" : ""
            }`}
        >
          <Paragraph className="animation-text text-white text-2xl">Shakidul Portfolio</Paragraph>
        </div>
      )}

      {/* Main Content */}
      <div className="flex justify-center md:mt-28 mt-12" id="about-us">
        <AboutSection />
      </div>

      <div className="flex justify-center" id="service-section">
        <ServiceSection />
      </div>

      <div className="flex justify-center" id="education-and-experience">
        <EducationAndExperience />
      </div>

      <div className="justify-center max-w-screen-xl mx-auto block" id="skills">
        <Skills />
      </div>

      <div className="flex justify-center pb-8" id="works">
        <Portfolio />
      </div>

      {/* <div className="flex justify-center pb-8 px-2 md:px-0" id="pricing">
        <Testimonials></Testimonials>
      </div> */}

      <div className="flex justify-center pb-8 px-2 md:px-0" id="pricing">
        <Certificates></Certificates>
      </div>

      {/* <div className="flex justify-center pb-8 px-2 md:px-0" id="stories">
        <Stories storiesData={storiesData} />
      </div> */}

      <div className="flex justify-center pb-8" id="contact">
        <ContactSection />
      </div>

      <div className="flex justify-center pb-8" id="lets-talk">
        <LetsTalk />
      </div>

      <div className="flex justify-center pb-8" id="google-map">
        <GoogleMap />
      </div>

    </div>
  );
}











// skills: [
//   {
//     id: 1,
//     proficiencyIn: "HTML",
//     capability: 86,
//     logo: "http://api.demo3.xdomainhost.com/1cd4eb3c159-DSC_1869-(2).JPG",
//     createdAt: "2025-03-08T21:03:42.000Z",
//     updatedAt: "2025-03-08T21:03:42.000Z",
//   },
//   {
//     id: 2,
//     proficiencyIn: "CSS",
//     capability: 83,
//     logo: "http://api.demo3.xdomainhost.com/cd4eb3c159c-DSC_1014.JPG",
//     createdAt: "2025-03-08T21:03:58.000Z",
//     updatedAt: "2025-03-08T21:03:58.000Z",
//   },
//   {
//     id: 3,
//     proficiencyIn: "Bootstrap",
//     capability: 68,
//     logo: "http://api.demo3.xdomainhost.com/d4eb3c159cb-DSC_1902-(2).JPG",
//     createdAt: "2025-03-08T21:04:14.000Z",
//     updatedAt: "2025-03-08T21:04:14.000Z",
//   },
//   {
//     id: 4,
//     proficiencyIn: "Tailwind",
//     capability: 87,
//     logo: "http://api.demo3.xdomainhost.com/4eb3c159cb7-DSC_1902-(3).JPG",
//     createdAt: "2025-03-08T21:04:34.000Z",
//     updatedAt: "2025-03-08T21:04:34.000Z",
//   },
//   {
//     id: 5,
//     proficiencyIn: "Javascript",
//     capability: 73,
//     logo: "http://api.demo3.xdomainhost.com/eb3c159cb71-DSC_1902-(3).JPG",
//     createdAt: "2025-03-08T21:04:55.000Z",
//     updatedAt: "2025-03-08T21:04:55.000Z",
//   },
//   {
//     id: 6,
//     proficiencyIn: "React.js",
//     capability: 71,
//     logo: "http://api.demo3.xdomainhost.com/b3c159cb71a-DSC_1870-(2).JPG",
//     createdAt: "2025-03-08T21:05:23.000Z",
//     updatedAt: "2025-03-08T21:05:23.000Z",
//   },
//   {
//     id: 7,
//     proficiencyIn: "Next.js",
//     capability: 78,
//     logo: "http://api.demo3.xdomainhost.com/3c159cb71af-IMG_7010.jpg",
//     createdAt: "2025-03-08T21:05:52.000Z",
//     updatedAt: "2025-03-08T21:05:52.000Z",
//   },
//   {
//     id: 8,
//     proficiencyIn: "Node.js",
//     capability: 67,
//     logo: "http://api.demo3.xdomainhost.com/c159cb71af4-DSC_1902-(2).JPG",
//     createdAt: "2025-03-08T21:06:04.000Z",
//     updatedAt: "2025-03-08T21:06:04.000Z",
//   },
//   {
//     id: 9,
//     proficiencyIn: "MySql",
//     capability: 55,
//     logo: "http://api.demo3.xdomainhost.com/159cb71af42-DSC_1902-(3).JPG",
//     createdAt: "2025-03-08T21:06:30.000Z",
//     updatedAt: "2025-03-08T21:06:30.000Z",
//   },
//   {
//     id: 10,
//     proficiencyIn: "Mongoose",
//     capability: 62,
//     logo: "http://api.demo3.xdomainhost.com/59cb71af424-DSC_1870-(2).JPG",
//     createdAt: "2025-03-08T21:06:42.000Z",
//     updatedAt: "2025-03-08T21:06:42.000Z",
//   },
//   {
//     id: 11,
//     proficiencyIn: "Stripe",
//     capability: 45,
//     logo: "http://api.demo3.xdomainhost.com/9cb71af424a-DSC_1870-(2).JPG",
//     createdAt: "2025-03-08T21:07:14.000Z",
//     updatedAt: "2025-03-08T21:07:14.000Z",
//   },
//   {
//     id: 12,
//     proficiencyIn: "Redux.js",
//     capability: 60,
//     logo: "http://api.demo3.xdomainhost.com/cb71af424a5-DSC_1902-(2).JPG",
//     createdAt: "2025-03-08T21:07:24.000Z",
//     updatedAt: "2025-03-08T21:07:24.000Z",
//   },
//   {
//     id: 13,
//     proficiencyIn: "React Native",
//     capability: 35,
//     logo: "http://api.demo3.xdomainhost.com/b71af424a59-DSC_1902-(2).JPG",
//     createdAt: "2025-03-08T21:08:00.000Z",
//     updatedAt: "2025-03-08T21:08:00.000Z",
//   },
//   {
//     id: 14,
//     proficiencyIn: "C and Java",
//     capability: 25,
//     logo: "http://api.demo3.xdomainhost.com/71af424a599-DSC_1902-(2).JPG",
//     createdAt: "2025-03-08T21:08:46.000Z",
//     updatedAt: "2025-03-08T21:08:46.000Z",
//   },
//   {
//     id: 15,
//     proficiencyIn: "Typescript",
//     capability: 65,
//     logo: "http://api.demo3.xdomainhost.com/1af424a5996-DSC_1870-(2).JPG",
//     createdAt: "2025-03-08T21:10:10.000Z",
//     updatedAt: "2025-03-08T21:10:10.000Z",
//   },
// ],

