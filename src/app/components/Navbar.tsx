
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
    <div className=' group font-chillax relative z-50 flex justify-center items-center lg:block'>
            <nav className="fixed left-1/2 top-4 z-50 flex h-20 w-[calc(100%_-_2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/5 bg-[#343434]/80 px-3 py-3 backdrop-blur-md sm:top-6 sm:w-[95%] xl:left-auto xl:mx-auto xl:w-[60%] xl:translate-x-0">
        <div className=" group-hover:hidden xs:group-hover:flex flex shrink-0 items-center gap-2 font-bold text-2xl xs:text-lg md:text-2xl tracking-tight">
          Ethan
        </div>

        <ul
        className="hidden xs:flex items-center justify-between gap-6 sm:gap-14 text-sm font-medium text-gray-300  ">
        {navlinks.map((text, i)=>(
          <li 
          key={i} 
          onClick={() => handleScrollTo(`#${text}-section`)}    

          className="hover:text-white cursor-pointer transition-colors text-[14px] md:text-[16px] ">
<TextRoll>{text}</TextRoll> <sup className="text-[10px]   text-gray-500">0{i+1}</sup>          </li>

))}
</ul>
<div className=''>
  
<NavCta/>
</div>
      
      </nav>

    </div>
  )
}

export default Navbar
