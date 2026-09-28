"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { TextRoll } from "./components/Textroll";

import ForWhom from "./components/ForWhom";
import { MicroMesh } from "./components/MicroMesh";
import Navbar from "./components/Navbar";
import Reel from "./components/Reel";
import { div } from "framer-motion/client";
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
          <h1 className="text-[10vw] z-50 font-black text-zinc-900 tracking-tighter leading-none select-none whitespace-nowrap">
            MOTION DESIGNER
          </h1>
        </motion.div>
        <div className="flex flex-col gap-30">

        <motion.div className="flex justify-between mt-5 z-20">

          <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#121212] bg-gray-800 z-30" />
                <div className="w-8 h-8 rounded-full border border-[#121212] bg-gray-700 z-20" />
                <div className="w-8 h-8 rounded-full border border-[#121212] bg-gray-600 z-10" />
                <div className="w-8 h-8 rounded-full border border-[#121212] bg-red-900 z-0" />
              </div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-tight">
                <span className="text-white text-xs">4.9/5</span>
                <br />
                Based on 30+ Reviews
              </div>
            </div>
            <div>

            <ForWhom  />
            </div>

        </motion.div>

<motion.div className="flex justify-between">

            <div className="max-w-sm ">
              <p className="text-sm md:text-base text-gray-300 font-medium leading-snug">
                I create motion systems that simplify complex products, elevate
                digital brands, and help companies launch with clarity.
              </p>
            </div>

            {/* Right Bottom: Services List */}
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
    </div>
  );
}
