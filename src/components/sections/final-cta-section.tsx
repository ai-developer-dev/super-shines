import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09111d] via-[#10243d] to-[#071423] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,82,204,0.32),_transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(4,13,24,0.4),_rgba(4,13,24,0.85))]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <Badge
          data-animate="fade-up"
          data-animate-delay="0"
          className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white"
        >
          Ready when you are
        </Badge>
        <h2
          data-animate="fade-up"
          data-animate-delay="120"
          className="text-4xl font-display uppercase tracking-[0.18em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-5xl"
        >
          Let’s design your next-level shine
        </h2>
        <p
          data-animate="fade-up"
          data-animate-delay="220"
          className="max-w-2xl text-lg text-white/80"
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
            className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-base font-semibold text-white hover:border-white/70 hover:bg-white/20"
          >
            <Link href="#pros">Join our pro network</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
