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
  VideoItem,
} from "./types/types";

import HERO_JPG from "../public/images/hero.jpg";
import LOGO_PNG from "../public/images/logo.png";


export const FIRST_NAME = "Yuval";
export const LAST_NAME = "Cohen";
export const FULL_NAME = "Yuval Cohen";
export const USERNAME = "cohenyuval315";
export const PORTFOLIO = "Portfolio";

export const GITHUB_LINK = `https://github.com/${USERNAME}`;
export const REPO = `${GITHUB_LINK}/${USERNAME}.github.io`;
export const LINKEDIN_LINK = "https://www.linkedin.com/in/yc315/";
export const GMAIL_LINK = `${USERNAME}@gmail.com"`
export const MAIL_TO_GMAIL_LINK = `mailto:${GMAIL_LINK}`;
export const DOMAIN = "yuval-cohen.com"
export const WEB_DOMAIN_URL = `https://${DOMAIN}`;

export const SITE_TITLE = ""
export const SITE_DESCRIPTION = "";

// Assets

export const IMAGES: Record<string, ImageItem> = {
  favicon: {
    url: "/favicon.ico",
    width: 48,
    height: 48,
    alt: "",
    type: "image/icon",
  },
  logo: {
    url: "/images/logo.png",
    width: 48,
    height: 48,
    alt: "portfolio logo",
    type: "image/png",
  },
  hero: {
    url: "/images/hero.jpg",
    width: 3000,
    height: 3000,
    alt: "hero background",
    type: "image/jpg",
  },
};

const heroImageItem: ImageItem = {
  url: "/images/hero.jpg",
  width: 3000,
  height: 3000,
  alt: "hero background",
  type: "image/jpg",
}

const logoImageItem: ImageItem = {
  url: "/images/logo.png",
  width: 48,
  height: 48,
  alt: "portfolio logo",
  type: "image/png",
}
const faviconImageItem: ImageItem = {
  url: "/favicon.ico",
  width: 48,
  height: 48,
  alt: "",
  type: "image/icon",
}


export const LANGUAGE = "en"
export const INTER = Inter({
  subsets: ["latin"],
  preload: true,
  display:"swap",
  variable: '--font-inter',
});

const ICONS = {
  icon: [
    { url: '/favicon.ico' },
    { url: '/icon.png', type: 'image/png' },
  ],
  apple: [
    { url: '/apple-icon.png' },
  ],
}

export const METADATA_TITLE: string = `${FULL_NAME}'s Portfolio`;
export const METADATA_DESCRIPTION: string = `${FULL_NAME} Portfolio`;

export const METADATA: Metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  //   assets: "https://yuval-cohen.com/images",
  openGraph:{
    type:"website",
  },
  twitter:{
    
  }
};



export const LINK_TAGS: LinkTagType[] = [

]
export const META_TAGS: MetaTagType[] = [
  //   {
  //     name: "description",
  //     content: "Your description here",
  //   },
  //   {
  //     name: "keywords",
  //     content: "Keyword1, Keyword2, Keyword3",
  //   },
  //   {
  //     name: "robots",
  //     content: "index, follow",
  //   },
  //   {
  //     property: "og:title",
  //     content: "Your Site Title",
  //   },
  //   {
  //     property: "og:description",
  //     content: "Your site description here",
  //   },
  //   {
  //     property: "og:image",
  //     content: "URL_to_image.jpg",
  //   },
  //   {
  //     name: "twitter:card",
  //     content: "summary_large_image",
  //   },
  //   {
  //     name: "twitter:title",
  //     content: "Your Site Title",
  //   },
  //   {
  //     name: "twitter:description",
  //     content: "Your description here",
  //   },
  //   {
  //     name: "twitter:image",
  //     content: "URL_to_image.jpg",
  //   },
];

export const GOOGLE_ANALYTICS_ID = "G-";
export const JSON_LD_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    url: WEB_DOMAIN_URL,
    image: WEB_DOMAIN_URL + logoImageItem.url,
    description: "Portfolio",
    contactPoint: {
      "@type": "ContactPoint",
      email:GMAIL_LINK,
    },
};



export const IMAGE_ITEMS: ImageItem[] = [
  heroImageItem,
  logoImageItem,
  faviconImageItem
];



export const AUDIO_ITEMS: AudioItem[] = [];
export const BOOK_ITEMS: BookItem[] = [];
export const VIDEO_ITEMS: VideoItem[] = [];
export const VIDEO_DATA_ITEMS: VideoData[] = [];

export const YEAR = new Date().getUTCFullYear();

export const OPEN_GRAPH_PROFILES: OpenGraphProfile = {
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  username: USERNAME,
};



export const LOGO_ALT: string = "logo";
export const LOGO_TEXT: string = `${FULL_NAME}`;

export const LOGO_IMAGE = "/images/logo.png"; //LOGO_PNG ;
export const HERO_IMAGE = "/images/hero.jpg"; // HERO_JPG;




export const MENU_ITEMS: MenuItem[] = [
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];
export const FOOTER_TEXT = `© ${YEAR} ${FULL_NAME}. All rights reserved.`;


export const HERO_DESCRIPTION = "Software Engineer";
export const HERO_TEXT = `Hi I'm ${FULL_NAME}`;
export const HERO_IMAGE_ALT = "hero";

export const ABOUT_TITLE = "About Me";
export const ABOUT_TEXT = `
    I’m a software engineer specializing in web development, python, and software design. I enjoy solving problems, learning new technologies, networking and connecting to others! .
`;

export const PROJECTS: ProjectItem[] = [
  {
      title: "PyMicroservicesBase",
      description: "",
      link: "https://github.com/cohenyuval315/PyMicroservicesBase",
  },
  {
      title: "This Page",
      description: "Simple Web Postfolio blasted with everything",
      link: "https://github.com/cohenyuval315/cohenyuval315.github.io",
      demoLink: "https://cohenyuval315.github.io",
  },
];

export const CONTACT_TITLE = "CONTACT ME";
export const CONTACT_DESCRIPTION = `
    I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out via email. 
    You can also connect with me on GitHub and LinkedIn, or use the form below to send a message. 
    Let’s talk!
`;

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    link: GITHUB_LINK,
    name: "github",
  },
  {
    link: MAIL_TO_GMAIL_LINK,
    name: "google",
  },
  {
    link: LINKEDIN_LINK,
    name: "linkedin",
  },
];

// <meta name="application-name" content="PWA App" />
// <meta name="apple-mobile-web-app-capable" content="yes" />
// <meta name="apple-mobile-web-app-status-bar-style" content="default" />
// <meta name="apple-mobile-web-app-title" content="PWA App" />
// <meta name="description" content="Best PWA App in the world" />
// <meta name="format-detection" content="telephone=no" />
// <meta name="mobile-web-app-capable" content="yes" />
// <meta name="msapplication-config" content="/icons/browserconfig.xml" />
// <meta name="msapplication-TileColor" content="#2B5797" />
// <meta name="msapplication-tap-highlight" content="no" />
// <meta name="theme-color" content="#000000" />

// <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
// <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
// <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
// <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

// <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
// <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
// <link rel="manifest" href="/manifest.json" />
// <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
// <link rel="shortcut icon" href="/favicon.ico" />
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

// <meta name="twitter:card" content="summary" />
// <meta name="twitter:url" content="https://yourdomain.com" />
// <meta name="twitter:title" content="PWA App" />
// <meta name="twitter:description" content="Best PWA App in the world" />
// <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
// <meta name="twitter:creator" content="@DavidWShadow" />
// <meta property="og:type" content="website" />
// <meta property="og:title" content="PWA App" />
// <meta property="og:description" content="Best PWA App in the world" />
// <meta property="og:site_name" content="PWA App" />
// <meta property="og:url" content="https://yourdomain.com" />
// <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />

// <!-- apple splash screen images -->
// <!--
// <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
// <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
// <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
// <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
// <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
// <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
// <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
// -->
