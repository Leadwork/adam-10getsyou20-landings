import { Check } from "lucide-react";

interface Deliverable {
  qty: string;
  title: string;
  description: string;
}

const deliverables: Deliverable[] = [
  {
    qty: "20",
    title: "Short-form videos",
    description: "Vertical 9:16, captioned, hook-optimized for every platform.",
  },
  {
    qty: "20",
    title: "Custom Call-to-Action",
    description: "Branded, high-converting — turn viewers into leads.",
  },
  {
    qty: "20",
    title: "Engagement-optimized cuts",
    description: "Transitions, licensed music, and end-screens built for retention.",
  },
  {
    qty: "20",
    title: "Titles & descriptions",
    description: "Suggested metadata for every video, ready to paste in.",
  },
  {
    qty: "2 days",
    title: "Fast Delivery",
    description: "All video packages are delivered within two business days of the conversation.",
  },
  {
    qty: "100%",
    title: "Done-for-you",
    description: "No editing, no scripting, no equipment on your side.",
  },
];

export function Deliverables() {
  return (
    <section className="bg-secondary/60 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            What&apos;s Included
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            Everything from one session.
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            Every 10-minute conversation ships with a full package of
            ready-to-publish content — nothing extra to buy, nothing left to
            edit.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {deliverables.map((d) => (
            <li
              key={d.title}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-brand-violet/30 hover:shadow-[0_20px_50px_-30px_rgba(11,29,81,0.25)]"
            >
              <div className="shrink-0">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-brand-blue text-center font-display font-semibold text-white">
                  <span className={d.qty.length > 3 ? "text-[13px]" : "text-lg"}>
                    {d.qty}
                  </span>
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold text-brand-blue">
                  {d.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-center text-sm text-muted-foreground shadow-sm">
          <Check className="h-4 w-4 shrink-0 text-brand-violet" />
          Delivered for your approval — nothing goes live without your sign-off.
        </div>
      </div>
    </section>
  );
}
