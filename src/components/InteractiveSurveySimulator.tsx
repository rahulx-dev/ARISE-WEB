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
    { label: "Build Raw Strength & Muscle", icon: Dumbbell, bonus: "+50 MANA" },
    { label: "High-Intensity Fat Loss & Stamina", icon: Zap, bonus: "+50 MANA" },
    { label: "Overcome Phone & App Addiction", icon: Shield, bonus: "+50 MANA" },
    { label: "Level Up RPG Hunter Stats Daily", icon: Swords, bonus: "+50 MANA" },
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
        colors: ["#9AAEFF", "#F5F5F2", "#747BFF"],
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
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#0E1115] p-6 sm:p-7 shadow-2xl shadow-black/60 relative overflow-hidden select-none">
      {/* Top Banner */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9AAEFF] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-[#9AAEFF] font-bold uppercase">
            LIVE REWARD SIMULATOR
          </span>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#A6A9AE] font-semibold flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-[#9AAEFF]" />
          <span>Payouts in 24–48h</span>
        </div>
      </div>

      {/* Survey Prompt */}
      <div className="py-4">
        <h4 className="text-base sm:text-lg font-semibold text-[#F5F5F2] leading-snug">
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
                  ? "border-[#9AAEFF] bg-[#9AAEFF]/10 text-[#F5F5F2] font-bold shadow-lg shadow-black/40"
                  : isCompleted
                  ? "border-white/[0.04] bg-white/[0.02] text-[#6F747B] cursor-default"
                  : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2] hover:bg-[#13171C]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${isSelected ? "bg-[#9AAEFF]/20 text-[#9AAEFF]" : "bg-white/[0.05] text-[#A6A9AE]"}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="font-sans font-medium text-xs sm:text-sm">
                  {opt.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-mono font-bold ${isSelected ? "text-[#9AAEFF]" : "text-[#A6A9AE]"}`}>
                  {opt.bonus}
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#9AAEFF]" />}
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
            className="mt-5 pt-4 border-t border-white/10 space-y-4"
          >
            <div className="p-4 rounded-2xl bg-[#13171C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#9AAEFF]/10 border border-[#9AAEFF]/20 flex items-center justify-center text-[#9AAEFF]">
                  <Sparkles className="w-5 h-5 animate-spin" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F5F5F2] flex items-center gap-2 font-mono">
                    <span>+{manaEarned} MANA ADDED (₹5.00 INR)</span>
                  </div>
                  <div className="text-[11px] text-[#A6A9AE] font-sans">
                    Survey audited & approved • Redeemable in 24–48 Hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl border border-white/10 hover:bg-white/10 text-[#A6A9AE] hover:text-[#F5F5F2] transition-colors cursor-pointer"
                  title="Try Again"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                {onOpenCashout && (
                  <button
                    onClick={onOpenCashout}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#F5F5F2] hover:bg-white text-[#050607] font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
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
