import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#F7F4EE] border-b border-[#20201E]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] uppercase text-[#A79B8A] mb-4 font-medium"
          >
            Methodology
          </motion.div>
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#20201E] tracking-tight"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#20201E]/80 font-light leading-relaxed max-w-xl"
          >
            A disciplined four-phase progression that translates complex aspirations into serene architectural reality.
          </motion.p>
        </div>

        {/* 4 Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#E7DFD2]/25 border border-[#20201E]/10 hover:border-[#20201E]/30 transition-colors duration-300"
            >
              <div>
                {/* Step Number & Step Indicator */}
                <div className="flex items-center justify-between pb-6 border-b border-[#20201E]/10 mb-6">
                  <span className="font-editorial text-3xl font-light text-[#A79B8A] group-hover:text-[#20201E] transition-colors tabular-nums">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A79B8A]">
                    Phase 0{idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-editorial font-normal text-[#20201E]">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-wider text-[#A79B8A] font-medium leading-normal">
                  {step.subtitle}
                </p>

                {/* Step Detailed Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#20201E]/75 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Milestones */}
              <div className="mt-8 pt-6 border-t border-[#20201E]/10">
                <span className="text-[10px] uppercase tracking-widest text-[#A79B8A] block mb-2 font-medium">
                  Key Milestones
                </span>
                <ul className="space-y-1.5">
                  {step.keyMilestones.map((milestone, mIdx) => (
                    <li key={mIdx} className="text-xs text-[#20201E]/80 font-light flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#20201E]/40 rounded-full" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
