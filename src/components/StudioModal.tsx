import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, MapPin, Feather, Compass } from 'lucide-react';
import { STUDIO_DETAILS, IMAGES } from '../data/content';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartInquiry: () => void;
}

export const StudioModal: React.FC<StudioModalProps> = ({
  isOpen,
  onClose,
  onStartInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-[#20201E]/75 backdrop-blur-md"
          onClick={onClose}
        />

        <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#F7F4EE] shadow-2xl overflow-hidden pointer-events-auto border border-[#20201E]/15"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="studio-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#20201E]/10">
              <div className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] font-medium">
                Atelier Noir Monograph · Studio Ethos
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#20201E] hover:opacity-60 transition-opacity"
                aria-label="Close studio monograph"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-10">
              <div>
                <h2
                  id="studio-modal-title"
                  className="text-3xl sm:text-5xl font-editorial font-light text-[#20201E] leading-tight"
                >
                  Spaces Formed by Quiet Geometry & Honest Materiality.
                </h2>
                <p className="mt-6 text-base sm:text-lg text-[#20201E]/85 font-light leading-relaxed">
                  {STUDIO_DETAILS.ethos}
                </p>
              </div>

              {/* Detail Photo & Material Creed */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center bg-[#E7DFD2]/40 p-6 sm:p-8 border border-[#20201E]/10">
                <div className="sm:col-span-5 aspect-[4/3] overflow-hidden bg-[#E7DFD2]">
                  <img
                    src={IMAGES.studioDetail}
                    alt="Tactile materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A79B8A]">
                    <Feather className="w-4 h-4" />
                    <span>The Four Pillars of Our Practice</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#20201E]/85 font-light">
                    <li><strong>01. Spatial Restraint:</strong> Eliminating extraneous ornament to amplify volume.</li>
                    <li><strong>02. Tactile Authenticity:</strong> Natural stones, unlacquered bronzes, raw timber.</li>
                    <li><strong>03. Photometric Harmony:</strong> Choreographing sunlight from sunrise to dusk.</li>
                    <li><strong>04. Enduring Craft:</strong> Commissioning European generational master artisans.</li>
                  </ul>
                </div>
              </div>

              {/* Founders / Principals */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] block mb-4 font-medium">
                  Studio Leadership
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {STUDIO_DETAILS.leadArchitects.map((lead, idx) => (
                    <div key={idx} className="p-5 border border-[#20201E]/10 bg-[#F7F4EE]">
                      <h4 className="font-editorial text-xl text-[#20201E]">
                        {lead.name}
                      </h4>
                      <p className="text-xs uppercase tracking-wider text-[#A79B8A] mt-1">
                        {lead.role}
                      </p>
                      <p className="text-xs text-[#20201E]/70 font-light mt-2">
                        {lead.origin}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accolades & Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#20201E]/10">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] flex items-center gap-2 mb-3 font-medium">
                    <Award className="w-4 h-4" /> Selected Distinctions
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#20201E]/80 font-light">
                    {STUDIO_DETAILS.awards.map((award, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#A79B8A] rounded-full" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] flex items-center gap-2 mb-3 font-medium">
                    <Compass className="w-4 h-4" /> Global Presence
                  </span>
                  <p className="text-xs sm:text-sm text-[#20201E]/80 font-light leading-relaxed">
                    Atelier desks in <strong>Paris</strong> (Rue du Faubourg Saint-Honoré), <strong>New York</strong> (Tribeca), and <strong>Milan</strong> (Brera). Accepting private commissions worldwide.
                  </p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-8 border-t border-[#20201E]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#A79B8A] tracking-wider uppercase">
                  Discover how our studio can shape your next sanctuary.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onStartInquiry();
                  }}
                  className="px-6 py-3 text-xs font-medium tracking-[0.18em] uppercase text-[#F7F4EE] bg-[#20201E] hover:bg-[#20201E]/85 transition-colors"
                >
                  Schedule Private Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
