"use client";

import React, { useState } from "react";
import { ShieldAlert, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";

export default function DoomscrollVsAriseComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<"slider" | "before" | "after">("slider");

  const handleTab = (tab: "slider" | "before" | "after") => {
    sound.playClick();
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#0E1115] p-6 sm:p-10 shadow-2xl shadow-black/80 relative overflow-hidden select-none space-y-8">
      {/* Specular Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2] font-sans">
            DOOMSCROLLING <span className="text-[#6F747B]">VS</span> ARISE
          </h3>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#050607] border border-white/10 font-mono text-xs self-start sm:self-auto">
          <button
            onClick={() => handleTab("slider")}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === "slider"
                ? "bg-white/15 text-[#F5F5F2] font-bold shadow-sm"
                : "text-[#A6A9AE] hover:text-[#F5F5F2]"
            }`}
          >
            Interactive Slider
          </button>
          <button
            onClick={() => handleTab("before")}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === "before"
                ? "bg-[#FF6B4A]/15 text-[#FF6B4A] font-bold border border-[#FF6B4A]/30"
                : "text-[#A6A9AE] hover:text-[#FF6B4A]"
            }`}
          >
            Without ARISE
          </button>
          <button
            onClick={() => handleTab("after")}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === "after"
                ? "bg-[#9AAEFF]/15 text-[#9AAEFF] font-bold border border-[#9AAEFF]/30"
                : "text-[#A6A9AE] hover:text-[#9AAEFF]"
            }`}
          >
            With ARISE
          </button>
        </div>
      </div>

      {/* Comparison Display Grid */}
      {activeTab === "slider" ? (
        <div className="space-y-6">
          {/* Interactive Dual Split Container */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#050607] flex select-none">
            
            {/* Left Side: Without ARISE (Doomscroll Reality) */}
            <div
              style={{ width: `${sliderPosition}%` }}
              className="relative h-full bg-gradient-to-br from-[#FF6B4A]/10 via-[#050607] to-[#050607] overflow-hidden border-r border-[#FF6B4A]/30 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] font-mono text-xs font-bold uppercase mb-4">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>BEFORE ARISE // DOPAMINE SLOTH</span>
                </div>
                <div className="space-y-3 font-mono">
                  <div className="text-3xl sm:text-5xl font-black text-[#FF6B4A] tracking-tight">
                    4H 45M
                  </div>
                  <div className="text-xs text-[#6F747B]">UNPRODUCTIVE SCREEN TIME / DAY</div>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-[#050607]/80 border border-[#FF6B4A]/20 text-[#A6A9AE] flex items-center justify-between">
                  <span>Physical Reps Done:</span>
                  <span className="font-bold text-[#FF6B4A]">0 Reps</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#050607]/80 border border-[#FF6B4A]/20 text-[#A6A9AE] flex items-center justify-between">
                  <span>Cash / Mana Earned:</span>
                  <span className="font-bold text-[#FF6B4A]">₹0.00</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#050607]/80 border border-[#FF6B4A]/20 text-[#A6A9AE] flex items-center justify-between">
                  <span>Mental State:</span>
                  <span className="font-bold text-[#FF6B4A]">Brain Fog &amp; Sloth</span>
                </div>
              </div>
            </div>

            {/* Right Side: With ARISE (Hunter Discipline) */}
            <div
              style={{ width: `${100 - sliderPosition}%` }}
              className="relative h-full bg-gradient-to-br from-[#9AAEFF]/10 via-[#050607] to-[#050607] overflow-hidden p-6 sm:p-8 flex flex-col justify-between text-right"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9AAEFF]/15 border border-[#9AAEFF]/30 text-[#9AAEFF] font-mono text-xs font-bold uppercase mb-4 ml-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WITH ARISE // HUNTER DISCIPLINE</span>
                </div>
                <div className="space-y-3 font-mono">
                  <div className="text-3xl sm:text-5xl font-black text-[#F5F5F2] tracking-tight">
                    100% RECLAIMED
                  </div>
                  <div className="text-xs text-[#6F747B]">AI CAMERA VERIFIED EXERTION</div>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-[#050607]/80 border border-white/10 text-[#A6A9AE] flex items-center justify-between">
                  <span>Physical Reps Done:</span>
                  <span className="font-bold text-[#F5F5F2]">+80 Daily Reps</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#050607]/80 border border-white/10 text-[#A6A9AE] flex items-center justify-between">
                  <span>Mana Payouts (24–48h):</span>
                  <span className="font-bold text-[#F5F5F2]">+500 Mana (₹50 INR)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#050607]/80 border border-white/10 text-[#A6A9AE] flex items-center justify-between">
                  <span>Hunter Rank Status:</span>
                  <span className="font-bold text-[#9AAEFF]">S-Rank Shadow Monarch</span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-[1px] bg-white/40 -translate-x-1/2 pointer-events-none z-20 flex items-center justify-center"
            >
              <div className="w-7 h-7 rounded-full bg-[#0E1115] border border-white/30 shadow-lg flex items-center justify-center text-[10px] font-mono font-bold text-[#F5F5F2]">
                ↔
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#A6A9AE]">
              <span>◀ DRAG TO EXPLORE DOOMSCROLL</span>
              <span>DRAG TO EXPLORE ARISE PROTOCOL ▶</span>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-white/10 accent-[#9AAEFF] cursor-pointer"
            />
          </div>
        </div>
      ) : activeTab === "before" ? (
        /* Without ARISE Full Card */
        <div className="p-6 sm:p-8 rounded-2xl border border-[#FF6B4A]/30 bg-[#FF6B4A]/05 space-y-6">
          <div className="flex items-center gap-2 text-[#FF6B4A] font-mono text-sm font-bold">
            <ShieldAlert className="w-5 h-5" />
            <span>THE REALITY OF PHONE ADDICTION WITHOUT ARISE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            <div className="p-4 rounded-xl bg-[#050607] border border-white/10 space-y-1">
              <div className="text-[10px] text-[#6F747B] uppercase">LOST TIME</div>
              <div className="text-2xl font-bold text-[#FF6B4A]">4.5+ Hours/Day</div>
              <div className="text-[11px] text-[#A6A9AE] font-sans">Mindless reels and endless scrolling</div>
            </div>
            <div className="p-4 rounded-xl bg-[#050607] border border-white/10 space-y-1">
              <div className="text-[10px] text-[#6F747B] uppercase">FITNESS COST</div>
              <div className="text-2xl font-bold text-[#FF6B4A]">0 Calories Burned</div>
              <div className="text-[11px] text-[#A6A9AE] font-sans">Zero physical exertion, poor posture</div>
            </div>
            <div className="p-4 rounded-xl bg-[#050607] border border-white/10 space-y-1">
              <div className="text-[10px] text-[#6F747B] uppercase">FINANCIAL VALUE</div>
              <div className="text-2xl font-bold text-[#FF6B4A]">₹0.00 Earned</div>
              <div className="text-[11px] text-[#A6A9AE] font-sans">Your attention monetized by big tech</div>
            </div>
          </div>
        </div>
      ) : (
        /* With ARISE Full Card */
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#13171C] space-y-6">
          <div className="flex items-center gap-2 text-[#9AAEFF] font-mono text-sm font-bold">
            <Sparkles className="w-5 h-5" />
            <span>THE TRANSFORMATION WITH ARISE HUNTER SYSTEM</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            <div className="p-4 rounded-xl bg-[#050607] border border-white/10 space-y-1">
              <div className="text-[10px] text-[#6F747B] uppercase">EARNED TIME</div>
              <div className="text-2xl font-bold text-[#F5F5F2]">100% Earned</div>
              <div className="text-[11px] text-[#A6A9AE] font-sans">15 Reps = 15 Min Unlocked App Access</div>
            </div>
            <div className="p-4 rounded-xl bg-[#050607] border border-white/10 space-y-1">
              <div className="text-[10px] text-[#6F747B] uppercase">AI REPS VERIFIED</div>
              <div className="text-2xl font-bold text-[#F5F5F2]">80+ Daily Reps</div>
              <div className="text-[11px] text-[#A6A9AE] font-sans">BlazePose 30 FPS form tracking</div>
            </div>
            <div className="p-4 rounded-xl bg-[#050607] border border-white/10 space-y-1">
              <div className="text-[10px] text-[#6F747B] uppercase">REAL CASHOUTS</div>
              <div className="text-2xl font-bold text-[#F5F5F2]">₹50–₹500 / Month</div>
              <div className="text-[11px] text-[#A6A9AE] font-sans">Mana converted to Direct UPI &amp; Amazon</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
