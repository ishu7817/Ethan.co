
"use client"
import { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
import React from "react";

const ForWhom = () => {
    const [indexs, setindexs] = useState(0)                                                              
  const forrwhom = new Array(
    "For AI Companies",
    "For SaaS startups ",
    "For Digital Products",
  );

  useEffect(() => {
  const intervalId = setInterval(() => {
    setindexs((prev) => (prev + 1) % forrwhom.length);
  }, 2500);

  return () => clearInterval(intervalId);
}, []);

  
  return (
    <div>
      <motion.div 
      initial={{scale:1,opacity:0.6 }}
      animate={{scale:1, opacity:1}}
      transition={{duration:0.6}}
      className="flex justify-end font-chillax">
        <h2 className="text-2xl  sm:text-2xl md:text-34 xl lg:text-[44px]  whitespace-nowrap  font-bold tracking-tighter text-neutral-900 uppercase transition-all duration-3">
    {forrwhom[indexs] ?? ""}</h2>
      </motion.div>
    </div>
  );
};

export default ForWhom;
