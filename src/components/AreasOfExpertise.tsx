import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const expertiseKeys = [
  { titleKey: "expertise.items.corporate", descKey: "expertise.items.corporateDesc", size: "text-base lg:text-xl" },
  { titleKey: "expertise.items.strategy", descKey: "expertise.items.strategyDesc", size: "text-base lg:text-lg" },
  { titleKey: "expertise.items.orgTransformation", descKey: "expertise.items.orgTransformationDesc", size: "text-sm lg:text-base" },
  { titleKey: "expertise.items.entrepreneurship", descKey: "expertise.items.entrepreneurshipDesc", size: "text-sm lg:text-lg" },
  { titleKey: "expertise.items.governance", descKey: "expertise.items.governanceDesc", size: "text-base lg:text-xl" },
  { titleKey: "expertise.items.growth", descKey: "expertise.items.growthDesc", size: "text-base lg:text-lg" },
];

export default function AreasOfExpertise() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-28 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777773928/backkk_mbfzyh.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/85 via-[#0B1F3A]/60 to-[#0B1F3A]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
            {t("expertise.label")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
            {t("expertise.title")}
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A14A]/50 mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl"
        >
          {expertiseKeys.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="border border-white/10 hover:border-[#C8A14A]/40 rounded-2xl p-6 transition-colors cursor-default group"
            >
              <h3 className={`${item.size} font-serif text-white group-hover:text-[#C8A14A] transition-colors mb-2`}>
                {t(item.titleKey)}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {t(item.descKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
