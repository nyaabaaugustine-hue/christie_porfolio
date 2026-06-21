import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface BlogPostPageProps {
  postId: number;
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export default function BlogPostPage({ postId, onBack, onNavigate: _onNavigate }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === postId);
  const relatedPosts = blogPosts.filter((p) => p.id !== postId);

  if (!post) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-[#F5F6F7] dark:bg-[#0B1F3A]">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-[#0B1F3A] dark:text-white mb-4">Article not found</h1>
          <button onClick={onBack} className="text-[#C8A14A] hover:underline">Back to Blog</button>
        </div>
      </main>
    );
  }

  const isQuote = (text: string) => {
    const trimmed = text.trim();
    return trimmed.startsWith("\u201C") || trimmed.startsWith("\u2018");
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[440px] lg:h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-[#0B1F3A]/40" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-14 lg:pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-white/50 hover:text-[#C8A14A] transition-colors mb-6 text-sm tracking-wide"
              >
                <ArrowLeft size={15} />
                Back to Blog
              </button>
              <div className="mb-4">
                <span className="px-3.5 py-1.5 bg-[#C8A14A] text-[#0B1F3A] text-[11px] font-semibold rounded-full uppercase tracking-widest">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-[2.75rem] font-serif text-white leading-[1.1] tracking-tight max-w-3xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-5 text-white/40 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#0B1F3A]">
        <div className="max-w-[680px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] w-16 bg-[#C8A14A] mb-10 origin-left"
          />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {post.content.map((paragraph, i) => {
              if (isQuote(paragraph)) {
                return (
                  <blockquote
                    key={i}
                    className="border-l-[3px] border-[#C8A14A] pl-6 my-10 text-xl lg:text-2xl text-[#0B1F3A]/75 dark:text-white/70 font-serif italic leading-relaxed"
                  >
                    {paragraph}
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="text-gray-700 dark:text-white/70 leading-[1.9] mb-6 text-base lg:text-[1.1rem]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {paragraph}
                </p>
              );
            })}
          </motion.article>

          {/* Image Gallery */}
          {post.images && post.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 grid grid-cols-2 gap-4"
            >
              {post.images.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-[#F8F8F8] dark:bg-[#061228]">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-48 lg:h-60 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-10 border-t border-gray-100 dark:border-white/10 flex items-center justify-between"
          >
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-white/30 hover:text-[#0B1F3A] dark:hover:text-white transition-colors font-medium"
            >
              <ArrowLeft size={14} />
              Back to all articles
            </button>
            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/30">
              <span className="tracking-wider uppercase">Share</span>
              <button
                onClick={() => {
                  const url = window.location.href;
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                }}
                className="text-[#0B1F3A] dark:text-white hover:text-[#C8A14A] transition-colors font-medium text-sm"
              >
                LinkedIn
              </button>
              <button
                onClick={() => {
                  const url = window.location.href;
                  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`, '_blank');
                }}
                className="text-[#0B1F3A] dark:text-white hover:text-[#C8A14A] transition-colors font-medium text-sm"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F5F6F7] dark:bg-[#061228]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="mb-10">
              <p className="text-[#C8A14A] text-xs tracking-[0.25em] uppercase font-medium">
                More from the blog
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {relatedPosts.map((related, i) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onBack()}
                  className="group bg-white dark:bg-[#0B1F3A] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgba(11,31,58,0.12)] border border-gray-100 dark:border-white/5 hover:border-[#C8A14A]/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-serif text-[#0B1F3A] dark:text-white mb-2 group-hover:text-[#C8A14A] transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-400 dark:text-white/30 text-xs mt-3">
                      <span>{related.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {related.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
