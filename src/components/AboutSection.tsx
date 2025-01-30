import Motion from "@Motion";
export default function AboutSection({
  title = "About",
  text,
  children
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gray-700"
    >
      <Motion
        type="h2"
        className="text-3xl font-extrabold mb-6 text-center text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {title}
      </Motion>
      <Motion
        type="p"
        className="text-lg max-w-3xl mx-auto text-center text-gray-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {text}
      </Motion>
      {children}
    </section>
  );
}
