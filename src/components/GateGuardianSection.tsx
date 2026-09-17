"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldAlert, Lock, Zap, Smartphone, CheckCircle2, Unlock, RefreshCw, Flame, Sliders } from "lucide-react";
import Image from "next/image";
import DeviceMockup from "./DeviceMockup";
import Interactive3DTilt from "./Interactive3DTilt";
import { sound } from "@/lib/audio";

// Clean brand SVG components
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="10" fill="#FF4500" />
    <circle cx="9" cy="11.5" r="1.5" fill="white" />
    <circle cx="15" cy="11.5" r="1.5" fill="white" />
    <path d="M9 15.5c1.5 1 4.5 1 6 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function GateGuardianSection() {
  const [selectedApp, setSelectedApp] = useState("Instagram");
  const [customReps, setCustomReps] = useState(15);
  const [customMinutes, setCustomMinutes] = useState(15);
  const [simState, setSimState] = useState<"locked" | "verifying" | "unlocked">("locked");
  const [repsDone, setRepsDone] = useState(0);

  const apps = [
    { name: "Instagram", icon: InstagramIcon, color: "text-pink-400", defaultReps: 15, defaultMins: 15, reqType: "SQUATS" },
    { name: "YouTube", icon: YoutubeIcon, color: "text-red-500", defaultReps: 20, defaultMins: 20, reqType: "PUSH-UPS" },
    { name: "TikTok", icon: TikTokIcon, color: "text-cyan-400", defaultReps: 25, defaultMins: 15, reqType: "JACKS" },
    { name: "Reddit", icon: RedditIcon, color: "text-orange-500", defaultReps: 15, defaultMins: 10, reqType: "BURPEES" },
  ];

  const currentApp = apps.find((a) => a.name === selectedApp) || apps[0];

  const steps = [
    "OPEN RESTRICTED APP",
    "DUNGEON SEALS SCREEN",
    "VERIFY AI REPS",
    "INSTANT UNLOCK",
  ];

  const handleAppSelect = (appName: string) => {
    setSelectedApp(appName);
    const target = apps.find(a => a.name === appName);
    if (target) {
      setCustomReps(target.defaultReps);
      setCustomMinutes(target.defaultMins);
    }
    setSimState("locked");
    setRepsDone(0);
    sound.playGateAlarm();
  };

  const handleSimulateRep = () => {
    if (simState === "unlocked") return;
    setSimState("verifying");
    const nextReps = Math.min(repsDone + 5, customReps);
    setRepsDone(nextReps);

    sound.playRepCount(nextReps);

    if (nextReps >= customReps) {
      setTimeout(() => {
        setSimState("unlocked");
        sound.playUnlock();
      }, 350);
    }
  };

  const handleResetSim = () => {
    setSimState("locked");
    setRepsDone(0);
    sound.playClick();
  };

  return (
    <section id="gate" className="py-28 sm:py-40 relative overflow-hidden select-none">
      {/* Subtle Crimson Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#EF4444]/[0.04] rounded-full blur-[220px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Editorial Headline, Flow Sequence & App Selector */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">

              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[0.96]">
                DISTRACTION <br />
                <span className="text-[#EF4444]">
                  HAS A TOLL.
                </span>
              </h2>
            </div>

            {/* Clean Minimal Flow Sequence */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 select-none font-mono text-xs">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-slate-500 dark:text-slate-300 font-semibold">
                    {step}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#EF4444] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Target App Friction Selector */}
            <div className="space-y-3 pt-2 select-none">
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase block font-semibold">
                Select Restricted App Target
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {apps.map((app) => {
                  const Icon = app.icon;
                  const isSelected = selectedApp === app.name;
                  return (
                    <button
                      key={app.name}
                      onClick={() => handleAppSelect(app.name)}
                      className={`relative p-3 rounded-2xl border text-xs font-mono transition-all flex flex-col items-center gap-1.5 cursor-pointer overflow-hidden ${
                        isSelected
                          ? "border-red-500/80 text-white shadow-lg shadow-red-950/50"
                          : "border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-900/50 text-slate-500 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-slate-200"
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeAppPill"
                          className="absolute inset-0 bg-gradient-to-b from-red-500/25 to-red-600/10 border border-red-500/40 rounded-2xl pointer-events-none -z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className={`w-4 h-4 relative z-10 transition-transform group-hover:scale-110 ${app.color}`} />
                      <span className="font-bold text-slate-900 dark:text-white text-[11px] relative z-10">{app.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dual Custom Sliders for Trial Reps & Unlock Time */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-slate-900/40 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-semibold">
                <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-red-500" />
                  <span>CUSTOM TOLL: {customReps} {currentApp.reqType}</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  UNLOCKS FOR: {customMinutes} MINS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>REPS TOLL</span>
                    <span className="text-red-400 font-bold">{customReps} Reps</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={customReps}
                    onChange={(e) => {
                      setCustomReps(Number(e.target.value));
                      setRepsDone(0);
                      setSimState("locked");
                    }}
                    className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 accent-red-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>UNLOCKED ACCESS</span>
                    <span className="text-emerald-400 font-bold">{customMinutes} Mins</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    step={5}
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(Number(e.target.value))}
                    className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Simulator Action Trigger Bar */}
            <div className="p-4 rounded-2xl border border-red-500/30 bg-red-500/5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  SIMULATOR: <span className={simState === "unlocked" ? "text-emerald-500 font-bold" : "text-red-500 font-bold"}>{simState.toUpperCase()}</span>
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-bold">
                  {repsDone} / {customReps} {currentApp.reqType}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSimulateRep}
                  disabled={simState === "unlocked"}
                  className={`flex-1 py-2.5 px-4 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    simState === "unlocked"
                      ? "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-red-500/20 active:scale-95"
                  }`}
                >
                  <Flame className="w-4 h-4" />
                  <span>{simState === "unlocked" ? "Gate Unlocked!" : `Simulate Camera Reps (+5 ${currentApp.reqType})`}</span>
                </button>

                <button
                  onClick={handleResetSim}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-all"
                  title="Reset Simulator"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Technical Friction Badges */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200 dark:border-white/[0.08] font-mono text-xs select-none">
              <div className="space-y-1 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/40 border border-slate-200 dark:border-white/[0.04]">
                <div className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Lock className="w-3 h-3 text-red-400" />
                  <span>TOLL</span>
                </div>
                <div className="font-bold text-red-500 dark:text-red-400">{customReps} {currentApp.reqType}</div>
              </div>
              <div className="space-y-1 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/40 border border-slate-200 dark:border-white/[0.04]">
                <div className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#0A84FF]" />
                  <span>REWARD</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white">{customMinutes} MIN UNLOCKED</div>
              </div>
              <div className="space-y-1 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/40 border border-slate-200 dark:border-white/[0.04]">
                <div className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-emerald-500" />
                  <span>SECURITY</span>
                </div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400">Zero Bypass</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Perspective Device Mockup with Live Gate Simulation */}
          <div className="lg:col-span-6 flex justify-center">
            <Interactive3DTilt maxAngle={8} className="w-full max-w-[340px] sm:max-w-[380px]">
              <DeviceMockup showStatusBar={false}>
                <div className="relative w-full h-full bg-[#030712] select-none overflow-hidden flex flex-col justify-between">
                  
                  {/* Backdrop Screenshot */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/screens/arise_focus_blocked_real.jpg"
                      alt="ARISE Gate Guardian Real Screen"
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />
                  </div>

                  {/* Top Status Banner */}
                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <AnimatePresence mode="wait">
                      {simState === "unlocked" ? (
                        <motion.div
                          key="unlocked-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 backdrop-blur-md flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold shadow-lg"
                        >
                          <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                          <span>GATE UNLOCKED</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="locked-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-3 py-1.5 rounded-xl bg-black/80 border border-red-500/40 backdrop-blur-md flex items-center gap-2 text-red-400 font-mono text-xs font-bold shadow-lg"
                        >
                          <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
                          <span>GATE ENGAGED</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 font-mono text-[10px] text-slate-300 font-bold">
                      {selectedApp}
                    </div>
                  </div>

                  {/* Center Interactive Overlay */}
                  <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center space-y-4">
                    <AnimatePresence mode="wait">
                      {simState === "unlocked" ? (
                        <motion.div
                          key="unlocked-screen"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="p-6 rounded-3xl bg-emerald-950/90 border border-emerald-500/50 backdrop-blur-xl space-y-3 shadow-2xl shadow-emerald-500/20"
                        >
                          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                              [ACCESS GRANTED]
                            </div>
                            <div className="text-2xl font-black font-mono text-white">
                              {customMinutes}:00
                            </div>
                            <div className="text-[10px] text-slate-300 font-mono">
                              {selectedApp} Unlocked for {customMinutes} Min
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="locked-screen"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="p-5 rounded-3xl bg-black/85 border border-red-500/40 backdrop-blur-xl space-y-3 shadow-2xl shadow-red-500/20 w-full"
                        >
                          <div className="w-12 h-12 mx-auto rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center text-red-500">
                            <Lock className="w-6 h-6 animate-pulse" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider">
                              DUNGEON SEAL ACTIVE
                            </div>
                            <div className="text-xl font-bold font-mono text-white">
                              {repsDone} / {customReps}
                            </div>
                            <div className="text-[11px] text-slate-300 font-mono">
                              Perform {customReps} {currentApp.reqType} to Unlock
                            </div>
                          </div>

                          {/* Progress bar inside phone */}
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <motion.div
                              className="h-full bg-red-500"
                              style={{ width: `${(repsDone / customReps) * 100}%` }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Lock Telemetry */}
                  <div className="relative z-10 p-5 bg-black/85 border-t border-white/10 backdrop-blur-md space-y-2 m-4 rounded-2xl">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">UNLOCK REQUIREMENT:</span>
                      <span className="text-red-400 font-bold">
                        {customReps} {currentApp.reqType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 pt-1 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>HARDWARE PRIVILEGE LOCKED</span>
                    </div>
                  </div>

                </div>
              </DeviceMockup>
            </Interactive3DTilt>
          </div>

        </div>
      </div>
    </section>
  );
}