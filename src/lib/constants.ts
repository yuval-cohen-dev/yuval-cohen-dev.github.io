import { Metadata } from "next";
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

export const YEAR = new Date().getUTCFullYear();
export const LAST_MODIFIED = new Date();

export const FIRST_NAME = "Yuval";
export const LAST_NAME = "Cohen";
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const USERNAME = "cohenyuval315";
export const GMAIL_ADDRESS = `${USERNAME}@gmail.com"`;
export const GOOGLE_ANALYTICS_ID = "G-6XN8B6ZLMM";
export const FACEBOOK_APP_ID = "";

export const GITHUB_LINK = "https://github.com";
export const MY_GITHUB_LINK = `https://github.com/${USERNAME}`;
export const GITHUB_REPO = `${MY_GITHUB_LINK}.github.io`;
export const GITHUB_PAGE_LINK = `https://${USERNAME}.github.io`;
export const MY_LINKEDIN_LINK = "https://www.linkedin.com/in/yc315/";

export const FORM_ID = "xgvoyale";
export const MAIL_TO_GMAIL_LINK = `mailto:${GMAIL_ADDRESS}`;

export const DOMAIN = "yuval-cohen.com";
export const WWW_DOMAIN = `www.${DOMAIN}`;

export const WEB_WWW_DOMAIN_URL = `https://${WWW_DOMAIN}`;
export const WEB_DOMAIN_URL = `https://${DOMAIN}`;

export const IS_WWW_CANONICAL = true;
export const WEB_URL = IS_WWW_CANONICAL ? WEB_WWW_DOMAIN_URL : WEB_DOMAIN_URL;

export const TWT_CREATOR_ID = "";
export const WEB_URL_LANGUAGES = {
  languages: {
    en: WEB_URL
  }
};
export const APP_CATEGORY = "";
export const APP_CLASSIFICATION = "";
export const APP_CREATOR = "";

export const REFERRER:
  | "no-referrer"
  | "origin"
  | "no-referrer-when-downgrade"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin" = "origin";
export const SITE_FULL_NAME = "";
export const SITE_SHORT_NAME = "";
export const SITE_DESCRIPTION = "";

export const MANIFEST_FULL_NAME = "";
export const MANIFEST_SHORT_NAME = "";
export const MANIFEST_DESCRIPTION = "";
export const MANIFEST_CATEGORIES = [];

export const LANGUAGE = "en";

export const PORTFOLIO = "Portfolio";

export const METADATA_TITLE: string = `${FULL_NAME}'s Portfolio`;
export const METADATA_DESCRIPTION: string = `${FULL_NAME} Portfolio`;
export const JSONLD_TITLE: string = `${FULL_NAME}'s Portfolio`;
export const JSONLD_DESCRIPTION: string = `${FULL_NAME} Portfolio`;
export const OG_TITLE = "";
export const OG_DESCRIPTION = "";

export const CHANGE_FREQUENCY:
  | "daily"
  | "never"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | undefined = "daily";
export const PRIORITY: number | undefined = 0.7;
export const SITEMAP_SIZE = 5000;

const COUNTRY_NAME = "Israel";
const COUNTRY_LANG = "he";

export const WEB_URL_ARCHIVES = `${WEB_URL}/archives`;
export const WEB_URL_ASSETS = `${WEB_URL}/assets`;
export const WEB_URL_STATIC = `${WEB_URL}/archives`;
export const MANIFEST_URL = `${WEB_URL}/manifest.json`;
export const KEYWORDS = [];

export const MANIFEST_DISPLAY = "browser";

export const OG_SITE_NAME = "";
export const OG_TTL = 60000;

export const APP_NAME = "";
export const GOOGLE_VERIFICATION = "1234567890";
export const YANDEX_VERIFICATION = "1234567890";
export const ME_VERIFICATION = "1234567890";
export const YAHOO_VERIFICATION = "1234567890";

export const TWT_DESCRIPTION = "";
export const TWT_SITE = "";
export const TWT_TITLE_ABS = "";
export const TWT_TITLE_DEF = "";
export const TWT_TITLE_TEM = "";
export const TWT_SITE_ID = "";

export const PUBLISHER = "Github";
export const ITUNES_APP_ID = "";
export const ITUNES_APP_ARG = "";
export const WEBSITE_GENERATOR = "Next.js";

export const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";
// export const ASSET_PREFIX = WEB_URL
// export const ASSET_PREFIX = ""

//  || "";

export const PREFIX_STATIC = "/static";
export const PREFIX_IMAGES = "/images";
// export const PREFIX_STATIC = ""
// export const PREFIX_IMAGES = ""

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

export const ICONS = [];

// ALL ICONS ARE IMAGES
export const IMAGES = [...ICONS];

export const AUDIOS: AudioItem[] = [];
export const VIDEOS: VideoData[] = [];
export const SITEMAP_VIDEOS: Videos[] = [];

export const BOOK_ITEMS: BookItem[] = [];
export const VIDEOS_ITEMS: VideoItem[] = [];

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

export const ASSETS = [];

export const JSONLD_IMAGE = normalizeImage(IMAGES_OBJ.hero.url);

export const OG_IMAGES = [];
export const OG_VIDEOS = [];
export const START_UP_IMAGES = []; // normalizeImage(IMAGES_OBJ.hero.url);
export const MANIFEST_SCREENSHOTS = [];

export const MANIFEST: Manifest = {
  id: "/",
  name: MANIFEST_FULL_NAME,
  short_name: MANIFEST_SHORT_NAME,
  description: MANIFEST_DESCRIPTION,
  start_url: "/",
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
  file_handlers: [
    {
      action: "**/*",
      accept: {
        "*/*": []
      }
    }
  ],
  launch_handler: {
    client_mode: "auto"
  },
  prefer_related_applications: false,
  protocol_handlers: [],
  related_applications: [
    // {
    // "platform": "ios",
    // "url": "https://apps.apple.com/app/id123456789",
    // "id": "com.example.app"
    // }
  ],
  // scope:"/app",
  screenshots: MANIFEST_SCREENSHOTS
  // share_target:{
  //   action: "/share",
  //   method: "POST",
  //   enctype: "multipart/form-data",
  //   params: {
  //     title: "name",
  //     text: "description"
  //   }
  // },
  // shortcuts: [
  //   {
  //     name: "About",
  //     short_name: "About",
  //     url: "/about",
  //     icons: ICONS
  //   }
  // ]
};

export const SITEMAP_FILE: SitemapFile = [
  {
    url: WEB_URL,
    lastModified: LAST_MODIFIED,
    changeFrequency: CHANGE_FREQUENCY,
    priority: PRIORITY,
    alternates: WEB_URL_LANGUAGES
    // videos:SITEMAP_VIDEOS,
    // images:IMAGE_ITEMS.filter((image=> image.url)).map((image) => image.url), // error: list of strings
  }
];

export const ROBOTS: RobotsFile = {
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

export const METADATA: Metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  alternates: {
    canonical: WEB_URL
    // languages:WEB_URL_LANGUAGES,
    // media,
    // types
  },
  openGraph: {
    type: "website",
    alternateLocale: [],
    audio: AUDIOS,
    locale: COUNTRY_LANG,
    countryName: COUNTRY_NAME,
    description: OG_DESCRIPTION,
    determiner: "auto",
    emails: [GMAIL_ADDRESS],
    faxNumbers: [],
    // images:OG_IMAGES,
    phoneNumbers: [],
    // siteName:OG_SITE_NAME,
    // title:OG_TITLE,
    // ttl:OG_TTL,
    url: WEB_URL
    // videos: OG_VIDEOS
  },
  twitter: {
    card: "summary",
    creatorId: TWT_CREATOR_ID,
    // players:[],

    creator: FULL_NAME,
    description: TWT_DESCRIPTION,
    // images:IMAGES,
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
  applicationName: APP_NAME,
  appLinks: {
    android: [],
    ios: [],
    ipad: [],
    iphone: [],
    web: [],
    windows: [],
    windows_phone: [],
    windows_universal: []
  },
  archives: [WEB_URL_ARCHIVES],
  assets: [WEB_URL_ASSETS],
  authors: [
    {
      name: FULL_NAME,
      url: WEB_URL
    }
  ],
  bookmarks: [],
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
  itunes: {
    appId: ITUNES_APP_ID,
    appArgument: ITUNES_APP_ARG
  },
  keywords: KEYWORDS,
  manifest: MANIFEST_URL,
  other: {},

  publisher: PUBLISHER,
  referrer: REFERRER,
  robots: {
    follow: true,
    index: true
  },
  verification: {
    google: GOOGLE_VERIFICATION,
    yandex: YANDEX_VERIFICATION,
    me: ME_VERIFICATION,
    yahoo: YAHOO_VERIFICATION,
    other: {}
  }
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
    description: "Static build serving blasted with ",
    link: "https://github.com/cohenyuval315/cohenyuval315.github.io",
    demoLink: "https://cohenyuval315.github.io"
  },
  {
    title: "PyMicroservicesBase",
    description: "",
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
