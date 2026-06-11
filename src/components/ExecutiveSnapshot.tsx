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
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-6 font-medium">
            Executive Snapshot
          </p>
          <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight mb-6">
            A Legacy of Impact
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/50 mx-auto mb-10" />
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-16">
            Two decades of driving transformation across multiple industries and organizations.
          </p>
        </motion.div>

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
