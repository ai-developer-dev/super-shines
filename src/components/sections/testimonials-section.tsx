import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They restored my Model Y after a mountain trip. Seats look new, exterior beads for weeks, and they even reset my driver profile.",
    name: "Alexa R.",
    role: "St. Petersburg",
  },
  {
    quote:
      "Super Shines is the only detailing team we allow on our dealership lot. Consistent results, zero oversight needed.",
    name: "Marcus L.",
    role: "Pinellas Park",
  },
  {
    quote:
      "Their mobile service is unmatched. Booking is instant and they text when they’re en route with ETA and checklist.",
    name: "Priya N.",
    role: "Clearwater Beach",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="space-y-10">
      <div className="space-y-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-primary/10 text-primary"
        >
          Trusted by thousands
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          What drivers are saying
        </h2>
      </div>
      <div className="-mx-6 overflow-x-auto pb-4">
        <div className="flex min-w-full gap-4 px-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-[280px] flex-1 rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)]"
            >
              <div className="flex items-center gap-2 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{testimonial.quote}</p>
              <p className="mt-6 text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
