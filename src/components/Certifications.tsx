import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certificationsTranslations, certificationsDataVi, certificationsDataEn } from '../translations';
import { ChevronDown, ChevronUp, FileBadge, Calendar, ExternalLink, Sparkles } from 'lucide-react';

interface CertificationsProps {
  lang: 'vi' | 'en';
}

export default function Certifications({ lang }: CertificationsProps) {
  const [expandedId, setExpandedId] = useState<string | null>('cert-1'); // Default first expanded
  const t = certificationsTranslations[lang];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const certificationsData = lang === 'vi' ? certificationsDataVi : certificationsDataEn;

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-full">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-450 mt-4 max-w-xl mx-auto font-light">
            {t.desc}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Expandable Certifications Stack */}
        <div className="space-y-4">
          {certificationsData.map((cert) => {
            const isExpanded = expandedId === cert.id;
            return (
              <div 
                key={cert.id}
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isExpanded 
                    ? 'border-blue-500/60 dark:border-blue-500/50 bg-white dark:bg-neutral-900 shadow-md ring-1 ring-blue-500/10' 
                    : 'border-neutral-200/60 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-750'
                }`}
              >
                {/* Accordion header click to toggle */}
                <button
                  onClick={() => toggleExpand(cert.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border shrink-0 transition-colors duration-300 ${
                      isExpanded 
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' 
                        : 'bg-neutral-50 dark:bg-neutral-850 text-neutral-500 border-neutral-200/55 dark:border-neutral-800/50'
                    }`}>
                      <FileBadge className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-neutral-550 dark:text-neutral-400 mt-1 flex items-center gap-1">
                        {lang === 'vi' ? 'Cấp bởi' : 'Issued by'}{' '}
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-[10px] text-neutral-500 rounded-lg uppercase font-mono tracking-wide">
                      <Calendar className="w-3 h-3" /> {cert.date}
                    </span>
                    <div className="p-1 rounded-full bg-neutral-50 dark:bg-neutral-850 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-250 dark:border-neutral-800">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-neutral-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-500" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Animated expandable panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t border-neutral-150 dark:border-neutral-850"
                    >
                      <div className="p-5 sm:p-6 bg-neutral-50/40 dark:bg-neutral-900/40 space-y-4">
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-light">
                          {cert.description}
                        </p>

                        {/* Demonstrated Skills Chips */}
                        <div className="pt-3">
                          <h4 className="text-xs font-bold text-neutral-450 dark:text-neutral-505 uppercase tracking-widest mb-2.5 flex items-center gap-1.5 font-mono">
                            <Sparkles className="w-3.5 h-3.5 text-blue-500" />{' '}
                            {lang === 'vi' ? 'Năng lực được chứng minh' : 'Demonstrated Capabilities'}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {cert.skillsDemonstrated.map((skill, index) => (
                              <span 
                                key={index}
                                className="px-2.5 py-1 bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/80 rounded-lg text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
