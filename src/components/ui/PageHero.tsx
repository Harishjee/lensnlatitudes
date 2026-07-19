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
  /**
   * How the image fills the hero.
   * "cover"   = full-bleed, cropped to a fixed height (default).
   * "contain" = show the full image uncropped on a plain background
   *             (for high-key / airy compositions like the elephant).
   */
  variant?: "cover" | "contain";
  /** Title colour — "light" for photos, "dark" for high-key white images */
  titleColor?: "light" | "dark";
}

/**
 * Reusable hero for all inner pages.
 * - cover:   fixed height (~45vh), image cropped, light title with shadow.
 * - contain: full uncropped image on white, title overlaps the bottom-left.
 * NO dark overlay — the photo always shows fully.
 */
export default function PageHero({
  image,
  alt,
  title,
  subtitle,
  titlePosition = "right-center",
  imagePosition = "center",
  variant = "cover",
  titleColor,
}: PageHeroProps) {
  const isRight = titlePosition === "right-center";
  const isDark = (titleColor ?? (variant === "contain" ? "dark" : "light")) === "dark";

  const titleWrap = `absolute z-10 ${
    isRight
      ? "right-8 sm:right-14 lg:right-20 bottom-8 sm:bottom-10 lg:bottom-12 text-right"
      : "left-6 sm:left-10 lg:left-16 bottom-8 sm:bottom-10 lg:bottom-12 text-left"
  }`;

  const titleClasses = `font-display font-normal leading-none ${
    isDark ? "text-gray-900" : "text-white text-on-image"
  }`;
  const subtitleClasses = `mt-3 italic font-display ${
    isDark ? "text-gray-800" : "text-white/90 text-on-image"
  }`;

  /* ── CONTAIN: high-key image on white, constrained to fit the viewport,
       title overlaps the bottom-left. Only the blank white margins are
       trimmed so the whole subject stays visible with the title. ── */
  if (variant === "contain") {
    return (
      <section
        className="relative w-full overflow-hidden bg-white"
        style={{ height: "clamp(420px, 74vh, 720px)" }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          priority
          sizes="100vw"
        />
        <div className={titleWrap}>
          <h1 className={titleClasses} style={{ fontSize: "clamp(2.4rem, 5vw, 5.5rem)" }}>
            {title}
          </h1>
          {subtitle && (
            <p className={subtitleClasses} style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)" }}>
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  /* ── COVER: full-bleed image cropped to a fixed height ── */
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(300px, 45vh, 520px)" }}>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: imagePosition }}
        priority
        sizes="100vw"
      />
      <div className={titleWrap}>
        <h1 className={titleClasses} style={{ fontSize: "clamp(2.8rem, 5vw, 6rem)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className={subtitleClasses} style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
