import React from 'react'

const BrandExcellence = () => {
  return (
    <div>
            <section className="relative z-10 w-full px-6 py-12 md:px-12 md:py-20 text-white">

        <div className="flex flex-col md:ml-34 text-white/90">
          {/* Main Statement Heading */}
          <div className="max-w-5xl mb-16 md:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-whit0  lg:text-4xl font-black uppercase tracking-tight leading-tight">
              I DESIGN AND ANIMATE EXPLAINER VIDEOS, FEATURE ANNOUNCEMENTS, AND
              PRODUCT MOTION THAT TURN COMPLEX IDEAS INTO VISUALS PEOPLE
              ACTUALLY UNDERSTAND.
            </h2>
          </div>

          <div className=" text-white/80 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pb-20 md:pb-32">
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                30-90s
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400 font-mono uppercase tracking-wider">
                TYPICAL VIDEO LENGTH
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                5-14
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400 font-mono uppercase tracking-wider">
                AVERAGE TURNAROUND (DAYS)
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                4-5
              </h3>
              <p className="text-[11px] md:text-xs text-gray-400 font-mono uppercase tracking-wider">
                REVISIONS INCLUDED
              </p>
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}

export default BrandExcellence
