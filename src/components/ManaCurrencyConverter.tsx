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
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#0E1115] p-6 sm:p-7 shadow-2xl shadow-black/60 space-y-5 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono tracking-wider text-[#F5F5F2] font-bold uppercase">
            MANA CONVERTER
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A6A9AE] font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
          <Clock className="w-3 h-3 text-[#9AAEFF]" />
          <span>SLA: 24–48 Hours</span>
        </div>
      </div>

      {/* Slider Control & Direct Number Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono">
          <span className="text-xs text-[#A6A9AE] font-semibold">ENTER MANA CRYSTALS:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              min={100}
              max={50000}
              step={100}
              value={manaAmount}
              onChange={(e) => setManaAmount(Math.max(100, Math.min(50000, Number(e.target.value) || 0)))}
              className="w-28 px-2.5 py-1 rounded-lg bg-[#050607] border border-white/10 text-right font-mono font-bold text-sm text-[#F5F5F2] focus:outline-none focus:border-white/30"
            />
            <span className="text-xs font-mono font-bold text-[#6F747B]">MANA</span>
          </div>
        </div>

        <input
          type="range"
          min={500}
          max={50000}
          step={500}
          value={manaAmount}
          onChange={(e) => handleSliderChange(Number(e.target.value))}
          className="w-full h-2 rounded-lg bg-white/10 accent-[#9AAEFF] cursor-pointer"
        />

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-xs">
          {[1000, 2500, 5000, 10000, 25000].map((preset) => (
            <button
              key={preset}
              onClick={() => handlePreset(preset)}
              className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all cursor-pointer ${
                manaAmount === preset
                  ? "bg-[#F5F5F2] text-[#050607] font-bold border-transparent"
                  : "bg-[#050607] border-white/10 text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
              }`}
            >
              {preset.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Live Value Preview Cards */}
      <div className="grid grid-cols-2 gap-3 pt-1 font-mono">
        <div className="p-3.5 rounded-2xl bg-[#13171C] border border-white/10 text-center space-y-1">
          <div className="text-[10px] text-[#A6A9AE] uppercase">REAL CASH PAYOUT</div>
          <div className="text-2xl font-bold text-[#F5F5F2]">₹{inrValue} INR</div>
          <div className="text-[10px] text-[#6F747B] font-sans">UPI / Amazon / Google Play</div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#13171C] border border-white/10 text-center space-y-1">
          <div className="text-[10px] text-[#A6A9AE] uppercase">IN-GAME CONVERSION</div>
          <div className="text-2xl font-bold text-[#9AAEFF]">{coinsValue}</div>
          <div className="text-[10px] text-[#6F747B] font-sans">Hunter RPG Coins</div>
        </div>
      </div>

      {/* Trust & Timeline Badge */}
      <div className="p-3 rounded-2xl bg-[#050607] border border-white/10 flex items-center justify-between text-xs font-mono text-[#A6A9AE]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#9AAEFF] shrink-0" />
          <span>Audited Payout Protocol</span>
        </div>
        <div className="text-[#A6A9AE] font-semibold flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#9AAEFF]" />
          <span>24 to 48 Hours Delivery</span>
        </div>
      </div>

      {onOpenCashout && (
        <button
          onClick={() => {
            sound.playCashout();
            onOpenCashout(manaAmount);
          }}
          className="w-full py-3.5 rounded-2xl bg-[#F5F5F2] hover:bg-white text-[#050607] font-bold font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/30 cursor-pointer"
        >
          <Zap className="w-4 h-4" />
          <span>Simulate ₹{inrValue} Cashout Redemption</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
