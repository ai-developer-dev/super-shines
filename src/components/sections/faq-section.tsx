import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    qa: [
      {
        question: "How does Super Shines work?",
        answer:
          "Receive an instant quote, pick your time, and a certified mobile studio arrives with water, power, and pro-grade tools to complete your detail on-site.",
      },
      {
        question: "Can I reschedule or cancel?",
        answer:
          "Yes—reschedule or cancel up to 12 hours in advance through your confirmation link or by texting our concierge team.",
      },
    ],
  },
  {
    category: "Pricing",
    qa: [
      {
        question: "Do you charge extra for pet hair or bio spills?",
        answer:
          "Heavy pet hair, mold remediation, or bio cleanups add a transparent surcharge ($40-$95) that you’ll approve before we begin.",
      },
      {
        question: "How do I know which package fits my vehicle?",
        answer:
          "Packages are tailored by vehicle size and condition. Tap “Get My Shine” and our smart quote walks you through ride type, mileage, and needs.",
      },
    ],
  },
  {
    category: "Service",
    qa: [
      {
        question: "Is your process safe for ceramic coatings and wraps?",
        answer:
          "Absolutely. We use pH-neutral, wrap-safe chemistry and touchless drying for protected vehicles.",
      },
      {
        question: "Do I need to provide water or power?",
        answer:
          "No. Our vans are self-contained with filtered water, power, and lighting so we can detail anywhere.",
      },
    ],
  },
];

export function FAQSection() {
  return (
    <SectionWrapper id="faqs" className="space-y-10">
      <div className="space-y-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-primary/10 text-primary"
        >
          FAQs
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Answers before we roll up
        </h2>
      </div>
      <div className="space-y-8">
        {faqs.map((group) => (
          <div key={group.category} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              {group.category}
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {group.qa.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="overflow-hidden rounded-2xl border border-border bg-white/90 px-4"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-ink">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
