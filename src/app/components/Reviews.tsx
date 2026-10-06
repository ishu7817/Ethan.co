import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className=" font-chillax flex items-center gap-3 z-20 scale-[0.8] sm:scale-[1]">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-3 border-[#121212] bg-zinc-800 text-sm text-white">
          ↗
        </div>
        <div className="text-[10px]  text-neutral-400  uppercase tracking-wider leading-tight">
          <span className="text-white/90 text-xs">REMOTE</span>
          <br />
          Working Worldwide
        </div>
      </div>
    </div>
  );
};

export default Reviews;
