"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  num: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function Counter({ end, prefix = "", suffix = "", decimals = 0 }: { end: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out expo
      const current = end * (1 - Math.pow(2, -10 * progress));
      setCount(current);

      if (frame === totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function NexusStatsBanner() {
  const stats: StatItem[] = [
    { num: 50, label: "Active Hunters", suffix: "k+" },
    { num: 2.4, label: "Reps Tracked by Vision AI", suffix: "M+", decimals: 1 },
    { num: 99.4, label: "Neural Pose Accuracy", suffix: "%", decimals: 1 },
    { num: 1.2, label: "Mana Redeemed via UPI", prefix: "₹", suffix: "M+", decimals: 1 },
    { num: 4.9, label: "Hunter Rating", suffix: "★", decimals: 1 },
    { num: 100, label: "On-Device Zero Data Storage", suffix: "%" },
  ];

  return (
    <section className="bg-signal py-20 sm:py-28 w-full text-ink-950 relative z-10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="flex flex-col items-start"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-ink-950">
                <Counter
                  end={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest mt-3 opacity-90 font-semibold leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
