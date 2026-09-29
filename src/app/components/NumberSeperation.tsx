
import React from 'react'

const NumberSeperation = ({number, text, anythingElse}: {number: number|string; text:string; anythingElse?: string|number}) => {
  return (
    <div>
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-gray-400 border-t border-white/10 pt-4 mb-12 md:mb-16">
          <span>[{number}]</span>
          <span>// {text}</span>
                   {anythingElse && <span>{anythingElse}</span>}

        </div>

    </div>
  )
}

export default NumberSeperation
