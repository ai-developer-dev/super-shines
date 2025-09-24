import Image from "next/image";
import Link from "next/link";

import { GetMyShineDialog } from "@/components/booking/get-my-shine-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function HeroSection() {
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
