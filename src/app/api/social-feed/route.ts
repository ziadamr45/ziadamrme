import { NextResponse } from "next/server";

// In-memory cache with 24-hour TTL
interface CacheEntry {
  data: SocialFeedResponse;
  timestamp: number;
}

let cache: CacheEntry | null = null;
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms

export type SocialFeedEntry = {
  type: "post";
  platform: string;
  content: string;
  date: string;
  url: string;
  thumbnail?: string;
};

export interface SocialFeedResponse {
  entries: SocialFeedEntry[];
  lastUpdated: string;
}

// Fetch YouTube RSS feed with the correct channel ID
async function fetchYouTubePosts(): Promise<SocialFeedEntry[]> {
  try {
    const res = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCSs9VNyQqdxtNSdRabZic8w",
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error("YouTube RSS fetch failed");
    const text = await res.text();

    const posts: SocialFeedEntry[] = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match: RegExpExecArray | null;

    while ((match = entryRegex.exec(text)) !== null && posts.length < 15) {
      const entry = match[1];
      const titleMatch = entry.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = entry.match(/<link[^>]*href="([^"]*)"/);
      const publishedMatch = entry.match(/<published>([\s\S]*?)<\/published>/);
      // Extract video ID from both regular (?v=ID) and Shorts (/shorts/ID) URLs
      const videoIdFromQuery = linkMatch ? linkMatch[1].match(/[?&]v=([^&]+)/) : null;
      const videoIdFromShorts = linkMatch ? linkMatch[1].match(/\/shorts\/([^?&/]+)/) : null;
      const videoIdFromEmbed = linkMatch ? linkMatch[1].match(/\/embed\/([^?&/]+)/) : null;
      const videoIdMatch = videoIdFromQuery || videoIdFromShorts || videoIdFromEmbed;

      if (titleMatch && linkMatch) {
        const videoId = videoIdMatch ? videoIdMatch[1] : "";
        posts.push({
          type: "post",
          platform: "youtube",
          content: titleMatch[1],
          date: publishedMatch ? publishedMatch[1].split("T")[0] : new Date().toISOString().split("T")[0],
          url: linkMatch[1],
          thumbnail: videoId ? `https://i1.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined,
        });
      }
    }
    return posts;
  } catch {
    return [];
  }
}

export async function GET() {
  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const entries = await fetchYouTubePosts();
    const data: SocialFeedResponse = {
      entries,
      lastUpdated: new Date().toISOString(),
    };

    // Update cache
    cache = { data, timestamp: Date.now() };

    return NextResponse.json(data);
  } catch {
    const data: SocialFeedResponse = {
      entries: [],
      lastUpdated: new Date().toISOString(),
    };

    cache = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  }
}
