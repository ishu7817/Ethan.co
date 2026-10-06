
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
            <nav className="fixed left-1/2 top-4 z-50 flex h-20 w-[calc(100%_-_2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/5 bg-[#343434]/80 px-3 py-3 backdrop-blur-md sm:top-6 sm:w-[95%] xl:left-auto xl:mx-auto xl:w-[60%] xl:translate-x-0">
        <div className="flex shrink-0 items-center gap-2 font-bold text-lg tracking-tight">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M21 4L3 12l18 8-4-8 4-8z" />
          </svg>
          Ethan
        </div>

        <ul
        className="hidden items-center gap-4 text-sm font-medium text-gray-300 md:flex lg:gap-10">
        {navlinks.map((text, i)=>(
          <li 
          key={i} 
          onClick={() => handleScrollTo(`#${text}-section`)}    

          className="hover:text-white cursor-pointer transition-colors text-[14px] md:text-[16px] ">
<TextRoll>{text}</TextRoll> <sup className="text-[10px]   text-gray-500">0{i+1}</sup>          </li>

))}
</ul>

<NavCta/>
      
      </nav>

    </div>
  )
}

export default Navbar
