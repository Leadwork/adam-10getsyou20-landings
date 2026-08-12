import type { SiteConfig } from "./types";
import { SHARED_HERO, SHARED_SERVICES } from "./shared";

export const studioConfig: SiteConfig = {
  id: "studio",
  hostname: "10getsyou20studio.com",
  hostnames: ["10getsyou20studio.com", "www.10getsyou20studio.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Studio",
    full: "10GetsYou20 Studio",
  },

  meta: {
    title: "10GetsYou20 Studio | Professional Real Estate Video Production",
    description:
      "10 minutes. 20 short-form videos. The production arm of 10GetsYou20 — one guided conversation turned into 20 Reels & Shorts for real estate agents, delivered in 2 days.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Studio · A production division of the 10GetsYou20 brand",
  },

  services: SHARED_SERVICES,

  accentHue: 247,
};
