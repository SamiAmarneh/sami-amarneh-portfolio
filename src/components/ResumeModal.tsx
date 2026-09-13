import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_GROUPS } from '../data/portfolioData';
import { X, Printer, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0E131F] border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080B10] border-b border-white/10 font-mono-tech">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 text-xs font-bold">
              CV // 06
            </span>
            <div>
              <div className="text-[10px] text-[#94A3B8]">OFFICIAL CURRICULUM VITAE</div>
              <div className="text-white font-display font-bold text-base sm:text-lg">
                SAMI AMARNEH
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 border border-white/20 text-[#94A3B8] hover:text-[#00F0FF] hover:border-[#00F0FF] text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>

            <button
              onClick={() => {
                onClose();
              }}
              className="p-1.5 border border-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-mono-tech text-xs sm:text-sm print:p-0 print:text-black">
          {/* Header Profile Info */}
          <div className="p-6 bg-[#080B10] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                  Sami Amarneh
                </h1>
                <div className="text-xs sm:text-sm text-[#00F0FF] font-bold mt-1 uppercase">
                  Computer Systems Engineer
                </div>
              </div>

              <div className="space-y-1 text-left sm:text-right text-[11px] text-[#94A3B8]">
                <div>Jenin, Palestine</div>
                <div>+972 569 027 906</div>
                <div className="text-white font-semibold">{PERSONAL_INFO.email}</div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00F0FF] hover:underline inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile ↗</span>
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs text-[#00F0FF] uppercase tracking-wider font-bold mb-2">
                PROFESSIONAL SUMMARY
              </div>
              <p className="text-[#CBD5E1] leading-relaxed text-xs sm:text-sm font-sans">
                {PERSONAL_INFO.bio}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="text-xs text-[#00F0FF] tracking-wider uppercase flex items-center gap-2 border-b border-white/10 pb-1.5 font-bold">
              <Briefcase className="w-4 h-4" />
              <span>EXPERIENCE</span>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 bg-[#080B10] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">
                      {exp.role} <span className="text-[#94A3B8] font-normal">— {exp.company}, {exp.location}</span>
                    </span>
                    <span className="text-[#00F0FF] font-bold text-xs">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 pt-2 text-xs text-[#CBD5E1]">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00F0FF] mt-0.5">●</span>
                        <span className="leading-relaxed font-sans">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <div className="text-xs text-[#00F0FF] tracking-wider uppercase flex items-center gap-2 border-b border-white/10 pb-1.5 font-bold">
              <Award className="w-4 h-4" />
              <span>PROJECTS</span>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((prj) => (
                <div key={prj.id} className="p-4 bg-[#080B10] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{prj.title}</span>
                    <span className="text-[#00F0FF] font-bold text-xs">{prj.tag}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#CBD5E1] font-sans">
                    {(prj.cvBullets || prj.architectureHighlights).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00F0FF] mt-0.5">●</span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                  {prj.link && (
                    <div className="pt-1">
                      <a
                        href={prj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#00F0FF] hover:underline"
                      >
                        <span>Live: {prj.link}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Soft Skills */}
          <div className="space-y-3">
            <div className="text-xs text-[#00F0FF] tracking-wider uppercase flex items-center gap-2 border-b border-white/10 pb-1.5 font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>SKILLS</span>
            </div>

            <div className="p-4 bg-[#080B10] border border-white/5 space-y-3 text-xs">
              <div>
                <span className="font-bold text-white">Technical Skills: </span>
                <span className="text-[#CBD5E1] leading-relaxed">
                  C++, C#, Java, JavaScript, TypeScript, React, Next.js, HTML, CSS, ASP.NET Core, MVC, RESTful APIs, Flutter, Firebase, PostgreSQL, Redis/Valkey, Git, GitHub.
                </span>
              </div>
              <div>
                <span className="font-bold text-white">Soft Skills: </span>
                <span className="text-[#CBD5E1] leading-relaxed">
                  Teamwork &amp; Communication, Time Management, Fast Learning &amp; Adaptability, Attention to Detail, Leadership &amp; Mentoring.
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="text-xs text-[#00F0FF] tracking-wider uppercase flex items-center gap-2 border-b border-white/10 pb-1.5 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </div>

            <div className="p-4 bg-[#080B10] border border-white/5 space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Arab American University, Jenin</span>
                  <span className="text-[#00F0FF] font-bold">Expected 2026</span>
                </div>
                <div className="text-[#94A3B8]">BSc in Computer Engineering</div>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Izz Al-Din Al-Qassam Secondary School, Ya&apos;bad</span>
                  <span className="text-[#94A3B8]">2022</span>
                </div>
                <div className="text-[#94A3B8]">Tawjihi – Scientific Stream</div>
              </div>
            </div>
          </div>

          {/* Certificates & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#080B10] border border-white/5 space-y-2">
              <div className="text-xs text-[#00F0FF] font-bold tracking-wider uppercase border-b border-white/5 pb-1">
                CERTIFICATES
              </div>
              <ul className="space-y-1 text-xs text-[#CBD5E1]">
                <li>● Front-End Web Development – Al-Maarefa Academy</li>
                <li>● JavaScript Development Certificate – Al-Maarefa Academy</li>
              </ul>
            </div>

            <div className="p-4 bg-[#080B10] border border-white/5 space-y-2">
              <div className="text-xs text-[#00F0FF] font-bold tracking-wider uppercase border-b border-white/5 pb-1">
                LANGUAGES
              </div>
              <div className="text-xs text-[#CBD5E1] pt-1">
                <span className="font-bold text-white">Arabic:</span> Native &nbsp;|&nbsp; <span className="font-bold text-white">English:</span> Proficient
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="p-4 bg-[#080B10] border-t border-white/10 flex items-center justify-between font-mono-tech">
          <span className="text-[11px] text-[#94A3B8] hidden sm:block">
            OFFICIAL RECORD // PALESTINE
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
              }}
              className="px-5 py-2 border border-white/20 text-[#F1F5F9] hover:text-[#00F0FF] hover:border-[#00F0FF] text-xs cursor-pointer transition-colors"
            >
              [ CLOSE ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
