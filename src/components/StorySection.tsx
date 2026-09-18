"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.35, 0.55], [0.3, 1, 0.2]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.85], [0.1, 1, 0.8]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.65], [40, 0]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.65], [0.97, 1]);

  return (
    <section
      id="system"
      ref={containerRef}
      className="py-44 sm:py-60 relative overflow-hidden flex items-center justify-center select-none bg-[#050607]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-28 sm:space-y-36">
        
        {/* Phase 1: The Problem */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#A6A9AE]/60 leading-tight"
        >
          YOUR PHONE <br />
          WANTS YOUR ATTENTION.
        </motion.div>

        {/* Minimal thin vertical divider */}
        <div className="w-[1px] h-16 bg-white/10 mx-auto" />

        {/* Phase 2: The Resolution */}
        <motion.div
          style={{ opacity: opacity2, y: y2, scale: scale2 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F5F2] leading-[0.98]"
        >
          ARISE <br />
          <span className="text-[#F5F5F2]">
            WANTS YOUR DISCIPLINE.
          </span>
        </motion.div>

      </div>
    </section>
  );
}