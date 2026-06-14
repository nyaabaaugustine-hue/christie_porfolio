import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Users, Globe, Shield, ChevronDown, ChevronUp, Mail } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface InvestorRelationsPageProps {
  onNavigate: (page: Page) => void;
}

const highlights = [
  { icon: TrendingUp, metric: "15+", label: "Years of Leadership", description: "Track record of building and scaling enterprises across multiple sectors." },
  { icon: Users, metric: "500+", label: "Jobs Created", description: "Direct employment generated through businesses built and led." },
  { icon: Globe, metric: "6", label: "Industry Sectors", description: "Spanning logistics, manufacturing, real estate, trade, services, and hospitality." },
  { icon: Shield, metric: "100%", label: "Governance Focus", description: "Commitment to transparency, accountability, and sustainable value creation." },
];

const strategicPriorities = [
  { title: "Sustainable Growth", description: "Building enterprises that deliver long-term value while creating positive impact across communities and stakeholders." },
  { title: "Operational Excellence", description: "Driving efficiency, quality, and performance through strong systems, processes, and people development." },
  { title: "Market Expansion", description: "Identifying and executing growth opportunities across Ghana, West Africa, and the broader continent." },
  { title: "Governance & Accountability", description: "Strengthening organizational frameworks to ensure transparency, oversight, and sustainable performance." },
];

const governanceItems = [
  "Transparent financial reporting and accountability",
  "Independent board oversight and strategic guidance",
  "Ethical business practices across all operations",
  "Stakeholder-focused decision making",
  "Long-term value creation orientation",
];

export default function InvestorRelationsPage({ onNavigate }: InvestorRelationsPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPriority, setExpandedPriority] = useState<number | null>(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Investor relations background"
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
                Investor Relations
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Building <span className="text-[#C8A14A]">Sustainable</span>
              <br />Enterprises
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Creating long-term value through strategic leadership, operational excellence, and governance across multiple industries.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Highlights */}
      <section ref={ref} className="py-16 lg:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
              Company Overview
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mt-3">
              Leadership Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#C8A14A]/10 rounded-xl flex items-center justify-center mb-5">
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

      {/* Investment Thesis */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
                Investment Thesis
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mt-3 mb-6">
                Why Partner With Us
              </h2>
              <div className="w-16 h-[2px] bg-[#C8A14A]/50 mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Christiana's leadership portfolio represents a diversified approach to value creation across Ghana's most dynamic industries. Her track record demonstrates the ability to identify opportunities, execute transformations, and build sustainable enterprises.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With deep operational expertise, strong governance principles, and a clear strategic vision, she brings a unique combination of entrepreneurial agility and executive discipline to every venture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
                Strategic Priorities
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mt-3 mb-6">
                Growth Focus Areas
              </h2>
              <div className="w-16 h-[2px] bg-[#C8A14A]/50 mb-8" />
              <div className="space-y-4">
                {strategicPriorities.map((priority, index) => (
                  <motion.div
                    key={priority.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedPriority(expandedPriority === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                          <span className="text-[#C8A14A] font-serif text-lg">{index + 1}</span>
                        </div>
                        <h3 className="font-semibold text-[#0B1F3A]">{priority.title}</h3>
                      </div>
                      {expandedPriority === index ? (
                        <ChevronUp size={18} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={18} className="text-gray-400" />
                      )}
                    </button>
                    {expandedPriority === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5"
                      >
                        <p className="text-gray-500 leading-relaxed pl-14">{priority.description}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 lg:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
                Governance
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-white mt-3 mb-6">
                Committed to Excellence
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Strong governance is the foundation of sustainable business. Every organization led by Christiana operates with the highest standards of accountability, transparency, and ethical practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {governanceItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C8A14A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield size={16} className="text-[#C8A14A]" />
                  </div>
                  <p className="text-white/70 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              Interested in Strategic Partnership?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              For investment inquiries, partnership opportunities, or to learn more about our portfolio companies, please reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate("contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#d4ad5a] transition-colors inline-flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Us
              </motion.button>
              <motion.button
                onClick={() => onNavigate("reports")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#0B1F3A] text-white font-semibold rounded-lg hover:bg-[#0B1F3A]/90 transition-colors"
              >
                View Impact Reports
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
