import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Building2 } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact';

interface LeadershipPageProps {
  onNavigate: (page: Page) => void;
}

const portfolioCompanies = [
  {
    name: "McDan Group",
    role: "Group COO",
    sector: "Industrial & Logistics",
    period: "2020 - Present",
    overview: "Multi-business conglomerate spanning logistics, manufacturing, and industrial services across West Africa.",
    challenge: "Fragmented operations across multiple business units with inconsistent performance and limited synergies.",
    actions: [
      "Implemented group-wide operational excellence framework",
      "Established shared services for finance, HR, and procurement",
      "Launched performance management system across all units",
      "Led strategic acquisition integration program",
    ],
    outcomes: [
      "40% improvement in operational efficiency",
      "Successful integration of 3 acquired businesses",
      "Revenue growth of 150% across portfolio",
      "Established regional expansion framework",
    ],
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134493/MACDAN_zjki8k.jpg",
  },
  {
    name: "Eagle Salt",
    role: "Executive Director",
    sector: "Manufacturing",
    period: "2018 - Present",
    overview: "Leading salt production and distribution company serving West African markets.",
    challenge: "Production capacity constraints limiting ability to meet growing regional demand.",
    actions: [
      "Led capacity expansion investment program",
      "Modernized production facilities and processes",
      "Developed regional distribution network",
      "Implemented quality management systems",
    ],
    outcomes: [
      "300% production capacity increase",
      "Market leadership in Ghana",
      "Export expansion to 4 neighboring countries",
      "ISO certification achieved",
    ],
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134079/EAGLE-LOGO_ylwlgk.jpg",
  },
  {
    name: "Moonlight Shipping",
    role: "Strategic Advisor",
    sector: "Logistics & Maritime",
    period: "2019 - Present",
    overview: "Maritime logistics company providing shipping and freight services across West Africa.",
    challenge: "Operational inefficiencies and competitive pressure affecting profitability.",
    actions: [
      "Developed strategic repositioning plan",
      "Optimized fleet operations and routes",
      "Enhanced customer service capabilities",
      "Led digital transformation initiative",
    ],
    outcomes: [
      "25% reduction in operational costs",
      "Improved customer satisfaction scores",
      "New market entry into Nigeria",
      "Digital platform launch",
    ],
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119515/Moonlight-logo_feemhr.jpg",
  },
  {
    name: "SMIC360",
    role: "Board Advisor",
    sector: "Industrial Services",
    period: "2021 - Present",
    overview: "Industrial maintenance and services company serving manufacturing and mining sectors.",
    challenge: "Limited market presence and operational scalability constraints.",
    actions: [
      "Provided governance and strategic direction",
      "Supported market expansion strategy",
      "Advised on operational improvements",
      "Guided organizational development",
    ],
    outcomes: [
      "Market expansion across West Africa",
      "Operational capability enhancement",
      "Strategic partnership development",
      "Revenue growth of 80%",
    ],
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119515/SMIC360-LOGO_ebuzdi.jpg",
  },
  {
    name: "Phoenix Enclave",
    role: "Development Lead",
    sector: "Real Estate",
    period: "2019 - 2022",
    overview: "Mixed-use real estate development project in prime location.",
    challenge: "Complex development requiring coordination of multiple stakeholders and contractors.",
    actions: [
      "Led project management and coordination",
      "Managed stakeholder relationships",
      "Oversaw construction quality and timeline",
      "Coordinated sales and marketing strategy",
    ],
    outcomes: [
      "On-time project delivery",
      "Premium positioning achieved",
      "Strong sales performance",
      "Quality standards maintained",
    ],
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134364/PHOENIX-LOGO_xhbqul.jpg",
  },
  {
    name: "Osabusquare",
    role: "Transformation Lead",
    sector: "Trade & Distribution",
    period: "2018 - 2020",
    overview: "Distribution and trading company serving retail and institutional customers.",
    challenge: "Declining performance and market position erosion requiring turnaround intervention.",
    actions: [
      "Conducted comprehensive business review",
      "Developed and executed turnaround strategy",
      "Restructured operations and workforce",
      "Revitalized customer relationships",
    ],
    outcomes: [
      "Successful business turnaround",
      "Restored profitability",
      "Market share recovery",
      "Positioned for sustainable growth",
    ],
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134180/Osabusquare-LOGO_ke7n5x.jpg",
  },
];

export default function LeadershipPage({ onNavigate }: LeadershipPageProps) {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 xl:py-24 bg-[#0B1F3A]">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777771617/5_ftohta.png"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Leadership Portfolio
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Organizations of Impact
            </h1>
            <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
              A track record of transformative leadership across diverse industries, 
              delivering sustainable value and organizational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="bg-[#F5F6F7] rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                      <div className="relative h-48 lg:h-auto overflow-hidden bg-[#F5F6F7] flex items-center justify-center p-8 lg:p-12">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-[#C8A14A] text-[#0B1F3A] text-sm font-semibold rounded-full">
                          {company.sector}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-1">
                            {company.name}
                          </h3>
                          <p className="text-[#C8A14A] font-medium">{company.role}</p>
                        </div>
                        <span className="text-sm text-gray-500">{company.period}</span>
                      </div>

                      <p className="text-gray-600 mb-6">{company.overview}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 size={18} className="text-[#C8A14A]" />
                            <h4 className="font-semibold text-[#0B1F3A]">Challenge</h4>
                          </div>
                          <p className="text-gray-600 text-sm">{company.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp size={18} className="text-[#C8A14A]" />
                            <h4 className="font-semibold text-[#0B1F3A]">Key Outcomes</h4>
                          </div>
                          <ul className="space-y-1">
                            {company.outcomes.slice(0, 3).map((outcome, i) => (
                              <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#C8A14A] rounded-full mt-2" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
              Interested in Collaboration?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              I welcome opportunities to contribute to boards, advisory roles, 
              and strategic partnerships.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}