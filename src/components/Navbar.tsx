import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EE]/90 backdrop-blur-md border-b border-[#20201E]/10 py-4 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-editorial tracking-[0.2em] uppercase font-semibold text-[#20201E] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
            aria-label="ATELIER NOIR Home"
          >
            ATELIER NOIR
          </a>

          {/* Zone 2: 4–5 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.15em] uppercase text-[#20201E]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#20201E] transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#20201E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenContact();
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-[#F7F4EE] bg-[#20201E] hover:bg-[#20201E]/85 transition-all duration-200 whitespace-nowrap shrink-0 group"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#20201E] hover:text-[#20201E]/70 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#20201E]/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#F7F4EE] p-8 flex flex-col justify-between shadow-2xl border-l border-[#20201E]/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#20201E]/10">
                <span className="text-lg font-editorial tracking-[0.2em] uppercase font-semibold text-[#20201E]">
                  ATELIER NOIR
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#20201E] hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-6 my-auto py-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-editorial tracking-[0.05em] text-[#20201E] hover:translate-x-2 transition-transform duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-[#20201E]/10 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-medium tracking-[0.15em] uppercase text-[#F7F4EE] bg-[#20201E] hover:bg-[#20201E]/90 transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-[11px] tracking-wider uppercase text-[#A79B8A] text-center">
                  Paris · New York · Milan
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
