"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NexusMarquee() {
  const items = [
    "30 FPS ON-DEVICE POSE AI",
    "ZERO SERVER CAMERA UPLOAD",
    "GATE GUARDIAN DOOMSCROLL TOLL",
    "DAILY SYSTEM QUESTS",
    "MANA CRYSTALS TO REAL CASH",
    "UPI & AMAZON PAYOUTS",
    "E-RANK TO S-RANK MONARCH",
    "SHADOW GUILD BOSS RAIDS",
    "17 BIOMECHANICAL LANDMARKS",
    "OFFLINE PRIVACY PROTOCOL",
  ];

  return (
    <div className="border-y border-white/5 bg-ink-900/60 py-6 overflow-hidden select-none relative">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1800] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 32,
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-12 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-mist-500 hover:text-signal transition-colors group cursor-default"
          >
            <span className="font-semibold">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-signal/60 group-hover:scale-150 group-hover:bg-signal transition-all" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
