import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const careerStageKeys = [
  { phaseKey: "timeline.milestones.creative.phase", titleKey: "timeline.milestones.creative.title", periodKey: "timeline.milestones.creative.period", descKey: "timeline.milestones.creative.desc" },
  { phaseKey: "timeline.milestones.entrepreneur.phase", titleKey: "timeline.milestones.entrepreneur.title", periodKey: "timeline.milestones.entrepreneur.period", descKey: "timeline.milestones.entrepreneur.desc" },
  { phaseKey: "timeline.milestones.executive.phase", titleKey: "timeline.milestones.executive.title", periodKey: "timeline.milestones.executive.period", descKey: "timeline.milestones.executive.desc" },
  { phaseKey: "timeline.milestones.strategist.phase", titleKey: "timeline.milestones.strategist.title", periodKey: "timeline.milestones.strategist.period", descKey: "timeline.milestones.strategist.desc" },
];

export default function CareerTimeline() {
  const { t } = useTranslation();
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
            {t("timeline.subtitle")}
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A14A]/50 mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto mb-4">
            {t("timeline.description")}
          </p>
          <p className="text-white/40 max-w-xl mx-auto">
            {t("timeline.footer")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="space-y-16">
            {careerStageKeys.map((stage, index) => (
              <motion.div
                key={stage.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 pl-14 lg:pl-0 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <p className="text-[#C8A14A] text-xs tracking-[0.15em] uppercase mb-1 font-medium">
                    {t(stage.phaseKey)}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-serif text-white mb-1 leading-tight">
                    {t(stage.titleKey)}
                  </h3>
                  <p className="text-[#C8A14A] text-sm mb-2">{t(stage.periodKey)}</p>
                  <p className={`leading-relaxed max-w-sm lg:max-w-none lg:inline-block ${index === careerStageKeys.length - 1 ? 'text-white/70' : 'text-white/50'}`}>
                    {t(stage.descKey)}
                  </p>
                </div>

                <div className="absolute left-0 lg:relative lg:left-auto flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full border-2 border-[#C8A14A] bg-[#0B1F3A] flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${stage.periodKey === "timeline.milestones.strategist.period" ? 'bg-[#C8A14A]' : 'bg-white/50'}`} />
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
