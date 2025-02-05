import type { Metadata } from "next";
import "../styles/globals.css";
import { Suspense } from "react";
import ProgressBar from "@/components/progressbar/ProgressBar";
import AppFooter from "@/components/AppFooter";
import LogoWithName from "@/components/header/LogoWithName";

import {
  ASSETS_URL,
  COUNTRY_NAME,
  FOOTER_TEXT,
  FULL_NAME,
  GMAIL_ADDRESS,
  LOGO_ALT,
  LOGO_IMAGE,
  LOGO_TEXT,
  MENU_ITEMS,
  MY_OFFICIAL,
  SITE_DESCRIPTION,
  TWT_CREATOR_ID,
  TWT_SITE,
  WEB_URL,
  WEB_URL_LANGUAGES,
} from "@constants";
import AppHeader from "@/components/header/AppHeader";
import NavigationBar from "@/components/header/NavigationBar";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-inter"
});



export const metadata: Metadata = {
  metadataBase:new URL(WEB_URL),
  applicationName: MY_OFFICIAL,
  title: MY_OFFICIAL,
  description: `${FULL_NAME} Software Engineer Official Website`,
  alternates: {
    canonical: WEB_URL,
    languages: WEB_URL_LANGUAGES.languages,
    // media,
    // types
  },
  openGraph: {
    type: "website",
    alternateLocale: ["en_US"],
    audio: [],
    locale: "en_US",
    countryName: COUNTRY_NAME,
    description: SITE_DESCRIPTION,
    determiner: "auto",
    emails: [GMAIL_ADDRESS],
    images:[],
    videos:[],
    phoneNumbers:[],
    faxNumbers:[],
    siteName:MY_OFFICIAL,
    title:MY_OFFICIAL,
    ttl: 86400,
    url: WEB_URL
  },
  twitter: {
    card: "summary",
    creatorId: TWT_CREATOR_ID,
    creator: FULL_NAME,
    description: SITE_DESCRIPTION,
    images:[],
    site: TWT_SITE,
    title: {
      absolute: MY_OFFICIAL,
      default: MY_OFFICIAL,
      template: `${FULL_NAME} – {title}`
    },
    // siteId: null
  },
  appleWebApp: {
    title:MY_OFFICIAL,
    capable: true,
    statusBarStyle: "black",
    startupImage: [
      // iPad 10.2"
      { "url": "/10.2__iPad_landscape.png", "media": "(device-width: 1366px) and (device-height: 1024px)" },
      { "url": "/10.2__iPad_portrait.png", "media": "(device-width: 1024px) and (device-height: 1366px)" },

      // iPad Air 10.5"
      { "url": "/10.5__iPad_Air_landscape.png", "media": "(device-width: 1668px) and (device-height: 2224px)" },
      { "url": "/10.5__iPad_Air_portrait.png", "media": "(device-width: 2224px) and (device-height: 1668px)" },

      // iPad Air 10.9"
      { "url": "/10.9__iPad_Air_landscape.png", "media": "(device-width: 1640px) and (device-height: 2360px)" },
      { "url": "/10.9__iPad_Air_portrait.png", "media": "(device-width: 2360px) and (device-height: 1640px)" },

      // iPad Pro 10.5"
      { "url": "/11__iPad_Pro__10.5__iPad_Pro_landscape.png", "media": "(device-width: 1668px) and (device-height: 2224px)" },
      { "url": "/11__iPad_Pro__10.5__iPad_Pro_portrait.png", "media": "(device-width: 2224px) and (device-height: 1668px)" },

      // iPad Pro M4 (11-inch)
      { "url": "/11__iPad_Pro_M4_landscape.png", "media": "(device-width: 2388px) and (device-height: 1668px)" },
      { "url": "/11__iPad_Pro_M4_portrait.png", "media": "(device-width: 1668px) and (device-height: 2388px)" },

      // iPad Pro 12.9"
      { "url": "/12.9__iPad_Pro_landscape.png", "media": "(device-width: 2732px) and (device-height: 2048px)" },
      { "url": "/12.9__iPad_Pro_portrait.png", "media": "(device-width: 2048px) and (device-height: 2732px)" },

      // iPad Pro M4 (13-inch)
      { "url": "/13__iPad_Pro_M4_landscape.png", "media": "(device-width: 2732px) and (device-height: 2048px)" },
      { "url": "/13__iPad_Pro_M4_portrait.png", "media": "(device-width: 2048px) and (device-height: 2732px)" },

      // iPhone SE / iPod touch (5th gen and later)
      { "url": "/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png", "media": "(device-width: 1136px) and (device-height: 640px)" },
      { "url": "/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png", "media": "(device-width: 640px) and (device-height: 1136px)" },

      // iPad Mini (8.3")
      { "url": "/8.3__iPad_Mini_landscape.png", "media": "(device-width: 1792px) and (device-height: 1344px)" },
      { "url": "/8.3__iPad_Mini_portrait.png", "media": "(device-width: 1344px) and (device-height: 1792px)" },

      // iPad 9.7" (iPad Pro, Mini, Air)
      { "url": "/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png", "media": "(device-width: 1024px) and (device-height: 768px)" },
      { "url": "/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png", "media": "(device-width: 768px) and (device-height: 1024px)" },

      // iPhone 11 / iPhone XR
      { "url": "/iPhone_11__iPhone_XR_landscape.png", "media": "(device-width: 1792px) and (device-height: 828px)" },
      { "url": "/iPhone_11__iPhone_XR_portrait.png", "media": "(device-width: 828px) and (device-height: 1792px)" },

      // iPhone XS Max / 11 Pro Max
      { "url": "/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png", "media": "(device-width: 2688px) and (device-height: 1242px)" },
      { "url": "/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png", "media": "(device-width: 1242px) and (device-height: 2688px)" },

      // iPhone 12, 13, XS, X (portrait & landscape)
      { "url": "/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png", "media": "(device-width: 2532px) and (device-height: 1170px)" },
      { "url": "/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png", "media": "(device-width: 1170px) and (device-height: 2532px)" },

      // iPhone 14 series (portrait & landscape)
      { "url": "/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png", "media": "(device-width: 2532px) and (device-height: 1170px)" },
      { "url": "/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png", "media": "(device-width: 1170px) and (device-height: 2532px)" },

      // iPhone 14 Plus series
      { "url": "/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png", "media": "(device-width: 2796px) and (device-height: 1284px)" },
      { "url": "/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png", "media": "(device-width: 1284px) and (device-height: 2796px)" },

      // iPhone 15 series (portrait & landscape)
      { "url": "/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png", "media": "(device-width: 2796px) and (device-height: 1290px)" },
      { "url": "/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png", "media": "(device-width: 1290px) and (device-height: 2796px)" },

      // iPhone 16 Pro Max / 15 Pro Max
      { "url": "/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png", "media": "(device-width: 3100px) and (device-height: 1440px)" },
      { "url": "/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png", "media": "(device-width: 1440px) and (device-height: 3100px)" },

      // iPhone 16 Pro & Pro Max (portrait & landscape)
      { "url": "/iPhone_16_Pro_landscape.png", "media": "(device-width: 3200px) and (device-height: 1440px)" },
      { "url": "/iPhone_16_Pro_Max_landscape.png", "media": "(device-width: 3200px) and (device-height: 1440px)" },
      { "url": "/iPhone_16_Pro_Max_portrait.png", "media": "(device-width: 1440px) and (device-height: 3200px)" },
      { "url": "/iPhone_16_Pro_portrait.png", "media": "(device-width: 1440px) and (device-height: 3200px)" },

      // iPhone 8, 7, 6s, 6 (portrait & landscape)
      { "url": "/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png", "media": "(device-width: 1334px) and (device-height: 750px)" },
      { "url": "/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png", "media": "(device-width: 750px) and (device-height: 1334px)" },

      // iPhone 8 Plus, 7 Plus (portrait & landscape)
      { "url": "/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png", "media": "(device-width: 1920px) and (device-height: 1080px)" },
      { "url": "/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png", "media": "(device-width: 1080px) and (device-height: 1920px)" }
  ]
  },

  icons: [
    // Favicon for general purposes
    { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png", url: "/favicon-96x96.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png", url: "/favicon-16x16.png" },
    
    // A generic favicon (for legacy browsers or any-size favicons)
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "any", url: "/favicon.ico" },
  
    // Additional icon for specific use cases
    { rel: "icon", type: "image/png", sizes: "48x48", href: "/icon.png", url: "/icon.png" },
  
    // Apple Touch Icons (for iOS devices and homescreen icons)
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png", url: "/apple-touch-icon.png" },
    { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-touch-icon-57x57.png", url: "/apple-touch-icon-57x57.png" },
    { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-touch-icon-72x72.png", url: "/apple-touch-icon-72x72.png" },
    { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-touch-icon-76x76.png", url: "/apple-touch-icon-76x76.png" },
    { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-touch-icon-114x114.png", url: "/apple-touch-icon-114x114.png" },
    { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120.png", url: "/apple-touch-icon-120x120.png" },
    { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon-144x144.png", url: "/apple-touch-icon-144x144.png" },
    { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152.png", url: "/apple-touch-icon-152x152.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180.png", url: "/apple-touch-icon-180x180.png" }
  ],
  category: "Official Website, Personal Brand, Digital Hub",
  classification: "Technology, Web Development, Software, Developer, Blog, Personal Website, Portfolio",
  creator: FULL_NAME,
  // facebook: {
  //   appId: FACEBOOK_APP_ID
  // },
  manifest: `${WEB_URL}/manifest.webmanifest`,
  keywords: ["Yuval Cohen", "Official Website", "Portfolio", "Web Development", "Tech Blog", "Personal Brand", "Digital Hub", "Software Engineer"],
  authors: [
    {
      name: FULL_NAME,
      url: WEB_URL
    }
  ],
  bookmarks: [
    WEB_URL,
  ],  
  
  // archives: WEB_URL_ARCHIVES,
  formatDetection: {
    address: true,
    date: true,
    email: true,
    telephone: false,
    url: true
  },
  generator: MY_OFFICIAL,  
  assets: ASSETS_URL,
  publisher: FULL_NAME,
  referrer: "no-referrer-when-downgrade",
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
  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col bg-gray-900 text-white font-sans">
          <AppHeader>
            <div className="flex items-center justify-between ">
              <LogoWithName
                alt={LOGO_ALT}
                name={LOGO_TEXT}
                src={LOGO_IMAGE}
              />

              <NavigationBar menuItems={MENU_ITEMS} />
              <ProgressBar />
            </div>
          </AppHeader>
          <main className="flex-1 flex flex-col">
            <Suspense>{children}</Suspense>
          </main>
          <AppFooter text={FOOTER_TEXT} />
        </div>
      </body>
    </html>
  );
}
