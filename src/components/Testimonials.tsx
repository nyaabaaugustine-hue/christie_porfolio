import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

function InitialsPlaceholder({ name }: { name: string }) {
  const initials = name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#C8A14A]/20 flex items-center justify-center ring-2 ring-[#C8A14A]/30">
      <span className="text-[#C8A14A] text-sm font-semibold tracking-wide">{initials}</span>
    </div>
  );
}

const testimonials = [
  {
    quote: "Christiana's strategic vision and operational expertise transformed our organization. Her ability to navigate complex challenges while maintaining focus on long-term value creation is truly exceptional.",
    author: "Dr. Kwame Asante",
    title: "Chairman, McDan Group",
  },
  {
    quote: "Working with Christiana was a transformative experience. Her leadership in restructuring our operations resulted in a 40% improvement in efficiency and positioned us for sustainable growth.",
    author: "Amma Mensah",
    title: "CEO, Industrial Solutions Ltd",
  },
  {
    quote: "Christiana brings a unique combination of strategic thinking and hands-on execution. Her board advisory work helped us navigate a critical transition period with confidence.",
    author: "Kofi Asiedu",
    title: "Board Director, Phoenix Enclave",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 xl:py-36 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:64px_64px]" />
      <div className="absolute top-[-30%] right-[-10%] w-[60%] aspect-square rounded-full bg-[#C8A14A]/[0.04] blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-[#C8A14A]/[0.03] blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 border border-[#C8A14A]/30 text-[#C8A14A] text-xs tracking-[0.2em] uppercase mb-6 font-medium rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-white tracking-tight">
            What Leaders Say
          </h2>
          <div className="w-12 h-[1px] bg-[#C8A14A]/50 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="text-[#C8A14A]/8 select-none pointer-events-none absolute -top-8 -left-4 lg:-top-12 lg:-left-8">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[100px] lg:h-[100px]">
              <path d="M28 16C17 16 8 24 8 36v20c0 4 3 8 8 8h12c4 0 8-4 8-8V40c0-4-4-8-8-8h-4c0-8 4-12 12-16l-8-8z" fill="currentColor"/>
              <path d="M64 16c-11 0-20 8-20 20v20c0 4 3 8 8 8h12c4 0 8-4 8-8V40c0-4-4-8-8-8h-4c0-8 4-12 12-16l-8-8z" fill="currentColor"/>
            </svg>
          </div>

          <div className="min-h-[220px] lg:min-h-[240px] flex items-center">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="w-full"
            >
              <blockquote className="text-center">
                <p className="text-xl lg:text-3xl font-serif italic text-white/90 leading-[1.6] lg:leading-[1.7] tracking-wide max-w-3xl mx-auto">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </p>
              </blockquote>
            </motion.div>
          </div>

          <motion.div
            key={`author-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-5 mt-10 lg:mt-12"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#C8A14A]/20 blur-md scale-125" />
              <InitialsPlaceholder name={testimonials[activeIndex].author} />
            </div>
            <div className="text-left">
              <p className="text-base lg:text-lg font-semibold text-white tracking-tight">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-sm text-white/50 tracking-wide">
                {testimonials[activeIndex].title}
              </p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); }}
                  className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                    index === activeIndex ? 'w-12' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 bg-[#C8A14A] rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
