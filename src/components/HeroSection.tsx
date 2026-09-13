import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CyberGlobeCanvas } from './CyberGlobeCanvas';
import { soundManager } from '../utils/audio';
import { Terminal, Download, ArrowDownRight, ShieldCheck, Cpu, Code2, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [initText, setInitText] = useState('');
  const fullInit = PERSONAL_INFO.initializationLog;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setInitText(fullInit.slice(0, index));
      index++;
      if (index > fullInit.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [fullInit]);

  const scrollToSection = (id: string) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#00F3FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#FF007F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B026FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Command & Bio */}
        <div className="lg:col-span-7 space-y-6">
          {/* Terminal Pre-Heading */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121218] border border-[#00F3FF]/30 text-xs font-mono text-[#00F3FF] tracking-wider relative shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <span className="w-1.5 h-1.5 bg-[#00F3FF] rounded-full animate-ping" />
            <span>{initText}</span>
            <span className="w-2 h-4 bg-[#00F3FF] inline-block animate-pulse ml-0.5" />
          </div>

          {/* Main Title: SAMI AMARNEH */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#888899] tracking-widest uppercase flex items-center gap-2">
              <span className="text-[#00F3FF]">//</span> SYS_ENG_ID: 2026-AMARNEH
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1 text-[#E0E0E5]">
                <MapPin className="w-3 h-3 text-[#FF007F]" /> Jenin, Palestine 🇵🇸
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-[#E0E0E5] uppercase relative select-none glitch-hover glow-cyan transition-all"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="text-white">SAMI</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F3FF] via-[#B026FF] to-[#FF007F]">
                AMARNEH
              </span>
            </h1>

            {/* Sub-title */}
            <div className="flex items-center gap-2 pt-1">
              <span className="h-[2px] w-6 bg-[#00F3FF]" />
              <h2 className="text-sm sm:text-base md:text-lg font-mono font-semibold tracking-wider text-[#00F3FF]">
                COMPUTER SYSTEMS ENGINEER // FULL-STACK &amp; WEB DEVELOPER
              </h2>
            </div>
          </div>

          {/* Exact Description */}
          <p className="text-base sm:text-lg text-[#888899] leading-relaxed max-w-2xl font-mono">
            {PERSONAL_INFO.bio}
          </p>

          {/* Key Metrics / Highlights HUD Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
            <div className="p-3 bg-[#121218]/90 border border-white/5 border-l-2 border-l-[#00F3FF] relative">
              <div className="text-[10px] text-[#888899] font-mono">CONCURRENCY</div>
              <div className="text-sm sm:text-base font-display font-bold text-[#00F3FF]">12K+ USERS</div>
              <div className="text-[9px] text-[#888899]">Sara Shall Live</div>
            </div>

            <div className="p-3 bg-[#121218]/90 border border-white/5 border-l-2 border-l-[#FF007F] relative">
              <div className="text-[10px] text-[#888899] font-mono">HARDWARE + CLOUD</div>
              <div className="text-sm sm:text-base font-display font-bold text-[#FF007F]">IoT + ESP32</div>
              <div className="text-[9px] text-[#888899]">Bus Tracking System</div>
            </div>

            <div className="p-3 bg-[#121218]/90 border border-white/5 border-l-2 border-l-[#B026FF] relative">
              <div className="text-[10px] text-[#888899] font-mono">DEGREE TARGET</div>
              <div className="text-sm sm:text-base font-display font-bold text-[#E0E0E5]">B.Sc. 2026</div>
              <div className="text-[9px] text-[#888899]">Arab American Univ</div>
            </div>

            <div className="p-3 bg-[#121218]/90 border border-white/5 border-l-2 border-l-[#00F3FF] relative">
              <div className="text-[10px] text-[#888899] font-mono">STATUS</div>
              <div className="text-sm sm:text-base font-display font-bold text-[#00F3FF]">AVAILABLE</div>
              <div className="text-[9px] text-[#888899]">Freelance / Roles</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* VIEW PROJECTS Button */}
            <button
              id="hero-view-projects-btn"
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => soundManager.playHover()}
              className="relative px-6 sm:px-8 py-3.5 bg-[#00F3FF] text-[#0A0A0F] font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(0,243,255,0.7)] flex items-center gap-2 group cursor-pointer"
            >
              <span>[ VIEW PROJECTS ]</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* DOWNLOAD CV Button */}
            <button
              id="hero-download-cv-btn"
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="relative px-6 sm:px-8 py-3.5 bg-transparent border-2 border-[#FF007F] text-[#FF007F] font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#FF007F] hover:text-black hover:shadow-[0_0_25px_rgba(255,0,127,0.5)] flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>[ DOWNLOAD CV ]</span>
            </button>

            {/* Terminal quick link */}
            <button
              id="hero-terminal-btn"
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => soundManager.playHover()}
              className="px-4 py-3.5 border border-white/10 hover:border-[#00F3FF]/40 text-[#888899] hover:text-[#00F3FF] text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>// SEND_MESSAGE</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Wireframe Cyber Globe HUD Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#121218]/80 border border-[#00F3FF]/30 p-2 hud-corner-full shadow-[0_0_30px_rgba(0,243,255,0.1)]">
            {/* Top HUD Frame Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#0A0A0F]/90 border-b border-white/10 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-[#00F3FF]">
                <Cpu className="w-3.5 h-3.5 text-[#00F3FF]" />
                <span className="font-bold">SYSTEMS_ENGINEERING_CORE</span>
              </div>
              <div className="text-[#888899] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F3FF] animate-pulse" />
                <span>3D_TELEMETRY</span>
              </div>
            </div>

            {/* 3D Canvas Visual */}
            <CyberGlobeCanvas />

            {/* Bottom HUD Data Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-[#0A0A0F]/90 border-t border-white/10 text-[10px] font-mono text-[#888899]">
              <div>
                <span className="text-[#00F3FF]">ARCHITECTURE:</span>
                <div className="text-white font-semibold">DISTRIBUTED</div>
              </div>
              <div>
                <span className="text-[#FF007F]">HARDWARE:</span>
                <div className="text-white font-semibold">ESP32 / GNSS</div>
              </div>
              <div>
                <span className="text-[#B026FF]">RUNTIME:</span>
                <div className="text-white font-semibold">ASPNET/NODE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
