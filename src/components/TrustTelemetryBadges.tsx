"use client";

import React from "react";
import { ShieldCheck, HardDrive, Smartphone, Zap, Clock, WifiOff } from "lucide-react";

interface TrustTelemetryBadgesProps {
  className?: string;
  showAll?: boolean;
}

export default function TrustTelemetryBadges({ className = "", showAll = true }: TrustTelemetryBadgesProps) {
  const badges = [
    {
      icon: ShieldCheck,
      text: "Play Protect Safe",
    },
    {
      icon: Smartphone,
      text: "v1.0.4 • 38 MB Fast APK",
    },
    {
      icon: WifiOff,
      text: "100% Offline AI Vision",
    },
    {
      icon: Clock,
      text: "24–48h Verified Payouts",
    },
    {
      icon: HardDrive,
      text: "Zero Cloud Telemetry",
    },
    {
      icon: Zap,
      text: "Direct UPI & Amazon",
    },
  ];

  const visibleBadges = showAll ? badges : badges.slice(0, 4);

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] select-none ${className}`}>
      {visibleBadges.map((b, i) => {
        const Icon = b.icon;
        return (
          <div
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#0E1115] text-[#A6A9AE] hover:text-[#F5F5F2] hover:border-white/20 transition-all hover:scale-105 cursor-default"
          >
            <Icon className="w-3.5 h-3.5 shrink-0 text-[#9AAEFF]" />
            <span className="font-semibold tracking-wide">{b.text}</span>
          </div>
        );
      })}
    </div>
  );
}
