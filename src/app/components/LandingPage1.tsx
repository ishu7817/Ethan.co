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
          className="  mt-[22vh] md:mt-[18vh] flex items-center justify-center   pointer-events-none z-0 selection:bg-transparent"
        >
         <motion.div className="relative min-w-screen min-w-0 max-h-fit">
          <h1 className="relative z-10 sm:whitespace-nowrap text-center font-clash text-[clamp(1.5rem,10vw,10.5vw)] font-extrabold uppercase leading-none tracking-tight text-[#09090B]/90 select-none">
 <motion.div
        // animate={{
        //   y: ["40%"],
        // }}
        // transition={{
        //   duration: 2,
        //   ease: "linear",
        // }}
        // viewport={{once:true}}
        className=" inset-0 bottom-0 pointer-events-none absolute  h-[100%] opacity-20"
        style={{
          background: `linear-gradient(to , transparent 5%, rgba(255,255,255,0.22) 50%, transparent 100%)`,
          willChange: "transform",
        }}
      />
            Motion Designer
          </h1>
        </motion.div>



        </motion.div>

        <div className="flex flex-col justify-center gap-30 ">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-0 flex flex-col-reverse items-start gap-5 xs:flex-row xss:items-center xs:justify-between"
          >
            
                        <div className="w-full xss:w-auto">
            <Reviews />
            </div>

            <div className="w-full xss:w-auto">
              <ForWhom />
            </div>
          </motion.div>

          
        </div>
    </div>
  )
}

export default LandingPage1