import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Truck, Building2, Cog, Briefcase, Megaphone, Hotel } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights';

interface IndustriesPageProps {
  onNavigate: (page: Page) => void;
}

const industries = [
  {
    icon: Factory,
    title: "Industrial Operations",
    description: "Driving performance and scale across manufacturing, production, and logistics businesses.",
  },
  {
    icon: Truck,
    title: "Trade & Distribution",
    description: "Building resilient supply chains and commercial networks for market expansion.",
  },
  {
    icon: Building2,
    title: "Real Estate Development",
    description: "Leading strategic development, commercial delivery, and asset optimization programs.",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    description: "Strengthening manufacturing operations with quality systems and growth-ready capacity.",
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Transforming service businesses with governance, customer focus, and operational excellence.",
  },
  {
    icon: Megaphone,
    title: "Strategic Communications",
    description: "Aligning narrative, stakeholder engagement, and reputation with organizational strategy.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Building resilient supply chains and optimizing logistics operations for enterprise growth.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Advising on hospitality operations, guest experience, and growth strategy for premium brands.",
  },
];

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20">
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Industries background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              Industry Experience
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Industries</h1>
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
                  Industry Experience
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Christiana's leadership spans multiple sectors, bringing practical insight and strategic depth to every industry she works with.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 max-w-sm">
                <p className="text-[#C8A14A] uppercase tracking-[0.18em] text-xs font-semibold mb-4">
                  Industries
                </p>
                <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Business Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Strategic Communications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Logistics & Supply Chain
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Industrial Operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Trade & Distribution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Real Estate Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Manufacturing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Hospitality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#F5F6F7] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#C8A14A]/10 flex items-center justify-center mb-6">
                  <Icon className="text-[#C8A14A]" size={28} />
                </div>
                <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
                  {industry.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Interested in board opportunities, speaking engagements, strategic conversations, or executive leadership collaborations?
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-3 rounded-lg bg-[#C8A14A] px-8 py-4 text-sm font-semibold text-[#0B1F3A] hover:bg-[#b8923f] transition-colors"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
