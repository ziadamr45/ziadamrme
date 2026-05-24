import { NextResponse } from "next/server";

// In-memory cache with 24-hour TTL
interface CacheEntry {
  data: SocialFeedResponse;
  timestamp: number;
}

let cache: CacheEntry | null = null;
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms

export interface SocialPost {
  platform: string;
  content: string;
  date: string;
  url: string;
}

export interface SocialFeedResponse {
  posts: SocialPost[];
  lastUpdated: string;
}

// Platform icon SVGs (small inline)
export const platformIcons: Record<string, string> = {
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  threads: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.396-1.17 1.166-.02 2.14.16 2.963.51v-.67c0-.936-.244-1.648-.727-2.117-.54-.524-1.384-.79-2.51-.79-1.242 0-2.255.285-3.013.848l-.168.125-.996-1.63.147-.106c1.09-.78 2.555-1.176 4.354-1.176 1.58 0 2.826.39 3.703 1.158.907.795 1.366 1.953 1.366 3.44v4.84l.333.172c.576.297 1.053.65 1.417 1.052.505.547.88 1.19 1.115 1.913.484 1.487.4 3.22-.792 4.76-1.39 1.796-3.592 2.707-6.542 2.707zm-.96-7.16c.92-.05 1.655-.372 2.184-.96.575-.638.89-1.524.94-2.635-.62-.267-1.357-.402-2.197-.402-.95.017-1.734.242-2.33.67-.57.406-.85.924-.832 1.54.036.78.582 1.707 2.235 1.787z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
};

// Platform brand colors
export const platformColors: Record<string, string> = {
  facebook: "text-[#1877F2]",
  instagram: "text-[#E4405F]",
  threads: "text-white dark:text-white",
  x: "text-slate-900 dark:text-white",
  linkedin: "text-[#0A66C2]",
  youtube: "text-[#FF0000]",
  telegram: "text-[#0088cc]",
};

export const platformBgColors: Record<string, string> = {
  facebook: "bg-[#1877F2]/10 dark:bg-[#1877F2]/20",
  instagram: "bg-[#E4405F]/10 dark:bg-[#E4405F]/20",
  threads: "bg-slate-800/10 dark:bg-slate-700/20",
  x: "bg-slate-800/10 dark:bg-slate-700/20",
  linkedin: "bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20",
  youtube: "bg-[#FF0000]/10 dark:bg-[#FF0000]/20",
  telegram: "bg-[#0088cc]/10 dark:bg-[#0088cc]/20",
};

// Fallback sample data (used when APIs are unavailable or during development)
function getSamplePosts(): SocialPost[] {
  return [
    {
      platform: "youtube",
      content: "الحياة على الطريق — قناة عن الرحلات والتجارب الحقيقية. فيديو جديد كل أسبوع عن رحلاتي وتجاربي في الحياة.",
      date: "2026-05-22",
      url: "https://youtube.com/@alhayat_ala_eltarek",
    },
    {
      platform: "youtube",
      content: "شاركت تجربتي في بناء تطبيق ويب كامل من الصفر — من التخطيط للنشر. شوف الفيديو على القناة!",
      date: "2026-05-15",
      url: "https://youtube.com/@alhayat_ala_eltarek",
    },
    {
      platform: "facebook",
      content: "الحمد لله، خلصت مشروع جديد! إسمع راديو — تطبيق ويب للاستماع للراديو من كل أنحاء العالم مع قسم للقرآن الكريم. جربوه وقولولي رأيكم! 📻",
      date: "2026-05-20",
      url: "https://www.facebook.com/ziad7mr",
    },
    {
      platform: "facebook",
      content: "عملت مقال جديد عن إزاي تبني تطبيقات ويب حقيقية بـ Next.js مع أمثلة من مشاريعي الشخصية. اقرأوه على المدونة!",
      date: "2026-05-10",
      url: "https://www.facebook.com/ziad7mr",
    },
    {
      platform: "instagram",
      content: "خلف الكواليس 🖥️ — شوية صور من بيئة العمل بتاعتي. كل مشروع بيبدأ بفكرة وكوباية شاي ☕",
      date: "2026-05-18",
      url: "https://www.instagram.com/ziadamr455/",
    },
    {
      platform: "instagram",
      content: "إسمع راديو — من الفكرة للتطبيق! 📻⚡ سعيد بالنتيجة النهائية. جربوه على esma3radio.vercel.app",
      date: "2026-05-08",
      url: "https://www.instagram.com/ziadamr455/",
    },
    {
      platform: "threads",
      content: "أنا مؤمن إن التقنية مش مجرد أكواد — دي أداة لحل مشاكل حقيقية. كل مشروع ببنية بفكر: إيه المشكلة اللي بحلها؟",
      date: "2026-05-21",
      url: "https://www.threads.com/@ziadamr455",
    },
    {
      platform: "threads",
      content: "أكتر حاجة تعلمتها من بناء 10+ مشروع ويب: ابدأ صغير، حل مشكلة حقيقية، واعمل iteration بناءً على feedback المستخدمين.",
      date: "2026-05-12",
      url: "https://www.threads.com/@ziadamr455",
    },
    {
      platform: "x",
      content: "Just shipped a new feature for Esma3 Radio — smart recommendations based on listening history. The algorithm analyzes user patterns and suggests stations you'll love! 📻🚀",
      date: "2026-05-19",
      url: "https://x.com/ziad90216",
    },
    {
      platform: "x",
      content: "Building real-time apps with Socket.io taught me one thing: the server must be the single source of truth. Never trust client state in multiplayer games 🎮⚡",
      date: "2026-05-09",
      url: "https://x.com/ziad90216",
    },
    {
      platform: "linkedin",
      content: "Excited to share my latest project — Bawabet Elhadas, a smart news portal with AI-powered summarization and personalized feeds. Built with Next.js, PostgreSQL, and Prisma. Always learning, always building! 💡",
      date: "2026-05-17",
      url: "https://www.linkedin.com/in/ziad-amr-44633a411",
    },
    {
      platform: "linkedin",
      content: "I just published a new blog post about database systems — my journey from SQLite to PostgreSQL, and why Prisma ORM changed how I work with data. Check it out on my website!",
      date: "2026-05-07",
      url: "https://www.linkedin.com/in/ziad-amr-44633a411",
    },
    {
      platform: "telegram",
      content: "📢 مشروع جديد: المخبر — لعبة اجتماعية تفاعلية بمكالمات صوتية حية! استخدمت LiveKit للصوت وNext.js للواجهة. جربوه على elmokhber.vercel.app 🕵️",
      date: "2026-05-16",
      url: "https://t.me/ziadamr",
    },
    {
      platform: "telegram",
      content: "مقال جديد عن الأمان في تطبيقات الويب — دروس تعلمتها بالطريقة الصعبة. من XSS لCSRF لإدارة المفاتيح. اقرأوه على ziadamr.me/blog 🔒",
      date: "2026-05-06",
      url: "https://t.me/ziadamr",
    },
  ];
}

// Fetch YouTube RSS feed
async function fetchYouTubePosts(): Promise<SocialPost[]> {
  try {
    const res = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCalhayat_ala_eltarek",
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error("YouTube RSS fetch failed");
    const text = await res.text();

    const posts: SocialPost[] = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match: RegExpExecArray | null;

    while ((match = entryRegex.exec(text)) !== null && posts.length < 2) {
      const entry = match[1];
      const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = entry.match(/<link[^>]*href="([^"]*)"/);
      const publishedMatch = entry.match(/<published>([\s\S]*?)<\/published>/);

      if (titleMatch && linkMatch) {
        posts.push({
          platform: "youtube",
          content: titleMatch[1],
          date: publishedMatch ? publishedMatch[1].split("T")[0] : new Date().toISOString().split("T")[0],
          url: linkMatch[1],
        });
      }
    }
    return posts;
  } catch {
    return [];
  }
}

async function fetchAllPosts(): Promise<SocialPost[]> {
  const youtubePosts = await fetchYouTubePosts();

  const samplePosts = getSamplePosts();

  // Merge: use real YouTube data if available, otherwise fallback to sample
  const posts: SocialPost[] = [];

  // Group by platform, take 2 each
  const platforms = ["youtube", "facebook", "instagram", "threads", "x", "linkedin", "telegram"] as const;

  for (const platform of platforms) {
    const realPosts = youtubePosts.filter((p) => p.platform === platform);
    const sampleForPlatform = samplePosts.filter((p) => p.platform === platform);

    if (realPosts.length > 0) {
      posts.push(...realPosts.slice(0, 2));
    } else {
      posts.push(...sampleForPlatform.slice(0, 2));
    }
  }

  return posts;
}

export async function GET() {
  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const posts = await fetchAllPosts();
    const data: SocialFeedResponse = {
      posts,
      lastUpdated: new Date().toISOString(),
    };

    // Update cache
    cache = { data, timestamp: Date.now() };

    return NextResponse.json(data);
  } catch {
    // Return sample data on error
    const posts = getSamplePosts();
    const data: SocialFeedResponse = {
      posts,
      lastUpdated: new Date().toISOString(),
    };

    cache = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  }
}
