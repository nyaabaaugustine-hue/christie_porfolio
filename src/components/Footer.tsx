import { useTranslation } from "react-i18next";
import { Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react";
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

  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A14A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <button onClick={() => onNavigate("home")} className="inline-block mb-6">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
                alt="Christiana Okyere Executive Portfolio Logo"
                className="h-10 w-auto"
              />
            </button>
            <p className="text-white/40 text-sm leading-relaxed text-justify mb-8 max-w-sm">
              Corporate Executive, Entrepreneur, and Growth Strategist — one of Ghana's emerging industrial and corporate leaders, driving business transformation and building sustainable enterprises across Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8A14A]/20 hover:border-[#C8A14A]/30 transition-all"
              >
                <Linkedin size={16} className="text-white/60" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8A14A]/20 hover:border-[#C8A14A]/30 transition-all"
              >
                <Facebook size={16} className="text-white/60" />
              </a>
              <a
href="mailto:christie@smic360.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8A14A]/20 hover:border-[#C8A14A]/30 transition-all"
              >
                <Mail size={16} className="text-white/60" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#C8A14A] font-semibold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-white/40 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#C8A14A] font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>Accra, Ghana</li>
              <li>+233 24 478 3099</li>
              <li>
                <a href="mailto:christie@smic360.com" className="hover:text-white transition-colors">
                  christie@smic360.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Christiana Akua Feyie Yeboaa Okyere. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/30 hover:text-white text-xs transition-colors">
              {t("footer.privacy")}
            </button>
            <button className="text-white/30 hover:text-white text-xs transition-colors">
              {t("footer.terms")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
