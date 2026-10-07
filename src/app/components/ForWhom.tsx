
"use client"
import { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
import React from "react";

const ForWhom = () => {
    const [indexs, setindexs] = useState(0)                                                              
  const forrwhom = new Array(
    "For SaaS Companies",
    "For AI Products",
    "For Startups",
    "For Digital Brands",
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
      className="flex justify-start font-chillax sm:justify-end">
        <h2 className="max-w-full text-right text-[clamp(1rem,4.5vw,2.75rem)] font-bold uppercase tracking-tighter text-neutral-900 transition-all duration-300">
    {forrwhom[indexs] ?? ""}</h2>
      </motion.div>
    </div>
  );
};

export default ForWhom;
