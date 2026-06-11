import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Bell } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const footerLinks = {
  navigation: [
    { labelKey: "nav.home", page: "home" as Page },
    { labelKey: "nav.about", page: "about" as Page },
    { labelKey: "nav.leadership", page: "leadership" as Page },
    { labelKey: "nav.speaking", page: "speaking" as Page },
    { labelKey: "nav.insights", page: "insights" as Page },
    { labelKey: "nav.contact", page: "contact" as Page },
  ],
  resources: [
    { labelKey: "about.download", page: "about" as Page },
    { labelKey: "speaking.downloadKit", page: "speaking" as Page },
    { labelKey: "nav.leadership", page: "leadership" as Page },
    { labelKey: "nav.contact", page: "contact" as Page },
  ],
};

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
              alt="Christiana Okyere"
              className="h-10 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Corporate Executive, Growth Strategist, and Board Leader driving business transformation and operational excellence across African enterprise.
            </p>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#C8A14A] font-medium mb-5">
              {t("nav.home")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/50 hover:text-[#C8A14A] text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#C8A14A] font-medium mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.labelKey}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/50 hover:text-[#C8A14A] text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Christiana Akua Feyie Yeboaa Okyere. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/30 hover:text-[#C8A14A] text-xs transition-colors">
              {t("footer.privacy")}
            </button>
            <button className="text-white/30 hover:text-[#C8A14A] text-xs transition-colors">
              {t("footer.terms")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}