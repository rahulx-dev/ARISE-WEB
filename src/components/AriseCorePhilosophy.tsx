"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AriseCorePhilosophy() {
  const [isDiscipline, setIsDiscipline] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDiscipline((prev) => !prev);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="philosophy" className="bg-[#000000] py-36 sm:py-48 px-6 sm:px-8 lg:px-12 text-center select-none overflow-hidden relative border-t border-white/[0.08]">
      {/* Subtle Grid Ambient */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Core Statement 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            03 // CORE PHILOSOPHY
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight max-w-4xl mx-auto">
            Your phone shouldn&apos;t <br />
            <span className="text-[#86868B]">control your destiny.</span>
          </h2>
        </motion.div>

        {/* Morphing Word Interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-6"
        >
          <button
            onClick={() => setIsDiscipline(!isDiscipline)}
            className="inline-flex flex-col items-center justify-center p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-[#12141A] to-[#08090C] border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] hover:border-white/[0.2] transition-all cursor-pointer group"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E73] mb-4">
              THE METAMORPHOSIS // CLICK TO SHIFT
            </span>
            <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isDiscipline ? "discipline" : "distraction"}
                  initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -25, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-sans font-bold text-4xl sm:text-6xl tracking-tight uppercase ${
                    isDiscipline
                      ? "bg-gradient-to-r from-[#0A84FF] to-[#38BDF8] bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-[#86868B] to-[#EF4444] bg-clip-text text-transparent"
                  }`}
                >
                  {isDiscipline ? "DISCIPLINE" : "DISTRACTION"}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-xs font-mono text-[#86868B] mt-3 group-hover:text-white transition-colors">
              [ Tap to Toggle Sovereign State ]
            </span>
          </button>
        </motion.div>

        {/* Supporting Affirmation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          ARISE transforms passive scrolling into kinetic power. Every second of screen time is backed by physical proof of effort.
        </motion.p>

      </div>
    </section>
  );
}
