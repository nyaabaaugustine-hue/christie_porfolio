import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Clock, X } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

interface VideoLibraryPageProps {
  onNavigate: (page: Page) => void;
}

const categories = ["All", "Speaking", "Interviews", "Events", "Documentaries"];

const videos = [
  {
    id: 1,
    title: "Keynote: The Future of African Enterprise",
    category: "Speaking",
    duration: "18:42",
    date: "June 2026",
    thumbnail: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Interview: Building Sustainable Businesses",
    category: "Interviews",
    duration: "24:15",
    date: "May 2026",
    thumbnail: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144506/cvv_ttaqk3.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Panel: Women in Industrial Leadership",
    category: "Speaking",
    duration: "32:08",
    date: "April 2026",
    thumbnail: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144204/page-hero-section_rzmwvp.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Corporate Governance Summit 2026",
    category: "Events",
    duration: "45:30",
    date: "March 2026",
    thumbnail: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781390223/bacck_jtcnfj.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Documentary: Industrial Transformation in Ghana",
    category: "Documentaries",
    duration: "28:45",
    date: "February 2026",
    thumbnail: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781135908/glittering-glass-aluminium-cladded-skyscrapers-monsoon-mumbais-lower-parel-worli-areas_t8cxhi.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Interview: Entrepreneurship & Growth",
    category: "Interviews",
    duration: "20:12",
    date: "January 2026",
    thumbnail: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777773928/backkk_mbfzyh.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function VideoLibraryPage({ onNavigate: _onNavigate }: VideoLibraryPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);

  const filteredVideos = videos.filter(
    (v) => selectedCategory === "All" || v.category === selectedCategory
  );

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

      {/* Filter */}
      <section ref={ref} className="py-12 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0B1F3A] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-[#0B1F3A]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-[#C8A14A] flex items-center justify-center shadow-lg shadow-[#C8A14A]/30 opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <Play size={28} className="text-[#0B1F3A] ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 rounded-md text-white text-xs font-medium flex items-center gap-1">
                    <Clock size={10} />
                    {video.duration}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-[#C8A14A]/10 text-[#C8A14A] text-xs font-medium rounded-full">
                    {video.category}
                  </span>
                  <span className="text-gray-400 text-xs">{video.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0B1F3A] group-hover:text-[#C8A14A] transition-colors leading-snug">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-[#0B1F3A]">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-serif text-white">{activeVideo.title}</h3>
              <p className="text-white/50 text-sm mt-1">{activeVideo.category} • {activeVideo.duration} • {activeVideo.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
