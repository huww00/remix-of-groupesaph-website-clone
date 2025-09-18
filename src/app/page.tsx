import GlassHeaderNavigation from "@/components/sections/glass-header-navigation";
import GlassHeroSection from "@/components/sections/glass-hero-section";
import ClientLogos from "@/components/sections/client-logos";
import GlassFeaturesSection from "@/components/sections/glass-features-section";
import ClientTestimonials from "@/components/sections/client-testimonials";
import GlassContactSection from "@/components/sections/glass-contact-section";
import GlassFooter from "@/components/sections/glass-footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <GlassHeaderNavigation />
      <main id="content">
        <GlassHeroSection />
        <ClientLogos />
        <GlassFeaturesSection />
        <ClientTestimonials />
        <GlassContactSection />
      </main>
      <GlassFooter />
    </div>
  );
}