
import React from 'react'

const NumberSeperation = ({number, text, anythingElse}: {number: number|string; text:string; anythingElse?: string|number}) => {
  return (
    <div>
      <div className=" relative  z-10 flex justify-between items-center text-xs  tracking-widest  border-t border-white/10 b pt-4 mb-12 md:mb-16">
          <span className='font-array text-neutral-200/80'>[{number}]</span>
          <span className='text-neutral-400/80'>// {text}</span>
                   {anythingElse && <span>{anythingElse}</span>}

        </div>

    </div>
  )
}

export default NumberSeperation
