import { X, Printer, Mail, Phone, Linkedin, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface CvPreviewModalProps {
  onClose: () => void;
  lang: 'vi' | 'en';
}

export default function CvPreviewModal({ onClose, lang }: CvPreviewModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs cursor-pointer print:hidden"
      />

      {/* Modal Dialog Content container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 print:max-h-none print:h-auto print:shadow-none print:border-none print:p-0 print:m-0"
      >
        {/* CV Utility Header Controls */}
        <div className="sticky top-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md px-6 py-4 border-b border-neutral-150 dark:border-neutral-850 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-xs sm:text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest font-mono">
              {lang === 'vi' ? 'Bản xem trước Sơ yếu lý lịch (CV)' : 'CURRICULUM VITAE PREVIEW (CV)'}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white cursor-pointer duration-150 flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" /> {lang === 'vi' ? 'In / Tải PDF' : 'Print / Save PDF'}
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-750 text-neutral-500 dark:text-neutral-400 cursor-pointer duration-150"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PRINTABLE RESUME SHEET */}
        <div id="cv-printable-area" className="p-8 sm:p-12 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-920 print:text-black print:bg-white print:p-0 print:my-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Header info block */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white print:text-black">
                  LÊ VÕ TUẤN ANH
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1 print:text-black">
                  {lang === 'vi'
                    ? 'Social Media Marketing Specialist | Content Creator | Creative Strategist'
                    : 'Creative Specialist | Social Media & Digital Storytelling Expert'}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-light print:text-black print:text-xs">
                {lang === 'vi'
                  ? 'Mục tiêu của tôi là ứng dụng nhuần nhuyễn tư duy sáng tạo nghệ thuật kết hợp cùng nền tảng khoa học Kỹ sư Công nghệ thông tin để xây dựng chuỗi nội dung đột phá. Từ đó, tối ưu hóa tối đa chi phí sản xuất, đồng thời duy trì và nâng cao tinh tuyển cao nhất các chỉ số tương tác (Engagement) thực chất cho các thương hiệu số.'
                  : 'Passionate and results-driven Creative Specialist with a solid Software Engineering background. Adept at leveraging modern Generative AI to design high-engagement, viral social media campaigns. Focused on bridging beautiful media arts with high-tempo performance marketing to organically scale digital brands.'}
              </p>
            </div>

            {/* Right Meta Column Contacts */}
            <div className="md:col-span-4 bg-neutral-50 dark:bg-neutral-900/60 p-5 rounded-2xl border border-neutral-150 dark:border-neutral-850/65 space-y-3.5 print:bg-neutral-50 print:border-neutral-350">
              <div className="flex items-center gap-2.5 text-xs text-neutral-650 dark:text-neutral-350 print:text-black">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate text-[11px] sm:text-xs">levotuananh.work@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-650 dark:text-neutral-350 print:text-black">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs">0946 234 435</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-650 dark:text-neutral-350 print:text-black">
                <Linkedin className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">linkedin.com/in/levotuananh/</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-650 dark:text-neutral-350 print:text-black">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="text-[11px] sm:text-xs">{lang === 'vi' ? 'Hải Châu / Cẩm Lệ, Đà Nẵng' : 'Da Nang, Viet Nam'}</span>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="my-8 border-t border-neutral-205 dark:border-neutral-800 print:border-neutral-300 pt-6">
            <h2 className="text-xs font-extrabold text-neutral-450 dark:text-neutral-400 tracking-widest uppercase font-mono border-b pb-2 mb-4">
              {lang === 'vi' ? 'HỌC VẤN NỀN TẢNG' : 'ACADEMIC BACKGROUND'}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white print:text-black flex items-center gap-1.5">
                  <GraduationCap className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                  {lang === 'vi' ? 'Kỹ sư Công nghệ thông tin (IT)' : 'Bachelor of Software Engineering (IT)'}
                </h3>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-350 mt-1">
                  {lang === 'vi' ? 'Đại học Kiến trúc Đà Nẵng (D.A.U)' : 'Da Nang University of Architecture (D.A.U)'}
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 mt-1 sm:mt-0 font-mono">2021 – 2025</span>
            </div>
          </div>

          {/* Experiences Block */}
          <div className="space-y-6">
            <h2 className="text-xs font-extrabold text-neutral-450 dark:text-neutral-400 tracking-widest uppercase font-mono border-b pb-2">
              {lang === 'vi' ? 'KINH NGHIỆM THỰC TẾ' : 'PROFESSIONAL EXPERIENCE'}
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">
                    {lang === 'vi' ? 'Thực tập sinh Sáng tạo nội dung & Biên tập Video' : 'Creative Content Creator & Video Editor Intern'}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 mt-1 sm:mt-0 font-mono">2025 – 2026</span>
                </div>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                  B PRODUCTIONS <span className="text-neutral-400">|</span> {lang === 'vi' ? 'Đà Nẵng, Việt Nam' : 'Da Nang, Viet Nam'}
                </p>
                <p className="text-xs text-neutral-650 dark:text-neutral-405 leading-relaxed font-light mt-1.5">
                  {lang === 'vi'
                    ? 'Quản lý toàn bộ quá trình lên kịch bản thoại, vẽ storyboard và biên tập dựng hậu kỳ các video ngắn (TikTok, Reels) cho tệp thương hiệu Agency. Đột phá ứng dụng quy trình Gen AI (Gemini, CapCut Smart Tool) giúp tối ưu hóa tiến độ sản xuất, tiết kiệm 35% chi phí sản phẩm nháp.'
                    : 'Pioneered creative scripting, storyboarding, and video editing for diverse commercial short-form campaigns (TikTok, Shorts, Reels). Fully integrated Generative AI production pipelines (Gemini, ChatGPT, CapCut AI), reducing concept-to-draft overhead by 35%.'}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">
                    {lang === 'vi' ? 'Freelance Video Editor' : 'Freelance Short-Form Video Producer'}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 mt-1 sm:mt-0 font-mono">
                    {lang === 'vi' ? 'Tháng 05 – Tháng 09, 2025' : 'May – September 2025'}
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                  Mocha Cosmetic <span className="text-neutral-400">|</span> Remote / Freelance
                </p>
                <p className="text-xs text-neutral-650 dark:text-neutral-405 leading-relaxed font-light mt-1.5">
                  {lang === 'vi'
                    ? 'Chịu trách nhiệm sản xuất và điều dắt định kỳ hậu kỳ chuỗi video ngắn tiếp thị dòng mỹ phẩm thuần khiết. Áp dụng hiệu ứng nhịp thoại dốc, nhạc nền xu hướng giúp tăng 45% thời lượng giữ chân người dùng trung bình (Video Retention Rate).'
                    : 'Executed end-to-end post-production sequences for Gen Z targeted natural skincare products. Carefully crafted visual hooks and timed transitions, driving average video retention rates upward by 45%.'}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">
                    {lang === 'vi' ? 'Ban Nội dung, Điều phối Sự kiện & Mạng xã hội' : 'Social Media Curator & Event Officer'}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 mt-1 sm:mt-0 font-mono">2022 – 2025</span>
                </div>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                  {lang === 'vi' ? 'Văn phòng Liên đoàn Lao động' : 'Labor Union Communications Office'} <span className="text-neutral-400">|</span> {lang === 'vi' ? 'Đà Nẵng, Việt Nam' : 'Da Nang, Viet Nam'}
                </p>
                <p className="text-xs text-neutral-650 dark:text-neutral-405 leading-relaxed font-light mt-1.5">
                  {lang === 'vi'
                    ? 'Thiết kế ấn phẩm đồ họa sự kiện ngoài trời, viết thông cáo truyền thông và chăm sóc định hướng trang hoạt động số đại chúng. Điều hành trực tiếp phong trào tập thể thu hút hơn 1,200 công đoàn viên tham dự, thúc đẩy chỉ số tương tác tự nhiên lên 40%.'
                    : 'Assisted in curating local community campaigns, composing press materials, and running localized social accounts. Coordinated mass engagement workshops for over 1,200 union delegates, boosting natural online interactions by 40%.'}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">
                    {lang === 'vi' ? 'Ủy viên Truyền thông & Dựng kịch bản' : 'Communications Officer & Creative Lead'}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 mt-1 sm:mt-0 font-mono">2022 – 2023</span>
                </div>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                  {lang === 'vi' ? 'Đội Tình nguyện D.A.U' : 'D.A.U Youth Volunteer Association'} <span className="text-neutral-400">|</span> {lang === 'vi' ? 'Đại học Kiến trúc Đà Nẵng' : 'D.A.U University'}
                </p>
                <p className="text-xs text-neutral-650 dark:text-neutral-405 leading-relaxed font-light mt-1.5">
                  {lang === 'vi'
                    ? 'Chủ trì kịch bản hậu cần truyền thông sự kiện thực địa, sản xuất phóng sự ngắn (Video Recap) đạt cột mốc 20k+ người tiếp cận tự nhiên cho chiến dịch cao điểm.'
                    : 'Authored camp storyboards, hosted official volunteer recaps, and published high-engagement recap clips totaling 20k+ organic views.'}
                </p>
              </div>
            </div>
          </div>

          {/* Dividing line */}
          <div className="my-8 border-t border-neutral-200 dark:border-neutral-800 print:border-neutral-300" />

          {/* Certifications and achievements list for resume */}
          <div className="mb-8">
            <h2 className="text-xs font-extrabold text-neutral-450 dark:text-neutral-400 tracking-widest uppercase font-mono border-b pb-2 mb-4">
              {lang === 'vi' ? 'THÀNH TỰU & CHỨNG CHỈ QUỐC TẾ' : 'ACHIEVEMENTS & GLOBAL CREDENTIALS'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-neutral-900 dark:text-white print:text-black">
                    • TOEIC 840/990 (Listening & Reading)
                  </p>
                  <p className="text-neutral-550 dark:text-neutral-400 font-light pl-3 mt-0.5 leading-relaxed">
                    {lang === 'vi'
                      ? 'Được cấp chứng nhận chính thức bởi IIG Việt Nam. Khẳng định khả năng dịch thuật chuyên sâu, bản địa hóa kịch bản đa quốc gia và làm việc lưu loát bằng tiếng Anh.'
                      : 'Certified by IIG Viet Nam. Proficient in English copywriting, cross-border content localization, and business translation tasks.'}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-neutral-900 dark:text-white print:text-black">
                    • Google Professional Digital Marketing Certificate
                  </p>
                  <p className="text-neutral-550 dark:text-neutral-400 font-light pl-3 mt-0.5 leading-relaxed">
                    {lang === 'vi'
                      ? 'Nắm vững kiến thức SEO nâng cao, thiết kế phễu tiếp thị đa kênh, tối ưu quảng cáo trực quan và thiết kế Email Conversion.'
                      : 'Comprehensive Google-certified training encompassing advanced search engine optimization (SEO), digital metrics, conversion funnels, and email marketing flow.'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-bold text-neutral-900 dark:text-white print:text-black">
                    • 102K+ Organic Reach & 0đ Ads Cost
                  </p>
                  <p className="text-neutral-550 dark:text-neutral-400 font-light pl-3 mt-0.5 leading-relaxed">
                    {lang === 'vi'
                      ? 'Tạo dựng nội dung viral đột phá cho dự án "Nét Đẹp Sinh Viên D.A.U" thu về hàng trăm nghìn lượt tiếp cận tự nhiên hoàn toàn không sử dụng ngân sách quảng cáo.'
                      : 'Broke organic milestones with viral social content projects, reaching over 102k+ organic targets utilizing local SEO tag design without paid booster ads.'}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-neutral-900 dark:text-white print:text-black">
                    • AI-Driven Content Strategy Certified
                  </p>
                  <p className="text-neutral-550 dark:text-neutral-400 font-light pl-3 mt-0.5 leading-relaxed">
                    {lang === 'vi'
                      ? 'Ứng dụng thuần thục hệ thống Generative AI (LLMs Prompting ChatGPT/Gemini, AI Voice Engines, CapCut Script Automation) tăng tốc sản xuất nội dung.'
                      : 'Certified user of advanced Generative AI platforms (including high-level LLMs, voice generators, and smart editors) to supercharge creative throughput by 10x.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dividing line */}
          <div className="my-8 border-t border-neutral-200 dark:border-neutral-800 print:border-neutral-300" />

          {/* Skills Grid on Sheet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
            <div>
              <h2 className="text-xs font-extrabold text-neutral-450 dark:text-neutral-400 tracking-widest uppercase font-mono border-b pb-2.5 mb-3">
                {lang === 'vi' ? 'KỸ NĂNG MARKETING & AI' : 'MARKETING CORE & AI SKILLS'}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {(lang === 'vi' 
                  ? ['Tối ưu Social Media', 'TikTok SEO & Thuật toán', 'ChatGPT/Gemini Advanced User', 'Midjourney Prompt Sáng Tạo', 'ElevenLabs Voice Engine', 'Phân tích Retention Rate', 'Thiết kế chiến lược phễu']
                  : ['Social Optimization', 'TikTok SEO & Ranking', 'Generative AI Prompting', 'Midjourney AI Arts', 'ElevenLabs Voice Engine', 'Retention Rate Analytics', 'Content Funnel Strategies']
                ).map((s, i) => (
                  <span key={i} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs print:bg-neutral-100 print:text-black font-medium uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-extrabold text-neutral-450 dark:text-neutral-400 tracking-widest uppercase font-mono border-b pb-2.5 mb-3">
                {lang === 'vi' ? 'CÔNG CỤ HẬU KỲ & MỀM' : 'POST-PRODUCTION & SOFT SKILLS'}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {(lang === 'vi'
                  ? ['CapCut Pro (Biên tập)', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Canva Pro Design', 'Adobe Audition', 'Nghệ thuật Storytelling', 'Năng lực Dẫn chương trình', 'Thực thi sự kiện']
                  : ['CapCut Pro Master', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Canva Pro Design', 'Adobe Audition', 'Social Storytelling', 'MC / Public Speaking', 'Event Coordination']
                ).map((s, i) => (
                  <span key={i} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs print:bg-neutral-100 print:text-black font-medium uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
