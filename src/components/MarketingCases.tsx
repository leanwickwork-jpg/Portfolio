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
  ExternalLink,
  Clock,
  FileText,
  Download,
  X
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

/* Estimate reading time based on visible card + detail content */
function estimateReadTime(cas: MarketingCase): number {
  const words = [
    cas.title,
    cas.description ?? '',
    ...(cas.points ?? []).map((p) => p.content),
  ].join(' ').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

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

interface PdfModalState {
  title: string;
  rawUrl: string;
  blobUrl: string | null;
  loading: boolean;
}

export default function MarketingCases({ lang }: MarketingCasesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pdfModal, setPdfModal] = useState<PdfModalState | null>(null);
  const t = marketingCasesTranslations[lang];
  const casesData = lang === 'vi' ? marketingCasesDataVi : marketingCasesDataEn;

  /** Fetch PDF → create blob URL so browser always renders inline (no auto-download) */
  const handleOpenPdf = async (rawUrl: string, title: string) => {
    setPdfModal({ title, rawUrl, blobUrl: null, loading: true });
    try {
      const res = await fetch(rawUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      setPdfModal({ title, rawUrl, blobUrl, loading: false });
    } catch {
      setPdfModal({ title, rawUrl, blobUrl: null, loading: false });
    }
  };

  const handleClosePdf = () => {
    if (pdfModal?.blobUrl) URL.revokeObjectURL(pdfModal.blobUrl);
    setPdfModal(null);
  };

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
                    {/* Self-study badge + period + read time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 bg-purple-500/10 text-purple-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {t.labelSelfStudy}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-[10px] text-neutral-400 font-mono">
                          <Clock className="w-3 h-3" />
                          {estimateReadTime(cas)} min
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono">{cas.period}</span>
                      </div>
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

                      {cas.pdfUrl && (
                        <button
                          onClick={() => handleOpenPdf(cas.pdfUrl!, cas.brand)}
                          className="flex-none py-3 px-4 rounded-2xl border border-red-200 hover:border-red-300 bg-red-50/40 hover:bg-red-50 text-red-700 text-xs font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          {lang === 'vi' ? 'Bản PDF' : 'PDF'}
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

      {/* ── PDF Preview Modal ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {pdfModal && (
          <motion.div
            key="pdf-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
            onClick={handleClosePdf}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm" />

            {/* Modal panel */}
            <motion.div
              key="pdf-panel"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl h-[88vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 bg-neutral-50 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-xl">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      {pdfModal.title} — {lang === 'vi' ? 'Phân tích Case Study' : 'Case Study Analysis'}
                    </p>
                    <p className="text-[10px] text-neutral-400 font-mono mt-0.5 uppercase tracking-widest">
                      PDF · {lang === 'vi' ? 'Toàn bộ nội dung nghiên cứu' : 'Full research document'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Download — only available once blob is ready */}
                  {pdfModal.blobUrl && (
                    <a
                      href={pdfModal.blobUrl}
                      download="KFC-Case-Study.pdf"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-all duration-200 shadow-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-3.5 h-3.5" />
                      {lang === 'vi' ? 'Tải về' : 'Download'}
                    </a>
                  )}
                  <button
                    onClick={handleClosePdf}
                    className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-all duration-200"
                    aria-label="Đóng"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF viewer area */}
              <div className="flex-1 relative overflow-hidden bg-neutral-100">
                {pdfModal.loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-neutral-50 z-10">
                    <div className="w-10 h-10 rounded-full border-4 border-red-200 border-t-red-600 animate-spin" />
                    <p className="text-xs text-neutral-500 font-medium">
                      {lang === 'vi' ? 'Đang tải tài liệu…' : 'Loading document…'}
                    </p>
                  </div>
                )}

                {!pdfModal.loading && pdfModal.blobUrl && (
                  <object
                    data={pdfModal.blobUrl}
                    type="application/pdf"
                    className="w-full h-full"
                    aria-label={`${pdfModal.title} PDF`}
                  >
                    {/* Fallback for browsers that block object/embed */}
                    <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                      <FileText className="w-12 h-12 text-neutral-300" />
                      <p className="text-sm text-neutral-600">
                        {lang === 'vi'
                          ? 'Trình duyệt của bạn không hỗ trợ xem PDF trực tiếp.'
                          : 'Your browser does not support inline PDF viewing.'}
                      </p>
                      <a
                        href={pdfModal.blobUrl}
                        download="KFC-Case-Study.pdf"
                        className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold"
                      >
                        <Download className="w-3.5 h-3.5 inline mr-1.5" />
                        {lang === 'vi' ? 'Tải về để xem' : 'Download to view'}
                      </a>
                    </div>
                  </object>
                )}

                {!pdfModal.loading && !pdfModal.blobUrl && (
                  <div className="flex flex-col items-center justify-center h-full gap-3 text-neutral-400">
                    <FileText className="w-10 h-10" />
                    <p className="text-sm">
                      {lang === 'vi' ? 'Không thể tải tài liệu.' : 'Failed to load document.'}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
