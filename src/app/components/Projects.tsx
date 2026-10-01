"use client";

import React, { useRef, useState } from "react";
import HeroVideoScroll from "./HeroVideoScroll";
import NumberSeperation from "./NumberSeperation";
import FullscreenVideoModal from "./FullscreenVideoModal";


interface Project {
  id: string;
  video: string;
}

const col1Projects: Project[] = [
  {
    id: "01",
    video: "/about page final.mp4",
  },
  {
    id: "02",
    video: "/Article page demo.mp4",
  },
  {
    id: "03",
    video: "/Article page final.mp4",
  },
];

const col2Projects: Project[] = [
  {
    id: "04",
    video: "/Articleread page.mp4",
  },
  {
    id: "05",
    video: "/Article page look.mp4",
  },
  {
    id: "06",
    video: "/Articles page.mp4",
  },
];

export default function ProjectsSection() {
  return (
    <section id="Projects-section" className=" w-full text-white/90 mt-[10vh] px-6 py-6 md:px-12 md:py-8">
        <NumberSeperation number="02" text="Selected work" />

 <div className=" flex relative gap-8 items-center justify-between">
          <div className="font-clash =">
            <h2 className=" tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black  leading-none">
              PROJECTS

            </h2>
          </div>

          <div className="md:ml-auto max-w-sm">
            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
              Every project starts with the same question — <br />
              How do I make this idea impossible to scroll past? <br />
            </p>
          </div>
        </div>
         <HeroVideoScroll src ="/Article page final.mp4"/>
      {/* Column Grid */}
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Column 1*/}
        <div className="flex flex-col gap-16 md:gap-24">
          {col1Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-16 md:gap-24 md:mt-24">
          {col2Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
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
    const src = videoRef.current?.src;
    setisOpen(true)
  

    
  };

  return (
    
    <div className="group relative flex flex-col gap-4">
      {/* Video Container */}
      <div
        className="relative w-full aspect-[16/10] overflow-hidden transition-colors duration-500 cursor-pointer"
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
      <FullscreenVideoModal src={` ${videoRef.current?.src}`} isOpen={isOpen} onClose={() => setisOpen(false)}/>
    </div>

  );
}