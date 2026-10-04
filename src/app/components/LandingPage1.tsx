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
         <motion.div className='relative min-w-screen max-h-fit '>
          <h1 className=" relative text-[10vw]  uppercase text-center font-extrabold z-10 tracking-tight font-clash text-[#09090B]/90  leading-none select-none whitespace-nowrap">
 <motion.div
        animate={{
          y: ["40%"],
        }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
        viewport={{once:true}}
        className="  opacity-20 absolute min-w-screen h-[20vh] pointer-events-none"
        style={{
          background: `linear-gradient(to top, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 100%)`,
          willChange: "transform",
        }}
      />
            MOTION DESIGNER
          </h1>
        </motion.div>



        </motion.div>

        <div className="flex flex-col gap-30 ">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-between mt-  "
          >
            <Reviews />

            <div>
              <ForWhom />
            </div>
          </motion.div>

          
        </div>
    </div>
  )
}

export default LandingPage1