import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://wa.me/233XXXXXXXXX",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "hover:bg-[#25D366]",
  },
  {
    href: "https://linkedin.com/in/christiana-okyere",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
  {
    href: "mailto:contact@christianaokyere.com",
    icon: Mail,
    label: "Email",
    color: "hover:bg-[#C8A14A]",
  },
];

export default function FloatingSocial() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ x: -4 }}
            className={`group flex items-center gap-3 px-3 py-3 bg-[#0B1F3A] text-white ${link.color} transition-colors duration-300 border-l border-white/10`}
            aria-label={link.label}
          >
            <Icon size={18} />
            <span className="text-xs tracking-wider uppercase max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">
              {link.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
