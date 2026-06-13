import { Skill, Experience, Project, WorkflowStep, Certification, Achievement, MarketingCase, MarketingCaseDetailData } from './types';

export const navTranslations = {
  vi: [
    { id: 'hero', label: 'Trang Chủ' },
    { id: 'about', label: 'Về Tôi' },
    { id: 'skills', label: 'Kỹ Năng' },
    { id: 'experience', label: 'Kinh Nghiệm' },
    { id: 'projects', label: 'Dự Án' },
    { id: 'cases', label: 'Phân Tích' },
    { id: 'workflow', label: 'Quy Trình AI' },
    { id: 'certifications', label: 'Chứng Chỉ' },
    { id: 'contact', label: 'Liên Hệ' }
  ],
  en: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'cases', label: 'Case Analysis' },
    { id: 'workflow', label: 'AI Workflow' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]
};

export const heroTranslations = {
  vi: {
    badge: 'Sẵn sàng làm việc',
    location: 'Đà Nẵng, Việt Nam',
    subtitle: 'CREATIVE PORTFOLIO',
    description: 'Là sự giao thoa giữa tư duy Marketing nhạy bén và năng lực Social Specialist, tôi kết hợp nghệ thuật sáng tạo nội dung (Content Creator) cùng sức mạnh của một AI Creative Strategist để kiến tạo nên các chiến dịch kỹ thuật số bùng nổ, tối ưu hóa hiệu suất và đạt hàng trăm ngàn lượt tiếp cận tự nhiên.',
    btnProjects: 'Xem Dự Án',
    btnCv: 'Xem & In CV',
    btnContact: 'Liên hệ',
    stat1Val: 'Giải Ba Video',
    stat1Lbl: 'Cuộc thi Video Nghị luận chính trị 2024',
    stat2Val: '102K+ Views',
    stat2Lbl: 'Lượt xem tự nhiên không tốn phí Ads',
    stat3Val: 'Tiết Kiệm 35%',
    stat3Lbl: 'Thời gian sản xuất nhờ Generative AI'
  },
  en: {
    badge: 'Ready to work',
    location: 'Da Nang, Vietnam',
    subtitle: 'CREATIVE PORTFOLIO',
    description: 'As a fusion of sharp Marketing mindset and Social Specialist capability, I combine the art of storytelling (Content Creator) with the power of an AI Creative Strategist to orchestrate explosive digital campaigns, optimizing performance and acquiring hundreds of thousands of organic reaches.',
    btnProjects: 'View Projects',
    btnCv: 'View & Print CV',
    btnContact: 'Contact Me',
    stat1Val: '3rd Prize Video',
    stat1Lbl: '2024 Political Commentary Video Contest',
    stat2Val: '102K+ Views',
    stat2Lbl: 'Organic views with zero ad-spend',
    stat3Val: '35% Saved',
    stat3Lbl: 'Production time shortened via Generative AI'
  }
};

export const aboutTranslations = {
  vi: {
    sectionBadge: 'Hồ sơ cá nhân',
    sectionTitle: 'Về Tôi & Phong Cách Sáng Tạo',
    sectionDesc: 'Là thế hệ Marketer nhạy bén về công nghệ, tôi đặt tư duy chiến lược và sự thấu cảm độc giả làm trung tâm để đưa các thương hiệu cất cánh.',
    cardBadge: 'Hành trình sáng tạo',
    name: 'Lê Võ Tuấn Anh',
    role: 'Social Media Marketing Specialist & AI Creative Strategist',
    p1: 'Xin chào, tôi là một Social Media Specialist nhạy bén kết hợp tư duy phân tích của một Kỹ sư CNTT (Đại học Kiến trúc Đà Nẵng) với nghệ thuật kể chuyện sắc bén của một Content Creator thực thụ.',
    p2: 'Không chỉ dừng lại ở việc sản xuất kịch bản, tôi đi sâu vào việc ứng dụng toàn diện hệ sinh thái Generative AI giúp chuyển đổi mô hình tiếp thị truyền thống để khai mở các chiến dịch tiếp cận đột phá trăm nghìn view với mức chi phí tối ưu tối đa.',
    detailsHeading: 'Thông tin bổ trợ',
    detailMajor: 'Cử nhân Kỹ sư Công nghệ Thông tin (Đại học Kiến trúc Đà Nẵng, 2021-2026, GPA: 3.10)',
    detailFocus: 'Sáng tạo Nội dung Số, Biên tập & Thiết kế Video Ngắn, Tích hợp AI',
    achBadge: 'Thành tựu cốt lõi',
    achTitle: 'Thành Tựu Nổi Bật 🌟',
    achDesc: 'Các chỉ số định lượng, thành tích học thuật & giải thưởng được kiểm chứng độc lập.'
  },
  en: {
    sectionBadge: 'Personal Profile',
    sectionTitle: 'About Me & Creative Style',
    sectionDesc: 'As a tech-savvy marketer, I set strategic thinking and audience empathy at the center of growing digital brand presence.',
    cardBadge: 'Creative Journey',
    name: 'Le Vo Tuan Anh',
    role: 'Social Media Marketing Specialist & AI Creative Strategist',
    p1: 'Hello, I am a dynamic Social Media Specialist bridging the analytical mindset of an IT Engineer (Da Nang Architecture University) with the sharp storytelling flair of a real Content Creator.',
    p2: 'Beyond mere scriptwriting, I dive deep into integrating the Generative AI ecosystem to transform traditional marketing models and achieve outstanding multi-channel growth with highly optimized production costs.',
    detailsHeading: 'Academic & Highlight Focus',
    detailMajor: 'IT Engineer Degree (Da Nang Architecture University, 2021-2026, GPA: 3.10)',
    detailFocus: 'Digital Content Creation, Video Short-form Production, AI Integration',
    achBadge: 'Core Achievements',
    achTitle: 'Key Achievements 🌟',
    achDesc: 'Quantifiable metrics, academic accomplishments & recognized social awards.'
  }
};

export const skillsTranslations = {
  vi: {
    badge: 'Năng lực chuyên môn',
    title: 'Bộ Kỹ Năng & AI Toolbox',
    desc: 'Được đóng gói theo nhóm năng lực đa chiều, phản ánh năng lực thực thi chiến dịch tiếp thị hiện đại.',
    cats: {
      All: 'Tất cả kỹ năng',
      Marketing: 'Social Marketing',
      'Creative Tools': 'Công cụ Thiết kế',
      'AI Tools': 'AI Sáng tạo',
      'Soft Skills': 'Kỹ năng Mềm'
    }
  },
  en: {
    badge: 'Professional Skills',
    title: 'Skills & AI Toolbox',
    desc: 'Structured across multidimensional groups reflecting my capacity to deliver professional modern campaigns.',
    cats: {
      All: 'All Skills',
      Marketing: 'Social Marketing',
      'Creative Tools': 'Post-production Tools',
      'AI Tools': 'Creative AI',
      'Soft Skills': 'Power Skills'
    }
  }
};

export const skillsDataVi: Skill[] = [
  { name: 'Xây dựng Chiến lược Social Media', category: 'Marketing', level: 90 },
  { name: 'Sáng tạo Nội dung Quảng cáo', category: 'Marketing', level: 95 },
  { name: 'TikTok SEO & Thuật toán Video', category: 'Marketing', level: 88 },
  { name: 'Điều phối & Tổ chức Sự kiện', category: 'Marketing', level: 80 },

  { name: 'CapCut Pro (Biên tập Chuyên nghiệp)', category: 'Creative Tools', level: 95 },
  { name: 'Adobe Premiere Pro', category: 'Creative Tools', level: 85 },
  { name: 'Adobe Photoshop', category: 'Creative Tools', level: 80 },
  { name: 'Canva Pro & Sáng tạo Visuals', category: 'Creative Tools', level: 92 },
  { name: 'DaVinci Resolve', category: 'Creative Tools', level: 78 },

  { name: 'ChatGPT & Gemini (Advanced Prompting)', category: 'AI Tools', level: 95 },
  { name: 'Midjourney & DALL-E (Sáng tạo Art)', category: 'AI Tools', level: 90 },
  { name: 'ElevenLabs (Giọng nói AI Tự nhiên)', category: 'AI Tools', level: 88 },

  { name: 'Storytelling (Nghệ thuật Kể chuyện)', category: 'Soft Skills', level: 95 },
  { name: 'Thuyết trình & Truyền lửa phong trào', category: 'Soft Skills', level: 90 },
  { name: 'Lãnh đạo Phong trào & Sự kiện', category: 'Soft Skills', level: 85 },
  { name: 'Nhạy bén với Xu hướng (Trend Catching)', category: 'Soft Skills', level: 92 },
  { name: 'Làm việc Nhóm & Thích ứng nhanh', category: 'Soft Skills', level: 88 }
];

export const skillsDataEn: Skill[] = [
  { name: 'Social Media Strategy Design', category: 'Marketing', level: 90 },
  { name: 'Ad Copywriting & Creatives', category: 'Marketing', level: 95 },
  { name: 'TikTok SEO & Video Algorithms', category: 'Marketing', level: 88 },
  { name: 'Event Coordination & Support', category: 'Marketing', level: 80 },

  { name: 'CapCut Pro (Pro Video Editing)', category: 'Creative Tools', level: 95 },
  { name: 'Adobe Premiere Pro', category: 'Creative Tools', level: 85 },
  { name: 'Adobe Photoshop', category: 'Creative Tools', level: 80 },
  { name: 'Canva Pro Design & Visuals', category: 'Creative Tools', level: 92 },
  { name: 'DaVinci Resolve', category: 'Creative Tools', level: 78 },

  { name: 'ChatGPT & Gemini (Advanced Scripting)', category: 'AI Tools', level: 95 },
  { name: 'Midjourney & DALL-E (Art Generation)', category: 'AI Tools', level: 90 },
  { name: 'ElevenLabs (Natural AI Voiceover)', category: 'AI Tools', level: 88 },

  { name: 'Brand Storytelling Artistry', category: 'Soft Skills', level: 95 },
  { name: 'Public Speaking & Presentation', category: 'Soft Skills', level: 90 },
  { name: 'Youth Leadership & Team Spirit', category: 'Soft Skills', level: 85 },
  { name: 'Trend Catching & Rapid Adaptation', category: 'Soft Skills', level: 92 },
  { name: 'Time Management & Agile Work', category: 'Soft Skills', level: 88 }
];

export const achievementsDataVi: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Giải Ba - Cuộc thi Video Nghị luận chính trị 2024',
    metric: 'Giải Ba 2024',
    description: 'Đạt giải Ba danh giá cấp tỉnh/trường về năng lực biên soạn kịch bản luận điểm sâu sắc và biên tập kỹ lưỡng các thước phim tài liệu đầy sức thuyết phục truyền thông.',
    category: 'Giải thưởng',
    iconName: 'Award'
  },
  {
    id: 'ach-2',
    title: 'Chiến dịch tiếp cận tự nhiên vượt trội',
    metric: '102K+ Views',
    description: 'Sáng tạo và chỉ đạo nội dung các dự án chạm mốc hơn 102,000 lượt xem tự nhiên hoàn toàn không sử dụng ngân sách quảng cáo.',
    category: 'Sách lược',
    iconName: 'TrendingUp'
  },
  {
    id: 'ach-3',
    title: 'Hiệu năng sản xuất đột phá nhờ Generative AI',
    metric: 'Tiết kiệm 35%',
    description: 'Ứng dụng nhuần nhuyễn AI giúp rút ngắn 35% thời gian viết kịch bản, làm bảng phân cảnh visual và xử lý giọng đọc mẫu chuyên nghiệp.',
    category: 'Cốt lõi',
    iconName: 'Zap'
  },
  {
    id: 'ach-4',
    title: 'Quản lý phong trào & Hoạt động quy mô lớn',
    metric: '500+ Người dự',
    description: 'Điều phối toàn diện, thiết lập bối cảnh sân khấu và phụ trách truyền thông xã hội cho các buổi mít tinh lớn cho Đoàn hội & Công đoàn đơn vị.',
    category: 'Sự kiện',
    iconName: 'Users'
  }
];

export const achievementsDataEn: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Third Prize - 2024 Political Video Contest',
    metric: '3rd Prize 2024',
    description: 'Awarded Third Prize for scripting and editing a thought-provoking debate and commentary film with strong persuasive narrative structures.',
    category: 'Awards',
    iconName: 'Award'
  },
  {
    id: 'ach-2',
    title: 'Organic Reach Social Campaign Mastery',
    metric: '102K+ Views',
    description: 'Spearheaded short-form video campaigns reaching 102,000+ organic views on Facebook & TikTok with zero ad-spend.',
    category: 'Growth',
    iconName: 'TrendingUp'
  },
  {
    id: 'ach-3',
    title: 'Workflow Fast-Track via Generative AI',
    metric: '35% Faster',
    description: 'Leveraged AI toolchains (ChatGPT/Gemini) to save up to 35% of drafting, storyboard, and early concept iteration times.',
    category: 'AI Tech',
    iconName: 'Zap'
  },
  {
    id: 'ach-4',
    title: 'Event Management & Activity Command',
    metric: '500+ Attendees',
    description: 'Coordinated setups, visual assets and digital media promotions for multiple high-profile cultural and team-building events.',
    category: 'Events',
    iconName: 'Users'
  }
];

export const experiencesDataVi: Experience[] = [
  {
    id: 'exp-bprod',
    period: '2025 – 2026',
    role: 'Thực tập sinh Sáng tạo Nội dung, Biên tập Video & Chiến lược gia',
    company: 'B PRODUCTIONS',
    location: 'Đà Nẵng, Việt Nam',
    details: [
      'Xây dựng ý tưởng kịch bản độc đáo và biên tập các sản phẩm video ngắn (TikTok, Reels) quảng bá thương hiệu cho các khách hàng doanh nghiệp.',
      'Sử dụng và tích hợp linh hoạt các công cụ AI hiện đại (Gemini, Midjourney) để rút ngắn 20% thời gian lên phác thảo phân cảnh và lời bình mẫu.',
      'Phối hợp nhịp nhàng với đội ngũ kỹ thuật và Designer để đảm bảo tinh chuẩn chất lượng hình ảnh nghệ thuật và đúng thời hạn bàn giao.'
    ]
  },
  {
    id: 'exp-mocha',
    period: 'Tháng 05 – Tháng 09, 2025',
    role: 'Biên tập viên Video (Freelance)',
    company: 'Mocha Cosmetic & bioactive_mocha',
    location: 'Đà Nẵng (Remote)',
    details: [
      'Chịu trách nhiệm hậu kỳ toàn bộ chuỗi nội dung video ngắn định vị dòng mỹ phẩm làm đẹp thiên nhiên dành cho sinh viên.',
      'Thiết kế nhịp dựng nhanh, áp dụng chuyển cảnh và âm thanh xu hướng (sound effects) giúp đẩy tỷ lệ retention rate bình quân lên tới 45%.',
      'Cải thiện hiệu suât lan toả thương hiệu tự nhiên đạt mức tiếp cận tệp khách hàng tiềm năng 10,000+ người mỗi chiến dịch.'
    ]
  },
  {
    id: 'exp-union',
    period: '2022 – 2024',
    role: 'Hỗ trợ Nội dung, Sự kiện & Truyền thông Mạng xã hội',
    company: 'Văn phòng Công đoàn',
    location: 'Đà Nẵng, Việt Nam',
    details: [
      'Đồng hành chuẩn bị kế hoạch, thiết kế bối cảnh, âm thanh và điều phối nhiều sự kiện lớn của tổ chức với hơn 500+ người tham gia.',
      'Sản xuất các ấn phẩm truyền thông hình ảnh đa phương tiện giúp gia tăng 30% tỷ lệ tương tác trực tuyến nội bộ.',
      'Điều phối thông tin liên bộ phận mượt mà, nâng cấp rõ rệt tiến độ công việc chung đạt hiệu suất tối ưu.'
    ]
  },
  {
    id: 'exp-dau',
    period: '2022 – 2023',
    role: 'Ủy viên Ban Truyền thông & Sáng tạo kịch bản',
    company: 'Đội Thanh niên Tình nguyện D.A.U',
    location: 'Trường Đại học Kiến trúc Đà Nẵng, Việt Nam',
    details: [
      'Lên kịch bản chi tiết, sản xuất tài nguyên hình ảnh quảng bá cho các chương trình tình nguyện cộng đồng, quyên góp xã hội của sinh viên.',
      'Sản xuất, quay chụp và thiết kế đồ hoạ giúp các bài viết tiếp cận hơn 25k+ người theo dõi tự nhiên.',
      'Liên kết chặt chẽ cùng các tổ chức thanh niên địa phương tổ chức triển khai hoạt động an sinh bền vững.'
    ]
  }
];

export const experiencesDataEn: Experience[] = [
  {
    id: 'exp-bprod',
    period: '2025 – 2026',
    role: 'Intern Video Editor & Content Creator & Strategist',
    company: 'B PRODUCTIONS',
    location: 'Da Nang, Vietnam',
    details: [
      'Conceptualized high-converting video scripts and edited short-form commercial content (TikTok, Reels) for enterprise clients.',
      'Leveraged advanced generative AI workflows (Gemini, Midjourney) to trim down kịch bản drafting and initial storyboarding times by 20%.',
      'Worked alongside media and design professionals to consistently satisfy product specifications and deliver within tight deadlines.'
    ]
  },
  {
    id: 'exp-mocha',
    period: 'May – September 2025',
    role: 'Freelance Video Editor',
    company: 'Mocha Cosmetic & bioactive_mocha',
    location: 'Da Nang, Vietnam (Remote)',
    details: [
      'Led the post-production work for short-form video assets promoting organic beauty products tailored specifically for students.',
      'Designed high-tempo videos applying rich motion cues and tailored sound design to push average viewer retention up to 45%.',
      'Expanded baseline video visibility to secure over 10,000+ organic views per campaign.'
    ]
  },
  {
    id: 'exp-union',
    period: '2022 – 2024',
    role: 'Content & Event Support & Social Media Executive',
    company: 'Trade Union Office',
    location: 'Da Nang, Vietnam',
    details: [
      'Assisted in designing schedule flows, stage audio setups, and coordinating large organizational festivals hosting over 500+ attendees.',
      'Produced digital graphic assets and video recaps increasing internal and cloud engagements by 30%.',
      'Facilitated cross-department alignment ensuring consistent communication flows across multiple sub-teams.'
    ]
  },
  {
    id: 'exp-dau',
    period: '2022 – 2023',
    role: 'Media & Content Executive',
    company: 'D.A.U Volunteer Youth Team',
    location: 'Da Nang Architecture University',
    details: [
      'Developed thematic visual plans and published engaging event posts to champion diverse student volunteerism and fundraising campaigns.',
      'Drafted copy and designed social posters, expanding organic page impressions by over 25% during major campaigns.',
      'Established solid teamwork across student divisions to streamline coordination and boost event participation.'
    ]
  }
];

export const projectsTranslations = {
  vi: {
    badge: 'Dự án & Case studies thực tế',
    title: 'Case Studies & Chiến Dịch Điển Hình',
    desc: 'Phân tích sâu sát các đại diện tiếp thị đa kênh có sự gia tốc hiệu suất từ Trí tuệ Nhân tạo.',
    labelContestants: 'Thí sinh tham gia',
    labelVideos: 'Số Video ngắn sản xuất',
    labelViews: 'Tổng lượt xem tự nhiên',
    labelEngagement: 'Tỷ lệ tương tác chiến dịch',
    btnShowAI: 'Đào sâu Chiến lược & Quy trình AI',
    btnHideAI: 'Thu gọn kịch bản Case Study',
    txtChallenge: 'Thử thách chiến dịch',
    txtStrategy: 'Chiến lược thực thi',
    txtAI: 'Tích hợp Generative AI',
    txtTakeaway: 'Đột kết (Takeaways)'
  },
  en: {
    badge: 'Live Campaigns & Case Studies',
    title: 'Selected Campaigns & Case Studies',
    desc: 'Detailed teardowns of multi-channel social media strategies boosted with Generative AI workflows.',
    labelContestants: 'Contestants Registered',
    labelVideos: 'Short Videos Produced',
    labelViews: 'Total Organic Views',
    labelEngagement: 'Campaign Engagement Rate',
    btnShowAI: 'Dive into Strategy & AI Workflows',
    btnHideAI: 'Collapse Detailed Case Study',
    txtChallenge: 'Campaign Challenge',
    txtStrategy: 'Executed Strategy',
    txtAI: 'Generative AI Integration',
    txtTakeaway: 'Core Lessons & Takeaways'
  }
};

export const projectsDataVi: Project[] = [
  {
    id: 'project-ndsv',
    title: 'Nét Đẹp Sinh Viên D.A.U 2023',
    subtitle: 'Hệ thống định vị & phân phối video cuộc thi nhan sắc giảng đường',
    description: 'Kiến thiết kế hoạch nội dung từ vòng sơ loại tới chung kết. Trực tiếp đạo diễn âm thanh và hình ảnh, biên tập 22 video dọc tiếp cận hơn 100k+ lượt xem hoàn toàn không dùng chi phí tài trợ.',
    metrics: [
      { label: 'Thí sinh đăng ký', value: '82 Thí sinh' },
      { label: 'Asset Video ngắn', value: '22+ Video' },
      { label: 'Lượt xem tiếp cận', value: '102,586+ views' },
      { label: 'Retention tương tác', value: '6.9% CPC' }
    ],
    tags: ['Kịch bản Đa kênh', 'Hậu kỳ CapCut', 'Sự kiện Offline', 'Sáng tạo Video'],
    imageUrl: 'ndsv_cover',
    category: 'Campaign',
    challenge: 'Ngân sách quảng cáo bằng không trong khi đề bài của trường đặt ra là thu phát sóng và kéo tương tác từ hơn 5,000 sinh viên Kiến trúc Đà Nẵng một cách thực chất nhất.',
    strategy: 'Điều chuyển điểm chạm sang phân mục chuỗi video ngắn TikTok/Reels mang tinh thần hài hước, bộc bạch chân thật của sinh viên đằng sau bục giảng. Duy trì kịch bản đăng tải bài bản đúng múi giờ vàng.',
    aiImplementation: 'Đặt giả thiết prompt tối ưu hoá kịch bản bằng Gemini để xây dựng cấu trúc 15 mẫu đề kiểm kịch bản ứng phó tình huống giao dịch tự nhiên, xóa bỏ sự ngập ngừng của thí sinh khi nói.',
    takeaway: 'Chất kịch bản gắn liền với cảm xúc đời sống sinh viên chính là chìa khoá khơi gợi sự nhiệt tình ủng hộ vượt ngoài mong đợi.'
  },
  {
    id: 'project-emis',
    title: 'TikTok EMI\'S DANANG Growth',
    subtitle: 'Nâng cánh thương hiệu ẩm thực địa phương bền vững bằng mạng xã hội',
    description: 'Phân tích xu hướng tiêu dùng của giới trẻ Đà Nẵng, tối ưu hoá bộ từ khoá TikTok SEO kết hợp định hình thị giác chân thực cho kênh ẩm thực của nhãn.',
    metrics: [
      { label: 'Lượt xem Đột phá', value: '13,000+ views' },
      { label: 'Xem trung bình/post', value: '2k – 6.5k views' },
      { label: 'Lượng click mua hàng', value: 'Tự nhiên (Organic)' },
      { label: 'Chi phí Marketing', value: '0 VNĐ Ads' }
    ],
    tags: ['TikTok SEO', 'Social Cooking', 'Local Food Marketing', 'Viral Strategy'],
    imageUrl: 'emis_cover',
    category: 'TikTok Growth',
    challenge: 'Môi trường dịch vụ ăn uống và mua sắm tại Đà Nẵng vô cùng đỏ lửa. Kênh thương hiệu mới xây không nhận trợ giá quảng cáo tính phí ban đầu.',
    strategy: 'Triển khai SEO TikTok hướng dòng lưu lượng vào từ tìm kiếm vị trí tự nhiên của khách ẩm thực. Tập trung 3 giây đầu tiên kích thích vị giác qua màu sắc tươi tắn của sản phẩm.',
    aiImplementation: 'Áp dụng mô phỏng xử lý từ khoá thịnh hành bằng AI trợ lý dịch vụ, cấu trúc lời bình mẫu mượt mà tạo nhịp điệu kích hoạt cortisol cao độ.',
    takeaway: 'SEO xã hội đóng vai trò như thỏi nam châm thu hút nhu cầu thiết thực của người tiêu dùng về lâu dài.'
  }
];

export const projectsDataEn: Project[] = [
  {
    id: 'project-ndsv',
    title: 'Miss D.A.U Student Pageant 2023',
    subtitle: 'Event social media strategy & organic multi-channel content rollout',
    description: 'Devised the content blueprint from initial entry phases to the gala final. Produced and edited 22 vertical short-form videos reaching over 102k+ views organic with zero paid media.',
    metrics: [
      { label: 'Contestants Auditioned', value: '82 Applicants' },
      { label: 'Short Assets Shipped', value: '22+ Videos' },
      { label: 'Organic Campaign Views', value: '102,586+ Views' },
      { label: 'Engagement Performance', value: '6.9% CPC' }
    ],
    tags: ['Content Structuring', 'CapCut Editing', 'Live Production', 'Virality Design'],
    imageUrl: 'ndsv_cover',
    category: 'Campaign',
    challenge: 'Executing a university-wide promotional campaign for 5,000+ students on a solid zero-advertising budget while preserving high creative and stylistic appeal.',
    strategy: 'Shifted the core storytelling to raw behind-the-scenes vertical reels poking fun at architecture school life, accompanied by quick high-tempo candidate interviews.',
    aiImplementation: 'Ran prompt design on Gemini to compile 15 conversational hook variations that made students comfortable answering on camera without feeling awkward.',
    takeaway: 'Resonating with organic inside jokes and student life emotions holds vastly higher conversion values than heavily produced generic commercials.'
  },
  {
    id: 'project-emis',
    title: 'TikTok EMI\'S DANANG Growth',
    subtitle: 'Transforming local culinary presence via SEO and vertical algorithms',
    description: 'Analyzed food seeker intent profiles, performed deep TikTok keyword tags optimization, and directed visually mouthwatering, high-tempo culinary snippets.',
    metrics: [
      { label: 'Peak Video Impressions', value: '13,000+ Views' },
      { label: 'Typical Post Reaches', value: '2k – 6.5k Views' },
      { label: 'Audience Acquisition', value: '100% Organic' },
      { label: 'Ad-Spend Balance', value: '0 VND Ads' }
    ],
    tags: ['TikTok SEO', 'Food & Lifestyle', 'Local Campaigns', 'Video Marketing'],
    imageUrl: 'emis_cover',
    category: 'TikTok Growth',
    challenge: 'Da Nang hospitality market is intensely saturated. The brand channel was starting with zero base followers and demanded entirely organic brand lift.',
    strategy: 'Adopted native search intent SEO, packing descriptions and captions with high-volume Da Nang food search terms. Crafted eye-catching close-up editing to seize attention in under 3 seconds.',
    aiImplementation: 'Automated trending local tags scraper routines using AI scrapers to ensure scripts and themes always aligned with what regional tourists searched for.',
    takeaway: 'Search-optimized social content behaves like a pull mechanism, delivering highly motivated customers directly to the storefront.'
  }
];

export const workflowTranslations = {
  vi: {
    badge: 'Tối ưu hoá hiệu suất',
    title: 'Quy Trình Sáng Tạo Tối Hóa Bằng Trí Tuệ Nhân Tạo ⚡',
    desc: 'Cách thức tôi cộng tác sâu sắc cùng hệ sinh thái AI tiên tiến để tăng tốc gấp rưỡi hiệu quả truyền thông truyền thống.',
    txtFeature: 'ĐIỂM ĐỘT PHÁ'
  },
  en: {
    badge: 'Workflow Performance',
    title: 'AI-Empowered Creative Process ⚡',
    desc: 'How I co-pilot with bleeding-edge Generative AI software suites to multiply productivity without diluting human taste.',
    txtFeature: 'CORE BREAKTHROUGH'
  }
};

export const workflowStepsVi: WorkflowStep[] = [
  {
    id: 1,
    title: 'Nghiên cứu Thị trường & Đào sâu Insight',
    englishTitle: '1. Social Research',
    description: 'Sử dụng AI hỗ trợ để thu thập, chắt lọc dữ liệu xu hướng hiện tại và tìm ra ngách kịch bản tối ưu dành cho Gen Z.',
    icon: 'Search',
    details: [
      'Sử dụng các câu lệnh nâng cao trên ChatGPT/Gemini để trích lọc từ khoá ngành.',
      'Sách lược chân dung độc giả thế hệ Gen Z nhanh chóng.',
      'Lập bảng dữ liệu xu hướng tuần tự động tiện lợi.'
    ],
    highlight: 'Giảm 70% thời gian nghiên cứu chay'
  },
  {
    id: 2,
    title: 'Sáng tạo Ý tưởng & Quy hoạch Kịch bản',
    englishTitle: '2. AI-Driven Planning',
    description: 'Tương tác sâu với mô hình ngôn ngữ lớn để biến ý tưởng thô sơ thành 10 kịch bản quay phim chi tiết mang màu sắc riêng.',
    icon: 'Sparkles',
    details: [
      'Thiết kế cấu trúc Hooks (3 giây đầu) cuốn hút người dùng kéo xuống xem tiếp.',
      'Phát triển lời thoại ngắn gọn, tối ưu nhịp độ đọc vừa vặn từ 45-60 giây.',
      'Xây dựng kịch bản có luồng chuyển hướng hành vi rõ rệt.'
    ],
    highlight: 'Sở hữu kho ý tưởng kinh doanh không lo cạn'
  },
  {
    id: 3,
    title: 'Sản xuất Hình ảnh & Nghệ thuật Visuals',
    englishTitle: '3. Visual Creation',
    description: 'Ứng dụng các công cụ Midjourney, DALL-E 3 để tạo ra phân cảnh nháp chuẩn nghệ thuật và sơ đồ moodboard cực kỳ chân thực.',
    icon: 'Image',
    details: [
      'Sinh hình ảnh minh hoạ đồng nhất về concept màu sắc.',
      'Thiết kế ảnh đại diện (thumbnail) chất lượng cao kích thích click.',
      'Định tông màu (Color Palette) ấm áp, hiện đại mang bản sắc riêng.'
    ],
    highlight: 'Visual sáng vượt ranh giới thiết kế truyền thông'
  },
  {
    id: 4,
    title: 'Biên tập Chuyên nghiệp & Tăng tốc Hậu kỳ',
    englishTitle: '4. High-Speed Editing',
    description: 'Hậu kỳ trên CapCut Pro và Premiere Pro. Bản địa hóa âm thanh sống động (sound effects) kích thích người xem tương tác.',
    icon: 'Video',
    details: [
      'Áp dụng chuyển cảnh nghệ thuật (Seamless Transition) tăng độ kết nối giữa các cảnh.',
      'Tự động hoá phụ đề thông minh mượt mà đúng phông chữ thương hiệu.',
      'Lọc âm thu giọng đọc qua các bộ lọc lọc tạp âm tự động.'
    ],
    highlight: 'Đóng gói sản phẩm nhanh gấp 2 lần quy trình cũ'
  },
  {
    id: 5,
    title: 'Thiết kế SEO & Tự động Phân phối Đa kênh',
    englishTitle: '5. Intelligent Publishing',
    description: 'Lồng ghép các từ khóa ngách vào mô tả, thẻ hashtag để tối ưu SEO tự nhiên đưa video lên Xu hướng.',
    icon: 'Share2',
    details: [
      'Tối ưu hóa các cụm thẻ từ khóa tìm kiếm vị trí và địa điểm tốt nhất.',
      'Lên lịch tự động vào các dòng múi giờ vàng có lưu lượng người lướt mạng cao nhất.',
      'Thử nghiệm nội dung tối ưu hoá cho từng tệp thuật toán khác nhau.'
    ],
    highlight: 'Gia tăng lưu lượng tiếp cận tự nhiên tốt thêm 30%'
  },
  {
    id: 6,
    title: 'Phân tích Số liệu & Đo lường Tinh chỉnh',
    englishTitle: '6. Strategic Analytics',
    description: 'Đo lường thời gian xem trung bình, điểm rơi cảm xúc, sửa kịch bản để tạo ra chu kì nội dung đột phá tiếp theo.',
    icon: 'BarChart3',
    details: [
      'Phát hiện điểm rơi người xem để cắt gọt nhịp dựng ở video kế tiếp.',
      'Phân tích tệp bình luận mở rộng kịch bản mới trúng nỗi băn khoăn khách hàng.',
      'Lập bảng theo dõi hiệu suất định kỳ dạng SaaS trực quan giúp đánh giá đổi mới.'
    ],
    highlight: 'Mài giũa chất lượng nội dung dựa trên số liệu thật'
  }
];

export const workflowStepsEn: WorkflowStep[] = [
  {
    id: 1,
    title: 'Market Research & Audience Insights',
    englishTitle: '1. Social Research',
    description: 'Using AI systems to mine social trends, discover high-potential keywords and construct focused Gen-Z profiles.',
    icon: 'Search',
    details: [
      'Prompt Gemini/ChatGPT to scrape and structure niche terms and market gaps.',
      'Delineate customer persona details based on live consumer chat logs.',
      'Organize weekly social performance metrics into clean spreadsheet grids.'
    ],
    highlight: 'Slashes upfront research times by 70%'
  },
  {
    id: 2,
    title: 'AI-Guided Script & Conceptualization',
    englishTitle: '2. AI-Driven Planning',
    description: 'Co-piloting with Large Language Models to transform seed ideas into 10 detailed, highly retention-optimized scripts.',
    icon: 'Sparkles',
    details: [
      'Inject high-performing hooks in the first 3 seconds to capture focus.',
      'Design fast-paced voiceover speech flows balanced for 45-60 seconds reels.',
      'Map content across marketing funnel stages: Attract, Nurture, and Sell.'
    ],
    highlight: 'Unlock an endless pipeline of unique storyboard themes'
  },
  {
    id: 3,
    title: 'Asset Concept & Visual Prototyping',
    englishTitle: '3. Visual Creation',
    description: 'Employing Midjourney and DALL-E 3 to visualize scenic thumbnails, storyboard backdrops and concept assets.',
    icon: 'Image',
    details: [
      'Render ultra-HD custom mockups exhibiting cohesive brand coloring schemes.',
      'Design high-CTR overlay thumbnails optimized for visual interest.',
      'Enforce consistent visual elements (warmths, grades) to enhance identity.'
    ],
    highlight: 'Generate professional mockups beyond traditional timelines'
  },
  {
    id: 4,
    title: 'Smart Editing & Accelerated Production',
    englishTitle: '4. High-Speed Editing',
    description: 'Editing inside CapCut Pro & Premiere Pro. Layering sound effects (SFX) that maintain physiological alertness.',
    icon: 'Video',
    details: [
      'Deploy smooth seamless transition flows matching visual focal points.',
      'Automate captions generation with curated fonts and high-contrast styling.',
      'Run audio cleaning modules to extract clean, crisp speech files.'
    ],
    highlight: 'Shrinks production cycles to ship videos twice as fast'
  },
  {
    id: 5,
    title: 'Video SEO & Programmatic Distribution',
    englishTitle: '5. Intelligent Publishing',
    description: 'Embedding core local keywords inside descriptions and tags, arranging posts for perfect high-traffic slots.',
    icon: 'Share2',
    details: [
      'Optimize localized search meta tags on social networks to pull long-term traffic.',
      'Automate publishing calendars to synchronize with regional prime-time usage.',
      'Custom adapt description structures per unique channel algorithms.'
    ],
    highlight: 'Gains average 30% boost in long-tail SEO impressions'
  },
  {
    id: 6,
    title: 'Data Teardowns & Feedback Optimization',
    englishTitle: '6. Strategic Analytics',
    description: 'Analyzing retention charts, point-of-drops, and comment sentiments to optimize the next creative iterations.',
    icon: 'BarChart3',
    details: [
      'Trace exact user exit timestamps to tighten up subsequent sequence frames.',
      'Categorize recurring comments to extract the next highly requested topics.',
      'Convert metric results into clean visual updates indicating return-on-investment.'
    ],
    highlight: 'Continually raises creative quality backed by accurate metrics'
  }
];

export const certificationsTranslations = {
  vi: {
    badge: 'Chứng nhận năng lực',
    title: 'Hồ Sơ Chứng Chỉ Quốc Tế 📜',
    desc: 'Bản lĩnh thực chiến từ các học viện công nghệ hàng đầu trên toàn cầu.'
  },
  en: {
    badge: 'Education & Credentials',
    title: 'National & Global Certifications 📜',
    desc: 'Validated skillsets from top-tier educational institutions and tech authorities.'
  }
};

export const certificationsDataVi: Certification[] = [
  {
    id: 'cert-toeic',
    title: 'Chứng chỉ tiếng Anh Quốc tế TOEIC 840 (Listening & Reading)',
    issuer: 'IIG Việt Nam (Độc quyền ETS Hoa Kỳ)',
    date: 'Tháng 04, 2026',
    description: 'Đạt thành tích 840/990 điểm nghe và đọc hiểu tiếng Anh. Chứng thực khả năng ngoại ngữ lưu loát, dịch thuật, bản địa hoá kịch bản thương mại quốc tế tốt.',
    skillsDemonstrated: ['Tiếng Anh Thương Mại', 'Dịch thuật Kịch bản', 'Giao Tiếp Quốc Tế']
  },
  {
    id: 'cert-1',
    title: 'Foundations of Digital Marketing and E-commerce',
    issuer: 'Google x Coursera Academy',
    date: 'Tháng 06, 2026',
    description: 'Tìm hiểu tầm quan trọng của việc đo lường kết quả và theo dõi các chỉ số trực tuyến. Nghiên cứu cách các chuyên gia Digital Marketing và E-commerce sử dụng dữ liệu để đánh giá, cải thiện hiệu suất và kể câu chuyện qua số liệu (Data Storytelling). Mục tiêu học tập bao gồm: Hiểu sâu về Performance Marketing và các mục tiêu của nó; Hiểu sự cần thiết của dữ liệu trong thương mại điện tử; Nhận diện cách diễn giải dữ liệu hỗ trợ doanh nghiệp đưa ra quyết định; Nắm vững các cấu thành cơ bản của nghệ thuật kể chuyện bằng dữ liệu (Data Storytelling). (Hiện đang trong quá trình hoàn thành trọn bộ chương trình Google Digital Marketing & E-commerce).',
    skillsDemonstrated: ['Digital Marketing', 'SEO Optimization', 'Data Storytelling', 'Performance Marketing']
  },
  {
    id: 'cert-2',
    title: 'Google AI Professional Certificate',
    issuer: 'Google x Coursera Academy',
    date: 'Tháng 06, 2025',
    description: 'Đào tạo năng lực AI quốc tế chuyên sâu: Thiết lập tư duy cộng tác để đưa ra chỉ dẫn rõ ràng giúp AI hoạt động như một cộng tác viên chuyên nghiệp; Sử dụng AI trách nhiệm dựa trên sự thấu hiểu phương thức vận hành công nghệ; Làm chủ các kỹ năng thiết yếu tại môi trường làm việc hiện đại như phân tích dữ liệu, nghiên cứu và giao tiếp; Ứng dụng Vibe Coding tự xây dựng các phần mềm tùy chỉnh giải quyết các thách thức công tác thực tế mà không cần kinh nghiệm lập trình.',
    skillsDemonstrated: ['Google AI', 'Vibe Coding', 'Prompt Engineering', 'AI Responsible Usage']
  }
];

export const certificationsDataEn: Certification[] = [
  {
    id: 'cert-toeic',
    title: 'TOEIC L&R 840 International Certificate',
    issuer: 'IIG Vietnam (ETS Representative)',
    date: 'April 2026',
    description: 'Scored 840/990 on Listening and Reading sections. Verifies fluent business communication, international copywriting, and global trend-spotting capabilities.',
    skillsDemonstrated: ['Business English', 'Script Translation', 'Intercultural Communication']
  },
  {
    id: 'cert-1',
    title: 'Foundations of Digital Marketing and E-commerce',
    issuer: 'Google x Coursera Academy',
    date: 'June 2026',
    description: 'You will learn the importance of measuring results and common metrics to track. You’ll also examine how digital marketers and e-commerce specialists use data to assess and improve performance and tell stories with data. Learning Objectives: Understand the practice of performance marketing and its goals; Understand the importance of data for e-commerce; Identify how data interpretation helps businesses make decisions; Understand the basic elements of data storytelling and their importance. (Currently in the process of completing the full Google Digital Marketing & E-commerce certification program).',
    skillsDemonstrated: ['Digital Marketing', 'Data Storytelling', 'Performance Marketing', 'Marketing Analytics']
  },
  {
    id: 'cert-2',
    title: 'Google AI Professional Certificate',
    issuer: 'Google x Coursera Academy',
    date: 'June 2025',
    description: "What you'll learn: Adopt a collaborator mindset by learning to give AI clear instructions so it acts as a professional collaborator, not just a simple task completer; Use AI responsibly by understanding how AI works so you can use these tools confidently and responsibly; Master in-demand skills focusing on domains where AI is transforming work most, including data analysis, research, and communication; Build custom apps using vibe coding to create a custom app that solves your unique workplace challenges, with no coding experience required.",
    skillsDemonstrated: ['Google AI', 'Vibe Coding', 'Prompt Engineering', 'Responsible AI']
  }
];

export const marketingCasesTranslations = {
  vi: {
    badge: 'Tự nghiên cứu & Phân tích',
    title: 'Case Marketing Tôi Tự Nghiên Cứu',
    desc: 'Những phân tích chiến lược marketing thực tế tôi tự tìm hiểu để trau dồi tư duy chiến lược và cập nhật xu hướng ngành.',
    labelSelfStudy: 'Tự nghiên cứu',
    labelChallenge: 'Bài toán thương hiệu',
    labelStrategy: 'Chiến lược triển khai',
    labelResult: 'Kết quả đạt được',
    labelInsight: 'Insight cốt lõi',
    btnExpand: 'Xem phân tích',
    btnCollapse: 'Thu gọn',
    labelFrameworks: 'Framework áp dụng'
  },
  en: {
    badge: 'Self-Research & Analysis',
    title: 'Marketing Cases I\'ve Analyzed',
    desc: 'Strategic marketing breakdowns I independently researched to sharpen my analytical thinking and stay current with industry trends.',
    labelSelfStudy: 'Self-Researched',
    labelChallenge: 'Brand Challenge',
    labelStrategy: 'Deployed Strategy',
    labelResult: 'Outcome Achieved',
    labelInsight: 'Core Insight',
    btnExpand: 'View Analysis',
    btnCollapse: 'Collapse',
    labelFrameworks: 'Frameworks Applied'
  }
};

const kfcDetailVi: MarketingCaseDetailData = {
  heroTitle: 'Case Study #02: KFC — Khi "Bug" Truyền Thông Trở Thành "Tính Năng" Viral',
  brand: 'KFC',
  opponents: 'Lotteria, Jollibee, Texas Chicken',
  industry: 'F&B — Fast Food Chain',
  coreProblem: 'Content Fatigue — Bội thực nội dung lặp đi lặp lại mùa chiến dịch',
  models: ['Pratfall Effect', 'Brand Funnel Optimization', 'Share of Voice (SoV)'],
  hook: 'Anh IT đi giải case marketing để tìm cảm hứng code. Lần này không phải 1, mà là cuộc chiến "Tứ đại quyền lực gà rán" đối mặt với mùa hè "Bội thực thử thách ăn gà". Nhưng trong khi ba ông lớn kia đang dính "bug" nghiêm trọng về nội dung, chỉ có một mình KFC là biết cách "refactor" (tái cấu trúc) lại cuộc chơi.',
  contextInsight: 'Mùa hè là mùa của "Hội chứng sao chép source code". Chuỗi nào cũng tung "Thử thách ăn cay 7 cấp độ", "Vòng quay trúng thưởng", "Unbox combo mùa hè". Năm nào cũng vậy, chỉ đổi tên món chứ không đổi thuật toán. Nội dung quá "sạch", quá "kịch bản" (Hard PR). Khách hàng bây giờ có "hệ thống lọc spam" tự nhiên trong đầu, thấy quảng cáo là họ "Skip" ngay.',
  coreInsight: 'Khách hàng không chán gà rán, khách hàng chỉ chán việc phải xem các thương hiệu "diễn vai hoàn hảo" (The Perfection Fatigue). Và giữa lúc 3 đối thủ đang bận "chạy đoạn script" giống nhau, KFC chọn cách... crash hệ thống.',
  competitorRows: [
    { brand: 'Lotteria',       contentChoice: 'Re-use Thử thách 7 cấp độ',     customerPsych: '"Lại là bài cũ từ mấy năm trước"',    systemResult: 'Bounce Rate tăng cao',             isHighlight: false },
    { brand: 'Jollibee',       contentChoice: 'KOLs Unbox chuẩn kịch bản',      customerPsych: '"Quảng cáo thôi, lướt qua luôn"',      systemResult: 'Thấp Organic Engagement',          isHighlight: false },
    { brand: 'Texas Chicken',  contentChoice: 'Minigame vòng quay may mắn',     customerPsych: '"Chẳng bao giờ trúng đâu"',            systemResult: 'Chết tương tác (Dead Click)',       isHighlight: false },
    { brand: 'KFC',            contentChoice: 'Tự trào & Show lỗi (Bug)',        customerPsych: '"Ủa thật luôn? Page bị hack hả?"',     systemResult: 'Viral / Tỷ lệ Share đột biến',    isHighlight: true  },
  ],
  kfcSolution: 'KFC làm ngược lại hoàn toàn. Khi đối thủ cố che giấu khuyết điểm, KFC chủ động tổng hợp tất cả "Bug" của mình: Giao hàng trễ, hết món hot, nhân viên lạnh lùng... họ biến nó thành một chuỗi Content "Tự trào" (Self-deprecating Marketing) cực kỳ bắt trend — lấy cảm hứng từ chiến lược "Sassy Twitter" của Wendy\'s (2017): biến kênh CSKH khô khan thành một "Cá tính sắc sảo", chủ động đi "cà khịa" đối thủ để chiếm Share of Voice.',
  frameworks: [
    {
      id: 'pratfall',
      name: 'Pratfall Effect (Hiệu ứng Sẩy Chân)',
      concept: 'Xu hướng đánh giá một cá nhân hoặc thương hiệu trở nên đáng yêu, gần gũi và đáng tin cậy hơn sau khi họ mắc lỗi hoặc tự bộc lộ sự không hoàn hảo của mình (với điều kiện họ đã có một nền tảng năng lực tốt trước đó). Tự trào trước khi bị trào.',
      uiNote: 'Đồ thị cong: Trục X = Mức độ hoàn hảo (Bình thường → Cố tỏ ra hoàn hảo → Tự nhận khuyết điểm). Trục Y = Brand Affection. Đỉnh cong tại "Tự nhận khuyết điểm" (KFC). Điểm thấp nhất tại "Cố tỏ ra hoàn hảo vô cảm" (đối thủ).'
    },
    {
      id: 'brandFunnel',
      name: 'Brand Funnel Optimization & Share of Voice',
      concept: 'Chiến lược này đánh mạnh vào tầng đỉnh phễu (Top of the Funnel — Awareness & Preference), biến đổi cảm xúc tiêu cực của khách hàng thành sự thích thú tự nhiên.',
      formula: 'SoV = (Lượng thảo luận về KFC ÷ Tổng lượng thảo luận ngành Gà rán) × 100%',
      uiNote: 'Biểu đồ phễu 3 tầng (Awareness → Consideration → Preference). Tầng Awareness của KFC phình to và phát sáng đỏ, thể hiện lượng UGC tự nhiên vượt trội.'
    },
    {
      id: 'ugc',
      name: 'UGC Complaint Optimization',
      concept: 'Biến phàn nàn của khách hàng thành nguyên liệu sáng tạo thô (Raw Content), cắt giảm chi phí sản xuất kịch bản giả tạo.',
      uiNote: 'Flow diagram: Comment tiêu cực → Lọc an toàn → Phản hồi hài hước → Viral post.'
    },
    {
      id: 'noScript',
      name: 'No-Script Tone of Voice',
      concept: 'Gỡ bỏ văn mẫu PR, giao tiếp như một "Real Human". Đối thủ update bản vá lỗi với dòng "Cải thiện trải nghiệm người dùng", còn KFC nói thẳng: "Tụi mình biết tuần trước giao gà nguội, xin lỗi nha!" — đó là lý do vì sao "Bug" của KFC lại được khách hàng đón nhận.',
      uiNote: 'So sánh đoạn text: [Văn mẫu PR cứng nhắc] vs [KFC No-Script voice].'
    }
  ],
  benchmark: {
    title: 'Benchmark Quốc Tế: Wendy\'s Twitter (2017)',
    period: '2017',
    story: 'Vào năm 2017, Wendy\'s (Mỹ) thay đổi hoàn toàn cách vận hành tài khoản Twitter từ trả lời lịch sự sang "cà khịa" có chọn lọc. Khi một user thách thức: "Gà đóng băng thì làm sao mà tươi?", Wendy\'s đáp trả: "Thế bạn quên trên đời có tồn tại cái gọi là tủ lạnh rồi à?". Kết quả: Biến kênh CSKH khô khan thành một "Cá tính sắc sảo", tạo ra hàng triệu lượt tương tác tự nhiên.',
    lesson: 'Bài học cho KFC: Đừng làm campaign một mùa, hãy biến tự trào thành một "Hệ điều hành giọng nói" (Consistent Voice OS) dài hạn trên mọi điểm chạm.'
  },
  kpis: [
    { label: 'Share of Voice',    abbr: 'SoV', description: 'Tỷ lệ thảo luận về KFC trong toàn bộ cuộc hội thoại ngành F&B. Mục tiêu: tăng đột biến trong giai đoạn campaign.' },
    { label: 'Engagement Rate',   abbr: 'ER',  description: 'Tỷ lệ tương tác tự nhiên (Like, Share, Comment) trên mỗi bài đăng. Chỉ số quan trọng nhất để đo "sức sống" của content.' },
    { label: 'Sentiment Score',   abbr: 'SS',  description: 'Chỉ số cảm xúc thương hiệu chuyển dịch từ Tiêu cực → Hài hước/Tích cực. Đây là thước đo cốt lõi của chiến dịch Self-deprecating.' }
  ],
  playbook: [
    { step: 1, title: 'Audit "Bug" Dữ Liệu', description: 'Thu thập toàn bộ feedback tiêu cực, lời troll của khách hàng trên social media trong 6 tháng gần nhất. Phân loại theo chủ đề: Giao hàng, Chất lượng sản phẩm, Thái độ nhân viên, Đóng gói...' },
    { step: 2, title: 'Lọc "Bug" An Toàn',    description: 'Loại bỏ các lỗi nghiêm trọng về sản phẩm/pháp lý (dị vật trong đồ ăn, ngộ độc...). Chỉ giữ lại lỗi về trải nghiệm vận hành (giao trễ, hết món hot, đóng gói chưa đẹp) — những thứ có thể tự trào mà không gây hại thương hiệu.' },
    { step: 3, title: 'Hạ Tông Giọng (Humanize)', description: 'Viết phản hồi với tư cách một con người thật biết đùa, biết nhận sai một cách hóm hỉnh. Tuyệt đối không dùng văn mẫu PR. Thêm emoji, slang thế hệ phù hợp. Tốc độ phản hồi: trong vòng 24h để giữ độ "tươi" của conversation.' }
  ],
  conclusion: 'Nếu campaign này thắng, KFC không được lặp lại nó vào mùa sau vì sẽ bị "trùng lặp code". Họ phải biến nó thành một "Hệ điều hành giọng nói" (Consistent Voice) trường kỳ trên mọi điểm chạm — không phải một chiến dịch, mà là một bản tính cách thương hiệu được lập trình sẵn.'
};

const dominosDetailVi: MarketingCaseDetailData = {
  heroTitle: 'Case Study #03: Domino\'s Pizza — Khi Thú Nhận Sự Thật Trở Thành Chiến Lược Vực Dậy Thương Hiệu',
  brand: "Domino's Pizza",
  opponents: 'Pizza Hut, Little Caesars & thị trường pizza Mỹ',
  industry: 'F&B — Pizza Chain (Mỹ)',
  coreProblem: 'Khủng hoảng sản phẩm nghiêm trọng — vị bánh tệ như "bìa các-tông", mất niềm tin tiêu dùng diện rộng',
  models: ['Radical Honesty', 'Brand Turnaround Matrix', 'Closed-Loop Feedback System', 'Pratfall Effect'],
  hook: 'Cuối thập niên 2000, khách hàng Mỹ nói thẳng: pizza của Domino\'s tệ như bìa các-tông. Phần lớn thương hiệu sẽ đổ tiền vào quảng cáo để lấp liếm. Domino\'s làm điều ngược lại hoàn toàn — họ lấy chính những lời chỉ trích tàn nhẫn nhất, đưa lên sóng truyền hình quốc gia, và tuyên bố: "Chúng tôi nghe thấy. Chúng tôi đã sai. Và đây là cách chúng tôi sửa."',
  contextInsight: 'Cuối thập niên 2000, hành vi tiêu dùng Mỹ dịch chuyển mạnh mẽ: khách hàng ngày càng khắt khe về sức khỏe, nguồn gốc nguyên liệu và chất lượng ẩm thực thực tế. Mô hình vận hành cũ của Domino\'s ưu tiên cực đoan tốc độ giao hàng (cam kết dưới 30 phút) dẫn đến hy sinh hoàn toàn trải nghiệm vị giác. Kết quả: khách hàng đồng loạt phản ứng, ví vỏ bánh với "bìa các-tông" và nước sốt với "ketchup công nghiệp".',
  coreInsight: 'Khách hàng không chỉ cần nhận bánh nhanh — họ cần sản phẩm xứng đáng với tiền bỏ ra. Quan trọng hơn, họ kỳ vọng thương hiệu phải ngừng lấp liếm và đối thoại sòng phẳng về chất lượng. Khi Domino\'s dũng cảm thừa nhận thất bại và cam kết cải tiến minh bạch, sự hoài nghi biến thành tò mò muốn thử lại.',
  kfcSolution: 'Domino\'s áp dụng "Ma trận Xoay chuyển Thương hiệu dựa trên Sự Chân Thành Cực Đoan" (Radical Honesty Brand Turnaround Matrix): thay vì đổ ngân sách quảng cáo lấp liếm, họ tái cấu trúc từ cốt lõi sản phẩm, công bố toàn bộ quy trình cải tiến một cách minh bạch, và mời chính những khách hàng đã chỉ trích nặng nhất đến chứng thực sản phẩm mới. Kết quả: doanh thu tăng vượt bậc ngay quý tiếp theo, cổ phiếu tăng phi mã.',
  competitorRows: [
    { brand: 'Chiến lược PR Spin',               contentChoice: 'Đổ ngân sách quảng cáo lấp liếm khủng hoảng',  customerPsych: '"Lại nói hay nhưng vẫn như cũ thôi"',     systemResult: 'Lòng tin tiếp tục suy giảm',           isHighlight: false },
    { brand: 'Silent Revamp (Âm thầm đổi mới)',   contentChoice: 'Cải tiến sản phẩm không thông báo',           customerPsych: '"Chẳng thấy khác biệt gì đâu"',          systemResult: 'Tái định vị thất bại',                 isHighlight: false },
    { brand: 'Blame External (Đổ lỗi bên ngoài)', contentChoice: 'Đổ lỗi cho chuỗi cung ứng, thị trường',      customerPsych: '"Không chịu trách nhiệm gì cả"',          systemResult: 'Mất uy tín hoàn toàn',                 isHighlight: false },
    { brand: "Domino's Pizza",                    contentChoice: 'Thú nhận lỗi, tái cấu trúc minh bạch',        customerPsych: '"Họ dũng cảm — tôi muốn thử lại"',        systemResult: 'Doanh thu + cổ phiếu tăng phi mã',    isHighlight: true  },
  ],
  frameworks: [
    {
      id: 'pratfall',
      name: 'Pratfall Effect (Hiệu ứng Sẩy Chân)',
      concept: 'Nghiên cứu của Elliot Aronson (1966): khi một thương hiệu có năng lực cốt lõi dám dũng cảm tự nhận khuyết điểm chân thành, mức độ uy tín và lòng tin từ công chúng tăng gấp bội. Domino\'s không phải thương hiệu tệ — họ chỉ đang "cố tỏ ra hoàn hảo" quá lâu. Khi thừa nhận, họ leo lên đỉnh đồ thị Brand Affection.',
      uiNote: 'Đồ thị cong: Trục X = Mức độ hoàn hảo (Bình thường → Cố tỏ ra hoàn hảo → Tự nhận khuyết điểm). Trục Y = Brand Affection. Đỉnh cong tại "Tự nhận khuyết điểm" (Domino\'s Pizza). Điểm thấp nhất tại "Cố tỏ ra hoàn hảo vô cảm".'
    },
    {
      id: 'generic',
      name: 'Radical Honesty Brand Turnaround Matrix',
      concept: 'Tiến trình 5 bước: [Khủng hoảng Chất lượng] → [Chân thành cực đoan: thừa nhận công khai] → [Minh bạch năng lực lõi: công bố quy trình cải tiến] → [Kiểm thử diện hẹp với khách hàng cũ] → [Đo lường & Tái định vị]. Đây là mô hình đối nghịch hoàn toàn với "PR Spin" — không che giấu, không giải thích, không biện hộ. Chỉ có thực tế và cam kết.',
      uiNote: 'Flow chart 5 bước tuyến tính: Khủng hoảng → Thú nhận → Minh bạch → Kiểm thử → Đo lường. Mỗi bước là cột mốc không thể đảo ngược trong cuộc cách mạng thương hiệu.'
    },
    {
      id: 'generic',
      name: 'Closed-Loop Feedback System (Hệ thống Phản hồi Vòng lặp Kín)',
      concept: 'Thay vì thu thập phản hồi một chiều, Domino\'s thiết lập vòng lặp khép kín: Khách hàng phàn nàn → Thương hiệu ghi nhận công khai → Sản phẩm được cải tiến → Khách hàng cũ được mời quay lại chứng thực → Phản hồi mới được thu thập. Mỗi vòng lặp tạo ra "Social Proof" cực kỳ chân thực, không thể làm giả.',
      uiNote: 'Vòng tròn khép kín: Complaint → Acknowledge → Improve → Validate → Repeat. Không phải đường thẳng một chiều mà là hệ sinh thái feedback liên tục tự cải thiện.'
    }
  ],
  benchmark: {
    title: 'Benchmark Lịch Sử: Avis — "We Try Harder" (1962)',
    period: '1962',
    story: 'Năm 1962, Avis — thương hiệu thuê xe đứng vị trí số 2 thị trường Mỹ — không cố che giấu thứ hạng thua kém. Thay vào đó, họ tuyên bố thẳng: "We\'re only number 2. We try harder." Chiến dịch tự thú nhận điểm yếu này ngay lập tức tạo làn sóng đồng cảm khổng lồ từ công chúng, giúp Avis tăng trưởng thị phần mạnh mẽ và biến "vị trí số 2" thành lợi thế cạnh tranh độc đáo mà vị trí số 1 không thể có.',
    lesson: 'Bài học cho Domino\'s: Sự chân thành không phải dấu hiệu của yếu đuối — đó là cơ chế kiến tạo lòng tin mạnh mẽ nhất. Người tiêu dùng không đòi hỏi thương hiệu phải hoàn hảo — họ chỉ cần thương hiệu đủ dũng cảm để trung thực và đủ nghiêm túc để thay đổi.'
  },
  kpis: [
    { label: 'Net Promoter Score',      abbr: 'NPS', description: 'Định lượng mức độ khách hàng sẵn sàng chủ động giới thiệu Domino\'s cho người thân sau khi thử sản phẩm mới. KPI cốt lõi đo lường lòng trung thành hậu turnaround.' },
    { label: 'Same-Store Sales Growth', abbr: 'SSG', description: 'Tỷ lệ tăng trưởng doanh số tại các điểm bán cũ — thước đo chứng minh hành vi tái mua hàng thực tế, không bị làm đẹp bởi việc mở cửa hàng mới.' },
    { label: 'Sentiment Score',         abbr: 'SS',  description: 'Chỉ số cảm xúc thương hiệu chuyển dịch từ Tiêu cực ("bìa các-tông") → Tò mò → Tích cực. Thước đo trực tiếp của chiến dịch Radical Honesty.' }
  ],
  playbook: [
    { step: 1, title: 'Công khai Khuyết điểm (The Confession)',          description: 'Đưa các đoạn clip phản hồi tiêu cực của khách hàng thực tế lên sóng truyền hình quốc gia và kỹ thuật số. Không chỉnh sửa, không giảm nhẹ — để khách hàng nói thẳng những điều tệ nhất về sản phẩm. Sự tự nguyện phơi bày này tạo ra sự chú ý tuyệt đối từ dư luận.' },
    { step: 2, title: 'Minh bạch hóa Cải tiến (The Open Source Labs)',   description: 'Công bố các thước phim thực tế tại phòng nghiên cứu, ghi lại quá trình đầu bếp đập đi xây lại toàn bộ công thức bánh — từ đế đến nước sốt. Chứng minh đây là cuộc cách mạng sản phẩm nghiêm túc, không phải chiêu truyền thông.' },
    { step: 3, title: 'Kiểm thử & Chứng thực (The Market Validation)',   description: 'Mời trực tiếp những khách hàng từng chỉ trích nặng nề nhất đến trải nghiệm phiên bản bánh mới và ghi lại phản ứng khách quan. Biến "người phán xét" thành "nhân chứng bảo chứng" — đây là hình thức Social Proof chân thực nhất.' }
  ],
  conclusion: 'Khi hệ thống vận hành và trải nghiệm sản phẩm gặp lỗi cốt lõi, giải pháp tối ưu không phải là đổ ngân sách vào quảng cáo lấp liếm bề nổi. Cách duy nhất là tái cấu trúc tư duy quản trị, dũng cảm đối thoại công khai và đưa ra giải pháp sửa đổi triệt để. Domino\'s đã chứng minh: khi người dùng phát hiện lỗ hổng sản phẩm, cách duy nhất để giữ chân họ là sửa lỗi ngay lập tức — không phải giải thích rằng đó là "tính năng tiềm ẩn". Chân thành cực đoan không phải vũ khí của kẻ yếu — đó là chiến lược của người dẫn đầu thị trường.'
};

export const marketingCasesDataVi: MarketingCase[] = [
  {
    id: 'case-kfc',
    brand: 'KFC',
    title: 'KFC — Khi "Bug" Truyền Thông Trở Thành "Tính Năng" Viral',
    industry: 'F&B / Fast Food Chain',
    period: '2023 – 2024',
    description: 'Giải mã chiến thuật "Dân IT phân tích Marketing": KFC biến toàn bộ khuyết điểm vận hành (giao trễ, hết món, nhân viên lạnh lùng) thành chuỗi content tự trào cực kỳ bắt trend, trong khi Lotteria, Jollibee, Texas Chicken vẫn đang "chạy script" mùa hè cũ kỹ.',
    points: [
      { icon: 'challenge',  content: 'Mùa hè F&B: Cả 4 chuỗi gà rán đồng loạt tung thử thách ăn cay, minigame, KOL unbox — nội dung hoàn toàn giống nhau. Khách hàng bội thực (Content Fatigue), tỷ lệ Skip quảng cáo tăng vọt.' },
      { icon: 'strategy',   content: 'KFC chủ động "show bug": gom toàn bộ phàn nàn của khách (giao trễ, hết gà, nhân viên lạnh) → biến thành content tự trào hài hước. Áp dụng Pratfall Effect: thương hiệu thừa nhận lỗi trước khi bị chỉ trích.' },
      { icon: 'result',     content: 'Share of Voice tăng đột biến trong ngành. Sentiment Score chuyển từ tiêu cực sang hài hước/tích cực. Tỷ lệ share tự nhiên (Organic Share) vượt xa 3 đối thủ gộp lại, không tốn ngân sách ads.' },
      { icon: 'insight',    content: '"Bug" không phải điểm yếu — là nguyên liệu sáng tạo thô (Raw Content) miễn phí. Thương hiệu dám tự trào trước sẽ kiểm soát được narrative. Đây không phải chiến dịch — đây là một Hệ điều hành giọng nói (Voice OS) trường kỳ.' }
    ],
    tags: ['Self-deprecating Marketing', 'Pratfall Effect', 'Share of Voice', 'Content Fatigue', 'F&B Strategy'],
    coverGradient: 'from-red-600 to-rose-700',
    frameworks: ['Pratfall Effect', 'Brand Funnel', 'Share of Voice', 'No-Script Tone'],
    detailSlug: 'case-kfc',
    detail: kfcDetailVi
  },
  {
    id: 'case-dominos',
    brand: "Domino's Pizza",
    title: 'Domino\'s Pizza — Khi Thú Nhận Sự Thật Trở Thành Chiến Lược Vực Dậy Thương Hiệu',
    industry: 'F&B / Pizza Chain',
    period: '2009 – 2010',
    description: 'Giải mã chiến dịch "The Pizza Turnaround": Domino\'s chủ động công bố toàn bộ chỉ trích của khách hàng lên sóng truyền hình quốc gia, thừa nhận pizza tệ như "bìa các-tông", rồi tái cấu trúc hoàn toàn công thức sản phẩm từ cốt lõi. Chiến lược Radical Honesty biến khủng hoảng thành bước nhảy tăng trưởng ngoạn mục.',
    points: [
      { icon: 'challenge',  content: 'Khách hàng đồng loạt phê phán pizza Domino\'s tệ như "bìa các-tông". Mô hình cũ ưu tiên tốc độ giao hàng (dưới 30 phút) đã hy sinh hoàn toàn chất lượng sản phẩm. Thương hiệu đứng trước nguy cơ mất niềm tin tiêu dùng diện rộng.' },
      { icon: 'strategy',   content: 'Áp dụng "Radical Honesty Brand Turnaround Matrix": thú nhận lỗi công khai trên sóng truyền hình, minh bạch hóa toàn bộ quy trình tái cấu trúc sản phẩm (The Open Source Labs), rồi mời chính những khách hàng chỉ trích nhất đến chứng thực sản phẩm mới.' },
      { icon: 'result',     content: 'Doanh thu tăng vượt bậc ngay trong quý tiếp theo sau chiến dịch. Cổ phiếu Domino\'s tăng phi mã. Sự hoài nghi của công chúng biến thành lòng trung thành bền vững — một trong những case Brand Turnaround kinh điển nhất lịch sử F&B.' },
      { icon: 'insight',    content: 'Chân thành cực đoan (Radical Honesty) là vũ khí mạnh nhất khi sản phẩm gặp khủng hoảng cốt lõi. Không che giấu, không giải thích — chỉ thừa nhận và sửa đổi triệt để. Đây là chiến lược của người dẫn đầu thị trường, không phải kẻ yếu đuối.' }
    ],
    tags: ['Radical Honesty', 'Brand Turnaround', 'Pratfall Effect', 'Crisis Communication', 'F&B Strategy'],
    coverGradient: 'from-blue-700 to-slate-800',
    frameworks: ['Radical Honesty', 'Pratfall Effect', 'Brand Turnaround Matrix', 'Closed-Loop Feedback'],
    detailSlug: 'case-dominos',
    detail: dominosDetailVi
  }
];

const kfcDetailEn: MarketingCaseDetailData = {
  heroTitle: 'Case Study #02: KFC — When a PR "Bug" Becomes a Viral Feature',
  brand: 'KFC',
  opponents: 'Lotteria, Jollibee, Texas Chicken',
  industry: 'F&B — Fast Food Chain',
  coreProblem: 'Content Fatigue — Audience burnout from repetitive seasonal campaign templates',
  models: ['Pratfall Effect', 'Brand Funnel Optimization', 'Share of Voice (SoV)'],
  hook: 'An IT guy breaking down a marketing case for creative inspiration. This time it\'s not just one brand — it\'s the "Big Four Fried Chicken Battle" vs. the summer season of "Challenge Overload". While three competitors are stuck with serious content "bugs", KFC alone knows how to refactor the game.',
  contextInsight: 'Summer = "Copy-paste source code syndrome." Every chain launches "7-Level Spicy Challenge", "Lucky Spin", "Summer Combo Unbox." Same script, different product name. Content is too polished, too scripted (Hard PR). Customers now have a natural spam filter built into their brains — they Skip the moment they sense an ad.',
  coreInsight: 'Customers aren\'t tired of fried chicken — they\'re tired of watching brands "play the perfect role" (The Perfection Fatigue). While 3 competitors are busy running the same script, KFC chose to... crash the system.',
  competitorRows: [
    { brand: 'Lotteria',      contentChoice: 'Re-used 7-Level Challenge',     customerPsych: '"Same old campaign from years ago"',       systemResult: 'High Bounce Rate',              isHighlight: false },
    { brand: 'Jollibee',      contentChoice: 'Scripted KOL Unbox format',      customerPsych: '"Just an ad, keep scrolling"',              systemResult: 'Low Organic Engagement',        isHighlight: false },
    { brand: 'Texas Chicken', contentChoice: 'Lucky Spin Minigame',            customerPsych: '"I never win anyway"',                      systemResult: 'Dead Clicks (zero CTR)',         isHighlight: false },
    { brand: 'KFC',           contentChoice: 'Self-deprecation & Bug Reveal',  customerPsych: '"Wait, is this real? Did they get hacked?"', systemResult: 'Viral / Organic Share Spike',   isHighlight: true  },
  ],
  kfcSolution: 'KFC did the complete opposite. While competitors tried to hide flaws, KFC proactively surfaced all their own "bugs": late deliveries, sold-out menu items, cold staff... and turned them into a self-deprecating content series. Inspired by Wendy\'s "Sassy Twitter" strategy (2017): transforming a dry customer service channel into a sharp brand personality that proactively roasts competitors to capture Share of Voice.',
  frameworks: [
    {
      id: 'pratfall',
      name: 'Pratfall Effect',
      concept: 'The tendency to rate a person or brand as more likable, approachable, and trustworthy after they make a mistake or reveal imperfection — provided they already have an established base of competence. Self-roast before getting roasted.',
      uiNote: 'Curve graph: X-axis = Perfection level (Normal → Trying too hard → Self-admitting flaws). Y-axis = Brand Affection. Peak at "Self-admitting flaws" (KFC). Lowest point at "Trying to appear flawlessly perfect" (competitors).'
    },
    {
      id: 'brandFunnel',
      name: 'Brand Funnel Optimization & Share of Voice',
      concept: 'This strategy aggressively targets the top of the funnel (Awareness & Preference), converting negative customer emotions into genuine entertainment and brand affection.',
      formula: 'SoV = (KFC Mentions ÷ Total Industry Fried Chicken Mentions) × 100%',
      uiNote: '3-tier funnel chart (Awareness → Consideration → Preference). KFC\'s Awareness tier is inflated and glows red, illustrating dominant UGC-driven share.'
    },
    {
      id: 'ugc',
      name: 'UGC Complaint Optimization',
      concept: 'Turning customer complaints into raw creative material, slashing the cost of scripted ad production.',
      uiNote: 'Flow: Negative comment → Safety filter → Witty human response → Viral post.'
    },
    {
      id: 'noScript',
      name: 'No-Script Tone of Voice',
      concept: 'Drop the PR template, communicate like a real human. Competitors patch bugs with "Improving user experience", KFC says: "We know we sent cold chicken last week — sorry about that!" That\'s why KFC\'s bugs get embraced instead of condemned.',
      uiNote: 'Side-by-side text comparison: [Rigid PR boilerplate] vs [KFC No-Script human voice].'
    }
  ],
  benchmark: {
    title: 'International Benchmark: Wendy\'s Twitter (2017)',
    period: '2017',
    story: 'In 2017, Wendy\'s (US) completely transformed their Twitter approach from polite replies to selective roasting. When a user challenged: "How can your chicken be fresh if it\'s frozen?", Wendy\'s fired back: "Do you not know what a refrigerator is?" Result: transformed a dry customer service channel into a sharp brand personality, generating millions of organic interactions.',
    lesson: 'Lesson for KFC: Don\'t run a one-season campaign — turn self-deprecation into a long-term "Voice Operating System" (Consistent Voice OS) across every brand touchpoint.'
  },
  kpis: [
    { label: 'Share of Voice',   abbr: 'SoV', description: 'KFC\'s share of total F&B brand conversations. Target: spike during and after campaign window.' },
    { label: 'Engagement Rate',  abbr: 'ER',  description: 'Organic interaction rate (Likes, Shares, Comments) per post. The most critical measure of content vitality.' },
    { label: 'Sentiment Score',  abbr: 'SS',  description: 'Brand emotion index shifting from Negative → Humorous/Positive. The core KPI of the self-deprecating campaign.' }
  ],
  playbook: [
    { step: 1, title: 'Audit the "Bug" Data',       description: 'Collect all negative feedback and troll comments from social media over the past 6 months. Categorize by theme: Delivery, Product Quality, Staff Attitude, Packaging...' },
    { step: 2, title: 'Filter for "Safe Bugs"',    description: 'Eliminate serious product/legal issues (foreign objects in food, food poisoning). Keep only operational experience bugs (late delivery, sold-out items, packaging issues) — things you can self-roast without causing brand damage.' },
    { step: 3, title: 'Humanize the Tone',         description: 'Write responses as a real person who can joke and admit mistakes with humor. Zero PR templates. Add appropriate emojis and generational slang. Response window: within 24h to keep conversations fresh.' }
  ],
  conclusion: 'If this campaign wins, KFC cannot repeat it next season or risk "duplicate code." They must transform it into a long-term "Voice Operating System" (Consistent Voice) across all brand touchpoints — not a one-off campaign, but a permanently programmed brand personality.'
};

const dominosDetailEn: MarketingCaseDetailData = {
  heroTitle: "Case Study #03: Domino's Pizza — When Radical Honesty Became the Ultimate Brand Turnaround",
  brand: "Domino's Pizza",
  opponents: 'Pizza Hut, Little Caesars & the US pizza market',
  industry: 'F&B — Pizza Chain (USA)',
  coreProblem: "Severe product crisis — pizza described as tasting like 'cardboard', widespread consumer trust collapse",
  models: ['Radical Honesty', 'Brand Turnaround Matrix', 'Closed-Loop Feedback System', 'Pratfall Effect'],
  hook: "In the late 2000s, American customers said it bluntly: Domino's pizza tastes like cardboard. Most brands would pour money into advertising to paper over the crisis. Domino's did the complete opposite — they took the harshest criticisms, broadcast them on national television, and declared: \"We hear you. We were wrong. And here's how we're fixing it.\"",
  contextInsight: "In the late 2000s, American consumer behavior shifted dramatically: customers grew increasingly demanding about health, ingredient sourcing, and actual food quality. Domino's old operating model prioritized delivery speed above all else (the famous 30-minute guarantee), completely sacrificing taste experience. Result: customers openly comparing the crust to 'cardboard' and the sauce to 'industrial ketchup.'",
  coreInsight: "Customers don't just need pizza delivered fast — they need a product worth the money they paid. More importantly, they expect brands to stop covering up failures and engage honestly about quality. When Domino's bravely admitted their product failures and committed to transparent improvement, public skepticism transformed into curiosity to try again.",
  kfcSolution: "Domino's applied the 'Radical Honesty Brand Turnaround Matrix': instead of pouring ad budgets into surface-level cover-ups, they restructured from the product core, publicly disclosed their entire improvement process with radical transparency, and invited their harshest critics back to validate the new product. Result: revenue surged in the very next quarter, stock price skyrocketed.",
  competitorRows: [
    { brand: 'PR Spin Strategy',            contentChoice: 'Pour ad budget to mask the crisis',         customerPsych: '"Sounds great but nothing has changed"', systemResult: 'Trust continues to erode',           isHighlight: false },
    { brand: 'Silent Revamp',               contentChoice: 'Improve product with no announcement',      customerPsych: '"I can\'t tell any difference"',         systemResult: 'Repositioning fails',               isHighlight: false },
    { brand: 'Blame External Factors',      contentChoice: 'Blame supply chain or market conditions',   customerPsych: '"They take zero responsibility"',         systemResult: 'Complete credibility collapse',      isHighlight: false },
    { brand: "Domino's Pizza",              contentChoice: 'Admit flaws, rebuild with full transparency', customerPsych: '"They\'re brave — I want to try again"', systemResult: 'Revenue surge + stock price rockets', isHighlight: true  },
  ],
  frameworks: [
    {
      id: 'pratfall',
      name: 'Pratfall Effect',
      concept: "Elliot Aronson's 1966 research proved: when a competent brand bravely admits its flaws with genuine sincerity, public trust and credibility increase exponentially. Domino's wasn't a bad brand — they were simply 'trying too hard to appear perfect' for too long. Once they admitted their failures, they climbed to the peak of the Brand Affection curve.",
      uiNote: "Curve graph: X-axis = Perfection level (Normal → Trying too hard to be perfect → Self-admitting flaws). Y-axis = Brand Affection. Peak at 'Self-admitting flaws' (Domino's Pizza). Lowest point at 'Trying to appear flawlessly perfect.'"
    },
    {
      id: 'generic',
      name: 'Radical Honesty Brand Turnaround Matrix',
      concept: '5-step process: [Quality Crisis] → [Radical Honesty: public admission] → [Core Capability Transparency: disclose improvement process] → [Narrow-Market Testing with former critics] → [Measure & Reposition]. This is the complete antithesis of "PR Spin" — no cover-ups, no explanations, no excuses. Only reality and commitment.',
      uiNote: '5-step linear flow: Crisis → Confess → Transparent Improvement → Validate → Measure. Each step is an irreversible milestone in the brand revolution.'
    },
    {
      id: 'generic',
      name: 'Closed-Loop Feedback System',
      concept: "Instead of collecting one-way feedback, Domino's established a closed-loop system: Customers complain → Brand publicly acknowledges → Product improves → Former critics invited back to validate → New feedback collected. Each loop generates genuinely authentic Social Proof that cannot be manufactured or faked.",
      uiNote: 'Closed-loop cycle: Complaint → Acknowledge → Improve → Validate → Repeat. Not a one-way pipeline but a continuously self-improving feedback ecosystem.'
    }
  ],
  benchmark: {
    title: "Historical Benchmark: Avis — 'We Try Harder' (1962)",
    period: '1962',
    story: "In 1962, Avis — the #2 car rental brand in the US market — made no attempt to hide their inferior market position. Instead, they declared outright: 'We're only number 2. We try harder.' This campaign of voluntarily admitting weakness immediately generated massive public sympathy, grew Avis's market share significantly, and turned being '#2' into a unique competitive advantage that the #1 brand simply couldn't replicate.",
    lesson: "Lesson for Domino's: Honesty is not a sign of weakness — it is the most powerful trust-building mechanism a brand can possess. Consumers don't demand perfection — they just need a brand brave enough to be truthful and serious enough to actually change."
  },
  kpis: [
    { label: 'Net Promoter Score',      abbr: 'NPS', description: "Quantifies the percentage of customers who proactively recommend Domino's to friends and family after trying the new product. The core KPI measuring post-turnaround brand loyalty." },
    { label: 'Same-Store Sales Growth', abbr: 'SSG', description: 'Revenue growth rate at existing store locations — the metric that proves genuine repeat purchase behavior without being inflated by new store openings.' },
    { label: 'Sentiment Score',         abbr: 'SS',  description: "Brand emotion index shifting from Negative ('cardboard') → Curious → Positive. The direct performance measurement of the Radical Honesty campaign." }
  ],
  playbook: [
    { step: 1, title: 'The Confession (Go Public with Flaws)',           description: "Broadcast real customer negative feedback clips on national TV and digital platforms — unfiltered and unedited. Let customers say the absolute worst things about the product on your own channels. This voluntary exposure generates absolute public attention and establishes the credibility needed for the turnaround." },
    { step: 2, title: 'The Open Source Labs (Transparent Improvement)',  description: "Publish real R&D kitchen footage documenting chefs completely rebuilding the pizza formula from scratch — crust, sauce, and toppings. Prove this is a genuine product revolution, not a PR campaign or surface rebrand." },
    { step: 3, title: 'The Market Validation (Invite Critics Back)',      description: "Directly invite the harshest former critics to experience the new product version and capture their unscripted, unfiltered reactions. Transform 'judges' into 'testimonial witnesses' — the most authentic form of Social Proof that money cannot buy." }
  ],
  conclusion: "When core operations and product experience have fundamental failures, the optimal solution is not to pour ad budgets into surface-level cover-ups. The only path forward is to restructure management thinking, engage in brave public dialogue, and implement thorough, irreversible fixes. Domino's proved: when customers discover product flaws, the only way to retain them is to fix the flaw immediately — not explain that it's a 'hidden feature.' Radical honesty is not the weapon of the desperate — it is the strategic signature of true market leaders."
};

export const marketingCasesDataEn: MarketingCase[] = [
  {
    id: 'case-kfc',
    brand: 'KFC',
    title: 'KFC — When a PR "Bug" Becomes a Viral Feature',
    industry: 'F&B / Fast Food Chain',
    period: '2023 – 2024',
    description: 'Breaking down the "IT Guy Solves Marketing" case: KFC turned all operational flaws (late deliveries, sold-out items, cold staff) into a self-deprecating viral content series — while Lotteria, Jollibee, and Texas Chicken were still running the same old summer script.',
    points: [
      { icon: 'challenge',  content: 'Summer F&B: All 4 fried chicken chains simultaneously launched spicy challenges, minigames, KOL unboxes — identical content across the board. Content Fatigue set in, ad Skip rates spiked.' },
      { icon: 'strategy',   content: 'KFC proactively "showed its bugs": collected all customer complaints (late delivery, sold-out chicken, cold staff) → turned them into a humorous self-deprecating content series. Applied Pratfall Effect: admit flaws before getting criticized.' },
      { icon: 'result',     content: 'Share of Voice spiked across the industry. Sentiment Score shifted from negative to humorous/positive. Organic Share rate surpassed all 3 competitors combined — zero ad spend.' },
      { icon: 'insight',    content: '"Bugs" aren\'t weaknesses — they\'re free raw creative material. The brand that self-roasts first controls the narrative. This isn\'t a campaign — it\'s a long-term Voice Operating System (Voice OS).' }
    ],
    tags: ['Self-deprecating Marketing', 'Pratfall Effect', 'Share of Voice', 'Content Fatigue', 'F&B Strategy'],
    coverGradient: 'from-red-600 to-rose-700',
    frameworks: ['Pratfall Effect', 'Brand Funnel', 'Share of Voice', 'No-Script Tone'],
    detailSlug: 'case-kfc',
    detail: kfcDetailEn
  },
  {
    id: 'case-dominos',
    brand: "Domino's Pizza",
    title: "Domino's Pizza — When Radical Honesty Became the Ultimate Brand Turnaround Strategy",
    industry: 'F&B / Pizza Chain',
    period: '2009 – 2010',
    description: "Breaking down 'The Pizza Turnaround' campaign: Domino's voluntarily broadcast their harshest customer criticisms on national TV, admitted their pizza tasted like 'cardboard', then completely restructured their product formula from the ground up. The Radical Honesty strategy transformed a crisis into a remarkable growth breakthrough.",
    points: [
      { icon: 'challenge',  content: "Customers openly criticized Domino's pizza as tasting like 'cardboard.' The delivery-speed-first model (under 30 minutes guaranteed) had completely sacrificed product quality. The brand faced a widespread consumer trust collapse with no obvious path forward." },
      { icon: 'strategy',   content: "Applied the 'Radical Honesty Brand Turnaround Matrix': publicly admitted flaws on national TV, transparently documented the entire product restructuring process (The Open Source Labs), then invited their harshest critics back to validate the new product formula." },
      { icon: 'result',     content: "Revenue surged dramatically in the very next quarter. Domino's stock price skyrocketed. Public skepticism transformed into lasting loyalty — one of the most iconic Brand Turnaround case studies in F&B history." },
      { icon: 'insight',    content: "Radical Honesty is the most powerful weapon when a product faces a core crisis. No cover-ups, no explanations — only honest admission and thorough fixes. This is the strategy of market leaders, not a desperate act of the weak." }
    ],
    tags: ['Radical Honesty', 'Brand Turnaround', 'Pratfall Effect', 'Crisis Communication', 'F&B Strategy'],
    coverGradient: 'from-blue-700 to-slate-800',
    frameworks: ['Radical Honesty', 'Pratfall Effect', 'Brand Turnaround Matrix', 'Closed-Loop Feedback'],
    detailSlug: 'case-dominos',
    detail: dominosDetailEn
  }
];

export const contactTranslations = {
  vi: {
    badge: 'Kết nối công việc',
    title: 'Hãy Cùng Nhau Kiến Tạo Chiến Dịch Đột Phá! 💬',
    desc: 'Tôi luôn sẵn lòng tiếp nhận các cơ hội hợp tác, dự án freelance sáng tạo nội dung số hoặc các vị trí chính thức trong mảng truyền thông kỹ thuật số.',
    labelName: 'Họ và tên của bạn',
    labelMail: 'Địa chỉ Email liên hệ',
    labelMsg: 'Lời nhắn hợp tác',
    placeholderName: 'Nguyễn Văn A...',
    placeholderMail: 'nguyenvana@gmail.com',
    placeholderMsg: 'Chào Tuấn Anh, tôi đã xem kỹ qua hồ sơ năng lực của bạn và rất ấn tượng. Hãy kết nối trao đổi thêm về...',
    btnSubmit: 'Gửi Lời Nhắn Liên Hệ 🚀',
    successMsg: 'Lời nhắn của bạn đã được tiếp nhận thành công! Tôi sẽ hồi đáp sau vài tiếng. Cảm ơn bạn! ✨',
    cvBoxTitle: 'Sơ yếu lý lịch chính thức',
    cvBoxDesc: 'Để thuận tiện cho công việc tuyển dụng và đánh giá chi tiết của quý doanh nghiệp.',
    cvBoxBtn: 'Xem & Tải Bản PDF'
  },
  en: {
    badge: 'Work Collaboration',
    title: "Let's Co-Create Next Viral Content! 💬",
    desc: 'I am always excited about freelance contracts, digital content strategies, and long-term brand opportunities.',
    labelName: 'Your Full Name',
    labelMail: 'Your Contact Email',
    labelMsg: 'Collaboration Details',
    placeholderName: 'John Doe...',
    placeholderMail: 'johndoe@example.com',
    placeholderMsg: 'Hi Tuan Anh, I reviewed your AI-powered marketing portfolio and would love to discuss a project with you regarding...',
    btnSubmit: 'Send Collaboration Details 🚀',
    successMsg: 'Your message was sent successfully! I will get back to you within a few hours. Thank you! ✨',
    cvBoxTitle: 'Official Digital CV Resume',
    cvBoxDesc: 'Directly access, view, or print my complete resume file optimized for professional screening.',
    cvBoxBtn: 'View & Download PDF Resume'
  }
};
