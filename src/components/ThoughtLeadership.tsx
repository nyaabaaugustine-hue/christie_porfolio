import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Leadership",
    title: "Leading Through Transformation: Lessons from the Front Lines",
    excerpt: "Key insights from leading organizational change across diverse industries and cultures.",
    readTime: "8 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144204/page-hero-section_rzmwvp.png",
    date: "March 2024",
  },
  {
    category: "Governance",
    title: "Board Effectiveness in Emerging Markets",
    excerpt: "How boards can drive value creation in rapidly evolving African markets.",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781135908/glittering-glass-aluminium-cladded-skyscrapers-monsoon-mumbais-lower-parel-worli-areas_t8cxhi.jpg",
    date: "February 2024",
  },
  {
    category: "Business Growth",
    title: "Scaling Operations: From Startup to Enterprise",
    excerpt: "The operational challenges and solutions in scaling businesses across Africa.",
    readTime: "10 min read",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119516/2_f2c4wp.jpg",
    date: "January 2024",
  },
];

export default function ThoughtLeadership() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
          alt=""
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#C8A14A]/40 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-[#C8A14A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20"
        >
          <div>
            <span className="inline-block px-4 py-1.5 border border-[#C8A14A]/30 text-[#C8A14A] text-xs tracking-widest uppercase mb-6 font-medium rounded-full">
              Thought Leadership
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-[#0B1F3A] tracking-tight">
              Executive Insights
            </h2>
            <div className="w-12 h-[1px] bg-[#C8A14A]/50 mt-6" />
          </div>
          <motion.button
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-[#0B1F3A] font-medium hover:text-[#C8A14A] transition-colors group"
            whileHover={{ x: 5 }}
          >
            View All Articles
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-[#F5F6F7]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#0B1F3A] text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-serif text-[#0B1F3A] mb-2 leading-snug group-hover:text-[#C8A14A] transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{article.excerpt}</p>

              <div className="mt-4 flex items-center gap-2 text-[#C8A14A] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span>Read Article</span>
                <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
