import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  Terminal,
  ExternalLink,
  Radio,
  Clock,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Message transmission form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [transmissionStatus, setTransmissionStatus] = useState<'idle' | 'transmitting' | 'transmitted'>('idle');

  // Interactive micro-terminal commands
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ type: string; text: string }>>([
    { type: 'sys', text: 'SYSTEM: Uplink established with Jenin, Palestine (32.46°N, 35.29°E)' },
    { type: 'sys', text: 'AVAILABLE COMMANDS: help, projects, skills, resume, clear, ping' }
  ]);

  const copyToClipboard = (text: string, fieldId: string) => {
    soundManager.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setTransmissionStatus('transmitting');

    setTimeout(() => {
      soundManager.playSuccess();
      setTransmissionStatus('transmitted');

      // Create mailto link as direct protocol dispatch
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        subject || `Connection from ${senderName || 'Visitor'}`
      )}&body=${encodeURIComponent(
        `From: ${senderName} (${senderEmail})\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUrl;

      // Add to terminal logs
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: 'success',
          text: `> TRANSMISSION DISPATCHED TO ${PERSONAL_INFO.email} // STATUS: 200 OK`
        }
      ]);
    }, 600);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    soundManager.playKeyType();
    const newLogs = [...terminalLogs, { type: 'input', text: `> ${terminalInput}` }];

    if (cmd === 'help') {
      newLogs.push({
        type: 'sys',
        text: 'COMMANDS: help, projects, skills, resume, ping, clear, contact'
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'ping') {
      newLogs.push({
        type: 'sys',
        text: 'PONG: 14ms latency // Secure channel to Palestine server node active'
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        type: 'sys',
        text: 'CORE: C++, C#, Java, JS, TS | FRONT: React, Next.js, Flutter | BACK: ASP.NET Core, Redis, Postgres'
      });
    } else if (cmd === 'projects') {
      newLogs.push({
        type: 'sys',
        text: 'PRJ-01: Sara Shall E-Commerce (12K+ users) | PRJ-02: AAUP Bus IoT (ESP32) | PRJ-03: Eva Dar Fashion'
      });
    } else if (cmd === 'resume' || cmd === 'cv') {
      onOpenResume();
      newLogs.push({
        type: 'success',
        text: 'ACCESSING ENCRYPTED CV DOSSIER... [OPENED IN VIEWER]'
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        type: 'sys',
        text: `EMAIL: ${PERSONAL_INFO.email} | TEL: ${PERSONAL_INFO.phone} | LOCATION: ${PERSONAL_INFO.location}`
      });
    } else {
      newLogs.push({
        type: 'error',
        text: `UNKNOWN COMMAND: "${cmd}". Type "help" for valid directives.`
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] relative cyber-grid">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono text-[#00F3FF] tracking-widest uppercase flex items-center gap-2">
              <span>// 05. DIRECT_COMMUNICATION_UPLINK</span>
              <span className="text-white/20">|</span>
              <span className="text-[#888899]">SECURE ENCRYPTED CHANNEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide uppercase mt-1">
              ESTABLISH <span className="text-[#00F3FF]">CONNECTION</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#00F3FF]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>CHANNEL READY // AWAITING PACKETS</span>
          </div>
        </div>

        {/* Prompt Requirement: Terminal style input pre-heading */}
        <div className="p-3 bg-[#121218] border border-[#00F3FF]/40 text-xs font-mono text-[#00F3FF] tracking-wider flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F3FF] animate-ping" />
            <span className="font-bold">&gt; send_message --to {PERSONAL_INFO.email}</span>
          </div>
          <span className="text-[10px] text-[#888899] hidden sm:block">STATUS: 200_READY</span>
        </div>

        {/* Split Grid: Left = Communication Transceiver Form & Interactive Terminal; Right = Contact Dossier Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Transmission Form & Micro Terminal */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form Card */}
            <div className="bg-[#121218] border border-white/10 p-6 sm:p-8 relative hud-corner shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00F3FF]" />
                  <span className="font-display font-bold text-sm tracking-wider text-white">
                    PACKET TRANSMISSION PROTOCOL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00F3FF]">ENCRYPTION: TLS 1.3</span>
              </div>

              {transmissionStatus === 'transmitted' ? (
                <div className="p-6 bg-[#0A0A0F] border border-[#00F3FF]/50 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#00F3FF]/20 text-[#00F3FF] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">TRANSMISSION DISPATCHED</h3>
                  <p className="text-xs font-mono text-[#888899] max-w-md mx-auto">
                    Your transmission has been forwarded directly to Sami Amarneh's secure inbox (
                    {PERSONAL_INFO.email}). Expected response time: under 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setTransmissionStatus('idle');
                      setMessage('');
                      setSubject('');
                    }}
                    className="px-4 py-2 border border-[#00F3FF] text-[#00F3FF] hover:bg-[#00F3FF] hover:text-black font-mono text-xs cursor-pointer transition-all"
                  >
                    [ DISPATCH ANOTHER PACKET ]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[#888899] text-[11px] block">
                        // SENDER_NAME <span className="text-[#FF007F]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        onKeyDown={() => soundManager.playKeyType()}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3 py-2.5 bg-[#0A0A0F] border border-white/10 focus:border-[#00F3FF] text-white placeholder-white/20 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[#888899] text-[11px] block">
                        // RETURN_EMAIL <span className="text-[#FF007F]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        onKeyDown={() => soundManager.playKeyType()}
                        placeholder="e.g. contact@domain.com"
                        className="w-full px-3 py-2.5 bg-[#0A0A0F] border border-white/10 focus:border-[#00F3FF] text-white placeholder-white/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#888899] text-[11px] block">
                      // MISSION_SUBJECT
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      onKeyDown={() => soundManager.playKeyType()}
                      placeholder="e.g. Full-Stack Project Inquiry / Engineering Opportunity"
                      className="w-full px-3 py-2.5 bg-[#0A0A0F] border border-white/10 focus:border-[#00F3FF] text-white placeholder-white/20 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#888899] text-[11px] block">
                      // PAYLOAD_CONTENT <span className="text-[#FF007F]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={() => soundManager.playKeyType()}
                      placeholder="Enter mission specifications, opportunity details, or technical inquiries..."
                      className="w-full px-3 py-2.5 bg-[#0A0A0F] border border-white/10 focus:border-[#00F3FF] text-white placeholder-white/20 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="text-[10px] text-[#888899]">
                      PACKET_SIZE: {message.length} BYTES
                    </div>

                    <button
                      type="submit"
                      disabled={transmissionStatus === 'transmitting'}
                      onMouseEnter={() => soundManager.playHover()}
                      className="px-6 py-3 bg-[#00F3FF] text-[#0A0A0F] hover:bg-white font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>
                        {transmissionStatus === 'transmitting'
                          ? 'TRANSMITTING...'
                          : '[ DISPATCH TRANSMISSION ]'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Interactive HUD Micro-Terminal */}
            <div className="bg-[#121218] border border-white/10 p-4 font-mono text-xs space-y-3 hud-corner">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-[#888899]">
                <div className="flex items-center gap-2 text-[#00F3FF]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>INTERACTIVE_SYSTEM_CLI</span>
                </div>
                <div>TYPE &quot;help&quot; FOR DIRECTIVES</div>
              </div>

              <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                {terminalLogs.map((log, index) => (
                  <div
                    key={index}
                    className={`leading-relaxed ${
                      log.type === 'input'
                        ? 'text-white font-bold'
                        : log.type === 'error'
                        ? 'text-[#FF007F]'
                        : log.type === 'success'
                        ? 'text-[#00F3FF]'
                        : 'text-[#888899]'
                    }`}
                  >
                    {log.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-1 border-t border-white/10">
                <span className="text-[#00F3FF] font-bold">&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type a command (e.g. help, skills, ping)..."
                  className="flex-1 bg-transparent text-white outline-none text-xs placeholder-white/20 font-mono"
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 bg-[#00F3FF]/20 text-[#00F3FF] text-[10px] hover:bg-[#00F3FF] hover:text-black transition-colors"
                >
                  EXEC
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Exact Coordinates & Social Link Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Coordinate 1: Location */}
            <div className="bg-[#121218] border border-white/10 p-5 relative hud-corner hover:border-[#00F3FF]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A0A0F] border border-white/10 text-[#00F3FF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#888899]">PHYSICAL_NODE_LOCATION</div>
                    <div className="font-display font-bold text-base text-white mt-0.5">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs font-mono text-[#00F3FF] mt-0.5">
                      32.4646° N, 35.2939° E
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#00F3FF]/10 text-[#00F3FF] border border-[#00F3FF]/20">
                  SECURE
                </span>
              </div>
            </div>

            {/* Coordinate 2: Phone */}
            <div className="bg-[#121218] border border-white/10 p-5 relative hud-corner hover:border-[#00F3FF]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A0A0F] border border-white/10 text-[#FF007F]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#888899]">VOICE_&amp;_TELEPHONY</div>
                    <div className="font-mono font-bold text-sm sm:text-base text-white mt-0.5">
                      {PERSONAL_INFO.phone}
                    </div>
                    <div className="text-xs font-mono text-[#888899] mt-0.5">
                      Direct &amp; WhatsApp Protocol
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 border border-white/10 hover:border-[#00F3FF] text-[#888899] hover:text-[#00F3FF] transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-[#00F3FF]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Coordinate 3: Email */}
            <div className="bg-[#121218] border border-white/10 p-5 relative hud-corner hover:border-[#00F3FF]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A0A0F] border border-white/10 text-[#00F3FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-[#888899]">ELECTRONIC_MAIL_RELAY</div>
                    <div className="font-mono font-bold text-xs sm:text-sm text-white mt-0.5 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                    <div className="text-xs font-mono text-[#00F3FF] mt-0.5">
                      PGP / SMTP Verified
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 border border-white/10 hover:border-[#00F3FF] text-[#888899] hover:text-[#00F3FF] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-[#00F3FF]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Coordinate 4: LinkedIn & External Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                className="p-4 bg-[#121218] border border-white/10 hover:border-[#00F3FF] hover:bg-[#00F3FF]/5 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-[#00F3FF] group-hover:scale-110 transition-transform" />
                  <div className="text-left font-mono">
                    <div className="text-xs font-bold text-white">LINKEDIN</div>
                    <div className="text-[10px] text-[#888899]">Network Profile</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#888899] group-hover:text-[#00F3FF]" />
              </a>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="p-4 bg-[#121218] border border-[#FF007F]/40 hover:border-[#FF007F] hover:bg-[#FF007F]/10 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#FF007F] group-hover:rotate-12 transition-transform" />
                  <div className="text-left font-mono">
                    <div className="text-xs font-bold text-white">CURRICULUM</div>
                    <div className="text-[10px] text-[#FF007F]">View CV Dossier</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF007F]" />
              </button>
            </div>

            {/* Systems Engineering Availability Callout */}
            <div className="p-4 bg-[#0A0A0F] border border-white/10 text-xs font-mono space-y-2">
              <div className="text-[#00F3FF] font-bold flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>AVAILABILITY SCHEDULE:</span>
              </div>
              <p className="text-[#888899] text-[11px] leading-relaxed">
                Accepting inquiries for full-stack web engineering, high-concurrency systems development, IoT solutions, and software engineering roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
