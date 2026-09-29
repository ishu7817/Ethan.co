"use client";

import React, { useRef } from "react";

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
    <section className="w-full text-white/90 mt-10 lg:mt-20 px-5">

      {/* Hero Video */}

<div className="  w-screen h-screen mb-10 lg:mb-20  flex items-center justify-center"> 
          <video
          // ref={videoRef}
          src= "/about page final.mp4"
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
</div>



      {/* Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Column 1*/}
        <div className="flex flex-col gap-16 md:gap-24">
          {col1Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-16 md:gap-24 md:mt-20">
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

  // 1. Play when hover enters
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  // 2. Pause & rewind to initial frame when hover leaves
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // 3. Launch native browser full-screen on click
  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure it's playing when going fullscreen
    video.play().catch(() => {});

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      /* Safari / iOS support */
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      /* IE11 support */
      (video as any).msRequestFullscreen();
    }
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
    </div>
  );
}