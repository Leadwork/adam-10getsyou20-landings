import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutProps {
  brandFull: string;
}

export function About({ brandFull }: AboutProps) {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
              A studio focused on real estate short-form video.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              <p>
                {brandFull} is a production division of the 10GetsYou20 brand
                — founded by Adam Winters and now working with a small network
                of U.S.-based producers across Colorado, Louisiana, and Texas.
              </p>
              <p>
                We built the studio around one idea: the best real estate
                short-form content comes from an agent who sounds like
                themselves. Ten minutes of natural conversation, guided by a
                producer who understands your market, is enough to fill a month
                of posts.
              </p>
              <p>
                No complicated shoots. No long production cycles. Just a
                consistent, professional output that reflects well on your
                business — and gives you something worth posting every week.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <a
                  href="https://10getsyou20.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about 10GetsYou20
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-brand-blue p-8 text-white shadow-[0_40px_80px_-40px_rgba(11,29,81,0.5)] sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(500px 200px at 100% 0%, rgba(139,124,252,0.45), transparent 55%), radial-gradient(400px 250px at 0% 100%, rgba(109,93,251,0.35), transparent 55%)",
                }}
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Part of the 10GetsYou20 brand
                </p>
                <p className="mt-4 font-display text-2xl leading-snug text-white sm:text-3xl">
                  Ten minutes of your time.
                  <br />
                  Twenty ready-to-post videos.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-8">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                      Producers
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-white">
                      3
                    </dd>
                    <p className="text-xs text-white/60">CO · LA · TX</p>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                      Turnaround
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-white">
                      2 days
                    </dd>
                    <p className="text-xs text-white/60">
                      Conversation to delivery
                    </p>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                      Per session
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-white">
                      20
                    </dd>
                    <p className="text-xs text-white/60">
                      Reels &amp; Shorts, ready to publish
                    </p>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                      Editing on you
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-white">
                      0
                    </dd>
                    <p className="text-xs text-white/60">Done for you, end to end</p>
                  </div>
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -inset-x-4 -bottom-6 -z-10 h-24 rounded-full bg-brand-violet/20 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
