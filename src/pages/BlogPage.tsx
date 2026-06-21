import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
  onViewPost: (id: number) => void;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function BlogPage({ onNavigate: _onNavigate, onViewPost }: BlogPageProps) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[420px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/85 via-[#0B1F3A]/65 to-[#0B1F3A]/90" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.05)_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-[#C8A14A]" />
              <p className="text-[#C8A14A] text-xs tracking-[0.25em] uppercase font-medium">
                Thought Leadership
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05]">
              Blog
            </h1>
            <p className="text-white/50 text-base lg:text-lg mt-5 max-w-xl leading-relaxed">
              Perspectives on leadership, transformation, and the journey that shapes us.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F6F7] dark:from-[#061228] to-transparent" />
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24 bg-[#F5F6F7] dark:bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-2 gap-8 lg:gap-10"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                onClick={() => onViewPost(post.id)}
                className="group bg-white dark:bg-[#061228] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgba(11,31,58,0.15)] border border-gray-100 dark:border-white/5 hover:border-[#C8A14A]/20"
              >
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 bg-[#C8A14A] text-[#0B1F3A] text-[11px] font-semibold rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-4 text-gray-400 dark:text-white/30 text-xs">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif text-[#0B1F3A] dark:text-white mb-4 group-hover:text-[#C8A14A] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-white/50 leading-relaxed mb-6 line-clamp-3 text-[0.95rem]">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white font-semibold text-sm group-hover:text-[#C8A14A] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#C8A14A] text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Subscribe to Insights
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4 leading-tight">
              Stay Informed
            </h2>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed max-w-lg mx-auto mb-8">
              Receive thought leadership on business transformation, governance, and African enterprise directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#C8A14A] transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-xl text-sm hover:bg-[#d4ad5a] transition-colors"
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
