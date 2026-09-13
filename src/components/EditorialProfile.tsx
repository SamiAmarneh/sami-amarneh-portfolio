import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EditorialProfile: React.FC = () => {
  return (
    <section id="profile" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#EEF2F6] text-[#0A0F1A] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Eyebrow */}
        <div className="font-mono-tech text-xs tracking-wider text-[#0284C7] uppercase font-bold">
          02 / PROFILE
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Headline & Technical Signal Box */}
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-[#0A0F1A] leading-[0.95]">
              Rigorous<br />
              systems<br />
              <span className="text-[#0284C7]">thinking.</span>
            </h2>

            {/* Technical Schematic / Personal Signal Box */}
            <div className="border border-[#0A0F1A]/15 bg-white/90 p-6 sm:p-7 shadow-sm space-y-4 relative">
              <div className="flex items-center justify-between font-mono-tech text-xs pb-3 border-b border-[#0A0F1A]/10">
                <span className="text-[#0284C7] font-bold">PORTRAIT / PERSONAL SIGNAL</span>
                <span className="text-[#0A0F1A]/40">AMR_2026</span>
              </div>

              <div className="space-y-3 font-mono-tech text-xs text-[#0A0F1A]/85">
                <div className="flex items-center justify-between py-1 border-b border-[#0A0F1A]/5">
                  <span className="text-[#0A0F1A]/50">ENGINEER:</span>
                  <span className="font-bold text-[#0A0F1A]">Sami Amarneh</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#0A0F1A]/5">
                  <span className="text-[#0A0F1A]/50">BASE NODE:</span>
                  <span className="font-semibold text-[#0A0F1A]">Jenin, Palestine 🇵🇸</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#0A0F1A]/5">
                  <span className="text-[#0A0F1A]/50">DEGREE STATUS:</span>
                  <span className="text-[#0284C7] font-bold">B.Sc. Expected 2026</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#0A0F1A]/5">
                  <span className="text-[#0A0F1A]/50">INSTITUTION:</span>
                  <span className="font-semibold text-[#0A0F1A]">Arab American University</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#0A0F1A]/50">CONCURRENCY PEAK:</span>
                  <span className="text-[#0284C7] font-bold">12,000+ Real Users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Academic Credentials */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-display font-semibold text-[#0A0F1A] leading-relaxed">
                Motivated Computer Engineering student (Expected 2026) with a strong foundation in software and web development. Experienced in building modern, production-grade web applications and delivering real-world freelance projects.
              </p>

              <p className="text-base text-[#0A0F1A]/75 font-sans leading-relaxed">
                My practice bridges the gap between hardware constraints and scalable cloud software.
                Whether routing IoT signals from ESP32 microcontrollers over cellular networks or designing
                high-throughput ASP.NET Core APIs with Redis caching, I care about the point where rigorous
                engineering logic becomes clean, resilient user experiences.
              </p>
            </div>

            {/* Education Block */}
            <div className="pt-8 border-t border-[#0A0F1A]/10 space-y-6">
              <div className="font-mono-tech text-xs tracking-wider uppercase text-[#0A0F1A]/60">
                EDUCATION
              </div>

              <div className="space-y-2">
                <div className="text-xl font-display font-bold text-[#0A0F1A]">
                  Bachelor&apos;s Degree in Computer Systems Engineering
                </div>
                <div className="font-mono-tech text-sm text-[#0284C7] font-semibold">
                  Arab American University (AAUP), Palestine • Expected 2026
                </div>
                <p className="text-sm font-sans text-[#0A0F1A]/70 leading-relaxed pt-1">
                  Focused on computer systems architecture, data structures &amp; algorithms, database management, operating systems, embedded IoT telemetry, and distributed web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
