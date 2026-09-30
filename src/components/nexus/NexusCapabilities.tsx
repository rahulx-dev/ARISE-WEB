"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Lock,
  Flame,
  Award,
  DollarSign,
  Users,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function NexusCapabilities() {
  const capabilities = [
    {
      id: 1,
      number: "01",
      icon: <Eye className="w-6 h-6 text-signal" />,
      title: "30 FPS On-Device AI Vision",
      desc: "Real-time rep counting and joint angle verification. 17 biomechanical points tracked with zero latency and zero camera data sent to servers.",
      tags: ["TensorFlow Lite", "MediaPipe", "17 Keypoints", "0ms Latency"],
      span: "col-span-1 lg:col-span-2",
    },
    {
      id: 2,
      number: "02",
      icon: <Lock className="w-6 h-6 text-signal" />,
      title: "Gate Guardian (App Toll)",
      desc: "Lock distracting apps like Instagram & Shorts behind physical workouts. Complete 15 push-ups to unlock 10 minutes of screen time.",
      tags: ["Doomscroll Blocker", "App Lock", "Toll Protocol"],
      span: "col-span-1",
    },
    {
      id: 3,
      number: "03",
      icon: <Flame className="w-6 h-6 text-signal" />,
      title: "Real-Life RPG Progression",
      desc: "Every workout earns raw XP. Level up your Strength, Agility, and Stamina stats from E-Rank Hunter all the way to Shadow Monarch.",
      tags: ["Solo Leveling RPG", "Stat Attributes", "Rank Up"],
      span: "col-span-1",
    },
    {
      id: 4,
      number: "04",
      icon: <Award className="w-6 h-6 text-signal" />,
      title: "Daily System Quests",
      desc: "Daily morning quest alerts inspired by the System. Complete push-ups, deep work sprints, and hydration goals to avoid penalty zones.",
      tags: ["Push-ups", "Squats", "Sprints", "Penalty Protocol"],
      span: "col-span-1 lg:col-span-2",
    },
    {
      id: 5,
      number: "05",
      icon: <DollarSign className="w-6 h-6 text-signal" />,
      title: "Mana Crystals to Real Cash",
      desc: "Convert your earned workout energy into real monetary value. Direct instant payouts to UPI, Google Play Gift Cards, and Amazon Vouchers.",
      tags: ["Instant UPI", "Amazon Pay", "Google Play", "Verified Cashouts"],
      span: "col-span-1",
    },
    {
      id: 6,
      number: "06",
      icon: <Users className="w-6 h-6 text-signal" />,
      title: "Guild Raids & Squad Battles",
      desc: "Form hunting parties with friends. Pool your collective reps to defeat weekly World Bosses and claim legendary clan loot pools.",
      tags: ["Co-op Raids", "Leaderboards", "Guild Wars"],
      span: "col-span-1",
    },
    {
      id: 7,
      number: "07",
      icon: <ShieldCheck className="w-6 h-6 text-signal" />,
      title: "100% Offline-First Privacy",
      desc: "Your room and body are private. Computer vision models execute strictly on your device's NPU. We never store, stream, or see your video.",
      tags: ["Zero Cloud Feed", "Sovereign Data", "Offline AI", "Audited"],
      span: "col-span-1 lg:col-span-2",
    },
    {
      id: 8,
      number: "08",
      icon: <Smartphone className="w-6 h-6 text-signal" />,
      title: "Android APK & Multi-Platform",
      desc: "Ultra-lightweight 24MB engine. Battery optimized with background overlay permissions and instant native performance.",
      tags: ["Android 8+", "Lightweight APK", "PWA", "iOS Ready"],
      span: "col-span-1 lg:col-span-2",
    },
  ];

  return (
    <section id="features" className="py-28 sm:py-36 bg-ink-950 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-xs text-signal uppercase tracking-widest">
              01 // CORE ARCHITECTURE
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
              The System Features.
            </h2>
          </div>
          <p className="font-body text-mist-400 text-base sm:text-lg max-w-md">
            Engineered from scratch to eliminate doomscrolling and forge unstoppable physical discipline.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={`group p-8 rounded-3xl border border-white/5 bg-ink-900 hover:bg-ink-800/80 hover:border-signal/40 transition-all duration-300 flex flex-col justify-between min-h-[280px] shadow-2xl ${item.span}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-signal/30 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-mist-600 group-hover:text-signal transition-colors font-semibold">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl tracking-tight text-mist-100 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-mist-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-mist-500 bg-white/[0.02] px-2.5 py-1 rounded-full border border-white/5 group-hover:border-signal/20 group-hover:text-mist-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
