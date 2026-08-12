import type { SiteConfig } from "./types";
import { SHARED_HERO, SHARED_SERVICES } from "./shared";

export const videosConfig: SiteConfig = {
  id: "videos",
  hostname: "10getsyou20videos.com",
  hostnames: ["10getsyou20videos.com", "www.10getsyou20videos.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Videos",
    full: "10GetsYou20 Videos",
  },

  meta: {
    title: "10GetsYou20 Videos | Listing Videos for Real Estate Agents",
    description:
      "Listing videos delivered in 2 days. 20 short-form cuts per session, edited by U.S.-based producers. A video production division of the 10GetsYou20 brand.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Videos · A production division of the 10GetsYou20 brand",
  },

  services: SHARED_SERVICES,

  accentHue: 260,
};
