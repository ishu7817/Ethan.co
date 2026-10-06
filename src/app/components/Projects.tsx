"use client";

import React, { useRef, useState } from "react";
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
  
];

const col2Projects: Project[] = [
  {
    id: "04",
    video: "/Post+Self.mp4",
  },
  {
    id: "05",
    video: "/Alex Ai.mp4",
  },
  {
    id: "06",
    video: "/Carpool.mp4",
  },
  
];

export default function ProjectsSection() {
  return (
    <section id="Projects-section" className=" w-full text-white/90 mt-[10vh] px-6 py-6 md:px-12 md:py-8">
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

         <HeroVideoScroll src ="/create.mp4"/>

      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="flex flex-col gap-16 md:gap-24">
          {col1Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col gap-16 md:gap-24 md:mt-24">
          {col2Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div><button className="undreline w-full mt-[10vh] mx-auto">
          View All</button></div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
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
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <FullscreenVideoModal src={project.video} isOpen={isOpen} onClose={() => setisOpen(false)}/>
    </div>

  );
}
