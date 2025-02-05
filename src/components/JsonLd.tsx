import Script from "next/script";

export default function JsonLd({data} : {data: object}) {
  if (!data) {
    return null;
  }
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />    
  );
}
