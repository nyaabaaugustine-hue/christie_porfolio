import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Compass, Shield, TrendingUp, RefreshCw, Briefcase } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights';

interface BoardAdvisoryPageProps {
  onNavigate: (page: Page) => void;
}

const contributions = [
  {
    icon: Compass,
    title: "Strategy",
    description: "Supporting organizations in defining and executing growth strategies."
  },
  {
    icon: Shield,
    title: "Governance",
    description: "Strengthening oversight, accountability, and organizational effectiveness."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Identifying opportunities and unlocking sustainable expansion."
  },
  {
    icon: RefreshCw,
    title: "Transformation",
    description: "Supporting organizations through change and performance improvement."
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    description: "Bringing practical experience in business creation and development."
  },
];

const boardInterests = [
  "Corporate Boards",
  "Advisory Boards",
  "Growth-Oriented Organizations",
  "Development Institutions",
  "Social Impact Enterprises",
  "Family Businesses"
];

export default function BoardAdvisoryPage({ onNavigate }: BoardAdvisoryPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Board advisory background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              {t("board.label")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Board &amp; Advisory</h1>
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
                  Board & Advisory
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Christiana brings a unique blend of entrepreneurial experience, executive leadership, operational insight, and growth strategy to board and advisory roles.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Her experience across multiple industries enables her to contribute strategic perspectives that support sustainable growth, governance, organizational effectiveness, and long-term value creation.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 max-w-sm">
                <p className="text-[#C8A14A] uppercase tracking-[0.18em] text-xs font-semibold mb-4">
                  Overview
                </p>
                <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Entrepreneurial experience meets corporate governance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Multi-industry strategic perspective
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Commitment to sustainable value creation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              {t("board.areas")}
            </p>
              <h2 className="text-4xl font-serif text-[#0B1F3A] mb-8">
                Areas of Contribution
              </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {contributions.map((item, index) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F6F7] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#C8A14A]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-[#C8A14A]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1F3A] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Board Interests Section */}
      <section className="py-16 lg:py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
                <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
                  Board Interests
                </p>
            <h2 className="text-4xl font-serif text-white mb-6">
              {t("board.interests")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardInterests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A14A] flex-shrink-0 mt-2" />
                <p className="text-white/80 text-lg">
                  {interest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#0B1F3A] relative overflow-hidden border-t border-[#C8A14A]/10">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781390223/bacck_jtcnfj.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
          <div className="absolute inset-0 bg-[#0B1F3A]/80" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:64px_64px]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
                <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
                  Let's Connect
                </p>
                <h2 className="text-4xl font-serif text-white mb-6">
                  {t("board.inquiry")}
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Christiana is available for board appointments, speaking engagements, and strategic advisory opportunities.
                </p>
            <motion.button
              onClick={() => onNavigate("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C8A14A] text-[#0B1F3A] px-8 py-4 rounded-lg font-semibold hover:bg-[#b8923f] transition-all inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
