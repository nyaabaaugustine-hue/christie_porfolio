import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Globe } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'transformation' | 'industries';

interface SpeakingPreviewProps {
  onNavigate: (page: Page) => void;
}

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
    icon: Globe,
  },
];

export default function SpeakingPreview({ onNavigate }: SpeakingPreviewProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1782008714/send_s1v3hw.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/60 via-[#0B1F3A]/40 to-[#0B1F3A]/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.04)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase font-semibold mb-2">
              Speaking
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif text-white leading-tight mb-2">
              Speaking &amp; Media
            </h2>
            <p className="text-white/70 text-base mb-8">View Speaking Portfolio</p>

            <div className="space-y-6">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <div key={topic.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A14A]/20 group-hover:border-[#C8A14A]/30 transition-all">
                      <Icon className="text-[#C8A14A]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{topic.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{topic.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onNavigate("speaking")}
              className="inline-flex items-center gap-2 text-[#C8A14A] text-sm font-medium mt-8 hover:text-[#d4ad5a] transition-colors group"
            >
              View Speaking Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <p className="text-[#C8A14A] text-6xl lg:text-7xl font-serif leading-none mb-6">&ldquo;</p>
              <p className="text-white/90 text-xl lg:text-2xl leading-relaxed font-serif mb-8">
                Growth does not happen by chance. It happens when vision, leadership, discipline, and execution come together.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C8A14A]/20 flex items-center justify-center">
                  <span className="text-[#C8A14A] text-sm font-semibold">CO</span>
                </div>
                <p className="text-white font-medium text-sm">Christiana Akua Feyie Yeboaa Okyere</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
