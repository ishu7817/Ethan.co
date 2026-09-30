import React from 'react'
import { motion } from 'framer-motion'
const LandingPage2 = () => {
  return (
    <div>
      <motion.div className="flex justify-between z-10">
            <div className="max-w-sm ">
              <p className="text-sm md:text-base text-gray-300 font-medium leading-snug">
                I create motion systems that simplify complex products, elevate
                digital brands, and help companies launch with clarity.
              </p>
            </div>

            <div className="flex justify-end text-sm font-medium text-white">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">01)</span> Product
                  Explainers
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">02)</span> UI
                  Animation
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">03)</span> Launch
                  Campaigns
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">04)</span> Brand
                  Motion
                </li>
              </ul>
            </div>
          </motion.div>
    </div>
  )
}

export default LandingPage2
