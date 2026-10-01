"use client";

import React, { useState } from "react";
import NumberSeperation from "./NumberSeperation";

export default function Contact() {
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
    <section id="Contact-section" className="w-full relative z-10 text-white px-6 py-6 md:px-12 md:py-8">
            <NumberSeperation number="04" text="Contact" />

      {/* MAIN TITLE */}
      <h2 className="text-6xl font-clash sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wide uppercase my-12 md:my-16 text-white">
        Let's Talk
      </h2>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: PITCH & PROFILE */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <p className="text-lg md:text-xl text-white/80 max-w-md font-normal leading-relaxed">
            Have a project in mind? Reach out, and we&apos;ll discuss the best way to move forward.
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-widest text-white/60 uppercase">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-widest text-white/60 uppercase">
                MESSAGE
              </label>
              <textarea
                rows={3}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-base md:text-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
            </div>

            {/* Pill Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-colors text-sm cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Direct Email Link */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
            <span className="text-sm font-semibold text-white ">Contact</span>
            <a 
              href="mailto:contact@nafae.dev"
              className="text-white/80  hover:text-white underline underline-offset-4 transition-colors w-fit text-base md:text-lg"
            >
              hello@nafae.design
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}