import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";

const expertiseAreas = [
  {
    id: 1,
    title: "Corporate Leadership",
    description: "Executive management, C-suite operations, organizational strategy, and enterprise-wide transformation initiatives.",
    details: ["Board-level decision making", "Executive team leadership", "Strategic planning", "Crisis management"],
  },
  {
    id: 2,
    title: "Business Strategy",
    description: "Market analysis, competitive positioning, growth strategy development, and strategic partnerships.",
    details: ["Market entry strategies", "Competitive analysis", "Strategic partnerships", "M&A advisory"],
  },
  {
    id: 3,
    title: "Organizational Transformation",
    description: "Change management, restructuring, culture transformation, and performance optimization.",
    details: ["Turnaround management", "Culture change", "Process reengineering", "Performance improvement"],
  },
  {
    id: 4,
    title: "Governance",
    description: "Board governance, compliance frameworks, risk management, and stakeholder relations.",
    details: ["Board development", "Compliance frameworks", "Risk management", "Stakeholder engagement"],
  },
  {
    id: 5,
    title: "Industrial Operations",
    description: "Manufacturing operations, mining operations, production optimization, and industrial efficiency.",
    details: ["Operations management", "Production planning", "Quality systems", "Industrial efficiency"],
  },
  {
    id: 6,
    title: "Entrepreneurship",
    description: "Venture creation, business development, startup scaling, and entrepreneurial ecosystem building.",
    details: ["Venture creation", "Business modeling", "Startup scaling", "Ecosystem development"],
  },
  {
    id: 7,
    title: "Growth & Expansion",
    description: "Market expansion, geographic growth, product line extension, and scaling operations.",
    details: ["Market expansion", "Geographic growth", "Product development", "Scaling strategies"],
  },
  {
    id: 8,
    title: "Strategic Communications",
    description: "Corporate communications, brand strategy, stakeholder communications, and public relations.",
    details: ["Brand strategy", "Corporate communications", "Media relations", "Crisis communications"],
  },
  {
    id: 9,
    title: "Supply Chain & Logistics",
    description: "Supply chain optimization, logistics management, distribution networks, and trade operations.",
    details: ["Supply chain design", "Logistics optimization", "Distribution networks", "Trade facilitation"],
  },
];

export default function ExpertiseAreas() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 lg:py-24 xl:py-32 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
            Areas of Expertise
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6">
            Cross-Industry Executive Capabilities
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Two decades of hands-on leadership across diverse sectors has built a
            comprehensive toolkit for business transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveCard(area.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === area.id ? null : area.id)}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C8A14A]/50 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#C8A14A] text-4xl font-serif">
                    0{area.id}
                  </span>
                  <motion.div
                    animate={{ rotate: activeCard === area.id ? 45 : 0 }}
                    className="w-8 h-8 rounded-full bg-[#C8A14A]/20 flex items-center justify-center"
                  >
                    <span className="text-[#C8A14A] text-xl">+</span>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#C8A14A] transition-colors">
                  {area.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{area.description}</p>
                
                <AnimatePresence>
                  {activeCard === area.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10">
                        <ul className="space-y-2">
                          {area.details.map((detail, i) => (
                            <li key={i} className="text-white/50 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A14A]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}