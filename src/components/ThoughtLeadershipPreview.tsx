import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Leading Through Uncertainty: Lessons from African Business",
    excerpt: "How executives can navigate complexity and drive transformation in rapidly changing markets.",
    category: "Leadership",
    readTime: "8 min read",
  },
  {
    title: "The Future of Industrial Operations in Africa",
    excerpt: "Examining the trends shaping manufacturing and industrial development across the continent.",
    category: "Industrial Development",
    readTime: "6 min read",
  },
  {
    title: "Board Governance: Building Effective Boards",
    excerpt: "Key principles for creating boards that drive value and ensure organizational sustainability.",
    category: "Governance",
    readTime: "5 min read",
  },
];

type Page = "home" | "about" | "leadership" | "transformation" | "industries" | "board" | "speaking" | "contact" | "insights";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function ThoughtLeadershipPreview({ onNavigate }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Thought Leadership
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] leading-tight">
              Insights & Perspectives
            </h2>
          </div>
          <button
            onClick={() => onNavigate("insights")}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#0B1F3A] font-medium hover:text-[#C8A14A] transition-colors text-sm group"
          >
            View All Insights
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onNavigate("insights")}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-[#0B1F3A]/5 rounded-full text-xs text-[#C8A14A] font-medium">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#0B1F3A] mb-3 group-hover:text-[#C8A14A] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Clock size={12} />
                {article.readTime}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
