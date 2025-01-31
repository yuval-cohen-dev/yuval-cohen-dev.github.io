import {
  GOOGLE_ANALYTICS_ID,
  JSON_LD_SCHEMA,
  LANGUAGE,
  LINK_TAGS,
  META_TAGS
} from "@constants";
import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import MetaTags from "@/components/MetaTags";
import LinksTags from "@/components/LinkTags";

export default function Document() {
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
          <LinksTags linkTags={LINK_TAGS}/>
          <MetaTags metaTags={META_TAGS}/>
          <JsonLd schema={JSON_LD_SCHEMA}/>
          <GoogleAnalytics id={GOOGLE_ANALYTICS_ID}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

