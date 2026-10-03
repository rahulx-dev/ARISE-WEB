"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Shield, Unlock, Zap, Flame } from "lucide-react";

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
    <section id="shield" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <Shield className="w-3.5 h-3.5" />
            <span>05 // FOCUS SHIELD GATE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight hover:scale-[1.01] hover:text-white transition-all duration-300 cursor-default">
            Earn your screen time. <br />
            <span className="text-[#86868B] hover:text-[#A1A1AA] transition-colors">Discipline made sovereign.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Distracting feeds are locked behind a real-world physical toll. Complete designated push-ups or squats to unlock 20 minutes of verified screen access.
          </p>
        </div>

        {/* Side by Side Comparative Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Distraction Trap */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-[#12141A] to-[#08090C] border border-white/[0.08] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#EF4444] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  WITHOUT ARISE // DISTRACTION
                </span>
                <span className="font-mono text-xs text-[#6E6E73]">AVG DRAIN</span>
              </div>
              
              <div className="pt-2">
                <div className="font-sans font-bold text-5xl sm:text-6xl text-[#F5F5F7] tracking-tight">
                  6h 42m
                </div>
                <p className="text-xs font-mono text-[#86868B] mt-1 uppercase">DAILY UNCONSCIOUS SCREEN DRAIN</p>
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
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#08090C] border border-white/[0.05] text-xs font-medium"
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{app.icon}</span>
                      <span className="text-[#F5F5F7]">{app.name}</span>
                    </div>
                    <span className="font-mono text-[#EF4444] font-semibold">{app.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#6E6E73] font-normal leading-relaxed border-t border-white/[0.06] pt-4">
              Passive phone consumption hijacks dopamine. ARISE reclaims your attention through physical commitment.
            </p>
          </div>

          {/* Right: The ARISE Focus Gate System Interaction */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-[#141722] via-[#0D1017] to-[#08090C] border border-[#0A84FF]/40 flex flex-col justify-between space-y-8 shadow-[0_25px_70px_-15px_rgba(10,132,255,0.18)]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0A84FF] font-semibold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>ARISE FOCUS GATE // ACTIVE</span>
                </div>
                <span className="font-mono text-xs text-[#86868B]">PHYSICAL TOLL</span>
              </div>

              {/* Gate Interface */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#08090C] border border-white/[0.08] text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-[#0A84FF]/15 border border-[#0A84FF]/30 text-[#0A84FF] shadow-[0_0_15px_rgba(10,132,255,0.2)]">
                  {isUnlocked ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5F7]">
                    {isUnlocked ? "Access Granted: 20 Mins" : "20 Minutes Locked"}
                  </h3>
                  <p className="text-xs text-[#86868B] mt-1 font-mono">
                    {isUnlocked ? "Physical toll fulfilled. Enjoy intentional screen time." : "Complete: 20 AI-Verified Push-ups"}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-1.5 max-w-xs mx-auto text-left">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#86868B]">REPS COMPLETED</span>
                    <span className="text-[#0A84FF] font-bold">{repsDone} / 20</span>
                  </div>
                  <div className="w-full h-2 bg-[#16181F] rounded-full overflow-hidden p-0.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#0A84FF] to-[#38BDF8] rounded-full shadow-[0_0_10px_#0A84FF]"
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
                      className="w-full py-3.5 rounded-xl bg-[#0A84FF] hover:bg-[#0071e3] text-white font-semibold text-xs tracking-tight uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(10,132,255,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Simulate AI Pose Rep (+1)</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="w-full py-3.5 rounded-xl bg-[#111318] hover:bg-[#181B22] border border-white/[0.1] text-[#86868B] hover:text-white font-mono text-xs tracking-tight uppercase cursor-pointer transition-colors"
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
