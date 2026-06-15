import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExecutiveSnapshot from "./components/ExecutiveSnapshot";
import LeadershipPhilosophy from "./components/LeadershipPhilosophy";
import AreasOfExpertise from "./components/AreasOfExpertise";
import CareerTimeline from "./components/CareerTimeline";
import FeaturedPortfolio from "./components/FeaturedPortfolio";
import TransformationImpact from "./components/TransformationImpact";
import ExecutiveCTA from "./components/ExecutiveCTA";
import Footer from "./components/Footer";
import FloatingSocial from "./components/FloatingSocial";
import WhatsAppButton from "./components/WhatsAppButton";

import ThoughtLeadershipPreview from "./components/ThoughtLeadershipPreview";
import MediaSpeakingPreview from "./components/MediaSpeakingPreview";
import Newsletter from "./components/Newsletter";
import FeaturedQuote from "./components/FeaturedQuote";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const LeadershipPage = lazy(() => import("./pages/LeadershipPage"));
const BoardAdvisoryPage = lazy(() => import("./pages/BoardAdvisoryPage"));
const SpeakingPage = lazy(() => import("./pages/SpeakingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const TransformationProjectsPage = lazy(() => import("./pages/TransformationProjectsPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const PodcastPage = lazy(() => import("./pages/PodcastPage"));
const VideoLibraryPage = lazy(() => import("./pages/VideoLibraryPage"));
const InvestorRelationsPage = lazy(() => import("./pages/InvestorRelationsPage"));
const ImpactReportsPage = lazy(() => import("./pages/ImpactReportsPage"));

import "./fonts.css";

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A] text-white">
          <div className="text-center p-8">
            <h1 className="text-2xl font-serif mb-4">Something went wrong</h1>
            <p className="text-white/60 mb-6">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#C8A14A] text-[#0B1F3A] rounded-lg font-semibold hover:bg-[#b8923f] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

type Page = 'home' | 'about' | 'leadership' | 'transformation' | 'industries' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog' | 'podcast' | 'videos' | 'investors' | 'reports';

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

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-12 h-12 border-2 border-[#C8A14A]/20 border-t-[#C8A14A] rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#C8A14A] rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400 text-xs tracking-widest uppercase">Loading</p>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-[#C8A14A]/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-1 h-1 bg-[#C8A14A]/30 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 bg-[#C8A14A]/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!(window as any).YT && !(window as any).__ytApiLoading) {
      (window as any).__ytApiLoading = true;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0B1F3A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C8A14A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute w-[300px] h-[300px] rounded-full bg-[#C8A14A]/5 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] bg-[#C8A14A] mx-auto mb-8 origin-center"
          />

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781130092/Akua-Feyie-Logo-new-01-768x217_fcurfv.png"
            alt="Christiana Okyere"
            className="h-12 sm:h-16 w-auto mx-auto mb-8"
          />

          <div className="flex flex-col items-center gap-3">
            <div className="w-48 h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#C8A14A]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
              className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-medium"
            >
              Loading
            </motion.p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] bg-[#C8A14A] mx-auto mt-8 origin-center"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <DarkModeProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-white font-sans dark:bg-[#061228] dark:text-white transition-colors duration-300">
          <CustomCursor />
          <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
          
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <PageTransition key="home">
                <main role="main">
                  <Hero onNavigate={handleNavigate} />
                  <ExecutiveSnapshot />
                  <TransformationImpact />
                  <FeaturedPortfolio onNavigate={handleNavigate} />
                  <LeadershipPhilosophy />
                  <AreasOfExpertise />
                  <CareerTimeline />
                  <ThoughtLeadershipPreview onNavigate={handleNavigate} />
                  <MediaSpeakingPreview onNavigate={handleNavigate} />
                  <FeaturedQuote />
                  <Newsletter />
                  <ExecutiveCTA onNavigate={handleNavigate} />
                </main>
              </PageTransition>
            )}
            
            <Suspense fallback={<PageLoader />}>
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
              
              {currentPage === 'board' && (
                <PageTransition key="board">
                  <BoardAdvisoryPage onNavigate={handleNavigate} />
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

              {currentPage === 'transformation' && (
                <PageTransition key="transformation">
                  <TransformationProjectsPage onNavigate={handleNavigate} />
                </PageTransition>
              )}

              {currentPage === 'industries' && (
                <PageTransition key="industries">
                  <IndustriesPage onNavigate={handleNavigate} />
                </PageTransition>
              )}

              {currentPage === 'blog' && (
                <PageTransition key="blog">
                  <BlogPage onNavigate={handleNavigate} />
                </PageTransition>
              )}

              {currentPage === 'podcast' && (
                <PageTransition key="podcast">
                  <PodcastPage onNavigate={handleNavigate} />
                </PageTransition>
              )}

              {currentPage === 'videos' && (
                <PageTransition key="videos">
                  <VideoLibraryPage onNavigate={handleNavigate} />
                </PageTransition>
              )}

              {currentPage === 'investors' && (
                <PageTransition key="investors">
                  <InvestorRelationsPage onNavigate={handleNavigate} />
                </PageTransition>
              )}

              {currentPage === 'reports' && (
                <PageTransition key="reports">
                  <ImpactReportsPage onNavigate={handleNavigate} />
                </PageTransition>
              )}
            </Suspense>
          </AnimatePresence>
          
          <FloatingSocial />
          <WhatsAppButton />
          
          <Footer onNavigate={handleNavigate} />
        </div>
      </ErrorBoundary>
    </DarkModeProvider>
  );
}
