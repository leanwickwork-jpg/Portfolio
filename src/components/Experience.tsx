import React from 'react';
import { motion } from 'motion/react';
import { experiencesDataVi, experiencesDataEn } from '../translations';
import { Calendar, Briefcase, MapPin, CheckCircle2, Video, Sparkles, Building, Play, Compass } from 'lucide-react';

const experienceDesignMeta: Record<string, { 
  tags: string[]; 
  bgColor: string; 
  iconBg: string; 
  textColor: string; 
  borderColor: string;
  glowColor: string;
  icon: React.ComponentType<{ className?: string }>;
}> = {
  'exp-bprod': {
    tags: ["Social Media Strategy", "AI Scripting", "TikTok SEO", "CapCut Pro"],
    bgColor: "bg-blue-50/50 hover:bg-blue-50/80",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-200",
    textColor: "text-blue-600",
    borderColor: "group-hover:border-blue-300",
    glowColor: "shadow-blue-500/5",
    icon: Video
  },
  'exp-mocha': {
    tags: ["Video Editing", "Content Creation", "Gen Z Trends", "Retention Opt"],
    bgColor: "bg-orange-50/50 hover:bg-orange-50/80",
    iconBg: "bg-orange-500/10 text-orange-600 border-orange-200",
    textColor: "text-orange-600",
    borderColor: "group-hover:border-orange-300",
    glowColor: "shadow-orange-500/5",
    icon: Play
  },
  'exp-union': {
    tags: ["Event Management", "Graphic Design", "Social Engagement", "Copywriting"],
    bgColor: "bg-purple-50/50 hover:bg-purple-50/80",
    iconBg: "bg-purple-500/10 text-purple-600 border-purple-200",
    textColor: "text-purple-600",
    borderColor: "group-hover:border-purple-300",
    glowColor: "shadow-purple-500/5",
    icon: Building
  },
  'exp-dau': {
    tags: ["Creative Writing", "Campaign Directing", "Host/MC", "Public Relations"],
    bgColor: "bg-emerald-50/50 hover:bg-emerald-50/80",
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    textColor: "text-emerald-600",
    borderColor: "group-hover:border-emerald-300",
    glowColor: "shadow-emerald-500/5",
    icon: Compass
  }
};

interface ExperienceProps {
  lang: 'vi' | 'en';
}

export default function ExperienceTimeline({ lang }: ExperienceProps) {
  const experiencesData = lang === 'vi' ? experiencesDataVi : experiencesDataEn;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-y border-neutral-100 overflow-hidden">
      {/* Figma-style technical dot background decorator */}
      <div className="absolute inset-0 decorative-grid-dots opacity-80 pointer-events-none" />
      
      {/* Flowing background vector circles */}
      <div className="absolute top-1/4 left-5 w-80 h-80 rounded-full decorative-blob-blue blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-80 h-80 rounded-full decorative-blob-emerald blur-3xl opacity-60 pointer-events-none" />

      {/* Decorative vertical lines on sides to establish page rhythm */}
      <div className="absolute top-0 bottom-0 left-8 sm:left-12 lg:left-16 w-px bg-neutral-100/60 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-8 sm:right-12 lg:right-16 w-px bg-neutral-100/60 hidden sm:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 relative">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-full">
            {lang === 'vi' ? 'Hành trình nghề nghiệp' : 'Career Journey'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {lang === 'vi' ? 'Kinh Nghiệm Làm Việc' : 'Work Experience'}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
          
          {/* Subtle decorative geometric rectangle */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-dashed border-blue-500/10 pointer-events-none rounded-2xl" />
        </div>

        {/* Experience Timeline layout */}
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Central spine line for desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2" />
          
          <div className="space-y-16">
            {experiencesData.map((exp, index) => {
              const isEven = index % 2 === 0;
              const design = experienceDesignMeta[exp.id] || {
                tags: ["Marketing", "Social Media"],
                bgColor: "bg-neutral-50/50 hover:bg-neutral-50/80",
                iconBg: "bg-blue-500/10 text-blue-600 border-blue-200",
                textColor: "text-blue-600",
                borderColor: "group-hover:border-blue-300",
                glowColor: "shadow-blue-500/5",
                icon: Briefcase
              };
              const IconComponent = design.icon;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Spine Node point */}
                  <div className={`absolute left-6 md:left-1/2 top-6 w-10 h-10 rounded-xl bg-white border-2 border-neutral-200 flex items-center justify-center -translate-x-1/2 z-10 shadow-md group transition-all duration-300`}>
                    <IconComponent className={`w-5 h-5 ${design.textColor}`} />
                  </div>

                  {/* Left part (for desktop, alternates) */}
                  <div className={`w-full md:w-1/2 text-left ${
                    isEven 
                      ? 'md:text-left md:pl-16 md:pr-0 md:block' 
                      : 'md:text-right md:pr-16 md:pl-0 md:block'
                  }`}>
                    <div className="hidden md:block pt-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-semibold uppercase border border-neutral-200/50">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Right part (always shows the card, but on desktop layouts is Even card shows left, Odd card shows right) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-65px' }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`w-full md:w-1/2 pl-16 md:pl-16 ${
                      isEven ? 'md:-translate-x-px md:order-first md:pr-16 md:pl-0' : ''
                    }`}
                  >
                    <div className={`glass-panel p-6 sm:p-8 rounded-3xl ${design.bgColor} ${design.borderColor} border border-neutral-220 shadow-md ${design.glowColor} duration-300 relative group overflow-hidden`}>
                      {/* Left accent color bar to signify role category */}
                      <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${design.iconBg.split(' ')[1]} opacity-90`} />

                      {/* Floating technical coordinates to look creative and professional */}
                      <div className="absolute top-3 right-3 text-[9px] text-neutral-300 font-mono tracking-widest uppercase select-none group-hover:text-neutral-400">
                        ROLE-{index + 1}
                      </div>

                      {/* Triangle pointer indicator */}
                      <div className={`absolute top-7 w-3 h-3 bg-white border-t border-l border-neutral-200 transform rotate-45 hidden md:block ${
                        isEven ? '-right-1.5 border-t border-r border-[#e5e7eb00] border-l-0' : '-left-1.5'
                      }`} />
                      
                      {/* Mobile calendar info label */}
                      <div className="md:hidden mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-semibold uppercase border border-neutral-200/50">
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                        </span>
                      </div>

                      <div className="mb-5 pl-2">
                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 duration-200 leading-tight">
                          {exp.role}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2">
                          <p className="text-sm font-semibold text-neutral-700 flex items-center gap-1">
                            <Building className="w-3.5 h-3.5 text-neutral-400" /> {exp.company}
                          </p>
                          <span className="text-neutral-300 text-xs hidden sm:inline">•</span>
                          <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500 uppercase font-mono tracking-wider">
                            <MapPin className="w-3.5 h-3.5" /> {exp.location}
                          </span>
                        </div>

                        {/* Interactive decorative competency badges */}
                        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-dashed border-neutral-200">
                          {design.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white border border-neutral-200 text-neutral-600 group-hover:border-neutral-300 duration-200 shadow-2xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-3 pt-3 border-t border-neutral-200/80">
                        {exp.details.map((detail, dIndex) => (
                          <li key={dIndex} className="text-sm text-neutral-600 flex items-start gap-2.5 leading-relaxed font-light">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
