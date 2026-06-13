import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlowWrapper from './GlowWrapper';
import { projectsTranslations, projectsDataVi, projectsDataEn } from '../translations';
import emisVideo from '../assets/emis-v4.mp4';
import {
  BarChart3,
  Users,
  VideoIcon,
  Eye,
  Percent,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Play,
  Pause
} from 'lucide-react';

interface ProjectsProps {
  lang: 'vi' | 'en';
}

// Per-project visual config for consistent media headers
const projectVisuals: Record<string, { gradient: string; label: string; isVideo?: boolean }> = {
  'project-ndsv': { gradient: 'from-blue-600 to-indigo-700', label: 'CAMPAIGN' },
  'project-emis': { gradient: 'from-pink-500 to-orange-500', label: 'TIKTOK GROWTH', isVideo: true }
};

function ProjectCoverHeader({ projectId }: { projectId: string }) {
  const vis = projectVisuals[projectId];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  if (vis?.isVideo) {
    const toggle = () => {
      if (!videoRef.current) return;
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    };
    return (
      <div className="relative h-44 bg-neutral-900 overflow-hidden group">
        <video
          ref={videoRef}
          src={emisVideo}
          className="w-full h-full object-cover opacity-80"
          loop
          playsInline
          muted={false}
          onEnded={() => setPlaying(false)}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <button
            onClick={toggle}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 cursor-pointer"
          >
            {playing
              ? <Pause className="w-5 h-5 text-white" />
              : <Play className="w-5 h-5 text-white ml-0.5" />
            }
          </button>
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold rounded-full tracking-widest font-mono">
          VIDEO PREVIEW
        </span>
      </div>
    );
  }

  return (
    <div className={`relative h-28 bg-gradient-to-br ${vis?.gradient ?? 'from-blue-600 to-indigo-700'} overflow-hidden`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white/10 rounded-full translate-y-1/2" />
      <div className="absolute bottom-4 left-6">
        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest font-mono">
          {vis?.label ?? 'PROJECT'}
        </span>
      </div>
    </div>
  );
}

export default function Projects({ lang }: ProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | null>('project-ndsv');
  const t = projectsTranslations[lang];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getMetricIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('thí sinh') || l.includes('contestants') || l.includes('member') || l.includes('thành viên')) return <Users className="w-4 h-4 text-sky-500" />;
    if (l.includes('video')) return <VideoIcon className="w-4 h-4 text-orange-500" />;
    if (l.includes('lượt xem') || l.includes('views')) return <Eye className="w-4 h-4 text-purple-500" />;
    if (l.includes('tương tác') || l.includes('engagement') || l.includes('follower') || l.includes('tỉ lệ') || l.includes('rate')) return <Percent className="w-4 h-4 text-emerald-500" />;
    return <BarChart3 className="w-4 h-4 text-blue-500" />;
  };

  const projectsData = lang === 'vi' ? projectsDataVi : projectsDataEn;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-50/20 border-y border-neutral-100/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-full">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight dark:text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-sm text-neutral-500 mt-4 max-w-xl mx-auto font-light">
            {t.desc}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Layout - Grid list of 2 primary big bento cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {projectsData.map((project, index) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="w-full h-full"
              >
                <GlowWrapper
                  glowColor="rgba(59, 130, 246, 0.12)"
                  enableTilt={!isExpanded}
                  tiltMax={2}
                  className={`glass-panel rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 bg-white relative border h-full ${
                    isExpanded 
                      ? 'border-blue-500/40 shadow-xl ring-1 ring-blue-500/5' 
                      : 'border-neutral-220 hover:border-neutral-350 shadow-md'
                  }`}
                >
                {/* Media cover header — video for EMIS, gradient for NDSV */}
                <ProjectCoverHeader projectId={project.id} />

                <div className="p-6 sm:p-8">
                  {/* Meta Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-blue-500 translate-y-[-0.5px]" />
                      <span className="text-[10px] font-bold text-neutral-400 font-mono tracking-widest">LIVE CASE STUDY</span>
                    </div>
                  </div>

                  {/* Info block */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-605 mb-4 tracking-wide leading-relaxed">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light mb-8">
                    {project.description}
                  </p>

                  {/* Metrics Dashboard Representation */}
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 font-mono">
                      {lang === 'vi' ? 'CHỈ SỐ HIỆU QUẢ CỐT LÕI (KPIs)' : 'CORE PERFORMANCE METRICS (KPIs)'}
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map((metric, mIndex) => (
                        <div 
                          key={mIndex} 
                          className="bg-neutral-50/50 border border-neutral-150 p-4 rounded-2xl flex items-center gap-3 hover:translate-y-[-2px] duration-200"
                        >
                          <div className="p-2.5 bg-white border border-neutral-200/50 rounded-xl shadow-xs shrink-0">
                            {getMetricIcon(metric.label)}
                          </div>
                          <div>
                            <p className="text-base sm:text-lg font-extrabold text-neutral-950 leading-tight font-mono">
                              {metric.value}
                            </p>
                            <p className="text-[10px] text-neutral-500 mt-0.5 leading-none">
                              {metric.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons row */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Brand new View details button */}
                    <button
                      onClick={() => {
                        const path = project.id === 'project-ndsv' ? '/NetdepsinhvienD.A.U2023' : '/Tiktokemi\'sdananggrowth';
                        window.history.pushState({}, '', path);
                        window.dispatchEvent(new Event('pushstate-changed'));
                      }}
                      className="flex-1 py-3.5 px-5 rounded-2xl border border-blue-200 hover:border-blue-300 bg-blue-50/20 hover:bg-blue-50/50 text-blue-700 text-xs font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:scale-101 active:scale-99"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {lang === 'vi' ? 'Xem chi tiết' : 'View Details'}
                    </button>

                    {/* Toggle Accordion Button */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className={`flex-1 py-3.5 px-5 rounded-2xl border flex items-center justify-between text-xs font-bold cursor-pointer transition-colors duration-200 hover:scale-101 active:scale-99 ${
                        isExpanded 
                          ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-500 shadow-md' 
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-blue-600'}`} />
                        {isExpanded ? (lang === 'vi' ? 'Thu gọn' : 'Collapse') : (lang === 'vi' ? 'Bản kế hoạch AI' : 'AI Breakdown')}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expandable Case Narrative Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="space-y-4 pt-4 border-t border-dashed border-neutral-200">
                          {/* 1. Challenge */}
                          <div className="bg-orange-50/30 border border-orange-100/50 p-4 rounded-2xl flex gap-3.5">
                            <div className="p-2 rounded-xl bg-orange-100 text-orange-600 shrink-0 h-9 w-9 flex items-center justify-center">
                              <AlertCircle className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <h5 className="text-xs font-bold text-orange-850 uppercase tracking-wider font-mono">
                                {lang === 'vi' ? 'Thử thách chiến dịch' : 'Campaign Challenge'}
                              </h5>
                              <p className="text-xs sm:text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                                {project.challenge}
                              </p>
                            </div>
                          </div>

                          {/* 2. Strategy */}
                          <div className="bg-blue-50/30 border border-blue-100/50 p-4 rounded-2xl flex gap-3.5">
                            <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0 h-9 w-9 flex items-center justify-center">
                              <Lightbulb className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <h5 className="text-xs font-bold text-blue-850 uppercase tracking-wider font-mono">
                                {lang === 'vi' ? 'Chiến lược thực thi' : 'Execution Strategy'}
                              </h5>
                              <p className="text-xs sm:text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                                {project.strategy}
                              </p>
                            </div>
                          </div>

                          {/* 3. AI Automation */}
                          <div className="bg-purple-50/30 border border-purple-100/50 p-4 rounded-2xl flex gap-3.5">
                            <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0 h-9 w-9 flex items-center justify-center">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <h5 className="text-xs font-bold text-purple-850 uppercase tracking-wider font-mono">
                                {lang === 'vi' ? 'Tích hợp Generative AI' : 'Generative AI Integration'}
                              </h5>
                              <p className="text-xs sm:text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                                {project.aiImplementation}
                              </p>
                            </div>
                          </div>

                          {/* 4. Lesson Learned */}
                          <div className="bg-emerald-50/30 border border-emerald-100/50 p-4 rounded-2xl flex gap-3.5">
                            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0 h-9 w-9 flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <h5 className="text-xs font-bold text-emerald-850 uppercase tracking-wider font-mono">
                                {lang === 'vi' ? 'Đúc kết (Takeaways)' : 'Takeaways & Business Outcome'}
                              </h5>
                              <p className="text-xs sm:text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                                {project.takeaway}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tags and card bottom details */}
                <div className="p-5 bg-neutral-50/70 border-t border-neutral-150 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-2.5 py-1 bg-white border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-650"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </GlowWrapper>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
