import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const careerStages = [
  {
    phase: "Creative Foundation",
    title: "Creative Professional",
    period: "Early Career",
    description:
      "Christiana's professional journey began in communications, design, branding, and marketing. These early experiences developed the strategic thinking, creativity, and communication skills that continue to influence her leadership approach today.",
  },
  {
    phase: "Entrepreneurial Builder",
    title: "Entrepreneur",
    period: "Growth Phase",
    description:
      "Driven by a passion for creating solutions and opportunities, she established businesses that served clients across multiple industries. Through entrepreneurship, she gained firsthand experience in business growth, leadership, customer engagement, and organizational development.",
  },
  {
    phase: "Executive Leader",
    title: "Executive Leader",
    period: "Executive Phase",
    description:
      "Over time, her responsibilities evolved beyond entrepreneurship into broader executive leadership roles focused on strategic execution, growth, operational excellence, and organizational transformation.",
  },
  {
    phase: "Growth Strategist",
    title: "Growth Strategist",
    period: "Today",
    description:
      "Today, Christiana combines entrepreneurial insight with executive leadership experience to support organizations in navigating complexity, unlocking growth opportunities, and building sustainable futures.",
  },
];

export default function CareerTimeline() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 lg:py-24 xl:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781135908/glittering-glass-aluminium-cladded-skyscrapers-monsoon-mumbais-lower-parel-worli-areas_t8cxhi.jpg"
          alt=""
          className="w-full h-full object-contain opacity-30"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/60 to-[#0B1F3A]/90" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.04)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-4">
            A Career Built on Growth
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A14A]/50 mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto mb-4">
            From creative beginnings in communications and branding to executive leadership across multiple industries, Christiana's journey has been defined by continuous growth, learning, and transformation.
          </p>
          <p className="text-white/40 max-w-xl mx-auto">
            Her career reflects a commitment to building organizations, developing people, and creating meaningful impact through leadership and entrepreneurship.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="space-y-16">
            {careerStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 pl-14 lg:pl-0 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <p className="text-[#C8A14A] text-xs tracking-[0.15em] uppercase mb-1 font-medium">
                    {stage.phase}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-serif text-white mb-1 leading-tight">
                    {stage.title}
                  </h3>
                  <p className="text-[#C8A14A] text-sm mb-2">{stage.period}</p>
                  <p className={`leading-relaxed max-w-sm lg:max-w-none lg:inline-block ${index === careerStages.length - 1 ? 'text-white/70' : 'text-white/50'}`}>
                    {stage.description}
                  </p>
                </div>

                <div className="absolute left-0 lg:relative lg:left-auto flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full border-2 border-[#C8A14A] bg-[#0B1F3A] flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${stage.period === "Current" || stage.period === "Ongoing" ? 'bg-[#C8A14A]' : 'bg-white/50'}`} />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
