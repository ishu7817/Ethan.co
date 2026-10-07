
import React from 'react'
import { motion } from 'framer-motion';
const NumberSeperation = ({number, text, anythingElse}: {number: number|string; text:string; anythingElse?: string|number}) => {
  return (
    <div>
      <motion.div className=" relative  overflow-hidden  z-10 flex justify-between items-center text-xs  tracking-widest  border-t border-white/10 b pt-4 mb-6 sm:mb-8 xl:mb-16">
          <motion.span
            initial={{ x:-100, opacity:0 }}
          whileInView={{ x:'0%', opacity:1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
       
          className='font-array text-neutral-200/80 w-1/2 '>[{number}]</motion.span>

          <motion.span
           initial={{ x:100, opacity:0 }}
          whileInView={{ x:'0%', opacity:1 }}
           viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className='text-neutral-400/80 w-1/2 text-end'>// {text}</motion.span>


    </motion.div>
        </div>
  )
}

export default NumberSeperation
