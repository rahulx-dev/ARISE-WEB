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
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden select-none">
      {/* Subtle deep cosmic ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#0A84FF]/[0.05] rounded-full blur-[220px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Column: Editorial Typography & Download App CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 z-10"
          >
            {/* Top Subhead */}
            <div className="text-xs font-mono font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400 uppercase">
              DISCIPLINE TODAY.
            </div>

            {/* Huge Luxury Display Serif Heading */}
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tight text-slate-900 dark:text-white leading-[0.92]">
              A STRONGER <br />
              YOU{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-cyan-300 dark:from-[#c4b5fd] dark:via-[#93c5fd] dark:to-[#67e8f9]">
                TOMORROW
              </span>
            </h1>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  sound.playClick();
                  onOpenDownload();
                }}
                className="px-7 py-3 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100/80 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.1] text-slate-900 dark:text-white font-sans font-medium text-xs tracking-tight transition-all duration-300 inline-flex items-center gap-2.5 shadow-xl shadow-blue-500/10 cursor-pointer"
              >
                <span>Download App</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </motion.button>
            </div>
          </motion.div>

          {/* Center-Right: Iconic Celestial Rift Gate Hunter Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/15 dark:shadow-black/90 border border-slate-200/80 dark:border-white/[0.08] group">
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                <img
                  src="/visuals/hero_celestial_rift.jpg"
                  alt="ARISE Celestial Rift Gate & Lone Hunter"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Soft Bottom/Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
              </div>
            </div>

            {/* Mockup Far-Right Vertical Telemetry */}
            <div className="hidden xl:flex absolute -right-16 top-0 bottom-0 flex-col justify-between py-6 pointer-events-none select-none text-slate-400 dark:text-slate-500">
              <div className="space-y-4">
                <div className="w-[1px] h-12 bg-slate-300 dark:bg-white/20 mx-auto" />
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase flex flex-col gap-2.5 text-center">
                  <span>FOCUS</span>
                  <span>GROW</span>
                  <span>EARN</span>
                </div>
              </div>

              <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-right rotate-90 origin-right translate-y-12">
                A BETTER YOU AWAITS
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Left Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8">
        <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-slate-400 dark:text-slate-500 uppercase">
          <div className="w-[1px] h-6 bg-[#0A84FF] animate-pulse" />
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
}