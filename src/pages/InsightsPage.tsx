import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Calendar, ArrowRight, Tag } from "lucide-react";

const categories = ["All Articles", "Leadership", "Growth Strategy", "Governance", "Executive Notes", "Perspective"];

const articles = [
  {
    title: "Leading Through Uncertainty: Lessons from African Business",
    excerpt: "How executives can navigate complexity and drive transformation in rapidly changing markets.",
    category: "Leadership",
    date: "December 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "The Future of Industrial Operations in Africa",
    excerpt: "Examining the trends shaping manufacturing and industrial development across the continent.",
    category: "Perspective",
    date: "November 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    title: "Board Governance: Building Effective Boards",
    excerpt: "Key principles for creating boards that drive value and ensure organizational sustainability.",
    category: "Governance",
    date: "October 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "From Strategy to Execution: Bridging the Gap",
    excerpt: "Practical approaches for turning strategic plans into operational reality.",
    category: "Executive Notes",
    date: "September 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Women in Leadership: Breaking Barriers",
    excerpt: "Navigating the path to executive leadership as a woman in African business.",
    category: "Leadership",
    date: "August 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Building Sustainable Supply Chains",
    excerpt: "Creating resilient and efficient supply networks for African enterprises.",
    category: "Growth Strategy",
    date: "July 2024",
    readTime: "5 min read",
    featured: false,
  },
];

export default function InsightsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All Articles" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Insights background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              Thought Leadership
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Insights</h1>
            <div className="w-24 h-px bg-[#C8A14A]/70 mt-4" />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#0B1F3A] text-white shadow-md"
                    : "bg-[#F5F6F7] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-md mx-auto mt-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F5F6F7] rounded-full text-sm text-[#0B1F3A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8A14A]/30 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "All Articles" && featuredArticles.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
                Featured
              </p>
              <h2 className="text-3xl font-serif text-[#0B1F3A]">Latest Thinking</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-[#F5F6F7] rounded-2xl p-6 lg:p-8 h-full hover:bg-[#0B1F3A] transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#C8A14A]/10 rounded-full text-[#C8A14A] text-xs font-medium group-hover:bg-[#C8A14A] group-hover:text-[#0B1F3A] transition-colors">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm group-hover:text-white/60 transition-colors">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3 group-hover:text-white transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-white/70 transition-colors">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm group-hover:text-white/60 transition-colors">
                        {article.date}
                      </span>
                      <span className="text-[#C8A14A] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section ref={ref} className="py-16 lg:py-20 bg-[#F5F6F7] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781390223/bacck_jtcnfj.png"
            alt="Insights background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
          <div className="absolute inset-0 bg-[#F5F6F7]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-serif text-[#0B1F3A] text-center">
              {activeCategory === "All Articles" ? "All Articles" : activeCategory}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-[#C8A14A]" />
                    <span className="text-[#C8A14A] text-xs font-medium">{article.category}</span>
                  </div>
                  <h3 className="font-semibold text-[#0B1F3A] mb-2 group-hover:text-[#C8A14A] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
              Subscribe to Executive Insights
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Receive thought leadership on business transformation, governance, and African enterprise directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#C8A14A] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
