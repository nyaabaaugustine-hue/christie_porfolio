import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook } from "lucide-react";

const socialLinks = [
  {
    href: "https://facebook.com/christianaokyere",
    icon: Facebook,
    label: "Facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    href: "https://linkedin.com/in/christiana-okyere",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
  {
    href: "mailto:christie@smic360.com",
    icon: Mail,
    label: "Email",
    color: "hover:bg-[#C8A14A]",
  },
];

export default function FloatingSocial() {
  return (
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
            className={`group relative flex items-center gap-3 w-12 hover:w-[160px] h-12 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md text-white ${link.color} transition-all duration-500 ease-out overflow-hidden shadow-lg shadow-black/20 border border-white/10 hover:border-white/20`}
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

      {/* Decorative vertical line */}
      <div className="absolute -right-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A14A]/30 to-transparent pointer-events-none" />
    </div>
  );
}
