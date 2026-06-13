import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { workflowTranslations, workflowStepsVi, workflowStepsEn } from '../translations';
import { Search, Sparkles, Image, Video, Share2, BarChart3, ChevronRight, Check } from 'lucide-react';

interface WorkflowProps {
  lang: 'vi' | 'en';
}

export default function Workflow({ lang }: WorkflowProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const t = workflowTranslations[lang];

  const getStepIcon = (iconName: string, active: boolean) => {
    const sizeClass = "w-6 h-6";
    const colorClass = active ? "text-white" : "text-neutral-500 dark:text-neutral-400 group-hover:text-blue-500 duration-250";
    
    switch (iconName) {
      case 'Search': return <Search className={`${sizeClass} ${colorClass}`} />;
      case 'Sparkles': return <Sparkles className={`${sizeClass} ${colorClass}`} />;
      case 'Image': return <Image className={`${sizeClass} ${colorClass}`} />;
      case 'Video': return <Video className={`${sizeClass} ${colorClass}`} />;
      case 'Share2': return <Share2 className={`${sizeClass} ${colorClass}`} />;
      case 'BarChart3': return <BarChart3 className={`${sizeClass} ${colorClass}`} />;
      default: return <Sparkles className={`${sizeClass} ${colorClass}`} />;
    }
  };

  const workflowSteps = lang === 'vi' ? workflowStepsVi : workflowStepsEn;
  const currStepData = workflowSteps.find(s => s.id === activeStep) || workflowSteps[0];

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-900 text-white overflow-hidden rounded-[40px] mx-4 sm:mx-6 md:mx-8 my-12 shadow-2xl">
      {/* Visual neon light backgrounds */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Dot matrix overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-full">
            AI WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-450 mt-4 max-w-xl mx-auto font-light">
            {t.desc}
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Workflow Nodes Progress bar */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          {/* Connector line behind */}
          <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-neutral-800 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
            {workflowSteps.map((step) => {
              const isActive = step.id === activeStep;
              const isPast = step.id < activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Circle Node Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/20 scale-110' 
                      : isPast
                        ? 'bg-neutral-900 border-blue-600 text-blue-500'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-500 group-hover:border-neutral-700'
                  }`}>
                    {getStepIcon(step.icon, isActive)}
                  </div>

                  {/* Tiny Label text */}
                  <span className={`text-[10px] mt-3 font-semibold uppercase tracking-wider text-center transition-colors duration-250 ${
                    isActive ? 'text-blue-400' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    {step.englishTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Panel display display detailing recipes */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-neutral-950/70 border border-neutral-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Highlight / Metric / Summary badge */}
              <div className="md:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-widest block mb-2">
                    {lang === 'vi' ? 'BƯỚC' : 'STEP'} {currStepData.id} / 6
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">
                    {currStepData.title}
                  </h3>
                </div>

                <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/25">
                  <p className="text-xs text-neutral-450 uppercase font-mono font-semibold tracking-wider">
                    {lang === 'vi' ? 'HIỆU SUẤT ĐẠT ĐƯỢC' : 'OUTCOME TARGET'}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-blue-400 mt-1 font-sans">
                    {currStepData.highlight}
                  </p>
                </div>
              </div>

              {/* Specific details points */}
              <div className="md:col-span-8 space-y-5">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {currStepData.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                    {lang === 'vi' ? 'QUY TRÌNH THỰC THI CHI TIẾT' : 'DETAILED WORKFLOW SPECIFICATION'}
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-2.5">
                    {currStepData.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400 font-light">
                        <div className="p-1 rounded bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
