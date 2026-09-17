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
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/[0.08] bg-[#070B16]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-black/80 relative overflow-hidden select-none space-y-8">
      {/* Specular Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-red-500/60 via-white/40 to-emerald-500/60" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            DOOMSCROLLING <span className="text-white/40">VS</span> ARISE
          </h3>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] font-mono text-xs self-start sm:self-auto">
          <button
            onClick={() => handleTab("slider")}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === "slider"
                ? "bg-white/15 text-white font-bold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            Interactive Slider
          </button>
          <button
            onClick={() => handleTab("before")}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === "before"
                ? "bg-red-500/20 text-red-400 font-bold shadow-sm"
                : "text-white/60 hover:text-red-400"
            }`}
          >
            Without ARISE
          </button>
          <button
            onClick={() => handleTab("after")}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === "after"
                ? "bg-emerald-500/20 text-emerald-400 font-bold shadow-sm"
                : "text-white/60 hover:text-emerald-400"
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
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/[0.12] bg-black flex select-none">
            
            {/* Left Side: Without ARISE (Doomscroll Reality) */}
            <div
              style={{ width: `${sliderPosition}%` }}
              className="relative h-full bg-gradient-to-br from-red-950/80 via-black to-black overflow-hidden border-r border-red-500/40 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-mono text-xs font-bold uppercase mb-4">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>BEFORE ARISE // DOPAMINE SLOTH</span>
                </div>
                <div className="space-y-3 font-mono">
                  <div className="text-3xl sm:text-5xl font-black text-red-400 tracking-tight">
                    4H 45M
                  </div>
                  <div className="text-xs text-white/50">UNPRODUCTIVE SCREEN TIME / DAY</div>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/20 text-red-300 flex items-center justify-between">
                  <span>Physical Reps Done:</span>
                  <span className="font-bold text-red-400">0 Reps</span>
                </div>
                <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/20 text-red-300 flex items-center justify-between">
                  <span>Cash / Mana Earned:</span>
                  <span className="font-bold text-red-400">₹0.00</span>
                </div>
                <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/20 text-red-300 flex items-center justify-between">
                  <span>Mental State:</span>
                  <span className="font-bold text-red-400">Brain Fog &amp; Sloth</span>
                </div>
              </div>
            </div>

            {/* Right Side: With ARISE (Shadow Monarch Discipline) */}
            <div
              style={{ width: `${100 - sliderPosition}%` }}
              className="relative h-full bg-gradient-to-br from-emerald-950/80 via-black to-black overflow-hidden p-6 sm:p-8 flex flex-col justify-between text-right"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase mb-4 ml-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WITH ARISE // HUNTER DISCIPLINE</span>
                </div>
                <div className="space-y-3 font-mono">
                  <div className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                    100% RECLAIMED
                  </div>
                  <div className="text-xs text-white/50">AI CAMERA VERIFIED EXERTION</div>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
                  <span>Physical Reps Done:</span>
                  <span className="font-bold text-emerald-400">+80 Daily Reps</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
                  <span>Mana Payouts (24–48h):</span>
                  <span className="font-bold text-emerald-400">+500 Mana (₹50 INR)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
                  <span>Hunter Rank Status:</span>
                  <span className="font-bold text-cyan-400">S-Rank Shadow Monarch</span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-x-1/2 pointer-events-none z-20 flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white shadow-xl flex items-center justify-center text-[10px] font-mono font-bold text-white">
                ↔
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>◀ DRAG TO EXPLORE DOOMSCROLL</span>
              <span>DRAG TO EXPLORE ARISE PROTOCOL ▶</span>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-white/10 accent-white cursor-pointer"
            />
          </div>
        </div>
      ) : activeTab === "before" ? (
        /* Without ARISE Full Card */
        <div className="p-6 sm:p-8 rounded-2xl border border-red-500/30 bg-red-500/10 space-y-6">
          <div className="flex items-center gap-2 text-red-400 font-mono text-sm font-bold">
            <ShieldAlert className="w-5 h-5" />
            <span>THE REALITY OF PHONE ADDICTION WITHOUT ARISE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase">LOST TIME</div>
              <div className="text-2xl font-bold text-red-400">4.5+ Hours/Day</div>
              <div className="text-[11px] text-slate-400 font-sans">Mindless reels and endless scrolling</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase">FITNESS COST</div>
              <div className="text-2xl font-bold text-red-400">0 Calories Burned</div>
              <div className="text-[11px] text-slate-400 font-sans">Zero physical exertion, poor posture</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase">FINANCIAL VALUE</div>
              <div className="text-2xl font-bold text-red-400">₹0.00 Earned</div>
              <div className="text-[11px] text-slate-400 font-sans">Your attention monetized by big tech</div>
            </div>
          </div>
        </div>
      ) : (
        /* With ARISE Full Card */
        <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 space-y-6">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold">
            <Sparkles className="w-5 h-5" />
            <span>THE TRANSFORMATION WITH ARISE HUNTER SYSTEM</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase">EARNED TIME</div>
              <div className="text-2xl font-bold text-emerald-400">100% Earned</div>
              <div className="text-[11px] text-slate-400 font-sans">15 Reps = 15 Min Unlocked App Access</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase">AI REPS VERIFIED</div>
              <div className="text-2xl font-bold text-emerald-400">80+ Daily Reps</div>
              <div className="text-[11px] text-slate-400 font-sans">BlazePose 30 FPS form tracking</div>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-[10px] text-slate-400 uppercase">REAL CASHOUTS</div>
              <div className="text-2xl font-bold text-emerald-400">₹50–₹500 / Month</div>
              <div className="text-[11px] text-slate-400 font-sans">Mana converted to Direct UPI &amp; Amazon</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
