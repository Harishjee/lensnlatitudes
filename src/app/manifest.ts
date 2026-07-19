import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lens N Latitudes — Wildlife Photography & Safari Tours",
    short_name: "Lens N Latitudes",
    description:
      "Award-winning wildlife photography safaris led by Salil Nair. India, Africa & worldwide expeditions.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
