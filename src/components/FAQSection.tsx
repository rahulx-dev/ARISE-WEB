"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, WifiOff, HardDrive, DollarSign, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";

interface FAQItem {
  tag: string;
  category: "all" | "privacy" | "offline" | "rewards" | "ai";
  icon: React.ElementType;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    tag: "PRIVACY & LOCAL STORAGE",
    category: "privacy",
    icon: HardDrive,
    question: "Is my personal data and camera feed 100% safe?",
    answer:
      "Yes, 100%. All your data is stored strictly on your local device (localStorage / SQLite). The BlazePose AI computer vision model executes 100% on-device in volatile RAM. Camera frames never leave your phone, and zero telemetry, habit, or workout data is ever uploaded to remote servers.",
  },
  {
    tag: "OFFLINE & NETWORK PROTOCOL",
    category: "offline",
    icon: WifiOff,
    question: "Does ARISE work completely offline without internet?",
    answer:
      "Yes! ARISE is 100% offline-first. You can track workouts with AI camera vision, level up your hunter stats, fight dungeon bosses, and unlock locked apps completely offline (even in Airplane Mode). Internet connection is strictly needed ONLY when: (1) Completing brand surveys to earn Mana Crystals, and (2) Requesting reward payouts.",
  },
  {
    tag: "REWARDS & CASHOUT",
    category: "rewards",
    icon: DollarSign,
    question: "How do I earn Mana Crystals and how can I withdraw money?",
    answer:
      "You earn Mana Crystals by completing verified brand surveys and daily quests (10 Mana = ₹1 INR). You can redeem your crystals for: (1) Direct UPI Bank Transfer, (2) Amazon Pay Gift Cards, (3) Google Play Redeem Codes, or (4) Convert them into In-Game Coins. Payouts undergo automated quality verification and are credited securely within 24 to 48 hours.",
  },
  {
    tag: "100% FREE MANIFESTO",
    category: "privacy",
    icon: ShieldCheck,
    question: "Is ARISE truly free, or will it charge subscriptions later?",
    answer:
      "ARISE is 100% free and will NEVER sell paid premium subscriptions or lock features behind paywalls. The platform sustains itself purely through optional partner surveys that directly reward users with real cash.",
  },
  {
    tag: "AI COMPUTER VISION",
    category: "ai",
    icon: Sparkles,
    question: "How does the AI rep tracker verify workouts?",
    answer:
      "ARISE uses a lightweight, on-device Google MediaPipe BlazePose neural model running at 30 FPS. It calculates real-time joint angles (e.g. 90° knee angle for squats, elbow flexion for pushups) to ensure true rep form without cheating.",
  },
  {
    tag: "GATE GUARDIAN SECURITY",
    category: "privacy",
    icon: ShieldCheck,
    question: "How does the Gate Guardian lock restricted apps without draining battery?",
    answer:
      "Gate Guardian uses native Android accessibility privilege triggers that sleep in background state with zero CPU polling until a restricted app package is detected in the foreground. Total battery overhead is under 1.8% over a 24-hour cycle.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    sound.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 sm:py-40 relative overflow-hidden select-none bg-[#050607]">
      {/* Anchor for Privacy Navigation */}
      <div id="privacy" className="absolute -top-24 left-0" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.01] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16 select-none">
          <div className="text-xs font-mono tracking-[0.25em] text-[#6F747B] uppercase">
            TRANSPARENCY &amp; PROTOCOL
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-[#F5F5F2]">
            Frequently Asked <br />
            <span className="italic text-[#A6A9AE]">
              Questions.
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;

            return (
              <motion.div
                key={idx}
                initial={false}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#10141A] border-white/[0.12] shadow-xl shadow-black/40"
                    : "bg-[#0B0E12] border-white/[0.09] hover:bg-[#10141A] hover:border-white/[0.14]"
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2 rounded-xl shrink-0 mt-0.5 transition-colors ${
                        isOpen
                          ? "bg-[#9AAEFF]/15 text-[#9AAEFF]"
                          : "bg-white/[0.04] text-[#7D838B]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#9AAEFF] uppercase font-semibold block mb-1">
                        {faq.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F5F2] font-sans">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg border border-white/10 text-[#7D838B] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#F5F5F2] border-white/25" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#7D838B] leading-relaxed font-sans border-t border-white/[0.06] mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
