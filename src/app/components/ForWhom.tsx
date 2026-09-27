
"use client"
import { useEffect, useState } from "react";
import React from "react";

const ForWhom = () => {
    const [indexs, setindexs] = useState(0)                                                              
  const forrwhom = new Array(
    "For AI Companies",
    "For SaaS startups ",
    "For Hardware Companies",
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
      <div className="flex justify-end">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/80 uppercase">
    {forrwhom[indexs] ?? ""}</h2>
      </div>
    </div>
  );
};

export default ForWhom;
