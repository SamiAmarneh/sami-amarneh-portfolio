import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export const EditorialContact: React.FC = () => {
  const whatsappUrl = `https://wa.me/972569027906?text=Hello%20Sami,%20I%20would%20like%20to%20connect%20regarding%20a%20project.`;

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-10 bg-[#080B10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Subdued Watermark Typography */}
          <div className="lg:col-span-5 select-none pointer-events-none hidden lg:block">
            <div className="text-7xl xl:text-8xl font-display font-extrabold tracking-tighter text-[#111A29] leading-[0.88] uppercase">
              LET&apos;S<br />
              TALK<br />
              SYSTEMS.
            </div>
          </div>

          {/* Right Column: Giant Solid Electric Cyan Contact Card (WhatsApp Exclusive) */}
          <div className="lg:col-span-7">
            <div className="bg-[#00F0FF] text-[#080B10] p-8 sm:p-14 shadow-[0_0_50px_rgba(0,240,255,0.2)] relative">
              {/* Eyebrow */}
              <div className="font-mono-tech text-xs tracking-wider uppercase text-[#080B10]/70 pb-6 border-b border-[#080B10]/15 flex items-center justify-between">
                <span>05 / CONTACT</span>
                <span>JENIN // 32°27&apos;N</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight leading-[0.95] py-8">
                Have a system<br />
                in mind?
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#080B10]/85 font-sans leading-relaxed pb-8 max-w-lg">
                Available for engineering contracts, web platforms, and technical consultations. Reach out directly via WhatsApp for fast communication.
              </p>

              {/* Primary WhatsApp Direct Contact Banner */}
              <div className="py-6 border-t border-[#080B10]/15">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-4 border-2 border-[#080B10] bg-[#080B10] text-[#00F0FF] hover:bg-transparent hover:text-[#080B10] transition-all duration-200 font-mono-tech text-sm sm:text-base font-bold shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp me directly: {PERSONAL_INFO.phone}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Bottom Minimal Location Tag */}
              <div className="pt-6 border-t border-[#080B10]/15 flex items-center justify-between font-mono-tech text-xs text-[#080B10]/70 tracking-wider">
                <span>BASE: JENIN, PALESTINE 🇵🇸</span>
                <span>RESPONSE TIME: FAST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
