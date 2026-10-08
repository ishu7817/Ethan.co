"use client";

import { useState } from "react";
import NumberSeperation from "./NumberSeperation";
import { motion } from "framer-motion";
import ParallaxLayer from "./Paralax";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ethancole0976@gmail.com";

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

  return (
    <section
      id="Contact-section"
      className="w-full relative z-10 text-white px-6 py-4 md:px-12 md:py-5 xl:py-8"
    >
      <NumberSeperation number="04" text="Contact" />
<div className=" flex-col items-center flex xl:flex-row  xl:justify-between"></div>
      <div className="flex flex-col gap-6  items-startnter xl:flex-row xl:justify-between">
      
      <div>
          <ParallaxLayer speed={0.6}>
        <h2 className="my-6 text-[clamp(3rem,12vw,6rem)] font-clash font-black uppercase tracking-wide text-white sm:my-8 xl:my-16 md:text-[clamp(5rem,8vw,8rem)] lg:text-9xl">
        Let's Talk
      </h2>
        </ParallaxLayer>
        </div>

        <div className="flex flex-col xss:flex-row xss:justify-between xl:justify-center xl:flex-col tems-start  gap-3 xl:items-end xl:pb-2">
          <motion.a
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleCopy}
            className={copied
              ? "w-fit cursor-pointer font-array text-xs text-white/80 transition-colors hover:text-white"
              : "w-fit cursor-pointer text-base text-white/80 underline underline-offset-4 transition-colors hover:text-white md:text-lg"}
          >
            {copied ? "Copied!" : email}
          </motion.a>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-start xl:items-center gap-6 md:gap-10"
          >
            <motion.a
              variants={itemVariants}
              href="https://x.com/Ethandesigned"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-base text-zinc-400 transition-colors hover:text-white md:text-lg"
            >
              X.Com
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.behance.net/ethancole0976"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-base text-zinc-400 transition-colors hover:text-white md:text-lg"
            >
              Behance
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}