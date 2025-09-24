import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Prep Your EV for Road Trips Without Killing Range | Super Shines",
  description:
    "Detailing and packing strategies that protect your EV and preserve range on long adventures.",
};

export default function EvRoadTripPrepPage() {
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
            EV Care
          </p>
          <h1 className="text-3xl font-display uppercase tracking-[0.14em] text-ink sm:text-4xl">
            How to prep your EV for road trips without killing range
          </h1>
          <p className="text-base text-muted-foreground">
            Road tripping in an EV is all about efficiency. Smart detailing choices reduce drag, keep
            sensors accurate, and make every charging stop faster. Use this plan a few days before you head
            out and you will arrive with charge to spare.
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">One week out: baseline prep</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Schedule a professional exterior detail.</span> A polished, contaminant free surface
              reduces drag coefficient and keeps bugs from bonding to paint and cameras.
            </li>
            <li>
              <span className="font-semibold text-ink">Verify tire pressure and rotate if needed.</span> Underinflated tires are a silent
              range killer. Set them to the highway PSI listed on your door jamb.
            </li>
            <li>
              <span className="font-semibold text-ink">Update your navigation and charging apps.</span> Make sure your preferred networks are
              favorited in the infotainment system and on your phone.
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Two days out: interior efficiency</h2>
          <p>
            Cabin temperature swings and clutter force your HVAC to work harder. Keep the load light:
          </p>
          <ol className="list-decimal space-y-4 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Deep clean climate touch points.</span> Wipe sensors, vents, and seat perforations so
              thermal management can respond quickly.
            </li>
            <li>
              <span className="font-semibold text-ink">Pre pack with balance in mind.</span> Heavy items should sit low and centered between
              the axles. Use storage bins to keep gear from sliding and triggering weight sensors.
            </li>
            <li>
              <span className="font-semibold text-ink">Condition door seals.</span> A light silicone dressing stops wind noise and
              improves cabin sealing, reducing HVAC load on long stretches.
            </li>
          </ol>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Morning of departure checklist</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Top off windshield washer fluid with a bug specific solution.</li>
            <li>Check charge port door and cameras for any overnight grime, especially if you park outside.</li>
            <li>Precondition the cabin while you are still plugged in to save battery on the road.</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">On the road maintenance</h2>
          <p>
            Keep a small kit that lives in the frunk: quick detailer, glass cleaner, microfiber towels, and
            a collapsible bucket. Use it at charging stops to clear bugs from sensors and headlights. Clean
            wheels once a day with a waterless wipe to stop brake dust from staining.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Post trip recovery</h2>
          <p>
            When you roll back into your driveway, rinse road film immediately. Schedule a Super Shines
            exterior and interior refresh to remove any embedded contaminants and reset the cabin. We bring
            filtered water, paint safe chemistry, and EV certified pros to your door.
          </p>
          <p>
            Ready for white glove EV care? <Link href="#booking" className="text-primary underline">Book your next detail</Link> and we will
            keep your vehicle travel ready.
          </p>
        </section>
      </article>
    </main>
  );
}
