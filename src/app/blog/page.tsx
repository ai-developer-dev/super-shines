import Link from "next/link";
import type { Metadata } from "next";

const posts = [
  {
    title: "5 Simple Touch-Ups To Keep Your Detail Fresh",
    href: "/blog/touch-ups-between-details",
    description:
      "Quick weekly moves that extend the life of your professional detail without eating your Saturday.",
  },
  {
    title: "Nine Interior Habits To Keep Your Cabin Feeling Factory Fresh",
    href: "/blog/interior-habits",
    description:
      "Dial-in daily routines that stop crumbs, clutter, and odors before they take hold.",
  },
  {
    title: "How to Prep Your EV for Road Trips Without Killing Range",
    href: "/blog/ev-road-trip-prep",
    description:
      "Plan charging, pack smarter, and protect delicate trim so your EV looks and drives its best on long hauls.",
  },
  {
    title: "Steam vs. Shampoo: When To Use Each Detailing Method",
    href: "/blog/steam-vs-shampoo",
    description:
      "Understand the strengths of each deep-cleaning approach so you choose the safest option for every surface.",
  },
];

export const metadata: Metadata = {
  title: "Super Shines Tips & Guides",
  description: "Detailing tips and maintenance guides from the Super Shines team.",
};

export default function BlogIndexPage() {
  return (
    <main className="bg-[#f7f9fc] py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Tips & Guides
          </p>
          <h1 className="text-3xl font-display uppercase tracking-[0.14em] text-ink sm:text-4xl">
            Detailing insight, straight from our pros
          </h1>
          <p className="text-base text-muted-foreground">
            From daily maintenance to seasonal prep, use these playbooks to keep your
            vehicle looking dialed between professional visits.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-3xl border border-border bg-white p-6 shadow-[0_18px_40px_rgba(13,44,73,0.06)] transition hover:-translate-y-1 hover:border-primary/40"
            >
              <h2 className="text-lg font-semibold text-ink">{post.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{post.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read article
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
