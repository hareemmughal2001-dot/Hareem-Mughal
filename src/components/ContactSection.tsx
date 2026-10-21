import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Send,
  Check,
  Copy,
  MessageSquare,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Project } from '../types';

interface ContactSectionProps {
  preselectedServiceOrProject?: string;
  onClearPreselection?: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  projectType: string;
  estimatedBudget: string;
  projectLocation: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedServiceOrProject,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    projectType: 'Private Residence Architecture',
    estimatedBudget: '€250k – €500k',
    projectLocation: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmittedData, setDemoSubmittedData] = useState<FormState | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  // Sync pre-selected project or service
  useEffect(() => {
    if (preselectedServiceOrProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedServiceOrProject,
        message: `Inquiry regarding: ${preselectedServiceOrProject}\n\nWe would like to explore...`,
      }));
    }
  }, [preselectedServiceOrProject]);

  const studioEmail = 'inquiries@ateliernoir-studio.com';
  const whatsappNumber = '+33142685500'; // Configurable placeholder number
  const whatsappDisplay = '+33 1 42 68 55 00';

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your contact email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project typology.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief outline of your project.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please describe your project in at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoSubmittedData({ ...formData });
    }, 900);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(studioEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      // Fallback
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-[#F7F4EE] border-b border-[#20201E]/10">
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
            Private Consultations
          </motion.div>
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#20201E] tracking-tight"
          >
            Let’s Create Something Meaningful.
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#20201E]/80 font-light leading-relaxed max-w-xl"
          >
            We accept a limited number of residential and commercial commissions each year to ensure personal partner-level attention for every space.
          </motion.p>
        </div>

        {/* 2-Column Split: Form & Direct Studio Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive Form or Demo Confirmation */}
          <div className="lg:col-span-7">
            {demoSubmittedData ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#E7DFD2]/35 border border-[#20201E]/15 p-8 sm:p-10 space-y-6"
              >
                <div className="flex items-center gap-3 text-emerald-800">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl text-[#20201E]">
                      Inquiry Received in Demo Mode
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#A79B8A]">
                      Validation Verified & Form Payload Formatted
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#F7F4EE] border border-[#20201E]/10 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-[#20201E]/5 pb-2">
                    <span className="text-[#A79B8A] uppercase tracking-wider text-xs">Client:</span>
                    <span className="font-medium text-[#20201E]">{demoSubmittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#20201E]/5 pb-2">
                    <span className="text-[#A79B8A] uppercase tracking-wider text-xs">Email:</span>
                    <span className="font-medium text-[#20201E]">{demoSubmittedData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#20201E]/5 pb-2">
                    <span className="text-[#A79B8A] uppercase tracking-wider text-xs">Typology:</span>
                    <span className="font-medium text-[#20201E]">{demoSubmittedData.projectType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#20201E]/5 pb-2">
                    <span className="text-[#A79B8A] uppercase tracking-wider text-xs">Budget:</span>
                    <span className="font-medium text-[#20201E]">{demoSubmittedData.estimatedBudget}</span>
                  </div>
                  <div>
                    <span className="text-[#A79B8A] uppercase tracking-wider text-xs block mb-1">Brief:</span>
                    <p className="text-[#20201E]/80 font-light italic">“{demoSubmittedData.message}”</p>
                  </div>
                </div>

                {/* Clear Integration Notice for Client Showcase */}
                <div className="flex items-start gap-3 p-4 bg-[#F7F4EE] border-l-2 border-[#20201E] text-xs text-[#20201E]/80">
                  <Info className="w-4 h-4 text-[#A79B8A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#20201E] block mb-0.5">
                      Production Backend Integration Notice
                    </span>
                    This is a functional portfolio demo. For live deployment, route this form to your preferred transactional email service (such as Resend, SendGrid, or AWS SES via a secure `/api/contact` endpoint) or directly to your CRM.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setDemoSubmittedData(null);
                    setFormData({
                      fullName: '',
                      email: '',
                      projectType: 'Private Residence Architecture',
                      estimatedBudget: '€250k – €500k',
                      projectLocation: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium text-[#20201E] border border-[#20201E]/30 hover:border-[#20201E] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.18em] text-[#20201E] mb-2 font-medium">
                    Your Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Jean-Luc Girard"
                    className={`w-full px-4 py-3.5 bg-transparent border text-sm text-[#20201E] placeholder-[#A79B8A]/60 focus:outline-hidden transition-colors ${
                      errors.fullName
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#20201E]/20 focus:border-[#20201E]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-[#20201E] mb-2 font-medium">
                    Email Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. girard@residence.com"
                    className={`w-full px-4 py-3.5 bg-transparent border text-sm text-[#20201E] placeholder-[#A79B8A]/60 focus:outline-hidden transition-colors ${
                      errors.email
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#20201E]/20 focus:border-[#20201E]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* 2-Column: Project Type & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-xs uppercase tracking-[0.18em] text-[#20201E] mb-2 font-medium">
                      Project Typology <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#F7F4EE] border border-[#20201E]/20 focus:border-[#20201E] text-sm text-[#20201E] focus:outline-hidden transition-colors"
                    >
                      <option value="Private Residence Architecture">Private Residence Architecture</option>
                      <option value="Contemporary Villa Architecture">Contemporary Villa Architecture</option>
                      <option value="Heritage Urban Apartment Renovation">Heritage Urban Apartment Renovation</option>
                      <option value="Commercial & Boutique Hospitality">Commercial & Boutique Hospitality</option>
                      <option value="Space Planning & FF&E Curation">Space Planning & FF&E Curation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="estimatedBudget" className="block text-xs uppercase tracking-[0.18em] text-[#20201E] mb-2 font-medium">
                      Investment Range
                    </label>
                    <select
                      id="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#F7F4EE] border border-[#20201E]/20 focus:border-[#20201E] text-sm text-[#20201E] focus:outline-hidden transition-colors"
                    >
                      <option value="€100k – €250k">€100k – €250k</option>
                      <option value="€250k – €500k">€250k – €500k</option>
                      <option value="€500k – €1.5M">€500k – €1.5M</option>
                      <option value="€1.5M+">€1.5M+ (High-End Estate)</option>
                    </select>
                  </div>
                </div>

                {/* Project Location */}
                <div>
                  <label htmlFor="projectLocation" className="block text-xs uppercase tracking-[0.18em] text-[#20201E] mb-2 font-medium">
                    Project Location / City
                  </label>
                  <input
                    type="text"
                    id="projectLocation"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Paris 7th, Zurich, New York, Tokyo..."
                    className="w-full px-4 py-3.5 bg-transparent border border-[#20201E]/20 focus:border-[#20201E] text-sm text-[#20201E] placeholder-[#A79B8A]/60 focus:outline-hidden transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.18em] text-[#20201E] mb-2 font-medium">
                    Project Vision & Requirements <span className="text-red-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about the property, scope of renovation, timeline goals, and desired aesthetic feel..."
                    className={`w-full px-4 py-3.5 bg-transparent border text-sm text-[#20201E] placeholder-[#A79B8A]/60 focus:outline-hidden transition-colors ${
                      errors.message
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#20201E]/20 focus:border-[#20201E]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 text-xs font-medium tracking-[0.2em] uppercase text-[#F7F4EE] bg-[#20201E] hover:bg-[#20201E]/90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Validating Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Studio Presence */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            {/* Direct Studio Email Box */}
            <div className="p-8 bg-[#E7DFD2]/35 border border-[#20201E]/10 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] block font-medium">
                Direct Atelier Inquiries
              </span>
              <p className="text-sm text-[#20201E]/80 font-light">
                Prefer direct correspondence or sending architectural blueprints? You may email our principal design desk directly:
              </p>

              <div className="pt-2">
                <div className="flex items-center justify-between gap-3 p-3.5 bg-[#F7F4EE] border border-[#20201E]/15">
                  <span className="text-xs sm:text-sm font-mono text-[#20201E] truncate select-all">
                    {studioEmail}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#20201E] hover:bg-[#20201E]/5 transition-colors relative"
                    title="Copy email to clipboard"
                    aria-label="Copy studio email address"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#A79B8A]" />
                    )}
                  </button>
                </div>
                {emailCopied && (
                  <p className="mt-1.5 text-[11px] text-emerald-700 tracking-wide">
                    Email copied to clipboard.
                  </p>
                )}
              </div>
            </div>

            {/* Direct WhatsApp Channel */}
            <div className="p-8 bg-[#E7DFD2]/35 border border-[#20201E]/10 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] block font-medium">
                Instant Consultation via WhatsApp
              </span>
              <p className="text-sm text-[#20201E]/80 font-light">
                For prompt communication with our client relationship directors in Paris or New York:
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Atelier%20Noir%2C%20I%20would%20like%20to%20discuss%20a%20private%20interior%20architecture%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 text-xs uppercase tracking-[0.15em] font-medium text-[#20201E] border border-[#20201E]/25 hover:border-[#20201E] hover:bg-[#F7F4EE] transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-[#20201E]" />
                <span>WhatsApp: {whatsappDisplay}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] text-[#A79B8A] block">
                Typical reply window: within 2 hours during studio business hours (CET / EST).
              </span>
            </div>

            {/* Studio Hours & Private Addresses */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#A79B8A] tracking-wider uppercase font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Studio Hours</span>
              </div>
              <p className="text-xs text-[#20201E]/75 leading-relaxed font-light">
                Monday — Friday: 09:00 — 18:30 CET<br />
                Saturday: Private viewings by prior appointment only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
