import { Skill, Experience, Project, WorkflowStep, Certification, Achievement } from './types';

export const skillsData: Skill[] = [
  // Marketing
  { name: 'Xây dựng Chiến lược Social Media', category: 'Marketing', level: 90 },
  { name: 'Sáng tạo Nội dung Quảng cáo', category: 'Marketing', level: 95 },
  { name: 'TikTok SEO & Thuật toán Video', category: 'Marketing', level: 88 },
  { name: 'Phân tích Chỉ số Engagement', category: 'Marketing', level: 85 },
  { name: 'Xây dựng Cộng đồng (Community)', category: 'Marketing', level: 80 },

  // Creative Tools
  { name: 'CapCut Pro (Biên tập Chuyên nghiệp)', category: 'Creative Tools', level: 95 },
  { name: 'Adobe Premiere Pro', category: 'Creative Tools', level: 85 },
  { name: 'Adobe Photoshop', category: 'Creative Tools', level: 80 },
  { name: 'Canva Pro & Sáng tạo Visuals', category: 'Creative Tools', level: 92 },
  { name: 'Adobe Audition (Xử lý âm thanh)', category: 'Creative Tools', level: 78 },

  // AI Tools
  { name: 'ChatGPT & Gemini (Xây dựng Prompt/Kịch bản)', category: 'AI Tools', level: 95 },
  { name: 'Midjourney & DALL-E (Tạo Ảnh Nghệ Thuật)', category: 'AI Tools', level: 90 },
  { name: 'Runway & Luma AI (Tạo Video từ AI)', category: 'AI Tools', level: 82 },
  { name: 'ElevenLabs (AI Giọng nói Tự nhiên)', category: 'AI Tools', level: 88 },
  { name: 'Sunu / Udio (AI Sáng tạo Nhạc nền)', category: 'AI Tools', level: 75 },

  // Soft Skills
  { name: 'Storytelling (Nghệ thuật Kể chuyện)', category: 'Soft Skills', level: 95 },
  { name: 'Thuyết trình & Truyền cảm hứng', category: 'Soft Skills', level: 90 },
  { name: 'Lãnh đạo Phong trào & Sự kiện', category: 'Soft Skills', level: 85 },
  { name: 'Nhạy bén với Xu hướng (Trend Catching)', category: 'Soft Skills', level: 92 },
  { name: 'Làm việc Nhóm & Thích ứng nhanh', category: 'Soft Skills', level: 88 },
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-bprod',
    period: '2025 – 2026',
    role: 'Thực tập sinh Sáng tạo nội dung, Biên tập Video & Sáng tạo Chiến lược',
    company: 'B PRODUCTIONS',
    location: 'Đà Nẵng, Việt Nam',
    details: [
      'Xây dựng ý tưởng kịch bản độc đáo và biên tập các sản phẩm video thương mại ngắn (TikTok, Reels, Youtube Shorts) cho nhãn hàng.',
      'Sử dụng và tích hợp linh hoạt các công cụ AI hiện đại để rút ngắn 35% thời gian lên ý tưởng kịch bản và sản xuất nháp hình ảnh.',
      'Tham gia lập kế hoạch, định vị thương hiệu trực tuyến và tối ưu hóa SEO xã hội cho chiến dịch digital truyền thông đa nền tảng.'
    ]
  },
  {
    id: 'exp-mocha',
    period: 'Tháng 05 – Tháng 09, 2025',
    role: 'Freelance Video Editor',
    company: 'Mocha Cosmetic',
    location: 'Đà Nẵng, Việt Nam (Remote)',
    details: [
      'Chịu trách nhiệm hậu kỳ toàn bộ chuỗi nội dung video ngắn định vị dòng sản phẩm làm đẹp tự nhiên dành cho sinh viên.',
      'Thiết kế nhịp dựng nhanh, áp dụng chuyển cảnh và âm thanh xu hướng (sound effects) giúp tăng tỷ lệ xem hết (Retention) trung bình lên 45%.',
      'Định hình phong cách hình ảnh tối giản, hiện đại và trẻ trung phù hợp với tệp khách hàng tiềm năng thế hệ Gen Z.'
    ]
  },
  {
    id: 'exp-union',
    period: '2022 – 2025',
    role: 'Hỗ trợ Nội dung, Sự kiện & Truyền thông Mạng xã hội',
    company: 'Văn phòng Công đoàn',
    location: 'Đà Nẵng, Việt Nam',
    details: [
      'Đồng hành chuẩn bị, điều phối sự kiện và quản lý trực tiếp kênh truyền thông mạng xã hội của Công đoàn đơn vị.',
      'Thiết kế toàn bộ hệ thống áp phích, băng rôn, và các ấn phẩm truyền thông sự kiện nội bộ giúp gia tăng 40% tương tác tự nhiên.',
      'Viết bài biên tập sự kiện, làm báo cáo tổng kết và dựng các clip ghi hình hoạt động văn nghệ, thể thao ý nghĩa.'
    ]
  },
  {
    id: 'exp-dau',
    period: '2022 – 2023',
    role: 'Ủy viên Ban Truyền thông & Sáng tạo kịch bản',
    company: 'Đội Thanh niên Tình nguyện D.A.U',
    location: 'Trường Đại học Kiến trúc Đà Nẵng, Việt Nam',
    details: [
      'Trực tiếp chấp bút kịch bản và dàn dựng nội dung truyền thông cho các đợt chiến dịch tình nguyện cao điểm thu hút hơn 500 sinh viên tham gia.',
      'Sản xuất các video phóng sự ngắn tiếp cận hơn 20k+ người dùng tự nhiên trên Fanpage Đội.',
      'Tham gia điều phối và dẫn chương trình (MC) cho các buổi gala giao lưu tình nguyện tại các xã miền núi xa xôi.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'project-ndsv',
    title: 'Nét Đẹp Sinh Viên 2023',
    subtitle: 'Chiến dịch truyền thông cuộc thi tài năng & nhan sắc sinh viên D.A.U',
    description: 'Xây dựng toàn bộ kế hoạch nội dung đa nền tảng từ giai đoạn khởi động đến đêm chung kết. Trực tiếp biên tập, dựng và chỉ đạo nghệ thuật cho loạt video ngắn đồng hành cùng cuộc thi nhằm tôn vinh nét đẹp trí tuệ và sự trẻ trung.',
    metrics: [
      { label: 'Thí sinh tham gia', value: '82 thí sinh' },
      { label: 'Số Video ngắn sản xuất', value: '22+ Video' },
      { label: 'Tổng lượt xem tự nhiên', value: '102,586+ views' },
      { label: 'Tỷ lệ tương tác chiến dịch', value: '6.9% engagement' }
    ],
    tags: ['Chiến lược Nội dung', 'Sản xuất Video', 'Truyền thông Sự kiện', 'Quản trị Thí sinh'],
    imageUrl: 'ndsv_cover',
    category: 'Campaign',
    challenge: 'Kế hoạch truyền thông ban đầu gặp khó khăn về ngân sách tiếp thị thực tế gần như bằng không, trong khi yêu cầu đặt ra là phải thu hút được sự chú ý và tương tác thực tế từ hơn 5,000 sinh viên Kiến trúc tại Đà Nẵng để dự thi và bình chọn.',
    strategy: 'Chuyển dịch trọng tâm sang mạng lưới nội dung video ngắn định dạng dọc (TikTok, Reels) mang màu sắc hài hước, gần gũi với đời sống giảng đường. Thiết lập chuỗi chu kì đăng tải đều đặn kết hợp với hoạt động đưa tin nóng hổi hậu trường phỏng vấn thí sinh.',
    aiImplementation: 'Sử dụng ChatGPT/Gemini để phân tích các video viral cùng lĩnh vực, thiết kế 15 mẫu kịch bản "3-giây-kéo-giữ" (Hook patterns) cho sinh viên tự tin lên hình mà không bị ngượng ngùng trước ống kính máy ảnh.',
    takeaway: 'Đột phá về lưu lượng truy cập hữu cơ (Organic views) trên 100k+, khẳng định tính nhất quán của chất lượng kịch bản có tính tương tác cao quan trọng hơn ngân sách quảng cáo.'
  },
  {
    id: 'project-emis',
    title: 'TikTok EMI\'S DANANG Growth',
    subtitle: 'Định hình và phát triển nội dung xu hướng ẩm thực & mua sắm địa phương',
    description: 'Phân tích tệp khách hàng tiềm năng, thực hiện TikTok SEO tìm kiếm từ vựng địa phương sốt dẻo. Tinh tuyển nội dung và tối ưu kỹ thuật dựng 3 giây đầu tiên (Hook) kích hoạt tối đa phân phối thuật toán đưa video lên tab Xu hướng.',
    metrics: [
      { label: 'Lượt xem video Peak', value: '13,000+ views' },
      { label: 'Lượt xem trung bình', value: '2k – 6.5k views' },
      { label: 'Follower Tăng trưởng', value: 'Tự nhiên (Organic)' },
      { label: 'Chi phí Marketing', value: '0 VNĐ (Không Ads)' }
    ],
    tags: ['TikTok SEO', 'Dựng Video Ngắn', 'Local Marketing', 'Thuật toán TikTok'],
    imageUrl: 'emis_cover',
    category: 'TikTok Growth',
    challenge: 'Thị trường ẩm thực & dịch vụ du lịch tại Đà Nẵng cạnh tranh cực kỳ khốc liệt. Kênh thương hiệu mới lập chưa có lượt người theo dõi ban đầu và không sử dụng bất kỳ chi phí chạy quảng cáo có trả phí nào.',
    strategy: 'Ứng dụng thuật toán TikTok SEO bằng việc tối ưu hóa tiêu đề và hashtag hướng trực diện vào các cụm từ khóa tìm kiếm vị trí cụ thể (như "ăn gì ở Đà Nẵng", "tọa độ ăn chơi Đà Nẵng"). Thiết kế video có nhịp dựng phim nhanh, tập trung cao vào cảm xúc chân thật từ giây đầu tiên.',
    aiImplementation: 'Thiết lập prompt tự động hóa cào từ khoá tìm kiếm xu hướng của thị trường trực tuyến địa phương, tối ưu hóa nội dung lời đọc mượt mà nhờ công cụ hỗ trợ giọng nói nâng cao.',
    takeaway: 'Thuật toán nội dung tập trung vào nhu cầu tìm kiếm thực tế của người dùng đem lại chuyển đổi khách hàng tiềm năng trực tiếp cực kỳ bền vững.'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Chứng chỉ tiếng Anh Quốc tế TOEIC 840',
    metric: '840 TOEIC',
    description: 'Thành tích thi đạt 840 điểm (hình thức Listening & Reading) từ Tổ chức khảo thí IIG Việt Nam, chứng minh khả năng giao dịch, nghiên cứu tài liệu và làm việc nhuần nhuyễn bằng tiếng Anh.',
    category: 'Ngoại ngữ',
    iconName: 'Award'
  },
  {
    id: 'ach-2',
    title: 'Chiến dịch tiếp cận tự nhiên vượt trội',
    metric: '102K+ Lượt xem',
    description: 'Sáng tạo và dẫn dắt các chiến dịch nội dung sáng tạo đạt mốc hơn 102,000 lượt xem tự nhiên (organic), không sử dụng chi phí quảng bạ có trả phí.',
    category: 'Truyền thông',
    iconName: 'TrendingUp'
  },
  {
    id: 'ach-3',
    title: 'Đột phá hiệu suất hậu kỳ nhờ thiết kế AI',
    metric: 'Tiết kiệm 35%',
    description: 'Ứng dụng toàn diện hệ sinh thái Generative AI giúp rút ngắn 35% thời gian viết kịch bản, làm bảng phân cảnh (storyboard) và tạo giọng nói mẫu.',
    category: 'Công nghệ & AI',
    iconName: 'Zap'
  },
  {
    id: 'ach-4',
    title: 'Tổ chức phong trào & Lãnh đạo hoạt động',
    metric: '500+ Người tham gia',
    description: 'Tổ chức thành công nhiều sự kiện phong trào văn nghệ nghệ thuật quy mô lớn cho Đội Thanh niên Tình nguyện D.A.U và Công đoàn Văn phòng.',
    category: 'Cộng đồng',
    iconName: 'Users'
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Nghiên cứu Thị trường & Đào sâu Insight',
    englishTitle: '1. Social Research',
    description: 'Sử dụng AI để cào dữ liệu xu hướng hiện tại, phân tích đối thủ cạnh tranh mục tiêu và tìm ra ngách kịch bản có tỷ lệ tương tác cao nhất.',
    icon: 'Search',
    details: [
      'Sử dụng các câu lệnh nâng cao trên ChatGPT/Gemini để trích lọc từ khoá ngành.',
      'Xây dựng bản tóm tắt chân dung độc giả thế hệ Gen Z nhanh chóng.',
      'Sắp xếp bảng dữ liệu xu hướng tuần dạng bảng biểu trực quan.'
    ],
    highlight: 'Giảm 70% thời gian nghiên cứu chay'
  },
  {
    id: 2,
    title: 'Sáng tạo Ý tưởng & Quy hoạch Kịch bản',
    englishTitle: '2. AI-Driven Planning',
    description: 'Tương tác sâu với mô hình ngôn ngữ lớn để biến một dòng ý tưởng thô sơ thành 10 kịch bản chi tiết đa dạng góc nhìn, đầy tính kích thích kích học.',
    icon: 'Sparkles',
    details: [
      'Thiết kế cấu trúc Hooks (3 giây đầu) cuốn hút người dùng kéo xuống xem tiếp.',
      'Phát triển lời thoại ngắn gọn, tối ưu nhịp độ đọc vừa vặn từ 45-60 giây.',
      'Hệ thống hoá kịch bản theo phễu chuyển đổi: Thu hút -> Nuôi dưỡng -> Bán hàng.'
    ],
    highlight: 'Sở hữu kho ý tưởng không bao giờ cạn'
  },
  {
    id: 3,
    title: 'Sản xuất Hình ảnh & Nghệ thuật Visuals',
    englishTitle: '3. Visual Creation',
    description: 'Ứng dụng các thư viện tạo ảnh thông minh như Midjourney, DALL-E 3 để tạo ra phân cảnh nháp phân cảnh chuẩn, sơ đồ moodboard cực kỳ chân thực.',
    icon: 'Image',
    details: [
      'Sinh hình ảnh minh hoạ có tính nghệ thuật và đồng nhất về concept.',
      'Thiết kế thumbnail thu hút click cho loạt video TikTok/Reels.',
      'Chuẩn hoá tông màu (Color Scheme) ấm áp, hiện đại mang cá tính thương hiệu.'
    ],
    highlight: 'Visual sáng tạo vượt ranh giới giới hạn thiết kế'
  },
  {
    id: 4,
    title: 'Biên tập Chuyên nghiệp & Tăng tốc Hậu kỳ',
    englishTitle: '4. High-Speed Editing',
    description: 'Dựng tối ưu trên CapCut Pro & Premiere Pro. Kết hợp tinh tế giữa hiệu ứng âm thanh sống động (sound design) và nhịp điệu kích hoạt cortisol.',
    icon: 'Video',
    details: [
      'Áp dụng chuyển cảnh nghệ thuật (Seamless Transition) tăng trải nghiệm thị giác.',
      'Tự động hoá phụ đề và chuẩn hoá nhịp điệu từ ngữ xuất hiện trên màn hình.',
      'Lồng ghép âm thanh thu âm chất lượng cao qua bộ lọc khử nhiễu tự động.'
    ],
    highlight: 'Xuất bản video nhanh gấp 2 lần bình thường'
  },
  {
    id: 5,
    title: 'Thiết kế SEO & Tự động Phân phối Đa kênh',
    englishTitle: '5. Intelligent Publishing',
    description: 'Áp dụng các từ khoá đã nghiên cứu vào tiêu đề, mô tả và chuỗi hashtag. Lên lịch tự động vào các khung giờ vàng lưu lượng lớn nhất.',
    icon: 'Share2',
    details: [
      'Tối ưu hóa các thẻ tiêu đề chứa từ khoá người dùng hay tìm kiếm trên TikTok.',
      'Lên lịch đăng bài thông minh bằng các công cụ tiếp thị liên kết tự động.',
      'Định dạng cấu trúc đa nền tảng tối ưu tốt nhất cho từng thuật toán riêng biệt.'
    ],
    highlight: 'Gia tăng traffic tự nhiên từ SEO thêm 30%'
  },
  {
    id: 6,
    title: 'Phân tích Số liệu & Đo lường Tinh chỉnh',
    englishTitle: '6. Strategic Analytics',
    description: 'Theo dõi chặt chẽ biểu đồ tỷ lệ giữ chân (Retention rate), lượt chia sẻ và lưu trữ. Tiếp tục tối ưu hoá quy trình vòng sau.',
    icon: 'BarChart3',
    details: [
      'Phát hiện điểm rơi người xem để cắt gọt nhịp dựng ở video tiếp theo.',
      'Phân tích bình luận để khai phá các chủ điểm thắc mắc mới làm đề tài bí ẩn.',
      'Báo cáo hiệu suất định kỳ dạng SaaS trực quan giúp đánh giá chuẩn xác ROI.'
    ],
    highlight: 'Nâng cao chất lượng dựa trên dữ liệu thật'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google & Coursera Digital Marketing & E-commerce',
    issuer: 'Google',
    date: 'Tháng 12, 2024',
    description: 'Chứng chỉ chuyên nghiệp đào tạo sâu rộng về chiến lược tiếp thị kỹ thuật số, tối ưu hóa công cụ tìm kiếm, quản lý chiến dịch email marketing, thương mại điện tử và tiếp thị tương tác đa nền tảng.',
    skillsDemonstrated: ['Digital Marketing', 'E-commerce', 'SEO', 'Email Marketing Strategy', 'Marketing Analytics']
  },
  {
    id: 'cert-2',
    title: 'AI-Driven Content Strategy Certified',
    issuer: 'SaaS Marketing Institute',
    date: 'Tháng 03, 2025',
    description: 'Khóa chuyên sâu áp dụng Generative AI trong việc tối ưu hóa chu trình sản xuất, xây dựng hệ thống prompt nâng cao phục vụ cho chiến lược Content Phễu và xây dựng kịch bản video viral.',
    skillsDemonstrated: ['Generative AI Prompting', 'Advanced Copywriting', 'AI Video Ideation', 'Workflow Engineering']
  },
  {
    id: 'cert-3',
    title: 'CapCut Video Creative Masterclass',
    issuer: 'B Productions Academy & TikTok Creator Group',
    date: 'Tháng 05, 2025',
    description: 'Chương trình huấn luyện kỹ thuật làm video ngắn chuyên sâu, nghệ thuật giữ chân khán giả qua hiệu ứng đặc biệt, phối màu điện ảnh và kỹ năng thiết kế kịch bản bùng nổ xu hướng.',
    skillsDemonstrated: ['Short-form Video Production', 'Cinematic Color Grading', 'Trend Splicing', 'Soundscape Design']
  },
  {
    id: 'cert-toeic',
    title: 'Chứng chỉ tiếng Anh Quốc tế TOEIC 840 (Listening & Reading)',
    issuer: 'IIG Việt Nam (Độc quyền đại diện ETS Hoa Kỳ)',
    date: 'Tháng 10, 2024',
    description: 'Thành tích thi đạt 840/990 điểm (nghe hiểu và đọc hiểu), chứng thực khả năng sử dụng tiếng Anh thương mại lưu loát, biên soạn / dịch thuật kịch bản nước ngoài và tìm kiếm thông tin thị trường quốc tế không rào cản.',
    skillsDemonstrated: ['Professional English', 'Business Communication', 'Global Marketing Research', 'Content Translation']
  }
];
