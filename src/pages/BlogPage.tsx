import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, ArrowRight, Search, Tag } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

const categories = ["All", "Leadership", "Business Growth", "Governance", "Transformation", "Entrepreneurship", "Industrial Development"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Industrial Growth in Africa",
    excerpt: "Africa's industrial landscape is evolving rapidly. Organizations that embrace innovation, operational excellence, and strategic leadership will be best positioned to capture emerging opportunities.",
    category: "Industrial Development",
    date: "June 2026",
    readTime: "5 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781135908/glittering-glass-aluminium-cladded-skyscrapers-monsoon-mumbais-lower-parel-worli-areas_t8cxhi.jpg",
  },
  {
    id: 2,
    title: "Building Organizations That Last: Lessons from Two Decades of Leadership",
    excerpt: "Sustainable organizations are built on clear vision, strong governance, and the ability to adapt. Here are the principles that have guided my leadership journey.",
    category: "Leadership",
    date: "May 2026",
    readTime: "7 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144204/page-hero-section_rzmwvp.png",
  },
  {
    id: 3,
    title: "From Entrepreneur to Executive: Navigating the Transition",
    excerpt: "The shift from entrepreneurial leadership to executive management requires a different mindset, skill set, and approach to organizational effectiveness.",
    category: "Entrepreneurship",
    date: "April 2026",
    readTime: "6 min read",
    featured: false,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png",
  },
  {
    id: 4,
    title: "Governance as a Growth Driver",
    excerpt: "Strong governance is not just about compliance—it is a strategic enabler that drives accountability, performance, and sustainable value creation.",
    category: "Governance",
    date: "March 2026",
    readTime: "5 min read",
    featured: false,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781390223/bacck_jtcnfj.png",
  },
  {
    id: 5,
    title: "Transforming Operations: A Practical Framework",
    excerpt: "Organizational transformation succeeds when it combines strategic vision with operational discipline. A framework for driving measurable improvement.",
    category: "Transformation",
    date: "February 2026",
    readTime: "8 min read",
    featured: false,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777773928/backkk_mbfzyh.jpg",
  },
  {
    id: 6,
    title: "Women in Leadership: Breaking Barriers in African Business",
    excerpt: "The path to executive leadership for women in Africa involves navigating unique challenges while creating opportunities for the next generation of leaders.",
    category: "Leadership",
    date: "January 2026",
    readTime: "6 min read",
    featured: false,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144506/cvv_ttaqk3.png",
  },
];

export default function BlogPage({ onNavigate: _onNavigate }: BlogPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Blog background"
            className="w-full h-full object-cover"
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
                Thought Leadership
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Blog
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Perspectives on leadership, transformation, and African enterprise.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Filter & Search */}
      <section ref={ref} className="py-12 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-[#0B1F3A] placeholder:text-gray-400 focus:outline-none focus:border-[#C8A14A] transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
                Featured
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-[#F8F8F8] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#C8A14A]/30 cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#C8A14A] text-[#0B1F3A] text-xs font-semibold rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#0B1F3A] mb-4 group-hover:text-[#C8A14A] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <span className="inline-flex items-center gap-2 text-[#0B1F3A] font-semibold text-sm group-hover:text-[#C8A14A] transition-colors">
                        Read Article
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
              Latest Thinking
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-[#F8F8F8] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-[#C8A14A]/30 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0B1F3A] text-xs font-medium rounded-full">
                        <Tag size={10} />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-serif text-[#0B1F3A] mb-3 group-hover:text-[#C8A14A] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-[#C8A14A] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Subscribe to Insights
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-white/50 mb-8">
              Receive thought leadership on business transformation, governance, and African enterprise directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#C8A14A] transition-colors text-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-xl hover:bg-[#d4ad5a] transition-colors text-sm"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
