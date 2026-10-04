"use client";
import { div } from "framer-motion/client";
import { useEffect, useRef } from "react";

const BAND = 23;          // strip height in px (7px texture + 1px dark gap)
const TILE_SRC = "/f0.png";

export const MicroMesh = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = new Image();
    let raf = 0;
    let bands: any[] = [];
    let pattern: CanvasPattern;
    let w = 0, h = 0;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pattern = ctx.createPattern(img, "repeat")!;
      const now = performance.now();
      bands = Array.from({ length: Math.ceil(h / BAND) }, () => ({
        off: rand(0, 512),
        x: rand(0, 512),
        v: 0,
        moving: false,
        until: now + rand(0, 200),   // random start so strips never sync
      }));
    };

    let last = performance.now();
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      

      bands.forEach((b, i) => {
        if (!reduce && now >= b.until) {
          b.moving = !b.moving;
          if (b.moving) {
  b.v = rand(300, 400) * (Math.random() < 0.85 ? 1 : -1);    
  b.until = now + rand(100, 600);                         
} else {
  b.v = 0;
  b.until = now + rand(100, 900);                          
}
        }
        b.off = (b.off + b.v * dt) % 512;

pattern.setTransform(new DOMMatrix().translate(b.x, b.off));
ctx.fillStyle = pattern;
ctx.fillRect(0, i * BAND, w, BAND);

        // the separation line under each strip
        ctx.fillStyle = "rgba(0,0,0,0.01)";
        ctx.fillRect(0, i * BAND + BAND -1, w, 1);
      });
    

      if (!reduce) raf = requestAnimationFrame(frame);
    };

    img.onload = () => {
      setup();
      raf = requestAnimationFrame(frame);
    };
    img.src = TILE_SRC;

    const onResize = () => img.complete && setup();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div>

    <canvas
      ref={ref}
      aria-hidden
      className=" opacity-80 fixed inset-0 z-0 pointer-events-none w-full h-full"
      />
      
     <div 
        className="fixed opacity-80 brightness-90 -top-[50%] -left-[50%] w-[200%] h-[200%] "
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, transparent, transparent 0px, rgba(255,255,255,0.2) 1px, rgba(255,255,255,0.2) 2px),
            repeating-linear-gradient(to bottom, transparent, transparent 0px, rgba(255,255,255,0.2) 0.1px, rgba(255,255,255,0.15) 2px)
          `        
        }}
      />
    
      </div>
  );
};











