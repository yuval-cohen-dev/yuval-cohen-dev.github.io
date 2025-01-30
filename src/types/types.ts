import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";
import { Videos } from "next/dist/lib/metadata/types/metadata-types";

export type MetaTagType = {
  name?: string;
  property?: string;
  content: string;
};

export type LinkTagType = {
  name?: string;
  property?: string;
  content: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  link: string;
  demoLink?: string;
};

export type SocialLinkItem = {
  name: string;
  link: string;
};


export type IconTypeItem = {
  src: string;
  type?: string | undefined;
  sizes?: string | undefined;
  purpose?: 'any' | 'maskable' | 'monochrome' | undefined;
};

export type IconItem = {
  url: string;
  alt: string;
  type: string; // e.g., "image/x-icon", "image/svg+xml"
  size?: string; // Optional size for the icon (e.g., "16x16", "32x32")
};

export type ImageItem = {
  url: string;
  width: number;
  height: number;
  alt: string;
  secureUrl?: string;
  type: string; // e.g., "image/jpeg", "image/png"
};

export type AudioItem = {
  url: string;
  alt: string;
  height: number;
  secureUrl?: string;
  type: string; // e.g., "audio/mp3", "audio/wav"
  width: number;
};

export type BookItem = {
  authors: string[];
  isbn: string;
  releaseDate: string;
  tags: string[];
};

export type VideoItem = {
  actors: string[];
  directors: string[];
  duration: number; // in seconds
  releaseDate: string;
  series: string;
  tags: string[];
  writers: string[];
};

export type VideoData = {
  url: string;
  secureUrl?: string;
  alt: string;
  height: number;
  width: number;
  type: string; // e.g., "video/mp4"
};

export type OpenGraphProfile = {
  firstName: string;
  lastName: string;
  username: string;
};

export type MenuItem = {
  name: string;
  link: string;
};

export type SitemapType = {
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
    | undefined;
  priority?: number | undefined;
  alternates?:
    | {
        languages?: Languages<string> | undefined;
      }
    | undefined;
  images?: string[] | undefined;
  videos?: Videos[] | undefined;
};

export type SitemapFile = Array<SitemapType>;

export type RobotsFile = {
  rules:
    | {
        userAgent?: string | string[] | undefined;
        allow?: string | string[] | undefined;
        disallow?: string | string[] | undefined;
        crawlDelay?: number | undefined;
      }
    | Array<{
        userAgent: string | string[];
        allow?: string | string[] | undefined;
        disallow?: string | string[] | undefined;
        crawlDelay?: number | undefined;
      }>;
  sitemap?: string | string[] | undefined;
  host?: string | undefined;
};
