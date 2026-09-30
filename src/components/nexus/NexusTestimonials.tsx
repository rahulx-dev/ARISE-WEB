"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { sound } from "@/lib/audio";

export default function NexusTestimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "The Gate Guardian app lock literally saved my college GPA. Locking Instagram behind 20 push-ups made me think twice before opening it. I did 600 push-ups last month without going to a gym.",
      author: "Aditya Sharma",
      role: "S-Rank Hunter · 74 Day Streak",
      location: "Bengaluru",
      badge: "₹3,400 Cashed Out via UPI",
    },
    {
      id: 2,
      quote:
        "I was skeptical about camera privacy until I checked network traffic. Zero packets sent. The 30 FPS pose tracker counts reps perfectly even in low bedroom lighting.",
      author: "Sneha Patel",
      role: "A-Rank Hunter · Strength 48",
      location: "Mumbai",
      badge: "1,200 Squats Verified",
    },
    {
      id: 3,
      quote:
        "Solo Leveling made me want a real System. ARISE is the closest thing on earth. Seeing my Hunter Rank go from E to A gave me more dopamine than scrolling reels ever did.",
      author: "Rohan Mukherjee",
      role: "Guild Leader · Shadow Vanguard",
      location: "Delhi NCR",
      badge: "Top 1% Global Leaderboard",
    },
  ];

  const handleNext = () => {
    sound.playClick();
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    sound.playClick();
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentItem = testimonials[current];

  return (
    <section className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex justify-between items-end">
          <div className="space-y-3">
            <p className="font-mono text-xs text-signal uppercase tracking-widest">
              05 // HUNTER TRANSMISSIONS
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
              Verified Transmissions.
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full border border-white/10 hover:border-signal bg-white/[0.02] text-mist-300 hover:text-signal transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full border border-white/10 hover:border-signal bg-white/[0.02] text-mist-300 hover:text-signal transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Testimonial Display */}
        <div className="relative p-10 sm:p-16 rounded-3xl border border-white/5 bg-ink-900 shadow-2xl min-h-[380px] flex flex-col justify-between overflow-hidden">
          {/* Huge quotation mark backdrop */}
          <span className="absolute -right-6 -bottom-16 text-[220px] font-display font-black text-white/[0.02] pointer-events-none select-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 z-10"
            >
              <div className="flex items-center gap-1.5 text-signal">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="font-display text-2xl sm:text-4xl md:text-4xl font-bold tracking-tight text-mist-100 leading-snug max-w-4xl">
                &ldquo;{currentItem.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                <div>
                  <h3 className="font-display font-bold text-xl text-mist-100">
                    {currentItem.author}
                  </h3>
                  <p className="font-mono text-xs text-mist-400 mt-0.5">
                    {currentItem.role} · {currentItem.location}
                  </p>
                </div>

                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-signal/30 bg-signal/10 font-mono text-xs text-signal font-bold">
                  {currentItem.badge}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
