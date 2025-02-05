import JsonLd from "@/components/JsonLd";
import { GMAIL_ADDRESS, MY_OFFICIAL, SITE_DESCRIPTION, WEB_URL } from "@/lib/constants";

const jsonData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: MY_OFFICIAL,
  url: WEB_URL,
  // image: JSONLD_IMAGE,
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    email: GMAIL_ADDRESS
  }    
}

export default function JSONLD() {
  return (
    <JsonLd
      data={jsonData}
    />
  );
}
