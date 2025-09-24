import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steam vs. Shampoo: When To Use Each Detailing Method | Super Shines",
  description:
    "Understand the pros and cons of steam cleaning and shampoo extraction so you can choose the safest path for your interior.",
};

export default function SteamVsShampooPage() {
  return (
    <main className="bg-white py-20">
      <article className="mx-auto flex max-w-3xl flex-col gap-10 px-6">
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/blog" className="hover:text-primary">
            Tips & Guides
          </Link>
        </nav>
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Method Breakdown
          </p>
          <h1 className="text-3xl font-display uppercase tracking-[0.14em] text-ink sm:text-4xl">
            Steam vs. shampoo: when to use each detailing method
          </h1>
          <p className="text-base text-muted-foreground">
            Steam and shampoo are both powerful interior cleaning tools, but they tackle different problems.
            Choosing the wrong method can leave fabrics soggy, warp trim, or leave stains behind. Here is how we
            decide which tool goes on your vehicle, and how you can make the right call at home.
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">When steam is the hero</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Sanitizing hard to reach areas.</span> Steam penetrates vents, seat rails, and
              stitching without saturating the area.
            </li>
            <li>
              <span className="font-semibold text-ink">Breaking down sticky messes.</span> Heat softens spills like soda or sunscreen so
              they wipe away easily.
            </li>
            <li>
              <span className="font-semibold text-ink">Safe cleaning for delicate materials.</span> Alcantara, screens, and piano black trim
              love steam because it lifts grime without harsh chemistry.
            </li>
          </ul>
          <p>
            Steam is best for spot work. Keep the head moving, use short bursts, and follow immediately with
            a microfiber towel to pick up released grime.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">When shampoo extraction wins</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Large spill clean up.</span> Coffee, mud, or melted snow require flushing and suction
              to pull contaminants from carpet backing.
            </li>
            <li>
              <span className="font-semibold text-ink">Deodorizing fabric.</span> Enzyme infused shampoos break down odor causing bacteria,
              something steam alone cannot do.
            </li>
            <li>
              <span className="font-semibold text-ink">Restoring matted upholstery.</span> Agitation paired with extraction lifts crushed
              fibers and revives high traffic zones.
            </li>
          </ul>
          <p>
            Always finish extraction with two dry passes. The goal is to leave fabrics barely damp so they dry
            fully within an hour or two.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Combine both for elite results</h2>
          <p>
            The Super Shines method often uses steam first to loosen debris, followed by light shampoo extraction
            to flush anything left behind. This two stage approach keeps moisture low while delivering a deep clean.
          </p>
          <p>
            At home, try steaming seat seams and plastics, then spot extract only the stained fabric. Minimize how
            much solution you lay down and open the doors afterward to speed up drying.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">When to call in a pro</h2>
          <p>
            Mold, long term pet accidents, or bio spills demand professional tools and protective gear. If you spot
            any of these, seal the area in a bag, ventilate the vehicle, and reach out. We arrive with hot water
            extractors, ozone treatments, and hospital grade sanitation to keep you safe.
          </p>
          <p>
            Unsure which method your interior needs? <Link href="#booking" className="text-primary underline">Book a Super Shines specialist</Link>
            and we will tailor the plan, on site and on your schedule.
          </p>
        </section>
      </article>
    </main>
  );
}
