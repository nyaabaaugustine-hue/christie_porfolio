import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "", label: "Industries" },
  { value: 15, suffix: "+", label: "Organizations Transformed" },
  { value: 100, suffix: "M+", label: "Value Created (USD)" },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span>{count}{suffix}</span>;
}

const headingWords = ["Executive", "Entrepreneur.", "Boardroom", "Strategist."];

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
                className="inline-block mr-[0.3em]"
              >
                {word}
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
            className="text-white/70 text-lg max-w-2xl mx-auto mb-6"
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
            className="text-white/70 text-base max-w-xl mx-auto"
          >
            Today, her work focuses on helping organizations unlock growth, improve performance, strengthen leadership, and create sustainable long-term value.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 divide-x divide-y lg:divide-y-0 divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 px-6 text-center group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="text-5xl lg:text-6xl font-serif text-white mb-3 tracking-tight group-hover:text-[#C8A14A] transition-colors duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-white/40 text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
