"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { TextRoll } from "./components/Textroll";

import ForWhom from "./components/ForWhom";
import { MicroMesh } from "./components/MicroMesh";
import Navbar from "./components/Navbar";
import Reel from "./components/Reel";
import { div } from "framer-motion/client";
import Reviews from "./components/Reviews";
import ProjectsSection from "./components/Projects";
import NumberSeperation from "./components/NumberSeperation";

export default function Page() {
  return (
    <div className=" w-full relative  bg-[#1a1a1a]/80 scrollbar-none">
      <div className="relative min-h-screen w-full flex flex-col  px-6 py-6 md:px-12 md:py-8  overflow-x-hidden font-sans  ">
        <MicroMesh />
        <div className="fixed inset-0 bg-gradient-to-bl from-[#424242] via-[#282828]/50 to-transparent pointer-events-none z-0" />
        <div className="fixed -left-32 -bottom-1/4 -translate-y-1/4 w-[400px] h-[400px] bg-cyan-600 rounded-full blur-[140px] pointer-events-none" />
        <Navbar />

        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: easeIn }}
          className=" mt-[30vh] flex items-center justify-center pointer-events-none z-0 selection:bg-transparent"
        >
          <h1 className="text-[10vw] font-black z-50  text-zinc-900 tracking-tighter leading-none select-none whitespace-nowrap">
            MOTION DESIGNER
          </h1>
        </motion.div>

        <div className="flex flex-col gap-30">
          <motion.div className="flex justify-between mt-5 z-20">
            <Reviews />

            <div>
              <ForWhom />
            </div>
          </motion.div>

          <motion.div className="flex justify-between z-20">
            <div className="max-w-sm ">
              <p className="text-sm md:text-base text-gray-300 font-medium leading-snug">
                I create motion systems that simplify complex products, elevate
                digital brands, and help companies launch with clarity.
              </p>
            </div>

            <div className="flex justify-end text-sm font-medium text-white">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">01)</span> Product
                  Explainers
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">02)</span> UI
                  Animation
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">03)</span> Launch
                  Campaigns
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">04)</span> Brand
                  Motion
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div>
        <Reel />
      </motion.div>

      {/*NEW SECTIONS BELOW */}
      <section className="relative z-10 w-full px-6 py-12 md:px-12 md:py-20 text-white">
        {/* BRAND EXCELLENCE */}
        <NumberSeperation number="01" text="Brand Excellence" anythingElse="© 2026" />
        <div className="flex flex-col md:ml-34 text-white/90">
          {/* Main Statement Heading */}
          <div className="max-w-5xl mb-16 md:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-whit0  lg:text-4xl font-black uppercase tracking-tight leading-tight">
              I DESIGN AND ANIMATE EXPLAINER VIDEOS, FEATURE ANNOUNCEMENTS, AND
              PRODUCT MOTION THAT TURN COMPLEX IDEAS INTO VISUALS PEOPLE
              ACTUALLY UNDERSTAND.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className=" text-white/80 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pb-20 md:pb-32">
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                30-90s
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400 font-mono uppercase tracking-wider">
                TYPICAL VIDEO LENGTH
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                5-14
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400 font-mono uppercase tracking-wider">
                AVERAGE TURNAROUND (DAYS)
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                4-5
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400 font-mono uppercase tracking-wider">
                REVISIONS INCLUDED
              </p>
            </div>
          </div>
        </div>

        {/* SELECTED WORK */}
        <NumberSeperation number="02" text="Selected work" />

        {/* Projects Title + Context Paragraph Grid */}
        <div className="flex  gap-8 items-center justify-between">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              PROJECTS
              <br />
              (27)
            </h2>
          </div>

          <div className="md:ml-auto max-w-sm">
            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
              Every project starts with the same question — <br />
              How do I make this idea impossible to scroll past? <br />
            </p>
          </div>
        </div>

        <ProjectsSection/>
      </section>
      <Reel/>
    </div>
  );
}
