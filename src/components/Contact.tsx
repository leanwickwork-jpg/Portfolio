import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { contactTranslations } from '../translations';

interface ContactProps {
  onOpenCvModal: () => void;
  lang: 'vi' | 'en';
}

export default function Contact({ onOpenCvModal, lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = contactTranslations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    // Simulate real database submission or contact response
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-50/50 dark:bg-neutral-950/20 border-t border-neutral-100 dark:border-neutral-900/60 overflow-hidden">
      <div className="absolute top-1/2 left-1/10 w-72 h-72 bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/10 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-panel p-8 rounded-3xl relative overflow-hidden">
            {/* Visual shine in background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {t.cvBoxTitle}
                </h3>
                <p className="text-xs text-neutral-550 dark:text-neutral-400 mt-2 font-mono uppercase tracking-wider">
                  {lang === 'vi' ? 'PHẢN HỒI TRONG 2 Giờ' : 'RESPONSIVE WITHIN 2 Hours'}
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4">
                <a 
                  href="mailto:levotuananh.work@gmail.com" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/55 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 group duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-450 font-mono tracking-widest leading-none">{lang === 'vi' ? 'EMAIL LÀM VIỆC' : 'OFFICIAL EMAIL'}</p>
                    <p className="text-sm font-semibold text-neutral-850 dark:text-neutral-200 mt-1 truncate">
                      levotuananh.work@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:0946234435" 
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/55 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 group duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-450 font-mono tracking-widest leading-none">{lang === 'vi' ? 'SỐ ĐIỆN THOẠI' : 'PHONE NUMBER'}</p>
                    <p className="text-sm font-bold text-neutral-850 dark:text-neutral-200 mt-1 font-mono">
                      0946 234 435
                    </p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/levotuananh/" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/55 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 group duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-450 group-hover:scale-105 duration-200">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-450 font-mono tracking-widest leading-none">{lang === 'vi' ? 'TIÊU ĐIỂM LINKEDIN' : 'LINKEDIN PROFILE'}</p>
                    <p className="text-sm font-semibold text-neutral-850 dark:text-neutral-200 mt-1">
                      in/levotuananh
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Map locator & CV button */}
            <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/40 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <MapPin className="w-4 h-4 text-neutral-450 shrink-0" />
                <span>{lang === 'vi' ? 'Hải Châu / Cẩm Lệ, Đà Nẵng' : 'Hai Chau / Cam Le, Da Nang'}</span>
              </div>
              
              <button 
                onClick={onOpenCvModal}
                className="w-full py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold cursor-pointer duration-200 hover:bg-neutral-850 dark:hover:bg-neutral-100 flex items-center justify-center gap-1.5"
              >
                {t.cvBoxBtn}
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl relative flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest mb-2 font-mono">
                        {t.labelName} *
                      </label>
                      <input 
                        required
                        id="form-name"
                        type="text" 
                        placeholder={t.placeholderName}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-850 dark:text-neutral-100 placeholder-neutral-400 duration-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest mb-2 font-mono">
                        {t.labelMail} *
                      </label>
                      <input 
                        required
                        id="form-email"
                        type="email" 
                        placeholder={t.placeholderMail}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-850 dark:text-neutral-100 placeholder-neutral-400 duration-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-company" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest mb-2 font-mono">
                      {lang === 'vi' ? 'Doanh nghiệp / Cơ quan' : 'Company / Agency'}
                    </label>
                    <input 
                      id="form-company"
                      type="text" 
                      placeholder="Company Name, Agency, ..."
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-850 dark:text-neutral-100 placeholder-neutral-400 duration-200 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest mb-2 font-mono">
                      {t.labelMsg} *
                    </label>
                    <textarea 
                      required
                      id="form-message"
                      rows={4} 
                      placeholder={t.placeholderMsg}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-850 dark:text-neutral-100 placeholder-neutral-400 duration-200 focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-md focus:outline-none"
                  >
                    {t.btnSubmit} <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-500">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {lang === 'vi' ? 'Gửi Thông Điệp Thành Công!' : 'Sent Successfully!'}
                    </h3>
                    <p className="text-sm text-neutral-550 dark:text-neutral-450 mt-2 max-w-md mx-auto leading-relaxed">
                      {t.successMsg}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl border border-neutral-250 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-semibold text-neutral-700 dark:text-neutral-300 cursor-pointer duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-950"
                  >
                    {lang === 'vi' ? 'Gửi Lại Kịch Bản Khác' : 'Send Another Message'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
