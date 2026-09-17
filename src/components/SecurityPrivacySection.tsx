"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HardDrive, WifiOff, Lock, CheckCircle2, EyeOff } from "lucide-react";

export default function SecurityPrivacySection() {
  const securityPoints = [
    {
      icon: EyeOff,
      title: "Zero Video Uploads",
      desc: "Camera frames are analyzed purely in volatile device RAM by on-device MediaPipe models and discarded immediately. No image or video stream is ever saved or transmitted.",
      badge: "VOLATILE RAM ONLY",
    },
    {
      icon: HardDrive,
      title: "100% Local SQLite Database",
      desc: "Your workout history, user profile, quest completion, and unlocked app timers remain strictly on your phone's encrypted sandbox filesystem.",
      badge: "ENCRYPTED SANDBOX",
    },
    {
      icon: WifiOff,
      title: "Complete Offline Mode",
      desc: "ARISE works flawlessly in Airplane Mode. Internet connectivity is strictly required ONLY when requesting verified reward redemptions or taking surveys.",
      badge: "AIRPLANE MODE READY",
    },
    {
      icon: Lock,
      title: "Zero Data Brokerage",
      desc: "We do not sell, broker, or monetize your private biometric or habit data. The app is funded exclusively through transparent, voluntary partner survey rewards.",
      badge: "PRIVACY PLEDGE",
    },
  ];

  return (
    <section id="privacy" className="py-24 sm:py-36 relative overflow-hidden select-none">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURITY &amp; PRIVACY PROTOCOL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            YOUR BIOMETRICS. <br />
            <span className="text-emerald-500">
              STRICTLY YOURS.
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
                className="p-7 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#070B16]/90 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/60 flex flex-col justify-between space-y-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold border-t border-slate-100 dark:border-white/[0.04]">
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
