import { SITE, CONTACT, TESTIMONIALS } from "./constants";

/* Canonical @id references — one entity, linked everywhere (fixes fragmentation). */
export const ORG_ID = `${SITE.url}/#organization`;
export const SALIL_ID = `${SITE.url}/#salil`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "3rd floor, 115, above union bank, Arcot Road",
  addressLocality: "Alwarthirunagar, Chennai",
  addressRegion: "Tamil Nadu",
  postalCode: "600087",
  addressCountry: "IN",
};

const salilAwards = [
  "Nature in Focus Winner 2019",
  "Canon All India Live Competition Winner 2019",
  "Sony All India Live Competition Winner 2025",
  "FIP Gold for Nature 2022",
  "FIP Bronze for Nature 2023",
  "Wildlife Association of India, 6 Gold Medals",
];

/* Single source of truth for the Salil Nair person entity. */
export const salilPerson = {
  "@type": "Person",
  "@id": SALIL_ID,
  name: "Salil Nair",
  jobTitle: "Wildlife Photographer & Safari Guide",
  description:
    "Founder of Lens N Latitudes, award-winning wildlife photographer crafting stories with shadows, poetry with paws.",
  image: `${SITE.url}/images/salil-nair-safari-photography-guide.jpg`,
  url: `${SITE.url}/who-is-behind-the-lens`,
  worksFor: { "@id": ORG_ID },
  award: salilAwards,
  sameAs: [CONTACT.instagram, CONTACT.youtube],
};

/* Reviews / rating derived from real on-site testimonials (all shown as ★★★★★). */
const namedTestimonials = TESTIMONIALS.filter((t) => t.name && t.name !== "Guest");

const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "5",
  bestRating: "5",
  worstRating: "1",
  reviewCount: String(TESTIMONIALS.length),
};

const reviews = namedTestimonials.slice(0, 6).map((t) => ({
  "@type": "Review",
  author: { "@type": "Person", name: t.name },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
  },
  ...(t.safari ? { name: t.safari } : {}),
  reviewBody: t.text,
}));

/* Sitewide brand graph: Organization/TravelAgency/LocalBusiness + Salil + WebSite. */
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "TravelAgency", "LocalBusiness"],
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: "Lens and Latitudes",
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE.url}/images/og-default.jpg`,
      description: SITE.description,
      founder: { "@id": SALIL_ID },
      email: CONTACT.email,
      telephone: CONTACT.phone,
      priceRange: "$$",
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.044674,
        longitude: 80.1852768,
      },
      areaServed: ["India", "Kenya", "Tanzania", "Botswana", "Namibia", "Worldwide"],
      sameAs: [CONTACT.instagram, CONTACT.youtube],
      aggregateRating,
      review: reviews,
    },
    salilPerson,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-IN",
    },
  ],
};

/* ---- Per-page builders ---- */

export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function service({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE.url}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: ["India", "Africa", "Worldwide"],
  };
}

export function touristTrip({
  name,
  description,
  path,
  image,
  destinations,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  destinations?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url: `${SITE.url}${path}`,
    ...(image ? { image: `${SITE.url}${image}` } : {}),
    provider: { "@id": ORG_ID },
    ...(destinations && destinations.length
      ? {
          itinerary: {
            "@type": "ItemList",
            itemListElement: destinations.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "TouristDestination", name: d },
            })),
          },
        }
      : {}),
  };
}
