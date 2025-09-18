import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { GetMyShineDialog } from "@/components/booking/get-my-shine-dialog";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Check,
  Clock5,
  Droplets,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const featuredOn = [
  "Forbes",
  "MotorTrend",
  "Car & Driver",
  "Yahoo Finance",
  "Fast Company",
  "CBC",
  "The Drive",
  "Road & Track",
];

const services = [
  {
    title: "Signature Full Detail",
    copy:
      "Inside and out rejuvenation: paint decontamination, ceramic sealant, interior steam, and ozone refresh.",
    bullets: [
      "3-stage exterior decon + graphene gloss seal",
      "Steam, shampoo, and condition every surface",
      "Certified pros with background checks",
    ],
    image: "/images/service-full.jpg",
  },
  {
    title: "Interior Revival",
    copy:
      "Deep interior reset with stain lifting, ozone odor neutralization, and fabric protection to keep it fresh.",
    bullets: [
      "Hot water extraction for carpets & seats",
      "Leather cleanse, condition, and UV guard",
      "Ozone treatment to eliminate odors",
    ],
    image: "/images/service-interior.jpg",
  },
  {
    title: "Exterior Protection",
    copy:
      "Bring back the gloss with paint correction, hydrophobic coating, and wheel brightening for instant curb appeal.",
    bullets: [
      "Foam cannon wash + two-bucket hand finish",
      "Clay, polish, and silica-infused sealant",
      "Wheel, tire, and trim restoration",
    ],
    image: "/images/service-exterior.jpg",
  },
];

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

const serviceAreas = [
  {
    state: "California",
    cities: ["Los Angeles", "Orange County", "San Diego", "San Jose"],
  },
  { state: "Nevada", cities: ["Las Vegas", "Henderson", "Reno"] },
  {
    state: "Arizona",
    cities: ["Phoenix", "Scottsdale", "Tempe", "Tucson"],
  },
  {
    state: "Texas",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"],
  },
  { state: "Florida", cities: ["Miami", "Orlando", "Tampa", "Jacksonville"] },
  { state: "Colorado", cities: ["Denver", "Boulder", "Colorado Springs"] },
];

const testimonials = [
  {
    quote:
      "They restored my Model Y after a mountain trip. Seats look new, exterior beads for weeks, and they even reset my driver profile.",
    name: "Alexa R.",
    role: "Los Angeles",
  },
  {
    quote:
      "Super Shines is the only detailing team we allow on our dealership lot. Consistent results, zero oversight needed.",
    name: "Marcus L.",
    role: "GM · Signature Imports",
  },
  {
    quote:
      "Their mobile service is unmatched. Booking is instant and they text when they’re en route with ETA and checklist.",
    name: "Priya N.",
    role: "Scottsdale",
  },
];

const blogPosts = [
  {
    title: "Ceramic Coating vs. Wax: What Actually Protects Your Paint",
    href: "#blog",
  },
  {
    title: "Nine Interior Habits To Keep Your Cabin Feeling Factory Fresh",
    href: "#blog",
  },
  {
    title: "How to Prep Your EV for Road Trips Without Killing Range",
    href: "#blog",
  },
  {
    title: "Steam vs. Shampoo: When To Use Each Detailing Method",
    href: "#blog",
  },
];

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

export default function Home() {
  return (
    <>
      <AnimateOnScroll />
      <HeroSection />
      <FeaturedOn />
      <ServicesSection />
      <TrustSection />
      <LeadDetailer />
      <Differentiators />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <BlogSection />
      <GuaranteeStrip />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function SectionWrapper({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 py-16", className)}>
      {children}
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-surface to-[#dde9fb]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 lg:flex-row lg:items-center">
        <div className="flex max-w-xl flex-col gap-6">
          <Badge
            data-animate="fade-up-initial"
            data-animate-delay="0"
            className="w-fit rounded-full bg-primary-strong/10 px-4 py-2 text-primary"
          >
            Mobile Detailing That Comes To You
          </Badge>
          <h1
            data-animate="fade-up-initial"
            data-animate-delay="120"
            className="text-4xl font-display uppercase tracking-[0.18em] text-ink sm:text-5xl lg:text-6xl"
          >
            Book the best shine in your city
          </h1>
          <p
            data-animate="fade-up-initial"
            data-animate-delay="220"
            className="text-lg text-muted-foreground"
          >
            Super Shines brings certified detailing pros to your driveway with
            studio-grade results, zero guesswork, and white-glove care for every
            vehicle.
          </p>
        <div className="flex flex-wrap items-center gap-4">
          <GetMyShineDialog>
            <Button className="rounded-full px-8 py-6 text-base font-semibold shadow-[0_22px_40px_rgba(18,136,254,0.26)]">
              <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                Get My Shine
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </GetMyShineDialog>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-primary/40 px-8 py-6 text-base font-semibold text-primary hover:bg-primary/10"
          >
            <Link
              href="#pricing"
              className="flex items-center justify-center gap-2 whitespace-nowrap"
            >
              See Packages
            </Link>
          </Button>
        </div>
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <Star className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </span>
              <div>
                <p className="text-base font-semibold text-ink">4.9 rating</p>
                <p>12,423 verified reviews</p>
              </div>
            </div>
            <Separator orientation="vertical" className="hidden h-10 lg:block" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-inner">
                <Sparkles className="h-5 w-5" />
              </span>
              <p>
                Trusted by dealerships, EV owners, and luxury collectors from LA
                to Miami.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 justify-center">
          <div className="relative h-[520px] w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-strong p-4 shadow-[0_35px_80px_rgba(11,28,46,0.25)]">
            <div className="absolute inset-0 rounded-[2.3rem] border border-white/15" />
            <Image
              src="/images/hero-detailing.jpg"
              alt="Super Shines detailer restoring a vehicle"
              fill
              className="rounded-[2rem] object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-sm text-ink shadow-lg">
              <Sparkles className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Same-day availability</p>
                <p className="text-xs text-muted-foreground">
                  Book by noon, shine up by dinner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedOn() {
  return (
    <SectionWrapper id="featured" className="pb-10">
      <div className="rounded-3xl border border-border bg-white/80 p-6 shadow-[0_24px_65px_rgba(13,44,73,0.06)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Featured on
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-[0.35em] text-ink/70">
          {featuredOn.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ServicesSection() {
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
        {services.map((service) => (
          <Card key={service.title} className="group h-full overflow-hidden rounded-3xl border border-border/80 bg-white/90 shadow-[0_24px_60px_rgba(13,44,73,0.06)]">
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
    </SectionWrapper>
  );
}

function TrustSection() {
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

function LeadDetailer() {
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
              {[
                "IDA Certified Detailer · Skills Validated",
                "Ceramic Pro Elite & Gtechniq Accredited",
                "EV and PPF Safe-Wash Specialist",
              ].map((item) => (
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
              {[
                "Multi-stage paint correction",
                "Graphene & ceramic coating systems",
                "Interior detox + ozone remediation",
              ].map((item) => (
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

function Differentiators() {
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
            className="flex items-start gap-4 rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)]"
          >
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

function HowItWorks() {
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

function StepsGrid({
  steps,
  icon,
}: {
  steps: { title: string; copy: string }[];
  icon: typeof Sparkles;
}) {
  const Icon = icon;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)]"
        >
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

function ServiceAreas() {
  return (
    <SectionWrapper id="service-areas" className="space-y-8">
      <div className="flex flex-col gap-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="w-fit rounded-full bg-primary/10 text-primary"
        >
          Mobile service areas
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Coast-to-coast coverage, still growing
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          We’re available in 45+ metros and counting. Request your city if you
          don’t see it below.
        </p>
      </div>
      <div className="-mx-6 overflow-x-auto pb-4">
        <div className="flex min-w-full gap-4 px-2">
          {serviceAreas.map((area) => (
            <div
              key={area.state}
              className="min-w-[240px] flex-1 rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)]"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="text-lg font-semibold text-ink">{area.state}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {area.cities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <Droplets className="h-3 w-3 text-primary/60" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        className="rounded-full border-2 border-primary/40 px-6 py-6 text-sm font-semibold text-primary hover:bg-primary/10"
      >
        Request your city
      </Button>
    </SectionWrapper>
  );
}

function Testimonials() {
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

function BlogSection() {
  return (
    <SectionWrapper id="blog" className="space-y-8">
      <div className="flex flex-col gap-4">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="w-fit rounded-full bg-primary/10 text-primary"
        >
          Tips & Guides
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.16em] text-ink"
        >
          Keep your shine longer
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="text-lg text-muted-foreground"
        >
          Expert advice from our pro team to protect paint, preserve interiors,
          and simplify maintenance.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="group rounded-3xl border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)] transition hover:-translate-y-1 hover:border-primary/50"
          >
            <p className="text-lg font-semibold text-ink">{post.title}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read article
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}

function GuaranteeStrip() {
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

function FAQSection() {
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

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2035] via-[#132a46] to-[#0b1c30] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(72,163,254,0.24),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-white/10 text-white"
        >
          Ready when you are
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.2em]"
        >
          Let’s design your next-level shine
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="max-w-2xl text-lg text-white/75"
        >
          Book in minutes and get paired with a Super Shines specialist who cares
          for your vehicle like it’s their own.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-white px-8 py-6 text-base font-semibold text-ink hover:bg-white/90"
          >
            <Link href="#booking">Schedule my detail</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
          >
            <Link href="#pros">Join our pro network</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
