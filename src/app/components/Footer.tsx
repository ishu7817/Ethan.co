"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[80vh] w-full flex-col justify-end overflow-hidden border-t border-white/10 bg-[#080809] text-white selection:bg-white selection:text-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[350px] bg-gradient-to-t from-blue-200 via-blue-300/20 to-transparent blur-3xl pointer-events-none z-0" />


        


<div className="flex items-center justify-around mt-10">
<div className="flex flex-col">
{/* Text */}
        <div className="flex min-w-0 justify-start px-4 pt-6 sm:pt-10 lg:h-full lg:flex-1 lg:pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm leading-relaxed text-white/80 sm:text-base lg:max-w-none">
              You&apos;re hooked in the{" "}
              <span className="font-semibold">first 3 seconds,</span> <br />
              yet what you <span className="italic">remember</span> is the
              ending... so here are some flowers from two cuties for you... <br />
              (Purple ones are mine)
            </p>
          </motion.div>
        </div>
             <div className=" hidden xl:flex relative overflow-hidden px-4 font-array justify-between items-center z-10 w-full border-t border-white/10">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-between w-full"
        >
          <h1 className="text-[250px] xl:text-[335px] font-black   text-white tracking-tight leading-none select-none pointer-events-none">
            ETHAN
          </h1>
        </motion.div>
          </div>
          </div>

{/* Dog Image */}
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-square w-[20vw] h-[30vh] mx-4 mobile:w-30 mobile:h-50 xs:w-70 sm:h-50 sm:w-50 md:w-80 md:h-70  xl:h-90 shrink-0 self-center overflow-hidden rounded-xl border border-white/15 bg-zinc-900/50   lg:self-auto"
        >
          <img
            src="/dog.webp"
            alt="A dog wearing a flower crown"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        </motion.div>
        </div>



{/* Ethan Name */}

          <div className="xl:hidden flex relative z-10  min-w-screen items-center justify-center overflow-hidden border-t border-white/10 font-array">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex w-full flex-1 items-baseline justify-center "
            >
              <h1 className=" pl-0.5 w-full  text-center pointer-events-none whitespace-nowrap text-[33vw]   font-black leading-none tracking-tight text-white select-none ">
                ETHAN
              </h1>
            </motion.div>



          </div>



  <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }} className="mt-8 border-t border-white/5 py-4 px-6 flex flex-col xs:flex-row items-center justify-between text-[11px] text-zinc-500 font-mono gap-2">
    <span>© {new Date().getFullYear()} ETHAN COLE. ALL RIGHTS RESERVED.</span>
    
 <div
        
      >
        <h1 className="text-sm  hover:text-zinc-300 transition-colors duration-200 group hover:cursor-pointer ">
          <span>Site by</span>
          <span className="  font-semibold  group-hover:text-white/50  ">
            <a
              href="https://x.com/IshuSyncs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-300 underline underline-offset-4 decoration-zinc-700 transition-colors duration-300  hover:decoration-white"
            >
              {" "}
              @IshuSyncs
            </a>{" "}
          </span>
        </h1>
  </div>
      </motion.div>
    </footer>
  );
}
