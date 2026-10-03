"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHAPTERS = [
  { id: "product", name: "01 // GENESIS", label: "Overview" },
  { id: "metrics", name: "02 // TELEMETRY", label: "Live Stats" },
  { id: "philosophy", name: "03 // PHILOSOPHY", label: "Screen Time" },
  { id: "vision", name: "04 // AI VISION", label: "Pose Tracking" },
  { id: "shield", name: "05 // APP SHIELD", label: "Focus Gate" },
  { id: "quests", name: "06 // QUEST CORE", label: "Daily System" },
  { id: "dungeons", name: "07 // DUNGEONS", label: "Raid Battles" },
  { id: "mana", name: "08 // MANA", label: "Economy" },
  { id: "sprint", name: "09 // SPRINT", label: "GPS Run" },
  { id: "sanctuary", name: "10 // SANCTUARY", label: "Focus Audio" },
  { id: "hunter-card", name: "11 // HUNTER ID", label: "Card Creator" },
  { id: "download", name: "12 // TERMINAL", label: "Download" },
];

export default function AriseScrollytellingHUD() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(100, Math.max(0, Math.round((scrolled / docHeight) * 100)));
      setScrollProgress(progress);

      // Detect active chapter
      CHAPTERS.forEach((ch, idx) => {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= winHeight * 0.4 && rect.bottom >= winHeight * 0.2) {
            setActiveChapter(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none"
    >
      {/* Telemetry Monospace Readout */}
      <div className="bg-[#08090C]/90 backdrop-blur-xl border border-white/[0.08] px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#86868B] shadow-2xl flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] animate-pulse" />
        <span className="text-white font-medium">{String(scrollProgress).padStart(3, "0")}%</span>
        <span className="text-white/30">|</span>
        <span className="text-[#86868B]">{CHAPTERS[activeChapter]?.name.split("//")[1] || "SYS"}</span>
      </div>

      {/* Scrollytelling Chapter Nodes */}
      <div className="bg-[#08090C]/80 backdrop-blur-2xl border border-white/[0.08] p-2.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col gap-2">
        {CHAPTERS.map((ch, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group relative flex items-center justify-end gap-3.5 py-1 px-1 cursor-pointer transition-all"
              aria-label={`Scroll to ${ch.label}`}
            >
              {/* Expandable Label on Hover or Active */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.15 }}
                    className={`text-[10px] font-mono uppercase tracking-wider whitespace-nowrap px-2 py-0.5 rounded-md border ${
                      isActive
                        ? "bg-[#0A84FF]/15 border-[#0A84FF]/40 text-[#0A84FF] font-semibold"
                        : "bg-[#111318]/90 border-white/[0.06] text-[#86868B] group-hover:text-white"
                    }`}
                  >
                    {ch.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Node Indicator Line / Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-1.5 bg-gradient-to-r from-[#0A84FF] to-white shadow-[0_0_8px_#0A84FF]"
                    : "w-2 h-1.5 bg-white/20 group-hover:bg-white/50 group-hover:w-3"
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
