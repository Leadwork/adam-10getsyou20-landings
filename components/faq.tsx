import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is this for?",
    a: "Real estate agents, brokers, and teams who want a consistent short-form video presence without managing production themselves. If you'd rather spend your time with clients than editing videos, this is built for you.",
  },
  {
    q: "How long does it take?",
    a: "48 hours from your conversation to delivery. You receive 20 short-form videos, a call-to-action end screen, and metadata — all sent for your approval before anything goes live.",
  },
  {
    q: "Do I need to prep or bring equipment?",
    a: "No. Nothing more than you need to prepare for a Zoom meeting with a potential client. Show up professional and on-time. We take care of everything else.",
  },
  {
    q: "What platforms are supported?",
    a: "We deliver formats optimized for Instagram Reels, Facebook, YouTube Shorts, TikTok, and other short-form placements. You can post directly — no re-editing needed on your side.",
  },
  {
    q: "Can I use my own branding?",
    a: "Yes. We work with your existing logo, colors, and tone so the videos feel like an extension of your business rather than a template. If you don't have a fixed brand yet, we'll keep it clean and professional.",
  },
];

export function Faq() {
  return (
    <section className="bg-secondary/60 py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
              Common questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
