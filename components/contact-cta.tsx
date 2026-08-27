import { Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY =
  "https://calendly.com/d/dz5h-8x7-6dy/10-minute-real-estate-demo";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-brand-blue px-8 py-14 text-center shadow-[0_40px_80px_-40px_rgba(11,29,81,0.5)] sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(600px 200px at 50% 0%, rgba(139,124,252,0.35), transparent 60%), radial-gradient(500px 250px at 100% 100%, rgba(109,93,251,0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
              Your next 20 listing videos are one conversation away.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
              Book a free 10-minute demo. No slides, no sales pitch — just a
              short conversation about your market and what this would look
              like for your listings. No credit card required.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="accent">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  Book a 10-minute demo
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              >
                <a href="mailto:hello@10getsyou20studio.com">
                  <Mail className="h-4 w-4" />
                  hello@10getsyou20studio.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
