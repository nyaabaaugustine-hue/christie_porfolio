import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const allItems = [
  { title: "Corporate Leadership", size: "text-base lg:text-xl" },
  { title: "Business Strategy", size: "text-base lg:text-lg" },
  { title: "Organizational Transformation", size: "text-sm lg:text-base" },
  { title: "Governance", size: "text-base lg:text-xl" },
  { title: "Entrepreneurship", size: "text-sm lg:text-lg" },
  { title: "Growth & Expansion", size: "text-base lg:text-lg" },
];

export default function AreasOfExpertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777773928/backkk_mbfzyh.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/85 via-[#0B1F3A]/60 to-[#0B1F3A]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
            Areas of Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
            Core Competencies
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/50 mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-3 lg:gap-4 max-w-4xl"
        >
          {allItems.map((item, index) => (
            <motion.span
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className={`${item.size} font-serif text-white/80 hover:text-[#C8A14A] transition-colors cursor-default px-4 lg:px-6 py-2 lg:py-3 border border-white/10 hover:border-[#C8A14A]/40 rounded-full`}
            >
              {item.title}
            </motion.span>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
