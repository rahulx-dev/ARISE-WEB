"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function NexusContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("₹1.5L - ₹4L");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#e8ff47", "#ffffff", "#70d6ff"],
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ink-950 py-32 sm:py-48 text-mist-100 select-none relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-signal/[0.05] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-white/10 bg-ink-900/80 p-8 sm:p-16 backdrop-blur-2xl shadow-2xl relative">
          
          {/* Top subtle sheen line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-signal/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-signal/30 bg-signal/10 text-signal font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Your Project</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-mist-100 uppercase">
                Let&apos;s build <br />
                <span className="text-signal">something</span> <br />
                extraordinary.
              </h2>

              <p className="font-body text-mist-500 text-base sm:text-lg leading-relaxed">
                Tell us about your product, timeline, and goals. We respond within 24 hours with a strategic plan and estimate.
              </p>

              <div className="pt-4 space-y-2 font-mono text-sm text-mist-500">
                <div>
                  <span className="text-mist-700">Direct: </span>
                  <a href="mailto:hello@nexus.studio" className="text-mist-300 hover:text-signal transition-colors underline underline-offset-4">
                    hello@nexus.studio
                  </a>
                </div>
                <div>
                  <span className="text-mist-700">Phone: </span>
                  <a href="tel:+919876543210" className="text-mist-300 hover:text-signal transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-mist-500 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3.5 rounded-2xl bg-ink-950 border border-white/10 focus:border-signal text-mist-100 placeholder:text-mist-700 font-body text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mist-500 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-ink-950 border border-white/10 focus:border-signal text-mist-100 placeholder:text-mist-700 font-body text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mist-500 mb-1.5 uppercase tracking-wider">
                      Estimated Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-ink-950 border border-white/10 focus:border-signal text-mist-100 font-body text-sm outline-none transition-colors"
                    >
                      <option value="₹1.5L - ₹4L">₹1.5L – ₹4L (MVP / Sprint)</option>
                      <option value="₹4L - ₹10L">₹4L – ₹10L (Full Web App / Scale)</option>
                      <option value="₹10L+">₹10L+ (Enterprise / Retainer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-mist-500 mb-1.5 uppercase tracking-wider">
                      Project Brief
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you're building..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-ink-950 border border-white/10 focus:border-signal text-mist-100 placeholder:text-mist-700 font-body text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-signal hover:bg-[#d4ff00] text-ink-950 font-body font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(232,255,71,0.3)] transition-all duration-300 hover:scale-[1.01]"
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-3xl bg-ink-950 border border-signal/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-signal/15 border border-signal/40 flex items-center justify-center mx-auto text-signal">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-mist-100">
                    Inquiry Received!
                  </h3>
                  <p className="font-body text-mist-500 text-sm leading-relaxed">
                    Thanks <span className="text-mist-100 font-semibold">{name}</span>. Our founder will review your brief and get in touch at <span className="text-signal">{email}</span> within 24 hours.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
