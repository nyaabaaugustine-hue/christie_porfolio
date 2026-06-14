import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Play } from "lucide-react";

const pressItems = [
  {
    source: "Ghana Chamber of Mines",
    event: "Annual Industry Conference",
    description: "Keynote address on operational excellence in industrial mining",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777870096/2bed-logo_1_somx5l.png",
  },
  {
    source: "West Africa Business Forum",
    event: "CEO Roundtable",
    description: "Panel discussion on regional industrial transformation",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777655037/360sm_mqzf0p.png",
  },
  {
    source: "Enterprise Governance Summit",
    event: "Board Leadership Session",
    description: "Presentation on governance frameworks for high-growth enterprises",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778495883/sd_akkqko.jpg",
  },
  {
    source: "Industrial Leaders Network",
    event: "Strategic Advisory Panel",
    description: "Contributing expert on manufacturing scalability and operational turnaround",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064099/impex_iq2pho.jpg",
  },
];

const videoClips = [
  { id: "56ZbiZGh0SM", title: "Speaking Engagement" },
  { id: "TecSq4QvwZs", title: "Industry Address" },
  { id: "kcQ0scOBvY", title: "Executive Interview" },
];

export default function PressAndRecognition() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, rootMargin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 xl:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A14A] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
            Press & Recognition
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] leading-tight mb-6">
            A Voice in the Industry
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/30 mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {pressItems.map((item, index) => (
            <motion.div
              key={item.source}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#F5F6F7] p-3 flex items-center justify-center shrink-0 group-hover:bg-[#0B1F3A] transition-colors duration-300">
                <img
                  src={item.image}
                  alt={item.source}
                  className="max-w-full max-h-full object-contain brightness-0 saturate-0 opacity-40 group-hover:brightness-100 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div>
                <p className="text-xs text-[#C8A14A] font-medium uppercase tracking-widest mb-1">
                  {item.event}
                </p>
                <p className="text-sm text-gray-500 mb-1">{item.source}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-6 font-medium">
            Featured Speaking
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {videoClips.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video rounded-xl overflow-hidden bg-[#0B1F3A]"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C8A14A]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="text-white ml-0.5" />
                  </div>
                </div>
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{video.title}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}