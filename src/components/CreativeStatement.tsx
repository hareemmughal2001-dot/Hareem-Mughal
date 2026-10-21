import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/content';

export const CreativeStatement: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-32 sm:py-44 lg:py-56 px-6 sm:px-8 lg:px-12 bg-[#20201E] overflow-hidden">
      {/* Background Photography with measured dark scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={IMAGES.statementSpace}
          alt="Atmospheric architectural luxury kitchen and dining gallery by Atelier Noir"
          referrerPolicy="no-referrer"
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#20201E]/75 backdrop-contrast-105" />
      </div>

      {/* Centerpiece Statement */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-[#E7DFD2]/80 mb-6 sm:mb-8 font-light"
        >
          Spatial Philosophy
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-7xl font-editorial font-light text-[#F7F4EE] leading-[1.12] tracking-tight max-w-4xl mx-auto text-balance"
        >
          “Good design is not just seen. It is experienced.”
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 sm:mt-10 text-base sm:text-lg text-[#E7DFD2]/85 font-light leading-relaxed max-w-2xl mx-auto"
        >
          From the cool tactile grain of honed limestone beneath one’s hand to the calibrated play of natural shadows across an oak ceiling, every nuance is engineered to foster presence and peace.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#A79B8A]"
        >
          <span>Tactile Restraint</span>
          <span aria-hidden="true">·</span>
          <span>Architectural Purity</span>
          <span aria-hidden="true">·</span>
          <span>Living Heritage</span>
        </motion.div>
      </div>
    </section>
  );
};
