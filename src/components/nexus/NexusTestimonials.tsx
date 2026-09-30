"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function NexusTestimonials() {
  const testimonials = [
    {
      quote: "NEXUS transformed our entire digital presence. We went from embarrassed to proud in 12 weeks.",
      author: "CEO",
      company: "Vanta Finance",
    },
    {
      quote: "The strategy session alone was worth the entire engagement cost.",
      author: "Founder",
      company: "Bloom Health",
    },
    {
      quote: "They think like founders, not vendors. Rare.",
      author: "CTO",
      company: "Orbit SaaS",
    },
    {
      quote: "Delivered 3 weeks early. Never happens with agencies.",
      author: "Product Lead",
      company: "Crest Retail",
    },
    {
      quote: "Our Clutch review says 5 stars. Honestly, we'd give 6.",
      author: "CMO",
      company: "Frameshift",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink-950 py-32 sm:py-44 overflow-hidden relative select-none border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative min-h-[420px] flex flex-col justify-center">
        
        {/* Giant Quote Backdrop Mark */}
        <div className="absolute top-0 left-4 font-display text-[15rem] sm:text-[22rem] md:text-[28rem] text-signal/[0.04] leading-none pointer-events-none select-none -translate-y-16">
          &ldquo;
        </div>

        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-1 text-signal">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-mist-100 font-medium leading-[1.15] tracking-tight">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              <div className="font-mono text-sm sm:text-base text-mist-500">
                <span className="text-signal font-bold">{testimonials[current].author}</span>
                <span className="mx-2 text-mist-700">·</span>
                <span className="text-mist-300">{testimonials[current].company}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-4 pt-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-signal/50 bg-ink-900 hover:bg-ink-800 text-mist-300 hover:text-signal flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-signal/50 bg-ink-900 hover:bg-ink-800 text-mist-300 hover:text-signal flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-mist-700 ml-2">
              {current + 1} / {testimonials.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
