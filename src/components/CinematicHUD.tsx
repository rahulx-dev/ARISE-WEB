"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function CinematicHUD() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("01 // SYSTEM");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const sections = [
        { id: "system", label: "01 // SYSTEM" },
        { id: "ai", label: "02 // AI MATRIX" },
        { id: "gate", label: "03 // GATE LOCK" },
        { id: "ranks", label: "04 // HUNTER RPG" },
        { id: "rewards", label: "05 // REWARDS" },
        { id: "how-to-use", label: "06 // PROTOCOL" },
        { id: "guilds", label: "07 // GUILD RAID" },
        { id: "faq", label: "08 // INTEL & FAQ" },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Floating Cybernetic Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.05]">
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          className="h-full bg-gradient-to-r from-arise-blue via-arise-cyan to-arise-emerald shadow-[0_0_12px_rgba(0,210,238,0.8)]"
        />
      </div>

      {/* Right Fixed Sci-Fi Telemetry Dock (Desktop) */}
      <div className="fixed right-6 bottom-8 z-40 hidden lg:flex flex-col items-end gap-3 select-none pointer-events-auto">
        {/* Section Telemetry HUD Pill */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#030712]/80 border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl text-[10px] font-mono text-slate-700 dark:text-slate-300 shadow-xl shadow-slate-200/50 dark:shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] dark:bg-arise-cyan animate-ping" />
          <span className="text-[#0A84FF] dark:text-arise-cyan font-bold tracking-wider">{activeSection}</span>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="text-slate-500 dark:text-slate-400">ONLINE</span>
        </div>
      </div>
    </>
  );
}
