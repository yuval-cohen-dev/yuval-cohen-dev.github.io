export default function JsonLd({
  schema
}: {
  schema: object | undefined | null;
}) {
  if (!schema) {
    return null;
  }
  return (
    <script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
