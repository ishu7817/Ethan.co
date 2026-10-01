import React from "react";
import NumberSeperation from "./NumberSeperation";

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
    heading: "Turn Your Product Into a Story",
    tags: [
      "Concept Development",
      "Storyboarding",
      "UI Animation",
      "CTA-Driven Endings",
    ],
    image: "/thumb-1.jpg",
  },
  {
    id: "02",
    title: "Feature Announcements",
    heading: "Make Every Update Feel Like an Event",
    tags: [
      "Motion Graphics",
      "Screen Recording",
      "Micro-Interactions",
      "Product Highlight Reels",
    ],
    image: "/thumb-2.jpg",
  },
  {
    id: "03",
    title: "Long-Form Video Editing",
    heading: "Bring your vision to life through motion",
    tags: [
      "Talking Head Editing",
      "Documentary-Style",
      "B-Roll Curation",
      "Color Grading",
    ],
    image: "/thumb-3.jpg",
  },
];

export default function Services() {
  return (
    <section className=" w-full relative z-10 text-white px-6 py-6 md:px-12 md:py-8">
      <NumberSeperation number="03" text="Services" />
      <div className=" flex relative gap-8 items-center justify-between mb-[10vh]">
        <div className="font-clash ">
          <h2 className="  tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black  leading-none">
            SERVICES
          </h2>
        </div>

        <div className="md:ml-auto max-w-sm">
          <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
            From Idea to Impact — <br /> Leading with what I specialize in
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 pb-8 ">
        {services.map((card, index) => (
          <div
            key={card.id}
            style={{ top: 110 + index * 35 }}
            className={`sticky  w-full bg-zinc-800 border border-t rounded-sm border-x-0 border-white/40 border-t-0  pt-4 pb-6 p-4 shadow-4xl transition-all duration-1000`}
          >
            <div className="flex gap-52 items-between">
              <div className="lg:col-span-5 flex items-start gap-6 h-full min-w-[35%]">
                <div className="w-20 h-24 md:w-24 md:h-28 rounded-sm overflow-hidden bg-neutral-300 shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start h-full gap-4 text-white/90">
                  <span className="text-xl md:text-2xl  font-bold ">
                    {card.id}
                  </span>
                  <h3 className="text-xl w-full whitespace-nowrap h-full flex  items-start md:text-2xl  font-bold tracking-tight ">
                    {card.title}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 items-start text-white/80">
                <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-start w-full ">
                  {card.heading}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-zinc-700/90   text-xs md:text-sm px-3 py-1.5 rounded-md"
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
