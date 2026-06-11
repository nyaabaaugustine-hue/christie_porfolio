import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const mediaAppearances = [
  {
    title: "African CEO Forum 2024",
    type: "Keynote",
    description: "Leading Industrial Transformation Across Africa",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781137039/AFRICA1_yoz2e1.jpg",
  },
  {
    title: "Ghana Economic Forum",
    type: "Panel Discussion",
    description: "Women in Executive Leadership",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781137038/AFICAQ2_yvyyxp.jpg",
  },
  {
    title: "West Africa Business Summit",
    type: "Fireside Chat",
    description: "Building Sustainable Supply Chains",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781137165/WESTAFRICAN_tfjub8.jpg",
  },
  {
    title: "Harvard Business School Africa Conference",
    type: "Guest Speaker",
    description: "The Future of African Enterprise",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781137374/954_xirvmf.png",
  },
];

export default function MediaSpeaking() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Media & Speaking
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] leading-tight mb-6">
            Featured Engagements
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/30 mb-6" />
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Sharing insights on leadership, transformation, and African enterprise 
            at premier business forums and conferences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-16 mb-20 py-8 border-y border-gray-100"
        >
          {[
            { value: "50+", label: "Keynote Addresses" },
            { value: "25+", label: "Conference Panels" },
            { value: "15+", label: "Awards & Recognitions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-gray-100">
          {mediaAppearances.map((media, index) => (
            <motion.div
              key={media.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer relative overflow-hidden bg-white"
            >
              <div className="aspect-[4/5]">
                <img
                  src={media.image}
                  alt={media.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2.5 py-0.5 bg-[#C8A14A] text-[#0B1F3A] text-xs font-semibold rounded mb-3">
                  {media.type}
                </span>
                <h3 className="text-white font-semibold leading-snug mb-1 group-hover:text-[#C8A14A] transition-colors">
                  {media.title}
                </h3>
                <p className="text-white/60 text-sm">{media.description}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-[#C8A14A] flex items-center justify-center shadow-2xl">
                  <Play size={28} className="text-[#0B1F3A] ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
