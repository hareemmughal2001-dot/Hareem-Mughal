import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/content';

interface StudioIntroProps {
  onDiscoverStudio: () => void;
}

export const StudioIntro: React.FC<StudioIntroProps> = ({ onDiscoverStudio }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="studio" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#F7F4EE] border-b border-[#20201E]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section kicker */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.25em] uppercase text-[#A79B8A] mb-8 font-medium"
        >
          Studio Philosophy & Practice
        </motion.div>

        {/* Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light tracking-tight text-[#20201E] leading-[1.12] text-balance"
            >
              Designing Beyond the Ordinary.
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 text-base sm:text-lg text-[#20201E]/80 leading-relaxed max-w-xl font-light"
            >
              We create considered spaces that balance architecture, material, light, and everyday living. Every project begins with a clear vision and ends with a space that feels uniquely yours.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-[#20201E]/10 grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-editorial font-normal text-[#20201E] tabular-nums">2018</span>
                <span className="text-xs uppercase tracking-wider text-[#A79B8A] mt-1 block">Studio Founded</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-editorial font-normal text-[#20201E] tabular-nums">35+</span>
                <span className="text-xs uppercase tracking-wider text-[#A79B8A] mt-1 block">Private Works</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-editorial font-normal text-[#20201E]">Paris / NY</span>
                <span className="text-xs uppercase tracking-wider text-[#A79B8A] mt-1 block">Atelier Hubs</span>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={onDiscoverStudio}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#20201E] group hover:text-[#20201E]/70 transition-colors py-2"
              >
                <span className="relative">
                  Discover Our Studio
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#20201E] transition-transform duration-300 group-hover:scale-x-110" />
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative overflow-hidden group shadow-md"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#E7DFD2]">
                <img
                  src={IMAGES.studioDetail}
                  alt="Curved fluted plaster wall and Roman travertine step architectural detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Quiet caption */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#A79B8A] tracking-wider uppercase">
                <span>Material Study No. 14</span>
                <span>Travertine & Fluted Plaster</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
