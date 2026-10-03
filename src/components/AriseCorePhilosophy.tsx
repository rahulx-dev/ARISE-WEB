"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AriseCorePhilosophy() {
  const [isDiscipline, setIsDiscipline] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDiscipline((prev) => !prev);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#000000] py-36 sm:py-48 px-6 sm:px-8 lg:px-12 text-center select-none overflow-hidden relative">
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
          <span className="font-mono text-xs uppercase tracking-widest text-[#86868B]">
            PHILOSOPHY // 01
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight max-w-4xl mx-auto">
            Your phone shouldn&apos;t <br />
            <span className="text-[#86868B]">control your time.</span>
          </h2>
        </motion.div>

        {/* Morphing Word Interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-12"
        >
          <div className="inline-flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-[#08090C] border border-white/[0.08] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E73] mb-4">
              THE TRANSFORMATION
            </span>
            <div className="h-16 sm:h-20 flex items-center justify-center overflow-hidden">
              <motion.span
                key={isDiscipline ? "discipline" : "distraction"}
                initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -25, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`font-sans font-bold text-4xl sm:text-6xl tracking-tight uppercase ${
                  isDiscipline ? "text-[#0A84FF]" : "text-[#86868B]"
                }`}
              >
                {isDiscipline ? "DISCIPLINE" : "DISTRACTION"}
              </motion.span>
            </div>
            <span className="text-xs font-mono text-[#86868B] mt-3">
              [ Click to Toggle State ]
            </span>
          </div>
        </motion.div>

        {/* Supporting Affirmation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          ARISE turns distraction into motivation. Every second of screen time is backed by physical proof of effort.
        </motion.p>

      </div>
    </section>
  );
}
