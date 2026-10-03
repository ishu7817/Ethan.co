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
        className="flex justify-between z-10  font-chillax  "
      >
            <motion.div variants={itemVariants} className="max-w-sm tracking-wide  ">
              <p className="text-sm md:text-base text-gray-300 font-medium leading-snug">
                I create motion systems that simplify complex products, elevate
                digital brands, and help companies launch with clarity.
              </p>
            </motion.div>

            <div className="flex justify-end text-sm font-medium text-white tracking-wider">
              <motion.ul variants={containerVariants} className="flex flex-col gap-2">
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">01)</span> Product
                  Explainers
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">02)</span> UI
                  Animation
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">03)</span> Launch
                  Campaigns
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">04)</span> Brand
                  Motion
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
    </div>
  )
}

export default LandingPage2