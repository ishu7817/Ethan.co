"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <footer className="relative max-h-[75vh] min-h-[80vh] w-full bg-[#080809] text-white flex flex-col justify-between  overflow-hidden border-t border-white/10 selection:bg-white selection:text-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[350px] bg-gradient-to-t from-blue-200 via-blue-300/20 to-transparent blur-3xl pointer-events-none z-0" />


      <div className="p-8 md:p-16 flex justify-between items-center ">
        <div className="flex flex-col justify-center h-full pt-10  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>
              You're <span className="">hooked</span> in the{" "}
              <span className="font-semibold">first 3 seconds,</span> <br />
              yet what you <span className="italic">remember</span> is the
              ending... so here are some flowers from two cuties for you <br />
              (Purple ones are mine)
            </h1>
          </motion.div>

          <div className="relative overflow-hidden font-array flex justify-between items-center z-10 w-full  border-t border-white/10">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex relative items-baseline justify-between w-full"
            >
              <h1 className=" text-[128px] xl:text-[334px] font-black   text-white tracking-tight leading-none select-none pointer-events-none">
                NAFAE
              </h1>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-100 h-100   rounded-xl overflow-hidden border border-white/15 bg-zinc-900/50 shrink-0 group"
        >
          <img
            src="/dog.png"
            alt="Retention Reward"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Glass sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        </motion.div>
      </div>
    </footer>
  );
}
