import { LinkTagType } from "@/types/types";

export default function LinksTags({
  linkTags = []
}: {
  linkTags: LinkTagType[] | null | undefined;
}) {
  if (!linkTags) {
    return null;
  }
  return (
    <>
      {linkTags.map((link, index) => (
        <link
          key={`link-tag-${index}`}
          {...link}
        />
      ))}
    </>
  );
}
