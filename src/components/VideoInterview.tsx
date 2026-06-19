import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

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

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
            {t("media.label")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
            {t("media.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={t(video.titleKey)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <p className="text-white text-sm font-medium">{t(video.titleKey)}</p>
                <p className="text-white/60 text-xs mt-1">{t(video.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
