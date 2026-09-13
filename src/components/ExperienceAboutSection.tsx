import React, { useState } from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight, Terminal, Binary, Cpu } from 'lucide-react';

export const ExperienceAboutSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES[0].id);

  const activeExp = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] relative cyber-dots border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono text-[#00F3FF] tracking-widest uppercase flex items-center gap-2">
              <span>// 02. SYSTEM_CHRONICLES</span>
              <span className="text-white/20">|</span>
              <span className="text-[#888899]">CAREER &amp; FOUNDATIONAL BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide uppercase mt-1">
              EXPERIENCE <span className="text-[#00F3FF]">&amp;</span> ABOUT
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#888899]">
            <span className="w-2 h-2 rounded-full bg-[#00F3FF] animate-pulse" />
            <span>RECORD: VERIFIED // PALESTINE HUB</span>
          </div>
        </div>

        {/* Split Layout: Left Column = Deep Engineering About, Right Column = Interactive Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: About Sami Amarneh (HUD Dossier Style) */}
          <div id="about" className="lg:col-span-5 space-y-6">
            <div className="bg-[#121218] border border-white/10 p-6 relative hud-corner shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00F3FF]" />
                  <span className="font-display font-bold text-sm tracking-wider text-[#00F3FF]">
                    ENGINEER_DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#00F3FF]/10 text-[#00F3FF] border border-[#00F3FF]/30">
                  SEC_LEVEL: PUBLIC
                </span>
              </div>

              {/* Bio Content */}
              <div className="space-y-4 pt-4 text-sm font-mono text-[#888899] leading-relaxed">
                <p className="text-[#E0E0E5]">
                  I am a motivated <span className="text-[#00F3FF] font-semibold">Computer Engineering student (Expected 2026)</span> at{' '}
                  <span className="text-white font-semibold">Arab American University</span> with a strong foundation in both software engineering and web systems.
                </p>

                <p>
                  My engineering approach merges low-level architectural rigor (embedded systems, IoT, memory structures, C/C++) with high-performance distributed web engineering (Next.js, ASP.NET Core, Redis, PostgreSQL).
                </p>

                <p>
                  Whether engineering a high-concurrency e-commerce architecture reaching <span className="text-[#FF007F] font-semibold">12,000+ users</span> or constructing smart hardware GPS tracking networks, I build solutions that are robust, testable, and production-ready.
                </p>
              </div>

              {/* Education & Academic Credentials */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-[#00F3FF] tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#00F3FF]" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>

                <div className="p-3 bg-[#0A0A0F] border border-white/5 space-y-1">
                  <div className="text-white text-xs font-bold font-mono">B.Sc. in Computer Systems Engineering</div>
                  <div className="text-[#888899] text-xs">Arab American University (AAUP), Palestine</div>
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-[#00F3FF]">Expected Graduation: 2026</span>
                    <span className="text-[#FF007F] font-mono">Status: Enrolled</span>
                  </div>
                </div>
              </div>

              {/* Core Engineering Disciplines */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-[#888899] mb-2 uppercase">Core Engineering Capabilities:</div>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                  <span className="px-2 py-0.5 bg-[#00F3FF]/10 text-[#00F3FF] border border-[#00F3FF]/20">High-Concurrency Web</span>
                  <span className="px-2 py-0.5 bg-[#FF007F]/10 text-[#FF007F] border border-[#FF007F]/20">IoT &amp; Telemetry</span>
                  <span className="px-2 py-0.5 bg-[#B026FF]/10 text-[#B026FF] border border-[#B026FF]/20">Full-Stack React</span>
                  <span className="px-2 py-0.5 bg-white/5 text-[#E0E0E5] border border-white/10">ASP.NET Core</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Experience Navigation Tabs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {EXPERIENCES.map((exp, idx) => {
                const isActive = exp.id === activeExpId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveExpId(exp.id);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`flex-1 text-left p-4 border transition-all duration-300 relative cursor-pointer ${
                      isActive
                        ? 'bg-[#121218] border-[#00F3FF] shadow-[0_0_15px_rgba(0,243,255,0.15)]'
                        : 'bg-[#121218]/50 border-white/10 hover:border-white/20 hover:bg-[#121218]/80'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-0 left-0 w-1 h-full bg-[#00F3FF]" />
                    )}
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={isActive ? 'text-[#00F3FF]' : 'text-[#888899]'}>
                        LOG-0{idx + 1} // {exp.period}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.2 ${
                        exp.status === 'ACTIVE_AGENT'
                          ? 'bg-[#00F3FF]/20 text-[#00F3FF]'
                          : 'bg-white/10 text-[#888899]'
                      }`}>
                        {exp.status}
                      </span>
                    </div>
                    <div className="font-display font-bold text-sm text-white truncate">
                      {exp.role}
                    </div>
                    <div className="text-xs text-[#888899] font-mono truncate mt-0.5">
                      {exp.company}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Experience Mission Card */}
            <div className="bg-[#121218] border border-white/10 p-6 sm:p-8 relative hud-corner shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-white/10 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                        {activeExp.role}
                      </h3>
                      <div className="text-sm font-mono text-[#00F3FF] font-semibold mt-1">
                        {activeExp.company}
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-xs text-[#FF007F] font-bold">{activeExp.period}</div>
                      <div className="text-[11px] text-[#888899]">{activeExp.location}</div>
                    </div>
                  </div>

                  {/* Exact summary description */}
                  <p className="text-sm font-mono text-[#E0E0E5] mt-4 p-3 bg-[#0A0A0F] border-l-2 border-[#00F3FF] leading-relaxed">
                    {activeExp.description}
                  </p>
                </div>

                {/* Key Mission Achievements */}
                <div>
                  <div className="text-xs font-mono text-[#00F3FF] tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>OPERATIONAL DELIVERABLES &amp; IMPACT</span>
                  </div>

                  <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#888899]">
                    {activeExp.achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="text-[#00F3FF] mt-1 text-xs">▹</span>
                        <span className="leading-relaxed text-[#E0E0E5]/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Applied */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] font-mono text-[#888899] mb-2 uppercase">
                    ENVIRONMENT &amp; PROTOCOLS APPLIED:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#0A0A0F] border border-white/10 text-xs font-mono text-[#00F3FF] hover:border-[#00F3FF]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
