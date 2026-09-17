"use client";

import React from "react";
import Image from "next/image";
import { Wifi, Battery } from "lucide-react";

interface DeviceMockupProps {
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  showStatusBar?: boolean;
}

export default function DeviceMockup({
  children,
  imageSrc,
  imageAlt = "ARISE Application Screen",
  className = "",
  showStatusBar = true,
}: DeviceMockupProps) {
  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Outer Dark Titanium Chassis */}
      <div className="relative rounded-[44px] sm:rounded-[52px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl phone-chassis border border-white/10">
        {/* Antenna Lines */}
        <div className="absolute top-16 -left-[2px] w-[2px] h-3 bg-slate-600/50 rounded-l" />
        <div className="absolute top-32 -left-[2px] w-[2px] h-6 bg-slate-600/50 rounded-l" />
        <div className="absolute top-44 -left-[2px] w-[2px] h-6 bg-slate-600/50 rounded-l" />
        <div className="absolute top-28 -right-[2px] w-[2px] h-10 bg-slate-600/50 rounded-r" />

        {/* Inner Screen Bezel */}
        <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-black aspect-[9/19.5] w-full border border-slate-900/80">
          {/* Subtle Glass Reflection Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-white/[0.06] to-transparent pointer-events-none z-30" />

          {/* iOS / Android Status Bar (Shown for live custom UI, suppressed for real full-bleed screenshots) */}
          {showStatusBar && !imageSrc && (
            <div className="absolute top-0 inset-x-0 h-10 z-30 px-6 flex items-center justify-between text-white text-[11px] font-mono pointer-events-none">
              <span className="font-semibold tracking-tight">9:41</span>

              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black border border-white/10 flex items-center justify-between px-2.5 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-950" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="flex items-center gap-1.5 opacity-90">
                <span className="text-[10px] font-bold">5G</span>
                <Wifi className="w-3 h-3" />
                <div className="flex items-center gap-0.5">
                  <Battery className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold">98%</span>
                </div>
              </div>
            </div>
          )}

          {/* Screen Content: Image or Custom Children */}
          {imageSrc ? (
            <div className="relative w-full h-full overflow-hidden bg-black">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              {children && (
                <div className="absolute inset-0 z-20 flex flex-col justify-end">
                  {children}
                </div>
              )}
            </div>
          ) : (
            <div className={`relative w-full h-full overflow-hidden flex flex-col ${showStatusBar ? "pt-10 pb-6" : ""}`}>
              {children}
            </div>
          )}

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/40 pointer-events-none z-30" />
        </div>
      </div>
    </div>
  );
}
