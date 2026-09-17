"use client";

import React from "react";
import { motion } from "framer-motion";
import { sound } from "@/lib/audio";

export default function HeroPillarsSection() {
  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pillars = [
    {
      id: "gate",
      title: "FOCUS",
      icon: (
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-blue-400/40 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-cyan-400/80 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-sm shadow-cyan-400" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "quests",
      title: "REAL TASKS",
      icon: (
        <div className="w-10 h-10 flex flex-col justify-center gap-1.5 items-center">
          <div className="flex items-center gap-1.5 w-6">
            <div className="w-1.5 h-1.5 rounded-full border border-slate-600 dark:border-white/60" />
            <div className="h-[1px] flex-1 bg-slate-400 dark:bg-white/60 rounded" />
          </div>
          <div className="flex items-center gap-1.5 w-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <div className="h-[1px] flex-1 bg-[#0A84FF] rounded" />
          </div>
          <div className="flex items-center gap-1.5 w-6">
            <div className="w-1.5 h-1.5 rounded-full border border-slate-600 dark:border-white/60" />
            <div className="h-[1px] flex-1 bg-slate-400 dark:bg-white/60 rounded" />
          </div>
        </div>
      ),
    },
    {
      id: "rewards",
      title: "REAL REWARDS",
      icon: (
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Faceted 3D Crystal Wireframe */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-cyan-500 dark:stroke-cyan-300 fill-none" strokeWidth="1.2">
            <polygon points="6,3 18,3 22,9 12,21 2,9" />
            <line x1="2" y1="9" x2="22" y2="9" />
            <line x1="6" y1="3" x2="12" y2="21" />
            <line x1="18" y1="3" x2="12" y2="21" />
            <line x1="12" y1="3" x2="12" y2="21" />
          </svg>
        </div>
      ),
    },
    {
      id: "ranks",
      title: "TRACK GROWTH",
      icon: (
        <div className="w-10 h-10 flex items-end justify-center gap-1.5 pb-1">
          <div className="w-1.5 h-3 bg-slate-400 dark:bg-white/40 rounded-sm" />
          <div className="w-1.5 h-5 bg-[#0A84FF] rounded-sm" />
          <div className="w-1.5 h-7 bg-cyan-400 dark:bg-cyan-300 rounded-sm shadow-sm shadow-cyan-400" />
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 select-none border-t border-slate-200/80 dark:border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="text-xs font-mono font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400 uppercase">
              MORE THAN AN APP
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.02]">
              A HIGHER YOU
            </h2>
          </motion.div>

          {/* Right: 4 Minimal Dark Glassmorphic Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo(pillar.id)}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#070B16]/90 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/60 flex flex-col items-center justify-center text-center gap-5 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white uppercase transition-colors">
                  {pillar.title}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
