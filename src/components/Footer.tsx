import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../data/social";
import LanguageSwitcher from "./LanguageSwitcher";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports' | 'transformation' | 'industries';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const footerColumns = [
  {
    title: "About",
    links: [
      { label: "About Christiana", page: "about" as Page },
      { label: "Leadership Portfolio", page: "leadership" as Page },
      { label: "Board & Advisory", page: "board" as Page },
      { label: "Transformation Projects", page: "transformation" as Page },
      { label: "Industries", page: "industries" as Page },
    ],
  },
  {
    title: "Media & Content",
    links: [
      { label: "Speaking", page: "speaking" as Page },
      { label: "Podcast", page: "podcast" as Page },
      { label: "Video Library", page: "videos" as Page },
    ],
  },
  {
    title: "Thought Leadership",
    links: [
      { label: "Insights", page: "insights" as Page },
      { label: "Blog", page: "blog" as Page },
      { label: "Investor Relations", page: "investors" as Page },
      { label: "Impact Reports", page: "reports" as Page },
    ],
  },
];

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1F3A] text-white relative">
      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#C8A14A] text-[#0B1F3A] flex items-center justify-center shadow-lg hover:bg-[#d4ad5a] transition-colors"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Top decorative section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C8A14A] text-[11px] tracking-[0.25em] uppercase font-semibold mb-2">
                Let's Work Together
              </p>
              <h3 className="text-2xl lg:text-3xl font-serif text-white">
                Interested in Board Opportunities,<br />Speaking Engagements, or Strategic Advisory?
              </h3>
            </div>
            <motion.button
              onClick={() => onNavigate("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-xl hover:bg-[#d4ad5a] transition-colors flex-shrink-0"
            >
              <Mail size={16} />
              Get in Touch
            </motion.button>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#C8A14A]/20 to-transparent" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <button onClick={() => onNavigate("home")} className="inline-block mb-6">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
                alt="Christiana Okyere Executive Portfolio Logo"
                className="h-10 w-auto"
              />
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Corporate Executive, Entrepreneur, and Growth Strategist — one of Ghana's emerging industrial and corporate leaders, driving business transformation and building sustainable enterprises across Africa.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-[#C8A14A]/15 hover:border-[#C8A14A]/25 transition-all duration-300 text-white/40 hover:text-[#C8A14A]"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C8A14A] font-semibold mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-white/45 hover:text-white text-sm transition-all duration-300 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#C8A14A]/60 transition-all duration-300" />
                      {link.label}
                      <ArrowUpRight size={10} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C8A14A] font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-white/45">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A14A]/30 mt-1.5 flex-shrink-0" />
                Accra, Ghana
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A14A]/30 mt-1.5 flex-shrink-0" />
                +233 24 478 3099
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A14A]/30 mt-1.5 flex-shrink-0" />
                <a href="mailto:christie@smic360.com" className="hover:text-white transition-colors">
                  christie@smic360.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Christiana Akua Feyie Yeboaa Okyere. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/35 hover:text-white text-xs transition-colors">
              {t("footer.privacy")}
            </button>
            <span className="text-white/10 text-[10px]">|</span>
            <button className="text-white/35 hover:text-white text-xs transition-colors">
              {t("footer.terms")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
