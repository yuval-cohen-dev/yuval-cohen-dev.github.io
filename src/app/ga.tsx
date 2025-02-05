import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GOOGLE_ANALYTICS_ID } from "@/lib/constants";

export default function GA() {
  return (
    <GoogleAnalytics
      id={GOOGLE_ANALYTICS_ID}
    />
  );
}
