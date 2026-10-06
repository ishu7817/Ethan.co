import React from 'react'
import { motion } from 'framer-motion'
import { Variants } from 'framer-motion'

const LandingPage2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <div>
      <div className="absolute -left-32 top-1/2 -translate-y-1/4 w-[400px] h-[100px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col gap-8 font-chillax sm:gap-10 md:flex-row md:items-start md:justify-between"
      >
            <motion.div variants={itemVariants} className="w-full max-w-sm tracking-wide">
              <p className="text-sm md:text-base text-gray-300 font-medium leading-snug">
                I create product-focused videos that help businesses explain,
                launch, and showcase their products through strong editing,
                motion design, and visual storytelling.
              </p>
            </motion.div>

            <div className="flex w-full justify-start text-sm font-medium tracking-wider text-white md:w-auto md:justify-end">
              <motion.ul variants={containerVariants} className="flex flex-col gap-2">
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">01)</span> Video Editing
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">02)</span> Launch Videos
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">03)</span> Product Demos
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">04)</span> Motion Graphics
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
    </div>
  )
}

export default LandingPage2
