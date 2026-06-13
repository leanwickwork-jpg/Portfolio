import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlowWrapper from './GlowWrapper';
import { marketingCasesTranslations, marketingCasesDataVi, marketingCasesDataEn } from '../translations';
import { MarketingCase } from '../types';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Star,
  Tag,
  Layers,
  ExternalLink
} from 'lucide-react';

interface MarketingCasesProps {
  lang: 'vi' | 'en';
}

const pointIcons = {
  challenge: { icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-100/50', section: 'bg-orange-50/30' },
  strategy: { icon: Lightbulb, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-100/50', section: 'bg-blue-50/30' },
  result: { icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-100/50', section: 'bg-emerald-50/30' },
  insight: { icon: Star, color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-100/50', section: 'bg-purple-50/30' }
};

function CoverHeader({ cas }: { cas: MarketingCase }) {
  const initials = cas.brand.slice(0, 2).toUpperCase();
  return (
    <div className={`relative h-28 bg-gradient-to-br ${cas.coverGradient} flex items-end px-6 pb-4 overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white/10 rounded-full translate-y-1/2" />
      {/* Brand badge */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0">
          <span className="text-white font-extrabold text-lg tracking-tight">{initials}</span>
        </div>
        <div>
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest font-mono">
            {cas.industry}
          </p>
          <p className="text-white font-extrabold text-base leading-tight">{cas.brand}</p>
        </div>
      </div>
    </div>
  );
}

export default function MarketingCases({ lang }: MarketingCasesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const t = marketingCasesTranslations[lang];
  const casesData = lang === 'vi' ? marketingCasesDataVi : marketingCasesDataEn;

  const pointLabels: Record<string, string> = {
    challenge: t.labelChallenge,
    strategy: t.labelStrategy,
    result: t.labelResult,
    insight: t.labelInsight
  };

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-y border-neutral-100/80">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase inline-flex items-center gap-2 mb-3 px-3 py-1 bg-purple-500/10 rounded-full">
            <BookOpen className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="text-sm text-neutral-500 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            {t.desc}
          </p>
          <div className="w-12 h-1 bg-purple-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Cases grid — 2 columns on lg, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {casesData.map((cas, index) => {
            const isExpanded = expandedId === cas.id;
            return (
              <motion.div
                key={cas.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <GlowWrapper
                  glowColor="rgba(139, 92, 246, 0.1)"
                  enableTilt={!isExpanded}
                  tiltMax={2}
                  className={`glass-panel rounded-3xl overflow-hidden flex flex-col bg-white transition-all duration-300 border ${
                    isExpanded
                      ? 'border-purple-400/40 shadow-xl ring-1 ring-purple-500/5'
                      : 'border-neutral-200 hover:border-neutral-300 shadow-md'
                  }`}
                >
                  {/* Gradient cover header */}
                  <CoverHeader cas={cas} />

                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Self-study badge + period */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 bg-purple-500/10 text-purple-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {t.labelSelfStudy}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">{cas.period}</span>
                    </div>

                    {/* Title & description */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-neutral-950 mb-3 leading-tight">
                      {cas.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-light mb-6">
                      {cas.description}
                    </p>

                    {/* Frameworks row */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Layers className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                          {t.labelFrameworks}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cas.frameworks.map((fw, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-lg text-[10px] font-semibold"
                          >
                            {fw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons row */}
                    <div className="flex gap-2 mb-3">
                      {cas.detailSlug && (
                        <button
                          onClick={() => {
                            window.history.pushState({}, '', `/case-study/${cas.detailSlug}`);
                            window.dispatchEvent(new Event('pushstate-changed'));
                          }}
                          className="flex-1 py-3 px-4 rounded-2xl border border-purple-200 hover:border-purple-300 bg-purple-50/30 hover:bg-purple-50 text-purple-700 text-xs font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {cas.detail ? (lang === 'vi' ? 'Xem phân tích đầy đủ' : 'View Full Analysis') : (lang === 'vi' ? 'Xem chi tiết' : 'View Details')}
                        </button>
                      )}
                    </div>

                    {/* Toggle button */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : cas.id)}
                      className={`w-full py-3.5 px-5 rounded-2xl border flex items-center justify-between text-xs font-bold cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                        isExpanded
                          ? 'bg-purple-600 text-white border-purple-600 hover:bg-purple-500 shadow-md'
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-purple-600'}`} />
                        {isExpanded ? t.btnCollapse : t.btnExpand}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Expandable analysis panel */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pt-5 mt-5 border-t border-dashed border-neutral-200">
                            {cas.points.map((point, pIdx) => {
                              const cfg = pointIcons[point.icon];
                              const IconComp = cfg.icon;
                              return (
                                <div
                                  key={pIdx}
                                  className={`${cfg.section} border ${cfg.border} p-4 rounded-2xl flex gap-3.5`}
                                >
                                  <div className={`p-2 rounded-xl ${cfg.bg} ${cfg.color} shrink-0 h-9 w-9 flex items-center justify-center`}>
                                    <IconComp className="w-4 h-4" />
                                  </div>
                                  <div className="text-left">
                                    <h5 className={`text-xs font-bold uppercase tracking-wider font-mono ${cfg.color}`}>
                                      {pointLabels[point.icon]}
                                    </h5>
                                    <p className="text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                                      {point.content}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tags footer */}
                  <div className="px-6 pb-5 flex flex-wrap gap-1.5">
                    <Tag className="w-3 h-3 text-neutral-400 mt-0.5 shrink-0" />
                    {cas.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-white border border-neutral-200 rounded-lg text-[10px] font-semibold text-neutral-550"
                      >
                        {tag}
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
