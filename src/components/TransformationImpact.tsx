import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Eagle Salt Scale-Up",
    challenge: "Limited production capacity constraining market growth",
    strategy: "Comprehensive operational restructuring and technology investment",
    metric: "300%",
    metricLabel: "Capacity Increase",
    results: ["Export market entry", "ISO certification"],
    details: [
      "Led end-to-end capacity expansion program across all production lines",
      "Secured investment for modern processing equipment and facility upgrades",
      "Built regional distribution network spanning 4 West African countries",
      "Implemented ISO-compliant quality management systems from ground up",
    ],
    outcome: "Transformed a local producer into a regional market leader with export capabilities.",
  },
  {
    title: "Electrochem Restructuring",
    challenge: "Operational inefficiencies and declining market position",
    strategy: "Process optimization and strategic repositioning",
    metric: "40%",
    metricLabel: "Cost Reduction",
    results: ["Market share growth", "New product lines"],
    details: [
      "Conducted comprehensive operational audit across all divisions",
      "Redesigned supply chain and logistics workflows",
      "Implemented lean manufacturing principles and waste reduction programs",
      "Launched 3 new product lines targeting adjacent markets",
    ],
    outcome: "Restored competitiveness and positioned the company for sustainable long-term growth.",
  },
  {
    title: "Luta Quarry Operationalization",
    challenge: "Greenfield site requiring full operational setup",
    strategy: "End-to-end operations development and team building",
    metric: "100%",
    metricLabel: "Target Achievement",
    results: ["Successful launch", "Safety certification"],
    details: [
      "Developed complete operational blueprint from site assessment to production",
      "Recruited and trained 200+ person workforce across all functions",
      "Established safety protocols and environmental compliance frameworks",
      "Achieved first production within 6 months ahead of industry benchmarks",
    ],
    outcome: "Delivered a fully operational quarry on schedule and within budget, setting a new standard for project execution.",
  },
  {
    title: "Osabusquare Turnaround",
    challenge: "Declining performance and organizational challenges",
    strategy: "Business turnaround and operational restructuring",
    metric: "Full",
    metricLabel: "Profitability Restored",
    results: ["Team restructuring", "Market repositioning"],
    details: [
      "Diagnosed root causes of decline across operations, finance, and culture",
      "Restructured management team and realigned incentives with performance",
      "Optimized pricing strategy and renegotiated supplier contracts",
      "Rebuilt customer relationships and strengthened sales pipeline",
    ],
    outcome: "Returned the business to profitability within 12 months with a clear growth trajectory.",
  },
  {
    title: "Phoenix Enclave Development",
    challenge: "A complex real estate development requiring integrated execution across disciplines",
    strategy: "Strategic leadership, development governance, and stakeholder coordination",
    metric: "Premium",
    metricLabel: "Market Position",
    results: ["Successful commercial launch", "Long-term value creation"],
    details: [
      "Led strategic planning and governance framework for the mixed-use development",
      "Coordinated cross-disciplinary teams across design, construction, and commercial functions",
      "Managed stakeholder relationships and development milestones",
      "Delivered a premium development positioned for sustainable long-term returns",
    ],
    outcome: "A high-quality real estate asset delivered through disciplined execution and cohesive leadership.",
  },
];

export default function TransformationImpact() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, rootMargin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 xl:py-32 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
            Transformation Impact
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] leading-tight mb-6">
            Transformation Projects
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/30 mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#C8A14A]/30 hover:border-[#C8A14A]/70 hover:shadow-lg transition-all duration-500 group"
            >
              <div className="h-1 bg-gradient-to-r from-[#C8A14A]/40 via-[#C8A14A] to-[#C8A14A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-5xl lg:text-6xl font-serif text-[#0B1F3A] leading-none mb-1">
                      {project.metric}
                    </p>
                    <p className="text-[#C8A14A] text-sm font-medium tracking-wider uppercase">
                      {project.metricLabel}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#0B1F3A] mb-4 group-hover:text-[#C8A14A] transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="text-[#C8A14A] font-semibold uppercase tracking-wider text-xs">Challenge: </span>
                    {project.challenge}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-[#C8A14A] font-semibold uppercase tracking-wider text-xs">Strategy: </span>
                    {project.strategy}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.results.map((result) => (
                    <span key={result} className="px-3 py-1 bg-[#0B1F3A]/5 rounded-full text-xs text-[#0B1F3A] font-medium">
                      {result}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="inline-flex items-center gap-2 text-[#C8A14A] text-sm font-medium hover:text-[#0B1F3A] transition-colors group"
                >
                  {expandedIndex === index ? "Hide Strategy" : "Read the Strategy"}
                  <ArrowRight size={14} className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <p className="text-sm font-semibold text-[#0B1F3A] mb-3 uppercase tracking-wider">Strategic Actions</p>
                        <ul className="space-y-2 mb-4">
                          {project.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A14A] mt-1.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-[#0B1F3A] font-medium italic border-l-2 border-[#C8A14A] pl-4">
                          "{project.outcome}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-[#0B1F3A] font-medium hover:text-[#C8A14A] transition-colors text-sm"
          >
            View All Transformation Projects
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}