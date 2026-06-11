import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Lightbox from "./Lightbox";

const allLogos = [
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

const row1 = allLogos.slice(0, 8);
const row2 = allLogos.slice(8);

function thumbUrl(src: string) {
  return src.replace("/upload/", "/upload/w_200,h_120,c_fit,f_auto,q_auto/");
}

function MarqueeRow({
  logos,
  reverse,
  onImageClick,
}: {
  logos: typeof allLogos;
  reverse?: boolean;
  onImageClick: (index: number) => void;
}) {
  const startIndex = logos === row1 ? 0 : 8;

  return (
    <div
      className="flex gap-5"
      style={{
        animation: `marquee-${reverse ? "reverse" : "forward"} 200s linear infinite`,
        width: "max-content",
      }}
    >
      {[...logos, ...logos].map((logo, i) => {
        const realIndex = startIndex + (i % logos.length);
        return (
          <button
            key={i}
            onClick={() => onImageClick(realIndex)}
            className="relative w-48 shrink-0 group cursor-pointer"
          >
            <div className="h-32 bg-white rounded-xl overflow-hidden shadow-sm p-5 flex items-center justify-center">
              <img
                src={thumbUrl(logo.src)}
                alt={logo.label}
                className="max-w-full max-h-full object-contain brightness-0 saturate-0 opacity-60 group-hover:brightness-100 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function ImageCarousel() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, rootMargin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function prevLightbox() {
    setLightboxIndex((i) => (i - 1 + allLogos.length) % allLogos.length);
  }

  function nextLightbox() {
    setLightboxIndex((i) => (i + 1) % allLogos.length);
  }

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A14A]/20 to-transparent" />

      <style>{`
        @keyframes marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C8A14A] text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          Across Industries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-serif text-white tracking-tight"
        >
          A Legacy of Leadership
        </motion.h2>
        <div className="w-12 h-[1px] bg-[#C8A14A]/40 mt-5" />
      </div>

      <div className="relative space-y-5">
        <MarqueeRow logos={row1} onImageClick={openLightbox} />
        <MarqueeRow logos={row2} reverse onImageClick={openLightbox} />

        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0B1F3A] via-[#0B1F3A]/80 to-transparent pointer-events-none z-10" />
      </div>

      {lightboxOpen && (
        <Lightbox
          images={allLogos}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  );
}