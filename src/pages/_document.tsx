import { Html, Head, Main, NextScript } from "next/document";
import JSONLD from "@/app/json-ld";
import GA from "@/app/ga";
import LINK from "@/app/links";
import META from "@/app/metas";
import NOSCRIPT from "@/app/no-script";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head>
        <NOSCRIPT/>
        <LINK/>
        <META/>
        <JSONLD/>
        <GA/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
