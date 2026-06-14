import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Layers } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "Как работаем", href: "#process" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "О нас", href: "#advantages" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-3 shadow-lg shadow-[#00000030] backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
      id="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-brand-electric to-brand-cyan text-white shadow-md shadow-brand-glow overflow-hidden">
              <Layers className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg leading-tight tracking-tight text-white">
                TMK <span className="text-cyan-400">WEB</span>
              </span>
              <span className="text-[9px] font-mono tracking-wider text-gray-400 uppercase leading-none">
                Web Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center" id="nav-cta-container">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-medium text-sm text-white shadow-lg shadow-brand-glow hover:brightness-110 transition-all cursor-pointer active:scale-95"
              id="btn-nav-cta"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            id="nav-hamburger"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/10 bg-[#0d1222]/95 backdrop-blur-lg overflow-hidden"
            id="nav-mobile-drawer"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white shadow-md active:scale-95 transition-all text-center"
                >
                  Обсудить проект
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
