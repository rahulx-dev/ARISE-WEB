"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHILOSOPHY_WORDS = [
  {
    word: "DISTRACTION",
    sub: "Passive dopamine scrolling",
    gradient: "from-[#86868B] to-[#EF4444]",
    glow: "rgba(239, 68, 68, 0.15)",
  },
  {
    word: "DISCIPLINE",
    sub: "Intentional kinetic effort",
    gradient: "from-[#0A84FF] to-[#38BDF8]",
    glow: "rgba(10, 132, 255, 0.2)",
  },
  {
    word: "SOVEREIGNTY",
    sub: "Reclaiming your focus and time",
    gradient: "from-[#38BDF8] to-[#FFFFFF]",
    glow: "rgba(56, 189, 248, 0.2)",
  },
  {
    word: "PROGRESSION",
    sub: "Every second backed by proof",
    gradient: "from-[#0A84FF] to-[#60A5FA]",
    glow: "rgba(10, 132, 255, 0.2)",
  },
];

export default function AriseCorePhilosophy() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHILOSOPHY_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const current = PHILOSOPHY_WORDS[index];

  return (
    <section id="philosophy" className="bg-[#000000] py-36 sm:py-48 px-6 sm:px-8 lg:px-12 text-center select-none overflow-hidden relative border-t border-white/[0.08]">
      {/* Subtle Grid Ambient */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Core Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight max-w-4xl mx-auto cursor-default select-none">
            Your phone shouldn&apos;t <br />
            <span className="text-[#86868B]">control your destiny.</span>
          </h1>
        </motion.div>

        {/* Clean Automatic Morphing Showcase (Zero Clutter Instructions) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-4"
        >
          <div
            className="inline-flex flex-col items-center justify-center px-12 sm:px-20 py-12 sm:py-16 rounded-[40px] bg-gradient-to-b from-[#11141D] via-[#080A0E] to-[#020305] border border-white/[0.12] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] transition-all duration-700 relative overflow-hidden"
            style={{
              boxShadow: `0 30px 90px -20px ${current.glow}, inset 0 1px 1px rgba(255, 255, 255, 0.15)`,
            }}
          >
            {/* Ambient subtle backlight glow */}
            <div
              className="absolute inset-0 opacity-25 blur-3xl pointer-events-none transition-all duration-700"
              style={{ backgroundColor: current.glow }}
            />

            <div className="h-16 sm:h-24 flex items-center justify-center overflow-hidden relative z-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.word}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}
                >
                  {current.word}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="h-6 mt-3 overflow-hidden relative z-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.sub}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs sm:text-sm font-mono text-[#86868B] block tracking-wide"
                >
                  {current.sub}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
