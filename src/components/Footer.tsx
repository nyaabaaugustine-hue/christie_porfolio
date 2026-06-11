import { motion } from "framer-motion";
import { Mail, MapPin, Bell } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const footerLinks = {
  navigation: [
    { label: "Home", page: "home" as Page },
    { label: "About", page: "about" as Page },
    { label: "Leadership", page: "leadership" as Page },
    { label: "Speaking", page: "speaking" as Page },
    { label: "Insights", page: "insights" as Page },
    { label: "Contact", page: "contact" as Page },
  ],
  resources: [
    { label: "Executive Bio", page: "about" as Page },
    { label: "Speaker Kit", page: "speaking" as Page },
    { label: "Board Profile", page: "leadership" as Page },
    { label: "Media Kit", page: "contact" as Page },
  ],
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-2">Join the Executive Circle</h3>
              <p className="text-white/60">
                Receive insights on leadership, transformation, and African enterprise.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-[#C8A14A] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
                alt="Christiana Okyere"
                className="h-10 lg:h-12 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Corporate Executive, Entrepreneur, and Growth Strategist transforming 
              businesses and scaling industries across Africa.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#C8A14A] transition-colors text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
              >
                in
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#C8A14A] transition-colors text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
              >
                X
              </motion.a>
              <motion.a
                href="mailto:contact@christianaokyere.com"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#C8A14A] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/50 hover:text-[#C8A14A] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-white/50 hover:text-[#C8A14A] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C8A14A] flex-shrink-0 mt-1" />
                <span className="text-white/50 text-sm">
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Bell size={18} className="text-[#C8A14A] flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Executive Inquiries Welcome
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C8A14A] flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  contact@christianaokyere.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Christiana Akua Feyie Yeboaa Okyere. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-white/30 hover:text-white/60 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/30 hover:text-white/60 text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}