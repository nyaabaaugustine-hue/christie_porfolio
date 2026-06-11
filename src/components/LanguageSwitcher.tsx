import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-white/60 hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-white/5"
      >
        <Globe size={14} />
        {current.label}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 bg-[#0B1F3A] border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-[120px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 text-xs font-medium tracking-wider transition-colors ${
                  i18n.language === lang.code
                    ? "text-[#C8A14A] bg-[#C8A14A]/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}