"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import AboutSection from "@/components/Theme1/AboutSection";
import ServiceSection from "@/components/Theme1/ServiceSection";
import EducationAndExperience from "@/components/Theme1/EducationAndExperience";
import Skills from "@/components/Theme1/Skills";
import Portfolio from "@/components/Theme1/Portfolio";
import Pricing from "@/components/Theme1/Pricing";
import WorkingCompany from "@/components/Theme1/WorkingCompany";
import ContactSection from "@/components/Theme1/ContactSection";
import LetsTalk from "@/components/Theme1/LetsTalk";
import GoogleMap from "@/components/Theme1/GoogleMap";
import Paragraph from "@/components/utility/Paragraph/Paragraph";
import Testimonials from "@/components/Theme1/Testimonials";

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
    <div>
      {/* Black Screen */}
      {showScreen && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${isSlidingUp && 'make-custom-curve'} ${
            isSlidingUp ? "animate-slide-up-fast" : ""
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
        <ServiceSection/>
      </div>

      <div className="flex justify-center" id="education-and-experience">
        <EducationAndExperience />
      </div>

      <div className="flex justify-center" id="skills">
        <Skills />
      </div>

      <div className="flex justify-center pb-8" id="works">
        <Portfolio />
      </div>

      <div className="flex justify-center pb-8" id="pricing">
        <Pricing/>
      </div>

      <div className="flex justify-center pb-8 px-2 md:px-0" id="pricing">
       <Testimonials></Testimonials>
      </div>

      <div className="flex justify-center pb-8" id="working-company">
        <WorkingCompany />
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
