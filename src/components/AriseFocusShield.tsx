"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Shield, Unlock, Zap } from "lucide-react";

export default function AriseFocusShield() {
  const [repsDone, setRepsDone] = useState(14);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSimulateRep = () => {
    if (repsDone + 1 >= 20) {
      setRepsDone(20);
      setIsUnlocked(true);
    } else {
      setRepsDone((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setRepsDone(0);
    setIsUnlocked(false);
  };

  return (
    <section className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>02 / FOCUS SHIELD</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Earn your screen time.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Distracting apps are locked behind a real-world physical toll. Complete designated exercises to unlock 20 minutes of verified screen access.
          </p>
        </div>

        {/* Side by Side Comparative Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Distraction Trap */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#08090C] border border-white/[0.08] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#EF4444] font-semibold uppercase tracking-wider">
                  WITHOUT ARISE // DISTRACTION
                </span>
                <span className="font-mono text-xs text-[#6E6E73]">AVERAGE USAGE</span>
              </div>
              
              <div className="pt-2">
                <div className="font-sans font-bold text-5xl sm:text-6xl text-[#F5F5F7] tracking-tight">
                  6h 42m
                </div>
                <p className="text-xs font-mono text-[#86868B] mt-1">DAILY UNCONSCIOUS SCREEN TIME</p>
              </div>

              {/* Distraction Apps List */}
              <div className="space-y-2.5 pt-4">
                {[
                  { name: "Instagram Reels", time: "2h 45m", icon: "📸" },
                  { name: "YouTube Shorts", time: "1h 50m", icon: "▶️" },
                  { name: "Mobile Games", time: "1h 15m", icon: "🎮" },
                  { name: "Endless Feeds", time: "52m", icon: "⚡" },
                ].map((app) => (
                  <div
                    key={app.name}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D0F14] border border-white/[0.04] text-xs font-medium"
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{app.icon}</span>
                      <span className="text-[#F5F5F7]">{app.name}</span>
                    </div>
                    <span className="font-mono text-[#EF4444]">{app.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#6E6E73] font-normal leading-relaxed border-t border-white/[0.06] pt-4">
              Unconscious phone addiction drains dopamine and stalls physical health.
            </p>
          </div>

          {/* Right: The ARISE Focus Gate System Interaction */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0F14] border border-[#0A84FF]/30 flex flex-col justify-between space-y-8 shadow-[0_20px_60px_-15px_rgba(10,132,255,0.12)]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0A84FF] font-semibold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>ARISE FOCUS GATE ACTIVE</span>
                </div>
                <span className="font-mono text-xs text-[#86868B]">SYSTEM TOLL</span>
              </div>

              {/* Gate Interface */}
              <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.08] text-center space-y-4">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-[#0A84FF]/10 border border-[#0A84FF]/30 text-[#0A84FF]">
                  {isUnlocked ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5F7]">
                    {isUnlocked ? "Access Granted: 20 Mins" : "20 Minutes Locked"}
                  </h3>
                  <p className="text-xs text-[#86868B] mt-1 font-mono">
                    {isUnlocked ? "Toll fulfilled. Enjoy conscious screen time." : "Complete: 20 Push-ups"}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-1.5 max-w-xs mx-auto text-left">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#86868B]">REPS COMPLETED</span>
                    <span className="text-[#0A84FF] font-bold">{repsDone} / 20</span>
                  </div>
                  <div className="w-full h-2 bg-[#16181F] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#0A84FF] rounded-full shadow-[0_0_8px_#0A84FF]"
                      animate={{ width: `${(repsDone / 20) * 100}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                {/* Interactive Rep Simulator Button */}
                <div className="pt-2">
                  {!isUnlocked ? (
                    <button
                      onClick={handleSimulateRep}
                      className="w-full py-3 rounded-xl bg-[#0A84FF] hover:bg-[#0071e3] text-white font-semibold text-xs tracking-tight uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Simulate Push-up Rep (+1)</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="w-full py-3 rounded-xl bg-[#111318] hover:bg-[#181B22] border border-white/[0.1] text-[#86868B] hover:text-white font-mono text-xs tracking-tight uppercase cursor-pointer"
                    >
                      <span>Reset Gate Toll</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#86868B] font-normal leading-relaxed border-t border-white/[0.06] pt-4">
              Your physical effort pays for your leisure. Discipline becomes effortless when screen time is earned.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
