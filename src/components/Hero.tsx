import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Send, MapPin, Layers, Award, Sparkles, FolderOpen } from 'lucide-react';
import { heroTranslations } from '../translations';
import TuanAnhPortrait from '../assets/images/anh.jpg';
import TextScramble from './TextScramble';
import GlowWrapper from './GlowWrapper';

/* ─── Magnetic Button ─────────────────────────────────────────────────────── */
function MagneticBtn({
  children, className, onClick, href, target, rel,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const idle = xy.x === 0 && xy.y === 0;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setXY({ x: (e.clientX - r.left - r.width / 2) * 0.22, y: (e.clientY - r.top - r.height / 2) * 0.22 });
  };
  const handleLeave = () => setXY({ x: 0, y: 0 });

  const magStyle: React.CSSProperties = {
    transform: `translate(${xy.x}px, ${xy.y}px)`,
    transition: idle ? 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease',
  };

  if (href) return (
    <a href={href} target={target} rel={rel} className={className} style={magStyle}
      onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </a>
  );
  return (
    <button className={className} style={magStyle} onClick={onClick}
      onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}

interface HeroProps {
  lang: 'vi' | 'en';
  onScrollToSection: (sectionId: string) => void;
  onOpenCvModal: () => void;
}

export default function Hero({ lang, onScrollToSection, onOpenCvModal }: HeroProps) {
  const t = heroTranslations[lang];
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Figma-style premium technical dot grid background */}
      <div className="absolute inset-0 decorative-grid-dots opacity-100 pointer-events-none" />
      
      {/* Dynamic blurred creative energy blobs */}
      <div className="absolute top-12 left-1/12 w-96 h-96 rounded-full decorative-blob-blue blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute bottom-12 right-1/12 w-[450px] h-[450px] rounded-full decorative-blob-purple blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full decorative-blob-emerald blur-3xl opacity-60 pointer-events-none" />

      {/* Structured decorative thin grid border accents to enrich the sides */}
      <div className="absolute top-0 bottom-0 left-8 sm:left-12 lg:left-16 w-px bg-neutral-100/60 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-8 sm:right-12 lg:right-16 w-px bg-neutral-100/60 hidden sm:block" />
      
      {/* Elegant geometric accents on left and right borders */}
      <div className="absolute top-44 left-8 sm:left-12 lg:left-16 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 hidden sm:block animate-pulse" />
      <div className="absolute top-80 right-8 sm:right-12 lg:right-16 w-2 h-2 bg-purple-500 rounded-full transform translate-x-1/2 hidden sm:block" />
      
      {/* Mesh grid pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 w-full flex flex-col justify-between h-full gap-12 sm:gap-16">
        
        {/* Main Content Info columns (Split Layout on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pt-6">
          
          {/* LEFT COLUMN: Text Info & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Available Action Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-50/90 border border-neutral-220/80 shadow-xs backdrop-blur-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-neutral-650 flex items-center gap-1">
                {t.badge} <span className="text-neutral-300">|</span> <MapPin className="w-3.5 h-3.5 text-neutral-450 inline" /> {t.location}
              </span>
            </motion.div>

            {/* Title Headings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-blue-600 uppercase font-mono">
                {t.subtitle}
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
                <TextScramble
                  text="LÊ VÕ TUẤN ANH"
                  duration={1.2}
                  className="bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 bg-clip-text text-transparent"
                />
              </h1>
              
              {/* Specialized Tag row */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-700 border border-amber-200/50 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Marketing
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-700 border border-blue-200/50 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Social Specialist
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 border border-emerald-200/50 rounded-lg text-xs font-bold uppercase tracking-wide">
                  Content Creator
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-700 border border-purple-200/50 rounded-lg text-xs font-bold uppercase tracking-wide">
                  AI Creative Strategist
                </span>
              </div>
            </motion.div>

            {/* Introduction paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed font-light"
            >
              {t.description}
            </motion.p>

            {/* Action buttons list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <MagneticBtn
                onClick={() => onScrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-neutral-900 text-white hover:bg-neutral-800 duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                {t.btnProjects} <ArrowRight className="w-4 h-4" />
              </MagneticBtn>

              <MagneticBtn
                onClick={onOpenCvModal}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white border border-neutral-220 text-neutral-800 hover:bg-neutral-50 duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
              >
                {t.btnCv} <Download className="w-4 h-4" />
              </MagneticBtn>

              <MagneticBtn
                href="https://drive.google.com/drive/folders/1OrxgSeRFzbSh2fEPbzKawApqq8nATJDg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <FolderOpen className="w-4 h-4" />
                {lang === 'vi' ? 'Sản phẩm' : 'My Works'}
              </MagneticBtn>

              <MagneticBtn
                onClick={() => onScrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                {t.btnContact} <Send className="w-4 h-4" />
              </MagneticBtn>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Creative Portrait Photo Card Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Ambient Background Glow ring behind photo */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl pointer-events-none transform scale-90" />
            
            {/* Creative Framing Graphic container wrapped in dynamic cursor tracker */}
            <GlowWrapper
              enableTilt={true}
              tiltMax={3.5}
              glowSize={350}
              glowColor="rgba(59, 130, 246, 0.15)"
              className="relative w-80 h-[380px] sm:w-[350px] sm:h-[420px] rounded-3xl p-3 bg-white border border-neutral-220/80 shadow-2xl flex items-center justify-center group overflow-hidden cursor-pointer"
            >
              
              {/* Inner thin absolute tech outline */}
              <div className="absolute inset-2 border border-neutral-100/60 rounded-2xl pointer-events-none z-10" />

              {/* Rotating circular graphic in background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                className="absolute inset-0 border border-dashed border-blue-500/10 rounded-full scale-110 pointer-events-none"
              />

              {/* Skeleton loading placeholder */}
              {!imgLoaded && (
                <div className="absolute inset-3 z-[5] bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 rounded-2xl animate-pulse" />
              )}

              {/* The high quality generated portrait */}
              <img
                src={TuanAnhPortrait}
                alt="Portrait of Lê Võ Tuấn Anh"
                className={`w-full h-full object-cover object-top rounded-2xl transition-all duration-700 group-hover:scale-102 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoaded(true)}
              />

              {/* Floating micro achievement cards overlays */}
              <div className="absolute top-8 -left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-neutral-200 shadow-lg z-20 flex items-center gap-2">
                <div className="p-1.5 bg-blue-500/15 rounded-lg text-blue-600">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-neutral-850">
                    {lang === 'vi' ? 'Giải Ba Video' : '3rd Prize Video'}
                  </p>
                  <p className="text-[8px] text-neutral-450 uppercase tracking-widest font-mono">
                    {lang === 'vi' ? 'Sự Kiện 2024' : 'Event 2024'}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-8 -right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-neutral-200 shadow-lg z-20 flex items-center gap-2">
                <div className="p-1.5 bg-emerald-500/15 rounded-lg text-emerald-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-neutral-850">0 VNĐ Ads</p>
                  <p className="text-[8px] text-neutral-400">Organic Growth</p>
                </div>
              </div>

              {/* Custom floating strategic rotation wheel */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center shadow-lg pointer-events-none z-20"
              >
                <svg className="w-12 h-12" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[11px] font-mono font-bold tracking-widest fill-white">
                    <textPath href="#circlePath">
                      CREATIVE • AI • WORK •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

            </GlowWrapper>
          </motion.div>

        </div>

        {/* BOTTOM SECTION: Floating Quick Stats cards (Row layout) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full pt-12 border-t border-dashed border-neutral-200"
        >
          <GlowWrapper glowColor="rgba(59, 130, 246, 0.12)" enableTilt={true} tiltMax={1.5} className="rounded-2xl">
            <div className="glass-panel p-5 rounded-2xl bg-white border border-neutral-220 shadow-xs flex items-center gap-4 hover:border-blue-500/30 duration-300 h-full">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 border border-blue-100 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-extrabold text-neutral-950 font-sans tracking-tight">
                  {t.stat1Val}
                </p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">{t.stat1Lbl}</p>
              </div>
            </div>
          </GlowWrapper>
          
          <GlowWrapper glowColor="rgba(139, 92, 246, 0.12)" enableTilt={true} tiltMax={1.5} className="rounded-2xl">
            <div className="glass-panel p-5 rounded-2xl bg-white border border-neutral-220 shadow-xs flex items-center gap-4 hover:border-purple-500/30 duration-300 h-full">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 border border-purple-100 shrink-0">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-extrabold text-neutral-950 font-sans tracking-tight">
                  {t.stat2Val}
                </p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">{t.stat2Lbl}</p>
              </div>
            </div>
          </GlowWrapper>

          <GlowWrapper glowColor="rgba(16, 185, 129, 0.12)" enableTilt={true} tiltMax={1.5} className="rounded-2xl">
            <div className="glass-panel p-5 rounded-2xl bg-white border border-neutral-220 shadow-xs flex items-center gap-4 hover:border-emerald-500/30 duration-300 h-full">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 border border-emerald-100 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-extrabold text-neutral-950 font-sans tracking-tight">
                  {t.stat3Val}
                </p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">{t.stat3Lbl}</p>
              </div>
            </div>
          </GlowWrapper>
        </motion.div>

      </div>
      
      {/* Accent Linear lines in background and sides */}
      <div className="absolute top-[85%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-neutral-150 to-transparent transform -rotate-1 hidden sm:block" />
    </section>
  );
}
