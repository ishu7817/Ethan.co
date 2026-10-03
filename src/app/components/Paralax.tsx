// components/ParallaxLayer.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // 0.5 = slow (background), 1.5 = fast (foreground)
  rotate?: number; // optional subtle tilt
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 1,
  rotate = 0,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate pixel movement offset based on speed depth multiplier
  const yOffset = (1 - speed) * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`${yOffset}%`, `-${yOffset}%`]);
  const rotation = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);
  
  // Physics dampening for smooth feel
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`  relative ${className}`}>
      <motion.div className="" style={{ y: smoothY, rotate: rotation }}>
        {children}
      </motion.div>
    </div>
  );
}