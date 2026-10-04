"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AriseHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "DOWNLOAD",
      desc: "Install the official ARISE APK onto your Android device in under 30 seconds.",
    },
    {
      num: "02",
      title: "AWAKEN",
      desc: "Grant required local permissions and initialize your personalized Hunter profile.",
    },
    {
      num: "03",
      title: "PROGRESS",
      desc: "Complete daily system quests, track reps with on-device AI, and unlock your screen time.",
    },
  ];

  return (
    <section className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>PROTOCOL INITIALIZATION</span>
          </div>
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            How it works.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Three simple steps to transform your daily screen habit into a physical progression system.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#08090C] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-2 h-2 rounded-full bg-[#0A84FF]" />
                <h3 className="font-sans font-bold text-2xl text-[#F5F5F7] tracking-tight">
                  {s.title}
                </h3>
              </div>

              <p className="text-sm text-[#86868B] leading-relaxed font-normal">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
