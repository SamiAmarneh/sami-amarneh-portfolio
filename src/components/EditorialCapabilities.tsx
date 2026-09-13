import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const EditorialCapabilities: React.FC = () => {
  const [, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#080B10] border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="space-y-3">
            <div className="font-mono-tech text-xs tracking-wider text-[#00F0FF] uppercase">
              04 / SYSTEM CAPABILITIES
            </div>
            <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-white leading-none">
              Technical<br />
              <span className="text-[#00F0FF]">matrix.</span>
            </h2>
          </div>

          <div className="max-w-md font-sans text-sm text-[#94A3B8] leading-relaxed">
            Full-stack, backend architecture, and embedded systems competencies. Evaluated by production impact, concurrency resilience, and architectural precision rather than arbitrary metrics.
          </div>
        </div>

        {/* Matrix Grid: 4 Clean Columns without percentages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((category) => (
            <div
              key={category.id}
              className="border border-white/5 bg-[#0E131F] p-6 space-y-6 hover:border-[#00F0FF]/40 transition-colors group relative flex flex-col justify-between"
            >
              {/* Category Card Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="font-mono-tech text-xs text-[#00F0FF] font-bold tracking-wider">
                    {category.title}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#94A3B8] bg-white/[0.04] px-1.5 py-0.5 border border-white/5">
                    {category.code}
                  </span>
                </div>

                {/* Skills List without percentages */}
                <div className="divide-y divide-white/5 pt-1">
                  {category.skills.map((skill) => {
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => {
                          setActiveSkill(skill.name);
                        }}
                        onMouseLeave={() => setActiveSkill(null)}
                        className="py-3.5 group/skill cursor-default transition-all duration-150"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]/40 group-hover/skill:bg-[#00F0FF] group-hover/skill:scale-125 transition-all shadow-[0_0_6px_rgba(0,240,255,0.4)]" />
                            <span className="text-sm font-display font-semibold text-white group-hover/skill:text-[#00F0FF] transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono-tech text-[#94A3B8] group-hover/skill:text-white uppercase tracking-wider">
                            ACTIVE
                          </span>
                        </div>

                        {/* Technical contextual note */}
                        {skill.note && (
                          <p className="text-[11px] font-mono-tech text-[#94A3B8] group-hover/skill:text-[#CBD5E1] leading-relaxed mt-1.5 pl-3.5 transition-colors">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono-tech text-[10px] text-[#94A3B8]">
                <span>STATUS: VERIFIED</span>
                <span className="text-[#00F0FF]">READY ▹</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
