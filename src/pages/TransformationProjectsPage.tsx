import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface TransformationProjectsPageProps {
  onNavigate: (page: Page) => void;
}

const projects = [
  {
    title: "Eagle Salt Scale-Up",
    challenge: "information comming soon",
    approach: "information comming soon",
    execution: "information comming soon",
    results: "information comming soon",
    lessons: "information comming soon",
  },

  {
    title: "Osabusquare Turnaround",
    challenge: "Declining performance and an urgent need for business stabilization.",
    approach: "Strategic restructuring, operational reset, and commercial repositioning.",
    execution: "Reorganized the management team, optimized costs, and refreshed market positioning.",
    results: "Profitability restored within 12 months and business momentum rebuilt.",
    lessons: "Turnaround success depends on decisive leadership, operational rigor, and customer focus.",
  },
  {
    title: "Phoenix Enclave Development",
    challenge: "A complex real estate development requiring integrated execution across disciplines.",
    approach: "Strategic project leadership, development governance, and stakeholder coordination.",
    execution: "Led planning, delivery, and commercial launch for the mixed-use development.",
    results: "A premium development positioned for long-term value creation.",
    lessons: "High-value development is driven by cohesive leadership and disciplined delivery.",
  },
];

export default function TransformationProjectsPage({ onNavigate }: TransformationProjectsPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="pt-20">
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Transformation background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              Transformation Projects
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Transformation</h1>
            <div className="w-24 h-px bg-[#C8A14A]/70 mt-4" />
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-white/20 bg-[#0B1F3A] shadow-2xl shadow-black/10 p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[#C8A14A] text-sm uppercase tracking-widest mb-4 font-semibold">
                  Transformation Projects
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Case studies demonstrating measurable impact through strategic transformation and operational excellence.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 max-w-sm">
                <p className="text-[#C8A14A] uppercase tracking-[0.18em] text-xs font-semibold mb-4">
                  Featured Projects
                </p>
                <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Eagle Salt Scale-Up
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Electrochem Restructuring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Luta Quarry Operationalization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Osabusquare Turnaround
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Phoenix Enclave Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-8">
            {projects.map((project, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#F5F6F7] p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="max-w-2xl">
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#0B1F3A] mb-3">
                          {project.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {project.results}
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="inline-flex items-center gap-2 rounded-lg border border-[#C8A14A] px-5 py-3 text-sm font-semibold text-[#0B1F3A] hover:bg-[#C8A14A]/10 transition-colors"
                      >
                        {isOpen ? "Hide Details" : "View Case Study"}
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden bg-white px-8 pb-8 lg:px-10"
                      >
                        <div className="grid gap-6 lg:grid-cols-5 pt-8">
                          <div className="lg:col-span-2 space-y-4">
                            <div>
                              <h3 className="text-sm uppercase tracking-[0.25em] text-[#C8A14A] font-semibold mb-2">Challenge</h3>
                              <p className="text-gray-600">{project.challenge}</p>
                            </div>
                            <div>
                              <h3 className="text-sm uppercase tracking-[0.25em] text-[#C8A14A] font-semibold mb-2">Approach</h3>
                              <p className="text-gray-600">{project.approach}</p>
                            </div>
                          </div>
                          <div className="lg:col-span-3 space-y-4">
                            <div>
                              <h3 className="text-sm uppercase tracking-[0.25em] text-[#C8A14A] font-semibold mb-2">Execution</h3>
                              <p className="text-gray-600">{project.execution}</p>
                            </div>
                            <div>
                              <h3 className="text-sm uppercase tracking-[0.25em] text-[#C8A14A] font-semibold mb-2">Results</h3>
                              <p className="text-gray-600">{project.results}</p>
                            </div>
                            <div>
                              <h3 className="text-sm uppercase tracking-[0.25em] text-[#C8A14A] font-semibold mb-2">Lessons Learned</h3>
                              <p className="text-gray-600">{project.lessons}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-3 rounded-lg bg-[#C8A14A] px-8 py-4 text-sm font-semibold text-[#0B1F3A] hover:bg-[#b8923f] transition-colors"
            >
              Let's Connect
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
