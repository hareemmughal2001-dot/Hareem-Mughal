/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ServicesSection } from './components/ServicesSection';
import { CreativeStatement } from './components/CreativeStatement';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StudioModal } from './components/StudioModal';
import { Project } from './types';

export default function App() {
  const [selectedInquirySubject, setSelectedInquirySubject] = useState<string>('');
  const [isStudioModalOpen, setIsStudioModalOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectInquiry = (project: Project) => {
    setSelectedInquirySubject(`${project.title} (${project.category})`);
    scrollToContact();
  };

  const handleServiceInquiry = (serviceName: string) => {
    setSelectedInquirySubject(serviceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#20201E] flex flex-col selection:bg-[#20201E] selection:text-[#F7F4EE]">
      {/* Primary Top Navigation Bar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={scrollToProjects}
          onStartProject={scrollToContact}
        />

        {/* 2. Studio Introduction */}
        <StudioIntro onDiscoverStudio={() => setIsStudioModalOpen(true)} />

        {/* 3. Selected Projects Gallery with Detail Modals */}
        <ProjectsGallery onSelectProjectForInquiry={handleProjectInquiry} />

        {/* 4. Our Services with Expandable Scope Deliverables */}
        <ServicesSection onSelectService={handleServiceInquiry} />

        {/* 5. Full-Width Visual Creative Statement */}
        <CreativeStatement />

        {/* 6. Four-Step Process Methodology */}
        <ProcessSection />

        {/* 7. Client Testimonials (Demonstration Reviews) */}
        <TestimonialsSection />

        {/* 8. Contact Consultation & Inquiry Form */}
        <ContactSection
          preselectedServiceOrProject={selectedInquirySubject}
          onClearPreselection={() => setSelectedInquirySubject('')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Studio Monograph Modal */}
      <StudioModal
        isOpen={isStudioModalOpen}
        onClose={() => setIsStudioModalOpen(false)}
        onStartInquiry={() => {
          setIsStudioModalOpen(false);
          scrollToContact();
        }}
      />
    </div>
  );
}
