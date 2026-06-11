import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const navLinks = [
  { label: "Home", page: "home" as Page },
  { label: "About", page: "about" as Page },
  { label: "Leadership", page: "leadership" as Page },
  { label: "Speaking", page: "speaking" as Page },
  { label: "Insights", page: "insights" as Page },
  { label: "Contact", page: "contact" as Page },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
              alt="Christiana Okyere"
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`relative font-medium transition-colors ${
                  isScrolled
                    ? currentPage === link.page
                      ? "text-[#C8A14A]"
                      : "text-white/80 hover:text-[#C8A14A]"
                    : currentPage === link.page
                    ? "text-[#C8A14A]"
                    : "text-white hover:text-[#C8A14A]"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
                {currentPage === link.page && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C8A14A]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => onNavigate("contact")}
            className={`hidden lg:block px-6 py-2.5 rounded-lg font-semibold transition-all ${
              isScrolled
                ? "bg-[#C8A14A] text-[#0B1F3A] hover:bg-[#b8923f]"
                : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg text-white`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1F3A] border-t border-white/10"
          >
            <div className="max-w-[90rem] mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.page}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onNavigate(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    currentPage === link.page
                      ? "bg-[#C8A14A]/10 text-[#C8A14A]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => {
                  onNavigate("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#C8A14A] text-[#0B1F3A] rounded-lg font-semibold"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}