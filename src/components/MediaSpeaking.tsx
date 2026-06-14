import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A14A]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
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
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {[
            { value: "50+", label: "Keynote Addresses" },
            { value: "25+", label: "Conference Panels" },
            { value: "15+", label: "Awards & Recognitions" },
          ].map((stat, i) => (
            <div key={stat.label} className="relative text-center py-8">
              {i < 2 && <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-[#C8A14A]/10" />}
              <p className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] mb-2">{stat.value}</p>
              <p className="text-gray-400 text-xs lg:text-sm tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-5">
          {mediaAppearances.map((media, index) => (
            <motion.div
              key={media.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#C8A14A]/20 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden shrink-0">
                  <img
                    src={media.image}
                    alt={media.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0B1F3A]/40 to-transparent" />
                </div>
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-0.5 bg-[#C8A14A]/10 text-[#C8A14A] text-xs font-semibold rounded-full">
                      {media.type}
                    </span>
                    <span className="text-gray-300 text-sm">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#0B1F3A] mb-1 group-hover:text-[#C8A14A] transition-colors">
                    {media.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{media.description}</p>
                </div>
                <div className="hidden sm:flex items-center pr-6">
                  <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-[#C8A14A] group-hover:bg-[#C8A14A] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
