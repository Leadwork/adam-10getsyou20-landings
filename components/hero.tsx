import { ArrowRight, Sparkles, Mic, Film, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SiteConfig } from "@/config";

interface HeroProps {
  config: SiteConfig;
}

export function Hero({ config }: HeroProps) {
  const { hero } = config;

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-gradient-hero"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-grid opacity-40 mask-fade-b"
      />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-blue backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-violet" />
            {hero.eyebrow}
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-blue text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headline.lead}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-brand-violet to-brand-blue bg-clip-text text-transparent">
                {hero.headline.accent}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-2 rounded bg-brand-violet/15"
              />
            </span>
            {hero.headline.tail}
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.subheadline}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "160ms" }}
          >
            <Button asChild size="lg">
              <a
                href={hero.primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={hero.secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.secondaryCtaLabel}
              </a>
            </Button>
          </div>

          <p
            className="animate-fade-up mt-6 text-xs text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            {hero.trustLine}
          </p>
        </div>

        <div
          className="animate-fade-up relative mx-auto mt-16 max-w-5xl md:mt-24"
          style={{ animationDelay: "300ms" }}
        >
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
            {/* Card 1 — Input */}
            <div className="group relative flex flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(11,29,81,0.25)] transition-all hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-violet">
                  Input
                </span>
                <span className="rounded-full bg-brand-violet/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-violet">
                  10 min
                </span>
              </div>
              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white">
                <Mic className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-brand-blue">
                One guided conversation.
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Casual, producer-led, over the phone or on video.
              </p>
              <ul className="mt-5 space-y-2 text-[13px] text-brand-blue/90">
                {[
                  "No prep required",
                  "No script to memorize",
                  "Same setup as a Zoom meeting",
                  "U.S.-based producer",
                ].map((li) => (
                  <li key={li} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-violet/15">
                      <Check
                        className="h-2.5 w-2.5 text-brand-violet"
                        strokeWidth={3}
                      />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 — Production */}
            <div className="group relative flex flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(11,29,81,0.25)] transition-all hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-violet">
                  Production
                </span>
                <span className="rounded-full bg-brand-violet/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-violet">
                  2 days
                </span>
              </div>
              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white">
                <Film className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-brand-blue">
                Edited, captioned, packaged.
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                This is the magic — 20 optimized short-form videos in 2 days.
              </p>
              <ul className="mt-5 space-y-2 text-[13px] text-brand-blue/90">
                {[
                  "Real humans who understand real estate, not AI",
                  "Optimized for all major platforms",
                  "Personalized with your brand & media",
                  "High-production value — music, transitions, CTA",
                ].map((li) => (
                  <li key={li} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-violet/15">
                      <Check
                        className="h-2.5 w-2.5 text-brand-violet"
                        strokeWidth={3}
                      />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 — Output */}
            <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-transparent bg-brand-blue p-6 text-white shadow-[0_30px_80px_-30px_rgba(11,29,81,0.55)] transition-all hover:-translate-y-0.5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(400px 200px at 100% 0%, hsl(var(--accent-hue) 96% 68% / 0.55), transparent 55%), radial-gradient(300px 200px at 0% 100%, hsl(var(--accent-hue) 96% 62% / 0.3), transparent 55%)",
                }}
              />
              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Delivery
                  </span>
                  <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                    Ready to publish
                  </span>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    20
                  </span>
                  <span className="text-sm text-white/80">
                    videos per session
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/80">
                  Everything you need, nothing left to edit.
                </p>
                <ul className="mt-5 space-y-2 text-[13px] text-white/90">
                  {[
                    "Reels, Shorts, TikTok — ready-to-post",
                    "Custom ending with call-to-action",
                    "Two free revisions per video",
                    "We can post for you (optional)",
                  ].map((li) => (
                    <li key={li} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-brand-violet/25 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
