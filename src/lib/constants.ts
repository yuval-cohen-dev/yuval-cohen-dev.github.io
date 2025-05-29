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
// export const MANIFEST_FILEANAME = "manifest.webmanifest";



// Example Usage

// const ASSETS = getAssets(path.join(process.cwd(), "public"));

// console.log("Images:", ASSETS.images);
// console.log("Audio:", ASSETS.audio);
// console.log("Videos:", ASSETS.videos);
// console.log("Icons:", ASSETS.icons);


export const FIRST_NAME = "Yuval";
export const LAST_NAME = "Cohen";
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const USERNAME = "cohenyuval315";
export const WEB_USERNAME = "yuval-cohen-dev"
export const GMAIL_ADDRESS = `${USERNAME}@gmail.com"`;
export const MAIL_TO_GMAIL_LINK = `mailto:${GMAIL_ADDRESS}`;
export const GOOGLE_ANALYTICS_ID = "G-6XN8B6ZLMM";
export const FORM_ID = "xgvoyale";
// export const FACEBOOK_APP_ID = "";
export const COUNTRY_NAME = "Israel";
export const COUNTRY_LANG = "he";

export const GITHUB_LINK = "https://github.com";
export const MY_GITHUB_LINK = `https://github.com/${WEB_USERNAME}/`;
export const GITHUB_REPO = `${MY_GITHUB_LINK}.github.io`;
export const GITHUB_PAGE_LINK = `https://${WEB_USERNAME}.github.io`;
export const MY_LINKEDIN_LINK = `https://www.linkedin.com/in/${WEB_USERNAME}/"`


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

export const OFFICAL = "Official Website";
export const PORTFOLIO = "Portfolio";
export const MY_OFFICIAL = `${FULL_NAME}'s ${OFFICAL}`;
export const MY_OFFICIAL_LOWER = `${FULL_NAME}'s ${OFFICAL.toLowerCase()}`;
export const MY_OFFICIAL_WITH_EXTRA = `${MY_OFFICIAL}`;
export const TWT_CREATOR_ID = "@yuval_cohen_dev";

export const SITE_FULL_NAME = MY_OFFICIAL;
export const SITE_SHORT_NAME = MY_OFFICIAL;
export const SITE_DESCRIPTION = `${FULL_NAME} – Official Website of ${FULL_NAME}, a Software Engineer and Digital Expert. Explore ${FULL_NAME}'s Digital Footprint, including software development projects, engineering expertise, and innovative digital solutions.`;


export const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const PREFIX_STATIC = "/static";
export const PREFIX_IMAGES = "/images";

export const ASSETS_URL = `${WEB_URL}${PREFIX_STATIC}`
export const IMAGES_URL = `${ASSETS_URL}${PREFIX_IMAGES}`


export const TWT_SITE = "@yuval-cohen-official";




// ----------------- ASSETS ---------------------



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
export const LOGO_IMAGE = `${IMAGES_URL}/logo.png`; //LOGO_PNG ;
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
  // {
  //   title: "PyMicroservicesBase",
  //   description: "python generic micro services",
  //   link: "https://github.com/cohenyuval315/PyMicroservicesBase"
  // }
];

// HERO
export const HERO_IMAGE = `${IMAGES_URL}/hero.jpg`;

export const HERO_IMAGE_ALT = "Yuval Cohne's Hero";
export const HERO_TEXT = `Hi I'm ${FULL_NAME}`;
export const HERO_DESCRIPTION = "Software Engineer";

// ABOUT
export const ABOUT_TITLE = "About Me";
export const ABOUT_TEXT = `
    I’m Yuval Cohen a Software Engineer. I enjoy solving problems, learning new technologies, networking and connecting to others! .
`;

// CONTACT
export const CONTACT_TITLE = "CONTACT ME";
export const CONTACT_DESCRIPTION = `
    I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out via email.
    You can also connect with me on GitHub and LinkedIn, or use the form below to send a message.
    Let’s talk!
`;

