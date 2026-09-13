import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Layers, ExternalLink } from 'lucide-react';

interface SystemsArchiveProps {
  onOpenProject: (project: Project) => void;
}

export const SystemsArchive: React.FC<SystemsArchiveProps> = ({ onOpenProject }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = PROJECTS[activeProjectIndex];

  return (
    <section id="archive" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#080B10] border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="space-y-3">
            <div className="font-mono-tech text-xs tracking-wider text-[#00F0FF] uppercase">
              01 / SELECTED WORK
            </div>
            <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-white leading-none">
              A systems<br />
              <span className="text-[#00F0FF]">archive.</span>
            </h2>
          </div>

          <div className="max-w-md font-sans text-sm text-[#94A3B8] leading-relaxed">
            All production systems and engineering missions — from 12,000+ user high-concurrency commerce to embedded IoT telemetry. Click through to inspect the architecture.
          </div>
        </div>

        {/* Split Grid: Left = List Table; Right = Dynamic Inspector Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: List Table */}
          <div className="lg:col-span-6 divide-y divide-white/5 border-t border-b border-white/5 font-mono-tech">
            {PROJECTS.map((project, idx) => {
              const isActive = idx === activeProjectIndex;
              const numStr = `0${idx + 1}`;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIndex(idx);
                  }}
                  onMouseEnter={() => {
                    setActiveProjectIndex(idx);
                  }}
                  className={`py-6 px-3 flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                    isActive ? 'bg-[#0E131F] border-l-2 border-[#00F0FF]' : 'hover:bg-[#0E131F]/50'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isActive ? 'text-[#00F0FF]' : 'text-[#94A3B8] group-hover:text-white'
                      }`}
                    >
                      {numStr}
                    </span>
                    <div>
                      <div
                        className={`text-base sm:text-lg font-display font-bold transition-colors ${
                          isActive ? 'text-[#00F0FF]' : 'text-white group-hover:text-[#00F0FF]'
                        }`}
                      >
                        {project.title}
                      </div>
                      <div className="text-[11px] text-[#94A3B8] tracking-wider uppercase mt-1">
                        {project.tag}
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? 'text-[#00F0FF] translate-x-1 -translate-y-1'
                        : 'text-[#94A3B8] group-hover:text-white'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Live Preview Pane */}
          <div className="lg:col-span-6">
            <div className="bg-[#0E131F] border border-[#00F0FF]/30 p-6 sm:p-8 space-y-6 shadow-2xl relative">
              {/* Top Banner */}
              <div className="flex items-center justify-between font-mono-tech text-xs pb-4 border-b border-white/10">
                <span className="text-[#94A3B8]">
                  CASE / 0{activeProjectIndex + 1} • {activeProject.category}
                </span>
                <span className="text-[#00F0FF] font-bold">
                  {activeProject.code}
                </span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-1">
                <h3 className="text-2xl font-display font-bold text-white">
                  {activeProject.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#00F0FF]">
                  {activeProject.subtitle}
                </div>
              </div>

              {/* Core Description */}
              <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                {activeProject.description}
              </p>

              {/* Key Architecture Bullets */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="text-[11px] font-mono-tech text-[#94A3B8] uppercase tracking-wider">
                  SYSTEM SPECIFICATIONS:
                </div>
                <ul className="space-y-2 font-mono-tech text-xs text-[#F1F5F9]">
                  {activeProject.architectureHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00F0FF] mt-0.5">▹</span>
                      <span className="text-xs leading-relaxed text-[#94A3B8]">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="text-[11px] font-mono-tech text-[#94A3B8] uppercase tracking-wider">
                  TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#080B10] border border-[#00F0FF]/25 text-xs font-mono-tech text-[#00F0FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between font-mono-tech text-xs">
                <button
                  onClick={() => {
                    onOpenProject(activeProject);
                  }}
                  className="px-4 py-2.5 bg-[#00F0FF] text-[#080B10] font-bold hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00F0FF] transition-colors flex items-center gap-1"
                  >
                    <span>Visit Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
