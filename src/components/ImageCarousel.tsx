import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777870096/2bed-logo_1_somx5l.png",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865846/WhatsApp_Image_2026-05-03_at_7.41.12_PM_4_rsygim.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777865846/WhatsApp_Image_2026-05-03_at_7.46.17_PM_kaqdd8.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777717817/PRINT_hvqppt.avif",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777655037/360sm_mqzf0p.png",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777206097/cb_qtwgww.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777196963/1_j6fe4u.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777114247/kkkl_nhdczf.avif",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777111208/WhatsApp-Image-2025-08-18-at-14.16.35_e93040d9l_gwfnmu.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778496968/xcz_o35zcw.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778495883/sd_akkqko.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064863/ju6_p08ldl.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064863/iu6_sfym1g.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064277/lyy_nplxba.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064214/bvbh_uvjd3u.jpg",
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778064099/impex_iq2pho.jpg",
];

export default function ImageCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A14A]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
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
      </div>

      <div className="relative">
        <div className="flex" style={{ width: `${images.length * 340}px` }}>
          <motion.div
            className="flex gap-8 px-4"
            animate={isInView ? { x: [0, -(images.length * 340)] } : {}}
            transition={{
              duration: 160,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[...images, ...images].map((src, i) => (
              <div key={i} className="relative w-72 shrink-0 group">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[1px] shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden bg-[#0B1F3A] h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8A14A]/5 via-transparent to-white/[0.02] pointer-events-none" />
                    <img
                      src={src}
                      alt={`Industry ${(i % images.length) + 1}`}
                      className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-white/[0.08] rounded-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <span className="text-white/30 text-xs tracking-widest uppercase">
                        {(i % images.length) + 1 < 10 ? "0" : ""}{(i % images.length) + 1}
                      </span>
                      <span className="w-8 h-[1px] bg-[#C8A14A]/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0B1F3A] via-[#0B1F3A]/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
