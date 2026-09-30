
import React from 'react'

const NumberSeperation = ({number, text, anythingElse}: {number: number|string; text:string; anythingElse?: string|number}) => {
  return (
    <div>
      <div className=" relative z-10 flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400 border-t border-white/30 b pt-4 mb-12 md:mb-16">
          <span>[{number}]</span>
          <span>// {text}</span>
                   {anythingElse && <span>{anythingElse}</span>}

        </div>

    </div>
  )
}

export default NumberSeperation
