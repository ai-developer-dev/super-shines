import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  BlogSection,
  Differentiators,
  FAQSection,
  FinalCTA,
  GuaranteeStrip,
  HeroSection,
  HowItWorks,
  LeadDetailer,
  ServiceAreas,
  ServicesSection,
  Testimonials,
  TrustSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <AnimateOnScroll />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <LeadDetailer />
      <Differentiators />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <BlogSection />
      <GuaranteeStrip />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
