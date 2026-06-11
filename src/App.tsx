import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExecutiveSnapshot from "./components/ExecutiveSnapshot";
import LeadershipPhilosophy from "./components/LeadershipPhilosophy";
import AreasOfExpertise from "./components/AreasOfExpertise";
import CareerTimeline from "./components/CareerTimeline";
import FeaturedPortfolio from "./components/FeaturedPortfolio";
import TransformationImpact from "./components/TransformationImpact";
import MediaSpeaking from "./components/MediaSpeaking";
import ThoughtLeadership from "./components/ThoughtLeadership";
import Testimonials from "./components/Testimonials";
import ExecutiveCTA from "./components/ExecutiveCTA";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import LeadershipPage from "./pages/LeadershipPage";
import SpeakingPage from "./pages/SpeakingPage";
import ContactPage from "./pages/ContactPage";
import InsightsPage from "./pages/InsightsPage";
import FloatingSocial from "./components/FloatingSocial";
import WhatsAppButton from "./components/WhatsAppButton";
import ImageCarousel from "./components/ImageCarousel";

// Import custom fonts
import "./fonts.css";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

// Custom cursor component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{ 
        x: position.x - 8, 
        y: position.y - 8,
        backgroundColor: isHovering ? '#C8A14A' : 'white',
      }}
      animate={{
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
}

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0B1F3A] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
            alt="Christiana Okyere"
            className="h-16 w-auto mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-sm tracking-widest uppercase"
          >
            Executive Portfolio
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <CustomCursor />
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <PageTransition key="home">
            <main>
              <Hero onNavigate={handleNavigate} />
              <ExecutiveSnapshot />
              <LeadershipPhilosophy />
              <AreasOfExpertise />
              <CareerTimeline />
              <FeaturedPortfolio onNavigate={handleNavigate} />
              <ImageCarousel />
              <TransformationImpact />
              <Testimonials />
              <MediaSpeaking />
              <ThoughtLeadership />
              <ExecutiveCTA onNavigate={handleNavigate} />
            </main>
          </PageTransition>
        )}
        
        {currentPage === 'about' && (
          <PageTransition key="about">
            <AboutPage onNavigate={handleNavigate} />
          </PageTransition>
        )}
        
        {currentPage === 'leadership' && (
          <PageTransition key="leadership">
            <LeadershipPage onNavigate={handleNavigate} />
          </PageTransition>
        )}
        
        {currentPage === 'speaking' && (
          <PageTransition key="speaking">
            <SpeakingPage onNavigate={handleNavigate} />
          </PageTransition>
        )}
        
        {currentPage === 'contact' && (
          <PageTransition key="contact">
            <ContactPage onNavigate={handleNavigate} />
          </PageTransition>
        )}

        {currentPage === 'insights' && (
          <PageTransition key="insights">
            <InsightsPage />
          </PageTransition>
        )}
      </AnimatePresence>
      
      <FloatingSocial />
      <WhatsAppButton />
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}