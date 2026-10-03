"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

type AudioTrack = "alpha" | "gamma" | "brown";

export default function AriseFocusSanctuary() {
  const [activeTrack, setActiveTrack] = useState<AudioTrack>("alpha");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1961); // ~32:41 in seconds
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodeRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const tracks = [
    {
      id: "alpha" as AudioTrack,
      freq: 14,
      name: "14 Hz Alpha",
      label: "ALPHA FOCUS",
      desc: "Mild rhythmic carrier wave for sustained deep reading and coding blocks.",
    },
    {
      id: "gamma" as AudioTrack,
      freq: 40,
      name: "40 Hz Gamma",
      label: "GAMMA SPRINT",
      desc: "Fast frequency acoustic tone designed for high-pace analytical problem solving.",
    },
    {
      id: "brown" as AudioTrack,
      freq: 8,
      name: "Brown Noise",
      label: "DEEP ISOLATION",
      desc: "Low-frequency atmospheric mask that dampens erratic ambient background room noise.",
    },
  ];

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeRemaining]);

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlayback = () => {
    if (isPlaying) {
      // Stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      }
      setIsPlaying(false);
    } else {
      // Start Real Web Audio Synthesizer Tone
      try {
        if (!audioCtxRef.current) {
          const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          if (AudioCtx) audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current?.state === "suspended") {
          audioCtxRef.current.resume();
        }

        if (audioCtxRef.current) {
          const osc = audioCtxRef.current.createOscillator();
          const gain = audioCtxRef.current.createGain();

          const selected = tracks.find((t) => t.id === activeTrack);
          const carrier = selected?.id === "gamma" ? 220 : selected?.id === "alpha" ? 140 : 90;
          osc.type = selected?.id === "brown" ? "triangle" : "sine";
          osc.frequency.setValueAtTime(carrier, audioCtxRef.current.currentTime);

          gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);

          osc.connect(gain);
          gain.connect(audioCtxRef.current.destination);
          osc.start();

          oscNodeRef.current = osc;
          gainNodeRef.current = gain;
        }
      } catch {
        // Audio fallback
      }
      setIsPlaying(true);
    }
  };

  const handleTrackSelect = (id: AudioTrack) => {
    if (isPlaying) {
      togglePlayback();
    }
    setActiveTrack(id);
  };

  return (
    <section className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>06 / FOCUS SANCTUARY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Silence the world.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            A built-in minimal sound isolation suite. Clean ambient acoustic frequencies designed to shield your focus during intense deep work blocks.
          </p>
        </div>

        {/* Minimal Player Interface */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08090C] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Circular Visualizer & Timer */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-[#000000] border border-white/[0.06] relative overflow-hidden text-center space-y-6">
            
            {/* Pulsing Concentric Visualizer Rings */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <motion.div
                animate={isPlaying ? { scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] } : { scale: 1, opacity: 0.2 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-[#0A84FF]/40"
              />
              <motion.div
                animate={isPlaying ? { scale: [1, 1.15, 1], opacity: [0.15, 0.4, 0.15] } : { scale: 1, opacity: 0.1 }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute -inset-4 rounded-full border border-[#0A84FF]/25"
              />
              
              {/* Center Play/Pause Button */}
              <button
                onClick={togglePlayback}
                className="w-20 h-20 rounded-full bg-[#0A84FF] hover:bg-[#0071e3] text-white flex items-center justify-center shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-all duration-200 cursor-pointer hover:scale-105"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 ml-1 fill-current" />}
              </button>
            </div>

            <div className="space-y-1">
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
                {formatTime(timeRemaining)}
              </div>
              <span className="font-mono text-xs text-[#86868B] uppercase tracking-wider block">
                {isPlaying ? "FREQUENCY GENERATING // LIVE" : "SESSION READY"}
              </span>
            </div>
          </div>

          {/* Right 3 Frequency Tracks Selection */}
          <div className="lg:col-span-6 space-y-4">
            {tracks.map((t) => (
              <div
                key={t.id}
                onClick={() => handleTrackSelect(t.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeTrack === t.id
                    ? "bg-[#111318] border-[#0A84FF] text-[#F5F5F7] shadow-[0_0_20px_rgba(10,132,255,0.12)]"
                    : "bg-[#0D0F14] border-white/[0.06] text-[#86868B] hover:border-white/[0.15] hover:text-[#F5F5F7]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-sans font-bold text-lg text-[#F5F5F7]">{t.name}</div>
                  <span className="font-mono text-[10px] text-[#0A84FF] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#0A84FF]/10">
                    {t.label}
                  </span>
                </div>
                <p className="text-xs text-[#86868B] mt-2 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
