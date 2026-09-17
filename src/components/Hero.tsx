"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { sound } from "@/lib/audio";

interface HeroProps {
  onOpenDownload: () => void;
}

export default function Hero({ onOpenDownload }: HeroProps) {
  const scrollToVision = () => {
    sound.playClick();
    const el = document.getElementById("features") || document.getElementById("ai");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Column: Exact Mockup Typography & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 z-10"
          >
            {/* Top Subhead: 2 Lines */}
            <div className="space-y-1 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
              <div>SMALL STEPS.</div>
              <div>A STRONGER TOMORROW.</div>
            </div>

            {/* Exact Serif Headline: Discipline Rises. */}
            <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-normal tracking-tight text-slate-900 dark:text-white leading-[0.92]">
              Discipline <br />
              Rises.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-sans text-slate-600 dark:text-[#94A3B8] font-normal">
              A focused you. A better tomorrow.
            </p>

            {/* Two Action Buttons Side-by-Side */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              {/* Solid White Pill Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  sound.playClick();
                  onOpenDownload();
                }}
                className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100 font-sans font-semibold text-xs tracking-tight transition-all duration-300 inline-flex items-center gap-2.5 shadow-xl cursor-pointer"
              >
                <span>Download App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              {/* Watch the vision button */}
              <button
                onClick={scrollToVision}
                className="inline-flex items-center gap-3 text-slate-900 dark:text-white group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-white/40 transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5 opacity-80" />
                </div>
                <div className="text-left font-sans text-xs leading-tight">
                  <div className="font-medium text-slate-800 dark:text-slate-200">Watch</div>
                  <div className="text-slate-500 dark:text-slate-400">the vision</div>
                </div>
              </button>
            </div>

            {/* Bottom 01 / 03 Indicator */}
            <div className="pt-8 flex items-center gap-3 font-mono text-xs text-slate-400 dark:text-slate-500">
              <span className="font-bold text-slate-900 dark:text-white">01</span>
              <div className="w-20 h-[1.5px] bg-slate-300 dark:bg-white/30 rounded-full relative overflow-hidden">
                <div className="w-8 h-full bg-slate-900 dark:bg-white" />
              </div>
              <span>/ 03</span>
            </div>
          </motion.div>

          {/* Center-Right: Archway with Sitting Person in Hoodie Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-slate-200/80 dark:border-white/[0.08] group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src="/visuals/hero_hoodie_archway.jpg"
                  alt="ARISE Person in Hoodie in Sunrise Archway"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>

            {/* Far Right Vertical Indicators matching mockup */}
            <div className="hidden xl:flex absolute -right-16 top-0 bottom-0 flex-col justify-between py-6 pointer-events-none select-none text-slate-400 dark:text-slate-500">
              <div className="space-y-4 border-l border-slate-300 dark:border-white/20 pl-3">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase flex flex-col gap-2.5">
                  <span>FOCUS</span>
                  <span>GROW</span>
                  <span>EARN</span>
                </div>
              </div>

              <div className="font-mono text-[9px] tracking-[0.25em] uppercase space-y-1 text-left pl-3 border-l border-slate-300 dark:border-white/20">
                <div>SAME</div>
                <div>HUMAN.</div>
                <div>HIGHER</div>
                <div className="text-slate-900 dark:text-white font-bold">POTENTIAL.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}