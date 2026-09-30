import React from 'react'
import {easeIn, motion } from 'framer-motion'
import Reviews from './components/Reviews'
import ForWhom from './components/ForWhom'

const LandingPage1 = () => {
  return (
    <div>
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: easeIn }}
          className=" mt-[28vh] flex items-center justify-center pointer-events-none z-0 selection:bg-transparent"
        >
          <h1 className="text-[10vw] font-black z-10  text-zinc-900 tracking-tighter leading-none select-none whitespace-nowrap">
            MOTION DESIGNER
          </h1>
        </motion.div>

        <div className="flex flex-col gap-30">
          <motion.div className="flex justify-between mt-5 z-10">
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
