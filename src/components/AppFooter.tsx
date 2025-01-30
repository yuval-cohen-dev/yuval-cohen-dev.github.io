export default function AppFooter({ text }: { text: string }) {
  return (
    <footer className="py-4 bg-gray-800 text-center">
      <p className="text-gray-400">{text}</p>
    </footer>
  );
}
