"use client";

import React from "react";
import { motion } from "framer-motion";
import { sound } from "@/lib/audio";

export default function NexusTeam() {
  const team = [
    {
      name: "Rahul X",
      role: "System Architect & Founder",
      quote: "We don't need another gym app. We need a system that makes discipline inevitable.",
      colors: ["#e8ff47", "#080812"],
    },
    {
      name: "Karan Verma",
      role: "Edge AI & Vision Lead",
      quote: "30 frames per second on local silicon. Zero cloud leakage. Absolute accuracy.",
      colors: ["#38bdf8", "#080812"],
    },
    {
      name: "Ananya Roy",
      role: "RPG Systems & Game Design",
      quote: "Your body is your main character. Every rep should feel like an S-Rank power surge.",
      colors: ["#ff6b35", "#080812"],
    },
    {
      name: "Vikram Seth",
      role: "Security & Offline Protocol",
      quote: "Privacy is sovereign. Your biometric movements belong strictly to your device.",
      colors: ["#a78bfa", "#080812"],
    },
  ];

  // 4x4 Pixel Art Generative Avatar
  const PixelAvatar = ({ colors }: { colors: string[] }) => {
    const pattern = [0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0];
    return (
      <div className="w-full aspect-square grid grid-cols-4 grid-rows-4 gap-0 mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
        {pattern.map((bit, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: bit ? colors[0] : colors[1] }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="team" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            04 // SYSTEM ARCHITECTS
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
            The Builders of ARISE.
          </h2>
        </div>

        {/* 4 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => sound.playClick()}
              className="group h-[380px] w-full [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl">
                
                {/* Front Side */}
                <div className="absolute inset-0 bg-ink-900 border border-white/5 p-8 rounded-3xl flex flex-col [backface-visibility:hidden] shadow-2xl justify-between">
                  <PixelAvatar colors={member.colors} />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-mist-100">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-signal mt-1 uppercase tracking-wider font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back Side (Signal Lime High-Impact) */}
                <div className="absolute inset-0 bg-signal border border-signal p-8 rounded-3xl flex flex-col justify-between text-ink-950 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-black uppercase tracking-widest text-ink-950/70">
                      {"// SYSTEM PROTOCOL"}
                    </span>
                    <p className="font-body text-xl italic font-bold leading-snug text-ink-950">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-ink-950 text-signal font-bold">
                      VERIFIED GUARDIAN
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
