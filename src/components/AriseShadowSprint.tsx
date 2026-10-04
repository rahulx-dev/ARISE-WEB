"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

export default function AriseShadowSprint() {
  return (
    <section id="sprint" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <Navigation className="w-3.5 h-3.5" />
            <span>SHADOW SPRINT TELEMETRY</span>
          </div>
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Move for real. <br />
            <span className="text-[#86868B]">GPS & Cadence Tracking.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Outdoor distance runs, cadence pacing, and elevation splits. Validated through local device GPS and accelerometer sensors.
          </p>
        </div>

        {/* Minimal Dark GPS HUD & Metric Interface */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-b from-[#12141A] via-[#08090C] to-[#040507] border border-white/[0.1] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
          
          {/* Left GPS Route Minimal Vector */}
          <div className="lg:col-span-7 h-[360px] sm:h-[400px] rounded-3xl bg-[#000000] border border-white/[0.08] p-6 relative flex flex-col justify-between overflow-hidden">
            {/* Ambient Map Grid Lines */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Simulated Clean Sapphire Route Polyline SVG */}
            <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 500 300" fill="none">
              <path
                d="M 50,220 C 120,180 180,240 260,140 C 320,60 380,180 440,90"
                stroke="#0A84FF"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_#0A84FF]"
              />
              <circle cx="50" cy="220" r="5" fill="#F5F5F7" />
              <circle cx="440" cy="90" r="7" fill="#0A84FF" className="animate-ping" />
              <circle cx="440" cy="90" r="5" fill="#F5F5F7" />
            </svg>

            {/* Top Telemetry Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D0F14]/90 border border-white/[0.08] font-mono text-[11px] text-[#F5F5F7] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
                <span>GPS SPRINT RECORDING</span>
              </div>
              <span className="font-mono text-xs text-[#86868B]">PRECISION: HIGH</span>
            </div>

            {/* Bottom Current Location Tag */}
            <div className="relative z-10 flex items-center gap-2 text-xs font-mono text-[#86868B]">
              <MapPin className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span>OUTDOOR INTERVAL</span>
            </div>
          </div>

          {/* Right 4 Key Running Telemetry Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-1">
              <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">DISTANCE</span>
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#F5F5F7]">7.42 <span className="text-sm text-[#86868B]">KM</span></div>
              <span className="text-[11px] text-[#6E6E73] block pt-1">+0.8 km vs last split</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-1">
              <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">AVG PACE</span>
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#0A84FF]">5:42 <span className="text-sm text-[#86868B]">/KM</span></div>
              <span className="text-[11px] text-[#6E6E73] block pt-1">Optimal aerobic zone</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-1">
              <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">TOTAL STEPS</span>
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#F5F5F7]">9,284</div>
              <span className="text-[11px] text-[#6E6E73] block pt-1">Cadence: 168 spm</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-1">
              <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider block">CALORIES</span>
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#EF4444]">482 <span className="text-sm text-[#86868B]">KCAL</span></div>
              <span className="text-[11px] text-[#6E6E73] block pt-1">Direct Mana conversion</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
