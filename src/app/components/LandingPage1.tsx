import React from 'react'
import { motion } from 'framer-motion'
import Reviews from './Reviews'
import ForWhom from './ForWhom'

const LandingPage1 = () => {
  return (
    <div id='Home-section'>
        <motion.div
          initial={{ y: 100, opacity: 0, filter: 'blur(12px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className=" mt-[18vh] flex items-center justify-center max-w-[98  pointer-events-none z-0 selection:bg-transparent"
        >
          <h1 className="text-[10vw] text-center font-extrabold z-10 tracking-tight font-clash text-zinc-900 t leading-none select-none whitespace-nowrap">
            MOTION DESIGNER
          </h1>
        </motion.div>

        <div className="flex flex-col gap-30">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-between mt-5 z-10"
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