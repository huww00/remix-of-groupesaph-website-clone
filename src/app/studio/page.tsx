import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function StudioPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <h1 className="text-4xl font-bold">Studio</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Création de contenus et services audiovisuels pour l'entreprise.</p>
      </main>
      <Footer />
    </div>
  );
}