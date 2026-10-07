"use client";

import React, { useState } from "react";
import NumberSeperation from "./NumberSeperation";
import { motion } from "framer-motion";
import ParallaxLayer from "./Paralax";

export default function Contact() {
 
  const [copied, setCopied] = useState(false);
  const email = "hello@nafae.co";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      id="Contact-section"
      className="w-full relative z-10 text-white px-6 py-6 md:px-12 md:py-8"
    >
      <NumberSeperation number="04" text="Contact" />

 <ParallaxLayer speed={0.6}>

      <h2 className="my-10 text-[clamp(3rem,12vw,6rem)] font-clash font-black uppercase tracking-wide text-white sm:my-12 md:my-16 md:text-[clamp(5rem,8vw,8rem)] lg:text-9xl">
        Let's Talk
      </h2>
          </ParallaxLayer>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <p className="text-lg md:text-xl text-white/80 max-w-md font-normal leading-relaxed">
            Get in touch to discuss your video editing or motion design project.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-widest text-white/60 uppercase">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-widest text-white/60 uppercase">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-widest text-white/60 uppercase">
                MESSAGE
              </label>
              <textarea
                rows={3}
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-colors text-sm cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="pt-6 border-t border-white/10 flex flex-col w-full justify-baseline gap-2">
            <span className="text-sm font-semibold text-white ">Contact</span>

            <motion.div className="flex h-fit w-full flex-col items-start gap-4 xss:flex-row sm:items-center xss:justify-between">
            <motion.a
                 initial={{ y:"100%", opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          viewport={{ once: true }}
          transition= {{ duration: 0.8, ease: [0.16, 1, 0.3, 1]}}

                  onClick={handleCopy}
                  className={`text-white/80 cursor-pointer hover:text-white ${copied ? "font-array text-xs" : "underline"} duration-150 underline-offset-4 transition-colors w-fit text-base md:text-lg`}
                >
                  {copied ? "Copied!" : "ethancole0976@gmail.com"}
                </motion.a>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex w-full flex-wrap items-baseline justify-start gap-x-6 gap-y-2 pt-1 xss:w-auto xss:justify-end md:gap-10"
              >
                
                <motion.a
                  variants={itemVariants}
                  href="https://x.com/Ethandesigned"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors w-fit text-base md:text-lg"
                >
                  X.Com
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="https://www.behance.net/ethancole0976"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white  transition-colors w-fit text-base md:text-lg"
                >
                  Behance
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
