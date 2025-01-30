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
