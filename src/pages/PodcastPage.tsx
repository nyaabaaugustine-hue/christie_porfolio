import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Clock, Headphones, ExternalLink } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface PodcastPageProps {
  onNavigate: (page: Page) => void;
}

const episodes = [
  {
    id: 1,
    title: "Leading Through Transformation: A Practical Framework",
    description: "How to guide organizations through complex change while maintaining performance and team morale.",
    date: "June 2026",
    duration: "32 min",
    episode: "Ep. 12",
    featured: true,
  },
  {
    id: 2,
    title: "The Entrepreneurial Mindset in Corporate Leadership",
    description: "Why entrepreneurial thinking is essential for executive leaders navigating modern business challenges.",
    date: "May 2026",
    duration: "28 min",
    episode: "Ep. 11",
    featured: false,
  },
  {
    id: 3,
    title: "Governance That Drives Growth",
    description: "Building governance structures that enable rather than restrict organizational growth and innovation.",
    date: "April 2026",
    duration: "35 min",
    episode: "Ep. 10",
    featured: false,
  },
  {
    id: 4,
    title: "Women in Industrial Leadership",
    description: "Breaking barriers and creating pathways for women in Africa's industrial and corporate landscape.",
    date: "March 2026",
    duration: "41 min",
    episode: "Ep. 9",
    featured: false,
  },
  {
    id: 5,
    title: "Building Sustainable Enterprises in Africa",
    description: "Strategies for creating businesses that deliver long-term value across the continent.",
    date: "February 2026",
    duration: "30 min",
    episode: "Ep. 8",
    featured: false,
  },
  {
    id: 6,
    title: "From Startup to Scale-Up: Lessons Learned",
    description: "Key insights from building and scaling businesses across multiple industries.",
    date: "January 2026",
    duration: "26 min",
    episode: "Ep. 7",
    featured: false,
  },
];

const subscribeLinks = [
  { name: "Apple Podcasts", url: "#" },
  { name: "Spotify", url: "#" },
  { name: "Google Podcasts", url: "#" },
  { name: "RSS Feed", url: "#" },
];

export default function PodcastPage({ onNavigate: _onNavigate }: PodcastPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredEpisode = episodes.find((e) => e.featured);
  const regularEpisodes = episodes.filter((e) => !e.featured);

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
            alt="Podcast background"
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
                Podcast
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-white tracking-tight leading-tight">
              The Leadership
              <br />
              <span className="text-[#C8A14A]">Conversation</span>
            </h1>
            <p className="text-white/50 text-lg mt-6 max-w-xl">
              Insights on leadership, transformation, and building sustainable enterprises across Africa.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F6F7] to-transparent" />
      </section>

      {/* Featured Episode */}
      {featuredEpisode && (
        <section ref={ref} className="py-16 lg:py-20 bg-[#F5F6F7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
                Latest Episode
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0B1F3A] rounded-2xl p-8 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
              <div className="relative flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <motion.button
                    onClick={() => setPlayingId(playingId === featuredEpisode.id ? null : featuredEpisode.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-[#C8A14A] flex items-center justify-center shadow-lg shadow-[#C8A14A]/30"
                  >
                    {playingId === featuredEpisode.id ? (
                      <Pause size={32} className="text-[#0B1F3A] ml-0" />
                    ) : (
                      <Play size={32} className="text-[#0B1F3A] ml-1" />
                    )}
                  </motion.button>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#C8A14A]/20 text-[#C8A14A] text-xs font-semibold rounded-full">
                      {featuredEpisode.episode}
                    </span>
                    <span className="text-white/40 text-sm flex items-center gap-1">
                      <Clock size={12} />
                      {featuredEpisode.duration}
                    </span>
                    <span className="text-white/40 text-sm">{featuredEpisode.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif text-white mb-4">
                    {featuredEpisode.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed max-w-2xl">
                    {featuredEpisode.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Episodes */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
              All Episodes
            </p>
          </motion.div>

          <div className="space-y-4">
            {regularEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-[#F8F8F8] rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#C8A14A]/30"
              >
                <div className="flex items-start gap-5">
                  <motion.button
                    onClick={() => setPlayingId(playingId === episode.id ? null : episode.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-[#0B1F3A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A14A] transition-colors"
                  >
                    {playingId === episode.id ? (
                      <Pause size={20} className="text-white group-hover:text-[#0B1F3A]" />
                    ) : (
                      <Play size={20} className="text-white group-hover:text-[#0B1F3A] ml-0.5" />
                    )}
                  </motion.button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#C8A14A] text-xs font-semibold">{episode.episode}</span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={10} />
                        {episode.duration}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{episode.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B1F3A] group-hover:text-[#C8A14A] transition-colors mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {episode.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe + Newsletter */}
      <section className="py-16 lg:py-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Subscribe Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-[#C8A14A]" size={24} />
                <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase font-medium">
                  Subscribe
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
                Listen Everywhere
              </h2>
              <p className="text-white/50 mb-8">
                Follow the podcast on your favorite platform and never miss an episode.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {subscribeLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#C8A14A]/30 transition-all group"
                  >
                    <span className="text-white/80 text-sm font-medium group-hover:text-[#C8A14A] transition-colors">{link.name}</span>
                    <ExternalLink size={14} className="text-white/30 group-hover:text-[#C8A14A] ml-auto" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                Stay Updated
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
                New Episode Alerts
              </h2>
              <p className="text-white/50 mb-8">
                Get notified when new episodes drop, plus exclusive insights and behind-the-scenes content.
              </p>
              {subscribed ? (
                <div className="bg-white/5 border border-[#C8A14A]/30 rounded-xl p-6 text-center">
                  <p className="text-[#C8A14A] font-medium">Thank you for subscribing!</p>
                  <p className="text-white/50 text-sm mt-1">You'll receive updates on new episodes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8A14A] transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-xl hover:bg-[#d4ad5a] transition-colors"
                  >
                    Subscribe to Podcast
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
