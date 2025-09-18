import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function CGVPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16 prose max-w-none">
        <h1>Mentions légales et C.G.V</h1>
        <p className="text-muted-foreground">Renseignez ici vos informations légales et conditions générales de vente.</p>
      </main>
      <Footer />
    </div>
  );
}