import Image from "next/image";
import Link from "next/link";

import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const certifications = [
  "IDA Certified Detailer · Skills Validated",
  "Ceramic Pro Elite & Gtechniq Accredited",
  "EV and PPF Safe-Wash Specialist",
];

const specialties = [
  "Multi-stage paint correction",
  "Graphene & ceramic coating systems",
  "Interior detox + ozone remediation",
];

export function LeadDetailer() {
  return (
    <SectionWrapper id="about" className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f2035] via-[#1b2e48] to-[#0b1624] p-6 shadow-[0_35px_80px_rgba(11,28,46,0.45)]">
        <div className="absolute inset-0 rounded-[2.2rem] border border-white/10" />
        <Image
          src="/images/detailer-parham.jpg"
          alt="Lead detailer"
          width={900}
          height={900}
          className="h-full w-full rounded-[2rem] object-cover"
        />
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 text-sm text-ink shadow-lg">
          <p className="font-semibold">Meet Jordan Ellis, Director of Shine Science</p>
          <p className="text-xs text-muted-foreground">
            3,200+ vehicles restored · IDA Certified · Ceramic Pro Elite Installer
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="w-fit rounded-full bg-primary/10 text-primary"
        >
          Lead Detailer Spotlight
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          15 years of obsessive detailing expertise
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          Jordan leads our national training program, ensuring every Super
          Shines pro masters safe wash techniques, paint health diagnostics, and
          EV-specific care.
        </p>
        <div className="grid gap-4 text-sm text-ink/80">
          <div className="rounded-2xl border border-border bg-white/70 p-4">
            <p className="font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Certifications
            </p>
            <ul className="mt-3 space-y-2">
              {certifications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white/70 p-4">
            <p className="font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Specialties
            </p>
            <ul className="mt-3 space-y-2">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          asChild
          variant="ghost"
          className="w-fit rounded-full border border-transparent bg-muted/60 px-6 py-6 text-sm font-semibold text-ink hover:border-primary/30 hover:bg-white"
        >
          <Link href="#team">
            Learn about our vetting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
