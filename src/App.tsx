import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Mail, Phone, Moon, Sun, ArrowUpRight, Award, FolderHeart, Laptop, PhoneCall, HelpCircle, Briefcase, FileBadge, CodeSquare, ChevronUp, Globe } from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MarketingCases from './components/MarketingCases';
import Workflow from './components/Workflow';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CvPreviewModal from './components/CvPreviewModal';
import AIParticles from './components/AIParticles';
import ProjectDetail from './components/ProjectDetail';
import CaseDetail from './components/CaseDetail';

import { navTranslations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentRoute, setCurrentRoute] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate-changed', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate-changed', handleLocationChange);
    };
  }, []);

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('pushstate-changed'));
  };

  useEffect(() => {
    // Force light mode globally
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Background scroll check
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section watcher
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'cases', 'workflow', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    if (!isHome) {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('pushstate-changed'));
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = navTranslations[lang];

  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 relative">
      
      {/* Dynamic Floating AIParticles Star Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <AIParticles />
      </div>

      {/* HORIZONTAL INTERACTIVE SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50 print:hidden overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* HEADER / NAVIGATION BAR */}
      <header 
        id="navbar-container"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
          scrolled 
            ? 'glass-panel border-b border-neutral-200/50 dark:border-neutral-850/60 shadow-md backdrop-blur-md py-3 sm:py-4 px-4 sm:px-6 lg:px-8'
            : 'bg-transparent py-5 px-4 sm:px-6 lg:px-8 border-b border-transparent'
        } print:hidden`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Custom logo representing initials */}
          <button 
            onClick={() => {
              const isHome = window.location.pathname === '/' || window.location.pathname === '';
              if (!isHome) {
                handleBackToHome();
              } else {
                scrollToSection('hero');
              }
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center shadow-xs duration-200 group-hover:scale-105">
              {lang === 'vi' ? 'A' : 'A'}
            </div>
            <div className="text-left leading-none">
              <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-white">LÊ VÕ TUẤN ANH</span>
              <p className="text-[9px] text-neutral-450 dark:text-neutral-400 font-mono uppercase tracking-widest mt-0.5">
                {lang === 'vi' ? 'SỐ LAN TOẢ' : 'STRATEGIST'}
              </p>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-neutral-100/70 dark:bg-neutral-900/60 rounded-xl border border-neutral-200/40 dark:border-neutral-800/40 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs scale-102 font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Side Controls (Download CV actions + Language switches) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switch Button */}
            <div className="flex items-center bg-neutral-100 p-0.5 rounded-xl border border-neutral-220/70 shadow-xs">
              <button
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all duration-200 ${
                  lang === 'vi'
                    ? 'bg-white text-blue-600 shadow-xs ring-1 ring-neutral-200/20'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-white text-blue-600 shadow-xs ring-1 ring-neutral-200/20'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={() => setShowCvModal(true)}
              className="hidden sm:inline-flex px-4 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-transparent duration-200 cursor-pointer shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 flex items-center gap-1.5 whitespace-nowrap"
            >
              {lang === 'vi' ? 'Xem CV' : 'View CV'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation controls bottom sliding drawer */}
        <div className="mt-2.5 flex lg:hidden overflow-x-auto gap-1 pb-1 scrollbar-none scroll-smooth">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase shrink-0 transition-all duration-150 border cursor-pointer ${
                activeTab === item.id
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white shadow-xs'
                  : 'bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 border-neutral-150 dark:border-neutral-850'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* CORE SECTIONS */}
      <main className="relative z-10">
        {(() => {
          const isNdsv = currentRoute.toLowerCase().includes('netdepsinhvien');
          const isEmis = currentRoute.toLowerCase().includes('tiktokemi');

          const caseStudyMatch = currentRoute.match(/\/case-study\/([^/]+)/i);
          const activeCaseSlug = caseStudyMatch ? caseStudyMatch[1] : null;

          if (isNdsv) {
            return (
              <ProjectDetail
                projectId="project-ndsv"
                lang={lang}
                onBack={handleBackToHome}
              />
            );
          } else if (isEmis) {
            return (
              <ProjectDetail
                projectId="project-emis"
                lang={lang}
                onBack={handleBackToHome}
              />
            );
          } else if (activeCaseSlug) {
            return (
              <CaseDetail
                caseSlug={activeCaseSlug}
                lang={lang}
                onBack={handleBackToHome}
              />
            );
          } else {
            return (
              <>
                {/* 1. Hero Section */}
                <Hero 
                  lang={lang}
                  onScrollToSection={scrollToSection} 
                  onOpenCvModal={() => setShowCvModal(true)} 
                />
                
                {/* 2. About Section */}
                <About lang={lang} />

                {/* 3. Skills Section */}
                <Skills lang={lang} />

                {/* 4. Experience Section */}
                <Experience lang={lang} />

                {/* 5. Projects Section */}
                <Projects lang={lang} />

                {/* 6. Self-Research Marketing Cases */}
                <MarketingCases lang={lang} />

                {/* 7. AI-Powered Workflow Column Section */}
                <Workflow lang={lang} />

                {/* 8. Certifications Section */}
                <Certifications lang={lang} />

                {/* 9. Contact Section */}
                <Contact lang={lang} onOpenCvModal={() => setShowCvModal(true)} />
              </>
            );
          }
        })()}
      </main>

      {/* PORTFOLIO FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-900/60 bg-neutral-50 dark:bg-[#080b13] relative overflow-hidden print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="text-center md:text-left">
            <span className="font-extrabold text-base tracking-tight text-neutral-900 dark:text-white">LÊ VÕ TUẤN ANH</span>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm">
              {lang === 'vi' 
                ? 'Social Media Specialist, Content Creator & Chiến lược gia Sáng tạo AI.'
                : 'Social Media Specialist, Content Creator & AI-Driven Creative Strategist.'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-neutral-550 dark:text-neutral-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="text-center md:text-right font-mono text-[10px] text-neutral-500">
            <p>© {new Date().getFullYear()} Lê Võ Tuấn Anh. {lang === 'vi' ? 'Mọi quyền được bảo lưu.' : 'All rights reserved.'}</p>
            <p className="mt-1 text-slate-400">{lang === 'vi' ? 'Thiết kế bởi Senior UI Developer' : 'Designed by Senior UI Developer'}</p>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE MODALS OVERLAYS */}
      <AnimatePresence>
        {showCvModal && (
          <CvPreviewModal lang={lang} onClose={() => setShowCvModal(false)} />
        )}
      </AnimatePresence>

      {/* FLOATING ACTION BOTTOM UP BUTTON FOR CONVENIENCE */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-30 p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 cursor-pointer duration-200 border border-blue-500/10 hover:translate-y-[-2px] focus:outline-none print:hidden"
            aria-label="Cuộn lên đầu trang"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
