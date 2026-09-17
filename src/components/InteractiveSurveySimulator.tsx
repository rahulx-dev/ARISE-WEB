"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Clock, ArrowRight, RotateCcw, Dumbbell, Zap, Shield, Swords } from "lucide-react";
import confetti from "canvas-confetti";

export default function InteractiveSurveySimulator({ onOpenCashout }: { onOpenCashout?: () => void }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [manaEarned, setManaEarned] = useState(0);

  const question = "Sample Quest: What is your primary physical training focus?";
  const options = [
    { label: "Build Raw Strength & Muscle", icon: Dumbbell, color: "text-blue-500", bonus: "+50 MANA" },
    { label: "High-Intensity Fat Loss & Stamina", icon: Zap, color: "text-amber-500", bonus: "+50 MANA" },
    { label: "Overcome Phone & App Addiction", icon: Shield, color: "text-emerald-500", bonus: "+50 MANA" },
    { label: "Level Up RPG Hunter Stats Daily", icon: Swords, color: "text-cyan-400", bonus: "+50 MANA" },
  ];

  const handleSelect = (idx: number) => {
    if (isCompleted) return;
    setSelectedOption(idx);
    setIsCompleted(true);
    setManaEarned(50);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#10b981", "#ffffff", "#f59e0b"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsCompleted(false);
    setManaEarned(0);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/[0.08] bg-[#070B16]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl shadow-black/40 relative overflow-hidden select-none">
      {/* Top Banner */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
            LIVE INTERACTIVE REWARD SIMULATOR
          </span>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300 font-semibold flex items-center gap-1">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>Payouts in 24–48h</span>
        </div>
      </div>

      {/* Survey Prompt */}
      <div className="py-4">
        <h4 className="text-base sm:text-lg font-semibold text-white leading-snug">
          {question}
        </h4>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const IconComponent = opt.icon;
          return (
            <motion.button
              key={idx}
              whileHover={!isCompleted ? { scale: 1.015, x: 2 } : {}}
              whileTap={!isCompleted ? { scale: 0.985 } : {}}
              onClick={() => handleSelect(idx)}
              disabled={isCompleted}
              className={`w-full p-3.5 rounded-2xl border text-left text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                isSelected
                  ? "border-emerald-500 bg-emerald-500/20 text-white shadow-lg shadow-emerald-950/50 font-bold"
                  : isCompleted
                  ? "border-white/[0.04] bg-white/[0.02] text-slate-500 cursor-default"
                  : "border-white/[0.08] bg-white/[0.03] text-slate-300 hover:border-emerald-500/40 hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg bg-white/10 ${opt.color}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-slate-200 text-xs sm:text-sm">
                  {opt.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold">
                  {opt.bonus}
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Animated Completion Card */}
      <AnimatePresence>
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 pt-4 border-t border-white/[0.08] space-y-4"
          >
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-5 h-5 animate-spin" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                    <span>+{manaEarned} MANA ADDED (₹5.00 INR)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-sans">
                    Survey audited & approved • Redeemable in 24–48 Hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl border border-white/10 hover:bg-white/10 text-slate-300 transition-colors"
                  title="Try Again"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                {onOpenCashout && (
                  <button
                    onClick={onOpenCashout}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/20 cursor-pointer"
                  >
                    <span>Simulate Cashout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
