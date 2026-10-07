import React from "react";
import { motion } from "framer-motion";
const Reel = () => {
  const reelItems = [
    "PRODUCT DEMOS",
    "PRODUCT LAUNCH",
    "UI/UX ANIMATION",
    "KINETIC TYPOGRAPHY",
    "EXPLAINER VIDEOS",
    "3D PRODUCT ANIMATION",
    "KINETIC TYPOGRAPHY",
    "FEATURE ANNOUNCEMENTS",
    "SAAS MOTION DESIGN",
    "PRODUCT DEMOS",
    "PRODUCT LAUNCH",
    "UI/UX ANIMATION",
    "KINETIC TYPOGRAPHY",
    "EXPLAINER VIDEOS",
    "3D PRODUCT ANIMATION",
    "KINETIC TYPOGRAPHY",
    "FEATURE ANNOUNCEMENTS",
    "SAAS MOTION DESIGN",
  ];
  return (
    <div>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="scrollbar-none relative my-8 sm:my-10 xl:my-20 w-full h-5 bg-black/30 backdrop-blur-md text-zinc-200 py-2 items-center flex overflow-x-hidden"
      >
        <div className="  flex  w-full h-full items-center  gap-[8%] animate-marquee text-center ">
          {reelItems.map((text, i) => (
            <h1
              key={i}
              className=" flex h-full items-center text-center select-none  w-full font-array   font-light text-nowrap  tracking-wide   "
            >
              {text}
            </h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Reel;
