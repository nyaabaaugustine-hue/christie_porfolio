import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mic, Users, Award } from "lucide-react";

const topics = [
  {
    title: "Leadership in Times of Change",
    description: "Navigating uncertainty and leading organizations through transformation.",
    icon: Users,
  },
  {
    title: "Building Sustainable Growth",
    description: "Creating lasting value through strategic planning and operational excellence.",
    icon: Award,
  },
  {
    title: "Entrepreneurship and Value Creation",
    description: "Lessons from two decades of entrepreneurial leadership across Africa.",
    icon: Mic,
  },
];

type Page = "home" | "about" | "leadership" | "transformation" | "industries" | "board" | "speaking" | "contact" | "insights" | "blog";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function MediaSpeakingPreview({ onNavigate }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#0B1F3A] relative overflow-hidden">
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
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Media & Speaking
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
              Speaking Engagements
            </h2>
          </div>
          <button
            onClick={() => onNavigate("speaking")}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white font-medium hover:text-[#C8A14A] transition-colors text-sm group"
          >
            View Speaking Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8A14A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A14A]/20 transition-colors">
                  <Icon size={22} className="text-[#C8A14A]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {topic.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
