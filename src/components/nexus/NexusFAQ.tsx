"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { sound } from "@/lib/audio";

export default function NexusFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does ARISE upload or stream my camera feed to any server?",
      a: "Never. Absolute zero bytes of camera imagery leave your handset. ARISE loads an on-device TensorFlow Lite computer vision model directly into your smartphone's NPU/GPU. The camera stream is analyzed in local memory to extract 17 numeric joint coordinates and immediately discarded at 30 FPS.",
    },
    {
      q: "How does the Gate Guardian App Lock Toll work?",
      a: "Gate Guardian utilizes standard Android Accessibility and Usage Stats permissions. When you attempt to launch a blacklisted distraction app (e.g., Instagram, YouTube, Reddit), ARISE intercepts the screen and presents an interactive workout toll. You must complete your designated reps (e.g. 15 push-ups) verified by AI to unlock the app for a set window.",
    },
    {
      q: "How do Mana Crystal to Real Cash payouts work?",
      a: "As you complete daily system quests, maintain workout streaks, and clear dungeon bosses, you accumulate Mana Crystals. In the Rewards tab, you can redeem your crystals directly to your bank account via UPI ID, Amazon Gift Card code, or Google Play balance. Processing is automated and settles within 15 minutes.",
    },
    {
      q: "Can I use ARISE without an internet connection?",
      a: "Yes! 100% of the AI pose tracking, workout logging, Gate Guardian app locks, and daily quest checks operate fully offline. Internet is only required when you initiate a Mana Crystal cashout or sync your leaderboard rank.",
    },
    {
      q: "What exercises can the AI vision currently track?",
      a: "ARISE v2.4 supports standard push-ups, diamond push-ups, bodyweight squats, jumping jacks, lunges, and planks. Our neural network verifies full extension, proper depth, and chest contact to prevent half-rep cheating.",
    },
    {
      q: "Will ARISE drain my smartphone battery?",
      a: "Our lightweight edge model utilizes hardware-accelerated INT8 quantization, using less than 4% battery for a complete 30-minute workout session. Background Gate Guardian monitoring consumes virtually zero idle battery.",
    },
    {
      q: "How do I install ARISE on my Android device?",
      a: "Click the 'Download APK' button on this site. Once downloaded, tap the APK file and select 'Allow installation from this source' if prompted by Android. The app requires no root access and takes only 24MB of storage.",
    },
    {
      q: "Is there an iOS version available?",
      a: "An iOS version is currently available via Apple TestFlight for beta hunters. You can join the iOS queue by submitting your Apple ID in the download modal.",
    },
  ];

  const toggle = (idx: number) => {
    sound.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            07 // SYSTEM PROTOCOL FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
            Frequently Answered.
          </h2>
          <p className="font-body text-mist-400 text-base">
            Everything you need to know about our privacy architecture, AI vision, and reward payouts.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-ink-900 overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-display font-bold text-lg sm:text-xl text-mist-100">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full border transition-colors shrink-0 ${
                    isOpen ? "bg-signal text-ink-950 border-signal" : "border-white/10 text-mist-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-2 font-body text-mist-400 text-sm sm:text-base leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
