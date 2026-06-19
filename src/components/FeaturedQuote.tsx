import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function FeaturedQuote() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C8A14A]/[0.06] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C8A14A] text-5xl lg:text-7xl font-serif leading-none block mb-6">"</span>
          <blockquote className="text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-8">
            {t("quote.text")}
          </blockquote>
          <div className="w-12 h-px bg-[#C8A14A]/50 mx-auto" />
          <p className="text-[#C8A14A] text-sm tracking-widest uppercase mt-6 font-medium">
            {t("quote.author")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
