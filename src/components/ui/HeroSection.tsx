import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  height?: "full" | "large" | "medium";
  overlay?: "dark" | "medium" | "light";
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "large",
  overlay = "dark",
  children,
}: HeroSectionProps) {
  const heightClass = {
    full: "h-screen",
    large: "h-[70vh] min-h-[500px]",
    medium: "h-[50vh] min-h-[380px]",
  }[height];

  const overlayClass = {
    dark: "bg-black/60",
    medium: "bg-black/40",
    light: "bg-black/25",
  }[overlay];

  return (
    <section className={`relative ${heightClass} flex items-end pb-12 overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        title={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-gray-200 text-lg sm:text-xl max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
