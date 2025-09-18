import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16 prose max-w-none">
        <h1>Charte de confidentialité</h1>
        <p className="text-muted-foreground">Expliquez ici vos politiques de confidentialité et de gestion des données.</p>
      </main>
      <Footer />
    </div>
  );
}