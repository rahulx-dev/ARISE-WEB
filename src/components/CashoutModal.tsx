"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Zap, Gift, Gamepad2, Coins, Wallet } from "lucide-react";
import confetti from "canvas-confetti";

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
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTxId(`TXN_ARISE_${Math.floor(100000 + Math.random() * 900000)}`);

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
    }, 1200);
  };

  const handleReset = () => {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            className="relative w-full max-w-lg glass-panel border border-slate-200 dark:border-white/[0.12] rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#050811]/98 text-slate-900 dark:text-slate-100 shadow-2xl shadow-slate-300/60 dark:shadow-emerald-950/40 z-10 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-arise-emerald to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-arise-emerald animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-arise-emerald font-bold uppercase">
                    SYSTEM REWARDS // REDEMPTION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Mana Crystals Cashout Portal
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleWithdraw} className="space-y-5">
                {/* Method selector */}
                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                    Choose Payout / Utility Method
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("upi");
                        setAddress("hunter.solo@okhdfcbank");
                      }}
                      className={`flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl border text-xs font-medium transition-all ${
                        method === "upi"
                          ? "border-emerald-500 bg-emerald-500/15 dark:bg-arise-emerald/10 text-emerald-700 dark:text-arise-emerald font-bold shadow-sm"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      <span className="text-[11px] font-semibold">Direct UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("amazon");
                        setAddress("hunter.discipline@gmail.com");
                      }}
                      className={`flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl border text-xs font-medium transition-all ${
                        method === "amazon"
                          ? "border-amber-500 bg-amber-500/15 dark:bg-arise-gold/10 text-amber-700 dark:text-arise-gold font-bold shadow-sm"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <Gift className="w-4 h-4" />
                      <span className="text-[11px] font-semibold">Amazon Pay</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("google_play");
                        setAddress("hunter.discipline@gmail.com");
                      }}
                      className={`flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl border text-xs font-medium transition-all ${
                        method === "google_play"
                          ? "border-cyan-500 bg-cyan-500/15 dark:bg-arise-cyan/10 text-cyan-700 dark:text-arise-cyan font-bold shadow-sm"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <Gamepad2 className="w-4 h-4" />
                      <span className="text-[11px] font-semibold">Google Play</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("coins");
                        setAddress("Current Hunter Account (In-App)");
                      }}
                      className={`flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl border text-xs font-medium transition-all ${
                        method === "coins"
                          ? "border-purple-500 bg-purple-500/15 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 font-bold shadow-sm"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <Coins className="w-4 h-4" />
                      <span className="text-[11px] font-semibold">Game Coins</span>
                    </button>
                  </div>
                </div>

                {/* Address input */}
                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:border-arise-emerald transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Crystal Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Mana Crystals to Convert
                    </label>
                    <span className="font-mono text-xs text-emerald-600 dark:text-arise-emerald font-bold">
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
                    className="w-full accent-arise-emerald cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                    <span>Min: 200 (₹20)</span>
                    <span>Max: 5,000 (₹500)</span>
                  </div>
                </div>

                {/* Conversion Preview Card */}
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">You Receive</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                      {getPayoutSummary()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Speed</div>
                    <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 justify-end">
                      <span>24–48 Hours (Audited)</span>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-75 cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
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

                <p className="text-[11px] text-slate-400 text-center font-mono">
                  Guaranteed zero processing fees • Credited within 24–48h • 10 Mana = ₹1 INR
                </p>
              </form>
            ) : (
              /* Success Receipt */
              <div className="space-y-5 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-arise-emerald">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Redemption Request Queued!</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    Your payout of <span className="text-white font-semibold">{getPayoutSummary()}</span> will be credited to
                  </p>
                  <p className="font-mono text-arise-cyan text-sm font-semibold mt-0.5">{address}</p>
                  <p className="text-xs text-amber-400 mt-1">Estimated Delivery: Within 24 to 48 Hours</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-400">
                    <span>Transaction ID:</span>
                    <span className="text-white">{txId}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Gateway:</span>
                    <span className="text-white uppercase">{method.replace("_", " ")} Verified Rail</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Platform Fee:</span>
                    <span className="text-arise-emerald">₹0.00 (Zero Fee)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Status:</span>
                    <span className="text-amber-400 font-bold">QUEUED FOR DISPATCH (24-48H)</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors cursor-pointer"
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
