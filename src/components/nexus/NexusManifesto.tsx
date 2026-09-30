"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NexusManifesto() {
  const points = [
    {
      num: "01",
      title: "The world drowns in mediocre digital products.",
      p1: 'Look at the tools you use every day. Most are clunky, slow, or just plain boring. The baseline for digital experiences has settled somewhere between "barely functional" and "forgettable."',
      p2: "Companies bleed revenue not because their idea is flawed, but because their execution lacks soul. In a sea of templates, average is the most dangerous place a brand can be.",
    },
    {
      num: "02",
      title: "We believe every company deserves a world-class digital presence.",
      p1: "Your product is your absolute best salesperson. It doesn't sleep, it doesn't take days off. It should feel intuitive, look striking, and function flawlessly.",
      p2: "We reject the compromise between aesthetic beauty and technical performance. The best digital products do both beautifully.",
    },
    {
      num: "03",
      title: "So we built a studio that does it differently.",
      p1: "No fluff. No bloated agency retainers. Just a ruthless focus on building what matters with the best craft possible.",
      p2: "From deep strategic foundations to pixel-perfect execution, our process is designed to push your brand from where it is to where it simply must be.",
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 bg-ink-900 border-y border-white/5 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Section Header */}
        <div className="space-y-3">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            03 // PHILOSOPHY
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Why we exist.
          </h2>
        </div>

        {/* 3 Manifesto Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {points.map((point, idx) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-8 sm:p-10 rounded-3xl border border-white/5 bg-ink-950 flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden group hover:border-signal/30 transition-colors duration-300"
            >
              <div className="space-y-6">
                <span className="font-mono text-2xl text-signal font-bold">
                  {point.num}
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-mist-100 tracking-tight leading-snug">
                  {point.title}
                </h3>
              </div>

              <div className="space-y-4 font-body text-mist-500 text-sm sm:text-base leading-relaxed">
                <p>{point.p1}</p>
                <p className="text-mist-300">{point.p2}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
