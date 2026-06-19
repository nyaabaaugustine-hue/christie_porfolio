import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const headingWords = ["Executive", "Entrepreneur.", "Boardroom", "Strategist."];

const metrics = [
  { value: "GHS 31M+", label: "Revenue Generated" },
  { value: "GHS 2.5M+", label: "Assets Built" },
  { value: "20+", label: "Years Experience" },
  { value: "5+", label: "Industries Transformed" },
];

export default function ExecutiveSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C8A14A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#C8A14A] text-sm tracking-widest uppercase mb-6 font-medium"
          >
            Executive Snapshot
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight mb-6">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className="inline-block"
              >
                {word}{" "}
              </motion.span>
            ))}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-0.5 bg-[#C8A14A]/50 mx-auto mb-10"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-white/70 text-lg max-w-2xl mx-auto mb-4"
          >
            Christiana Akua Feyie Yeboaa Okyere is a seasoned corporate executive, entrepreneur, and growth strategist whose career reflects a unique combination of entrepreneurial agility and executive leadership.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-white/70 text-base max-w-xl mx-auto mb-6"
          >
            Having built and led businesses across multiple sectors while also serving in senior executive leadership roles, she brings a practical understanding of growth, transformation, governance, and operational excellence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-white/70 text-base max-w-xl mx-auto mb-16"
          >
            Today, her work focuses on helping organizations unlock growth, improve performance, strengthen leadership, and create sustainable long-term value.
          </motion.p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-serif text-[#C8A14A] mb-1">{metric.value}</p>
                <p className="text-white/50 text-xs tracking-wider uppercase">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
