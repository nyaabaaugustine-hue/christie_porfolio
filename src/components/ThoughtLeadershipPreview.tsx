import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const articleKeys = [
  { titleKey: "insights.preview1Title", excerptKey: "insights.preview1Excerpt", categoryKey: "insights.preview1Category", readTimeKey: "insights.preview1ReadTime" },
  { titleKey: "insights.preview2Title", excerptKey: "insights.preview2Excerpt", categoryKey: "insights.preview2Category", readTimeKey: "insights.preview2ReadTime" },
  { titleKey: "insights.preview3Title", excerptKey: "insights.preview3Excerpt", categoryKey: "insights.preview3Category", readTimeKey: "insights.preview3ReadTime" },
];

type Page = "home" | "about" | "leadership" | "transformation" | "industries" | "board" | "speaking" | "contact" | "insights" | "blog";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function ThoughtLeadershipPreview({ onNavigate }: Props) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              {t("insights.label")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#0B1F3A] leading-tight">
              {t("insights.title")}
            </h2>
          </div>
          <button
            onClick={() => onNavigate("insights")}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#0B1F3A] font-medium hover:text-[#C8A14A] transition-colors text-sm group"
          >
            {t("insights.viewAll")}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articleKeys.map((article, index) => (
            <motion.article
                key={article.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onNavigate("insights")}
            >
              <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0B1F3A]/5 rounded-full text-xs text-[#C8A14A] font-medium">
                    {t(article.categoryKey)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#0B1F3A] mb-3 group-hover:text-[#C8A14A] transition-colors leading-snug">
                  {t(article.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {t(article.excerptKey)}
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Clock size={12} />
                  {t(article.readTimeKey)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
