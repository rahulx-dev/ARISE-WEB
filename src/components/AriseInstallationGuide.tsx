"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Settings, ShieldCheck } from "lucide-react";

export default function AriseInstallationGuide() {
  const steps = [
    {
      step: "STEP 01",
      icon: <Download className="w-5 h-5 text-[#0A84FF]" />,
      title: "Download Official APK",
      desc: "Tap the download button above to retrieve the signed ARISE v1.0 package (approx. 48MB).",
    },
    {
      step: "STEP 02",
      icon: <Settings className="w-5 h-5 text-[#0A84FF]" />,
      title: "Enable Installation Source",
      desc: "When prompted by Android, toggle 'Allow from this source' for your browser or file manager.",
    },
    {
      step: "STEP 03",
      icon: <ShieldCheck className="w-5 h-5 text-[#0A84FF]" />,
      title: "Grant Local Permissions",
      desc: "Launch ARISE and grant Usage Access and Camera permissions for local, on-device pose tracking.",
    },
  ];

  return (
    <section id="install-guide" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>11 / INSTALLATION PROTOCOL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight hover:text-white hover:scale-[1.01] transition-all duration-300">
            Installation Guide.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Clean, native Android installation without bloatware or unnecessary background services.
          </p>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-9 rounded-3xl bg-[#08090C] border border-white/[0.08] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#0A84FF] font-bold">
                    {s.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04]">
                    {s.icon}
                  </div>
                </div>

                <h3 className="font-sans font-bold text-xl text-[#F5F5F7]">
                  {s.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
