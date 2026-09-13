import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { Cpu, Terminal, Shield, Zap, Sparkles, CheckSquare, Hexagon } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedGroups = activeCategory === 'all'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] relative cyber-dots border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono text-[#00F3FF] tracking-widest uppercase flex items-center gap-2">
              <span>// 04. SYSTEM_CAPABILITIES</span>
              <span className="text-white/20">|</span>
              <span className="text-[#888899]">ENGINEERING KERNEL &amp; PROTOCOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide uppercase mt-1">
              SYSTEM <span className="text-[#00F3FF]">CAPABILITIES</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveCategory('all');
              }}
              onMouseEnter={() => soundManager.playHover()}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'border-[#00F3FF] bg-[#00F3FF]/15 text-[#00F3FF]'
                  : 'border-white/10 bg-[#121218] text-[#888899] hover:text-white'
              }`}
            >
              [ ALL_CAPABILITIES ]
            </button>

            {SKILL_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategory(group.id);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-3 py-1.5 border transition-all cursor-pointer ${
                  activeCategory === group.id
                    ? 'border-[#00F3FF] bg-[#00F3FF]/15 text-[#00F3FF]'
                    : 'border-white/10 bg-[#121218] text-[#888899] hover:text-white'
                }`}
              >
                // {group.code}
              </button>
            ))}
          </div>
        </div>

        {/* HUD Capability Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedGroups.map((group) => {
            const isCyan = group.color === 'cyan';
            const isMagenta = group.color === 'magenta';

            return (
              <div
                key={group.id}
                className="bg-[#121218] border border-white/10 p-6 sm:p-7 relative hud-corner shadow-xl hover:border-white/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      isCyan ? 'bg-[#00F3FF]' : isMagenta ? 'bg-[#FF007F]' : 'bg-[#B026FF]'
                    }`} />
                    <span className="font-display font-bold text-sm tracking-wider text-white">
                      {group.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#888899] bg-[#0A0A0F] px-2 py-0.5 border border-white/5">
                    {group.code} // SUBSYSTEM
                  </span>
                </div>

                {/* Skills with Neon Progress Bars and Hexagonal Badges */}
                <div className="space-y-5">
                  {group.skills.map((skill) => {
                    const level = skill.level || 90;

                    return (
                      <div key={skill.name} className="space-y-1.5 group">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="text-[#00F3FF] group-hover:translate-x-0.5 transition-transform">
                              ⬡
                            </span>
                            <span className="text-white font-semibold tracking-wide">
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-[#888899]">
                            <span className="text-[10px] text-[#00F3FF]/80">CALIBRATED</span>
                            <span className="font-bold text-white text-[11px]">{level}%</span>
                          </div>
                        </div>

                        {/* High-tech sleek progress bar */}
                        <div className="h-1.5 w-full bg-[#0A0A0F] border border-white/5 overflow-hidden relative">
                          <div
                            className={`h-full transition-all duration-1000 ${
                              isCyan
                                ? 'bg-gradient-to-r from-[#00F3FF]/40 to-[#00F3FF] shadow-[0_0_8px_#00F3FF]'
                                : isMagenta
                                ? 'bg-gradient-to-r from-[#FF007F]/40 to-[#FF007F] shadow-[0_0_8px_#FF007F]'
                                : 'bg-gradient-to-r from-[#B026FF]/40 to-[#B026FF] shadow-[0_0_8px_#B026FF]'
                            }`}
                            style={{ width: `${level}%` }}
                          />
                        </div>

                        {/* Engineering context note */}
                        {skill.note && (
                          <div className="text-[10px] font-mono text-[#888899] pl-4 leading-tight">
                            {skill.note}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Systems Diagnostics & Engineering Mindset Banner */}
        <div className="p-6 bg-[#121218]/90 border border-[#00F3FF]/30 hud-corner-full relative shadow-[0_0_25px_rgba(0,243,255,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="space-y-1">
              <div className="text-[#00F3FF] font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>LOW-LEVEL SILICON TO HIGH-LEVEL CLOUD</span>
              </div>
              <p className="text-[#888899] text-[11px] leading-relaxed">
                Proficiency from C++ pointer arithmetic, memory management, and microcontroller pins up to high-speed cloud APIs and browser virtual DOMs.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-[#FF007F] font-bold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>HIGH CONCURRENCY ARCHITECTURE</span>
              </div>
              <p className="text-[#888899] text-[11px] leading-relaxed">
                Proven experience handling 12,000+ real live visitors via ASP.NET Core connection pooling, Redis caching, and indexed PostgreSQL queries.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-[#B026FF] font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>CLEAN SYSTEMS DISCIPLINES</span>
              </div>
              <p className="text-[#888899] text-[11px] leading-relaxed">
                Disciplined Git workflows, modular architecture, responsive mobile-first UX, and comprehensive project documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
