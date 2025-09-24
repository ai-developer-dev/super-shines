import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Clock5, Sparkles, Star } from "lucide-react";

const trustStats = [
  {
    value: "4.9/5",
    label: "Average rating across 12,000+ local drivers",
    icon: Star,
  },
  {
    value: "96%",
    label: "Customers who rebook within 90 days",
    icon: Sparkles,
  },
  {
    value: "45min",
    label: "Average response time for scheduling",
    icon: Clock5,
  },
];

export function TrustSection() {
  return (
    <SectionWrapper id="trust" className="space-y-10">
      <div className="max-w-xl space-y-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-success/10 text-success"
        >
          Why drivers trust Super Shines
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Shine science meets concierge care
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          Real people. Real vehicles. Real proof that your ride can look better
          than showroom fresh.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {trustStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.08)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </span>
              <p className="text-3xl font-display uppercase tracking-[0.2em]">
                {stat.value}
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
