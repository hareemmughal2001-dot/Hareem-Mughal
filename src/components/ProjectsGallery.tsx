import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsGalleryProps {
  onSelectProjectForInquiry: (project: Project) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProjectForInquiry,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleInquire = (project: Project) => {
    onSelectProjectForInquiry(project);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#F7F4EE] border-b border-[#20201E]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#20201E]/10">
          <div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.25em] uppercase text-[#A79B8A] mb-4 font-medium"
            >
              Curated Portfolio
            </motion.div>
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#20201E] tracking-tight"
            >
              Selected Projects
            </motion.h2>
          </div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.18em] text-[#A79B8A] max-w-xs text-left sm:text-right"
          >
            Distinctive residences and villas sculpted with natural materials & light.
          </motion.p>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="mt-16 sm:mt-24 space-y-28 sm:space-y-36">
          {/* Project 01: The Quiet Residence */}
          {PROJECTS[0] && (
            <motion.article
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group cursor-pointer"
              onClick={() => setSelectedProject(PROJECTS[0])}
            >
              {/* Media Card (7 cols) */}
              <div className="lg:col-span-7 overflow-hidden relative bg-[#E7DFD2] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={PROJECTS[0].image}
                    alt={PROJECTS[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                {/* Overlay badge with inspect icon */}
                <div className="absolute top-4 left-4 bg-[#F7F4EE]/90 backdrop-blur-sm px-3 py-1 text-xs font-mono text-[#20201E] tracking-wider">
                  {PROJECTS[0].number}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#20201E]/80 backdrop-blur-sm text-[#F7F4EE] px-3.5 py-1.5 text-[11px] tracking-widest uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Meta (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] mb-3">
                  {PROJECTS[0].category} · {PROJECTS[0].year}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#20201E] group-hover:text-[#20201E]/80 transition-colors">
                  {PROJECTS[0].title}
                </h3>
                <p className="mt-5 text-sm sm:text-base text-[#20201E]/80 font-light leading-relaxed">
                  {PROJECTS[0].brief}
                </p>

                <div className="mt-6 pt-6 border-t border-[#20201E]/10 flex items-center justify-between">
                  <span className="text-xs text-[#A79B8A] tracking-wider uppercase">
                    {PROJECTS[0].location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.15em] uppercase text-[#20201E] group-hover:translate-x-1 transition-transform">
                    <span>Explore Space</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Project 02: The Modern Retreat (Inverted Asymmetrical Grid) */}
          {PROJECTS[1] && (
            <motion.article
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group cursor-pointer"
              onClick={() => setSelectedProject(PROJECTS[1])}
            >
              {/* Text Meta (5 cols, ordered first on desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] mb-3">
                  {PROJECTS[1].category} · {PROJECTS[1].year}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#20201E] group-hover:text-[#20201E]/80 transition-colors">
                  {PROJECTS[1].title}
                </h3>
                <p className="mt-5 text-sm sm:text-base text-[#20201E]/80 font-light leading-relaxed">
                  {PROJECTS[1].brief}
                </p>

                <div className="mt-6 pt-6 border-t border-[#20201E]/10 flex items-center justify-between">
                  <span className="text-xs text-[#A79B8A] tracking-wider uppercase">
                    {PROJECTS[1].location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.15em] uppercase text-[#20201E] group-hover:translate-x-1 transition-transform">
                    <span>Explore Space</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Media Card (7 cols, ordered second on desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden relative bg-[#E7DFD2] shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={PROJECTS[1].image}
                    alt={PROJECTS[1].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#F7F4EE]/90 backdrop-blur-sm px-3 py-1 text-xs font-mono text-[#20201E] tracking-wider">
                  {PROJECTS[1].number}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#20201E]/80 backdrop-blur-sm text-[#F7F4EE] px-3.5 py-1.5 text-[11px] tracking-widest uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          )}

          {/* Project 03: The Atelier Apartment (Wide Dramatic Layout) */}
          {PROJECTS[2] && (
            <motion.article
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group cursor-pointer"
              onClick={() => setSelectedProject(PROJECTS[2])}
            >
              {/* Media Card (8 cols) */}
              <div className="lg:col-span-8 overflow-hidden relative bg-[#E7DFD2] shadow-sm">
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={PROJECTS[2].image}
                    alt={PROJECTS[2].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#F7F4EE]/90 backdrop-blur-sm px-3 py-1 text-xs font-mono text-[#20201E] tracking-wider">
                  {PROJECTS[2].number}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#20201E]/80 backdrop-blur-sm text-[#F7F4EE] px-3.5 py-1.5 text-[11px] tracking-widest uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <Plus className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Meta (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] mb-3">
                  {PROJECTS[2].category} · {PROJECTS[2].year}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#20201E] group-hover:text-[#20201E]/80 transition-colors">
                  {PROJECTS[2].title}
                </h3>
                <p className="mt-5 text-sm sm:text-base text-[#20201E]/80 font-light leading-relaxed">
                  {PROJECTS[2].brief}
                </p>

                <div className="mt-6 pt-6 border-t border-[#20201E]/10 flex items-center justify-between">
                  <span className="text-xs text-[#A79B8A] tracking-wider uppercase">
                    {PROJECTS[2].location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.15em] uppercase text-[#20201E] group-hover:translate-x-1 transition-transform">
                    <span>Explore Space</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleInquire}
      />
    </section>
  );
};
