import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { title: "Strategic Thinking", description: "Creating clarity in complexity." },
  { title: "Operational Excellence", description: "Turning strategy into measurable outcomes." },
  { title: "People Development", description: "Building strong leaders and high-performing teams." },
  { title: "Value Creation", description: "Driving sustainable business growth." },
  { title: "Legacy", description: "Creating institutions and opportunities that endure." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LeadershipPhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 xl:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B1F3A]">
          <motion.img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144204/page-hero-section_rzmwvp.png"
            alt=""
            style={{ y: bgY }}
            className="w-full h-full object-cover object-top opacity-50"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A]/70 to-[#0B1F3A]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.04)_1px,transparent_1px)] bg-[length:48px_48px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 border border-[#C8A14A]/30 text-[#C8A14A] text-xs tracking-widest uppercase mb-6 font-medium rounded-full">
            Leadership Philosophy
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
            Building Growth Through Leadership
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A14A]/50 mx-auto mt-6" />
          <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            Christiana believes that sustainable growth is achieved when vision, people, systems, and execution work together toward a common purpose.
          </p>
          <p className="text-white/40 text-sm mt-4">
            Her leadership philosophy is built on five principles:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className={`group relative ${
                index === 3 ? "lg:col-start-1" : ""
              } ${
                index === 4 ? "md:col-start-1 lg:col-start-2" : ""
              }`}
            >
              <div className="relative h-full p-7 lg:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.07] transition-all duration-500 overflow-hidden">
                <div className="absolute -top-4 -right-4 text-[8rem] lg:text-[10rem] font-serif text-white/[0.03] leading-none pointer-events-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#C8A14A]/10 text-[#C8A14A] text-sm font-semibold border border-[#C8A14A]/20">
                      {index + 1}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/[0.06]" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-serif text-white mb-3 group-hover:text-[#C8A14A] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
