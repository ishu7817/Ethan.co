import React from 'react'
import { motion } from 'framer-motion'
const Reel = () => {
const reelItems = [
  "MOTION DESIGN",
  "MOTION GRAPHICS",
  "LONG-FORM EDITING",
  "UI ANIMATION",
  "AFTER EFFECTS",
  "KINETIC TYPOGRAPHY",
  "PRODUCT LAUNCH",
  "FEATURE ANNOUNCEMENTS",
  "SAAS MOTION DESIGN",
];
  return (
    <div>
      <motion.div
      className='scrollbar-none relative my-20 w-full h-5 bg-black/30 backdrop-blur-md text-zinc-200 py-2 items-center flex overflow-x-hidden'>
 <div className="  flex  w-full items-center  gap-[8%] animate-marquee text-center ">
{reelItems.map((text, i) => (
                  <h1
                    key={i}
                    className=" flex items-center text-center select-none  w-full font-['Array']  font-bold text-nowrap  tracking-wide   "
                  >
                    {text}
                  </h1>
))}
                </div>
      </motion.div>
    </div>
  )
}

export default Reel
