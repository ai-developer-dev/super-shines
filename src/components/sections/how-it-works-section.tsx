import { SectionWrapper } from "./section-wrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Sparkles, type LucideIcon } from "lucide-react";

const ownerSteps = [
  {
    title: "Choose your shine",
    copy: "Pick the package that fits your vehicle and lifestyle. Need guidance? We’ll help.",
  },
  {
    title: "Match with a pro",
    copy: "Select a vetted Super Shines specialist, review ratings, and lock in your time.",
  },
  {
    title: "Relax while we work",
    copy: "Your expert arrives stocked, on-time, and transforms your vehicle while you keep moving.",
  },
];

const proSteps = [
  {
    title: "Apply in minutes",
    copy: "Tell us about your experience and upload certifications right from the app.",
  },
  {
    title: "Get fully vetted",
    copy: "We verify your work, equipment, and insurance to keep quality consistent across markets.",
  },
  {
    title: "Grow your book",
    copy: "Accept jobs that fit your schedule, get paid fast, and build recurring clientele.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="booking" className="space-y-12">
      <div className="max-w-xl space-y-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-primary/10 text-primary"
        >
          How Super Shines Works
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          On-demand shine for owners & pros
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          Book your next detail or build your detailing business in a few guided
          steps.
        </p>
      </div>
      <Tabs defaultValue="owners" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 rounded-full bg-muted/80 p-1">
          <TabsTrigger value="owners" className="rounded-full text-sm font-semibold">
            Car owners
          </TabsTrigger>
          <TabsTrigger value="pros" className="rounded-full text-sm font-semibold">
            Detail pros
          </TabsTrigger>
        </TabsList>
        <TabsContent value="owners" className="mt-10">
          <StepsGrid steps={ownerSteps} icon={Sparkles} />
        </TabsContent>
        <TabsContent value="pros" className="mt-10" id="pros">
          <StepsGrid steps={proSteps} icon={BadgeCheck} />
        </TabsContent>
      </Tabs>
    </SectionWrapper>
  );
}

interface StepsGridProps {
  steps: { title: string; copy: string }[];
  icon: LucideIcon;
}

function StepsGrid({ steps, icon }: StepsGridProps) {
  const Icon = icon;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_55px_rgba(18,136,254,0.22)]"
        >
          <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
            <span className="absolute inset-[15%] rounded-[32px] bg-[radial-gradient(circle_at_30%_30%,rgba(72,163,254,0.25),rgba(18,136,254,0))]" />
            <span className="absolute inset-[25%] rounded-[40px] bg-[radial-gradient(circle_at_70%_70%,rgba(242,154,5,0.18),rgba(18,136,254,0))]" />
          </span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_18px_40px_rgba(18,136,254,0.28)]">
            {index + 1}
          </span>
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <p className="text-lg font-semibold text-ink">{step.title}</p>
          </div>
          <p className="text-sm text-muted-foreground">{step.copy}</p>
        </div>
      ))}
    </div>
  );
}
