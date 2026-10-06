"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[80vh] w-full flex-col justify-between overflow-hidden border-t border-white/10 bg-[#080809] text-white selection:bg-white selection:text-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[350px] bg-gradient-to-t from-blue-200 via-blue-300/20 to-transparent blur-3xl pointer-events-none z-0" />


      <div className="flex min-w-0 flex-col gap-8 p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:p-16">
        <div className="flex min-w-0 flex-col justify-center pt-6 sm:pt-10 lg:h-full lg:flex-1 lg:pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm leading-relaxed text-white/80 sm:text-base lg:max-w-none">
              You&apos;re hooked in the <span className="font-semibold">first 3 seconds,</span> <br />
              yet what you <span className="italic">remember</span> is the
              ending... so here are some flowers from two cuties for you <br />
              (Purple ones are mine)
            </p>
          </motion.div>

          <div className="relative z-10 flex w-full items-center justify-between overflow-hidden border-t border-white/10 font-array">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex w-full min-w-0 items-baseline justify-between"
            >
              <h1 className="pointer-events-none whitespace-nowrap text-[clamp(4rem,12vw,15rem)] font-black leading-none tracking-tight text-white select-none md:text-[128px] xl:text-[300px]">
                ETHAN
              </h1>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-square w-full max-w-[20rem] shrink-0 self-center overflow-hidden rounded-xl border border-white/15 bg-zinc-900/50 lg:h-100 lg:w-100 lg:max-w-none lg:self-auto"
        >
          <img
            src="/dog.webp"
            alt="A dog wearing a flower crown"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Glass sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        </motion.div>
      </div>
    </footer>
  );
}
