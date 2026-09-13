import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0E131F] border border-[#00F0FF]/40 shadow-[0_0_50px_rgba(0,240,255,0.15)] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080B10] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-mono-tech text-xs font-bold">
              {project.code}
            </span>
            <div>
              <div className="text-[10px] font-mono-tech text-[#94A3B8]">ARCHITECTURE SPECIFICATION</div>
              <div className="text-white font-display font-bold text-lg truncate max-w-md">
                {project.title}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
            }}
            className="p-1.5 border border-white/10 text-[#94A3B8] hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono-tech text-sm">
          {/* Tag & Status Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#080B10] border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-bold">
                {project.tag}
              </span>
              <span className="text-xs text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                STATUS: {project.status}
              </span>
            </div>

            {project.metrics && (
              <div className="text-xs text-[#00F0FF] font-semibold bg-white/5 px-2.5 py-1 border border-white/10">
                ⚡ {project.metrics}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <div className="text-xs text-[#00F0FF] tracking-wider uppercase mb-1">EXECUTIVE SUMMARY:</div>
            <p className="text-[#F1F5F9] font-sans leading-relaxed bg-[#080B10]/60 p-4 border-l-2 border-[#00F0FF]">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div>
            <div className="text-xs text-[#00F0FF] tracking-wider uppercase mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00F0FF]" />
              <span>SYSTEM ARCHITECTURE &amp; CONCURRENCY DESIGN</span>
            </div>

            <div className="space-y-2.5">
              {project.architectureHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 bg-[#080B10] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#F1F5F9]/90 leading-relaxed font-sans">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Modules */}
          <div>
            <div className="text-xs text-[#94A3B8] tracking-wider uppercase mb-2">DEPLOYED TECH STACK:</div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#080B10] border border-[#00F0FF]/30 text-[#00F0FF] text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 bg-[#080B10] border-t border-white/10 flex items-center justify-between font-mono-tech">
          <div className="text-[11px] text-[#94A3B8] hidden sm:block">
            NODE: JENIN, PALESTINE // SYSTEMS 2026
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
              }}
              className="px-4 py-2 border border-white/10 text-[#94A3B8] hover:text-white text-xs cursor-pointer"
            >
              [ CLOSE ]
            </button>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#00F0FF] text-[#080B10] hover:bg-white font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <span>VISIT LIVE SYSTEM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
