"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { TextRoll } from "./components/Textroll";

import ForWhom from "./components/ForWhom";
import { MicroMesh } from "./components/MicroMesh";
import Navbar from "./components/Navbar";
import Reel from "./components/Reel";
import ProjectsSection from "./components/Projects";
import NumberSeperation from "./components/NumberSeperation";
import BrandExcellence from "./components/BrandExcellence";
import LandingPage1 from "./LandingPage1";
import LandingPage2 from "./LandingPage2";
import Services from "./components/ServicesSection";

export default function Page() {
  return (
    <div className=" w-full relative  bg-[#1a1a1a]/80 scrollbar-none ">
      <MicroMesh />
      <div className="fixed inset-0 bg-gradient-to-bl from-[#424242] via-[#282828]/50 to-transparent pointer-events-none z-0" />
      <div className="fixed -left-32 -bottom-1/4 -translate-y-1/4 w-[400px] h-[400px] bg-cyan-600/80 rounded-full blur-[140px] pointer-events-none" />
      <div className="relative min-h-screen w-full   overflow-x-hidden font-sans px-6 py-6 md:px-12 md:py-8 ">
        <div className=" relative z-15 px-6 py-6 md:px-12 md:py-8 ">
          {" "}
          <Navbar />{" "}
        </div>

        <div className=" relative  w-full h-full flex flex-col gap-28   ">
          <LandingPage1 />
          <LandingPage2 />
        </div>
      </div>

      <Reel />
      <motion.div className="px-6 py-6 md:px-12 md:py-8">
        <NumberSeperation
          number="01 "
          text="Brand Excellence"
        />
        <BrandExcellence />
        <NumberSeperation number="02" text="Selected work" />
        <ProjectsSection />
      </motion.div>
      <Reel />

      <motion.div className="px-6 py-6 md:px-12 md:py-8">
      <NumberSeperation number="03" text="Services"/>
      <Services />
      </motion.div>
    </div>
  );
}
