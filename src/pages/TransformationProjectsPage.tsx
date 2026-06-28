import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface TransformationProjectsPageProps {
  onNavigate: (page: Page) => void;
}

const projects = [
  {
    title: "Salt Trading & Distribution Business",
    tag: "Scale-Up",
    stat: "GHS 31M",
    statLabel: "Cumulative Sales",
    challenge: "Building a high-volume trading and distribution business from the ground up.",
    approach: "Established organizational structures, commercial systems, logistics frameworks, and growth strategies.",
    execution: "Drove market expansion, strategic partnerships, pricing models, and operational performance.",
    results: "Built and scaled a high-volume salt trading and distribution business from startup to GHS 31 million cumulative sales.",
    lessons: "Sustainable growth is driven by strong systems, strategic execution, and market focus.",
  },
  {
    title: "Osabusquare Turnaround",
    tag: "Turnaround",
    stat: "12 Mo",
    statLabel: "To Profitability",
    challenge: "Declining performance and an urgent need for business stabilization.",
    approach: "Strategic restructuring, operational reset, and commercial repositioning.",
    execution: "Reorganized the management team, optimized costs, and refreshed market positioning.",
    results: "Profitability restored within 12 months and business momentum rebuilt.",
    lessons: "Turnaround success depends on decisive leadership, operational rigor, and customer focus.",
  },
  {
    title: "Phoenix Enclave Development",
    tag: "Development",
    stat: "Premium",
    statLabel: "Long-term Value",
    challenge: "A complex real estate development requiring integrated execution across disciplines.",
    approach: "Strategic project leadership, development governance, and stakeholder coordination.",
    execution: "Led planning, delivery, and commercial launch for the mixed-use development.",
    results: "A premium development positioned for long-term value creation.",
    lessons: "High-value development is driven by cohesive leadership and disciplined delivery.",
  },
];

const sectionOrder = [
  { key: "challenge" as const, label: "Challenge" },
  { key: "approach" as const, label: "Approach" },
  { key: "execution" as const, label: "Execution" },
  { key: "results" as const, label: "Results" },
  { key: "lessons" as const, label: "Lessons Learned" },
];

export default function TransformationProjectsPage({ onNavigate }: TransformationProjectsPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative h-[380px] lg:h-[460px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Transformation background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/60 via-[#0B1F3A]/75 to-[#0B1F3A]/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-14 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#C8A14A] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
              Transformation Projects
            </p>
            <h1 className="text-4xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
              Transformation
            </h1>
            <p className="text-white/60 mt-4 text-base lg:text-lg max-w-xl leading-relaxed">
              Case studies demonstrating measurable impact through strategic transformation and operational excellence.
            </p>
            <div className="w-16 h-0.5 bg-[#C8A14A] mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ── Project Index Bar ── */}
      <section className="bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-10">
          <p className="text-[#C8A14A] text-[10px] uppercase tracking-[0.3em] font-semibold mb-5">Featured Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            {[
              { name: "Salt Trading & Distribution Business", tag: "Scale-Up" },
              { name: "Electrochem Restructuring", tag: "Restructuring" },
              { name: "Luta Quarry Operationalization", tag: "Operations" },
              { name: "Osabusquare Turnaround", tag: "Turnaround" },
              { name: "Phoenix Enclave Development", tag: "Development" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0B1F3A] hover:bg-white/5 transition-colors duration-200 px-5 py-5 flex flex-col gap-3">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8A14A]/70 font-semibold">{item.tag}</span>
                <div className="flex items-start gap-2.5">
                  <span className="text-[10px] font-bold text-white/20 mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white/75 text-sm leading-snug">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section ref={ref} className="py-16 lg:py-24 bg-[#F8F8F7]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {projects.map((project, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? "border-[#C8A14A]/40 shadow-xl shadow-[#0B1F3A]/8"
                      : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
                  } bg-white`}
                >
                  {/* Card Header */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full text-left"
                    aria-expanded={isOpen}
                  >
                    <div className={`p-7 lg:p-9 transition-colors duration-300 ${isOpen ? "bg-[#0B1F3A]" : "bg-white hover:bg-gray-50"}`}>
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-5 flex-1 min-w-0">
                          {/* Number Badge */}
                          <span className={`text-xs font-bold tracking-widest mt-1 shrink-0 ${
                            isOpen ? "text-[#C8A14A]/60" : "text-gray-300"
                          }`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span className={`text-[10px] uppercase tracking-[0.25em] font-semibold px-2.5 py-1 rounded-full border ${
                                isOpen
                                  ? "border-[#C8A14A]/40 text-[#C8A14A] bg-[#C8A14A]/10"
                                  : "border-gray-200 text-gray-400 bg-gray-50"
                              }`}>
                                {project.tag}
                              </span>
                            </div>
                            <h2 className={`text-xl lg:text-2xl font-serif tracking-tight ${
                              isOpen ? "text-white" : "text-[#0B1F3A]"
                            }`}>
                              {project.title}
                            </h2>
                            {!isOpen && (
                              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed line-clamp-1">
                                {project.results}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 shrink-0">
                          {/* Stat chip — visible when closed */}
                          {!isOpen && (
                            <div className="hidden sm:flex flex-col items-end">
                              <span className="text-lg font-bold text-[#0B1F3A] leading-none">{project.stat}</span>
                              <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{project.statLabel}</span>
                            </div>
                          )}
                          <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                            isOpen
                              ? "border-[#C8A14A]/50 bg-[#C8A14A]/10 text-[#C8A14A]"
                              : "border-gray-200 bg-gray-50 text-gray-400"
                          }`}>
                            {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* Stat banner */}
                        <div className="bg-[#C8A14A]/10 border-t border-[#C8A14A]/20 px-7 lg:px-9 py-4 flex items-center gap-6">
                          <div>
                            <span className="text-2xl font-bold text-[#0B1F3A] leading-none">{project.stat}</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider ml-2">{project.statLabel}</span>
                          </div>
                          <div className="w-px h-6 bg-gray-200" />
                          <p className="text-gray-600 text-sm leading-relaxed">{project.results}</p>
                        </div>

                        {/* Sections grid */}
                        <div className="px-7 lg:px-9 pb-8 pt-7 bg-white">
                          <div className="grid gap-0 divide-y divide-gray-100">
                            {sectionOrder.map(({ key, label }) => (
                              <div key={key} className="py-5 grid lg:grid-cols-[180px_1fr] gap-3 lg:gap-8 items-start">
                                <h3 className="text-[11px] uppercase tracking-[0.28em] text-[#C8A14A] font-semibold pt-0.5">
                                  {label}
                                </h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                  {project[key]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-200">
            <p className="text-gray-500 text-sm max-w-xs text-center sm:text-left">
              Interested in driving transformation in your organisation?
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-3 rounded-lg bg-[#0B1F3A] px-8 py-4 text-sm font-semibold text-white hover:bg-[#C8A14A] hover:text-[#0B1F3A] transition-all duration-300 group"
            >
              Let's Connect
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
