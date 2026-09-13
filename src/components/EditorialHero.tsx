import React from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface EditorialHeroProps {
  onOpenProject: (project: any) => void;
  onOpenResume: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenProject, onOpenResume }) => {
  const flagship = PROJECTS[0]; // Sara Shall

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeItems = [
    'HIGH CONCURRENCY',
    'ASP.NET CORE',
    'NEXT.JS',
    'REACT',
    'IoT & ESP32',
    'POSTGRESQL',
    'REDIS / VALKEY',
    'DISTRIBUTED SYSTEMS',
    'FLUTTER',
    'SYSTEMS RIGOR',
    'JENIN, PALESTINE'
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-0 overflow-hidden bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Editorial Display Typography & Bio */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Eyebrow Tag */}
            <div className="flex items-center justify-between font-mono-tech text-xs tracking-wider text-[#94A3B8] border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] inline-block shadow-[0_0_8px_#00F0FF]" />
                <span className="text-[#00F0FF] font-bold">AMARNEH</span>
                <span>/</span>
                <span className="uppercase text-[#94A3B8]">ENGINEERING PRACTICE</span>
              </div>
              <span className="text-white/40">[ B.SC. 2026 ]</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[0.95]">
              Engineering<br />
              <span className="text-[#00F0FF]">that scales</span><br />
              the frame.
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl font-normal font-sans">
              Sami R. Amarneh is a Computer Systems Engineer and Full-Stack Developer
              building resilient distributed web architectures, high-concurrency platforms (12,000+ users),
              and smart IoT systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 font-mono-tech text-xs tracking-wider">
              {/* Primary Solid Cyan Button */}
              <button
                onClick={() => scrollTo('archive')}
                className="px-5 py-3.5 bg-[#00F0FF] text-[#080B10] font-bold hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,240,255,0.25)]"
              >
                <span>Open the systems archive</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Secondary Conversation Link */}
              <button
                onClick={() => scrollTo('contact')}
                className="text-white hover:text-[#00F0FF] transition-colors flex items-center gap-1 cursor-pointer py-2"
              >
                <span>Start a conversation</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#00F0FF]" />
              </button>

              {/* CV Modal Link */}
              <button
                onClick={onOpenResume}
                className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1 py-2 cursor-pointer"
              >
                <span>Curriculum Vitae</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#00F0FF]" />
              </button>

              {/* LinkedIn External Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1 py-2"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bottom Meta Badges Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/5 font-mono-tech text-[11px] text-[#94A3B8] tracking-wider">
              <div>BASED IN JENIN, PALESTINE</div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="text-[#00F0FF]">AVAILABLE FOR SELECT COLLABORATIONS</div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="text-white/60">SCROLL TO EXPLORE ↓</div>
            </div>
          </div>

          {/* Right Column: Hero Feature Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#00F0FF]/30 bg-[#0E131F] p-6 sm:p-7 group shadow-2xl transition-all duration-300 hover:border-[#00F0FF]">
              {/* Corner Coordinate Badges */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 font-mono-tech text-xs">
                <span className="text-[#94A3B8]">FLAGSHIP // ARCHIVE_01</span>
                <div className="text-[#00F0FF] font-bold tracking-widest">
                  SA / 26
                </div>
              </div>

              {/* Visual Preview Graphic with Concurrency Metrics */}
              <div className="relative my-5 h-64 sm:h-72 bg-[#080B10] border border-white/5 overflow-hidden flex flex-col justify-between p-5">
                {/* Background decorative grid & glow */}
                <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top status within card */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tech">
                  <span className="px-2 py-0.5 bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-bold">
                    PRODUCTION ENGINE
                  </span>
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                    LIVE ON WEB
                  </span>
                </div>

                {/* Middle big metric presentation */}
                <div className="relative z-10 space-y-1 my-auto">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    12,000+
                  </div>
                  <div className="text-xs font-mono-tech text-[#00F0FF] font-semibold tracking-wider uppercase">
                    Users at Launch Concurrency
                  </div>
                  <p className="text-[11px] text-[#94A3B8] font-mono-tech pt-1">
                    Distributed caching with Redis &amp; ASP.NET Core pooling.
                  </p>
                </div>

                {/* Bottom telemetry line */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono-tech text-[#94A3B8] pt-2 border-t border-white/10">
                  <span>LATENCY: &lt;100ms</span>
                  <span>SSL: SECURED</span>
                  <span className="text-[#00F0FF]">sara-shall.com ↗</span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="space-y-3">
                <div className="text-base font-display font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                  {flagship.title}
                </div>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed line-clamp-2">
                  {flagship.description}
                </p>

                <div className="pt-2 flex items-center justify-between font-mono-tech text-xs">
                  <button
                    onClick={() => {
                      onOpenProject(flagship);
                    }}
                    className="text-[#00F0FF] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect architecture specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={flagship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00F0FF] transition-colors"
                  >
                    Launch [↗]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner running across */}
      <div className="mt-16 sm:mt-20 bg-[#00F0FF] text-[#080B10] py-3 overflow-hidden select-none border-y border-[#00F0FF]">
        <div className="animate-marquee font-mono-tech font-bold text-xs tracking-widest uppercase flex items-center gap-8 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="text-[#080B10]/40">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
