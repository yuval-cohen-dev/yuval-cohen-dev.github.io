import { Metadata, ResolvedMetadata, ResolvingMetadata, MetadataRoute, Viewport, ResolvingViewport, ResolvedViewport, } from "next";
import { Inter } from "next/font/google";
import {
  AudioItem,
  BookItem,
  ImageItem,
  LinkTagType,
  MenuItem,
  MetaTagType,
  OpenGraphProfile,
  ProjectItem,
  SocialLinkItem,
  VideoData,
  VideoItem
} from "@types";
import { Manifest } from "next/dist/lib/metadata/types/manifest-types";
import { RobotsFile, SitemapFile } from "@types";
import { Videos } from "next/dist/lib/metadata/types/metadata-types";
import { getAssets } from "@/utils/assets";
import path from "path";

export const YEAR = new Date().getUTCFullYear();
export const LAST_MODIFIED = new Date();
export const MANIFEST_FILEANAME = "manifest.json";


// Example Usage

// export const ASSETS = getAssets(path.join(process.cwd(), "public"));

// console.log("Images:", ASSETS.images);
// console.log("Audio:", ASSETS.audio);
// console.log("Videos:", ASSETS.videos);
// console.log("Icons:", ASSETS.icons);


export const FIRST_NAME = "Yuval";
export const LAST_NAME = "Cohen";
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const USERNAME = "cohenyuval315";
export const GMAIL_ADDRESS = `${USERNAME}@gmail.com"`;
export const MAIL_TO_GMAIL_LINK = `mailto:${GMAIL_ADDRESS}`;
export const GOOGLE_ANALYTICS_ID = "G-6XN8B6ZLMM";
export const FORM_ID = "xgvoyale";
export const FACEBOOK_APP_ID = "";
export const COUNTRY_NAME = "Israel";
export const COUNTRY_LANG = "he";

export const GITHUB_LINK = "https://github.com";
export const MY_GITHUB_LINK = `https://github.com/${USERNAME}`;
export const GITHUB_REPO = `${MY_GITHUB_LINK}.github.io`;
export const GITHUB_PAGE_LINK = `https://${USERNAME}.github.io`;
export const MY_LINKEDIN_LINK = "https://www.linkedin.com/in/yc315/";


export const DOMAIN = "yuval-cohen.com";
export const WWW_DOMAIN = `www.${DOMAIN}`;
export const WEB_WWW_DOMAIN_URL = `https://${WWW_DOMAIN}`;
export const WEB_DOMAIN_URL = `https://${DOMAIN}`;
export const IS_WWW_CANONICAL = true;
export const WEB_URL = IS_WWW_CANONICAL ? WEB_WWW_DOMAIN_URL : WEB_DOMAIN_URL;
export const WEB_URL_LANGUAGES = {
  languages: {
    en: WEB_URL
  }
};
export const LANGUAGE = "en";
export const PUBLISHER = FULL_NAME;
export const REFERRER:
  | "no-referrer"
  | "origin"
  | "no-referrer-when-downgrade"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin" = "no-referrer-when-downgrade";



  
export const OFFICAL = "Official Website";
export const PORTFOLIO = "Portfolio";
export const MY_OFFICAL = `${FULL_NAME}'s ${OFFICAL}`;
export const MY_OFFICAL_LOWER = `${FULL_NAME}'s ${OFFICAL.toLowerCase()}`;
export const MY_OFFICAL_WITH_EXTRA = "";
export const TWT_CREATOR_ID = "";
export const TWT_SITE_ID = "";


export const APP_CATEGORY = "Official Website, Personal Brand, Digital Hub";
export const APP_CLASSIFICATION = "Technology, Web Development, Software, Developer, Blog, Personal Website, Portfolio";
export const APP_CREATOR = FULL_NAME;
export const KEYWORDS = ["Yuval Cohen", "Official Website", "Portfolio", "Web Development", "Tech Blog", "Personal Brand", "Digital Hub", "Software Engineer"];


export const SITE_FULL_NAME = MY_OFFICAL;
export const SITE_SHORT_NAME = MY_OFFICAL;
export const SITE_DESCRIPTION = `${MY_OFFICAL_LOWER} – Showcasing software engineering, development projects, and digital expertise.`;




export const OG_DESCRIPTION = SITE_DESCRIPTION;


export const METADATA_TITLE: string = MY_OFFICAL;
export const METADATA_DESCRIPTION: string = `${FULL_NAME} OFFICAL`;
export const JSONLD_TITLE: string = MY_OFFICAL;
export const JSONLD_DESCRIPTION = SITE_DESCRIPTION;
export const OG_TITLE = MY_OFFICAL;


export const CHANGE_FREQUENCY:
  | "daily"
  | "never"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | undefined = "monthly";
export const PRIORITY: number | undefined = 0.7;
export const SITEMAP_SIZE = 5000;


export const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const PREFIX_STATIC = "/static";
export const PREFIX_IMAGES = "/images";
export const WEB_URL_ARCHIVES = [
  // `${WEB_URL}/archives`
];
export const WEB_URL_ASSETS = [`${WEB_URL}${PREFIX_STATIC}`];
export const MANIFEST_URL = `${WEB_URL}/${MANIFEST_FILEANAME}`;

export const MANIFEST_DISPLAY = "standalone";
export const MANIFEST_FULL_NAME = MY_OFFICAL_WITH_EXTRA;
export const MANIFEST_SHORT_NAME = MY_OFFICAL;
export const MANIFEST_DESCRIPTION = SITE_DESCRIPTION;
export const MANIFEST_CATEGORIES = KEYWORDS;

export const OG_SITE_NAME = MY_OFFICAL;
export const APP_NAME = MY_OFFICAL;

export const TWT_DESCRIPTION = "Explore Yuval Cohen's portfolio, blog, and digital presence. Insights on web development, tech, and more.";
export const TWT_SITE = "@yuvalcohen";
export const TWT_TITLE_ABS = MY_OFFICAL;
export const TWT_TITLE_DEF = MY_OFFICAL;
export const TWT_TITLE_TEM = "Yuval Cohen – {title}";

export const TWT_IMAGES = []

export const WEBSITE_GENERATOR = MY_OFFICAL;



// ----------------- ASSETS ---------------------

// SPECIFIC ICONS
const heroImageItem: ImageItem = {
  url: `${ASSET_PREFIX}${PREFIX_STATIC}${PREFIX_IMAGES}/hero.jpg`,
  width: 3000,
  height: 3000,
  alt: "hero background",
  type: "image/jpg"
};

const logoImageItem: ImageItem = {
  url: `${ASSET_PREFIX}${PREFIX_STATIC}${PREFIX_IMAGES}/logo.png`,
  width: 48,
  height: 48,
  alt: "portfolio logo",
  type: "image/png"
};

// SPECIFIC IMAGES
const faviconImageItem: ImageItem = {
  url: `${ASSET_PREFIX}/favicon.ico`,
  width: 48,
  height: 48,
  alt: "",
  type: "image/icon"
};

// icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
// apple: [{ url: "/apple-icon.png" }]

// REST
export const MANIFEST_ICONS = [
  // {
  //   // src: string;
  //   // type?: string | undefined;
  //   // sizes?: string | undefined;
  //   // purpose?: 'any' | 'maskable' | 'monochrome' | undefined;
  //   src:""
  // }
];

export const ICONS = [
  
];

// ALL ICONS ARE IMAGES
export const IMAGES = [...ICONS];

export const AUDIOS: AudioItem[] = [];
export const VIDEOS: VideoData[] = [];
export const SITEMAP_VIDEOS: Videos[] = [];

export const BOOK_ITEMS: BookItem[] = [];
export const VIDEOS_ITEMS: VideoItem[] = [];
export const SITEMAP_IMAGES = [];
export const IMAGES_OBJ: Record<string, ImageItem> = {
  favicon: {
    url: "/favicon.ico",
    width: 48,
    height: 48,
    alt: "",
    type: "image/icon"
  },
  logo: {
    url: `${ASSET_PREFIX}/icon.png`,
    width: 48,
    height: 48,
    alt: "portfolio logo",
    type: "image/png"
  },
  hero: {
    url: `${ASSET_PREFIX}${PREFIX_STATIC}${PREFIX_IMAGES}/hero.jpg`,
    width: 3000,
    height: 3000,
    alt: "hero background",
    type: "image/jpg"
  }
};

export const IMAGE_ITEMS: ImageItem[] = [
  heroImageItem,
  logoImageItem,
  faviconImageItem
];

export const OPEN_GRAPH_PROFILES: OpenGraphProfile = {
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  username: USERNAME
};

// --------------- FINISH ASSETS -------------------

function normalizeImage(path: string) {
  if (path.includes(WEB_URL)) {
    return path;
  } else {
    const image_with_url = `${WEB_URL}/${path}}`;
    return image_with_url;
  }
}

export const JSONLD_IMAGE = normalizeImage(IMAGES_OBJ.hero.url);

export const OG_IMAGES = [];
export const OG_VIDEOS = [];
export const START_UP_IMAGES = []; // normalizeImage(IMAGES_OBJ.hero.url);
export const MANIFEST_SCREENSHOTS = [];
const MANIFEST_ID = "/"
const MANIFEST_START_URL = "/"

export const MANIFEST: Manifest = {
  id: MANIFEST_ID,
  name: MANIFEST_FULL_NAME,
  short_name: MANIFEST_SHORT_NAME,
  description: MANIFEST_DESCRIPTION,
  start_url: MANIFEST_START_URL,
  display: MANIFEST_DISPLAY,
  orientation: "portrait",
  icons: MANIFEST_ICONS,
  lang: LANGUAGE,
  // theme_color,
  // background_color,
  categories: MANIFEST_CATEGORIES,
  dir: "ltr",
  display_override: [
    "browser",
    "fullscreen",
    "standalone",
    "minimal-ui",
    "window-controls-overlay"
  ],
  launch_handler: {
    client_mode: "auto"
  },
  // scope:"/app",
  screenshots: MANIFEST_SCREENSHOTS
};

export const SITEMAP_FILE: SitemapFile = [
  {
    url: WEB_URL,
    lastModified: LAST_MODIFIED,
    changeFrequency: CHANGE_FREQUENCY,
    priority: PRIORITY,
    alternates: WEB_URL_LANGUAGES,
    images:SITEMAP_IMAGES,
    videos:SITEMAP_VIDEOS,
  }
];

export const ROBOTS: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: ["/"],
    disallow: []
  }
  // host: WEB_URL,
  // sitemap: [...SITEMAP_FILE.map((sitemap) => sitemap.url)]
};

export const INTER = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-inter"
});

export const OTHER = {};

export const METADATA: Metadata = {
  metadataBase:new URL(WEB_URL),
  applicationName: APP_NAME,
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  alternates: {
    canonical: WEB_URL,
    languages: WEB_URL_LANGUAGES.languages,
    // media,
    // types
  },
  openGraph: {
    type: "website",
    alternateLocale: ["en_US"],
    audio: AUDIOS,
    locale: "en_US",
    countryName: COUNTRY_NAME,
    description: OG_DESCRIPTION,
    determiner: "auto",
    emails: [GMAIL_ADDRESS],
    images:OG_IMAGES,
    siteName:OG_SITE_NAME,
    title:OG_TITLE,
    ttl: 86400,
    url: WEB_URL
  },
  twitter: {
    card: "summary",
    creatorId: TWT_CREATOR_ID,
    creator: FULL_NAME,
    description: TWT_DESCRIPTION,
    images:TWT_IMAGES,
    site: TWT_SITE,
    title: {
      absolute: TWT_TITLE_ABS,
      default: TWT_TITLE_DEF,
      template: TWT_TITLE_TEM
    },
    siteId: TWT_SITE_ID
  },
  appleWebApp: {
    capable: true,
    startupImage: START_UP_IMAGES,
    statusBarStyle: "black"
  },
  category: APP_CATEGORY,
  classification: APP_CLASSIFICATION,
  creator: APP_CREATOR,
  facebook: {
    appId: FACEBOOK_APP_ID
  },
  formatDetection: {
    address: true,
    date: true,
    email: true,
    telephone: false,
    url: true
  },
  generator: WEBSITE_GENERATOR,
  icons: ICONS,
  keywords: KEYWORDS,
  
  // other: OTHER,

  authors: [
    {
      name: FULL_NAME,
      url: WEB_URL
    }
  ],
  bookmarks: [
    WEB_URL,
  ],  
  manifest: MANIFEST_URL,
  archives: WEB_URL_ARCHIVES,
  assets: WEB_URL_ASSETS,
  publisher: PUBLISHER,
  referrer: REFERRER,
  robots: {
    "max-image-preview":"large",
    follow:true,
    googleBot:{
      follow:true,
      index:true,
      indexifembedded:true,
      "max-image-preview":"large",
      noarchive:false,
      nocache:false,
      nosnippet:false,
      notranslate:false,
      nositelinkssearchbox:false,
      noimageindex:false,
    },
    index:true,
    indexifembedded:true,
    noarchive:true,
    nocache:false,
    noimageindex:false,
    nositelinkssearchbox:false,
    nosnippet:false,
    notranslate:false
  },

  // appLinks
  // verification: {
  //   // google: GOOGLE_VERIFICATION, # you might need this, i used cloudflare to verify
  // }  
  // abstract,
  // metadataBase:
};

export const LINK_TAGS: LinkTagType[] = [];
export const META_TAGS: MetaTagType[] = [];

export const JSON_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: JSONLD_TITLE,
  url: WEB_URL,
  // image: JSONLD_IMAGE,
  description: JSONLD_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    email: GMAIL_ADDRESS
  }
};

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    link: MY_GITHUB_LINK,
    name: "github"
  },
  {
    link: MAIL_TO_GMAIL_LINK,
    name: "google"
  },
  {
    link: MY_LINKEDIN_LINK,
    name: "linkedin"
  }
];

// APP FOOTER
export const FOOTER_TEXT = `© ${YEAR} ${FULL_NAME}. All rights reserved.`;

// APP HEADER
export const LOGO_ALT: string = "logo";
export const LOGO_TEXT: string = `${FULL_NAME}`;
export const LOGO_IMAGE = `${ASSET_PREFIX}${PREFIX_STATIC}${PREFIX_IMAGES}/logo.png`; //LOGO_PNG ;
export const MENU_ITEMS: MenuItem[] = [
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" }
];

// PROJECTS
export const PROJECTS: ProjectItem[] = [
  {
    title: "This Website Page",
    description: "fully equiped, automated, nextjs static built website deployed with github pages",
    link: "https://github.com/cohenyuval315/cohenyuval315.github.io",
    demoLink: "https://cohenyuval315.github.io"
  },
  {
    title: "PyMicroservicesBase",
    description: "python generic micro services",
    link: "https://github.com/cohenyuval315/PyMicroservicesBase"
  }
];

// HERO
export const HERO_IMAGE = `${ASSET_PREFIX}${PREFIX_STATIC}${PREFIX_IMAGES}/hero.jpg`;

export const HERO_IMAGE_ALT = "hero";
export const HERO_TEXT = `Hi I'm ${FULL_NAME}`;
export const HERO_DESCRIPTION = "Software Engineer";

// ABOUT
export const ABOUT_TITLE = "About Me";
export const ABOUT_TEXT = `
    I’m a software engineer specializing in web development, python, and software design. I enjoy solving problems, learning new technologies, networking and connecting to others! .
`;

// CONTACT
export const CONTACT_TITLE = "CONTACT ME";
export const CONTACT_DESCRIPTION = `
    I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out via email.
    You can also connect with me on GitHub and LinkedIn, or use the form below to send a message.
    Let’s talk!
`;

