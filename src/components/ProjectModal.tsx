import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MapPin, Maximize2, Calendar, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-[#20201E]/75 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#F7F4EE] shadow-2xl overflow-hidden pointer-events-auto border border-[#20201E]/15"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Header / Close Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#20201E]/10 bg-[#F7F4EE]">
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#A79B8A]">
                <span className="font-editorial text-lg text-[#20201E]">{project.number}</span>
                <span aria-hidden="true">·</span>
                <span>{project.category}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#20201E] hover:opacity-60 transition-opacity"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[82vh] overflow-y-auto">
              {/* Full Width Hero Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#E7DFD2]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-[#20201E]/80 backdrop-blur-sm text-[#F7F4EE] px-3 py-1.5 text-[11px] tracking-wider uppercase">
                  Atelier Noir Archive
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-6 sm:p-10 lg:p-12 space-y-10">
                {/* Title & Metadata Strip */}
                <div className="border-b border-[#20201E]/10 pb-8">
                  <h2
                    id="modal-project-title"
                    className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#20201E]"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-3 text-base sm:text-lg text-[#20201E]/80 font-light max-w-2xl">
                    {project.brief}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#20201E]/10">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Location
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#20201E] mt-1 block">
                        {project.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" /> Spatial Area
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#20201E] mt-1 block">
                        {project.area}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> Completion
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#20201E] mt-1 block">
                        {project.year}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] block">
                        Typology
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#20201E] mt-1 block truncate">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spatial Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A79B8A] block">
                      Architectural Narrative
                    </span>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base text-[#20201E]/85 leading-relaxed font-light">
                      {project.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Materials & Palette */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#20201E]/10 pt-8">
                  <div className="lg:col-span-4">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A79B8A] block">
                      Tactile Materiality
                    </span>
                  </div>
                  <div className="lg:col-span-8 space-y-6">
                    {/* Material List */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.materials.map((mat) => (
                        <div
                          key={mat}
                          className="px-3.5 py-1.5 bg-[#E7DFD2]/50 text-xs font-normal text-[#20201E] border border-[#20201E]/10"
                        >
                          {mat}
                        </div>
                      ))}
                    </div>

                    {/* Color Swatches */}
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] block mb-3">
                        Curated Chromatic Tone
                      </span>
                      <div className="flex items-center gap-4">
                        {project.palette.map((p) => (
                          <div key={p.name} className="flex items-center gap-2">
                            <span
                              className="w-5 h-5 rounded-full border border-black/15 shadow-xs"
                              style={{ backgroundColor: p.hex }}
                              title={`${p.name} (${p.hex})`}
                            />
                            <span className="text-xs text-[#20201E]/80 hidden sm:inline">
                              {p.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architectural Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#20201E]/10 pt-8">
                  <div className="lg:col-span-4">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A79B8A] block">
                      Key Interventions
                    </span>
                  </div>
                  <div className="lg:col-span-8 space-y-3">
                    {project.architecturalHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#A79B8A] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#20201E]/80 font-light">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-8 border-t border-[#20201E]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#A79B8A] tracking-wider uppercase">
                    Interested in discussing a bespoke brief for your residence?
                  </div>
                  <button
                    onClick={() => {
                      onInquireProject(project);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-medium tracking-[0.18em] uppercase text-[#F7F4EE] bg-[#20201E] hover:bg-[#20201E]/85 transition-colors flex items-center justify-center gap-2 shrink-0 group"
                  >
                    <span>Inquire About This Style</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
