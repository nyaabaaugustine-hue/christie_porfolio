import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Lightbox from "./Lightbox";

const logos = [
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777870096/2bed-logo_1_somx5l.png", label: "2BED" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865846/WhatsApp_Image_2026-05-03_at_7.41.12_PM_4_rsygim.jpg", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865846/WhatsApp_Image_2026-05-03_at_7.46.17_PM_kaqdd8.jpg", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777717817/PRINT_hvqppt.avif", label: "PRINT" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777655037/360sm_mqzf0p.png", label: "360 SME" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777206097/cb_qtwgww.jpg", label: "CB" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777196963/1_j6fe4u.jpg", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777114247/kkkl_nhdczf.avif", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777111208/WhatsApp-Image-2025-08-18-at-14.16.35_e93040d9l_gwfnmu.jpg", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778496968/xcz_o35zcw.jpg", label: "XCZ" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778495883/sd_akkqko.jpg", label: "SD" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064863/ju6_p08ldl.jpg", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064863/iu6_sfym1g.jpg", label: "Industry Partner" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064277/lyy_nplxba.jpg", label: "LYY" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064214/bvbh_uvjd3u.jpg", label: "BVBH" },
  { src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064099/impex_iq2pho.jpg", label: "IMPEX" },
];

function thumbUrl(src: string) {
  return src.replace("/upload/", "/upload/w_400,h_300,c_fit,f_auto,q_auto/");
}

const colSpanClasses = [
  "lg:col-span-2", "lg:col-span-3", "lg:col-span-1", "lg:col-span-2",
  "lg:col-span-2", "lg:col-span-2", "lg:col-span-1", "lg:col-span-2",
  "lg:col-span-3", "lg:col-span-2", "lg:col-span-1", "lg:col-span-1",
  "lg:col-span-2", "lg:col-span-1", "lg:col-span-2", "lg:col-span-2",
];

const mdColSpanClasses = [
  "md:col-span-1", "md:col-span-2", "md:col-span-1", "md:col-span-1",
  "md:col-span-1", "md:col-span-2", "md:col-span-1", "md:col-span-1",
  "md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-1",
  "md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-1",
];

export default function ImageCarousel() {
  const [sectionRef, isInView] = useInView({ threshold: 0.05, rootMargin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function prevLightbox() {
    setLightboxIndex((i) => (i - 1 + logos.length) % logos.length);
  }

  function nextLightbox() {
    setLightboxIndex((i) => (i + 1) % logos.length);
  }

  return (
    <section ref={sectionRef} className="py-0 bg-[#0B1F3A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A14A]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 mb-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium"
        >
          Across Industries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-serif text-white tracking-tight"
        >
          Trusted Across Sectors
        </motion.h2>
        <div className="w-12 h-[1px] bg-[#C8A14A]/40 mt-5 mb-8 lg:mb-12" />
      </div>

      <div className="px-0 max-w-full mx-auto overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[0.5%] auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[200px]">
          {logos.map((logo, i) => (
            <motion.button
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.06 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => openLightbox(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden bg-white/5 group cursor-pointer ${colSpanClasses[i]} ${mdColSpanClasses[i]}`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-0">
                <img
                  src={thumbUrl(logo.src)}
                  alt={logo.label}
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className={`absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500`} />

              <div className={`absolute bottom-0 left-0 right-0 p-2 transition-all duration-400 ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'}`}>
                <span className="text-[#C8A14A] text-[10px] font-medium tracking-widest uppercase bg-[#0B1F3A]/70 px-2 py-0.5 rounded inline-block">
                  {logo.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={logos}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  );
}
