"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  Code2,
  Smartphone,
  Layers,
  TrendingUp,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function NexusCapabilities() {
  const capabilities = [
    {
      id: 1,
      number: "01",
      icon: <Compass className="w-6 h-6 text-signal" />,
      title: "Strategy & Consulting",
      desc: "We map your business goals to digital outcomes with ruthless clarity.",
      tags: ["Research", "Roadmap", "OKRs"],
      span: "col-span-1 lg:col-span-2",
    },
    {
      id: 2,
      number: "02",
      icon: <Palette className="w-6 h-6 text-signal" />,
      title: "UI/UX Design",
      desc: "Interfaces that feel natural, memorable, and effortless to navigate.",
      tags: ["Figma", "Design Systems", "Prototypes"],
      span: "col-span-1",
    },
    {
      id: 3,
      number: "03",
      icon: <Code2 className="w-6 h-6 text-signal" />,
      title: "Web Development",
      desc: "Blazing-fast websites built with modern frameworks and pixel perfection.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      span: "col-span-1",
    },
    {
      id: 4,
      number: "04",
      icon: <Smartphone className="w-6 h-6 text-signal" />,
      title: "Mobile Applications",
      desc: "Native & cross-platform apps built for scale and silky smooth performance.",
      tags: ["React Native", "iOS", "Android"],
      span: "col-span-1 lg:col-span-2",
    },
    {
      id: 5,
      number: "05",
      icon: <Layers className="w-6 h-6 text-signal" />,
      title: "Brand Identity",
      desc: "Your brand is a story. We make sure it is one worth telling.",
      tags: ["Logo", "Guidelines", "Assets"],
      span: "col-span-1",
    },
    {
      id: 6,
      number: "06",
      icon: <TrendingUp className="w-6 h-6 text-signal" />,
      title: "SEO & Growth",
      desc: "Organic strategies that compound over time like a good investment.",
      tags: ["SEO", "Analytics", "CRO"],
      span: "col-span-1",
    },
    {
      id: 7,
      number: "07",
      icon: <Cpu className="w-6 h-6 text-signal" />,
      title: "AI Integration",
      desc: "We embed intelligence into your product — not as a feature, but as a foundation.",
      tags: ["OpenAI", "LangChain", "Vector DBs", "Fine-tuning"],
      span: "col-span-1 lg:col-span-2",
    },
    {
      id: 8,
      number: "08",
      icon: <ShieldCheck className="w-6 h-6 text-signal" />,
      title: "Maintenance & Support",
      desc: "We do not ghost after launch. Your success is our reputation.",
      tags: ["SLA", "Monitoring", "Updates"],
      span: "col-span-1 lg:col-span-2",
    },
  ];

  return (
    <section id="services" className="py-28 sm:py-36 bg-ink-950 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-xs text-signal uppercase tracking-widest">
              01 // CAPABILITIES
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              What we do.
            </h2>
          </div>
          <p className="font-body text-mist-500 text-base sm:text-lg max-w-md">
            End-to-end digital mastery under one roof. From zero-to-one prototypes to enterprise scaling.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group p-8 rounded-3xl border border-white/5 bg-ink-900 hover:bg-ink-800/80 hover:border-signal/40 transition-all duration-300 flex flex-col justify-between min-h-[280px] shadow-2xl ${item.span}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-signal/30 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-mist-700 group-hover:text-signal transition-colors font-semibold">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-2xl tracking-tight text-mist-100 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-mist-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-mist-500 bg-white/[0.02] px-2.5 py-1 rounded-full border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
