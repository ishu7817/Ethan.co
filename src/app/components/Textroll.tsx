"use client";

import { motion } from "framer-motion";

interface TextRollProps {
  children: string;
  className?: string;
  duration?: number;
  stagger?: number;
}

export function TextRoll({
  children,
  className = "",
  duration = 0.35,
  stagger = 0.025,
}: TextRollProps) {
  const transition = { duration, ease: [0.33, 1, 0.68, 1] };

  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className={`relative inline-flex overflow-hidden select-none cursor-pointer ${className}`}
    >
      {/* 1. INITIAL TEXT LAYER (Rolls UP and Out) */}
      <span className="inline-flex">
        {children.split("").map((char, index) => (
          <motion.span
            key={`initial-${index}`}
            variants={{
              initial: { y: "0%" },
              hover: { y: "-100%" },
            }}
            transition={{ delay: index * stagger }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      {/* 2. HOVER TEXT LAYER (Rolls UP into View) */}
      <span className="absolute inset-0 inline-flex">
        {children.split("").map((char, index) => (
          <motion.span
            key={`hover-${index}`}
            variants={{
              initial: { y: "100%" },
              hover: { y: "0%" },
            }}
            transition={{ delay: index * stagger }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}