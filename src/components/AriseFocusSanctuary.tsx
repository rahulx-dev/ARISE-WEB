"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Radio } from "lucide-react";

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
      name: "14 Hz Alpha Carrier Wave",
      label: "ALPHA FLOW",
      desc: "Mild rhythmic carrier wave for sustained deep reading, deep research, and coding blocks.",
    },
    {
      id: "gamma" as AudioTrack,
      freq: 40,
      name: "40 Hz Gamma Neural Pulse",
      label: "GAMMA FOCUS",
      desc: "Fast frequency acoustic wave designed for high-pace analytical problem solving and intense workouts.",
    },
    {
      id: "brown" as AudioTrack,
      freq: 8,
      name: "Deep Brown Noise Mask",
      label: "ISOLATION",
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
    <section id="sanctuary" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Silence the world. <br />
            <span className="text-[#86868B]">Binaural Neural Audio.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            A built-in minimal sound isolation suite. Clean ambient acoustic frequencies designed to shield your focus during intense deep work blocks.
          </p>
        </div>

        {/* Minimal Player Interface */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-b from-[#12141A] via-[#08090C] to-[#040507] border border-white/[0.1] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
          
          {/* Left Circular Visualizer & Timer */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-[#000000] border border-white/[0.08] relative overflow-hidden text-center space-y-6">
            
            {/* Pulsing Concentric Visualizer Rings */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <motion.div
                animate={isPlaying ? { scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] } : { scale: 1, opacity: 0.2 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-[#0A84FF]/40"
              />
              <motion.div
                animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [0.15, 0.5, 0.15] } : { scale: 1, opacity: 0.1 }}
                transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute -inset-4 rounded-full border border-[#0A84FF]/25"
              />
              
              {/* Center Play/Pause Button */}
              <button
                onClick={togglePlayback}
                className="w-20 h-20 rounded-full bg-[#0A84FF] hover:bg-[#0071e3] text-white flex items-center justify-center shadow-[0_0_35px_rgba(10,132,255,0.45)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 ml-1 fill-current" />}
              </button>
            </div>

            <div className="space-y-1">
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
                {formatTime(timeRemaining)}
              </div>
              <span className="font-mono text-xs text-[#86868B] uppercase tracking-wider block flex items-center justify-center gap-1.5">
                <Radio className={`w-3 h-3 ${isPlaying ? "text-[#0A84FF] animate-pulse" : "text-[#6E6E73]"}`} />
                {isPlaying ? "SYNTHESIZER LIVE // OSCILLATING" : "SESSION READY TO INITIALIZE"}
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
                    ? "bg-[#161822] border-[#0A84FF] text-[#F5F5F7] shadow-[0_0_20px_rgba(10,132,255,0.18)]"
                    : "bg-[#08090C] border-white/[0.06] text-[#86868B] hover:border-white/[0.15] hover:text-[#F5F5F7]"
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
