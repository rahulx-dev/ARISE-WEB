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
      color: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      icon: Smartphone,
      text: "v1.0.4 • 38 MB Fast APK",
      color: "text-blue-600 dark:text-blue-400 border-blue-500/30 bg-blue-500/10",
    },
    {
      icon: WifiOff,
      text: "100% Offline AI Vision",
      color: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      icon: Clock,
      text: "24–48h Verified Payouts",
      color: "text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      icon: HardDrive,
      text: "Zero Cloud Telemetry",
      color: "text-purple-600 dark:text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
    {
      icon: Zap,
      text: "Direct UPI & Amazon",
      color: "text-rose-600 dark:text-rose-400 border-rose-500/30 bg-rose-500/10",
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
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all hover:scale-105 cursor-default ${b.color}`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="font-semibold tracking-wide text-slate-800 dark:text-slate-200">{b.text}</span>
          </div>
        );
      })}
    </div>
  );
}
