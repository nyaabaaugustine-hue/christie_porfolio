import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
}

interface InsightDetailPageProps {
  article: Article;
  onBack: () => void;
}

export default function InsightDetailPage({ article, onBack }: InsightDetailPageProps) {
  const isQuote = (text: string) => {
    const trimmed = text.trim();
    return trimmed.startsWith("\u201C") || trimmed.startsWith("\u2018");
  };

  const isList = (text: string) => {
    return /^\d+\.\s/.test(text.trim());
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[440px] lg:h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-[#0B1F3A]/40" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
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
                Back to Insights
              </button>
              <div className="mb-4">
                <span className="px-3.5 py-1.5 bg-[#C8A14A] text-[#0B1F3A] text-[11px] font-semibold rounded-full uppercase tracking-widest">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-[2.75rem] font-serif text-white leading-[1.1] tracking-tight max-w-3xl">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 mt-5 text-white/40 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {article.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-white">
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
            {article.content.map((paragraph, i) => {
              if (isQuote(paragraph)) {
                return (
                  <blockquote
                    key={i}
                    className="border-l-[3px] border-[#C8A14A] pl-6 my-10 text-xl lg:text-2xl text-[#0B1F3A]/75 font-serif italic leading-relaxed"
                  >
                    {paragraph}
                  </blockquote>
                );
              }
              if (isList(paragraph)) {
                return (
                  <p
                    key={i}
                    className="text-gray-700 leading-[1.9] mb-5 text-base lg:text-[1.1rem]"
                  >
                    {paragraph}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="text-gray-700 leading-[1.9] mb-6 text-base lg:text-[1.1rem]"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {paragraph}
                </p>
              );
            })}
          </motion.article>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-between"
          >
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0B1F3A] transition-colors font-medium"
            >
              <ArrowLeft size={14} />
              Back to all articles
            </button>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="tracking-wider uppercase">Share</span>
              <button
                onClick={() => {
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
                }}
                className="text-[#0B1F3A] hover:text-[#C8A14A] transition-colors font-medium text-sm"
              >
                LinkedIn
              </button>
              <button
                onClick={() => {
                  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`, '_blank');
                }}
                className="text-[#0B1F3A] hover:text-[#C8A14A] transition-colors font-medium text-sm"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
