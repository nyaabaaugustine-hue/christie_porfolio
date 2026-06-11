import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    group: "Leadership & Strategy",
    items: ["Corporate Leadership", "Business Strategy", "Governance", "Strategic Communications"],
  },
  {
    group: "Operations & Growth",
    items: ["Industrial Operations", "Supply Chain & Logistics", "Growth & Expansion"],
  },
  {
    group: "Transformation & Ventures",
    items: ["Organizational Transformation", "Entrepreneurship"],
  },
];

const allItems = [
  { title: "Corporate Leadership", size: "text-base lg:text-xl" },
  { title: "Business Strategy", size: "text-base lg:text-lg" },
  { title: "Organizational Transformation", size: "text-sm lg:text-base" },
  { title: "Governance", size: "text-base lg:text-xl" },
  { title: "Industrial Operations", size: "text-sm lg:text-base" },
  { title: "Entrepreneurship", size: "text-sm lg:text-lg" },
  { title: "Growth & Expansion", size: "text-base lg:text-lg" },
  { title: "Strategic Communications", size: "text-sm lg:text-base" },
  { title: "Supply Chain & Logistics", size: "text-sm lg:text-base" },
];

export default function AreasOfExpertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-[#0B1F3A] relative" style={{ isolation: 'isolate' }}>
      <div className="absolute inset-0 bg-[#0B1F3A] -z-10">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C8A14A 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <div className="w-full h-full border border-[#C8A14A]/5 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Areas of Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
            Strategic Capabilities
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/50 mb-8" />
          <p className="text-white/50 text-lg max-w-2xl">
            Comprehensive expertise spanning executive leadership, operations, 
            strategy, and transformation across multiple industries.
          </p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-white/10 grid md:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <div key={cat.group}>
              <h3 className="text-[#C8A14A] text-xs tracking-[0.15em] uppercase mb-4 font-medium">
                {cat.group}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
