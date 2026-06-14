import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";
import { useState } from "react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface VideoLibraryPageProps {
  onNavigate: (page: Page) => void;
}

export default function VideoLibraryPage({ onNavigate }: VideoLibraryPageProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="Video library background"
            className="w-full h-full object-cover object-top"
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
                Video Library
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              Watch & Learn
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Keynotes, interviews, and insights from leadership engagements across Africa.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Coming Soon */}
      <section className="py-20 lg:py-32 bg-[#F5F6F7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-[#C8A14A]/10 flex items-center justify-center mx-auto mb-8">
              <Play className="text-[#C8A14A]" size={36} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6">
              Coming Soon
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              The video library is currently being curated. Expect keynotes, panel discussions, and interview highlights from Christiana's leadership engagements across Africa.
            </p>

            {/* Subscribe for updates */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Mail className="text-[#C8A14A]" size={20} />
                <p className="text-[#C8A14A] text-sm tracking-[0.15em] uppercase font-medium">
                  Get Notified
                </p>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Be the first to know when videos are published.
              </p>
              {subscribed ? (
                <div className="bg-[#C8A14A]/10 border border-[#C8A14A]/30 rounded-xl p-4 text-center">
                  <p className="text-[#0B1F3A] font-medium text-sm">Thank you! We'll notify you at launch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-[#F5F6F7] rounded-lg border border-transparent focus:border-[#C8A14A] focus:outline-none transition-colors text-sm"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#d4ad5a] transition-colors text-sm"
                  >
                    Notify Me
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              In the Meantime
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
              Explore Christiana's Thought Leadership
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
              Read published articles and insights while the video library is being prepared.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate("insights")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#d4ad5a] transition-colors"
              >
                Read Insights
              </motion.button>
              <motion.button
                onClick={() => onNavigate("speaking")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                View Speaking Topics
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
