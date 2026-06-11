import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ArrowRight } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact';

interface FeaturedPortfolioProps {
  onNavigate: (page: Page) => void;
}

const portfolioCompanies = [
  {
    name: "McDan Group",
    role: "Group COO",
    sector: "Industrial & Logistics",
    description: "Leading multi-business operations across logistics, manufacturing, and industrial services.",
    impact: "Operational excellence across 5 business units",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134493/MACDAN_zjki8k.jpg",
  },
  {
    name: "Eagle Salt",
    role: "Executive Director",
    sector: "Manufacturing",
    description: "Scaling salt production and distribution operations for regional market expansion.",
    impact: "300% production capacity increase",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134079/EAGLE-LOGO_ylwlgk.jpg",
  },
  {
    name: "Moonlight Shipping",
    role: "Strategic Advisor",
    sector: "Logistics & Maritime",
    description: "Strategic guidance for maritime logistics and shipping operations.",
    impact: "Fleet optimization and route efficiency",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119515/Moonlight-logo_feemhr.jpg",
  },
  {
    name: "SMIC360",
    role: "Board Advisor",
    sector: "Industrial Services",
    description: "Governance and strategic direction for industrial maintenance services.",
    impact: "Market expansion across West Africa",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119515/SMIC360-LOGO_ebuzdi.jpg",
  },
  {
    name: "Phoenix Enclave",
    role: "Development Lead",
    sector: "Real Estate",
    description: "Mixed-use real estate development and property management.",
    impact: "Premium development portfolio",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134364/PHOENIX-LOGO_xhbqul.jpg",
  },
  {
    name: "Osabusquare",
    role: "Transformation Lead",
    sector: "Trade & Distribution",
    description: "Business turnaround and operational restructuring for distribution operations.",
    impact: "Successful turnaround completion",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781134180/Osabusquare-LOGO_ke7n5x.jpg",
  },
];

export default function FeaturedPortfolio({ onNavigate }: FeaturedPortfolioProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Leadership Portfolio
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Organizations of Impact
            </h2>
          </div>
          <motion.button
            onClick={() => onNavigate('leadership')}
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-[#0B1F3A] font-medium hover:text-[#C8A14A] transition-colors"
            whileHover={{ x: 5 }}
          >
            View Full Portfolio
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-36 sm:h-48 overflow-hidden bg-[#F5F6F7] flex items-center justify-center p-8">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#C8A14A] text-[#0B1F3A] text-xs font-semibold rounded-full">
                    {company.sector}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1F3A] mb-1">{company.name}</h3>
                <p className="text-[#C8A14A] text-sm font-medium mb-3">{company.role}</p>
                <p className="text-gray-600 text-sm mb-4">{company.description}</p>
                <div className="flex items-center gap-2 text-[#0B1F3A] text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {company.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}