import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";
import { Play, X, Clock } from "lucide-react";

const videos = [
  {
    id: "nZt5BiNLN8w",
    titleKey: "media.video1Title",
    descKey: "media.video1Desc",
  },
  {
    id: "ZiVR6JLNCXc",
    titleKey: "media.video2Title",
    descKey: "media.video2Desc",
  },
];

export default function VideoInterview() {
  const { t } = useTranslation();
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 xl:py-32 bg-[#0B1F3A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C8A14A]/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C8A14A]/40" />
            <p className="text-[#C8A14A] text-[11px] tracking-[0.3em] uppercase font-semibold">
              {t("media.label")}
            </p>
            <div className="w-8 h-px bg-[#C8A14A]/40" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-serif text-white leading-tight">
            {t("media.title")}
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-lg mx-auto">
            Hear directly from Christiana on leadership, transformation, and building sustainable enterprises across Africa.
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => {
            const isPlaying = playingVideo === video.id;
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl shadow-black/30 border border-white/[0.06]">
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="player"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&showinfo=0`}
                          title={t(video.titleKey)}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <button
                          onClick={() => setPlayingVideo(null)}
                          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors"
                        >
                          <X size={14} className="text-white" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="thumb"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPlayingVideo(video.id)}
                        className="absolute inset-0 w-full h-full group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0F2A4A] to-[#0B1F3A]" />
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={t(video.titleKey)}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:via-black/10 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#C8A14A]/90 flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 group-hover:bg-[#C8A14A] transition-all duration-500">
                            <Play size={28} className="text-[#0B1F3A] ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-white font-semibold text-sm lg:text-base">{t(video.titleKey)}</p>
                        </div>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center gap-3 text-white/30 text-xs">
                  <Clock size={11} />
                  <span>Watch interview</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[#C8A14A]/60">{isPlaying ? "Now playing" : "Click to play"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-16"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A14A]/30" />
          <p className="text-[#C8A14A]/50 text-[10px] tracking-[0.35em] uppercase font-medium">
            In The Spotlight
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A14A]/30" />
        </motion.div>
      </div>
    </section>
  );
}
