"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle } from "lucide-react";

export default function ArisePrivacyTrust() {
  const permissions = [
    {
      title: "Usage Access",
      role: "App State Detection",
      desc: "Monitors foreground application launches to trigger Focus Shield when distraction apps are opened.",
    },
    {
      title: "Accessibility Service",
      role: "Gate Overlay Protocol",
      desc: "Enables the ARISE Focus Gate modal to overlay on top of restricted apps until the physical toll is cleared.",
    },
    {
      title: "Camera Hardware",
      role: "On-Device Neural Pose",
      desc: "Exercise vision processing is performed entirely on-device in volatile RAM. Zero images or video streams leave your phone.",
    },
    {
      title: "Location (Optional)",
      role: "GPS Distance Tracking",
      desc: "Used strictly during active outdoor Shadow Sprint sessions to measure route velocity and kilometer splits.",
    },
    {
      title: "Notifications",
      role: "System Quest Alerts",
      desc: "Sends daily morning quest briefings and warning alerts before streak timers expire.",
    },
  ];

  return (
    <section className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Your data stays yours.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Exercise vision processing is performed strictly on-device. We believe biometric camera feeds and personal activity data belong exclusively to you.
          </p>
        </div>

        {/* 5 Permissions Transparency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {permissions.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-[#08090C] border border-white/[0.08] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#0A84FF] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#0A84FF]/10">
                    {p.role}
                  </span>
                  <CheckCircle className="w-4 h-4 text-[#86868B]" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#F5F5F7]">
                  {p.title}
                </h3>
              </div>

              <p className="text-xs text-[#86868B] leading-relaxed font-normal">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Legal Trust Statement */}
        <div className="p-8 rounded-2xl bg-[#08090C] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#86868B] font-mono">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0A84FF] shrink-0" />
            <span>Audited on-device execution framework · Zero third-party tracker SDKs</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F5F5F7] transition-colors underline">Privacy Policy</a>
            <a href="#" className="hover:text-[#F5F5F7] transition-colors underline">Terms of Service</a>
            <a href="mailto:support@arise.io" className="hover:text-[#F5F5F7] transition-colors underline">Security Contact</a>
          </div>
        </div>

      </div>
    </section>
  );
}
