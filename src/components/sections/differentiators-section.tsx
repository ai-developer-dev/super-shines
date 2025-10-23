import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Car, Leaf, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    title: "Certified craftsmanship",
    copy: "IDA-certified pros with factory training and insured equipment on every job.",
    icon: ShieldCheck,
  },
  {
    title: "We come to you",
    copy: "Fully mobile studios with water + power supply, so you can keep living your day.",
    icon: Car,
  },
  {
    title: "Eco-smart chemistry",
    copy: "pH-balanced, biodegradable products — safe for wraps, ceramic, and high-end finishes.",
    icon: Leaf,
  },
  {
    title: "Transparent pricing",
    copy: "Flat rates by vehicle type with instant digital quotes and contactless payment.",
    icon: BadgeCheck,
  },
];

export function Differentiators() {
  return (
    <SectionWrapper id="why" className="space-y-12">
      <div className="max-w-2xl space-y-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-primary/10 text-primary"
        >
          Why Thousands Choose Super Shines
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          More than clean—engineered brilliance
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          We mix detailing artistry with hospitality-level service so you can
          trust every visit, every time.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {differentiators.map((item) => (
          <div
            key={item.title}
            className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_32px_70px_rgba(0,82,204,0.26)]"
          >
            <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
              <span className="absolute inset-[18%] rounded-[36px] bg-[radial-gradient(circle_at_30%_30%,rgba(0,82,204,0.35),rgba(0,82,204,0))]" />
              <span className="absolute inset-[25%] rounded-[44px] bg-[radial-gradient(circle_at_70%_70%,rgba(242,154,5,0.24),rgba(0,82,204,0))]" />
              <span className="absolute inset-[45%] rounded-[60px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),rgba(0,82,204,0))]" />
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </span>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-ink">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
