"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Flame } from "lucide-react";

export default function NexusManifesto() {
  const pillars = [
    {
      number: "01",
      icon: <Flame className="w-8 h-8 text-signal" />,
      title: "Physical Strain is Real Currency.",
      desc: "In an era of endless digital dopamine, physical sweat and muscle resistance are the only honest proofs of work left. ARISE treats every rep as an undeniable asset.",
    },
    {
      number: "02",
      icon: <ShieldCheck className="w-8 h-8 text-signal" />,
      title: "Your Camera Feed is Sovereign.",
      desc: "Big tech harvests your biometric footage. We reject the cloud. ARISE computer vision runs 100% on your local silicon. What happens in your room stays on your device.",
    },
    {
      number: "03",
      icon: <Zap className="w-8 h-8 text-signal" />,
      title: "Discipline Must Be Gamified.",
      desc: "Willpower alone fails. By turning real workouts into Solo Leveling stat boosts, daily quests, and instant UPI payouts, discipline becomes an addictive loop you crave.",
    },
  ];

  return (
    <section id="about" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            03 // THE SYSTEM MANIFESTO
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
            Built on Uncompromising Principles.
          </h2>
        </div>

        {/* 3 Pillar Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-3xl border border-white/5 bg-ink-900 hover:border-signal/40 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-2xl group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-signal/30 group-hover:scale-110 transition-all">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xl font-bold text-mist-700 group-hover:text-signal transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-mist-100 group-hover:text-white transition-colors leading-tight">
                  {pillar.title}
                </h3>
              </div>

              <p className="font-body text-mist-400 text-sm sm:text-base leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
