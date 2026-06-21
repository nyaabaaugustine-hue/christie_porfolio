import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useDarkMode } from "../contexts/DarkModeContext";

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const navLinks = [
  { labelKey: "nav.home", page: "home" as Page },
  { labelKey: "nav.about", page: "about" as Page },
  { labelKey: "nav.leadership", page: "leadership" as Page },
  { labelKey: "nav.board", page: "board" as Page },
  { labelKey: "nav.speaking", page: "speaking" as Page },
  { labelKey: "nav.insights", page: "insights" as Page },
  { labelKey: "nav.contact", page: "contact" as Page },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#0B1F3A] py-3 md:py-6"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
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

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`relative font-medium transition-colors ${
                    currentPage === link.page
                      ? "text-[#C8A14A]"
                      : "text-white/80 hover:text-[#C8A14A]"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {t(link.labelKey)}
                  {currentPage === link.page && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C8A14A]"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <motion.button
                onClick={() => toggleDarkMode()}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                onClick={() => onNavigate("contact")}
                className="px-6 py-2.5 rounded-lg font-semibold transition-all text-sm bg-[#C8A14A] text-[#0B1F3A] hover:bg-[#b8923f]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("nav.getInTouch")}
              </motion.button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 rounded-lg text-white hover:bg-white/10 transition-colors touch-manipulation`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] max-w-[85vw] z-50 bg-[#0B1F3A] border-l border-white/10 overflow-y-auto shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-white/50 text-xs uppercase tracking-widest font-medium">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
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
                    {t(link.labelKey)}
                  </motion.button>
                ))}
                <hr className="border-white/10" />
                <LanguageSwitcher />
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 }}
                  onClick={() => {
                    toggleDarkMode();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-white/5 rounded-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 2) * 0.05 }}
                  onClick={() => {
                    onNavigate("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-[#C8A14A] text-[#0B1F3A] rounded-lg font-semibold hover:bg-[#b8923f] transition-colors"
                >
                  {t("nav.getInTouch")}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
