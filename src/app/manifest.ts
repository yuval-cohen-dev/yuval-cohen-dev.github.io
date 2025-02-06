import { FULL_NAME, MY_OFFICIAL, SITE_DESCRIPTION } from "@constants";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return  {
    id: "/",
    scope:"/",
    name: MY_OFFICIAL,
    short_name: `${FULL_NAME} Official`,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        "src": "/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      }      
    ],
    lang: "en",
    theme_color: "#000000",
    background_color: "#000000",
    categories: [
      "portfolio",
      "website",
      "yuval",
      "cohen",
      "yuval cohen",
      "technology",
      "security",
      "software",
      "engineering",
      "development",
      "computers",
      "programming",
      "social",
      "productivity",
      "news",
      "articles",
      "education",
      "learning"
    ],
    dir: "ltr",
    display_override: [
      "standalone",
      "fullscreen",
      "minimal-ui",    
      "browser",
      "window-controls-overlay"
    ],
    launch_handler: {
      client_mode: "auto"
    },
    
    screenshots: [
      {
        src: "/web-app-manifest-512x512.png",
        form_factor:"wide",
        label:"logo",
        platform:"android",
        sizes:"512x512",
        type:"image/png"
      },
      {
        src: "/web-app-manifest-512x512.png",
        form_factor:"narrow",
        label:"logo",
        platform:"android",
        sizes:"512x512",
        type:"image/png"
      } ,
      {
        src: "/web-app-manifest-512x512.png",
        form_factor:"wide",
        label:"logo",
        platform:"ios",
        sizes:"512x512",
        type:"image/png"
      },
      {
        src: "/web-app-manifest-512x512.png",
        form_factor:"narrow",
        label:"logo",
        platform:"ios",
        sizes:"512x512",
        type:"image/png"
      },
      {
        src: "/web-app-manifest-512x512.png",
        form_factor:"wide",
        label:"logo",
        platform:"windows",
        sizes:"512x512",
        type:"image/png"
      },
      {
        src: "/web-app-manifest-512x512.png",
        form_factor:"narrow",
        label:"logo",
        platform:"windows",
        sizes:"512x512",
        type:"image/png"
      }                                  
    ]
  };
  
}
