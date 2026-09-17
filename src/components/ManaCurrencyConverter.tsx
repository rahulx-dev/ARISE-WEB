"use client";

import React, { useState } from "react";
import { Zap, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { sound } from "@/lib/audio";

export default function ManaCurrencyConverter({ onOpenCashout }: { onOpenCashout?: (crystals?: number) => void }) {
  const [manaAmount, setManaAmount] = useState(2500);

  const inrValue = (manaAmount / 10).toFixed(0);
  const coinsValue = (manaAmount * 10).toLocaleString();

  const handleSliderChange = (val: number) => {
    setManaAmount(val);
    if (val % 1000 === 0) {
      sound.playClick();
    }
  };

  const handlePreset = (amount: number) => {
    setManaAmount(amount);
    sound.playClick();
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/[0.08] bg-[#070B16]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl shadow-black/40 space-y-5 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono tracking-wider text-white font-bold uppercase">
            MANA CONVERTER
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>SLA: 24–48 Hours</span>
        </div>
      </div>

      {/* Slider Control & Direct Number Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono">
          <span className="text-xs text-slate-400 font-semibold">ENTER MANA CRYSTALS:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              min={100}
              max={50000}
              step={100}
              value={manaAmount}
              onChange={(e) => setManaAmount(Math.max(100, Math.min(50000, Number(e.target.value) || 0)))}
              className="w-28 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-right font-mono font-bold text-sm text-cyan-400 focus:outline-none focus:border-cyan-500"
            />
            <span className="text-xs font-mono font-bold text-slate-400">MANA</span>
          </div>
        </div>

        <input
          type="range"
          min={500}
          max={50000}
          step={500}
          value={manaAmount}
          onChange={(e) => handleSliderChange(Number(e.target.value))}
          className="w-full h-2 rounded-lg bg-white/10 accent-emerald-400 cursor-pointer"
        />

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-xs">
          {[1000, 2500, 5000, 10000, 25000].map((preset) => (
            <button
              key={preset}
              onClick={() => handlePreset(preset)}
              className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all cursor-pointer ${
                manaAmount === preset
                  ? "bg-white text-black font-bold border-white"
                  : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {preset.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Live Value Preview Cards */}
      <div className="grid grid-cols-2 gap-3 pt-1 font-mono">
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1">
          <div className="text-[10px] text-slate-400 uppercase">REAL CASH PAYOUT</div>
          <div className="text-2xl font-bold text-emerald-400">₹{inrValue} INR</div>
          <div className="text-[10px] text-emerald-300 font-sans">UPI / Amazon / Google Play</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-center space-y-1">
          <div className="text-[10px] text-slate-400 uppercase">IN-GAME CONVERSION</div>
          <div className="text-2xl font-bold text-purple-300">{coinsValue}</div>
          <div className="text-[10px] text-purple-300 font-sans">Hunter RPG Coins</div>
        </div>
      </div>

      {/* Trust & Timeline Badge */}
      <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-300">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Audited Payout Protocol</span>
        </div>
        <div className="text-amber-400 font-semibold flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>24 to 48 Hours Delivery</span>
        </div>
      </div>

      {onOpenCashout && (
        <button
          onClick={() => {
            sound.playCashout();
            onOpenCashout(manaAmount);
          }}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 cursor-pointer"
        >
          <Zap className="w-4 h-4" />
          <span>Simulate ₹{inrValue} Cashout Redemption</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
