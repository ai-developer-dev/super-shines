import Link from "next/link";
import type { Metadata } from "next";
import { generateArticleMetadata } from "@/components/seo/seo-metadata";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = generateArticleMetadata({
  title: "5 Essential Touch-Ups Between Professional Car Details",
  description: "Keep your vehicle looking freshly detailed with five quick weekly touch-ups. Expert tips from Super Shines' professional detailers to maintain that showroom shine.",
  keywords: [
    "car maintenance between details",
    "quick car cleaning tips",
    "maintain car detail",
    "weekly car care",
    "extend detail life",
    "car touch up tips",
  ],
  path: "/blog/touch-ups-between-details",
  publishedTime: "2024-01-10T08:00:00Z",
  author: "Super Shines Team",
  images: [{
    url: "/images/service-exterior-detail.jpg",
    width: 1200,
    height: 630,
    alt: "Car detailing touch-up tips"
  }],
});

export default function TouchUpsBetweenDetailsPage() {
  return (
    <>
      <ArticleSchema
        title="5 Essential Touch-Ups Between Professional Car Details"
        description="Keep your vehicle looking freshly detailed with five quick weekly touch-ups. Expert tips from Super Shines' professional detailers."
        datePublished="2024-01-10T08:00:00Z"
        image="https://supershines.com/images/service-exterior-detail.jpg"
        url="https://supershines.com/blog/touch-ups-between-details"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://supershines.com" },
          { name: "Blog", url: "https://supershines.com/blog" },
          { name: "5 Touch-Ups Between Details", url: "https://supershines.com/blog/touch-ups-between-details" }
        ]} 
      />
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
            Maintenance Playbook
          </p>
          <h1 className="text-3xl font-display uppercase tracking-[0.14em] text-ink sm:text-4xl">
            5 simple touch-ups to keep your detail fresh
          </h1>
          <p className="text-base text-muted-foreground">
            The secret to a long lasting shine is not a garage full of equipment. It is a short list
            of habits you can run through once a week. Commit 20 minutes and you will stretch the
            lifespan of every pro detail you invest in.
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Supplies you already have (plus two to grab)</h2>
          <p>
            You do not need a full detailing rig. Keep these basics in a tote so the routine is painless:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Two plush microfiber towels dedicated to exterior wipe downs.</li>
            <li>A quick detailer or rinseless wash solution diluted in a spray bottle.</li>
            <li>Interior cleaning wipes or a pH neutral multi surface cleaner.</li>
            <li>A soft bristle detailing brush for vents and seams.</li>
            <li>Portable vacuum or a cordless hand vac with crevice and brush attachments.</li>
          </ul>
          <p>
            Store everything in your trunk. The easier it is to access, the more likely you are to follow
            through on the habit.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Weekly touch-up circuit</h2>
          <ol className="list-decimal space-y-4 pl-6 text-muted-foreground">
            <li>
              <span className="font-semibold text-ink">Rinse-less exterior refresh (5 minutes).</span> Mist panels one at a time with
              your quick detailer. Fold the microfiber into quarters and glide in straight lines to lift
              dust. Use a dry towel to follow, flipping to a clean side with each panel.
            </li>
            <li>
              <span className="font-semibold text-ink">Spot treat bugs and bird droppings (2 minutes).</span> Spray the affected area,
              let it dwell for 30 seconds, then wipe with light pressure. Removing them quickly prevents
              etching into the clear coat.
            </li>
            <li>
              <span className="font-semibold text-ink">Vacuum high traffic zones (4 minutes).</span> Focus on the driver footwell,
              front mats, and trunk lip. Quick passes keep grit from grinding into carpet fibers.
            </li>
            <li>
              <span className="font-semibold text-ink">Dust and disinfect touch points (5 minutes).</span> Wipe the steering wheel,
              shifter, door handles, and center console. Follow up with the brush to clear crumbs from cup
              holders and seams.
            </li>
            <li>
              <span className="font-semibold text-ink">Glass check (3 minutes).</span> Hit the inside of the windshield and the
              driver window with a clean towel and glass cleaner. Streak free glass makes every drive feel
              freshly detailed.
            </li>
          </ol>
          <p>
            Set a recurring reminder on your phone after your weekly grocery run. Pairing the habit with
            something you already do keeps it from being skipped.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Monthly extras worth the effort</h2>
          <p>
            Once a month, add ten more minutes to the routine for deeper care:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Condition leather seats with a hydrating, non glossy formula.</li>
            <li>Clean the door jambs to blast away built up grime before it bakes in.</li>
            <li>Apply a spray sealant on wheels to make brake dust removal easier.</li>
          </ul>
          <p>
            These touches bridge the gap between professional appointments so the next full detail starts
            on a cleaner canvas.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-ink">When to call us back in</h2>
          <p>
            If you notice your quick detailer is no longer producing gloss, the inside starts to smell
            musty, or carpet stains reappear, it is time to book another visit. Routine touch ups extend
            the life of our work, but the heavy lifting still belongs to a pro.
          </p>
          <p>
            Ready for a reset? <Link href="#booking" className="text-primary underline">Schedule your next Super Shines detail</Link>
            and we will take it from here.
          </p>
        </section>
      </article>
    </main>
    </>
  );
}
