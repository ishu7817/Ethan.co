"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { TextRoll } from "./components/Textroll";
import ForWhom from "./components/ForWhom";

import {  MicroMesh } from "./components/MicroMesh";
import Navbar from "./components/Navbar";
import Reel from "./components/Reel";
import ProjectsSection from "./components/Projects";
import NumberSeperation from "./components/NumberSeperation";
import BrandExcellence from "./components/BrandExcellence";
import LandingPage1 from "./components/LandingPage1";
import LandingPage2 from "./components/LandingPage2";
import Services from "./components/ServicesSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import ParallaxLayer from "./components/Paralax";
export default function Page() {
  return (
    <div className=" w-full relative  bg-[#1a1a1a] scrollbar-none ">
      <MicroMesh />
      <div className="fixed inset-0 bg-gradient-to-bl from-[#424242]/50 via-[#282828]/50 to-transparent pointer-events-none  z-0" />
      <div className="relative min-h-screen w-full   overflow-x-hidden font-sans px-6 py-6 md:px-12 md:py-8 ">
        <div className="relative z-15 py-6 md:py-8">
          <Navbar />
        </div>

        <div className=" relative  w-full h-full flex flex-col gap-28   ">
          <ParallaxLayer speed={0.1}>
            <LandingPage1 />
          </ParallaxLayer>

          <LandingPage2 />
        </div>
      </div>

       <Reel />
     <BrandExcellence />


      <ProjectsSection />

      <Reel />

      <Services />

      <Reel />
      <Contact />
     
      <Footer /> 
    </div>
  );
}
