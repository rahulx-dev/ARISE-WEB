"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function AriseFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is ARISE?",
      a: "ARISE is a real-life gamification and discipline ecosystem. It combines on-device AI computer vision fitness tracking, strict app blocking (Focus Shield), daily RPG quests, and a Mana reward economy to help you turn physical effort into measurable personal progression.",
    },
    {
      q: "How does the AI fitness tracker work?",
      a: "ARISE loads an on-device neural vision model into your device's hardware memory. As you position your camera, the model tracks 17 anatomical joint landmarks at 30 FPS to calculate movement angles, depth, and full repetition completion in real time.",
    },
    {
      q: "Why does ARISE need Camera permission?",
      a: "Camera access is used exclusively during active workout tracking sessions to detect your skeletal coordinates. The camera feed is analyzed locally in volatile RAM and is never recorded, saved to disk, or transmitted over the internet.",
    },
    {
      q: "Why does ARISE need Usage Access?",
      a: "Usage Access allows ARISE to detect when you attempt to launch designated distraction applications (such as Instagram, YouTube, or mobile games) so that Focus Shield can activate and prompt for your physical toll.",
    },
    {
      q: "Why does ARISE need Accessibility permission?",
      a: "Accessibility permission allows ARISE to reliably display the Focus Gate overlay directly over blocked applications until the required exercise repetitions or quest requirements are satisfied.",
    },
    {
      q: "Does ARISE work offline?",
      a: "Yes. All core systems—including AI pose verification, workout counting, Focus Shield app locking, and daily quest tracking—function 100% offline without an active data connection.",
    },
    {
      q: "Which Android versions are supported?",
      a: "ARISE is optimized for Android 8.0 (Oreo) and above. It runs smoothly on modern multi-core devices with hardware-accelerated NPU/GPU architecture.",
    },
    {
      q: "Is my camera footage uploaded?",
      a: "No. Zero bytes of image or video data leave your phone. Exercise vision processing is performed entirely on-device, ensuring complete privacy in your home or gym.",
    },
    {
      q: "How does screen-time unlocking work?",
      a: "When you attempt to open a blocked app, ARISE intercepts the screen with a Focus Gate. Completing a set of physical exercises (e.g. 20 push-ups) satisfies the toll and grants you a timed window of intentional screen access.",
    },
    {
      q: "How does the reward system work?",
      a: "Every verified workout, daily quest completion, and dungeon raid awards Experience Points (XP) and Mana Crystals. As you level up your Hunter Rank, your daily multiplier increases.",
    },
    {
      q: "How are rewards redeemed?",
      a: "Accumulated Mana Crystals can be spent within the app to purchase focused screen-time passes, unlock custom UI themes, or redeem eligible partner rewards and vouchers where available.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>FREQUENTLY ANSWERED</span>
          </div>
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Frequently Answered.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
            Essential information regarding permissions, security architecture, and system mechanics.
          </p>
        </div>

        {/* 11 Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/[0.08] bg-[#08090C] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-sans font-bold text-lg sm:text-xl text-[#F5F5F7]">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full border transition-colors shrink-0 ${
                    isOpen ? "bg-[#0A84FF] text-white border-[#0A84FF]" : "border-white/[0.1] text-[#86868B]"
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
                      <div className="px-6 sm:px-7 pb-7 pt-2 text-sm sm:text-base text-[#86868B] leading-relaxed border-t border-white/[0.04]">
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
