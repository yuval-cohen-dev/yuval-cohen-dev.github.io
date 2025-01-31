import { SocialLinkItem } from "@/types/types";
import SocialLink from "./SocialLink";

export default function SocialLinks({
  socialLinks
}: {
  socialLinks: SocialLinkItem[];
}) {
  return (
    <div className="flex justify-center mt-10 flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
      {socialLinks.map((socialLinkItem, index) => (
        <div
          key={`social_link_${index}`}
          className="px-8 py-4 rounded-full flex items-center justify-center transform hover:scale-105 transition duration-300"
        >
          <SocialLink socialLinkItem={socialLinkItem} />
        </div>
      ))}
    </div>
  );
}
