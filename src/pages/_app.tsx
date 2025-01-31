import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />;
  <GoogleAnalytics />
  </>
}
