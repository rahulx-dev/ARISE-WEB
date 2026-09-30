"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NexusMarquee() {
  const brands = [
    "VANTA FINANCE",
    "BLOOM HEALTH",
    "ORBIT SAAS",
    "CREST RETAIL",
    "FRAMESHIFT AI",
    "AURA LABS",
    "PULSE MATRIX",
    "LUMEN STUDIO",
    "NEXUS AI",
  ];

  return (
    <div className="w-full py-8 border-y border-white/5 bg-ink-900/60 overflow-hidden select-none">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="flex items-center gap-16 font-display font-bold text-xl sm:text-2xl tracking-wider text-mist-700/60 hover:text-signal transition-colors duration-300 cursor-default"
            >
              <span>{brand}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-signal/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
