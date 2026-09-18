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
          colors: ["#9AAEFF", "#F5F5F2", "#747BFF", "#FF6B4A"],
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg border border-white/10 rounded-3xl p-6 sm:p-8 bg-[#0E1115] text-[#F5F5F2] shadow-2xl shadow-black/80 z-10 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9AAEFF] to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#9AAEFF] animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-[#9AAEFF] font-bold uppercase">
                    SYSTEM REWARDS // REDEMPTION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#F5F5F2] flex items-center gap-2 font-display">
                  Mana Crystals Cashout Portal
                </h3>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl text-[#A6A9AE] hover:text-[#F5F5F2] hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleWithdraw} className="space-y-5">
                {/* Method selector */}
                <div>
                  <label className="text-xs font-mono text-[#A6A9AE] uppercase tracking-wider block mb-2 font-semibold">
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
                          ? "border-[#9AAEFF] bg-[#9AAEFF]/15 text-[#F5F5F2] font-bold shadow-sm"
                          : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
                      }`}
                    >
                      <Zap className="w-4 h-4 text-[#9AAEFF]" />
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
                          ? "border-[#9AAEFF] bg-[#9AAEFF]/15 text-[#F5F5F2] font-bold shadow-sm"
                          : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
                      }`}
                    >
                      <Gift className="w-4 h-4 text-[#9AAEFF]" />
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
                          ? "border-[#9AAEFF] bg-[#9AAEFF]/15 text-[#F5F5F2] font-bold shadow-sm"
                          : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
                      }`}
                    >
                      <Gamepad2 className="w-4 h-4 text-[#9AAEFF]" />
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
                          ? "border-[#9AAEFF] bg-[#9AAEFF]/15 text-[#F5F5F2] font-bold shadow-sm"
                          : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
                      }`}
                    >
                      <Coins className="w-4 h-4 text-[#9AAEFF]" />
                      <span className="text-[11px] font-semibold">Game Coins</span>
                    </button>
                  </div>
                </div>

                {/* Address input */}
                <div>
                  <label className="text-xs font-mono text-[#A6A9AE] uppercase tracking-wider block mb-2 font-semibold">
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
                    className="w-full px-4 py-3 rounded-2xl bg-[#050607] border border-white/10 text-[#F5F5F2] font-mono text-sm focus:outline-none focus:border-white/30 transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Crystal Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-[#A6A9AE] uppercase tracking-wider font-semibold">
                      Mana Crystals to Convert
                    </label>
                    <span className="font-mono text-xs text-[#9AAEFF] font-bold">
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
                    className="w-full h-2 rounded-lg bg-white/10 accent-[#9AAEFF] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#6F747B] mt-1">
                    <span>Min: 200 (₹20)</span>
                    <span>Max: 5,000 (₹500)</span>
                  </div>
                </div>

                {/* Conversion Preview Card */}
                <div className="p-4 rounded-2xl bg-[#13171C] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-[#A6A9AE] uppercase font-semibold">You Receive</div>
                    <div className="text-2xl font-bold text-[#F5F5F2] font-mono">
                      {getPayoutSummary()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-[#A6A9AE] uppercase font-semibold">Speed</div>
                    <div className="text-sm font-semibold text-[#9AAEFF] flex items-center gap-1 justify-end font-mono">
                      <span>24–48 Hours (Audited)</span>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 px-4 rounded-2xl bg-[#F5F5F2] hover:bg-white text-[#050607] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-black/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#050607] border-t-transparent rounded-full animate-spin" />
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

                <p className="text-[11px] text-[#6F747B] text-center font-mono">
                  Guaranteed zero processing fees • Credited within 24–48h • 10 Mana = ₹1 INR
                </p>
              </form>
            ) : (
              /* Success Receipt */
              <div className="space-y-5 text-center py-4">
                <div className="w-16 h-16 rounded-2xl bg-[#9AAEFF]/15 border border-[#9AAEFF]/30 flex items-center justify-center mx-auto text-[#9AAEFF]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#F5F5F2]">Redemption Request Queued!</h4>
                  <p className="text-sm text-[#A6A9AE] mt-1">
                    Your payout of <span className="text-[#F5F5F2] font-semibold">{getPayoutSummary()}</span> will be credited to
                  </p>
                  <p className="font-mono text-[#9AAEFF] text-sm font-semibold mt-0.5">{address}</p>
                  <p className="text-xs text-[#A6A9AE] mt-1 font-semibold">Estimated Delivery: Within 24 to 48 Hours</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#050607] border border-white/10 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between text-[#A6A9AE]">
                    <span>Transaction ID:</span>
                    <span className="text-[#F5F5F2] font-bold">{txId}</span>
                  </div>
                  <div className="flex justify-between text-[#A6A9AE]">
                    <span>Gateway:</span>
                    <span className="text-[#F5F5F2] uppercase font-semibold">{method.replace("_", " ")} Rail</span>
                  </div>
                  <div className="flex justify-between text-[#A6A9AE]">
                    <span>Platform Fee:</span>
                    <span className="text-[#9AAEFF] font-bold">₹0.00 (Zero Fee)</span>
                  </div>
                  <div className="flex justify-between text-[#A6A9AE]">
                    <span>Status:</span>
                    <span className="text-[#F5F5F2] font-bold">QUEUED FOR DISPATCH (24-48H)</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#F5F5F2] hover:bg-white text-[#050607] font-semibold text-sm transition-all hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shadow-md"
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
