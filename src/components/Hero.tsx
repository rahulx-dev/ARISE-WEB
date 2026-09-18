"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sound } from "@/lib/audio";

interface HeroProps {
  onOpenDownload: () => void;
}

export default function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden select-none bg-[#050607]">
      {/* Seamless Panoramic Archway Background on the Right */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] z-0 pointer-events-none overflow-hidden">
        <img
          src="/visuals/hero_hoodie_archway.jpg"
          alt="ARISE Archway Sunrise"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Soft Dark Vignette & Fade to #050607 on the Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct Overlay Typography & Download Pill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Subhead */}
            <div className="space-y-1 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-[#A6A9AE] uppercase">
              <div>SMALL STEPS.</div>
              <div>A STRONGER TOMORROW.</div>
            </div>

            {/* Exact Serif Headline: Discipline Rises. */}
            <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-normal tracking-tight text-[#F5F5F2] leading-[0.92]">
              Discipline <br />
              Rises.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-sans text-[#A6A9AE] font-normal max-w-md">
              A focused you. A better tomorrow.
            </p>

            {/* Single Solid White Download Pill Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  sound.playClick();
                  onOpenDownload();
                }}
                className="px-7 py-3.5 rounded-full bg-[#F5F5F2] text-[#050607] font-sans font-semibold text-xs tracking-tight hover:bg-white transition-all duration-300 inline-flex items-center gap-2.5 shadow-xl cursor-pointer"
              >
                <span>Download App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Bottom 01 / 03 Indicator */}
            <div className="pt-8 flex items-center gap-3 font-mono text-xs text-[#6F747B]">
              <span className="font-bold text-[#F5F5F2]">01</span>
              <div className="w-20 h-[1.5px] bg-white/15 rounded-full relative overflow-hidden">
                <div className="w-8 h-full bg-[#9AAEFF]" />
              </div>
              <span className="text-[#6F747B]">/ 03</span>
            </div>
          </motion.div>

          {/* Right Area Spacing & Far-Right Telemetry */}
          <div className="hidden xl:block lg:col-span-5 relative h-full pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col justify-between py-6 h-72 select-none text-[#A6A9AE]">
              <div className="space-y-4 border-l border-white/10 pl-3">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase flex flex-col gap-2.5">
                  <span>FOCUS</span>
                  <span>GROW</span>
                  <span>EARN</span>
                </div>
              </div>

              <div className="font-mono text-[9px] tracking-[0.25em] uppercase space-y-1 text-left pl-3 border-l border-white/10">
                <div>SAME</div>
                <div>HUMAN.</div>
                <div>HIGHER</div>
                <div className="text-[#F5F5F2] font-bold">POTENTIAL.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}