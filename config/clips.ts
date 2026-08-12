import type { SiteConfig } from "./types";
import { SHARED_HERO, SHARED_SERVICES } from "./shared";

export const clipsConfig: SiteConfig = {
  id: "clips",
  hostname: "10getsyou20clips.com",
  hostnames: ["10getsyou20clips.com", "www.10getsyou20clips.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Clips",
    full: "10GetsYou20 Clips",
  },

  meta: {
    title: "10GetsYou20 Clips | Short Property Clips for Real Estate Agents",
    description:
      "Twenty short property clips per listing, delivered in 2 days. Hook-first, vertical, ready for TikTok, Reels, and Shorts. A clips division of the 10GetsYou20 brand.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Clips · A production division of the 10GetsYou20 brand",
  },

  services: SHARED_SERVICES,

  accentHue: 285,
};
