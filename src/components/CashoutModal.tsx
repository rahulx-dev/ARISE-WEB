"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Zap, Gift, Gamepad2, Coins, Wallet } from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/audio";

interface CashoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCrystals?: number;
}

export default function CashoutModal({ isOpen, onClose, initialCrystals = 1500 }: CashoutModalProps) {
  const [method, setMethod] = useState<"upi" | "amazon" | "google_play" | "coins">("upi");
  const [address, setAddress] = useState("hunter.solo@okhdfcbank");
  const [crystals, setCrystals] = useState(initialCrystals);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [txId, setTxId] = useState("");

  const inrAmount = (crystals / 10).toFixed(0);
  const coinsAmount = (crystals * 10).toLocaleString();

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTxId(`TXN_ARISE_${Math.floor(100000 + Math.random() * 900000)}`);
      sound.playCashout();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#f59e0b", "#00d2ee", "#10b981", "#ffffff"],
        });
      } catch {
        // Confetti fallback
      }
    }, 1000);
  };

  const handleReset = () => {
    sound.playClick();
    setIsSuccess(false);
    onClose();
  };

  const getPayoutSummary = () => {
    if (method === "coins") return `${coinsAmount} Hunter Coins`;
    if (method === "amazon") return `₹${inrAmount} Amazon Pay Voucher`;
    if (method === "google_play") return `₹${inrAmount} Google Play Code`;
    return `₹${inrAmount} Direct UPI Cash`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg border border-slate-200 dark:border-white/[0.12] rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#070B16] text-slate-900 dark:text-slate-100 shadow-2xl shadow-slate-300/60 dark:shadow-emerald-950/40 z-10 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                    SYSTEM REWARDS // REDEMPTION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Mana Crystals Cashout Portal
                </h3>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleWithdraw} className="space-y-5">
                {/* Method selector */}
                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    Choose Payout / Utility Method
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMethod("upi");
                        setAddress("hunter.solo@okhdfcbank");
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        method === "upi"
                          ? "border-emerald-500 bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm"
                          : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                      }`}
                    >
                      <Zap className="w-4 h-4 text-emerald-500" />
                      <span className="text-[11px] font-semibold">Direct UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMethod("amazon");
                        setAddress("hunter.discipline@gmail.com");
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        method === "amazon"
                          ? "border-amber-500 bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold shadow-sm"
                          : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                      }`}
                    >
                      <Gift className="w-4 h-4 text-amber-500" />
                      <span className="text-[11px] font-semibold">Amazon Pay</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMethod("google_play");
                        setAddress("hunter.discipline@gmail.com");
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        method === "google_play"
                          ? "border-cyan-500 bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold shadow-sm"
                          : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                      }`}
                    >
                      <Gamepad2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-[11px] font-semibold">Google Play</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setMethod("coins");
                        setAddress("Current Hunter Account (In-App)");
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                        method === "coins"
                          ? "border-purple-500 bg-purple-500/15 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-bold shadow-sm"
                          : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                      }`}
                    >
                      <Coins className="w-4 h-4 text-purple-400" />
                      <span className="text-[11px] font-semibold">Game Coins</span>
                    </button>
                  </div>
                </div>

                {/* Address input */}
                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    {method === "upi"
                      ? "VPA / UPI ID (GPay / PhonePe / Paytm / BHIM)"
                      : method === "amazon"
                      ? "Email for Amazon Gift Voucher Delivery"
                      : method === "google_play"
                      ? "Email for Google Play Redeem Code"
                      : "Target Hunter Profile"}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    disabled={method === "coins"}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Crystal Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Mana Crystals to Convert
                    </label>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                      {crystals.toLocaleString()} Crystals
                    </span>
                  </div>
                  <input
                    type="range"
                    min={200}
                    max={5000}
                    step={100}
                    value={crystals}
                    onChange={(e) => setCrystals(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                    <span>Min: 200 (₹20)</span>
                    <span>Max: 5,000 (₹500)</span>
                  </div>
                </div>

                {/* Conversion Preview Card */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">You Receive</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                      {getPayoutSummary()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Speed</div>
                    <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 justify-end">
                      <span>24–48 Hours (Audited)</span>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Redemption Request...</span>
                    </>
                  ) : (
                    <>
                      <Wallet className="w-4 h-4" />
                      <span>Redeem {crystals.toLocaleString()} Crystals</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-mono">
                  Guaranteed zero processing fees • Credited within 24–48h • 10 Mana = ₹1 INR
                </p>
              </form>
            ) : (
              /* Success Receipt with 100% Dual Theme Perfection */
              <div className="space-y-5 text-center py-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Redemption Request Queued!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Your payout of <span className="text-slate-900 dark:text-white font-semibold">{getPayoutSummary()}</span> will be credited to
                  </p>
                  <p className="font-mono text-[#0A84FF] dark:text-cyan-400 text-sm font-semibold mt-0.5">{address}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1 font-semibold">Estimated Delivery: Within 24 to 48 Hours</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Transaction ID:</span>
                    <span className="text-slate-900 dark:text-white font-bold">{txId}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Gateway:</span>
                    <span className="text-slate-900 dark:text-white uppercase font-semibold">{method.replace("_", " ")} Rail</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Platform Fee:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">₹0.00 (Zero Fee)</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Status:</span>
                    <span className="text-amber-600 dark:text-amber-400 font-bold">QUEUED FOR DISPATCH (24-48H)</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-black font-semibold text-sm transition-all hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Return to Hunter System
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
