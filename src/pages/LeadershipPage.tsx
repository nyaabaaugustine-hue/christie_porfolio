import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights';

interface LeadershipPageProps {
  onNavigate: (page: Page) => void;
}

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
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Leadership background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              Leadership Portfolio
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Leadership</h1>
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
                  Leadership
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Throughout her career, Christiana has led organizations through periods of growth, change, and transformation.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Her leadership experience spans private enterprise, entrepreneurship, strategic projects, and executive management across multiple industries.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 max-w-sm">
                <p className="text-[#C8A14A] uppercase tracking-[0.18em] text-xs font-semibold mb-4">
                  Leadership Themes
                </p>
                <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
                  <li>
                    <span className="text-white font-medium block mb-1">Executive Leadership</span>
                    <span className="text-white/50">Providing strategic direction and organizational leadership.</span>
                  </li>
                  <li>
                    <span className="text-white font-medium block mb-1">Growth Strategy</span>
                    <span className="text-white/50">Creating pathways for sustainable business expansion.</span>
                  </li>
                  <li>
                    <span className="text-white font-medium block mb-1">Transformation</span>
                    <span className="text-white/50">Driving organizational improvement and performance enhancement.</span>
                  </li>
                  <li>
                    <span className="text-white font-medium block mb-1">Entrepreneurship</span>
                    <span className="text-white/50">Building ventures and creating opportunities.</span>
                  </li>
                  <li>
                    <span className="text-white font-medium block mb-1">Governance</span>
                    <span className="text-white/50">Strengthening accountability and long-term value creation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#F5F6F7] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 overflow-hidden bg-white flex items-center justify-center p-8">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
                    {company.name}
                  </h3>
                  <span className="inline-block px-4 py-1 bg-[#C8A14A]/10 text-[#C8A14A] text-sm font-medium rounded-full">
                    {company.sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Interested in board opportunities, speaking engagements, strategic conversations, or executive leadership collaborations?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}