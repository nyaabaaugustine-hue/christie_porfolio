import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

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
  const [sectionRef, isInView] = useInView({ threshold: 0.1, rootMargin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 xl:py-24 bg-[#F8F9FA] overflow-hidden relative">
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
          className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] tracking-tight"
        >
          A Legacy of Leadership
        </motion.h2>
        <div className="w-12 h-[1px] bg-[#C8A14A]/40 mt-5" />
      </div>

      <div className="relative">
        <div className="flex gap-6 px-4" style={{ width: `${images.length * 340}px` }}>
          <motion.div
            className="flex gap-6"
            animate={isInView ? { x: [0, -(images.length * 340)] } : {}}
            transition={{
              duration: 120,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[...images, ...images].map((src, i) => (
              <div key={i} className="relative w-72 shrink-0 group">
                <div className="h-80 bg-white rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-500 p-5 flex items-center justify-center border border-gray-100">
                  <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-[#C8A14A]/10 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-[#C8A14A]">{(i % images.length) + 1}</span>
                  </div>
                  <img
                    src={src}
                    alt={`Industry ${(i % images.length) + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#C8A14A]/30 rounded-full group-hover:w-12 group-hover:bg-[#C8A14A]/60 transition-all duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
