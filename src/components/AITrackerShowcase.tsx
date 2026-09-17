"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Activity, Scan, Cpu, ShieldCheck, Play, Square, RotateCcw, Volume2, VolumeX, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import DeviceMockup from "./DeviceMockup";
import Interactive3DTilt from "./Interactive3DTilt";
import { sound } from "@/lib/audio";

type ExerciseMode = "squats" | "pushups" | "planks";

export default function AITrackerShowcase() {
  const [mode, setMode] = useState<ExerciseMode>("squats");
  const [reps, setReps] = useState(0);
  const [isAutoSimulating, setIsAutoSimulating] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [questCleared, setQuestCleared] = useState(false);

  const autoSimTimerRef = useRef<NodeJS.Timeout | null>(null);

  const exercises = [
    { id: "squats", label: "SQUATS", target: 15, targetAngle: "88°", muscle: "QUADS & GLUTES", accuracy: "99.4%" },
    { id: "pushups", label: "PUSH-UPS", target: 12, targetAngle: "90°", muscle: "CHEST & TRICEPS", accuracy: "98.9%" },
    { id: "planks", label: "PLANKS", target: 20, targetAngle: "180°", muscle: "CORE STABILITY", accuracy: "99.2%" },
  ];

  const activeExercise = exercises.find((e) => e.id === mode) || exercises[0];
  const targetReps = activeExercise.target;
  const progressPercent = Math.min(Math.round((reps / targetReps) * 100), 100);

  // Stop auto-simulate on unmount or mode change
  useEffect(() => {
    return () => {
      if (autoSimTimerRef.current) clearInterval(autoSimTimerRef.current);
    };
  }, []);

  const handleModeChange = (newMode: ExerciseMode) => {
    if (autoSimTimerRef.current) clearInterval(autoSimTimerRef.current);
    setIsAutoSimulating(false);
    setMode(newMode);
    setReps(0);
    setQuestCleared(false);
  };

  const triggerQuestClearCelebration = () => {
    setQuestCleared(true);
    sound.setIsMuted(isMuted);
    sound.playLevelUp();
    
    // Trigger lightweight multi-angle confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00D2EE", "#0A84FF", "#10B981", "#F59E0B"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleSingleRep = () => {
    if (reps >= targetReps) return;
    const nextReps = reps + 1;
    setReps(nextReps);

    sound.setIsMuted(isMuted);
    sound.playRepCount(nextReps);

    if (nextReps >= targetReps) {
      triggerQuestClearCelebration();
    }
  };

  const toggleAutoSimulate = () => {
    if (isAutoSimulating) {
      if (autoSimTimerRef.current) clearInterval(autoSimTimerRef.current);
      setIsAutoSimulating(false);
    } else {
      if (reps >= targetReps) {
        setReps(0);
        setQuestCleared(false);
      }
      setIsAutoSimulating(true);

      autoSimTimerRef.current = setInterval(() => {
        setReps((prev) => {
          const next = prev + 1;
          sound.setIsMuted(isMuted);
          sound.playRepCount(next);

          if (next >= targetReps) {
            if (autoSimTimerRef.current) clearInterval(autoSimTimerRef.current);
            setIsAutoSimulating(false);
            triggerQuestClearCelebration();
            return targetReps;
          }
          return next;
        });
      }, 550);
    }
  };

  const handleReset = () => {
    if (autoSimTimerRef.current) clearInterval(autoSimTimerRef.current);
    setIsAutoSimulating(false);
    setReps(0);
    setQuestCleared(false);
  };

  const toggleSound = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.setIsMuted(nextMute);
  };

  return (
    <section id="ai" className="py-28 sm:py-40 relative overflow-hidden select-none">
      {/* Subtle ambient cyan light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#0A84FF]/[0.04] rounded-full blur-[220px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Editorial Headline & High-Tech Specification Matrix */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
              <div className="text-xs font-mono tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase">
                BIOMECHANICAL VISION
              </div>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-slate-900 dark:text-white leading-[0.96]">
                See Every Rep. <br />
                <span className="italic text-slate-400 dark:text-slate-400">
                  Zero Cheating.
                </span>
              </h2>

            {/* Exercise Selector Tabs */}
            <div className="space-y-3 pt-2 select-none">
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase block font-semibold">
                Select Biomechanical Target
              </span>
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.08] backdrop-blur-md">
                {exercises.map((ex) => {
                  const isActive = mode === ex.id;
                  return (
                    <button
                      key={ex.id}
                      onClick={() => handleModeChange(ex.id as ExerciseMode)}
                      className={`relative py-3 px-3 rounded-xl text-xs font-mono transition-all text-center flex flex-col items-center gap-0.5 cursor-pointer z-10 ${
                        isActive ? "text-[#0A84FF] dark:text-cyan-400 font-bold" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeExercisePill"
                          className="absolute inset-0 rounded-xl bg-white dark:bg-cyan-500/15 border border-slate-200 dark:border-cyan-400/40 shadow-sm dark:shadow-cyan-950/40 -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{ex.label}</span>
                      <span className="text-[10px] opacity-75">{ex.targetAngle} Depth</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulator Interactive Action Buttons Bar */}
            <div className="p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">
                  SIMULATOR STATUS: <span className="font-bold text-[#0A84FF] dark:text-cyan-400">{isAutoSimulating ? "AUTO RUNNING (30 FPS)" : questCleared ? "QUEST COMPLETED" : "READY"}</span>
                </span>
                <button
                  onClick={toggleSound}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  title={isMuted ? "Unmute sound" : "Mute sound"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                  <span className="text-[10px]">{isMuted ? "MUTED" : "AUDIO ON"}</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleSingleRep}
                  disabled={reps >= targetReps}
                  className="flex-1 py-2.5 px-4 rounded-xl font-mono text-xs font-bold bg-[#0A84FF] hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Tap to Rep (+1)</span>
                </button>

                <button
                  onClick={toggleAutoSimulate}
                  className={`py-2.5 px-4 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                    isAutoSimulating
                      ? "bg-amber-500/20 border-amber-500/50 text-amber-500"
                      : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-cyan-500"
                  }`}
                >
                  {isAutoSimulating ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isAutoSimulating ? "Stop Sim" : "Auto Simulate"}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-all"
                  title="Reset counter"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Architecture Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200 dark:border-white/[0.08] font-mono text-xs select-none">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] space-y-1">
                <div className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Scan className="w-3 h-3 text-[#0A84FF] dark:text-cyan-400" />
                  <span>TRACKING</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white">33 Keypoints</div>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] space-y-1">
                <div className="text-slate-400 text-[10px] flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#0A84FF] dark:text-cyan-400" />
                  <span>LATENCY</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white">&lt; 16ms Local</div>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] space-y-1">
                <div className="text-slate-400 text-[10px] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>PRIVACY</span>
                </div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400">100% On-Device</div>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Interactive Mockup with AI Neural Skeleton Tracking Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <Interactive3DTilt maxAngle={8} className="w-full max-w-[340px] sm:max-w-[380px]">
              <DeviceMockup showStatusBar={false}>
                <div className="relative w-full h-full bg-[#030712] flex flex-col justify-between p-6 text-white select-none overflow-hidden group">
                  
                  {/* Backdrop AI Workout Chamber Visual */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/visuals/ai_pose_tracker.jpg"
                      alt="ARISE AI Computer Vision Skeleton Tracking"
                      fill
                      priority
                      className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-[#030712]/80" />
                  </div>

                  {/* Top Essential Telemetry Overlay */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-xl bg-black/75 border border-cyan-500/30 backdrop-blur-md shadow-lg">
                      <div className="text-xs font-mono font-bold text-cyan-400">
                        {activeExercise.targetAngle}
                      </div>
                      <div className="text-[8px] font-mono text-slate-300">
                        TARGET DEPTH
                      </div>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl bg-black/75 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono font-bold shadow-lg">
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>30 FPS VERIFIED</span>
                    </div>
                  </div>

                  {/* Center HUD: Live Dynamic Rep Circular Progress & Celebration Banner */}
                  <div className="relative w-full h-48 z-10 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      {questCleared ? (
                        <motion.div
                          key="cleared"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-400/60 text-center space-y-2 shadow-2xl backdrop-blur-md"
                        >
                          <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                            <Trophy className="w-5 h-5" />
                          </div>
                          <div className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>QUEST CLEARED!</span>
                          </div>
                          <div className="text-xs text-white font-mono font-bold">
                            +50 EXP &amp; +10 MANA CRYSTALS
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="counter"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="relative w-32 h-32 flex items-center justify-center"
                        >
                          {/* SVG Radial Progress */}
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="8"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#00D2EE"
                              strokeWidth="8"
                              strokeDasharray="264"
                              strokeDashoffset={264 - (264 * progressPercent) / 100}
                              strokeLinecap="round"
                              transition={{ duration: 0.3 }}
                            />
                          </svg>

                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-3xl font-black font-mono text-white tracking-tight">
                              {reps}
                            </div>
                            <div className="text-[9px] font-mono text-cyan-400 font-bold">
                              / {targetReps} REPS
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Rep Counter Bar */}
                  <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between bg-black/75 p-3 rounded-xl backdrop-blur-md">
                    <div>
                      <div className="text-[9px] font-mono text-slate-300 tracking-wider uppercase">
                        {activeExercise.label} PROGRESS
                      </div>
                      <div className="text-lg font-bold font-mono text-white">
                        {progressPercent}% COMPLETED
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] font-mono text-slate-300 tracking-wider">ACCURACY</div>
                      <div className="text-sm font-mono font-bold text-emerald-400">{activeExercise.accuracy}</div>
                    </div>
                  </div>

                </div>
              </DeviceMockup>
            </Interactive3DTilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
}