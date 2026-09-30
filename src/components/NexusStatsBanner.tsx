"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatMetric {
  value: string;
  label: string;
  sub: string;
}

export default function NexusStatsBanner() {
  const stats: StatMetric[] = [
    {
      value: "14,200+",
      label: "ACTIVE HUNTERS",
      sub: "Leveling up daily across 40+ countries",
    },
    {
      value: "2.4M+",
      label: "REPS AI-VERIFIED",
      sub: "30 FPS on-device computer vision",
    },
    {
      value: "₹18.5L+",
      label: "MANA CASHOUTS",
      sub: "Paid out directly via UPI & Amazon",
    },
    {
      value: "100%",
      label: "OFFLINE PRIVACY",
      sub: "Zero video frames uploaded to servers",
    },
  ];

  return (
    <section className="bg-signal text-ink-950 py-16 sm:py-20 select-none overflow-hidden relative shadow-[0_0_60px_rgba(232,255,71,0.15)]">
      {/* Background kinetic pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#050508_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="space-y-1.5"
            >
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink-950 leading-none">
                {stat.value}
              </div>
              <div className="font-mono text-xs sm:text-sm font-black tracking-wider text-ink-950/90 uppercase">
                {stat.label}
              </div>
              <p className="font-body text-xs text-ink-950/70 font-medium leading-snug">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
