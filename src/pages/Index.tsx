import { MatrixBackground } from "@/components/MatrixBackground";
import { SpotlightEffect } from "@/components/SpotlightEffect";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { EventDetailsSection } from "@/components/EventDetailsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { PrizesSection } from "@/components/PrizesSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <SpotlightEffect />

      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <EventDetailsSection />
        <TimelineSection />
        <PrizesSection />
        <RegistrationSection />
        <PartnersSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
