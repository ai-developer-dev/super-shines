import Link from "next/link";
import { Logo } from "@/components/logo";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Full Detailing", href: "#services" },
      { label: "Interior Detailing", href: "#services" },
      { label: "Exterior Detailing", href: "#services" },
      { label: "Fleet Programs", href: "#fleet" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#faqs" },
      { label: "Contact", href: "#contact" },
      { label: "Gift Cards", href: "#pricing" },
      { label: "Detailer Portal", href: "#pros" },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground" id="contact">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo className="text-secondary-foreground" />
            <p className="text-base text-secondary-foreground/70">
              Super Shines delivers pro-grade detailing wherever you are. Book in
              minutes and our vetted specialists bring the studio to your
              driveway.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold uppercase tracking-[0.3em] text-secondary-foreground/60">
                Visit
              </p>
              <p>1450 Sunset Avenue, Suite 200<br />Los Angeles, CA 90028</p>
              <p>
                <a href="tel:+18005550123" className="hover:underline">
                  (800) 555-0123
                </a>{" "}
                ·
                <a href="mailto:hello@supershines.com" className="hover:underline">
                  hello@supershines.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-secondary-foreground transition hover:bg-white/15"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary-foreground/60">
                {section.title}
              </p>
              <ul className="space-y-3 text-sm text-secondary-foreground/75">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-secondary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Super Shines. Bringing the sparkle to
            every driveway.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
