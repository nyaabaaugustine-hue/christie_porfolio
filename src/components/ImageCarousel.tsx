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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function ImageCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative aspect-square group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              <div className="absolute inset-3 md:inset-4">
                <img
                  src={src}
                  alt={`Industry ${i + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 ring-1 ring-black/[0.04] rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
