import { MetaTagType } from "@/types/types";

export default function MetaTags({ metaTags=[] }: { metaTags: MetaTagType[] | undefined | null }) {
    if (!metaTags){
        return null;
    }
    return (
      <>
        {metaTags.map((metaTag, index) => (
          <meta
            key={`meta-tag-${index}`}
            {...metaTag}
          />
        ))}
      </>
    );
  }
