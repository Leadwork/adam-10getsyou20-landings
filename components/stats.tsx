const stats = [
  { value: "10 min", label: "Guided conversation — no prep, no script" },
  { value: "20", label: "Reels & Shorts per session, ready to publish" },
  { value: "2 days", label: "From conversation to delivery, every time" },
  { value: "2 free", label: "Revisions per video — delivered fast" },
];

export function Stats() {
  return (
    <section aria-label="At a glance" className="border-y border-border bg-secondary/50">
      <div className="container">
        <dl className="grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:gap-x-8 md:py-16">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center md:items-start md:text-left">
              <dt className="order-2 mt-2 max-w-[16ch] text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-4xl font-semibold tracking-tight text-brand-blue sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
