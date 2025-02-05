import MetaTags from "@/components/MetaTags"
import { MetaTagType } from "@/types/types";

export const META_TAGS: MetaTagType[] = [
    
];

export default function META(){
    return (
        <MetaTags metaTags={META_TAGS} />
    )
}

