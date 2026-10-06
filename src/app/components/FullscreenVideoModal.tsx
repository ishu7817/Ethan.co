"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { 
  X,        // Close
  VolumeX,  // Muted (sound off)
  Volume2,  // Unmuted (sound on)
  Pause,    // Pause
  Play      // Unpause / Play
} from "lucide-react";

interface FullscreenVideoModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenVideoModal({
  src,
  isOpen,
  onClose,
}: FullscreenVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => lenis?.start();
  }, [isOpen, lenis]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);


  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100 || 0);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };
useEffect(() => {

  if (isOpen && modalRef.current) {
    if (modalRef.current.requestFullscreen) {
      modalRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    }
  }

  return () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };
}, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        ref={modalRef}
          initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className=" group fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-xl "
        >
          <div className="absolute right-3 top-3 z-10 flex items-center gap-4 sm:right-6 sm:top-6">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-sm bg-white/10 hover:bg-white/20 mix-blend-difference border border-white/10 text-xs font-mono text-white transition-colors cursor-pointer"
            >
               ✕
            </button>
          </div>

          
            <video
              ref={videoRef}
              src={src}
              autoPlay
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer"
            />

            <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl border border-white/10 bg-[#18181b]/80 px-3 py-3 backdrop-blur-md transition-opacity duration-300 sm:inset-x-6 sm:bottom-6 sm:gap-4 sm:px-4 sm:opacity-0 sm:group-hover:opacity-100 md:inset-x-8 md:bottom-8">
              
              <button
                onClick={togglePlay}
                className="text-white hover:text-cyan-400 text-xs font-mono tracking-wider transition-colors shrink-0"
              >
                {isPlaying ? < Pause className="w-5 h-5"/> : <Play className="w-5 h-5"/>}
              </button>

              <div className="relative flex-1 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleScrub}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white hover:accent-cyan-400"
                />
              </div>

              
              <button
                onClick={toggleMute}
                className="text-white hover:text-cyan-400 text-xs font-mono tracking-wider transition-colors shrink-0"
              >
                {isMuted ? < VolumeX className="w-5 h-5"/> : < Volume2 className="w-5 h-5"/>}
              </button>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
