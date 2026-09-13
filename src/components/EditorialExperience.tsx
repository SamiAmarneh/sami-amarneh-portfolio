import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const EditorialExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#080B10] border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="space-y-3">
            <div className="font-mono-tech text-xs tracking-wider text-[#00F0FF] uppercase">
              03 / EXPERIENCE
            </div>
            <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-white leading-none">
              Built in<br />
              <span className="text-[#00F0FF]">public.</span>
            </h2>
          </div>

          <div className="max-w-md font-sans text-sm text-[#94A3B8] leading-relaxed">
            From embedded microcontrollers to high-concurrency web platforms, every role has sharpened the same instinct: build resilient systems.
          </div>
        </div>

        {/* Experience List */}
        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group hover:bg-[#0E131F]/70 transition-colors px-4 -mx-4 cursor-default"
            >
              {/* Period / Timeline Year */}
              <div className="lg:col-span-3 font-mono-tech text-xs tracking-widest text-[#00F0FF] font-bold">
                {exp.period}
              </div>

              {/* Title & Details */}
              <div className="lg:col-span-8 space-y-2">
                <div className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                  {exp.role}
                </div>
                <div className="font-mono-tech text-xs tracking-wider uppercase text-[#94A3B8]">
                  {exp.company} • {exp.location}
                </div>
                <p className="text-sm font-sans text-[#CBD5E1] leading-relaxed pt-1">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-1 pt-2 font-mono-tech text-xs text-[#94A3B8]">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00F0FF] mt-0.5">▹</span>
                      <span className="text-xs text-[#CBD5E1] leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono-tech text-[#94A3B8] bg-white/[0.03] border border-white/5 px-2.5 py-1 group-hover:border-[#00F0FF]/30 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="lg:col-span-1 hidden lg:flex justify-end">
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00F0FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
