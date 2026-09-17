"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Flame, Sparkles, Trophy, Clock, Zap, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/audio";

interface QuestItem {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
  step: number;
}

export default function DailyQuestBoard() {
  const [quests, setQuests] = useState<QuestItem[]>([
    { id: "pushups", name: "Push-ups", target: 100, current: 70, unit: "reps", step: 10 },
    { id: "situps", name: "Sit-ups", target: 100, current: 80, unit: "reps", step: 10 },
    { id: "squats", name: "Squats", target: 100, current: 100, unit: "reps", step: 10 },
    { id: "running", name: "Running Exertion", target: 10, current: 6, unit: "km", step: 1 },
  ]);

  const [claimed, setClaimed] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const totalProgress = Math.round(
    (quests.reduce((acc, q) => acc + Math.min(q.current / q.target, 1), 0) / quests.length) * 100
  );

  const isAllComplete = quests.every((q) => q.current >= q.target);

  const incrementQuest = (id: string) => {
    sound.playClick();
    setQuests((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const nextVal = Math.min(q.current + q.step, q.target);
          return { ...q, current: nextVal };
        }
        return q;
      })
    );
  };

  const completeAll = () => {
    sound.playLevelUp();
    setQuests((prev) => prev.map((q) => ({ ...q, current: q.target })));
  };

  const resetQuests = () => {
    sound.playClick();
    setQuests([
      { id: "pushups", name: "Push-ups", target: 100, current: 0, unit: "reps", step: 10 },
      { id: "situps", name: "Sit-ups", target: 100, current: 0, unit: "reps", step: 10 },
      { id: "squats", name: "Squats", target: 100, current: 0, unit: "reps", step: 10 },
      { id: "running", name: "Running Exertion", target: 10, current: 0, unit: "km", step: 1 },
    ]);
    setClaimed(false);
    setShowCelebration(false);
  };

  const handleClaim = () => {
    sound.playCashout();
    setClaimed(true);
    setShowCelebration(true);

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00D2EE", "#0A84FF", "#10B981", "#F59E0B"],
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-white/[0.08] bg-[#070B16]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-black/70 relative overflow-hidden select-none space-y-8">
      {/* Specular Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0A84FF] to-transparent opacity-80" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Solo Leveling System Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
            DAILY QUESTS
          </h3>
        </div>

        {/* Penalty Timer Warning */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs self-start sm:self-auto shrink-0">
          <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          <div>
            <div className="text-[10px] text-amber-400 uppercase tracking-wider">PENALTY ZONE IN</div>
            <div className="font-bold text-xs">04H : 18M : 42S</div>
          </div>
        </div>
      </div>

      {/* Progress Metric Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400 uppercase tracking-wider">
            OVERALL COMPLETION STATUS
          </span>
          <span className="font-bold text-white">
            {totalProgress}% COMPLETED
          </span>
        </div>
        <div className="w-full h-3 rounded-full bg-white/[0.04] border border-white/10 overflow-hidden p-0.5">
          <motion.div
            className={`h-full rounded-full transition-all duration-500 ${
              totalProgress === 100
                ? "bg-gradient-to-r from-emerald-500 to-[#0A84FF] shadow-[0_0_12px_rgba(10,132,255,0.6)]"
                : "bg-gradient-to-r from-[#0A84FF] to-cyan-400"
            }`}
            animate={{ width: `${totalProgress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      {/* Quest Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quests.map((quest) => {
          const isDone = quest.current >= quest.target;
          const percent = Math.round((quest.current / quest.target) * 100);

          return (
            <div
              key={quest.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                isDone
                  ? "bg-emerald-950/20 border-emerald-500/30"
                  : "bg-white/[0.03] border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                      isDone
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : "bg-blue-500/10 text-cyan-400 border border-blue-500/20"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono">
                      {quest.name}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Target: {quest.target} {quest.unit}
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className={`text-base font-bold ${isDone ? "text-emerald-400" : "text-white"}`}>
                    [{quest.current}/{quest.target}]
                  </div>
                  <div className="text-[10px] text-slate-400">{percent}%</div>
                </div>
              </div>

              {/* Incremental Rep Tap Button */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isDone ? "bg-emerald-500" : "bg-[#0A84FF]"
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {!isDone ? (
                  <button
                    onClick={() => incrementQuest(quest.id)}
                    className="px-3 py-1 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-cyan-400 font-mono text-xs font-bold cursor-pointer transition-all active:scale-95 whitespace-nowrap"
                  >
                    +{quest.step} {quest.unit}
                  </button>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                    COMPLETED
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Controls & Claim Rewards */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={completeAll}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/40 text-xs font-mono text-slate-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Simulate 100% Reps</span>
          </button>
          <button
            onClick={resetQuests}
            className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Reset simulation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Claim Rewards Button */}
        {isAllComplete && !claimed ? (
          <motion.button
            onClick={handleClaim}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-[#0A84FF] to-blue-600 text-white font-mono font-bold text-xs tracking-wider uppercase shadow-lg shadow-blue-500/25 cursor-pointer flex items-center justify-center gap-2 animate-pulse"
          >
            <Trophy className="w-4 h-4" />
            <span>CLAIM REWARD // +500 MANA CRYSTALS</span>
          </motion.button>
        ) : claimed ? (
          <div className="w-full sm:w-auto px-5 py-2 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>REWARD CLAIMED // +500 MANA (₹50.00)</span>
          </div>
        ) : (
          <div className="text-xs font-mono text-slate-400 text-center sm:text-right">
            Complete all 4 quests to unlock daily Mana loot drop
          </div>
        )}
      </div>

      {/* Level Up Celebration Popup */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="p-5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-emerald-600/20 to-blue-600/20 border border-[#0A84FF]/40 text-center space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>[QUEST CLEARED // LEVEL UP!]</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">
              You earned +500 Mana Crystals &amp; +1,000 Hunter EXP
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Mana Crystals are redeemable for direct UPI / Amazon Cashout (24–48h verified delivery).
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
