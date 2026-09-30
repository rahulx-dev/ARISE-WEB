"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function NexusFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most projects take 3–8 weeks depending on scope. We'll give you a precise timeline in our discovery call. We don't pad timelines — we hit them.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. About 30% of our clients are outside India. We work async-first with tools like Linear, Figma, and Loom — timezone is rarely a barrier.",
    },
    {
      q: "What's your revision policy?",
      a: "Unlimited revisions within scope. We've never had a client feel they ran out of revisions, because we align on direction early.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes. Typically 40% upfront, 30% at midpoint, 30% on delivery. For larger engagements we can structure monthly retainers.",
    },
    {
      q: "Can I hire just for design, or development separately?",
      a: "Absolutely. Many clients start with design-only, then bring us in for development later. Others need just a technical build from existing designs.",
    },
    {
      q: "Do you sign NDAs?",
      a: "Yes, always. We treat client information with the same care we give our own.",
    },
    {
      q: "What happens after the project is delivered?",
      a: "All projects include 30 days of post-launch support at no extra charge. After that, we offer monthly retainer plans starting at ₹25,000/month.",
    },
    {
      q: "How do you handle urgent or rush projects?",
      a: "We have a rush lane for time-sensitive projects (1.35× standard rate). Talk to us — we've launched products in 7 days when the stakes demanded it.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32 h-fit">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            07 // FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Answers to your questions.
          </h2>
          <p className="font-body text-mist-500 text-base leading-relaxed">
            Everything you need to know about how we work, what we charge, and what happens when things go wrong.
          </p>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-8 divide-y divide-white/5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.q} className="py-6 sm:py-8">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span
                    className={`font-body text-lg sm:text-xl font-medium tracking-tight transition-colors duration-200 ${
                      isOpen ? "text-signal" : "text-mist-100 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-full border border-white/10 shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "bg-signal text-ink-950 rotate-90" : "text-mist-500 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 font-body text-mist-500 text-base leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
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
