import Motion from "@Motion";
export default function AppHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Motion
      type="header"
      className="flex justify-between items-center px-8 py-6 bg-gray-800 sticky top-0 z-50 shadow-xl transition-all duration-300 ease-in-out"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        display: "block",
        wordWrap: "break-word",
      }}
    >
      {children}
    </Motion>
  );
}
