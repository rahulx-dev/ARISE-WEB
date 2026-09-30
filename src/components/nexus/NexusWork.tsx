"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sound } from "@/lib/audio";

interface ProjectItem {
  id: number;
  company: string;
  industry: string;
  result: string;
  desc: string;
  services: string[];
  accentColor: string;
}

export default function NexusWork() {
  const projects: ProjectItem[] = [
    {
      id: 1,
      company: "The Doomscroll Killer",
      industry: "Screen Time Defense",
      result: "-3.8 hrs / Day",
      desc: "Gate Guardian toll locked Instagram and TikTok behind 20 push-ups per session. Screen time dropped from 4.5 hrs to 42 minutes within 14 days.",
      services: ["App Lock Toll", "Push-up Verification", "Screen Time Recovery"],
      accentColor: "from-[#ff6b35]/25 to-transparent",
    },
    {
      id: 2,
      company: "The 90-Day Solo Run",
      industry: "Physical Transformation",
      result: "E-Rank → S-Rank",
      desc: "Hunter Rahul logged 1,840 AI-verified reps, cleared 84 daily quests, and achieved a 12kg body recomposition while maintaining a 90-day streak.",
      services: ["30 FPS AI Vision", "Daily Quest Log", "XP Progression"],
      accentColor: "from-[#14532d]/40 to-transparent",
    },
    {
      id: 3,
      company: "Real UPI Cashout Protocol",
      industry: "Fitness Rewards",
      result: "₹18,450 Redeemed",
      desc: "Top 50 beta hunters converted their accumulated workout Mana Crystals directly into bank UPI transfers and Amazon vouchers.",
      services: ["Instant UPI", "Mana Crystals", "Amazon Gift Cards"],
      accentColor: "from-signal/15 to-transparent",
    },
    {
      id: 4,
      company: "Zero Cloud Video Leak",
      industry: "Sovereign AI Security",
      result: "0 Bytes Uploaded",
      desc: "Independent security audit confirmed: all computer vision posture calculations remain 100% on-device. Zero video frames leave the handset.",
      services: ["On-Device NPU", "Offline First", "Audited Privacy"],
      accentColor: "from-[#581c87]/40 to-transparent",
    },
  ];

  return (
    <section id="work" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <p className="font-mono text-xs text-signal uppercase tracking-widest">
              02 // HUNTER CASE STUDIES
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
              Proof in Production.
            </h2>
          </div>
          <p className="text-mist-400 text-sm sm:text-base max-w-sm font-body">
            Real data from real hunters using ARISE to conquer screen addiction and level up their physical bodies.
          </p>
        </div>

        {/* 2x2 Grid of 3D Perspective Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => sound.playClick()}
              className="group relative h-[420px] sm:h-[460px] rounded-3xl border border-white/5 bg-ink-900 overflow-hidden shadow-2xl cursor-pointer"
            >
              {/* Subtle Gradient Atmosphere */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
              />

              {/* Grid noise pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Default Face Content */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="inline-block border border-white/15 text-mist-300 bg-black/40 font-mono text-xs px-3.5 py-1.5 rounded-full backdrop-blur-md">
                    {project.industry}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-mist-300 group-hover:text-signal group-hover:border-signal/40 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-mist-100 tracking-tight">
                    {project.company}
                  </h3>
                  <p className="font-mono text-xl sm:text-2xl text-signal font-bold">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Hover Slide-up Curtain Overlay */}
              <div className="absolute inset-0 bg-ink-950/95 p-8 sm:p-10 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 backdrop-blur-xl">
                <p className="text-mist-100 text-lg sm:text-xl leading-relaxed mb-6 font-body font-medium">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs text-mist-400 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 text-signal font-mono text-sm group/btn cursor-pointer">
                  <span className="group-hover/btn:underline underline-offset-4 font-bold">
                    View Verification Data
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
