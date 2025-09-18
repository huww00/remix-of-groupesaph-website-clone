import HeaderNavigation from "@/components/sections/header-navigation";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export const metadata = { title: "Contactez-nous" };

export default function ContactezNousPage() {
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