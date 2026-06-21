import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, X } from "lucide-react";
import { socialLinks } from "../data/social";

export default function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop: vertical sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 1.5 + index * 0.15,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              whileHover={{ x: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 w-12 hover:w-[160px] h-12 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md text-white hover:bg-[#C8A14A]/20 transition-all duration-500 ease-out overflow-hidden shadow-lg shadow-black/20 border border-white/10 hover:border-[#C8A14A]/30"
              aria-label={link.label}
            >
              <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 z-10">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <span className="text-[11px] tracking-wider uppercase font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-3">
                {link.label}
              </span>
            </motion.a>
          );
        })}
        <div className="absolute -right-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A14A]/30 to-transparent pointer-events-none" />
      </div>

      {/* Mobile: floating toggle button + expandable social tray */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-16 right-0 flex flex-col-reverse items-end gap-3"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#0B1F3A]/95 backdrop-blur-md text-white shadow-lg shadow-black/20 border border-white/10 active:bg-[#C8A14A]/20 transition-colors"
                    aria-label={link.label}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xs font-medium whitespace-nowrap">{link.label}</span>
                    <Icon size={16} strokeWidth={1.8} />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#C8A14A] text-[#0B1F3A] flex items-center justify-center shadow-xl shadow-black/25 active:bg-[#d4ad5a] transition-colors"
          aria-label={isOpen ? "Close social links" : "Open social links"}
        >
          {isOpen ? <X size={22} /> : <Share2 size={22} />}
        </motion.button>
      </div>
    </>
  );
}
