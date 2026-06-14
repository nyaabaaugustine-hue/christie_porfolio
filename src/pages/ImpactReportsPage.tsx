import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, Briefcase, Users, Leaf, TrendingUp, Calendar } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface ImpactReportsPageProps {
  onNavigate: (page: Page) => void;
}

const impactMetrics = [
  { icon: Briefcase, metric: "6", label: "Industry Sectors", description: "Spanning logistics, manufacturing, real estate, trade, services, and hospitality." },
  { icon: Users, metric: "500+", label: "Jobs Created", description: "Direct employment generated through businesses built and led." },
  { icon: TrendingUp, metric: "300%", label: "Production Growth", description: "Eagle Salt scale-up achieved through strategic transformation." },
  { icon: Leaf, metric: "40%", label: "Cost Reduction", description: "Operational efficiency improvement through lean process implementation." },
];

const reports = [
  {
    id: 1,
    year: "2025",
    title: "Annual Impact Report 2025",
    description: "Comprehensive overview of leadership activities, transformation projects, and business impact across all portfolio companies.",
    date: "January 2026",
    pdfUrl: "#",
  },
  {
    id: 2,
    year: "2024",
    title: "Annual Impact Report 2024",
    description: "Highlights from Eagle Salt expansion, Electrochem restructuring, and new venture development initiatives.",
    date: "January 2025",
    pdfUrl: "#",
  },
  {
    id: 3,
    year: "2023",
    title: "Annual Impact Report 2023",
    description: "Year of significant growth across logistics, manufacturing, and real estate development sectors.",
    date: "January 2024",
    pdfUrl: "#",
  },
];

export default function ImpactReportsPage({ onNavigate }: ImpactReportsPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [_activeReport, setActiveReport] = useState<number | null>(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Impact reports background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/80 via-[#0B1F3A]/60 to-[#0B1F3A]/90" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.05)_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#C8A14A]" />
              <p className="text-[#C8A14A] text-sm tracking-[0.25em] uppercase font-medium">
                Impact Reports
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Measuring <span className="text-[#C8A14A]">Impact</span>
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Transparency in leadership, transformation, and sustainable value creation across all portfolio companies.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Impact Metrics */}
      <section ref={ref} className="py-16 lg:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
              Key Metrics
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mt-3">
              Impact at a Glance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-[#C8A14A]/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-[#C8A14A]" size={28} />
                  </div>
                  <div className="text-3xl font-serif text-[#0B1F3A] mb-1">{item.metric}</div>
                  <p className="text-[#C8A14A] font-medium text-sm mb-3">{item.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
              Annual Reports
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mt-3">
              Download Our Reports
            </h2>
          </motion.div>

          <div className="space-y-6">
            {reports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-[#F8F8F8] rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#C8A14A]/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-[#0B1F3A] flex items-center justify-center">
                      <span className="text-[#C8A14A] font-serif text-2xl">{report.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar size={12} />
                        {report.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B1F3A] group-hover:text-[#C8A14A] transition-colors mb-2">
                      {report.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.a
                      href={report.pdfUrl}
                      download
                      onClick={() => setActiveReport(report.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1F3A] text-white font-medium rounded-lg hover:bg-[#C8A14A] hover:text-[#0B1F3A] transition-all"
                    >
                      <Download size={16} />
                      Download PDF
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 lg:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mt-3 mb-6">
              How We Measure Impact
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
              Our impact measurement framework tracks key performance indicators across financial growth, operational efficiency, job creation, community engagement, and sustainable business practices. Each report provides transparent data on progress, challenges, and strategic priorities for the year ahead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Get in Touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6">
              Questions About Our Impact?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              For detailed impact data, custom reports, or specific inquiries about portfolio company performance, please reach out.
            </p>
            <motion.button
              onClick={() => onNavigate("contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#d4ad5a] transition-colors inline-flex items-center gap-2"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
