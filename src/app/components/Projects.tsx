"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroVideoScroll from "./HeroVideoScroll";
import NumberSeperation from "./NumberSeperation";
import FullscreenVideoModal from "./FullscreenVideoModal";
import ParallaxLayer from "./Paralax";



interface Project {
  id: string;
  video: string;
}

const col1Projects: Project[] = [
  {
    id: "01",
    video: "/Atolio.mp4#t=1.5",
  },
  {
    id: "02",
    video: "/AvaAI.mp4#t=1.5",
  },
  {
    id: "03",
    video: "/WasteProtection.mp4#t=1.2",
  },
  {
    id: "04",
    video: "/Skedul.mp4",
  },
  {
    id: "05",
    video: "/Flowly.mp4",
  },
  
  
];

const col2Projects: Project[] = [
  {
    id: "06",
    video: "/Post+Self.mp4",
  },
  {
    id: "07",
    video: "/Alex Ai.mp4",
  },
  {
    id: "08",
    video: "/Carpool.mp4",
  },
  {
    id: "9",
    video: "/Skai.trade.mp4",
  },
  {
    id: "10",
    video: "/SendAway.mp4",
  },
  
  
];

export default function ProjectsSection() {


  const [isAll, setisAll] = useState(false)
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null)

  useEffect(() => { const query = window.matchMedia("(orientation: portrait)"); const update = () => setIsPortrait(query.matches); update(); query.addEventListener("change", update); return () => query.removeEventListener("change", update); }, [])


  const initialLoadVideos1 = isAll? col1Projects: col1Projects.slice(0,2)
  const initialLoadVideos2 = isAll? col2Projects: col2Projects.slice(0,2)
  
  return (
    <section id="Projects-section" className=" w-full text-white/90 mt-[4vh] px-6 py-4 md:px-12 md:py-5 xl:mt-[10vh] xl:py-8">
        <NumberSeperation number="02" text="Selected work" />
 <ParallaxLayer speed={0.6}>
 <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

          <div className="font-clash =">
            <h2 className=" tracking-wide text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black  leading-none">
              PROJECTS

            </h2>
          </div>

          <div className="max-w-sm sm:ml-auto sm:text-right">
            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
              Product-focused videos that help businesses explain, launch,
              and showcase their products.
            </p>
          </div>
        </div>
                  </ParallaxLayer>

         {isPortrait === false && <HeroVideoScroll src="/Create.mp4" />}

      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="flex flex-col gap-10 sm:gap-14 xl:gap-24">
          {initialLoadVideos1.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col gap-10 sm:gap-14 md:mt-12 xl:gap-24 xl:mt-24">
{isPortrait === true && <ProjectCard project={{ id: "11", video: "/Create.mp4" }} />}
          {initialLoadVideos2.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    
    {!isAll &&
     <div><button
      onClick={() =>setisAll(true)}
       className="undreline hover:scale-95 text-zinc-600 hover:text-white cursor-pointer  transition-all duration-300 w-full mt-[4vh] xl:mt-[10vh] mx-auto">
          View All</button>
          </div>
}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {

const [isMuted, setisMuted] = useState(true)
    const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setisMuted(!isMuted);
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const [isOpen, setisOpen] = useState(false)
  const handleClick = () => {
    setisOpen(true)
  };

  return (
    
    <div className="group relative flex flex-col gap-4">
      {/* Video Container */}
      <div
      className="relative aspect-video w-full cursor-pointer overflow-hidden transition-colors duration-500 sm:aspect-[16/10]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
         <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          preload="metadata"
          className="  w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
                  <button
            onClick={(e) => {
      e.stopPropagation();
    toggleSound()}}
            type="button"
            className="absolute bottom-4 right-2 z-20 flex items-center gap-2  rounded-full bg-transparent text-xs font-medium mix-blend-difference text-zinc-300 backdrop-blur-md hover:border-zinc-600 transition-all cursor-pointer select-none"
          >
            {isMuted ? (
              <>
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </>
            )}
          </button>
       
      </div>
      <FullscreenVideoModal src={project.video} isOpen={isOpen} onClose={() => setisOpen(false)}/>
    </div>

  );
}
