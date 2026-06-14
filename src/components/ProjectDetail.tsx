import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Plus, 
  Link2, 
  UploadCloud, 
  Trash2, 
  Play, 
  Film, 
  Image as ImageIcon, 
  Sparkles, 
  Milestone, 
  Scaling, 
  Info,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
  Eye,
  Settings,
  Heart,
  AlertCircle
} from 'lucide-react';
import GlowWrapper from './GlowWrapper';

interface ProjectDetailProps {
  projectId: 'project-ndsv' | 'project-emis';
  lang: 'vi' | 'en';
  onBack: () => void;
}

// Interfaces for user-submitted media
interface PhotoItem {
  id: string;
  url: string;
  caption: string;
}

interface VideoItem {
  id: string;
  url: string; // can be blob, direct link or youtube/tiktok link
  title: string;
  duration?: string;
  isEmbed?: boolean;
  views?: string;
  likes?: string;
  sub?: string;
  likedByUser?: boolean;
}

// Simple promise-based IndexedDB utility to store and retrieve large files (Blobs) locally in the client
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('PortfolioMediaDB', 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('blobs')) {
        db.createObjectStore('blobs');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Failed to open IndexedDB'));
  });
};

const saveBlob = async (id: string, blob: Blob): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('blobs', 'readwrite');
    const store = tx.objectStore('blobs');
    const request = store.put(blob, id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(tx.error || request.error || new Error('Put failed'));
  });
};

const getBlob = async (id: string): Promise<Blob | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('blobs', 'readonly');
      const store = tx.objectStore('blobs');
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(tx.error || request.error || new Error('Get failed'));
    });
  } catch (e) {
    console.error('IndexedDB get error:', e);
    return null;
  }
};

const deleteBlob = async (id: string): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('blobs', 'readwrite');
      const store = tx.objectStore('blobs');
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(tx.error || request.error || new Error('Delete failed'));
    });
  } catch (e) {
    console.error('IndexedDB delete error:', e);
  }
};

const getEmbedUrl = (url: string): string => {
  if (!url) return '';
  
  // Google Drive file preview mapping
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }

  // Google Drive folder embed mapping
  if (url.includes('drive.google.com/drive/folders/')) {
    const match = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/embeddedfolder/${match[1]}`;
    }
  }

  // YouTube embed conversions
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
    let id = '';
    if (url.includes('v=')) {
      id = url.split('v=')[1]?.split('&')[0] || '';
    } else {
      id = url.split('/').pop()?.split('?')[0] || '';
    }
    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }
  }

  // TikTok embed conversions
  if (url.includes('tiktok.com')) {
    const match = url.match(/\/video\/(\d+)/);
    if (match && match[1]) {
      return `https://www.tiktok.com/embed/v2/${match[1]}`;
    }
  }

  return url;
};

const getDirectImageUrl = (url: string): string => {
  if (!url) return '';
  
  // Google Drive sharing link resolution for image sources
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }
  
  return url;
};

export default function ProjectDetail({ projectId, lang, onBack }: ProjectDetailProps) {
  // Pre-loaded data based on Project ID
  const isNdsv = projectId === 'project-ndsv';

  // State for user uploaded/linked photos (persisted in localStorage)
  const [photos, setPhotos] = useState<PhotoItem[]>(() => {
    const saved = localStorage.getItem(`portfolio-photos-${projectId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) {
          // Verify that cached images correspond to this project's prefix to prevent empty/mismatched data
          const hasProjectPhotos = parsed.some((p: PhotoItem) => p.id && p.id.startsWith(isNdsv ? 'ndsv-p' : 'emis-p'));
          if (hasProjectPhotos) {
            return parsed;
          }
        }
      } catch (e) {
        console.error('Error loading photos from localStorage:', e);
      }
    }
    // Default fallback
    if (isNdsv) {
      return [
        {
          id: 'ndsv-p1',
          url: 'https://drive.google.com/file/d/1X3jwdhEh6RxCAuBA4JQSBp8PYHXYdDDP/view?usp=sharing',
          caption: lang === 'vi' ? 'Đoàn trường Đại học Kiến trúc Đà Nẵng - Poster TOP 18 Nét đẹp sinh viên Kiến trúc 2023' : 'Đà Nẵng Architecture University - TOP 18 Finalists of student beauty pageant 2023'
        },
        {
          id: 'ndsv-p2',
          url: 'https://drive.google.com/file/d/13bYuMMJKFJItq_eCXa0-x2YQzmTU9U_T/view?usp=sharing',
          caption: lang === 'vi' ? 'Toàn cảnh sân khấu chung kết hoành tráng bùng nổ của các thí sinh' : 'Spectacular view of the grand finale stage with all candidates lining up'
        },
        {
          id: 'ndsv-p3',
          url: 'https://drive.google.com/file/d/1v-tsGcEM9vLs9CGygF7j2J9wJotPfzmi/view?usp=sharing',
          caption: lang === 'vi' ? 'Lên ngôi Quán quân Nét đẹp sinh viên Kiến trúc D.A.U 2023 lộng lẫy và tự hào' : 'Crowning the glorious Champions of the D.A.U Student Pageant 2023 in an atmosphere of pride and fireworks'
        }
      ];
    } else {
      return [
        {
          id: 'emis-p1',
          url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
          caption: lang === 'vi' ? 'Không gian sân vườn tràn ngập sắc xanh tại Wind Garden Coffee' : 'Lush green serene garden space at Wind Garden Coffee (Emi Cafe)'
        },
        {
          id: 'emis-p2',
          url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
          caption: lang === 'vi' ? 'Phong cách ấm cúng đậm chất Nhật Bản cổ kính tại Emi Cafe An Thượng' : 'Warm authentic Japanese vintage atmosphere at Emi Cafe An Thượng'
        },
        {
          id: 'emis-p3',
          url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80',
          caption: lang === 'vi' ? 'Hẻm nhỏ mộc mạc lưu giữ truyền thống gốm tại Tiệm Cà Phê PHINN Gốm' : 'Rustic quiet alley and vintage hand-painted pottery at Phinn Gốm Cafe'
        },
        {
          id: 'emis-p4',
          url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
          caption: lang === 'vi' ? 'Góc ban công ấm cúng ngập tràn ánh đèn triết lý hoàng hôn tại Namto House' : 'Cozy and romantic glowing balcony hangout hotspot at Namto House'
        }
      ];
    }
  });

  // State for user uploaded/linked videos (persisted in localStorage)
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    const saved = localStorage.getItem(`portfolio-videos-${projectId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) {
          // If cached videos exist but some contain offline/mock assets or w3schools, bypass cache to force native TikTok links
          const hasProjectVideos = parsed.some((v: VideoItem) => v.id && v.id.startsWith(isNdsv ? 'ndsv-v' : 'emis-v'));
          const hasMockAssets = parsed.some((v: VideoItem) => v.url && (v.url.includes('/src/assets/emis-') || v.url.includes('w3schools.com')));
          if (hasProjectVideos && !hasMockAssets) {
            return parsed.filter((v: VideoItem) => v.id !== 'emis-v4');
          }
        }
      } catch (e) {
        console.error('Error loading videos from localStorage:', e);
      }
    }
    // Default fallback
    if (isNdsv) {
      return [
        {
          id: 'ndsv-v1',
          url: 'https://drive.google.com/file/d/1PrmRBaIqboV_UqYygjZVGKSTFxkI6xu4/view?usp=sharing',
          title: lang === 'vi' ? 'Video Tóm tắt Đêm Chung Kết (Recap Gala Final)' : 'Gala Final Recap Highlights',
          duration: '01:13',
          views: '102K',
          likes: '6.4K',
          isEmbed: true,
          sub: lang === 'vi' ? 'Thước phim nhìn lại sân khấu hoành tráng bùng nổ của Đêm Chung kết cuộc thi Nét đẹp sinh viên D.A.U 2023.' : 'A visual journey through the high-octane stage and star guests of the grand finale night.'
        },
        {
          id: 'ndsv-v2',
          url: 'https://drive.google.com/file/d/1PUKOhbkg-OlRYkqjCVaxDISLmjqv_rRq/view?usp=sharing',
          title: lang === 'vi' ? 'Video thí sinh kêu gọi bình chọn' : 'Contestant Voting Campaign Video',
          duration: '01:05',
          views: '11.2K',
          likes: '891',
          isEmbed: true,
          sub: lang === 'vi' ? 'Cảnh quay nói lên tính cách cũng như phong cách của thí sinh.' : "The footage highlights the contestant's true personality and custom fashion style."
        }
      ];
    } else {
      return [
        {
          id: 'emis-v1',
          url: 'https://www.tiktok.com/@emis.danang/video/7454505074207886600',
          title: lang === 'vi' ? 'Thước phim 1: Một quán sân vườn COFFEE siêu CHILL (Wind Garden Coffee - Emi Cafe)' : 'Clip 1: Relaxation Garden Coffee Tour & Aesthetic Vibe (Wind Garden)',
          duration: '01:12',
          views: '13.4K',
          likes: '1.2K',
          isEmbed: true,
          sub: lang === 'vi' ? 'Vlog trải nghiệm không gian xanh ngát chữa lành cực chill tại quán: Đi dạo qua chiếc cầu bắc ngang hồ cá koi rực rỡ sắc màu, Emi mặc trang phục Kimono Nhật Bản duyên dáng, cho cá ăn cực vui mắt, gọi ly sinh tố tốt cho sức khỏe tại quầy bar và tận hưởng tiếng chim hót.' : 'A beautiful green escape tour: walking over the vibrant koi fish pond bridge, wearing elegant Japanese Yukata, feeding fishes, ordering customized nutrition smoothies, and healing in refreshing nature space.'
        },
        {
          id: 'emis-v2',
          url: 'https://www.tiktok.com/@emis.danang/video/7463433248341904648',
          title: lang === 'vi' ? 'Thước phim 2: Cafe Style Nhật Bản tại Đà Nẵng (Emi Cafe An Thượng)' : 'Clip 2: Japanese Cosplay Cafe Style Exploration (An Thuong Area)',
          duration: '00:48',
          views: '24.1K',
          likes: '3.5K',
          isEmbed: true,
          sub: lang === 'vi' ? 'Video ngắn dắt bạn đi qua mặt tiền gạch ấm cúng khu An Thượng. Chụp ảnh lưu niệm với tượng bảo vệ Totoro che ô độc lạ, đọc truyện tranh Nhật Bản tại góc trà, giới thiệu menu 4 thứ tiếng cực xịn và dịch vụ mượn đồ Yukata thuê thử.' : 'Short clip walking you through the warm brick facade at An Thuong. Snap pictures with the iconic Totoro guardian, read manga books, try renting authentic Japanese Yukata robes, and read the 4-language menu.'
        },
        {
          id: 'emis-v3',
          url: 'https://www.tiktok.com/@emis.danang/video/7475912213937655048',
          title: lang === 'vi' ? 'Thước phim 3: Khám phá Tiệm Cà Phê PHINN Gốm cổ kính (Thái Phiên Alley)' : 'Clip 3: Hidden Phinn Gốm Cafe & Vintage Ceramic Teahouse (Thai Phien Alley)',
          duration: '02:15',
          views: '11.8K',
          likes: '952',
          isEmbed: true,
          sub: lang === 'vi' ? 'Quay chụp nghệ thuật trong một con hẻm yên tĩnh ở Thái Phiên: Khám phá ngách nhỏ trang trọng lưu giữ gốm vẽ tay, viết mong ước trên mẫu giấy nhỏ treo kín bảng kỷ niệm, đọc sách thưởng thức món sữa chua chanh mát lạnh sảng khoái.' : 'Artsy camera movements inside a quiet alley teahouse: explore custom hand-painted vintage ceramic pottery, write notes on the cute wooden wish board, and read books while enjoying local fresh lemon yogurt.'
        }
      ];
    }
  });

  // Save states to LocalStorage on modifications
  useEffect(() => {
    localStorage.setItem(`portfolio-photos-${projectId}`, JSON.stringify(photos));
  }, [photos, projectId]);

  useEffect(() => {
    localStorage.setItem(`portfolio-videos-${projectId}`, JSON.stringify(videos));
  }, [videos, projectId]);

  // Form states
  const [photoUrlInput, setPhotoUrlInput] = useState('');
  const [photoCaptionInput, setPhotoCaptionInput] = useState('');
  const [videoUrlInput, setVideoUrlInput] = useState('');
  const [videoTitleInput, setVideoTitleInput] = useState('');
  const [videoDurationInput, setVideoDurationInput] = useState('');
  const [replaceTarget, setReplaceTarget] = useState<string>('new');

  // Active modal/preview states
  const [activePhotoPreview, setActivePhotoPreview] = useState<string | null>(null);
  const [activeVideoEmbed, setActiveVideoEmbed] = useState<string | null>(null);
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});

  // Slide-show states for Image Showcase (Requirement 3: merge 3 divs into 1 with 3s slide rotation)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);

  // Auto transition for slideshow every 3s
  useEffect(() => {
    if (showAllPhotos || photos.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => {
        if (photos.length === 0) return 0;
        return (prev + 1) % photos.length;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [photos.length, showAllPhotos]);

  // Migration for Google Drive Video URLs (Requirement 4: replace mock/unloaded videos with Drive URLs)
  useEffect(() => {
    setVideos(prev => {
      // If the array is empty or lacks the critical default IDs, return the default array list
      if (prev.length === 0) {
        if (isNdsv) {
          return [
            {
              id: 'ndsv-v1',
              url: 'https://drive.google.com/file/d/1PrmRBaIqboV_UqYygjZVGKSTFxkI6xu4/view?usp=sharing',
              title: lang === 'vi' ? 'Video Tóm tắt Đêm Chung Kết (Recap Gala Final)' : 'Gala Final Recap Highlights',
              duration: '01:13',
              views: '11k',
              likes: '1.2k',
              sub: lang === 'vi' ? 'Thước phim nhìn lại sân khấu hoành tráng bùng nổ của Đêm Chung kết cuộc thi Nét đẹp sinh viên D.A.U 2023.' : 'A visual journey through the high-octane stage and star guests of the grand finale night.',
              isEmbed: true
            },
            {
              id: 'ndsv-v2',
              url: 'https://drive.google.com/file/d/1PUKOhbkg-OlRYkqjCVaxDISLmjqv_rRq/view?usp=sharing',
              title: lang === 'vi' ? 'Video thí sinh kêu gọi bình chọn' : 'Contestant Voting Campaign Video',
              duration: '01:05',
              views: '4.8k',
              likes: '512',
              sub: lang === 'vi' ? 'Cảnh quay nói lên tính cách cũng như phong cách của thí sinh.' : "The footage highlights the contestant's true personality and custom fashion style.",
              isEmbed: true
            }
          ];
        } else {
          return [
            {
              id: 'emis-v1',
              url: 'https://www.tiktok.com/@emis.danang/video/7454505074207886600',
              title: lang === 'vi' ? 'Thước phim 1: Một quán sân vườn COFFEE siêu CHILL (Wind Garden Coffee - Emi Cafe)' : 'Clip 1: Relaxation Garden Coffee Tour & Aesthetic Vibe (Wind Garden)',
              duration: '00:45',
              views: '12.4K',
              likes: '1.8K',
              isEmbed: true,
              sub: lang === 'vi' ? 'Vlog trải nghiệm không gian xanh ngát chữa lành cực chill tại quán: Đi dạo qua chiếc cầu bắc ngang hồ cá koi rực rỡ sắc màu, Emi mặc trang phục Kimono Nhật Bản duyên dáng, cho cá ăn cực vui mắt, gọi ly sinh tố tốt cho sức khỏe tại quầy bar và tận hưởng tiếng chim hót.' : 'A beautiful green escape tour: walking over the vibrant koi fish pond bridge, wearing elegant Japanese Yukata, feeding fishes, ordering customized nutrition smoothies, and healing in refreshing nature space.'
            },
            {
              id: 'emis-v2',
              url: 'https://www.tiktok.com/@emis.danang/video/7463433248341904648',
              title: lang === 'vi' ? 'Thước phim 2: Cafe Style Nhật Bản tại Đà Nẵng (Emi Cafe An Thượng)' : 'Clip 2: Japanese Cosplay Cafe Style Exploration (An Thuong Area)',
              duration: '00:58',
              views: '8.1K',
              likes: '942',
              isEmbed: true,
              sub: lang === 'vi' ? 'Video ngắn dắt bạn đi qua mặt tiền gạch ấm cúng khu An Thượng. Chụp ảnh lưu niệm với tượng bảo vệ Totoro che ô độc lạ, đọc truyện tranh Nhật Bản tại góc trà, giới thiệu menu 4 thứ tiếng cực xịn và dịch vụ mượn đồ Yukata thuê thử.' : 'Short clip walking you through the warm brick facade at An Thuong. Snap pictures with the iconic Totoro guardian, read manga books, try renting authentic Japanese Yukata robes, and read the 4-language menu.'
            },
            {
              id: 'emis-v3',
              url: 'https://www.tiktok.com/@emis.danang/video/7475912213937655048',
              title: lang === 'vi' ? 'Thước phim 3: Khám phá Tiệm Cà Phê PHINN Gốm cổ kính (Thái Phiên Alley)' : 'Clip 3: Hidden Phinn Gốm Cafe & Vintage Ceramic Teahouse (Thai Phien Alley)',
              duration: '01:02',
              views: '15.2K',
              likes: '2.1K',
              isEmbed: true,
              sub: lang === 'vi' ? 'Quay chụp nghệ thuật trong một con hẻm yên tĩnh ở Thái Phiên: Khám phá ngách nhỏ trang trọng lưu giữ gốm vẽ tay, viết mong ước trên mẫu giấy nhỏ treo kín bảng kỷ niệm, đọc sách thưởng thức món sữa chua chanh mát lạnh sảng khoái.' : 'Artsy camera movements inside a quiet alley teahouse: explore custom hand-painted vintage ceramic pottery, write notes on the cute wooden wish board, and read books while enjoying local fresh lemon yogurt.'
            },
            {
              id: 'emis-v4',
              url: '/src/assets/emis-v4.mp4',
              title: lang === 'vi' ? 'Thước phim 4: Nơi sống ảo Triệu Like - Namto House (130 An Thượng)' : 'Clip 4: Instagrammable Dream Hotspot - Namto House Cozy Teahouse',
              duration: '01:05',
              views: '35.6K',
              likes: '4.8K',
              sub: lang === 'vi' ? 'Khoe trọn góc check-in tuyệt đẹp Namto House. Ban công tràn đầy đèn neon lấp lánh và hoa hồng, lùng sục ngắm nhìn nội thất gỗ và tủ bánh ngọt nướng giòn rụm tại bàn, nếm thử ly cafe đặc sản béo ngậy được phục vụ siêu nhanh.' : 'Showcasing wonderful photogenic check-in spots at Namto House hanging garden, with sparkling lights, wooden architectures, fresh buttery croissants, and premium espresso served with speed and smile!'
            }
          ];
        }
      }

      // If array exists, map and ensure correctly converted TikTok/Drive values
      return prev.map(v => {
        if (v.id === 'ndsv-v1') {
          return {
            ...v,
            url: 'https://drive.google.com/file/d/1PrmRBaIqboV_UqYygjZVGKSTFxkI6xu4/view?usp=sharing',
            title: lang === 'vi' ? 'Video Tóm tắt Đêm Chung Kết (Recap Gala Final)' : 'Gala Final Recap Highlights',
            sub: lang === 'vi' ? 'Thước phim nhìn lại sân khấu hoành tráng bùng nổ của Đêm Chung kết cuộc thi Nét đẹp sinh viên D.A.U 2023.' : 'A visual journey through the high-octane stage and star guests of the grand finale night.',
            isEmbed: true,
            duration: '01:13'
          };
        }
        if (v.id === 'ndsv-v2') {
          return {
            ...v,
            url: 'https://drive.google.com/file/d/1PUKOhbkg-OlRYkqjCVaxDISLmjqv_rRq/view?usp=sharing',
            title: lang === 'vi' ? 'Video thí sinh kêu gọi bình chọn' : 'Contestant Voting Campaign Video',
            sub: lang === 'vi' ? 'Cảnh quay nói lên tính cách cũng như phong cách của thí sinh.' : "The footage highlights the contestant's true personality and custom fashion style.",
            isEmbed: true,
            duration: '01:05'
          };
        }
        if (v.id === 'emis-v1') {
          return {
            ...v,
            url: 'https://www.tiktok.com/@emis.danang/video/7454505074207886600',
            title: lang === 'vi' ? 'Thước phim 1: Một quán sân vườn COFFEE siêu CHILL (Wind Garden Coffee - Emi Cafe)' : 'Clip 1: Relaxation Garden Coffee Tour & Aesthetic Vibe (Wind Garden)',
            isEmbed: true,
            sub: lang === 'vi' ? 'Vlog trải nghiệm không gian xanh ngát chữa lành cực chill tại quán: Đi dạo qua chiếc cầu bắc ngang hồ cá koi rực rỡ sắc màu, Emi mặc trang phục Kimono Nhật Bản duyên dáng, cho cá ăn cực vui mắt, gọi ly sinh tố tốt cho sức khỏe tại quầy bar và tận hưởng tiếng chim hót.' : 'A beautiful green escape tour: walking over the vibrant koi fish pond bridge, wearing elegant Japanese Yukata, feeding fishes, ordering customized nutrition smoothies, and healing in refreshing nature space.'
          };
        }
        if (v.id === 'emis-v2') {
          return {
            ...v,
            url: 'https://www.tiktok.com/@emis.danang/video/7463433248341904648',
            title: lang === 'vi' ? 'Thước phim 2: Cafe Style Nhật Bản tại Đà Nẵng (Emi Cafe An Thượng)' : 'Clip 2: Japanese Cosplay Cafe Style Exploration (An Thuong Area)',
            isEmbed: true,
            sub: lang === 'vi' ? 'Video ngắn dắt bạn đi qua mặt tiền gạch ấm cúng khu An Thượng. Chụp ảnh lưu niệm với tượng bảo vệ Totoro che ô độc lạ, đọc truyện tranh Nhật Bản tại góc trà, giới thiệu menu 4 thứ tiếng cực xịn và dịch vụ mượn đồ Yukata thuê thử.' : 'Short clip walking you through the warm brick facade at An Thuong. Snap pictures with the iconic Totoro guardian, read manga books, try renting authentic Japanese Yukata robes, and read the 4-language menu.'
          };
        }
        if (v.id === 'emis-v3') {
          return {
            ...v,
            url: 'https://www.tiktok.com/@emis.danang/video/7475912213937655048',
            title: lang === 'vi' ? 'Thước phim 3: Khám phá Tiệm Cà Phê PHINN Gốm cổ kính (Thái Phiên Alley)' : 'Clip 3: Hidden Phinn Gốm Cafe & Vintage Ceramic Teahouse (Thai Phien Alley)',
            isEmbed: true,
            sub: lang === 'vi' ? 'Quay chụp nghệ thuật trong một con hẻm yên tĩnh ở Thái Phiên: Khám phá ngách nhỏ trang trọng lưu giữ gốm vẽ tay, viết mong ước trên mẫu giấy nhỏ treo kín bảng kỷ niệm, đọc sách thưởng thức món sữa chua chanh mát lạnh sảng khoái.' : 'Artsy camera movements inside a quiet alley teahouse: explore custom hand-painted vintage ceramic pottery, write notes on the cute wooden wish board, and read books while enjoying local fresh lemon yogurt.'
          };
        }
        return v;
      });
    });
  }, [projectId, lang, isNdsv]);

  // Migration for Google Drive Photo URLs (Ensure old saved Unsplash/local paths are replaced with standard Google Drive event URLs)
  useEffect(() => {
    if (isNdsv) {
      setPhotos(prev => {
        if (prev.length === 0 || !prev.some(p => p.id.startsWith('ndsv-p'))) {
          return [
            {
              id: 'ndsv-p1',
              url: 'https://drive.google.com/file/d/1X3jwdhEh6RxCAuBA4JQSBp8PYHXYdDDP/view?usp=sharing',
              caption: lang === 'vi' ? 'Đoàn trường Đại học Kiến trúc Đà Nẵng - Poster TOP 18 Nét đẹp sinh viên Kiến trúc 2023' : 'Đà Nẵng Architecture University - TOP 18 Finalists of student beauty pageant 2023'
            },
            {
              id: 'ndsv-p2',
              url: 'https://drive.google.com/file/d/13bYuMMJKFJItq_eCXa0-x2YQzmTU9U_T/view?usp=sharing',
              caption: lang === 'vi' ? 'Toàn cảnh sân khấu chung kết hoành tráng bùng nổ của các thí sinh' : 'Spectacular view of the grand finale stage with all candidates lining up'
            },
            {
              id: 'ndsv-p3',
              url: 'https://drive.google.com/file/d/1v-tsGcEM9vLs9CGygF7j2J9wJotPfzmi/view?usp=sharing',
              caption: lang === 'vi' ? 'Lên ngôi Quán quân Nét đẹp sinh viên Kiến trúc D.A.U 2023 lộng lẫy và tự hào' : 'Crowning the glorious Champions of the D.A.U Student Pageant 2023 in an atmosphere of pride and fireworks'
            }
          ];
        }
        return prev.map(p => {
          if (p.id === 'ndsv-p1') {
            return {
              ...p,
              url: 'https://drive.google.com/file/d/1X3jwdhEh6RxCAuBA4JQSBp8PYHXYdDDP/view?usp=sharing',
              caption: lang === 'vi' ? 'Đoàn trường Đại học Kiến trúc Đà Nẵng - Poster TOP 18 Nét đẹp sinh viên Kiến trúc 2023' : 'Đà Nẵng Architecture University - TOP 18 Finalists of student beauty pageant 2023'
            };
          }
          if (p.id === 'ndsv-p2') {
            return {
              ...p,
              url: 'https://drive.google.com/file/d/13bYuMMJKFJItq_eCXa0-x2YQzmTU9U_T/view?usp=sharing',
              caption: lang === 'vi' ? 'Toàn cảnh sân khấu chung kết hoành tráng bùng nổ của các thí sinh' : 'Spectacular view of the grand finale stage with all candidates lining up'
            };
          }
          if (p.id === 'ndsv-p3') {
            return {
              ...p,
              url: 'https://drive.google.com/file/d/1v-tsGcEM9vLs9CGygF7j2J9wJotPfzmi/view?usp=sharing',
              caption: lang === 'vi' ? 'Lên ngôi Quán quân Nét đẹp sinh viên Kiến trúc D.A.U 2023 lộng lẫy và tự hào' : 'Crowning the glorious Champions of the D.A.U Student Pageant 2023 in an atmosphere of pride and fireworks'
            };
          }
          return p;
        });
      });
    } else {
      setPhotos(prev => {
        if (prev.length === 0 || !prev.some(p => p.id.startsWith('emis-p'))) {
          return [
            {
              id: 'emis-p1',
              url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
              caption: lang === 'vi' ? 'Không gian sân vườn tràn ngập sắc xanh tại Wind Garden Coffee' : 'Lush green serene garden space at Wind Garden Coffee (Emi Cafe)'
            },
            {
              id: 'emis-p2',
              url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
              caption: lang === 'vi' ? 'Phong cách ấm cúng đậm chất Nhật Bản cổ kính tại Emi Cafe An Thượng' : 'Warm authentic Japanese vintage atmosphere at Emi Cafe An Thượng'
            },
            {
              id: 'emis-p3',
              url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80',
              caption: lang === 'vi' ? 'Hẻm nhỏ mộc mạc lưu giữ truyền thống gốm tại Tiệm Cà Phê PHINN Gốm' : 'Rustic quiet alley and vintage hand-painted pottery at Phinn Gốm Cafe'
            },
            {
              id: 'emis-p4',
              url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
              caption: lang === 'vi' ? 'Góc ban công ấm cúng ngập tràn ánh đèn triết lý hoàng hôn tại Namto House' : 'Cozy and romantic glowing balcony hangout hotspot at Namto House'
            }
          ];
        }
        return prev;
      });
    }
  }, [projectId, lang, isNdsv]);

  // Hydrate files from IndexedDB to Object URLs on mount/load
  useEffect(() => {
    let activeUrls: string[] = [];
    const hydrate = async () => {
      // Hydrate photos
      let changedPhotos = false;
      const hydratedPhotos = await Promise.all(
        photos.map(async (p) => {
          if (p.id.startsWith('custom-p-')) {
            const blob = await getBlob(p.id);
            if (blob) {
              const url = URL.createObjectURL(blob);
              activeUrls.push(url);
              changedPhotos = true;
              return { ...p, url };
            }
          }
          return p;
        })
      );

      if (changedPhotos) {
        setPhotos(hydratedPhotos);
      }

      // Hydrate videos
      let changedVideos = false;
      const hydratedVideos = await Promise.all(
        videos.map(async (v) => {
          // Check if we have an item stored under this ID in IndexedDB
          const blob = await getBlob(v.id);
          if (blob) {
            const url = URL.createObjectURL(blob);
            activeUrls.push(url);
            changedVideos = true;
            
            // Clear video error state for hydrated items
            setVideoErrors(prev => {
              if (prev[v.id]) {
                const updated = { ...prev };
                delete updated[v.id];
                return updated;
              }
              return prev;
            });
            
            return { ...v, url };
          }
          return v;
        })
      );

      if (changedVideos) {
        setVideos(hydratedVideos);
      }
    };

    hydrate();

    // Revoke object URLs on unmount to prevent memory leaks
    return () => {
      activeUrls.forEach(url => {
        try {
          URL.revokeObjectURL(url);
        } catch (e) {
          console.error('Error revoking URL:', e);
        }
      });
    };
  }, [projectId]);

  // Load preconfigured data on mount (scroll handling & cached url migration)
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Migrate any legacy 'w3schools' URLs in local storage to local relative asset paths for Emi's
    if (!isNdsv) {
      setVideos(prev => {
        const hasLegacy = prev.some(v => v.url.includes('w3schools.com'));
        if (hasLegacy) {
          return [
            {
              id: 'emis-v1',
              url: '/src/assets/emis-v1.mp4',
              title: lang === 'vi' ? 'Thước phim 1: Một quán sân vườn COFFEE siêu CHILL (Wind Garden Coffee - Emi Cafe)' : 'Clip 1: Relaxation Garden Coffee Tour & Aesthetic Vibe (Wind Garden)',
              duration: '01:12',
              views: '13.4K',
              likes: '1.2K',
              sub: lang === 'vi' ? 'Vlog trải nghiệm không gian xanh ngát chữa lành cực chill tại quán: Đi dạo qua chiếc cầu bắc ngang hồ cá koi rực rỡ sắc màu, Emi mặc trang phục Kimono Nhật Bản duyên dáng, cho cá ăn cực vui mắt, gọi ly sinh tố tốt cho sức khỏe tại quầy bar và tận hưởng tiếng chim hót.' : 'A beautiful green escape tour: walking over the vibrant koi fish pond bridge, wearing elegant Japanese Yukata, feeding fishes, ordering customized nutrition smoothies, and healing in refreshing nature space.'
            },
            {
              id: 'emis-v2',
              url: '/src/assets/emis-v2.mp4',
              title: lang === 'vi' ? 'Thước phim 2: Cafe Style Nhật Bản tại Đà Nẵng (Emi Cafe An Thượng)' : 'Clip 2: Japanese Cosplay Cafe Style Exploration (An Thuong Area)',
              duration: '00:48',
              views: '24.1K',
              likes: '3.5K',
              sub: lang === 'vi' ? 'Video ngắn dắt bạn đi qua mặt tiền gạch ấm cúng khu An Thượng. Chụp ảnh lưu niệm với tượng bảo vệ Totoro che ô độc lạ, đọc truyện tranh Nhật Bản tại góc trà, giới thiệu menu 4 thứ tiếng cực xịn và dịch vụ mượn đồ Yukata thuê thử.' : 'Short clip walking you through the warm brick facade at An Thuong. Snap pictures with the iconic Totoro guardian, read manga books, try renting authentic Japanese Yukata robes, and read the 4-language menu.'
            },
            {
              id: 'emis-v3',
              url: '/src/assets/emis-v3.mp4',
              title: lang === 'vi' ? 'Thước phim 3: Khám phá Tiệm Cà Phê PHINN Gốm cổ kính (Thái Phiên Alley)' : 'Clip 3: Hidden Phinn Gốm Cafe & Vintage Ceramic Teahouse (Thai Phien Alley)',
              duration: '02:15',
              views: '11.8K',
              likes: '952',
              sub: lang === 'vi' ? 'Quay chụp nghệ thuật trong một con hẻm yên tĩnh ở Thái Phiên: Khám phá ngách nhỏ trang trọng lưu giữ gốm vẽ tay, viết mong ước trên mẫu giấy nhỏ treo kín bảng kỷ niệm, đọc sách thưởng thức món sữa chua chanh mát lạnh sảng khoái.' : 'Artsy camera movements inside a quiet alley teahouse: explore custom hand-painted vintage ceramic pottery, write notes on the cute wooden wish board, and read books while enjoying local fresh lemon yogurt.'
            },
            {
              id: 'emis-v4',
              url: '/src/assets/emis-v4.mp4',
              title: lang === 'vi' ? 'Thước phim 4: Nơi sống ảo Triệu Like - Namto House (130 An Thượng)' : 'Clip 4: Instagrammable Dream Hotspot - Namto House Cozy Teahouse',
              duration: '01:05',
              views: '35.6K',
              likes: '4.8K',
              sub: lang === 'vi' ? 'Khoe trọn góc check-in tuyệt đẹp Namto House. Ban công tràn đầy đèn neon lấp lánh và hoa hồng, lùng sục ngắm nhìn nội thất gỗ và tủ bánh ngọt nướng giòn rụm tại bàn, nếm thử ly cafe đặc sản béo ngậy được phục vụ siêu nhanh.' : 'Showcasing wonderful photogenic check-in spots at Namto House hanging garden, with sparkling lights, wooden architectures, fresh buttery croissants, and premium espresso served with speed and smile!'
            }
          ];
        }
        return prev;
      });
    }
  }, [projectId, lang, isNdsv]);

  // Handler: Add custom photo (by Link)
  const handleAddPhotoByLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoUrlInput.trim()) return;

    const newPhoto: PhotoItem = {
      id: `custom-p-${Date.now()}`,
      url: photoUrlInput,
      caption: photoCaptionInput.trim() || (lang === 'vi' ? 'Ảnh được thêm mới' : 'Newly uploaded image')
    };

    setPhotos(prev => [...prev, newPhoto]);
    setPhotoUrlInput('');
    setPhotoCaptionInput('');
  };

  // Handler: Local image upload via IndexedDB (saves quota, survives refresh)
  const handlePhotoFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const id = `custom-p-${Date.now()}`;
    try {
      await saveBlob(id, file);
      const objectUrl = URL.createObjectURL(file);
      const newPhoto: PhotoItem = {
        id,
        url: objectUrl,
        caption: file.name
      };
      setPhotos(prev => [...prev, newPhoto]);
    } catch (err) {
      console.error('Error saving uploaded photo:', err);
    }
  };

  // Handler: Add custom video (by file or Link)
  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrlInput.trim()) return;

    // Detect if embed Link (Youtube, Drive, or iframe string)
    const isEmbedByString = videoUrlInput.includes('<iframe') || videoUrlInput.includes('player.vimeo') || videoUrlInput.includes('tiktok.com/embed');
    const isDriveOrYt = videoUrlInput.includes('drive.google.com') || videoUrlInput.includes('youtube.com') || videoUrlInput.includes('youtu.be');
    const isEmbed = isEmbedByString || isDriveOrYt;

    const inputTitle = videoTitleInput.trim();
    const inputDuration = videoDurationInput.trim() || '01:00';

    if (replaceTarget !== 'new') {
      // Replace existing item
      setVideos(prev => prev.map(v => {
        if (v.id === replaceTarget) {
          return {
            ...v,
            url: videoUrlInput,
            title: inputTitle || v.title,
            duration: inputDuration !== '01:00' ? inputDuration : (v.duration || '01:13'),
            isEmbed
          };
        }
        return v;
      }));

      // Clear the error for replaced video since we provided a valid link
      setVideoErrors(prev => {
        const copy = { ...prev };
        delete copy[replaceTarget];
        return copy;
      });
    } else {
      // Add as a new video
      const newVideo: VideoItem = {
        id: `custom-v-${Date.now()}`,
        url: videoUrlInput,
        title: inputTitle || (lang === 'vi' ? 'Video được tải lên' : 'Newly added video'),
        duration: inputDuration,
        isEmbed,
        views: '1.5K',
        likes: '128'
      };
      setVideos(prev => [...prev, newVideo]);
    }

    setVideoUrlInput('');
    setVideoTitleInput('');
    setVideoDurationInput('');
  };

  // Handler: Local video upload via IndexedDB (handles additions and replacements)
  const handleVideoFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Determine target ID based on manual dropdown selector or filename patterns
    let targetId = replaceTarget;
    const nameLower = file.name.toLowerCase();

    // Auto-detect if user named file like v1/v2/v3/v4 but uploader select is 'new'
    if (targetId === 'new') {
      if (nameLower.includes('emis-v1') || nameLower.includes('emis_v1') || (nameLower.includes('v1') && !nameLower.includes('v10'))) {
        targetId = 'emis-v1';
      } else if (nameLower.includes('emis-v2') || nameLower.includes('emis_v2') || nameLower.includes('v2')) {
        targetId = 'emis-v2';
      } else if (nameLower.includes('emis-v3') || nameLower.includes('emis_v3') || nameLower.includes('v3')) {
        targetId = 'emis-v3';
      } else if (nameLower.includes('emis-v4') || nameLower.includes('emis_v4') || nameLower.includes('v4')) {
        targetId = 'emis-v4';
      }
    }

    try {
      await saveBlob(targetId === 'new' ? `custom-v-${Date.now()}` : targetId, file);
      const objectUrl = URL.createObjectURL(file);

      // Clear video errors for this target
      const idToUpdate = targetId === 'new' ? `custom-v-${Date.now()}` : targetId;
      setVideoErrors(prev => {
        if (prev[idToUpdate]) {
          const updated = { ...prev };
          delete updated[idToUpdate];
          return updated;
        }
        return prev;
      });

      if (targetId !== 'new') {
        // Replace existing item
        setVideos(prev => prev.map(v => {
          if (v.id === targetId) {
            return {
              ...v,
              url: objectUrl,
              duration: videoDurationInput.trim() || v.duration || '01:00'
            };
          }
          return v;
        }));
      } else {
        // Add as a new video
        const newVideo: VideoItem = {
          id: idToUpdate,
          url: objectUrl,
          title: videoTitleInput.trim() || file.name,
          duration: videoDurationInput.trim() || '01:00',
          isEmbed: false,
          views: '1.2K',
          likes: '143'
        };
        setVideos(prev => [...prev, newVideo]);
        setVideoTitleInput('');
        setVideoDurationInput('');
      }
    } catch (err) {
      console.error('Error saving uploaded video:', err);
    }
  };

  // Handle media deletions
  const handleDeletePhoto = async (id: string) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
    if (id.startsWith('custom-p-')) {
      await deleteBlob(id);
    }
  };

  const handleDeleteVideo = async (id: string) => {
    setVideos(prev => prev.filter(v => v.id !== id));
    // Also delete any stored blobs in DB to free up user's browser disk space
    await deleteBlob(id);
  };


  // Translate elements
  const translate = {
    vi: {
      btnBack: 'Quay lại Trang chủ',
      eventOverview: 'Tổng quan Dự án & Sự kiện',
      whatWeDo: 'Sự kiện này làm gì?',
      howWeDo: 'Giải pháp & Cách thức triển khai?',
      scale: 'Quy môn & Sức lan toả?',
      photoGallery: 'Trang tư liệu ảnh chụp sự kiện',
      videoGallery: 'Các thước phim & Video đã quay dựng',
      uploadZoneTitle: 'TẢI TƯ LIỆU LÊN HOẶC ĐÍNH KÈM ĐƯỜNG LINK',
      uploadPhotoPlaceholder: 'Nhập đường link ảnh (Unsplash, Imgur, v.v...)',
      uploadBtn: 'Đăng tải',
      photoCaption: 'Mô tả hình ảnh (Không bắt buộc)...',
      videoUrlPlaceholder: 'Nhập link video (.mp4, YouTube, TikTok Embed, v.v...)',
      videoTitlePlaceholder: 'Tên hoặc tiêu đề thước phim...',
      videoDuration: 'Thời lượng (vd: 01:15)',
      dragDrop: 'Chọn file ảnh/video từ máy của bạn',
      noMedia: 'Chưa có tệp truyền thông nào. Hãy bắt đầu tải lên để lưu giữ dự án.',
      scaleTitle: 'Thông tin Quy mô',
      scaleSub: 'Chi tiết sức mạnh chạm tới khán giả',
      ndsvFullWhat: 'Tổ chức sản xuất toàn diện chuỗi nội dung đa phương tiện phủ rộng các tệp fanpage câu lạc bộ, phối hợp chụp hình thời trang ngoại cảnh kết hợp tài trợ, thiết kế visual truyền thông cổ động và biên tập 22 video ngắn đồng hành kịch tính từ vòng sơ tuyển cho tới đêm Gala chung kết hoành tráng.',
      ndsvFullHow: 'Thiết kế concept hình thái trẻ trung, gần gũi và đầy năng lượng sinh viên. Biên dựng các kịch bản short-form tập trung trực diện vào thế mạnh tự nhiên của từng thí sinh, kết hợp ứng dụng prompt AI của Gemini để sáng tạo nhanh 15 khuôn mẫu câu hỏi đối đáp phá tan sự ngượng ngùng trước máy quay.',
      ndsvFullScale: 'Phủ sóng trực diện tới hơn 5.000 sinh viên tại Đại học Kiến trúc Đà Nẵng (D.A.U), thu hút sự hưởng ứng của 82 thí sinh đăng ký chính thức, đạt tổng thành tích ấn tượng 102,586+ lượt xem tự nhiên không qua trả phí quảng cáo, ghi nhận tỷ lệ tương tác ấn tượng 6.9% CPC.',
      emisFullWhat: 'Nghiên cứu thị trường ẩm thực sầm uất tại Đà Nẵng, thiết kế lại bộ nhận diện hình ảnh trực tuyến cho thương hiệu qua nền tảng TikTok. Quay dựng chụp ảnh sản phẩm hoàn toàn nguyên bản cận cảnh để đánh thức vị giác du khách.',
      emisFullHow: 'Xác lập và tối ưu bộ công cụ học máy SEO TikTok đưa các video của quán xuất hiện đầu danh sách tìm kiếm địa phương như "ăn gì ở Đà Nẵng", lồng ghép nhạc nền độc quyền tạo cảm giác hiện đại tươi mới cùng lời bình ngắn gọn kịch tính.',
      emisFullScale: 'Bứt phá vượt mốc 13.000+ lượt xem đỉnh điểm, luồng xem trung bình đều đặn duy trì trong khoảng 2.000 đến 6.500 views trên mỗi bài đăng hoàn toàn tự nhiên (0 VNĐ Ads), định vị hoàn hảo thương hiệu ẩm thực EMI\'S trong tâm trí giới trẻ.'
    },
    en: {
      btnBack: 'Back to Home',
      eventOverview: 'Project & Event Overview',
      whatWeDo: 'What does this event do?',
      howWeDo: 'How was it executed?',
      scale: 'Event Scale & Performance?',
      photoGallery: 'Event Photo Showcase Gallery',
      videoGallery: 'Produced Films & Video Shorts',
      uploadZoneTitle: 'UPLOAD ASSETS OR PASTE LINKS',
      uploadPhotoPlaceholder: 'Enter image URL (Unsplash, Imgur, etc.)',
      uploadBtn: 'Post & Add',
      photoCaption: 'Image caption description (Optional)...',
      videoUrlPlaceholder: 'Enter video link (.mp4, YouTube, TikTok Embed, etc.)',
      videoTitlePlaceholder: 'Film title or description...',
      videoDuration: 'Duration (e.g. 01:15)',
      dragDrop: 'Choose photo/video file from local storage',
      noMedia: 'No media uploaded yet. Start posting to build up the gallery.',
      scaleTitle: 'Scale Overview',
      scaleSub: 'Audience reach and growth metrics in detail',
      ndsvFullWhat: 'Produced end-to-end multi-platform media content deployed across student channels. Led outdoor photoshoots, brand visual sponsorships, and filmed 22 horizontal/vertical reels following candidates from initial auditions up to the massive final Gala.',
      ndsvFullHow: 'Created an energetic student-focused design theme, matching short-video scripts to the personalities of candidates. Applied AI prompt engineering to build conversational icebreakers that got students comfortable on stage.',
      ndsvFullScale: 'Directly engaged 5,000+ D.A.U Architecture university students, gathering 82 registrants, generating over 102k+ organic views with zero paid media investments, and registering a 6.9% CPC click-through rate.',
      emisFullWhat: 'Conducted local competitor assessments, mapped visual identity standards for TikTok content, and produced raw culinary videos designed specifically to spark immediate cravings for regional specialties.',
      emisFullHow: 'Leveraged structured search-engine optimizations (TikTok SEO) targeting hot landmarks like "Da Nang local food", incorporating curated audio tracks and high-impact fast-motion editing tricks.',
      emisFullScale: 'Reached peak breakouts of 13k+ views per video, holding a highly stable organic flow of 2k – 6.5k views on non-promoted uploads, capturing substantial organic tourist foot traffic to the store.',
    }
  }[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 transition-colors duration-300 relative pb-24 pt-28">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-50/40 via-transparent to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation back header */}
        <div className="mb-8 flex items-center justify-between">
          <button 
            id="back-to-home-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-55 border border-neutral-220 text-neutral-850 hover:text-neutral-950 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all duration-200 cursor-pointer hover:scale-101 active:scale-99"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            {translate.btnBack}
          </button>

          <div className="flex items-center gap-2 text-xs text-neutral-450 font-mono tracking-wider uppercase bg-blue-50/50 border border-blue-100/50 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{isNdsv ? 'D.A.U Event Hub' : 'EMI\'S Growth Lab'}</span>
          </div>
        </div>

        {/* Hero Title space */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-12 rounded-3xl border shadow-xl relative overflow-hidden p-8 sm:p-12 duration-300 transition-all ${
            isNdsv 
              ? 'border-neutral-850 text-white bg-slate-950 shadow-blue-500/10' 
              : 'bg-white border-neutral-200/80 text-neutral-900'
          }`}
          style={isNdsv ? {
            backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.75) 60%, rgba(15, 23, 42, 0.5) 100%), url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : undefined}
        >
          {/* Subtle tech grid backing */}
          {!isNdsv && (
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          )}
          
          <div className="relative z-10 text-center sm:text-left">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold rounded-full mb-4 uppercase tracking-wider ${
              isNdsv ? 'text-blue-300 bg-blue-500/10 border border-blue-500/30' : 'text-blue-600 bg-blue-50 border border-blue-100'
            }`}>
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {isNdsv ? (lang === 'vi' ? 'Dự án truyền thông lớn' : 'Major Media Project') : (lang === 'vi' ? 'Sự tăng trưởng thần tốc' : 'Velocity Growth')}
            </span>

            <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
              isNdsv ? 'text-white' : 'text-neutral-950'
            }`}>
              {isNdsv ? 'NÉT ĐẸP SINH VIÊN D.A.U 2023' : 'TIKTOK EMI\'S DANANG GROWTH'}
            </h1>
            <p className={`text-sm sm:text-lg max-w-3xl mt-4 leading-relaxed font-light ${
              isNdsv ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              {isNdsv 
                ? (lang === 'vi' ? 'Hành trình từ lập kịch bản đến buổi dạ tiệc vinh danh nhan sắc học đường của 5000 sinh viên tại Đại học Kiến trúc Đà Nẵng' : 'From script blueprinting to the star-studded final celebration of collegiate beauty for thousands of students')
                : (lang === 'vi' ? 'Định hình thị giác ẩm thực qua SEO TikTok, dẫn lối hàng ngàn du khách tìm tới trải nghiệm ẩm thực Đà Nẵng nguyên bản' : 'Crafting local lifestyle cooking visuals optimized by robust search engines to drive organic foot traffic')
              }
            </p>

            {/* Micro stats banner */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-dashed ${
              isNdsv ? 'border-neutral-800' : 'border-neutral-150'
            }`}>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-neutral-400">{lang === 'vi' ? 'Hình thức' : 'Format'}</span>
                <p className={`text-sm font-bold mt-1 ${isNdsv ? 'text-neutral-100' : 'text-neutral-850'}`}>{isNdsv ? 'Offline Event / Video' : 'Digital SEO Growth'}</p>
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-neutral-400">{lang === 'vi' ? 'Thời gian' : 'Date'}</span>
                <p className={`text-sm font-bold mt-1 ${isNdsv ? 'text-neutral-100' : 'text-neutral-850'}`}>{isNdsv ? 'Tháng 10 – 12, 2023' : 'Tháng 05 – 08, 2024'}</p>
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-neutral-400">{lang === 'vi' ? 'Địa điểm' : 'Location'}</span>
                <p className={`text-sm font-bold mt-1 ${isNdsv ? 'text-neutral-100' : 'text-neutral-850'}`}>Đà Nẵng, Việt Nam</p>
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-neutral-400">{lang === 'vi' ? 'Ngân sách Ads' : 'Ads Budget'}</span>
                <p className="text-sm font-bold text-emerald-600 mt-1">0 VNĐ (Organic 100%)</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Core details segment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: What it does (Sự kiện ấy làm gì) */}
          <GlowWrapper glowColor="rgba(59, 130, 246, 0.1)" className="rounded-3xl">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-220 shadow-md h-full text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-6 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 font-sans">
                {translate.whatWeDo}
              </h3>
              <p className="text-xs sm:text-xs text-neutral-600 leading-relaxed font-light mt-2 prose">
                {isNdsv ? translate.ndsvFullWhat : translate.emisFullWhat}
              </p>
            </div>
          </GlowWrapper>

          {/* Card 2: How it works (Như thế nào) */}
          <GlowWrapper glowColor="rgba(168, 85, 247, 0.1)" className="rounded-3xl">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-220 shadow-md h-full text-left">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 mb-6 shrink-0">
                <Milestone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 font-sans">
                {translate.howWeDo}
              </h3>
              <p className="text-xs sm:text-xs text-neutral-600 leading-relaxed font-light mt-2 prose">
                {isNdsv ? translate.ndsvFullHow : translate.emisFullHow}
              </p>
            </div>
          </GlowWrapper>

          {/* Card 3: Scale (Quy mô ra sao) */}
          <GlowWrapper glowColor="rgba(16, 185, 129, 0.1)" className="rounded-3xl">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-220 shadow-md h-full text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 mb-6 shrink-0">
                <Scaling className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 font-sans">
                {translate.scale}
              </h3>
              <p className="text-xs sm:text-xs text-neutral-600 leading-relaxed font-light mt-2 prose">
                {isNdsv ? translate.ndsvFullScale : translate.emisFullScale}
              </p>
            </div>
          </GlowWrapper>

        </div>


        {/* Interactive Image Showcase Gallery */}
        {photos.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-neutral-200/80 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight font-sans">
                  {translate.photoGallery}
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  {lang === 'vi' ? 'Thống kê thực hành ngoại cảnh và thiết kế sáng tạo của sự kiện' : 'Visual collection from live production work and designs'}
                </p>
              </div>
              <span className="px-3.5 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-xl text-xs font-mono font-bold mt-2 sm:mt-0">
                {photos.length} {lang === 'vi' ? 'Hình ảnh' : 'Images'}
              </span>
            </div>

            {!isNdsv ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {photos.map((p) => (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl overflow-hidden border border-neutral-220 shadow-sm bg-white cursor-pointer"
                    >
                      <div 
                        onClick={() => setActivePhotoPreview(p.url)} 
                        className="relative aspect-video overflow-hidden bg-neutral-100"
                      >
                        <img 
                          src={getDirectImageUrl(p.url)} 
                          alt={p.caption} 
                          className="w-full h-full object-cover duration-300 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="p-2.5 rounded-xl bg-white/90 text-neutral-900 text-xs font-bold shadow-md">
                            {lang === 'vi' ? 'Xem ảnh lớn' : 'View Full Image'}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between text-left">
                        <p className="text-xs font-medium text-neutral-800 line-clamp-1">{p.caption}</p>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeletePhoto(p.id);
                          }}
                          className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                          title={lang === 'vi' ? 'Xoá ảnh' : 'Delete image'}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : !showAllPhotos ? (
              <div className="flex flex-col items-center max-w-2xl mx-auto w-full">
                <div className="w-full group relative rounded-2xl overflow-hidden border border-neutral-220 shadow-md bg-white cursor-pointer aspect-video">
                  <div 
                    onClick={() => photos[currentImageIndex] && setActivePhotoPreview(photos[currentImageIndex].url)} 
                    className="w-full h-full relative"
                  >
                    <AnimatePresence mode="wait">
                      {photos[currentImageIndex] && (
                        <motion.img 
                          key={photos[currentImageIndex].id}
                          src={getDirectImageUrl(photos[currentImageIndex].url)} 
                          alt={photos[currentImageIndex].caption} 
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full absolute inset-0 object-cover bg-neutral-50"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </AnimatePresence>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-left flex flex-col justify-end h-1/2">
                      <p className="subtitle-caption text-xs sm:text-xs font-bold text-white leading-tight mb-1">
                        {photos[currentImageIndex]?.caption}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                      <span className="p-2.5 rounded-xl bg-white/95 text-neutral-900 text-xs font-bold shadow-md">
                        {lang === 'vi' ? 'Xem ảnh lớn' : 'View Full Image'}
                      </span>
                    </div>
                  </div>

                  {/* Bullet / Counter indicators */}
                  <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white flex items-center gap-1.5 z-20 shadow-xs select-none">
                    <span className="text-blue-400">{currentImageIndex + 1}</span>
                    <span className="text-neutral-500">/</span>
                    <span>{photos.length}</span>
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => (prev - 1 + photos.length) % photos.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center duration-150 transition-all cursor-pointer opacity-0 group-hover:opacity-100 z-20 text-lg font-bold"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => (prev + 1) % photos.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center duration-150 transition-all cursor-pointer opacity-0 group-hover:opacity-100 z-20 text-lg font-bold"
                  >
                    ›
                  </button>
                </div>

                {/* Show All Trigger Button */}
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg hover:shadow-blue-500/10 active:scale-98 duration-150 transition-all cursor-pointer font-sans"
                >
                  <span>🖼️ {lang === 'vi' ? 'XEM TẤT CẢ' : 'VIEW ALL PHOTOS'}</span>
                </button>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {photos.map((p) => (
                      <motion.div
                        key={p.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="group relative rounded-2xl overflow-hidden border border-neutral-220 shadow-sm bg-white cursor-pointer"
                      >
                        <div 
                          onClick={() => setActivePhotoPreview(p.url)} 
                          className="relative aspect-video overflow-hidden bg-neutral-100"
                        >
                          <img 
                            src={getDirectImageUrl(p.url)} 
                            alt={p.caption} 
                            className="w-full h-full object-cover duration-300 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <span className="p-2.5 rounded-xl bg-white/90 text-neutral-900 text-xs font-bold shadow-md">
                              {lang === 'vi' ? 'Xem ảnh lớn' : 'View Full Image'}
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex items-center justify-between text-left">
                          <p className="text-xs font-medium text-neutral-800 line-clamp-1">{p.caption}</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeletePhoto(p.id);
                            }}
                            className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                            title={lang === 'vi' ? 'Xoá ảnh' : 'Delete image'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Collapse Button */}
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllPhotos(false)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-220 text-neutral-700 font-bold text-xs rounded-xl cursor-pointer duration-150 transition-colors"
                  >
                    <span>▲ {lang === 'vi' ? 'Thu gọn' : 'Collapse Slideshow'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Interactive Video Showcase Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-neutral-200/80 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight font-sans">
                {translate.videoGallery}
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                {isNdsv 
                  ? (lang === 'vi' ? 'Danh sách các video tư liệu màn biểu diễn chính hoành tráng' : 'Official video highlights and main stage horizontal clips')
                  : (lang === 'vi' ? 'BST Thước phim ngắn định dạng đứng TikTok trực quan cực nét vừa tải lên' : 'Curated collection of recently uploaded portrait-first TikTok viral clips')
                }
              </p>
            </div>
            <span className="px-3.5 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-600 rounded-xl text-xs font-mono font-bold mt-2 sm:mt-0">
              {videos.length} {lang === 'vi' ? 'Sản phẩm Video' : 'Videos'}
            </span>
          </div>

          <div className={isNdsv ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
            <AnimatePresence mode="popLayout">
              {videos.map((vid) => (
                <motion.div
                  key={vid.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`bg-white rounded-3xl border border-neutral-220 shadow-md p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                    !isNdsv ? 'max-w-[340px] mx-auto w-full' : ''
                  }`}
                >
                  <div className="text-left flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-bold font-mono">
                          <Film className="w-3 h-3 text-blue-500 animate-pulse" />
                          <span>{isNdsv ? 'OFFLINE GALA' : 'VERTICAL REEL'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 font-bold bg-neutral-50 px-2 py-0.5 rounded-md border border-neutral-200/50">
                          {vid.duration}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-neutral-950 mb-2 line-clamp-2 hover:text-blue-600 duration-150">
                        {vid.title}
                      </h4>
                      {vid.sub && (
                        <p className="text-xs text-neutral-500 leading-relaxed font-light mb-4 line-clamp-3">
                          {vid.sub}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* HTML5 or Embed Player */}
                  <div className={`rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-220 relative mb-4 shadow-inner group ${
                    isNdsv ? 'aspect-video' : 'aspect-[9/16] max-h-[460px]'
                  }`}>
                    {vid.isEmbed || (vid.url.startsWith('http') && (vid.url.includes('drive.google.com') || vid.url.includes('youtube.com') || vid.url.includes('youtu.be') || vid.url.includes('tiktok.com'))) ? (
                      <iframe 
                        src={getEmbedUrl(vid.url)} 
                        title={vid.title}
                        className="w-full h-full border-0 rounded-xl bg-neutral-950"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : vid.isEmbed && !vid.url.startsWith('http') ? (
                      <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-400 text-xs text-center p-4">
                        {lang === 'vi' ? 'Tài nguyên nhúng iframe (YouTube / TikTok)' : 'Embedded Iframe Source'}
                        <div className="hidden" dangerouslySetInnerHTML={{ __html: vid.url }} />
                      </div>
                    ) : videoErrors[vid.id] ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900/95 text-neutral-300 text-xs text-center p-5 select-none animate-fade-in">
                        <AlertCircle className="w-8 h-8 text-amber-500 mb-2.5" />
                        <p className="font-bold text-neutral-200 mb-1.5 px-2">
                          {lang === 'vi' ? 'Video chưa được tải lên máy chủ' : 'Video file not found'}
                        </p>
                        <p className="text-[10px] text-neutral-400 leading-relaxed px-1">
                          {lang === 'vi'
                            ? 'Vui lòng tải tệp video lên thư mục dự án để hiển thị.'
                            : 'Please upload the video file to the project assets folder to display it.'}
                        </p>
                      </div>
                    ) : (
                      <video 
                        src={vid.url} 
                        controls 
                        className="w-full h-full object-cover"
                        preload="metadata"
                        onError={() => setVideoErrors(prev => ({ ...prev, [vid.id]: true }))}
                      />
                    )}
                  </div>

                  {/* Dynamic Engagement Actions & Delete */}
                  <div className="border-t border-neutral-100 pt-3 mt-1 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      {/* Simulated Interactive Views counts */}
                      <div className="flex items-center gap-1 text-xs font-mono font-semibold text-neutral-400">
                        <Eye className="w-3.5 h-3.5 text-neutral-400/80" />
                        <span>{vid.views || '1.2K'}</span>
                      </div>
                      
                      {/* Heart Like Trigger */}
                      <button
                        onClick={() => {
                          setVideos(prev => prev.map(v => {
                            if (v.id === vid.id) {
                              const liked = !v.likedByUser;
                              let likesNum = 0;
                              let likesStr = v.likes || '0';
                              if (likesStr.toLowerCase().includes('k')) {
                                likesNum = Math.round(parseFloat(likesStr) * 1000);
                              } else {
                                likesNum = parseInt(likesStr) || 0;
                              }
                              const newLikesNum = liked ? likesNum + 1 : likesNum - 1;
                              const newLikesStr = newLikesNum >= 1000 ? `${(newLikesNum / 1000).toFixed(1)}K` : `${newLikesNum}`;
                              return {
                                ...v,
                                likedByUser: liked,
                                likes: newLikesStr
                              };
                            }
                            return v;
                          }));
                        }}
                        className={`inline-flex items-center gap-1 text-xs font-mono font-semibold transition-colors duration-150 cursor-pointer ${
                          vid.likedByUser ? 'text-rose-500 font-bold' : 'text-neutral-400 hover:text-rose-400'
                        }`}
                        title={lang === 'vi' ? 'Thả tim' : 'Heart video'}
                      >
                        <Heart className={`w-3.5 h-3.5 ${vid.likedByUser ? 'fill-rose-500 text-rose-500' : ''}`} />
                        <span>{vid.likes || '95'}</span>
                      </button>
                    </div>

                    <button 
                      onClick={() => {
                        setVideos(prev => prev.filter(v => v.id !== vid.id));
                      }}
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-neutral-50 duration-200 cursor-pointer"
                      title={lang === 'vi' ? 'Xoá video' : 'Delete video'}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>



        {/* Visual large preview popups (Lightbox simulation) */}
        <AnimatePresence>
          {activePhotoPreview && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoPreview(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <div className="max-w-4xl max-h-[85vh] relative flex flex-col items-center justify-center">
                <img 
                  src={getDirectImageUrl(activePhotoPreview || '')} 
                  alt="Full preview" 
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
                  referrerPolicy="no-referrer"
                />
                <p className="mt-4 text-xs font-semibold text-neutral-300 font-sans tracking-wide">
                  {lang === 'vi' ? 'Bấm bất kỳ đâu ngoài ảnh để quay lại.' : 'Click anywhere outside to retreat.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
