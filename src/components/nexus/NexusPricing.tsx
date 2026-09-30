"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

interface NexusPricingProps {
  onSelectPlan?: (plan: string) => void;
}

export default function NexusPricing({ onSelectPlan }: NexusPricingProps) {
  const plans = [
    {
      name: "Starter",
      price: "₹1.5L",
      desc: "Perfect for: Startups & MVPs",
      features: [
        "Brand Identity",
        "5-page website",
        "Responsive Design",
        "Basic SEO Setup",
        "3 months support",
      ],
      timeline: "3 weeks",
      btnText: "Get Started",
      btnClass: "bg-signal text-ink-950 hover:shadow-[0_0_25px_rgba(232,255,71,0.3)]",
      borderClass: "border-white/5 bg-ink-900",
      popular: false,
    },
    {
      name: "Growth",
      price: "₹4L",
      desc: "Perfect for: Scaling companies",
      features: [
        "Full design system",
        "Custom Web App",
        "Advanced Animations",
        "Technical SEO",
        "Analytics Integration",
        "6 months support",
      ],
      timeline: "6 weeks",
      btnText: "Get Started",
      btnClass: "bg-signal text-ink-950 hover:shadow-[0_0_30px_rgba(232,255,71,0.4)]",
      borderClass: "border-signal/50 bg-ink-900 shadow-[0_0_50px_rgba(232,255,71,0.06)]",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Perfect for: Series A+ companies",
      features: [
        "Everything in Growth",
        "Dedicated Team",
        "AI Features Integration",
        "Custom Backend",
        "Scalability Audits",
        "Priority Support",
      ],
      timeline: "Custom",
      btnText: "Talk to Us",
      btnClass: "border border-signal/60 text-signal hover:bg-signal hover:text-ink-950",
      borderClass: "border-white/5 bg-ink-900",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            06 // INVESTMENT
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Transparent engagement models.
          </h2>
          <p className="font-body text-mist-500 text-base sm:text-lg">
            No hidden scope creeps. Fixed sprints, guaranteed delivery dates.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between relative shadow-2xl ${plan.borderClass}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-signal text-ink-950 font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-mist-100">
                    {plan.name}
                  </h3>
                  <p className="font-mono text-xs text-mist-500 mt-1">
                    {plan.desc}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 pt-2 border-t border-white/5">
                  <span className="font-display text-5xl font-bold text-mist-100 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-mist-500">
                    / {plan.timeline}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-4 border-t border-white/5">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-3 font-body text-sm text-mist-300"
                    >
                      <div className="w-4 h-4 rounded-full bg-signal/15 border border-signal/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-signal" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPlan?.(plan.name)}
                  className={`w-full py-4 rounded-full font-body font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${plan.btnClass}`}
                >
                  <span>{plan.btnText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
