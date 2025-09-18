import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import ClientLogos from "@/components/sections/client-logos";
import SolutionsMobiles from "@/components/sections/solutions-mobiles";
import CommunicationsCollaboration from "@/components/sections/communications-collaboration";
import NetworksSecurity from "@/components/sections/networks-security";
import ClientTestimonials from "@/components/sections/client-testimonials";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content">
        <HeroSection />
        <ClientLogos />
        <div className="space-y-0">
          <SolutionsMobiles />
          <CommunicationsCollaboration />
          <NetworksSecurity />
        </div>
        <ClientTestimonials />
        {/* <NewsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}