import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Eagle Salt Scale-Up",
    challenge: "Limited production capacity constraining market growth",
    strategy: "Comprehensive operational restructuring and technology investment",
    metric: "300%",
    metricLabel: "Capacity Increase",
    results: ["Export market entry", "ISO certification"],
  },
  {
    title: "Electrochem Restructuring",
    challenge: "Operational inefficiencies and declining market position",
    strategy: "Process optimization and strategic repositioning",
    metric: "40%",
    metricLabel: "Cost Reduction",
    results: ["Market share growth", "New product lines"],
  },
  {
    title: "Luta Quarry Operationalization",
    challenge: "Greenfield site requiring full operational setup",
    strategy: "End-to-end operations development and team building",
    metric: "100%",
    metricLabel: "Target Achievement",
    results: ["Successful launch", "Safety certification"],
  },
  {
    title: "Osabusquare Turnaround",
    challenge: "Declining performance and organizational challenges",
    strategy: "Business turnaround and operational restructuring",
    metric: "Full",
    metricLabel: "Profitability Restored",
    results: ["Team restructuring", "Market repositioning"],
  },
];

export default function TransformationImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Transformation Impact
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] leading-tight mb-6">
            Driving Measurable Results
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/30 mb-8" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start py-8 border-t border-gray-200 first:border-t-0">
                <div className="lg:col-span-3 lg:text-right">
                  <p className="text-5xl lg:text-6xl font-serif text-[#0B1F3A] leading-none mb-1">
                    {project.metric}
                  </p>
                  <p className="text-[#C8A14A] text-sm font-medium tracking-wider uppercase">
                    {project.metricLabel}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3">
                    {project.title}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      <span className="text-[#C8A14A] font-medium uppercase tracking-wider text-xs">Challenge: </span>
                      {project.challenge}
                    </p>
                    <p>
                      <span className="text-[#C8A14A] font-medium uppercase tracking-wider text-xs">Strategy: </span>
                      {project.strategy}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span key={result} className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-100">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-200"
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
