"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NexusTeam() {
  const team = [
    {
      name: "Ritik Singh",
      role: "Founder & Strategy",
      quote: "Good strategy is just clear thinking made visible.",
      colors: ["#e8ff47", "#080812"],
    },
    {
      name: "Deepak Kanojiya",
      role: "Creative Director",
      quote: "Design that doesn't solve a problem is just decoration.",
      colors: ["#ff6b35", "#080812"],
    },
    {
      name: "Mayank Somvanshi",
      role: "Lead Engineer",
      quote: "Code is poetry. Ship it like it is.",
      colors: ["#a78bfa", "#080812"],
    },
    {
      name: "Nand Kishore Soni",
      role: "Growth & Marketing",
      quote: "Growth is a system, not a hack.",
      colors: ["#34d399", "#080812"],
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
            04 // CORE TEAM
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            The humans behind the pixels.
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
              className="group h-[380px] w-full [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl">
                
                {/* Front Side */}
                <div className="absolute inset-0 bg-ink-900 border border-white/5 p-8 rounded-3xl flex flex-col [backface-visibility:hidden] shadow-2xl justify-between">
                  <PixelAvatar colors={member.colors} />
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-mist-100">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-signal mt-1 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back Side (Signal Yellow/Lime or Dark High-Impact) */}
                <div className="absolute inset-0 bg-signal border border-signal p-8 rounded-3xl flex flex-col justify-between text-ink-950 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-950/60">
                      {"// PERSPECTIVE"}
                    </span>
                    <p className="font-body text-xl sm:text-2xl italic font-semibold leading-snug text-ink-950">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <a
                      href="#"
                      className="p-2.5 bg-ink-950 text-mist-100 rounded-full hover:bg-black transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2.5 bg-ink-950 text-mist-100 rounded-full hover:bg-black transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66a1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2.5 bg-ink-950 text-mist-100 rounded-full hover:bg-black transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    </a>
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
