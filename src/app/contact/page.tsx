import HeaderNavigation from "@/components/sections/header-navigation";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}