"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      company: "Vanta Finance",
      industry: "FinTech",
      result: "3.2× Conversion",
      desc: "Redesigned their onboarding flow from 14 steps to 3. Conversion tripled in 6 weeks.",
      services: ["Strategy", "Design", "React"],
      accentColor: "from-[#ff6b35]/25 to-transparent",
    },
    {
      id: 2,
      company: "Bloom Health",
      industry: "HealthTech",
      result: "$4M Series A",
      desc: "Built the investor-facing brand and product demo that closed their seed round.",
      services: ["Branding", "Web", "Pitch Deck"],
      accentColor: "from-[#14532d]/40 to-transparent",
    },
    {
      id: 3,
      company: "Orbit SaaS",
      industry: "B2B SaaS",
      result: "NPS 34 → 71",
      desc: "Redesigned the core dashboard with AI-assisted insights. Users finally understood their data.",
      services: ["AI", "Design", "React"],
      accentColor: "from-signal/15 to-transparent",
    },
    {
      id: 4,
      company: "Crest Retail",
      industry: "E-commerce",
      result: "₹2.4Cr / 90 days",
      desc: "Shopify rebuild with conversion-first design. Revenue target hit in under 3 months.",
      services: ["Shopify", "Growth", "SEO"],
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
              02 // SELECTED WORK
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Proof in production.
            </h2>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-mist-300 hover:text-white text-sm font-body transition-colors cursor-pointer self-start md:self-auto backdrop-blur-md">
            View All Projects
          </button>
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
                  <h3 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100 tracking-tight">
                    {project.company}
                  </h3>
                  <p className="font-mono text-xl sm:text-2xl text-signal font-bold">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Hover Slide-up Curtain Overlay (NEXUS Studio Exact Feature) */}
              <div className="absolute inset-0 bg-ink-950/95 p-8 sm:p-10 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 backdrop-blur-xl">
                <p className="text-mist-100 text-lg sm:text-xl leading-relaxed mb-6 font-body">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs text-mist-500 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 text-signal font-mono text-sm group/btn cursor-pointer">
                  <span className="group-hover/btn:underline underline-offset-4 font-semibold">
                    View Case Study
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
