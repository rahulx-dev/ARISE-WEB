"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

interface NexusHeroProps {
  onOpenContact?: () => void;
}

export default function NexusHero({ onOpenContact }: NexusHeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[95vh] w-full flex flex-col justify-center bg-ink-950 pt-32 pb-20 overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-signal/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-mono text-mist-300 mb-8 sm:mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span>Available for projects in 2025 →</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.8rem] font-bold tracking-tight text-mist-100 leading-[0.92] uppercase">
            <div>WE BUILD DIGITAL</div>
            <div className="text-mist-500">EXPERIENCES THAT</div>
            <div className="text-signal">CAN&apos;T BE IGNORED.</div>
          </h1>
        </motion.div>

        {/* Subhead & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl space-y-8"
        >
          <p className="font-body text-mist-500 text-lg sm:text-xl leading-relaxed">
            We are an award-winning studio pushing the boundaries of strategy, design, and engineering to build digital products people love.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-signal text-ink-950 font-display font-semibold text-base tracking-tight hover:bg-[#d4ff00] hover:shadow-[0_0_30px_rgba(232,255,71,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollTo("work")}
              className="px-8 py-4 rounded-full border border-white/10 hover:border-white/30 text-mist-300 hover:text-white font-body text-base transition-colors duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Rotating Studio Stamp Badge in Bottom Right */}
      <div className="absolute right-8 bottom-12 hidden lg:block pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-36 h-36 relative flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="font-mono text-[9px] fill-mist-500 tracking-[0.2em] uppercase">
              <textPath href="#circlePath">
                PREMIUM · STUDIO · 2025 · PREMIUM · STUDIO · 2025 ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-signal text-sm">
            NEXUS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
