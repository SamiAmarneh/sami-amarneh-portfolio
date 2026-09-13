import React, { useState } from 'react';
import { LeftRail } from './components/LeftRail';
import { HeaderNav } from './components/HeaderNav';
import { EditorialHero } from './components/EditorialHero';
import { SystemsArchive } from './components/SystemsArchive';
import { EditorialProfile } from './components/EditorialProfile';
import { EditorialExperience } from './components/EditorialExperience';
import { EditorialCapabilities } from './components/EditorialCapabilities';
import { EditorialContact } from './components/EditorialContact';
import { EditorialFooter } from './components/EditorialFooter';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F1F5F9] relative">
      {/* Fixed Left Vertical Telemetry Rail (Visible on lg screens) */}
      <LeftRail />

      {/* Main App Content Area */}
      <div className="lg:pl-16 flex flex-col min-h-screen">
        {/* Top Minimalist Header */}
        <HeaderNav onOpenResume={() => setResumeOpen(true)} />

        {/* Sections */}
        <main className="flex-grow">
          <EditorialHero
            onOpenProject={(proj) => setSelectedProject(proj)}
            onOpenResume={() => setResumeOpen(true)}
          />
          <SystemsArchive
            onOpenProject={(proj) => setSelectedProject(proj)}
          />
          <EditorialProfile />
          <EditorialExperience />
          <EditorialCapabilities />
          <EditorialContact />
        </main>

        {/* Footer */}
        <EditorialFooter />
      </div>

      {/* Project Architecture Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume / Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
