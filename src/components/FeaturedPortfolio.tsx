import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % portfolioCompanies.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + portfolioCompanies.length) % portfolioCompanies.length);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [isInView, goNext]);

  const company = portfolioCompanies[currentIndex];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
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
            View Profile
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-[45%] h-56 md:h-auto overflow-hidden bg-[#F5F6F7]">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-contain p-8 md:p-12"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C8A14A] text-[#0B1F3A] text-xs font-semibold rounded-full">
                      {company.sector}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                  <span className="text-[#C8A14A] text-sm font-medium mb-1">{company.role}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0B1F3A] mb-4">{company.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">{company.description}</p>
                  <div className="flex items-center gap-2 text-[#0B1F3A] font-medium">
                    <span className="w-2 h-2 bg-[#C8A14A] rounded-full" />
                    <span className="text-sm">{company.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {portfolioCompanies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentIndex ? "w-6 bg-[#C8A14A]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#C8A14A] hover:border-[#C8A14A] transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={goNext}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#C8A14A] hover:border-[#C8A14A] transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}