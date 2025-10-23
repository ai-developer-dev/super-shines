import type { Metadata } from "next";
import { generateSEOMetadata } from "@/components/seo/seo-metadata";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy",
  description: "Learn how Super Shines collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "privacy",
  ],
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://supershines.com" },
          { name: "Privacy Policy", url: "https://supershines.com/privacy-policy" }
        ]}
      />
      <main className="bg-[#f7f9fc] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <header className="mb-12 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Legal
            </p>
            <h1 className="text-3xl font-display uppercase tracking-[0.14em] text-ink sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-sm max-w-none space-y-8 text-ink">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Introduction</h2>
              <p className="text-muted-foreground">
                Super Shines ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile auto detailing services and website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Service address and location information</li>
                  <li>Vehicle information (make, model, year)</li>
                  <li>Payment information</li>
                  <li>Communications with our team</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Provide, maintain, and improve our detailing services</li>
                  <li>Process your bookings and payments</li>
                  <li>Send you service confirmations, updates, and promotional messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Detect, prevent, and address technical issues or fraud</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Service providers who assist in our operations</li>
                <li>Professional detailers who fulfill your service requests</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Your Rights</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-muted-foreground">
                <p>Email: <a href="mailto:hello@supershines.com" className="text-primary hover:underline">hello@supershines.com</a></p>
                <p>Phone: <a href="tel:+18005550123" className="text-primary hover:underline">(800) 555-0123</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
