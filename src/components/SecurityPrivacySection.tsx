"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardDrive, WifiOff, Lock, CheckCircle2, EyeOff } from "lucide-react";

export default function SecurityPrivacySection() {
  const securityPoints = [
    {
      icon: EyeOff,
      title: "Zero Video Uploads",
      desc: "Camera frames execute 100% in volatile device RAM and discard instantly.",
      badge: "VOLATILE RAM ONLY",
    },
    {
      icon: HardDrive,
      title: "100% Local SQLite",
      desc: "Workouts, user profile, and app lock timers remain on your phone's encrypted sandbox.",
      badge: "ENCRYPTED SANDBOX",
    },
    {
      icon: WifiOff,
      title: "Complete Offline Mode",
      desc: "Full AI camera tracking and app locking works flawlessly in Airplane Mode.",
      badge: "AIRPLANE MODE READY",
    },
    {
      icon: Lock,
      title: "Zero Data Brokerage",
      desc: "Zero tracking SDKs. We never monetize or sell your biometric data.",
      badge: "PRIVACY PLEDGE",
    },
  ];

  return (
    <section id="privacy" className="py-24 sm:py-36 relative overflow-hidden select-none bg-[#0A0C0F]">
      {/* Background subtle cold violet accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#9AAEFF]/[0.015] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-[#A6A9AE] uppercase">
            PRIVACY &amp; LOCAL ARCHITECTURE
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-[#F5F5F2] leading-[1.05]">
            Your Biometrics. <br />
            <span className="italic text-[#A6A9AE]">
              Strictly Yours.
            </span>
          </h2>
        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl border border-white/10 bg-[#0E1115] hover:bg-[#13171C] shadow-xl shadow-black/80 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#13171C] border border-white/15 flex items-center justify-center text-[#F5F5F2]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#050607] border border-white/10 font-mono text-[10px] font-bold text-[#9AAEFF] tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A6A9AE] font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#9AAEFF] font-semibold border-t border-white/10">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>VERIFIED LOCAL ENFORCEMENT</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
