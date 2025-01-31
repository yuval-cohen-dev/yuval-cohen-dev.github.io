import Motion from "@Motion";
import Image from "next/image";

export default function Hero({
  backgroundImage,
  text,
  description,
  children,
  alt
}: {
  backgroundImage: any;
  text: string;
  description: string;
  children: React.ReactNode;
  alt: string;
}) {
  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={alt}
          fill={true}
          style={{
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1
        }}
      >
        <Motion
          type="section"
          className="h-screen flex flex-col justify-center items-center text-center px-8 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div
            style={{
              userSelect: "none",
              pointerEvents: "none"
            }}
          >
            <Motion
              type="h1"
              className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              initial={{ x: -100, opacity: 0 }} // Starts from left
              animate={{ x: 0, opacity: 1 }} // Slide in from left to right
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {text}
            </Motion>

            <Motion
              type="p"
              className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300"
              initial={{ y: 50, opacity: 0 }} // Starts from below
              animate={{ y: 0, opacity: 1 }} // Slide up to its final position
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {description}
            </Motion>
          </div>
          <Motion
            className="mt-6"
            initial={{ y: 50, opacity: 0 }} // Starts from below
            animate={{ y: 0, opacity: 1 }} // Slide up to its final position
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {children}
          </Motion>
        </Motion>
      </div>
    </div>
  );
}
