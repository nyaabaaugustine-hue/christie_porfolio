import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Download, Mic, Users, Award, Globe } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface SpeakingPageProps {
  onNavigate: (page: Page) => void;
}

const speakingTopics = [
  {
    title: "Leadership in Times of Change",
    description: "Navigating uncertainty and leading organizations through transformation with confidence and clarity.",
    icon: Users,
  },
  {
    title: "Building Sustainable Growth",
    description: "Creating lasting value through strategic planning, operational excellence, and stakeholder alignment.",
    icon: Award,
  },
  {
    title: "Entrepreneurship & Value Creation",
    description: "From venture creation to scaling businesses—lessons from two decades of entrepreneurial leadership.",
    icon: Globe,
  },
  {
    title: "Women in Leadership",
    description: "Breaking barriers and navigating the path to executive leadership as a woman in African business.",
    icon: Users,
  },
  {
    title: "Governance & Organizational Effectiveness",
    description: "Building boards and organizations that drive value, ensure accountability, and deliver results.",
    icon: Award,
  },
  {
    title: "Turning Strategy into Execution",
    description: "Practical frameworks for bridging the gap between strategic vision and operational reality.",
    icon: Mic,
  },
];

const pastEngagements = [
  {
    event: "African CEO Forum",
    topic: "Industrial Transformation in Africa",
    year: "2024",
  },
  {
    event: "Ghana Economic Forum",
    topic: "Women in Executive Leadership",
    year: "2024",
  },
  {
    event: "West Africa Business Summit",
    topic: "Building Sustainable Supply Chains",
    year: "2023",
  },
  {
    event: "Harvard Business School Africa Conference",
    topic: "The Future of African Enterprise",
    year: "2023",
  },
];

export default function SpeakingPage({ onNavigate }: SpeakingPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/60 to-[#0B1F3A]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Speaking Engagements
            </p>
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Keynote Speaker
            </h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              Inspiring audiences with insights on leadership, transformation, and African enterprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaker Reel */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-[#0B1F3A] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119517/1_v86mgv.png"
              alt="Speaking engagement"
              className="w-full h-full object-contain opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-[#C8A14A] flex items-center justify-center"
              >
                <Play size={32} className="text-[#0B1F3A] ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-semibold text-lg">Speaker Reel</p>
              <p className="text-white/60 text-sm">Watch highlights from past engagements</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Topics
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Signature Keynotes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#C8A14A]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[#C8A14A]" size={24} />
                  </div>
                  <h3 className="font-semibold text-[#0B1F3A] mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Engagements */}
      <section className="py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Experience
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Past Engagements
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {pastEngagements.map((engagement, index) => (
              <motion.div
                key={engagement.event}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-6 border-b border-gray-100 last:border-0"
              >
                <div>
                  <h3 className="font-semibold text-[#0B1F3A]">{engagement.event}</h3>
                  <p className="text-gray-600">{engagement.topic}</p>
                </div>
                <span className="text-[#C8A14A] font-medium">{engagement.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Kit & CTA */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
                Resources
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
                Speaker Kit
              </h2>
              <p className="text-white/60 mb-8">
                Download Christiana's speaker kit for high-resolution photos, 
                bio, topics, and technical requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors"
              >
                <Download size={18} />
                Download Speaker Kit
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Book Christiana</h3>
              <p className="text-white/60 mb-6">
                For speaking inquiries, please provide details about your event 
                and Christiana's team will respond within 48 hours.
              </p>
              <motion.button
                onClick={() => onNavigate("contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Submit Speaking Inquiry
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}