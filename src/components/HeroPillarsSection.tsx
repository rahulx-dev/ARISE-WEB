"use client";

import React from "react";
import { motion } from "framer-motion";
import { sound } from "@/lib/audio";

export default function HeroPillarsSection() {
  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pillars = [
    {
      id: "gate",
      num: "01",
      title: "FOCUS",
      desc: "Block distractions. Get things done.",
      image: "/visuals/card_focus_stone.jpg",
    },
    {
      id: "quests",
      num: "02",
      title: "REAL TASKS",
      desc: "Turn intent into action.",
      image: "/visuals/card_tasks_plates.jpg",
    },
    {
      id: "rewards",
      num: "03",
      title: "REAL REWARDS",
      desc: "Earn. Redeem. Grow.",
      image: "/visuals/card_rewards_crystal.jpg",
    },
    {
      id: "ranks",
      num: "04",
      title: "TRACK GROWTH",
      desc: "See the progress. Feel the change.",
      image: "/visuals/card_growth_bars.jpg",
    },
  ];

  return (
    <section id="features" className="relative py-28 sm:py-36 select-none border-t border-slate-200/80 dark:border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header: Centered Exact Typography */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-mono tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
            MORE THAN A TO-DO LIST
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            A System That Works <br />
            <span className="italic text-slate-400 dark:text-slate-400 font-serif">
              For You
            </span>
          </h2>
        </div>

        {/* 4 Portrait Glassmorphic Cards with 3D Imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => scrollTo(pillar.id)}
              className="group p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#070B16]/90 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/70 flex flex-col justify-between h-[360px] sm:h-[380px] hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top 3D Visual Object */}
              <div className="w-full h-44 flex items-center justify-center relative overflow-hidden rounded-2xl bg-black/40">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bottom Content & Step Number */}
              <div className="space-y-3 pt-4">
                <h3 className="font-display text-lg font-bold tracking-wider text-slate-900 dark:text-white uppercase">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
                  {pillar.num}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

