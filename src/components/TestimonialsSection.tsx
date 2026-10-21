import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#F7F4EE] border-b border-[#20201E]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Demo Label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#20201E]/10 mb-16 sm:mb-20">
          <div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.25em] uppercase text-[#A79B8A] mb-4 font-medium"
            >
              Collaborations & Perspectives
            </motion.div>
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#20201E] tracking-tight"
            >
              Client Reflections
            </motion.h2>
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs uppercase tracking-wider text-[#A79B8A] bg-[#E7DFD2]/60 px-3.5 py-1.5 border border-[#20201E]/10 inline-block self-start sm:self-auto"
          >
            Illustrative Portfolio Demonstration Content
          </motion.div>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 bg-[#E7DFD2]/30 border border-[#20201E]/10 relative group hover:border-[#20201E]/30 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#A79B8A]/40 mb-6" />
                <p className="font-editorial text-2xl sm:text-3xl lg:text-3xl text-[#20201E] font-light leading-snug">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-[#20201E]/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-sm font-semibold tracking-wide text-[#20201E] block">
                    {t.client}
                  </span>
                  <span className="text-xs text-[#20201E]/70 font-light block">
                    {t.role} · {t.project}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-[#A79B8A] tracking-wider uppercase block">
                    {t.location}
                  </span>
                  <span className="text-[10px] text-[#A79B8A]/80 block">
                    Sample Review
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
