export default function NoScript({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <noscript>
      {children}
    </noscript>
  );
}
