import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, TrendingUp, RefreshCw, Lightbulb, Shield } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights';

interface LeadershipPageProps {
  onNavigate: (page: Page) => void;
}

const leadershipThemes = [
  {
    icon: Briefcase,
    title: "Executive Leadership",
    description: "Providing strategic direction and organizational leadership.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Creating pathways for sustainable business expansion.",
  },
  {
    icon: RefreshCw,
    title: "Transformation",
    description: "Driving organizational improvement and performance enhancement.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "Building ventures and creating opportunities.",
  },
  {
    icon: Shield,
    title: "Governance",
    description: "Strengthening accountability and long-term value creation.",
  },
];

const portfolioCompanies = [
  {
    name: "McDan Group",
    sector: "Industrial Operations & Logistics",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134493/MACDAN_zjki8k.jpg",
  },
  {
    name: "Eagle Salt",
    sector: "Manufacturing",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134079/EAGLE-LOGO_ylwlgk.jpg",
  },
  {
    name: "Moonlight Shipping",
    sector: "Logistics & Supply Chain",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119515/Moonlight-logo_feemhr.jpg",
  },
  {
    name: "SMIC360",
    sector: "Industrial Operations",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119515/SMIC360-LOGO_ebuzdi.jpg",
  },
  {
    name: "Phoenix Enclave",
    sector: "Real Estate Development",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134364/PHOENIX-LOGO_xhbqul.jpg",
  },
  {
    name: "Osabusquare",
    sector: "Trade & Distribution",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134180/Osabusquare-LOGO_ke7n5x.jpg",
  },
];

export default function LeadershipPage({ onNavigate }: LeadershipPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Leadership background"
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
                Leadership Portfolio
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Leadership
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Driving transformation and building sustainable enterprises across Africa.
            </p>
          </motion.div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Leadership Overview */}
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
                  About Her Leadership
                </p>
                <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6 leading-snug">
                  A Legacy of Growth & Transformation
                </h2>
                <div className="w-16 h-[2px] bg-[#C8A14A]/50 mb-8" />
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Throughout her career, Christiana has led organizations through periods of growth, change, and transformation.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Her leadership experience spans private enterprise, entrepreneurship, strategic projects, and executive management across multiple industries.
                </p>
              </div>
            </motion.div>

            {/* Right — Leadership Themes */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-6 font-medium">
                Leadership Themes
              </p>
              <div className="space-y-4">
                {leadershipThemes.map((theme, index) => {
                  const Icon = theme.icon;
                  return (
                    <motion.div
                      key={theme.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#C8A14A]/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8A14A]/10 to-[#C8A14A]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#C8A14A]/20 group-hover:to-[#C8A14A]/10 transition-colors">
                          <Icon className="text-[#C8A14A]" size={22} strokeWidth={1.8} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0B1F3A] mb-1">{theme.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{theme.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-16 lg:py-24 bg-white">
        {/* Subtle background texture */}
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
              Portfolio
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Companies She Has Led
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-[#F8F8F8] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C8A14A]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#C8A14A]/5">
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F8F8]/50 z-10" />
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3 group-hover:text-[#C8A14A] transition-colors">
                      {company.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0B1F3A]/5 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8A14A]" />
                      <span className="text-[#0B1F3A]/70 text-sm font-medium">
                        {company.sector}
                      </span>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8A14A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-[#0B1F3A] overflow-hidden">
        {/* Background effects */}
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
