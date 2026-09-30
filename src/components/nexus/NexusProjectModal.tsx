"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface NexusProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NexusProjectModal({
  isOpen,
  onClose,
}: NexusProjectModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("₹1.5L - ₹4L");
  const [service, setService] = useState("Full-Stack Web App");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#e8ff47", "#ffffff", "#38bdf8"],
    });
    setSubmitted(true);
  };

  const handleModalClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 400);
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
            onClick={handleModalClose}
            className="fixed inset-0 bg-ink-950/80 backdrop-blur-xl -z-10"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl bg-ink-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-mist-100"
          >
            {/* Top Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-mist-400 hover:text-white hover:border-signal transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Accent Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal to-transparent" />

            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-signal/30 bg-signal/10 text-signal font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Start a Project</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Let&apos;s talk about your idea.
                  </h3>
                  <p className="font-body text-mist-500 text-sm mt-1">
                    Fill out the form below and we&apos;ll get back to you with a roadmap within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-mist-500 uppercase tracking-wider mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 focus:border-signal text-sm text-mist-100 placeholder:text-mist-700 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-mist-500 uppercase tracking-wider mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@acme.com"
                        className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 focus:border-signal text-sm text-mist-100 placeholder:text-mist-700 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-mist-500 uppercase tracking-wider mb-1">
                        Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 focus:border-signal text-sm text-mist-100 outline-none transition-colors"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="UI/UX & Brand Design">UI/UX & Brand Design</option>
                        <option value="Mobile App Development">Mobile App (iOS/Android)</option>
                        <option value="AI Integration & Tools">AI Integration & Agents</option>
                        <option value="Complete Overhaul / MVP">Rapid MVP Sprint</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-mist-500 uppercase tracking-wider mb-1">
                        Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 focus:border-signal text-sm text-mist-100 outline-none transition-colors"
                      >
                        <option value="₹1.5L - ₹4L">₹1.5L – ₹4L</option>
                        <option value="₹4L - ₹10L">₹4L – ₹10L</option>
                        <option value="₹10L+">₹10L+ (Custom)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-mist-500 uppercase tracking-wider mb-1">
                      Brief Description
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you building and what's your target launch date?"
                      className="w-full px-4 py-3 rounded-xl bg-ink-950 border border-white/10 focus:border-signal text-sm text-mist-100 placeholder:text-mist-700 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-signal text-ink-950 font-display font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#d4ff00] hover:shadow-[0_0_25px_rgba(232,255,71,0.4)] transition-all cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-signal/15 border border-signal/40 flex items-center justify-center mx-auto text-signal">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white">
                  Thank you!
                </h3>
                <p className="font-body text-mist-400 text-sm max-w-sm mx-auto leading-relaxed">
                  We received your inquiry for <span className="text-signal font-semibold">{service}</span>. Our founder will review and reply to <span className="text-white font-medium">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={handleModalClose}
                  className="mt-4 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-signal text-xs font-mono uppercase tracking-wider text-mist-300 hover:text-white transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
