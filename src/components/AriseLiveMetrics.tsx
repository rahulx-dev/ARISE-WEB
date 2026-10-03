"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface MetricData {
  value: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export default function AriseLiveMetrics() {
  const [metrics] = useState<MetricData[]>([
    {
      value: "50K+",
      number: 50,
      suffix: "K+",
      label: "REPS LOGGED",
      description: "On-device AI verified movement",
    },
    {
      value: "1,200+",
      number: 1200,
      suffix: "+",
      label: "HOURS SAVED",
      description: "From doomscroll blockers",
    },
    {
      value: "98%",
      number: 98,
      suffix: "%",
      label: "QUEST COMPLETION",
      description: "Average active hunter consistency",
    },
  ]);

  return (
    <section className="bg-[#000000] border-y border-white/[0.08] py-16 sm:py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`space-y-2 ${idx > 0 ? "pt-8 md:pt-0 md:pl-10" : ""}`}
            >
              <div className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5F5F7]">
                {m.value}
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-[#86868B]">
                {m.label}
              </div>
              <p className="text-xs text-[#6E6E73] font-normal">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
