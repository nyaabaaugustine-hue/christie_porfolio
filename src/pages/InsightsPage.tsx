import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Calendar, ArrowRight, Tag } from "lucide-react";

const categories = ["All Articles", "Leadership", "Growth Strategy", "Perspective"];

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

const articles: Article[] = [
  {
    title: "Nature\u2019s Majesty: Reflections from Canmore, Banff, and Lake Louise",
    excerpt: "A profound reminder of the beauty of creation and the greatness of God, experienced through the Canadian Rockies.",
    category: "Perspective",
    date: "June 2026",
    readTime: "5 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781992319/1781976650074_smvcst.jpg",
    content: [
      "Recently, I had the privilege of spending time in Canmore, Banff, and Lake Louise with my daughter and nephew. What was intended as a family outing became much more than a sightseeing trip. It became a profound reminder of the beauty of creation and the greatness of God.",
      "As we journeyed through the Canadian Rockies, I found myself continually in awe. The towering mountains stood like ancient monuments, their peaks reaching toward the heavens. The crystal-clear lakes reflected the surrounding landscape with such perfection that it often felt like looking into a painting rather than reality. Everywhere we turned, there was another breathtaking view that left us speechless.",
      "Standing atop Sulphur Mountain and gazing across the endless mountain ranges, I was reminded of how small we are in comparison to the vastness of God\u2019s creation. Human beings have accomplished remarkable things, yet no architect, engineer, or artist can truly replicate the grandeur of these landscapes. Nature displays a level of beauty, complexity, and power that points to a Creator far greater than ourselves.",
      "Lake Louise was particularly unforgettable. Its turquoise waters, framed by majestic mountains and glaciers, created a scene of remarkable serenity. In a world filled with noise, deadlines, and constant distractions, moments like these invite us to pause and appreciate the simple gift of being alive.",
      "What made the trip even more special was sharing it with my daughter and nephew. Watching them marvel at the scenery, take photographs, laugh, and explore reminded me that some of life\u2019s most valuable experiences are not material possessions but shared memories. Long after the trip is over, these moments will remain with us.",
      "Travel often broadens our perspective, but this journey did something deeper. It strengthened my appreciation for nature, renewed my sense of gratitude, and reinforced my faith. Every mountain, lake, forest, and valley seemed to tell the same story: that creation is magnificent, purposeful, and worthy of our stewardship and respect.",
      "As we left Banff and made our way home, I carried more than photographs and souvenirs. I carried a renewed sense of wonder. In a world that often moves too fast, nature has a way of slowing us down and reminding us of what truly matters.",
      "Canmore, Banff, and Lake Louise are undoubtedly among the most beautiful places I have ever visited. But beyond their scenic beauty, they offered a powerful lesson: when we take time to observe the wonders around us, we gain a deeper appreciation for life, for family, and for the greatness of God.",
      "For that, I am truly grateful."
    ]
  },
  {
    title: "The Fear of the Unknown Has Crippled Many Dreams",
    excerpt: "The inner journey\u2014overcoming hesitation and doubt.",
    category: "Growth Strategy",
    date: "June 2026",
    readTime: "4 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781991906/1765796132846_z7v45k.jpg",
    content: [
      "I woke up this morning with a simple but striking thought:\nThe fear of the unknown has crippled more dreams than failure ever did.",
      "So many people are sitting on powerful ideas, clear visions, and burning desires, but they never take the first step. Not because they can\u2019t, but because they are afraid of what they don\u2019t know.",
      "They stay in jobs that drain them, because at least the salary comes every month.",
      "They remain in relationships that no longer serve them, because at least they\u2019re not alone.",
      "\u201cThey hold on to titles, positions, and routines that look \u2018safe,\u2019 even when their souls whisper, you were meant for more.\u201d",
      "But here\u2019s the truth: nothing new ever feels safe.",
      "Growth never happens in the comfort zone. \u201cEvery bold step \u2014 whether to start a business, change careers, relocate, or walk away from what\u2019s familiar \u2014 comes wrapped in uncertainty.\u201d",
      "If you\u2019re waiting for fear to disappear before you move, you\u2019ll wait forever. Courage isn\u2019t the absence of fear; it\u2019s deciding that something else matters more, your purpose, your peace, your potential.",
      "\u201cThe unknown is not your enemy \u2014 it is simply the part of your story you haven\u2019t written yet.\u201d",
      "So today, I challenge you: Take the step. Make the call. Start the dream. Walk away if you must. Because the moment you move, clarity begins to unfold. Be bold enough to find out what\u2019s on the other side of your fear. You might just find yourself, and the life you were always meant to live.",
      "\u201cBut dealing with fear is only the beginning. The real breakthrough comes when we align who we are with where we want to go. And that\u2019s where the conversation about ambition and organizational culture begins.\u201d"
    ]
  },
  {
    title: "Understanding Alignment Between Organizational Culture and Personal Ambition",
    excerpt: "The purpose journey\u2014finding your place, voice, and path. How to know if an organization\u2019s culture aligns with who you are and what you aspire to achieve.",
    category: "Growth Strategy",
    date: "December 2025",
    readTime: "7 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1782012576/1766434170271_ypuqct.jpg",
    content: [
      "In recent times, the word alignment has gained significant attention in executive conversations. Beyond being a buzzword, alignment represents the delicate balance between an organization\u2019s culture and an individual\u2019s goals, ethics, and ambition. For professionals, the critical question becomes: How do you know if an organization\u2019s culture aligns with who you are and what you aspire to achieve?",
      "The answer begins with clarity. Professionals must have a well-defined sense of their own values, long-term goals, and ethical boundaries. Without this foundation, it becomes difficult to evaluate whether an environment supports or stifles growth.",
      "An organization\u2019s culture aligns with your ambitions when:",
      "Its stated values are not only written on the wall but actively practiced in decision-making and leadership behavior.",
      "The environment challenges you to grow without forcing you to compromise your ethics.",
      "Your contributions are valued and connected to the larger purpose of the company.",
      "There is room for innovation, accountability, and recognition in ways that match your career aspirations.",
      "But alignment is not always permanent. It can shift with changes in leadership, strategy, or external pressures. The point to draw the curtains is when the misalignment becomes consistent and non-negotiable\u2014when staying in the environment demands that you betray your personal values, limit your ambitions, or compromise your professional identity.",
      "It is okay to move on when the cost of staying outweighs the benefits of leaving. Choosing to step away is not a failure; it is a sign of clarity, maturity, and commitment to your personal mission.",
      "Ultimately, alignment is not about finding a perfect fit\u2014it is about finding an environment where your ethics are respected, your goals are nurtured, and your ambitions are given room to flourish.",
      "My journey this year\u2014across countries, mindsets, and ambitions\u2014has taught me one thing: growth is not accidental. It is intentional. In 2026, choose environments, relationships, and opportunities that align with your highest potential."
    ]
  },
  {
    title: "Leadership Is Not About Order. It\u2019s About Clarity Inside Disorder.",
    excerpt: "Most leaders are trained to build and operate within structured environments. But occasionally, leadership requires stepping into situations where none of those tools exist in a reliable form. That is where the real test begins.",
    category: "Leadership",
    date: "June 2026",
    readTime: "8 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1782012318/leadership_nrne6k.jpg",
    content: [
      "I haven\u2019t written in a while, not because I had nothing to say, but because I was in the middle of rebuilding something.",
      "There is a particular kind of tension that comes with stepping into an environment that lacks structure, especially when you are wired for order. You see gaps immediately. You see inefficiencies. You see what should exist. And the instinct is to fix everything quickly, decisively, completely.",
      "But leadership does not reward that instinct.",
      "When I stepped into my current role earlier this year, the mandate was clear: drive structure, improve performance, and bring alignment across moving parts. What was less obvious was the starting point.",
      "Different teams operating at different speeds. Varying levels of discipline. Unclear processes. And, beneath all of that, people trying to do their best within the systems they had. It wasn\u2019t just an operational challenge. It was a human one. And that realization changed the approach.",
      "The turning point was simple, but not easy: I stopped trying to fix everything at once. Instead, I focused on creating clarity\u2014not perfect systems, but clarity. Clarity in priorities. Clarity in expectations. Clarity in communication.",
      "Because in the absence of structure, clarity becomes the first form of leadership.",
      "A few lessons have stayed with me through this process:",
      "1. Structure is a luxury. Clarity is a discipline. You may not always inherit well-built systems. But you can always create clarity in conversations, in direction, and in what matters now.",
      "2. Transformation is emotional before it is operational. People don\u2019t resist systems. They resist uncertainty. Alignment begins with understanding, not authority.",
      "3. Incremental progress builds credibility. In complex environments, small wins are not small. They are signals. They stabilize teams and create momentum where none existed.",
      "4. Leadership is not control. It is coordination. You are not there to impose order instantly. You are there to align people, pace, and priorities over time.",
      "5. Fulfilment comes from contribution, not completion. There is no clean finish line in transformation work. The reward is in seeing progress take hold, even in small, quiet ways.",
      "Eight weeks in, the work is still ongoing. It is still imperfect. But something is shifting. There is more direction, more alignment, and more ownership. Clarity is beginning to take shape and people are responding to it.",
      "Leadership, I\u2019m reminded, is not about walking into order. It is about building it deliberately, patiently, and often without the comfort of certainty."
    ]
  },
  {
    title: "December Reflections: A Journey Through Travel, Fear, and Alignment.",
    excerpt: "A 3-part reflection series inspired by experiences, challenges, and lessons from 2025. Centered on journey, courage, and alignment.",
    category: "Perspective",
    date: "December 2025",
    readTime: "14 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1782012442/lnm_aygmdr.jpg",
    content: [
      "As we enter the final month of the year, I want to share a 3-part reflection series inspired by my experiences, challenges, and lessons from 2025. These three articles, centered on journey, courage, and alignment, invite you to look at where you\u2019ve been, what has been holding you back, and where you want to go next.",
      "A Journey Through Scandinavia: Four Cities, Three Countries, Fourteen Days",
      "Stepping from Ghana\u2019s warmth into the crisp Scandinavian winter is always a shift\u2014a change of pace, of energy, of rhythm. This trip took me through Stockholm, Oslo, Copenhagen, and Malm\u00f6, a triangle of cities that share simplicity, structure, and an unspoken calm. Two weeks, four cities, each one adding a different texture to the experience.",
      "No matter how seasoned you are, travel still has a way of humbling you. It strips away comfort and hands you responsibility. Suitcase in one hand, navigating trains and platforms in the other, you quickly realize: abroad, you are your own backup plan.",
      "There\u2019s no culture on standby; efficiency rules the day. People mind their space, systems work as they should, and you must rise to the pace. It\u2019s not unkind, just different. And in its own way, empowering.",
      "Travel reminds you that independence isn\u2019t just a mindset; it\u2019s a practice.",
      "One thing hasn\u2019t changed in all my travels: the energy you bring shapes the experience you receive. Even in societies known for their quietness and reservation, I found that openness invites openness. A simple question for directions. A request for help with a machine. A calm conversation with a stranger on a flight.",
      "These small exchanges add warmth to the cold and remind you that kindness is truly universal, no matter the language or location.",
      "Scandinavia continues to amaze in subtle ways: Stockholm\u2019s grace. Oslo\u2019s modern stillness. Copenhagen\u2019s effortless movement. Malm\u00f6\u2019s quiet charm. It\u2019s the kind of region that makes you slow down, observe, and appreciate the balance between nature, design, and everyday life.",
      "This journey wasn\u2019t about discovery as much as it was about reinforcement\u2014a reminder of who I am in new environments, how I adapt, how I observe, and how I connect. A reminder that calm can coexist with movement, and that meaningful moments often come from the simplest interactions.",
      "As the trip ended, I realized it wasn\u2019t just about cities, it was about clarity. That journey didn\u2019t just change my scenery, it changed my perspective. It reminded me how much life exists outside our comfort zones."
    ]
  },
];

interface InsightsPageProps {
  onViewArticle?: (article: Article) => void;
}

export default function InsightsPage({ onViewArticle }: InsightsPageProps) {
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
                  onClick={() => onViewArticle?.(article)}
                >
                  <div className="bg-[#F5F6F7] rounded-2xl overflow-hidden h-full hover:bg-[#0B1F3A] transition-all duration-500 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                    </div>
                    <div className="p-6 lg:p-8">
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
                onClick={() => onViewArticle?.(article)}
              >
                <div className="bg-white rounded-xl overflow-hidden h-full hover:shadow-lg transition-shadow group">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
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
