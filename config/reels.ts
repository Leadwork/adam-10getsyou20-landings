import type { SiteConfig } from "./types";
import { SHARED_HERO, SHARED_SERVICES } from "./shared";

export const reelsConfig: SiteConfig = {
  id: "reels",
  hostname: "10getsyou20reels.com",
  hostnames: ["10getsyou20reels.com", "www.10getsyou20reels.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Reels",
    full: "10GetsYou20 Reels",
  },

  meta: {
    title: "10GetsYou20 Reels | Instagram Reels for Real Estate Agents",
    description:
      "Instagram Reels engineered for real estate. Twenty ready-to-publish Reels per listing, delivered in 2 days. A Reels division of the 10GetsYou20 brand.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Reels · A production division of the 10GetsYou20 brand",
  },

  services: SHARED_SERVICES,

  accentHue: 305,
};
