import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  HeroSection,
  SocialProofSection,
  FeaturesSection,
  ComparisonSection,
  TestimonialsSection,
  InstallationSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" role="main">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <InstallationSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
