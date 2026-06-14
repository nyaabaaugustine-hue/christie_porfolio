import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Truck, Building2, Cog, Briefcase, Megaphone, Hotel, Store, ArrowRight } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface IndustriesPageProps {
  onNavigate: (page: Page) => void;
}

const industries = [
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Transforming service businesses with governance, customer focus, and operational excellence.",
    accent: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Megaphone,
    title: "Strategic Communications",
    description: "Aligning narrative, stakeholder engagement, and reputation with organizational strategy.",
    accent: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Building resilient supply chains and optimizing logistics operations for enterprise growth.",
    accent: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Factory,
    title: "Industrial Operations",
    description: "Driving performance and scale across manufacturing, production, and logistics businesses.",
    accent: "from-orange-500/20 to-orange-600/10",
  },
  {
    icon: Store,
    title: "Trade & Distribution",
    description: "Building resilient supply chains and commercial networks for market expansion.",
    accent: "from-teal-500/20 to-teal-600/10",
  },
  {
    icon: Building2,
    title: "Real Estate Development",
    description: "Leading strategic development, commercial delivery, and asset optimization programs.",
    accent: "from-rose-500/20 to-rose-600/10",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    description: "Strengthening manufacturing operations with quality systems and growth-ready capacity.",
    accent: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Advising on hospitality operations, guest experience, and growth strategy for premium brands.",
    accent: "from-indigo-500/20 to-indigo-600/10",
  },
];

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Industries background"
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
                Industry Experience
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Industries
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Christiana's leadership spans multiple sectors, bringing practical insight and strategic depth to every industry she works with.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Intro Section */}
      <section ref={ref} className="relative py-16 lg:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Description */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                  Cross-Sector Expertise
                </p>
                <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6 leading-snug">
                  Multi-Industry Leadership
                </h2>
                <div className="w-16 h-[2px] bg-[#C8A14A]/50 mb-8" />
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Christiana's leadership spans multiple sectors, bringing practical insight and strategic depth to every industry she works with.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Her experience across diverse industries enables her to identify growth opportunities, drive transformation, and create sustainable value across sectors.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-serif text-[#0B1F3A] mb-1">6</div>
                    <p className="text-gray-500 text-sm">Industries</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-[#0B1F3A] mb-1">20+</div>
                    <p className="text-gray-500 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-[#0B1F3A] mb-1">15+</div>
                    <p className="text-gray-500 text-sm">Organizations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Industry List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-6 font-medium">
                Sectors
              </p>
              <div className="space-y-3">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={industry.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                      className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#C8A14A]/30 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8A14A]/10 to-[#C8A14A]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#C8A14A]/20 group-hover:to-[#C8A14A]/10 transition-colors">
                        <Icon className="text-[#C8A14A]" size={20} strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#0B1F3A] group-hover:text-[#C8A14A] transition-colors">{industry.title}</h3>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-[#C8A14A] group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,31,58,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.015)_1px,transparent_1px)] bg-[length:48px_48px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Deep Dive
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Industry Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative"
                >
                  <div className="relative bg-[#F8F8F8] rounded-2xl p-7 border border-gray-100 hover:border-[#C8A14A]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C8A14A]/5 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="text-[#0B1F3A]" size={28} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3 group-hover:text-[#C8A14A] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8A14A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#C8A14A]/[0.06] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#C8A14A]/[0.08] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-[2px] bg-[#C8A14A] mx-auto mb-8" />
            <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6 leading-tight">
              Let's Connect
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Interested in board opportunities, speaking engagements, strategic conversations, or executive leadership collaborations?
            </p>
            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(200,161,74,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-xl hover:bg-[#d4ad5a] transition-colors text-lg"
            >
              Get in Touch
              <ArrowRight size={20} strokeWidth={2} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
