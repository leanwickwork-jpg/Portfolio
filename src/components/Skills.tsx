import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsTranslations, skillsDataVi, skillsDataEn } from '../translations';
import { Skill } from '../types';
import { Sparkles, Video, Volume2, Award, CheckCircle2, MessageSquare } from 'lucide-react';

interface SkillsProps {
  lang: 'vi' | 'en';
}

export default function Skills({ lang }: SkillsProps) {
  const t = skillsTranslations[lang];
  const [activeCategory, setActiveCategory] = useState<'All' | 'Marketing' | 'Creative Tools' | 'AI Tools' | 'Soft Skills'>('All');

  const categories: ('All' | 'Marketing' | 'Creative Tools' | 'AI Tools' | 'Soft Skills')[] = [
    'All',
    'Marketing',
    'Creative Tools',
    'AI Tools',
    'Soft Skills'
  ];

  const categoryTranslations: Record<string, string> = t.cats;

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Marketing': return <MessageSquare className="w-4 h-4" />;
      case 'Creative Tools': return <Video className="w-4 h-4" />;
      case 'AI Tools': return <Sparkles className="w-4 h-4" />;
      case 'Soft Skills': return <Award className="w-4 h-4" />;
      default: return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const skillsData = lang === 'vi' ? skillsDataVi : skillsDataEn;

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-full">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-450 mt-4 max-w-xl mx-auto font-light">
            {t.desc}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Tab Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-350 flex items-center gap-1.5 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-950 dark:border-white shadow-md scale-102 font-semibold'
                  : 'bg-white dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-350 dark:hover:border-neutral-700'
              }`}
            >
              {getCategoryIcon(cat)}
              {categoryTranslations[cat]}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                key={`${skill.category}-${skill.name}`}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/40 duration-300 shadow-xs relative overflow-hidden group"
              >
                {/* Visual gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blue-500/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase ${
                      skill.category === 'Marketing' ? 'bg-blue-100 text-blue-700' :
                      skill.category === 'Creative Tools' ? 'bg-orange-100 text-orange-700' :
                      skill.category === 'AI Tools' ? 'bg-purple-100 text-purple-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {categoryTranslations[skill.category] || skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-800 group-hover:text-blue-600 duration-200 relative z-10">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
