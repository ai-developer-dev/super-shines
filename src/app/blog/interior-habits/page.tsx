import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nine Interior Habits To Keep Your Cabin Feeling Factory Fresh | Super Shines",
  description:
    "Small daily and weekly habits that lock in that just detailed feeling inside your vehicle.",
};

export default function InteriorHabitsPage() {
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
            Cabin Care
          </p>
          <h1 className="text-3xl font-display uppercase tracking-[0.14em] text-ink sm:text-4xl">
            Nine interior habits to keep your cabin feeling factory fresh
          </h1>
          <p className="text-base text-muted-foreground">
            It does not take long for fingerprints, crumbs, and gym bag funk to undo a pristine interior.
            Layer these light touch habits into your week and you will maintain the soft touch materials
            and new car scent far longer.
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Daily habits (under two minutes)</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Clear the cabin every time you park.</span> Take cups, food wrappers, and gym
              gear with you. Clutter traps moisture and smells.
            </li>
            <li>
              <span className="font-semibold text-ink">Crack the windows after sweaty workouts.</span> Five minutes of fresh air
              prevents humidity from embedding into seats.
            </li>
            <li>
              <span className="font-semibold text-ink">Keep a small trash bag in the console.</span> Swap it out weekly to stop sticky
              buildup.
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Weekly resets (10 minutes)</h2>
          <ol className="list-decimal space-y-4 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Vacuum the driver zone.</span> Sand and grit carried in on shoes act like sandpaper
              on carpets. A quick pass keeps fibers plush.
            </li>
            <li>
              <span className="font-semibold text-ink">Wipe high touch surfaces.</span> Use a microfiber dampened with interior cleaner
              to knock down oils on the steering wheel, door pulls, and screen bezels.
            </li>
            <li>
              <span className="font-semibold text-ink">Refresh cup holders.</span> Drop silicone liners in the dishwasher or rinse and dry
              them in the sink. Sticky spills are easier to catch before they harden.
            </li>
          </ol>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Monthly deeper care</h2>
          <p>
            Once a month, invest a little extra time in areas that collect hidden build up:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Run a soft brush through vents while the fan is on low to push dust out.</li>
            <li>Condition leather bolsters, especially the driver seat entry bolster.</li>
            <li>Mist fabric seats with fabric guard to repel spills and keep fibers from matting.</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">What to stash in your glove box</h2>
          <p>
            A compact kit helps you stay consistent: interior wipes, travel sized odor neutralizer, a
            microfiber towel, and a collapsible trash bag. Replace items as you use them so the kit is always
            ready.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Schedule professional resets</h2>
          <p>
            Daily discipline is powerful, but stubborn stains and lingering odors need pro grade extraction.
            We recommend a full interior reset every 90 days, more often for ride share or family vehicles.
            <Link href="#booking" className="ml-1 text-primary underline">Book your next Super Shines service</Link> and we will bring the
            steamers, extractors, and ozone to your driveway.
          </p>
        </section>
      </article>
    </main>
  );
}
