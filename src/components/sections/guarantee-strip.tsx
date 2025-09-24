import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";

const guarantees = [
  {
    title: "Pride-backed guarantee",
    copy: "If anything feels less than immaculate, we return within 48 hours to make it right—no questions asked.",
  },
  {
    title: "Bonded & insured",
    copy: "Every specialist carries $2M liability coverage, background checks, and EV certification.",
  },
];

export function GuaranteeStrip() {
  return (
    <SectionWrapper id="pricing" className="space-y-6">
      <div className="flex flex-col gap-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="w-fit rounded-full bg-primary/10 text-primary"
        >
          Our promise
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Coverage that backs every shine
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {guarantees.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)]"
          >
            <p className="text-lg font-semibold text-ink">{item.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-primary/30 bg-primary/10 p-8 text-sm text-ink">
        <p className="font-semibold uppercase tracking-[0.3em] text-primary">
          Flat-rate pricing
        </p>
        <p className="mt-3 text-lg text-primary">
          Sedans from $189 · SUVs from $229 · Exotics from $299 · Fleet &
          subscription pricing available on request.
        </p>
      </div>
    </SectionWrapper>
  );
}
