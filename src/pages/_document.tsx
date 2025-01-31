import {
  GOOGLE_ANALYTICS_ID,
  JSON_LD_SCHEMA,
  LANGUAGE,
  LINK_TAGS,
  META_TAGS
} from "@constants";
import { LinkTagType, MetaTagType } from "@/types/types";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function generateMetaTags({ metaTags }: { metaTags: MetaTagType[] }) {
  return (
    <>
      {metaTags.map((metaTag, index) => (
        <meta
          key={`meta_tag_${index}`}
          {...metaTag}
        />
      ))}
    </>
  );
}

function generateLinksTags({ linkTags }: { linkTags: LinkTagType[] }) {
  return (
    <>
      {linkTags.map((link, index) => (
        <link
          key={`link_tag_${index}`}
          {...link}
        />
      ))}
    </>
  );
}

export default function Document() {
  const metaTags = generateMetaTags({ metaTags: META_TAGS });
  const linkTags = generateLinksTags({ linkTags: LINK_TAGS });
  return (
    <Html lang={LANGUAGE}>
      <Head>
        <noscript>
          <meta
            http-equiv="refresh"
            content="0;url=/no-javascript"
          />
        </noscript>
        <noscript>
          <p>
            Your browser does not support JavaScript or it is disabled. Some
            features of this website may not work properly without JavaScript
            enabled.
          </p>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
        {metaTags}
        {linkTags}

          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6XN8B6ZLMM"></Script>
          <Script
            id="google-analytics"
            // async
            // strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6XN8B6ZLMM');`
            }}
          />          
          <Script>

          </Script>        
        {/* <Script
          async
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          
        /> */}
        {/* <Script
          id="google-analytics"
          async
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                          page_path: window.location.pathname,
                      });
                  `
          }}
          /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on("SIGTERM", () => {
    console.log("Received SIGTERM: cleaning up");
    process.exit(0);
  });
  process.on("SIGINT", () => {
    console.log("Received SIGINT: cleaning up");
    process.exit(0);
  });
}
