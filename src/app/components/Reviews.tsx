import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className=" font-chillax flex items-center gap-3 z-20 scale-[0.8] sm:scale-[1]">
        <div className="flex -space-x-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User Avatar 1"
            className="w-8 h-8 rounded-full border  border-3 border-[#121212] object-cover z-30"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
            alt="User Avatar 2"
            className="w-8 h-8 rounded-full border border-3  border-[#121212] object-cover z-20"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
            alt="User Avatar 3"
            className="w-8 h-8 rounded-full border  border-3  border-[#121212] object-cover z-10"
          />
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
            alt="User Avatar 4"
            className="w-8 h-8 rounded-full border border-3 border-[#121212] object-cover z-0"
          />
        </div>
        <div className="text-[10px]  text-neutral-400  uppercase tracking-wider leading-tight">
          <span className="text-white/90 text-xs">4.9/5</span>
          <br />
          Based on 30+ Reviews
        </div>
      </div>
    </div>
  );
};

export default Reviews;
