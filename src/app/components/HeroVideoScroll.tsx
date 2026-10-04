import { useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useSpring } from "framer-motion";


function HeroVideoScroll({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // How fast the animation responds (lower = smoother)
    damping: 30,    // How much friction slows it down (higher = no bounce)
    restDelta: 0.001,
  });
  // 1. Track whether the hero container is actively visible in the viewport
const isInView = useInView(containerRef, { margin: "-10% 0px" });

// 2. Pause video when scrolled out of view, resume when back in view
useEffect(() => {
  if (!videoRef.current) return;

  if (isInView) {
    videoRef.current.play().catch(() => {});
  } else {
    videoRef.current.pause();
  }
}, [isInView]);
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
            ref={videoRef}
            src={src}
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Unmute / Sound Toggle Button */}
          <button
            onClick={toggleSound}
            type="button"
            className="absolute bottom-3 right-3 z-10 flex items-center gap-2  rounded-full bg-transparent text-xs font-medium text-zinc-300 backdrop-blur-md hover:border-zinc-600 transition-all cursor-pointer select-none"
          >
            {isMuted ? (
              <>
                <svg className="w-7 h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </>
            ) : (
              <>
                <svg className="w-7 h-7 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </>
            )}
          </button>
        </motion.div>
      </div>

    </div>
  );
}
export default HeroVideoScroll;