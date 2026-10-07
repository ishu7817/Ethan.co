import React from "react";
import NumberSeperation from "./NumberSeperation";
import ParallaxLayer from "./Paralax";

interface ServiceCard {
  id: string;
  title: string;
  heading: string;
  tags: string[];
  image: string;
}

const services: ServiceCard[] = [
  {
    id: "01",
    title: "SaaS Explainer Videos",
    heading: "Make a complex product clear, compelling, and easy to understand",
    tags: ["Product Storytelling", "Feature Walkthroughs", "Visual Clarity"],
    image: "/thumb-1.webp",
  },
  {
    id: "02",
    title: "Launch Videos",
    heading: "Build attention around a product or feature launch",
    tags: ["Product Launches", "Feature Launches", "Launch Campaigns"],
    image: "/thumb-2.webp",
  },
  {
    id: "03",
    title: "Product Demo Videos",
    heading: "Show how the product works and why its key features matter",
    tags: ["Product Walkthroughs", "Feature Showcases", "UI Animation"],
    image: "/thumb-3.webp",
  },
  {
    id: "04",
    title: "3D Product Animation",
    heading: "Bring products to life with polished 3D visuals for launches and marketing",
    tags: ["3D Visuals", "Product Launches", "Marketing"],
    image: "/thumb-4.webp",
  },
];

export default function Services() {
  return (
    <section className=" w-full relative z-10 text-white px-6 py-4 md:px-12 md:py-5 xl:py-8">
      <NumberSeperation number="03" text="Services" />
         <ParallaxLayer speed={0.6}>
      <div className="relative mb-6 flex flex-col items-start gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between xl:mb-[10vh] xl:gap-8">

        <div className="font-clash">
          <h2 className="text-4xl font-black leading-none tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
            SERVICES
          </h2>
        </div>

        <div className="max-w-sm sm:ml-auto sm:text-right">
          <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
            SaaS · AI · Startups · FinTech · Apps · Creators · Digital Products · E-commerce
          </p>
        </div>
      </div>
                </ParallaxLayer>


      <div className="relative flex flex-col gap-4 pb-6 sm:gap-5 xl:gap-8 xl:pb-8">
        {services.map((card, index) => (
          <div
            key={card.id}
            style={{ top: 110 + index * 35 }}
            className="relative w-full rounded-sm border border-x-0 border-t-0 border-white/40 bg-zinc-800 p-3 pt-4 pb-6 shadow-4xl transition-all duration-1000 sm:p-4 sm:pt-5 sm:pb-6 sticky"
          >
            <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex min-w-0 items-start gap-4 sm:gap-6 lg:w-[40%] lg:shrink-0">
                <div className="h-20 w-16 shrink-0 overflow-hidden rounded-sm bg-neutral-300 sm:h-24 sm:w-20 md:h-28 md:w-24">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex min-w-0 items-start gap-3 text-white/90 sm:gap-4">
                  <span className=" hidden xss:block shrink-0 text-lg font-bold sm:text-xl md:text-2xl">
                    {card.id}
                  </span>
                  <h3 className="min-w-0 break-words text-lg font-bold tracking-tight xss:text-2xl md:text-2xl">
                    {card.title}
                  </h3>
                </div>
              </div>

              <div className="flex min-w-0 flex-col items-start gap-4 text-white/80 sm:gap-6 lg:flex-1">
                <h4 className="w-full break-words text-lg font-medium tracking-tight sm:text-2xl md:text-3xl">
                  {card.heading}
                </h4>

                <div className="flex w-full flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-md  bg-zinc-700/90 px-3 py-1.5 text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
