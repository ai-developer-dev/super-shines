import Link from "next/link";

import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 Simple Touch-Ups To Keep Your Detail Fresh",
    href: "/blog/touch-ups-between-details",
  },
  {
    title: "Nine Interior Habits To Keep Your Cabin Feeling Factory Fresh",
    href: "/blog/interior-habits",
  },
  {
    title: "How to Prep Your EV for Road Trips Without Killing Range",
    href: "/blog/ev-road-trip-prep",
  },
  {
    title: "Steam vs. Shampoo: When To Use Each Detailing Method",
    href: "/blog/steam-vs-shampoo",
  },
];

export function BlogSection() {
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
