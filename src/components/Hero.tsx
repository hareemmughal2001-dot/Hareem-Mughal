import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#20201E]">
      {/* Background Photograph with subtle measured dark scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={IMAGES.hero}
          alt="Luxury architectural living room designed by Atelier Noir"
          referrerPolicy="no-referrer"
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        {/* Measured scrim: soft gradient from top and stronger at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20201E]/90 via-[#20201E]/40 to-[#20201E]/30" />
      </div>

      {/* Top micro-meta kicker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#E7DFD2]/90"
        >
          <span>Interior Architecture & Design</span>
          <span aria-hidden="true" className="text-[#A79B8A]">·</span>
          <span>Paris / New York</span>
        </motion.div>
      </div>

      {/* Hero Headline & Supporting Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-editorial font-light tracking-tight text-[#F7F4EE] leading-[1.08] text-balance"
          >
            Spaces That Tell Your Story.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-light text-[#E7DFD2]/90 max-w-xl leading-relaxed"
          >
            Thoughtfully designed interiors where timeless architecture meets contemporary living.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onExploreWork}
              className="px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#20201E] bg-[#F7F4EE] hover:bg-white hover:shadow-lg transition-all duration-300 whitespace-nowrap shrink-0 group flex items-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onStartProject}
              className="px-7 py-3.5 text-xs font-medium tracking-[0.18em] uppercase text-[#F7F4EE] border border-[#F7F4EE]/40 hover:border-[#F7F4EE] hover:bg-[#F7F4EE]/10 transition-all duration-300 whitespace-nowrap shrink-0 group flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Quiet Studio Markers */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#F7F4EE]/15">
        <div className="flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase text-[#E7DFD2]/75">
          <span>Selected Residences 2024–2026</span>
          <span aria-hidden="true" className="text-[#A79B8A]/60">/</span>
          <span>Bespoke Architecture</span>
        </div>

        {/* Discreet Scroll Indicator */}
        <button
          onClick={onExploreWork}
          className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#E7DFD2]/80 hover:text-white transition-colors group cursor-pointer"
          aria-label="Scroll to explore projects"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border border-[#E7DFD2]/40 rounded-full flex justify-center p-1 group-hover:border-[#F7F4EE] transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-[#F7F4EE] rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
