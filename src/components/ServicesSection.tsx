import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus, Minus, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleService = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#F7F4EE] border-b border-[#20201E]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] uppercase text-[#A79B8A] mb-4 font-medium"
          >
            Capabilities & Practice
          </motion.div>
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#20201E] tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#20201E]/80 font-light leading-relaxed max-w-xl"
          >
            We deliver end-to-end spatial transformations—uniting structural architecture with bespoke artisan furnishing and atmospheric lighting design.
          </motion.p>
        </div>

        {/* Services List with Fine Hairline Dividers */}
        <div className="border-t border-[#20201E]/15">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={service.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-b border-[#20201E]/15"
              >
                {/* Clickable Row */}
                <button
                  type="button"
                  onClick={() => toggleService(idx)}
                  className="w-full py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between text-left group transition-colors duration-200"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-baseline gap-6 sm:gap-12">
                    <span className="font-editorial text-xl sm:text-2xl text-[#A79B8A] group-hover:text-[#20201E] transition-colors tabular-nums">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-light text-[#20201E] group-hover:translate-x-1.5 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#20201E]/70 font-light max-w-xl hidden sm:block">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-6 self-end md:self-center">
                    <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] hidden lg:inline">
                      {service.duration}
                    </span>
                    <div className="w-9 h-9 border border-[#20201E]/20 flex items-center justify-center text-[#20201E] group-hover:border-[#20201E] group-hover:bg-[#20201E] group-hover:text-[#F7F4EE] transition-all duration-200">
                      {isExpanded ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expandable Deliverables Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-0 sm:pl-16 lg:pl-20 pr-4 pt-2">
                        {/* Mobile summary */}
                        <p className="text-sm text-[#20201E]/80 font-light mb-6 sm:hidden">
                          {service.summary}
                        </p>

                        <div className="bg-[#E7DFD2]/35 p-6 sm:p-8 border border-[#20201E]/10">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                              <span className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] block mb-4 font-medium">
                                Scope of Deliverables & Output
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.deliverables.map((item, dIdx) => (
                                  <div key={dIdx} className="flex items-start gap-2.5">
                                    <Check className="w-3.5 h-3.5 text-[#20201E] mt-1 shrink-0" />
                                    <span className="text-xs sm:text-sm text-[#20201E]/80 font-light">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="lg:col-span-4 flex flex-col sm:items-end justify-center pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#20201E]/10 lg:pl-8">
                              <span className="text-xs text-[#A79B8A] uppercase tracking-wider mb-2">
                                Typical Project Window
                              </span>
                              <span className="text-sm font-medium text-[#20201E] mb-5">
                                {service.duration}
                              </span>
                              <button
                                onClick={() => {
                                  onSelectService(service.title);
                                  const el = document.getElementById('contact');
                                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-[#F7F4EE] bg-[#20201E] hover:bg-[#20201E]/85 transition-colors whitespace-nowrap group"
                              >
                                <span>Inquire for {service.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
