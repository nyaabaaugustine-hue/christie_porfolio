import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const navLinks = [
  { labelKey: "nav.home", page: "home" as Page },
  {
    labelKey: "nav.about",
    subMenu: [
      { labelKey: "nav.aboutChristianas", page: "about" as Page },
      { labelKey: "nav.leadership", page: "leadership" as Page },
      { labelKey: "nav.board", page: "board" as Page },
      { labelKey: "nav.transformation", page: "transformation" as Page },
      { labelKey: "nav.industries", page: "industries" as Page },
    ],
  },
  {
    labelKey: "nav.media",
    subMenu: [
      { labelKey: "nav.speaking", page: "speaking" as Page },
      { labelKey: "nav.podcast", page: "podcast" as Page },
      { labelKey: "nav.videos", page: "videos" as Page },
    ],
  },
  {
    labelKey: "nav.thoughtLeadership",
    subMenu: [
      { labelKey: "nav.insights", page: "insights" as Page },
      { labelKey: "nav.blog", page: "blog" as Page },
      { labelKey: "nav.investors", page: "investors" as Page },
      { labelKey: "nav.reports", page: "reports" as Page },
    ],
  },
  { labelKey: "nav.contact", page: "contact" as Page },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isSubpageActive = (link: typeof navLinks[number]) => {
    if (!link.subMenu) return false;
    return link.subMenu.some((item) => item.page === currentPage);
  };

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
              link.subMenu ? (
                <div
                  key={link.labelKey}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.labelKey)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    onClick={() => {
                      const firstPage = link.subMenu[0].page;
                      onNavigate(firstPage);
                    }}
                    className={`flex items-center gap-2 relative font-medium transition-colors ${
                      isSubpageActive(link)
                        ? "text-[#C8A14A]"
                        : "text-white/80 hover:text-[#C8A14A]"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {t(link.labelKey)}
                    <ChevronDown size={14} />
                    {isSubpageActive(link) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C8A14A]"
                      />
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === link.labelKey && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-3 min-w-[210px] rounded-3xl bg-[#0B1F3A]/95 border border-white/10 py-3 shadow-2xl"
                      >
                        {link.subMenu.map((sub) => (
                          <button
                            key={sub.page}
                            onClick={() => {
                              onNavigate(sub.page);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                              currentPage === sub.page
                                ? "text-[#C8A14A]"
                                : "text-white/80 hover:text-[#C8A14A]"
                            }`}
                          >
                            {t(sub.labelKey)}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
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
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
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
            className={`lg:hidden p-2 rounded-lg text-white`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

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
                link.subMenu ? (
                  <div key={link.labelKey} className="space-y-2">
                    <button
                      onClick={() => {
                        onNavigate(link.subMenu[0].page);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left text-xs uppercase tracking-widest px-4 ${
                        isSubpageActive(link)
                          ? "text-[#C8A14A]"
                          : "text-white/50"
                      }`}
                    >
                      {t(link.labelKey)}
                    </button>
                    {link.subMenu.map((sub, subIndex) => (
                      <motion.button
                        key={sub.page}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + subIndex) * 0.04 }}
                        onClick={() => {
                          onNavigate(sub.page);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left py-3 px-6 rounded-lg transition-colors ${
                          currentPage === sub.page
                            ? "bg-[#C8A14A]/10 text-[#C8A14A]"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {t(sub.labelKey)}
                      </motion.button>
                    ))}
                  </div>
                ) : (
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
                )
              ))}
              <LanguageSwitcher />
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
                {t("nav.getInTouch")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}