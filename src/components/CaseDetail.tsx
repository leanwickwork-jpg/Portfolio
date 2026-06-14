import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft, Layers, Target, AlertCircle, Lightbulb, TrendingUp, Star,
  BookOpen, ExternalLink, ChevronRight, BarChart3, Zap, Quote
} from 'lucide-react';
import { marketingCasesDataVi, marketingCasesDataEn } from '../translations';
import { MarketingCase, MarketingCaseDetailData } from '../types';

interface CaseDetailProps {
  caseSlug: string;
  lang: 'vi' | 'en';
  onBack: () => void;
}

// ── Pratfall Effect Chart ────────────────────────────────────────────────────
function PratfallChart({ lang, brandName }: { lang: 'vi' | 'en'; brandName?: string }) {
  const peak = brandName ?? 'KFC';
  const labels = lang === 'vi'
    ? { x1: 'Bình thường', x2: 'Cố tỏ ra\nhoàn hảo', x3: 'Tự nhận\nkhuyết điểm', y: 'Brand Affection', peak }
    : { x1: 'Average', x2: 'Trying to be\nperfect', x3: 'Self-admitting\nflaws', y: 'Brand Affection', peak };

  return (
    <div className="bg-white border border-neutral-100 rounded-2xl p-6">
      <div className="relative h-52">
        {/* Y axis label */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono whitespace-nowrap origin-center">
          {labels.y} ↑
        </div>
        {/* Chart area */}
        <svg viewBox="0 0 320 160" className="w-full h-full ml-4" preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          <line x1="30" y1="140" x2="310" y2="140" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="30" y1="20"  x2="30"  y2="140" stroke="#e5e7eb" strokeWidth="1.5"/>
          {/* Curve path: dips at middle (competitors), peaks at right (KFC) */}
          <path
            d="M 40 110 C 80 100, 100 130, 155 125 C 200 120, 220 30, 290 22"
            fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"
          />
          {/* Fill under curve */}
          <path
            d="M 40 110 C 80 100, 100 130, 155 125 C 200 120, 220 30, 290 22 L 290 140 L 40 140 Z"
            fill="#fef2f2" opacity="0.6"
          />
          {/* KFC peak dot */}
          <circle cx="290" cy="22" r="5" fill="#dc2626"/>
          <text x="264" y="16" fontSize="10" fill="#dc2626" fontWeight="bold">{labels.peak} ↑</text>
          {/* Competitors dip dot */}
          <circle cx="155" cy="125" r="4" fill="#94a3b8"/>
          {/* X axis tick labels */}
          <text x="35"  y="155" fontSize="9" fill="#94a3b8" textAnchor="middle">{labels.x1}</text>
          <text x="155" y="155" fontSize="9" fill="#94a3b8" textAnchor="middle">{labels.x2.split('\n')[0]}</text>
          <text x="290" y="155" fontSize="9" fill="#dc2626" fontWeight="bold" textAnchor="middle">{labels.x3.split('\n')[0]}</text>
        </svg>
      </div>
      <p className="text-[10px] text-neutral-400 text-center mt-1 font-mono">
        {lang === 'vi' ? '* Đường cong Brand Affection theo mức độ tự nhận khuyết điểm' : '* Brand Affection curve by self-admitted imperfection level'}
      </p>
    </div>
  );
}

// ── Brand Funnel Visual ──────────────────────────────────────────────────────
function BrandFunnel({ lang, formula }: { lang: 'vi' | 'en'; formula?: string }) {
  const tiers = lang === 'vi'
    ? ['Awareness (Nhận biết)', 'Consideration (Cân nhắc)', 'Preference (Ưu tiên)']
    : ['Awareness', 'Consideration', 'Preference'];
  const widths = ['100%', '70%', '45%'];
  return (
    <div className="bg-white border border-neutral-100 rounded-2xl p-6 space-y-3">
      {tiers.map((tier, i) => (
        <div key={i} className="mx-auto transition-all" style={{ width: widths[i] }}>
          <div className={`rounded-xl px-4 py-3 flex items-center justify-center text-xs font-bold border ${
            i === 0
              ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-500/30 ring-2 ring-red-400/30'
              : i === 1
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-neutral-50 text-neutral-600 border-neutral-200'
          }`}>
            {i === 0 && <Zap className="w-3.5 h-3.5 mr-1.5 shrink-0" />}
            {tier}
            {i === 0 && <span className="ml-2 text-[9px] font-mono opacity-80">↑ UGC Spike</span>}
          </div>
        </div>
      ))}
      {formula && (
        <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
          <p className="text-[10px] text-neutral-500 font-mono text-center">{formula}</p>
        </div>
      )}
    </div>
  );
}

// ── Competitor Matrix ────────────────────────────────────────────────────────
function CompetitorMatrix({ rows, lang }: { rows: MarketingCase['detail'] extends undefined ? never : NonNullable<MarketingCase['detail']>['competitorRows']; lang: 'vi' | 'en' }) {
  const headers = lang === 'vi'
    ? ['Thương hiệu', 'Lựa chọn nội dung', 'Tâm lý khách hàng', 'Kết quả hệ thống']
    : ['Brand', 'Content Choice', 'Customer Psychology', 'System Result'];
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-neutral-50 border-b border-neutral-200">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-bold text-neutral-500 uppercase tracking-wider text-[10px] font-mono whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-neutral-100 last:border-0 transition-colors ${row.isHighlight ? 'bg-red-50' : 'bg-white hover:bg-neutral-50'}`}>
              <td className={`px-4 py-3 font-extrabold whitespace-nowrap ${row.isHighlight ? 'text-red-700' : 'text-neutral-800'}`}>
                {row.brand}
                {row.isHighlight && <span className="ml-1.5 text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-bold">★</span>}
              </td>
              <td className={`px-4 py-3 ${row.isHighlight ? 'text-red-700 font-semibold' : 'text-neutral-600'}`}>{row.contentChoice}</td>
              <td className={`px-4 py-3 italic ${row.isHighlight ? 'text-red-600' : 'text-neutral-500'}`}>{row.customerPsych}</td>
              <td className={`px-4 py-3 font-semibold ${row.isHighlight ? 'text-red-700' : 'text-neutral-500'}`}>{row.systemResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Simple Points (for cases without full detail) ────────────────────────────
const pointCfg = {
  challenge: { label_vi: 'Bài toán',       label_en: 'Challenge',   color: 'text-orange-600', bg: 'bg-orange-50',  border: 'border-orange-100', Icon: AlertCircle },
  strategy:  { label_vi: 'Chiến lược',     label_en: 'Strategy',    color: 'text-blue-600',   bg: 'bg-blue-50',    border: 'border-blue-100',   Icon: Lightbulb   },
  result:    { label_vi: 'Kết quả',        label_en: 'Result',      color: 'text-emerald-600',bg: 'bg-emerald-50', border: 'border-emerald-100',Icon: TrendingUp  },
  insight:   { label_vi: 'Insight cốt lõi',label_en: 'Core Insight',color: 'text-purple-600', bg: 'bg-purple-50',  border: 'border-purple-100', Icon: Star        },
};

// ════════════════════════════════════════════════════════════════════════════
export default function CaseDetail({ caseSlug, lang, onBack }: CaseDetailProps) {
  const allCases = lang === 'vi' ? marketingCasesDataVi : marketingCasesDataEn;
  const cas = allCases.find(c => c.detailSlug === caseSlug || c.id === caseSlug);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  if (!cas) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-400 mb-4">{lang === 'vi' ? 'Không tìm thấy case study.' : 'Case study not found.'}</p>
          <button onClick={onBack} className="text-blue-600 font-semibold cursor-pointer">← {lang === 'vi' ? 'Quay lại' : 'Go back'}</button>
        </div>
      </div>
    );
  }

  const d: MarketingCaseDetailData | undefined = cas.detail;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Sticky back bar ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-neutral-200 px-4 sm:px-8 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {lang === 'vi' ? 'Quay lại' : 'Back'}
        </button>
        <ChevronRight className="w-3 h-3 text-neutral-300" />
        <span className="text-xs font-semibold text-neutral-500 truncate">
          {lang === 'vi' ? 'Case Marketing Tự Nghiên Cứu' : 'Self-Research Marketing Cases'}
        </span>
        <ChevronRight className="w-3 h-3 text-neutral-300" />
        <span className="text-xs font-bold text-neutral-900 truncate">{cas.brand}</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Cover stripe */}
          <div className={`h-3 rounded-full bg-gradient-to-r ${cas.coverGradient} mb-8`} />

          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono mb-3 block">
            <BookOpen className="w-3.5 h-3.5 inline mr-1.5" />
            {lang === 'vi' ? 'Case Marketing Tự Nghiên Cứu' : 'Self-Research Marketing Case'}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 leading-tight mb-6">
            {d?.heroTitle ?? cas.title}
          </h1>

          {/* Metadata cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: lang === 'vi' ? 'Thương hiệu' : 'Brand',         value: d?.brand ?? cas.brand },
              { label: lang === 'vi' ? 'Đối trọng'   : 'Competitors',   value: d?.opponents ?? cas.industry },
              { label: lang === 'vi' ? 'Lĩnh vực'    : 'Industry',      value: d?.industry ?? cas.industry },
              { label: lang === 'vi' ? 'Vấn đề cốt lõi' : 'Core Problem', value: d?.coreProblem ?? '—' },
            ].map((m, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-1">{m.label}</p>
                <p className="text-xs font-semibold text-neutral-800 leading-snug">{m.value}</p>
              </div>
            ))}
          </div>

          {d && (
            <div className="mt-4 flex flex-wrap gap-2">
              {d.models.map((m, i) => (
                <span key={i} className="px-3 py-1 bg-red-50 border border-red-200 text-red-700 rounded-full text-[10px] font-bold">{m}</span>
              ))}
            </div>
          )}
        </motion.div>

        {/* ── Full detail view (KFC) ─────────────────────────────────── */}
        {d ? (
          <>
            {/* ── Hook + Context ──────────────────────────────────────── */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionTitle icon={<Zap />} label={lang === 'vi' ? 'Hook & Bối cảnh' : 'Hook & Context'} color="text-yellow-600" />
              <div className="mt-5 space-y-4">
                <div className="bg-neutral-950 rounded-2xl p-6">
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-3">[HOOK]</p>
                  <p className="text-white text-sm leading-relaxed font-light">"{d.hook}"</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                    <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest font-mono mb-2">{lang === 'vi' ? 'Bối cảnh thị trường' : 'Market Context'}</p>
                    <p className="text-xs text-neutral-700 leading-relaxed">{d.contextInsight}</p>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                    <p className="text-[10px] font-bold text-red-700 uppercase tracking-widest font-mono mb-2">{lang === 'vi' ? 'Core Insight' : 'Core Insight'}</p>
                    <p className="text-xs text-neutral-700 leading-relaxed font-semibold">{d.coreInsight}</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ── Competitive Landscape ───────────────────────────────── */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionTitle icon={<BarChart3 />} label={lang === 'vi' ? 'Ma Trận Cạnh Tranh (Competitive Landscape)' : 'Competitive Landscape Matrix'} color="text-blue-600" />
              <p className="text-xs text-neutral-500 mt-1 mb-5">
                {lang === 'vi'
                  ? 'Quét nhanh bức tranh cạnh tranh: ai đang chạy script nào, và khách hàng phản ứng ra sao?'
                  : 'A quick scan of the competitive landscape: who\'s running which script, and how are customers reacting?'}
              </p>
              <CompetitorMatrix rows={d.competitorRows} lang={lang} />
              <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl">
                <p className="text-xs text-neutral-600 leading-relaxed">{d.kfcSolution}</p>
              </div>
            </motion.section>

            {/* ── Frameworks ──────────────────────────────────────────── */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionTitle icon={<Layers />} label={lang === 'vi' ? 'Deep Dive: Các Framework Áp Dụng' : 'Deep Dive: Applied Frameworks'} color="text-purple-600" />
              <div className="mt-5 space-y-6">
                {d.frameworks.map((fw, i) => (
                  <div key={i} className="border border-neutral-200 rounded-2xl overflow-hidden">
                    <div className="bg-neutral-50 px-5 py-4 border-b border-neutral-200 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-neutral-800 text-white text-[10px] font-extrabold flex items-center justify-center">{i + 1}</span>
                      <span className="font-extrabold text-neutral-900 text-sm">{fw.name}</span>
                    </div>
                    <div className="p-5 space-y-4">
                      <p className="text-xs text-neutral-700 leading-relaxed">{fw.concept}</p>
                      {fw.formula && (
                        <div className="bg-neutral-950 rounded-xl px-4 py-3 font-mono text-[11px] text-green-400">{fw.formula}</div>
                      )}
                      {/* Visual components */}
                      {fw.id === 'pratfall' && <PratfallChart lang={lang} brandName={cas.brand} />}
                      {fw.id === 'brandFunnel' && <BrandFunnel lang={lang} formula={fw.formula} />}
                      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono mb-1">UI Note</p>
                        <p className="text-xs text-neutral-600">{fw.uiNote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── Benchmark ───────────────────────────────────────────── */}
            {d.benchmark && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <SectionTitle icon={<ExternalLink />} label={d.benchmark.title} color="text-emerald-600" />
                <div className="mt-5 bg-neutral-950 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-6 opacity-10">
                    <Quote className="w-24 h-24 text-white" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">{d.benchmark.period}</span>
                  <p className="text-white text-sm leading-relaxed mt-3 relative z-10">"{d.benchmark.story}"</p>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-2">{lang === 'vi' ? `Bài học cho ${d.brand}` : `Lesson for ${d.brand}`}</p>
                    <p className="text-emerald-300 text-xs font-semibold leading-relaxed">{d.benchmark.lesson}</p>
                  </div>
                </div>
              </motion.section>
            )}

            {/* ── KPIs ────────────────────────────────────────────────── */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionTitle icon={<Target />} label={lang === 'vi' ? 'KPIs & Đo Lường' : 'KPIs & Measurement'} color="text-orange-600" />
              <div className="mt-5 grid sm:grid-cols-3 gap-4">
                {d.kpis.map((kpi, i) => (
                  <div key={i} className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                    <div className="text-2xl font-extrabold text-orange-700 font-mono mb-1">{kpi.abbr}</div>
                    <div className="text-xs font-bold text-neutral-800 mb-2">{kpi.label}</div>
                    <p className="text-[11px] text-neutral-600 leading-relaxed">{kpi.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── Playbook ────────────────────────────────────────────── */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionTitle icon={<Lightbulb />} label={lang === 'vi' ? 'Actionable Playbook — Quy Trình Đóng Gói' : 'Actionable Playbook'} color="text-indigo-600" />
              <div className="mt-5 space-y-4">
                {d.playbook.map((step) => (
                  <div key={step.step} className="flex gap-4 bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-neutral-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── Conclusion ──────────────────────────────────────────── */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className={`h-2 rounded-full bg-gradient-to-r ${cas.coverGradient} mb-6`} />
              <div className="bg-neutral-950 rounded-2xl p-6 sm:p-8">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-3">
                  {lang === 'vi' ? 'Kết luận & Bài học' : 'Conclusion & Takeaway'}
                </p>
                <p className="text-white text-sm leading-relaxed">{d.conclusion}</p>
              </div>
            </motion.section>
          </>
        ) : (
          /* ── Fallback view for cases without full detail ────────────── */
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {cas.points.map((pt, i) => {
              const cfg = pointCfg[pt.icon];
              return (
                <div key={i} className={`${cfg.bg} border ${cfg.border} rounded-2xl p-5 flex gap-4`}>
                  <div className={`w-9 h-9 rounded-xl bg-white border ${cfg.border} flex items-center justify-center shrink-0`}>
                    <cfg.Icon className={`w-4 h-4 ${cfg.color}`} />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${cfg.color} mb-1`}>
                      {lang === 'vi' ? cfg.label_vi : cfg.label_en}
                    </h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">{pt.content}</p>
                  </div>
                </div>
              );
            })}
          </motion.section>
        )}

        {/* Back button footer */}
        <div className="pt-4 border-t border-neutral-200">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'vi' ? 'Quay lại tất cả case studies' : 'Back to all case studies'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Tiny helper ──────────────────────────────────────────────────────────────
function SectionTitle({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center ${color} [&>svg]:w-4 [&>svg]:h-4`}>
        {icon}
      </div>
      <h2 className="text-base sm:text-lg font-extrabold text-neutral-900">{label}</h2>
    </div>
  );
}
