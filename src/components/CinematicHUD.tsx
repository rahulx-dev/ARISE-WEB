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
      {/* Top Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.05]">
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          className="h-full bg-gradient-to-r from-white/30 via-[#9AAEFF] to-[#F5F5F2]"
        />
      </div>

      {/* Right Fixed Dock (Desktop) */}
      <div className="fixed right-6 bottom-8 z-40 hidden lg:flex flex-col items-end gap-3 select-none pointer-events-auto">
        {/* Section Telemetry HUD Pill */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0E1115]/90 border border-white/10 backdrop-blur-xl text-[10px] font-mono text-[#A6A9AE] shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9AAEFF] animate-ping" />
          <span className="text-[#F5F5F2] font-bold tracking-wider">{activeSection}</span>
          <span className="text-white/20">|</span>
          <span className="text-[#6F747B]">ONLINE</span>
        </div>
      </div>
    </>
  );
}
