"use client";

import React from "react";
import { Phone } from "lucide-react";
import { easeIn, motion, scale } from "framer-motion";
import { useLenis } from "lenis/react";

const childVariants = {
  initial: { y: "100%", opacity: 0 },
  hover: { y: "0%", opacity: 1 },
};

const chidVariants = {
  initial: { y: "0", opacity: 1 },
  hover: { y: "100%", opacity: 0 },
};
const imgvariants = {
  hover: { scale: 1.2 },
};

const NavCta = () => {
  const lenis = useLenis();
  const handleScrollTo = (targetId: string) => {
    lenis?.scrollTo(targetId, {
      offset: -90,
      duration: 2,
    });
  };
  return (
    <div  onClick={() => handleScrollTo("#Contact-section")}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="  relative cursor-pointer z-10 flex h-10 w-43 items-center justify-between overflow-visible rounded-full border border-white/10 bg-black transition-all hover:bg-white/80"
      >
        {/* Avatar & Badge */}
        <motion.div className="relative -left-1 flex h-fit w-fit items-center overflow-visible">
          <motion.div className="h-17 w-17  overflow-hidden rounded-full border-3 border-zinc-900 bg-red-900">
            <motion.img
              variants={imgvariants}
              transition={{ duration: 1.4, ease: easeIn }}
              src="/Nafae.pfp.jpg"
              alt="Avatar"
              className="h-full w-full object-cover "
            />
          </motion.div>

          <motion.div className="absolute -right-2.5 z-40 flex h-5 w-5 items-center justify-center rounded-full border overflow-hidden border border-white/20 bg-zinc-900 text-xs font-medium text-white shadow-md">
            <motion.div
              variants={chidVariants}
              transition={{ duration: 0.2 }}
              className=" "
            >
              +
            </motion.div>
            <motion.div
              className="absolute  z-40 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-zinc-900 text-xs font-medium text-white shadow-md"
              variants={childVariants}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-2 h-2" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Container */}
        <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
          <motion.div
            variants={chidVariants}
            transition={{ duration: 0.2 }}
            className="flex h-full w-fit items-center justify-center overflow-hidden px-1 text-center text-sm font-bold"
          >
            Book a Call
          </motion.div>
          <motion.div
            variants={childVariants}
            transition={{ duration: 0.2 }}
            className="absolute flex h-fit w-fit items-center justify-center overflow-hidden px-1 text-center text-sm font-bold text-black"
          >
            Book a Call
          </motion.div>
        </div>
      </motion.div>

      {/* Spot Status Badge */}
      <span className="absolute bottom-1 right-1 flex animate-pulse items-center gap-1 pr-3 text-[10px] text-gray-500">
        <span className="h-1 w-1 rounded-full bg-teal-600/50 blur-[1px]" />2
        spots left this month
      </span>
    </div>
  );
};

export default NavCta;
