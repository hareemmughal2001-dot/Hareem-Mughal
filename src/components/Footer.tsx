import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#20201E] text-[#F7F4EE] pt-20 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F7F4EE]/15">
          {/* Brand & Studio Description (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <a
              href="#"
              className="text-2xl font-editorial tracking-[0.2em] uppercase font-semibold text-[#F7F4EE] block"
            >
              ATELIER NOIR
            </a>
            <p className="text-sm text-[#E7DFD2]/75 font-light leading-relaxed max-w-sm">
              An international interior architecture and design atelier creating considered, enduring residences and spaces defined by material honesty, light, and architectural discipline.
            </p>
            <div className="text-xs uppercase tracking-[0.2em] text-[#A79B8A] pt-2">
              Paris · New York · Milan
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A79B8A] block font-medium">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-[#E7DFD2]/80">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-white transition-colors">
                  Studio Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Inquiries (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A79B8A] block font-medium">
              Digital Atelier & Press
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase text-[#E7DFD2]/80">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <span>Instagram</span>
                  <span className="text-[#A79B8A] text-[11px]">@ateliernoir.studio</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <span>Pinterest Archive</span>
                  <span className="text-[#A79B8A] text-[11px]">@ateliernoir</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:inquiries@ateliernoir-studio.com"
                  className="hover:text-white transition-colors"
                >
                  inquiries@ateliernoir-studio.com
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <span className="text-[11px] uppercase tracking-wider text-[#A79B8A] block mb-1">
                Press & Editorial Inquiries
              </span>
              <span className="text-xs text-[#E7DFD2]/70 font-light">
                press@ateliernoir-studio.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A79B8A] font-light">
          <div>
            © {currentYear} ATELIER NOIR. All rights reserved.
          </div>

          <div className="text-[11px] text-[#A79B8A]/80 tracking-wide text-center">
            Portfolio Showcase Website · Custom Architecture & Editorial Design
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#E7DFD2]/80 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
