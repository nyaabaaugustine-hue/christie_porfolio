import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, Mic, Handshake } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface ExecutiveCTAProps {
  onNavigate: (page: Page) => void;
}

export default function ExecutiveCTA({ onNavigate }: ExecutiveCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ctaOptions = [
    {
      icon: Briefcase,
      title: "Board Inquiries",
      description: "Explore governance and advisory opportunities",
      action: "contact" as Page,
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description: "Invite Christiana to your next event",
      action: "speaking" as Page,
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Discuss collaboration opportunities",
      action: "contact" as Page,
    },
  ];

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden bg-[#0B1F3A]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:64px_64px]" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-[#C8A14A]/[0.04] blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#C8A14A]/[0.04] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C8A14A]/[0.06] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C8A14A]/[0.04] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 border border-[#C8A14A]/30 text-[#C8A14A] text-xs tracking-[0.2em] uppercase mb-6 font-medium rounded-full">
            Let's Connect
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Let's Build the Future of
          </h2>
          <h2 className="text-3xl lg:text-5xl font-serif text-[#C8A14A] tracking-tight mb-6">
            African Enterprise
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A14A]/50 mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-base lg:text-lg">
            Ready to explore how we can create lasting impact together? 
            Christiana is available for board positions, speaking engagements, 
            and strategic advisory roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.button
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onNavigate(option.action)}
                className="group relative text-left"
              >
                <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-2xl p-7 lg:p-8 border border-white/[0.06] hover:border-[#C8A14A]/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8A14A]/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#C8A14A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A14A] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#C8A14A]/20">
                      <Icon className="text-[#C8A14A] group-hover:text-[#0B1F3A] transition-colors duration-500" size={22} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-serif text-white mb-2 group-hover:text-[#C8A14A] transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-white/40 text-sm mb-6 leading-relaxed">{option.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#C8A14A] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      Submit Inquiry
                      <ArrowRight size={14} className="transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
