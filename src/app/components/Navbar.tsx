
import React from 'react'
import NavCta from "./NavCta";
import { TextRoll } from './Textroll';
import { useLenis } from "lenis/react";

const Navbar = () => {
  const lenis = useLenis()
    const navlinks = new Array ("Home", "Projects", "Contact")
    const linkSUp = new Array ("01", "02", "03")

    const handleScrollTo = (targetId: string) => {
         lenis?.scrollTo(targetId, {
          offset: -90,
          duration: 2,
        });
      };
  return (
    <div className=' font-chillax relative z-50 flex justify-center items-center lg:block'>
            <nav className="fixed top-6 w-[95%] xl:w-[60%] h-20   z-50 flex items-center  justify-between  max-w-6xl mx-auto bg-[#343434]/80 backdrop-blur-md rounded-2xl px-3 py-3 border border-white/5">
        <div className="flex items-center gap-2    font-bold text-lg tracking-tight">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M21 4L3 12l18 8-4-8 4-8z" />
          </svg>
          Nafae
        </div>

        <ul
        className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
        {navlinks.map((text, i)=>(
          <li 
          key={i} 
          onClick={() => handleScrollTo(`#${text}-section`)}    

          className="hover:text-white cursor-pointer transition-colors ">
<TextRoll>{text}</TextRoll> <sup className="text-[10px] text-gray-500">0{i+1}</sup>          </li>

))}
</ul>

<NavCta/>
      
      </nav>

    </div>
  )
}

export default Navbar
