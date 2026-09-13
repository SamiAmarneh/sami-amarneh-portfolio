import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundManager } from '../utils/audio';
import { ExternalLink, Layers, ArrowUpRight, Radio, Cpu, ShieldCheck, Flame, Server } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'FLAGSHIP' | 'IoT / MOBILE' | 'FULL-STACK'>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] relative cyber-grid">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00F3FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono text-[#00F3FF] tracking-widest uppercase flex items-center gap-2">
              <span>// 03. CORE_PROJECT_ARCHIVE</span>
              <span className="text-white/20">|</span>
              <span className="text-[#888899]">MISSION FILES &amp; DEPLOYED REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide uppercase mt-1">
              MISSION <span className="text-[#00F3FF]">FILES</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {(['ALL', 'FLAGSHIP', 'IoT / MOBILE', 'FULL-STACK'] as const).map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedFilter(filter);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-3 py-1.5 border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-[#00F3FF] bg-[#00F3FF]/15 text-[#00F3FF] shadow-[0_0_12px_rgba(0,243,255,0.3)]'
                      : 'border-white/10 bg-[#121218] text-[#888899] hover:text-white hover:border-white/20'
                  }`}
                >
                  // {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.isFlagship;

            return (
              <div
                key={project.id}
                className={`group relative bg-[#121218] border transition-all duration-300 hud-corner-full ${
                  isFlagship
                    ? 'lg:col-span-12 border-[#00F3FF]/40 hover:border-[#00F3FF] shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:shadow-[0_0_40px_rgba(0,243,255,0.25)]'
                    : 'lg:col-span-6 border-white/10 hover:border-[#00F3FF]/50 hover:shadow-[0_0_25px_rgba(0,243,255,0.15)]'
                }`}
              >
                {/* Top Status Banner */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#0A0A0F] border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#00F3FF]">{project.code}</span>
                    <span className="text-white/20">|</span>
                    <span className={`text-[10px] px-2 py-0.5 font-bold ${
                      isFlagship
                        ? 'bg-[#FF007F]/20 text-[#FF007F] border border-[#FF007F]/40 animate-pulse'
                        : 'bg-[#00F3FF]/10 text-[#00F3FF] border border-[#00F3FF]/30'
                    }`}>
                      {project.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#888899]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F3FF]" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Flagship Concurrency Callout */}
                  {isFlagship && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF007F]/10 border border-[#FF007F]/30 text-xs font-mono text-[#FF007F]">
                      <Flame className="w-3.5 h-3.5 animate-bounce text-[#FF007F]" />
                      <span className="font-bold">FLAGSHIP DEPLOYMENT: 12,000+ REAL USERS AT LAUNCH</span>
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#00F3FF] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-[#888899] mt-1">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Exact Project Description */}
                  <p className="text-sm font-mono text-[#E0E0E5]/90 leading-relaxed bg-[#0A0A0F]/60 p-4 border-l-2 border-[#00F3FF]">
                    {project.description}
                  </p>

                  {/* Key Highlights / Metrics */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-[#00F3FF] uppercase tracking-wider">
                      ARCHITECTURE SPECIFICATIONS:
                    </div>
                    <ul className="space-y-1.5 font-mono text-xs text-[#888899]">
                      {project.architectureHighlights.slice(0, isFlagship ? 4 : 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#00F3FF]">▹</span>
                          <span className="text-[#E0E0E5]/80">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <div className="text-[11px] font-mono text-[#888899] uppercase tracking-wider mb-2">
                      TECH STACK:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#0A0A0F] border border-white/10 text-xs font-mono text-[#00F3FF] hover:border-[#00F3FF]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="px-6 py-4 bg-[#0A0A0F] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setActiveModalProject(project);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className="px-4 py-2 border border-white/20 text-[#E0E0E5] hover:text-[#00F3FF] hover:border-[#00F3FF] font-mono text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#00F3FF]" />
                    <span>[ MISSION BRIEFING ]</span>
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      onMouseEnter={() => soundManager.playHover()}
                      className={`px-5 py-2 font-display font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                        isFlagship
                          ? 'bg-[#00F3FF] text-[#0A0A0F] hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]'
                          : 'border border-[#FF007F] text-[#FF007F] hover:bg-[#FF007F] hover:text-black'
                      }`}
                    >
                      <span>LAUNCH SYSTEM</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
