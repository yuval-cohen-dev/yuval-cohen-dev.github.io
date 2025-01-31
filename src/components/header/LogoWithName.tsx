import Image from "next/image";

interface LogoWithNameProps {
  src: any;
  alt: string;
  name: string;
  width?: number;
  height?: number;
}

const LogoWithName: React.FC<LogoWithNameProps> = ({
  width = 40,
  height = 40,
  name = "",
  src,
  alt
}) => {
  return (
    <div className="flex items-center sm:w-auto w-full justify-center sm:justify-start">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          
        }}
      />
      {/* text-2xl font-extrabold text-white */}
      <span className="ml-2 text-lg md:text-xl font-bold" >{name}</span>
    </div>
  );
};

export default LogoWithName;
