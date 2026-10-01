import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useSpring } from "framer-motion";


function HeroVideoScroll({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // How fast the animation responds (lower = smoother)
    damping: 30,    // How much friction slows it down (higher = no bounce)
    restDelta: 0.001,
  });
  
  const width = useTransform(smoothProgress, [0, 1], ["80vw", "98vw"]);
  const height = useTransform(smoothProgress, [0, 1], ["80vh", "98vh"]);
  const borderRadius = useTransform(smoothProgress, [0, 1], ["12px", "0px"]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full">
      
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-[100]">
        <motion.div
          style={{
            width,
            height,
            borderRadius,
          }}
          className="relative overflow-hidden shadow-2xl object-fill"
        >
          <video
            src={src}
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

    </div>
  );
}
export default HeroVideoScroll
