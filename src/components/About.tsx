import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Target, Compass, Sparkles, User, GraduationCap, MapPin, CalendarDays, Award, TrendingUp, Zap, Users } from 'lucide-react';
import { aboutTranslations, achievementsDataVi, achievementsDataEn } from '../translations';

/* ─── Animated counter that fires once when scrolled into view ─────────────── */
function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    // Extract leading non-digit prefix, number, and trailing suffix
    const match = value.match(/^(\D*)(\d[\d,.]*)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ''));
    if (isNaN(target)) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const rounded = target >= 100 ? Math.round(v) : Math.round(v * 10) / 10;
        setDisplay(`${prefix}${rounded}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

const getAchievementIcon = (iconName: string) => {
  switch (iconName) {
    case 'Award': return <Award className="w-5 h-5 text-blue-600" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-purple-650" />;
    case 'Zap': return <Zap className="w-5 h-5 text-amber-500 animate-pulse" />;
    case 'Users': return <Users className="w-5 h-5 text-emerald-600" />;
    default: return <Award className="w-5 h-5 text-blue-600" />;
  }
};

interface AboutProps {
  lang: 'vi' | 'en';
}

export default function About({ lang }: AboutProps) {
  const t = aboutTranslations[lang];
  const achievements = lang === 'vi' ? achievementsDataVi : achievementsDataEn;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-50/50 dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900/60">
      <div className="absolute top-10 right-10 w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-full">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-sm text-neutral-500 mt-3 font-light max-w-xl mx-auto">
            {t.sectionDesc}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Summary column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Visual background decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-blue-500/10 to-transparent pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{t.cardBadge}</h3>
              </div>
              
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                <h4 className="text-base font-extrabold text-neutral-950 dark:text-white font-sans tracking-tight">
                  {t.name} <span className="text-neutral-300 mx-1">|</span> <span className="text-xs font-medium text-blue-600">{t.role}</span>
                </h4>
                <p>
                  {t.p1}
                </p>
                <p>
                  {t.p2}
                </p>
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/40">
              <div className="flex items-start gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                <GraduationCap className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-neutral-800">{lang === 'vi' ? 'Học vấn' : 'Education'}:</strong><br />
                  {t.detailMajor}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                <Target className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-neutral-800">{lang === 'vi' ? 'Tiêu điểm' : 'Core Focus'}:</strong><br />
                  {t.detailFocus}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Goal & Focus column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Career Objective Card */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {lang === 'vi' ? 'Mục Tiêu Sự Nghiệp' : 'Career Objective'}
                  </h3>
                </div>
                <p className="text-neutral-650 dark:text-neutral-350 leading-relaxed font-light text-sm">
                  {lang === 'vi'
                    ? 'Trở thành một Creative Specialist toàn diện, kết hợp hiệu quả nền tảng Kỹ sư Công nghệ thông tin để dẫn dắt xuất sắc các chiến dịch tiếp thị số. Tích hợp sâu rộng hệ sinh tái Generative AI giúp tự động hóa, tăng tốc sản xuất nội dung chất lượng cao nhưng vẫn bảo chứng chiều sâu phong thái và cảm xúc con người.'
                    : 'To build a comprehensive career as a dual-skilled Creative Specialist, leveraging an IT Engineering foundation to pilot automated, high-tempo digital promotions. Fully utilize the bleeding-edge Generative AI software landscape to eliminate production friction while preserving rich, conversion-oriented messaging.'}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>{lang === 'vi' ? 'Nâng tầm giá trị & Truyền tải thông điệp' : 'Elevate Value & Ship True Messages'}</span>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="glass-panel p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {lang === 'vi' ? 'Triết Lý Sáng Tạo' : 'Creative Philosophy'}
                  </h3>
                </div>
                <p className="text-neutral-650 dark:text-neutral-350 leading-relaxed font-light text-sm">
                  {lang === 'vi'
                    ? '"Kịch bản chạm đến cảm xúc, Tư duy dựa trên số liệu". Mỗi ấn phẩm hay chuỗi thoại tạo ra đều cần thiết kế dựa trên thấu cảm tâm lý khách hàng thực thụ để tối ưu hóa sự giữ chân và chinh phục khán giả qua từng nhịp nhìn.'
                    : '"Emotion drives action, Metrics guide iteration." Every video asset or word segment is designed centered on deep consumer behavior mapping to sustain viewer retention and command lasting brand authority.'}
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white font-bold">A</div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-850 dark:text-neutral-200">Lê Võ Tuấn Anh</h4>
                  <p className="text-[10px] text-neutral-500">Social Media & Creative Specialist</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section with high-impact custom styled counters */}
        <div className="mt-24 border-t border-neutral-150/70 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase inline-block mb-3 px-3 py-1 bg-purple-500/10 rounded-full">
              {t.achBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {t.achTitle}
            </h3>
            <p className="text-sm text-neutral-500 mt-3 font-light max-w-xl mx-auto">
              {t.achDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach, index) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-3xl border border-neutral-220 hover:border-blue-500/40 hover:shadow-lg transition-all duration-350 flex flex-col justify-between hover:translate-y-[-4px] group bg-white relative overflow-hidden"
              >
                {/* Visual background gradient circle decoration on hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/5 rounded-full group-hover:scale-150 duration-500 pointer-events-none transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-2xl group-hover:bg-blue-500/10 duration-300">
                      {getAchievementIcon(ach.iconName)}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase bg-neutral-50 border border-neutral-100 px-2.5 py-0.5 rounded-lg">
                      {ach.category}
                    </span>
                  </div>
                  
                  <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-1.5 group-hover:text-blue-600 duration-300 font-mono">
                    <AnimatedMetric value={ach.metric} />
                  </p>
                  
                  <h4 className="text-sm font-bold text-neutral-800 leading-snug mb-2 group-hover:text-neutral-900 duration-200">
                    {ach.title}
                  </h4>
                  
                  <p className="text-xs text-neutral-550 leading-relaxed font-light">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
