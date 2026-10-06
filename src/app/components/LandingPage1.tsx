import React from 'react'
import { motion } from 'framer-motion'
import Reviews from './Reviews'
import ForWhom from './ForWhom'

const LandingPage1 = () => {
  return (
    <div className="relative" id='Home-section'>

        <motion.div
          initial={{ y: 100, opacity: 0, filter: 'blur(12px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className=" mt-[18vh] flex items-center justify-center   pointer-events-none z-0 selection:bg-transparent"
        >
         <motion.div className="relative min-w-screen min-w-0 max-h-fit">
          <h1 className="relative z-10 whitespace-nowrap text-center font-clash text-[clamp(1.5rem,9.5vw,10vw)] font-extrabold uppercase leading-none tracking-tight text-[#09090B]/90 select-none">
 <motion.div
        animate={{
          y: ["40%"],
        }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
        viewport={{once:true}}
        className="pointer-events-none absolute inset-x-0 h-[20vh] opacity-20"
        style={{
          background: `linear-gradient(to top, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 100%)`,
          willChange: "transform",
        }}
      />
            Motion Designer
          </h1>
        </motion.div>



        </motion.div>

        <div className="flex flex-col gap-30 ">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-0 flex flex-col items-start gap-5 sm:flex-row sm:items-start sm:justify-between"
          >
            <Reviews />

            <div className="w-full sm:w-auto">
              <ForWhom />
            </div>
          </motion.div>

          
        </div>
    </div>
  )
}

export default LandingPage1
