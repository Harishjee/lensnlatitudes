import Image from "next/image";

interface PageHeroProps {
  /** Full path to image in /public */
  image: string;
  alt: string;
  /** Main page title shown on the image */
  title: string;
  /** Optional italic subtitle below the title */
  subtitle?: string;
  /**
   * Where the title sits on the image.
   * "right-center" = Squarespace default (Awards, Who's Behind the Lens, etc.)
   * "left-bottom"  = pages like Explore Jungles
   */
  titlePosition?: "right-center" | "left-bottom";
  /** Optional custom position for the image (e.g. "bottom", "center bottom") */
  imagePosition?: string;
}

/**
 * Reusable fixed-height hero for all inner pages.
 * Height matches the Squarespace original (~60vh, min 400px).
 * Title overlaps the image at the bottom edge so it bleeds into the next section.
 * NO dark overlay — the photo shows fully.
 */
export default function PageHero({
  image,
  alt,
  title,
  subtitle,
  titlePosition = "right-center",
  imagePosition = "center",
}: PageHeroProps) {
  const isRight = titlePosition === "right-center";

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(300px, 45vh, 520px)" }}>
      {/* Full-bleed image, cropped to fixed height */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: imagePosition }}
        priority
        sizes="100vw"
      />

      {/* Title — overlaps the image, positioned at right or left bottom */}
      <div
        className={`absolute z-10 ${
          isRight
            ? "right-8 sm:right-14 lg:right-20 bottom-8 sm:bottom-10 lg:bottom-12 text-right"
            : "left-6 sm:left-10 lg:left-16 bottom-10 text-left"
        }`}
      >
        <h1
          className="font-display text-white font-normal leading-none text-on-image"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 6.5rem)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-3 text-white/90 italic font-display text-on-image"
            style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
