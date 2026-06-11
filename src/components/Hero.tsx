import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const videoIds = ["56ZbiZGh0SM", "TecSq4QvwZs", "kcQ0scOBfvY"];

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useTranslation();
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    if ((window as any).YT) {
      setApiReady(true);
      return;
    }
    if (!(window as any).__ytApiLoading) {
      (window as any).__ytApiLoading = true;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onload = () => setApiReady(true);
      document.head.appendChild(tag);
    } else {
      const check = setInterval(() => {
        if ((window as any).YT) {
          setApiReady(true);
          clearInterval(check);
        }
      }, 200);
      return () => clearInterval(check);
    }
  }, []);

  useEffect(() => {
    if (!apiReady) return;
    let player: any;
    let retries = 0;
    const interval = setInterval(() => {
      if ((window as any).YT && (window as any).YT.Player) {
        clearInterval(interval);
        player = new (window as any).YT.Player("yt-bg-player", {
          videoId: videoIds[0],
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            disablekb: 1,
            playsinline: 1,
            modestbranding: 1,
            rel: 0,
            playlist: videoIds.join(","),
          },
          events: {
            onReady: (e: any) => e.target.playVideo(),
          },
        });
      }
      retries++;
      if (retries > 20) clearInterval(interval);
    }, 500);
    return () => {
      clearInterval(interval);
      if (player) player.destroy();
    };
  }, [apiReady]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 bg-[#0B1F3A]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div id="yt-bg-player" className="w-full h-full pointer-events-none" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C8A14A]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#C8A14A]/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-12 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#C8A14A] text-sm tracking-widest uppercase mb-6 font-medium"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6 leading-tight"
            >
              Transforming Businesses.
              <br />
              <span className="text-[#C8A14A]">Scaling Industries.</span>
              <br />
              Building Sustainable Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed"
            >
              Christiana Akua Feyie Yeboaa Okyere is a <strong className="text-white">Corporate Executive</strong>, <strong className="text-white">Entrepreneur</strong>, 
              and <strong className="text-white">Growth Strategist</strong> with over two decades of experience leading business 
              transformation, operational excellence, industrial growth, and organizational 
              performance across Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => onNavigate("about")}
                className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Leadership Journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => onNavigate("leadership")}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Executive Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative lg:block">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 overflow-hidden rounded-2xl lg:rounded-2xl"
              >
                <div className="lg:hidden">
                  <img
                    src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119516/2_f2c4wp.jpg"
                    alt="Christiana Akua Feyie Yeboaa Okyere"
                    className="w-full rounded-2xl"
                  />
                </div>
                <img
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781119516/2_f2c4wp.jpg"
                  alt="Christiana Akua Feyie Yeboaa Okyere"
                  className="hidden lg:block w-full max-w-md mx-auto shadow-2xl rounded-2xl"
                />
              </motion.div>
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full bg-[#C8A14A]/20 rounded-2xl -z-10" />
              <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-[#C8A14A]/30 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#C8A14A]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
