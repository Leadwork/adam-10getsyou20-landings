import {
  Calendar,
  Mic,
  Film,
  Target,
  RefreshCw,
  Sparkles,
  Instagram,
  Youtube,
} from "lucide-react";
import type { SiteConfig } from "./types";

/**
 * The Calendly booking URL used by the primary hero CTA and the
 * Contact section. Comes from the parent brand at 10getsyou20.com.
 */
export const CALENDLY_URL =
  "https://calendly.com/d/dz5h-8x7-6dy/10-minute-real-estate-demo";

/**
 * The parent brand's canonical marketing site.
 */
export const PARENT_SITE = "https://10getsyou20.com";

/**
 * Hero content shared across all variants. The variants intentionally
 * carry the same primary tagline so the family reads as one brand —
 * differentiation lives in the sub-brand suffix (logo), meta tags,
 * services grid, and accent hue instead of the hero copy.
 *
 * Only the `trustLine` — the tiny caption under the CTAs — is variant-
 * specific, since it names the division.
 */
/**
 * Services grid content shared across all variants. Adam's Sept 2026
 * edit locks the eight services below as the canonical set for every
 * domain — differentiation between variants sits in meta tags, logo
 * suffix, trust line, and accent hue instead of the services list.
 */
export const SHARED_SERVICES: SiteConfig["services"] = {
  heading: "Talk once. Show up everywhere.",
  subheading:
    "A video production workflow built around real estate — from your first listing to a consistent presence across all major platforms.",
  items: [
    {
      icon: Calendar,
      title: "Book a Conversation",
      description:
        "Schedule a time to talk with one of our U.S.-based producers. The total session time is 20 minutes.",
    },
    {
      icon: Mic,
      title: "10-Minute Guided Conversation",
      description:
        "Show up on time with good lighting and working audio — we do the rest. Our producers are experts at research and conversation.",
    },
    {
      icon: Film,
      title: "20 Vertical Videos",
      description:
        "We convert the raw 10-minute conversation into 20 ready-to-post videos for all major platforms.",
    },
    {
      icon: Target,
      title: "Custom Call-to-Action Ending",
      description:
        "All videos include a custom call-to-action end screen. Nudge your audience to the natural next step.",
    },
    {
      icon: RefreshCw,
      title: "2 Free Revisions",
      description:
        "Although we do our best to get it right the first time, some videos may need your input. Two free revisions per video.",
    },
    {
      icon: Sparkles,
      title: "100% Done-for-You",
      description:
        "No editing, no scripting, no equipment on your side. Everything ships ready to publish.",
    },
    {
      icon: Instagram,
      title: "Reels — Instagram & Facebook",
      description:
        "Vertical, hook-first Reels formatted for feed, Explore, and Stories reach. Easy to share.",
    },
    {
      icon: Youtube,
      title: "YouTube Shorts",
      description:
        "Vertical Shorts crafted around search-friendly hooks and clear on-screen text.",
    },
  ],
};

export const SHARED_HERO: Omit<SiteConfig["hero"], "trustLine"> = {
  eyebrow: "10 Minutes. 20 Short-Form Videos.",
  headline: {
    lead: "Your listings deserve to ",
    accent: "show up everywhere",
    tail: ".",
  },
  subheadline:
    "One 10-minute conversation. We turn it into 20 Reels & Shorts — done for you, delivered fast.",
  primaryCtaLabel: "Get 2 Free Videos. Book Now",
  primaryCtaHref: CALENDLY_URL,
  secondaryCtaLabel: "Visit 10GetsYou20.com",
  secondaryCtaHref: PARENT_SITE,
};
