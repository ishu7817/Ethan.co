import React from 'react'
import NumberSeperation from './NumberSeperation'
import ParallaxLayer from './Paralax'

const BrandExcellence = () => {
  return (
    <div>
            <section className="relative z-10 w-full  text-white px-6 py-6 md:px-12 md:py-8">
        <NumberSeperation number="01" text="About Ethan" />

        <div className="flex flex-col md:ml-24 text-white/90">
          {/* Main Statement Heading */}
           <ParallaxLayer speed={0.8}>

          <div className="max-w-5xl mb-16 md:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-whit0  lg:text-4xl  font-extrabold trackin uppercase tracking-tight leading-tight">
              FREELANCE VIDEO EDITOR &amp; MOTION DESIGNER HELPING SAAS, AI,
              STARTUPS, AND DIGITAL PRODUCTS TURN IDEAS INTO ENGAGING VIDEOS.
            </h2>
          </div>
                    </ParallaxLayer>

 <ParallaxLayer speed={0.1}>
          <div className=" text-white/80 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 ">

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                30-90s
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400  uppercase tracking-wider">
                TYPICAL VIDEO LENGTH
              </p>
            </div>

            <div>
              <h3 className=" text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                5-14
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400  uppercase tracking-wider">
                AVERAGE TURNAROUND (DAYS)
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                4-5
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400  uppercase tracking-wider">
                REVISIONS INCLUDED
              </p>
            </div>
          </div>
          </ParallaxLayer>

        </div>
       </section>
    </div>
  )
}

export default BrandExcellence
