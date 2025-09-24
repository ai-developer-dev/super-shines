import Image from "next/image";

import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const corePackages = [
  {
    title: "Exterior Only Detail",
    copy: "Perfect if your ride needs that showroom shine outside, fast.",
    bullets: [
      "Starting at $99",
      "Hand wash & dry",
      "Bug & tar removal",
      "Wheel & tire deep clean",
      "Streak-free window shine",
      "Premium wax finish for lasting protection",
    ],
    image: "/images/service-exterior.jpg",
  },
  {
    title: "Interior Only Detail",
    copy: "Ideal if the outside looks fine but the inside needs a reset.",
    bullets: [
      "Starting at $99",
      "Full vacuum of carpets & seats",
      "Wipe down of all surfaces",
      "Cup holders, vents & crevices cleaned",
      "Streak-free interior glass",
      "Odor neutralizer treatment",
    ],
    image: "/images/service-interior.jpg",
  },
  {
    title: "Full Interior + Exterior Package",
    copy: "Best value—your car looks, feels, and smells brand new.",
    bullets: [
      "Starting at $179",
      "Everything in Exterior & Interior Packages",
      "Upholstery & floor mat shampoo",
      "Leather & vinyl conditioning",
      "Long-lasting exterior wax/sealant",
      "Deep clean of all vents, nooks & crannies",
    ],
    image: "/images/service-full.jpg",
  },
];

const addOn = {
  title: "Add-On: Pet Hair, Dirt, or Heavy Mess",
  copy: "Because some messes need extra care.",
  bullets: [
    "+$40–$80 (depending on severity)",
    "Specialized tools for stubborn pet hair",
    "Mud & salt removal from carpets/mats",
    "Extra-time intensive cleaning",
  ],
};

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="space-y-12">
      <div className="max-w-2xl space-y-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-primary/10 text-primary"
        >
          Car Detailing, Done Right
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Packages crafted for every finish
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          Whether you need a quick refresh or full paint correction, our
          technicians customize every detail to your vehicle’s story.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {corePackages.map((service) => (
          <Card
            key={service.title}
            className="group h-full overflow-hidden rounded-3xl border border-border/80 bg-white/90 shadow-[0_24px_60px_rgba(13,44,73,0.06)]"
          >
            <CardHeader className="space-y-4">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <CardTitle className="text-2xl uppercase tracking-[0.12em] text-ink">
                {service.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{service.copy}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-3 text-sm text-ink/80">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={2.2} />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="mt-4 w-full justify-between rounded-2xl border border-transparent bg-muted/50 px-4 py-6 text-sm font-semibold text-ink hover:border-primary/40 hover:bg-white"
              >
                Explore package
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="rounded-3xl border border-border bg-white/95 p-8 shadow-[0_24px_60px_rgba(13,44,73,0.06)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {addOn.title}
            </p>
            <p className="text-base text-muted-foreground">{addOn.copy}</p>
          </div>
          <ul className="mt-4 grid gap-3 text-sm text-ink/80 md:mt-0 md:max-w-md">
            {addOn.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" strokeWidth={2.2} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
