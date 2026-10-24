"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "WORK", href: "#work" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-[#F3F1EC]/90 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.04)] py-3.5"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 lg:px-14">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between"
        >
          {/* Left: Official Concept Lab Logo + Nav Links (shot_01 style) */}
          <div className="flex items-center gap-6 sm:gap-9">
            {/* Logo with official CL icon and typography */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0070F3] rounded-lg group"
              aria-label="Concept Lab Solutions Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black overflow-hidden flex items-center justify-center shadow-sm shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                <Image
                  src="/brand/cl-icon.jpg"
                  alt="Concept Lab"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#161C2D] leading-none">
                  Concept<span className="text-[#0070F3]">Lab</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.22em] text-[#58627A] uppercase mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Links (shot_01 uppercase text style) */}
            <div className="hidden lg:flex items-center gap-8 pl-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[12px] font-bold tracking-[0.14em] text-[#161C2D] hover:text-[#0070F3] transition-colors duration-150 uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: News pill tag + White Book a Call pill button (shot_01 exact style) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* News Tag Pill (shot_01: NEWS ... >) */}
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0FE] text-[#161C2D] text-[11px] font-semibold tracking-wide hover:bg-[#D6E6FD] transition-colors"
            >
              <span className="font-extrabold text-[#0070F3] uppercase text-[10px] tracking-wider">
                NEWS
              </span>
              <span className="text-[#161C2D] font-medium text-[11px]">
                CONCEPT LAB 2026
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#535E73] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* White Rounded Pill CTA Button (shot_01: BOOK A DEMO white pill button) */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#161C2D] text-[11px] font-bold tracking-[0.12em] uppercase shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:bg-[#FAF9F6] active:scale-[0.98] transition-all min-h-[40px] border border-[#E8E4DC]/80"
            >
              BOOK A CALL
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-white text-[#161C2D] text-[11px] font-bold tracking-wider uppercase shadow-sm border border-[#E8E4DC]"
            >
              BOOK A CALL
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-[#161C2D] hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0070F3] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#161C2D]" />
              ) : (
                <Menu className="w-5 h-5 text-[#161C2D]" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[74px] bg-[#1E2745]/30 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[74px] inset-x-4 bg-white rounded-3xl p-6 shadow-2xl border border-[#E8E4DC] z-50 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8490A5] pb-1">
                  Menu
                </span>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-sm font-bold tracking-wider text-[#161C2D] border-b border-[#F2F0ED] uppercase"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8490A5]" />
                  </a>
                ))}

                <div className="pt-4 mt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 rounded-lg bg-[#0070F3] text-white font-bold text-xs uppercase tracking-wider shadow-md"
                  >
                    BOOK A CALL
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
