import type { SiteConfig } from "./types";
import { SHARED_HERO, SHARED_SERVICES } from "./shared";

export const mediaConfig: SiteConfig = {
  id: "media",
  hostname: "10getsyou20media.com",
  hostnames: ["10getsyou20media.com", "www.10getsyou20media.com"],

  brand: {
    parent: "10GetsYou20",
    suffix: "Media",
    full: "10GetsYou20 Media",
  },

  meta: {
    title:
      "10GetsYou20 Media | Real Estate Media & Short-Form Content Production",
    description:
      "The media team behind your listings. Short-form content for real estate professionals — filmed, edited, and delivered ready to publish. Part of the 10GetsYou20 brand.",
  },

  hero: {
    ...SHARED_HERO,
    trustLine:
      "10GetsYou20 Media · A production division of the 10GetsYou20 brand",
  },

  services: SHARED_SERVICES,

  accentHue: 225,
};
