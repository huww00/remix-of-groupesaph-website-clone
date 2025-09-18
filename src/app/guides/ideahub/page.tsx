import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function GuideIdeahubPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <h1 className="text-4xl font-bold">Guide d'utilisation IdeaHub</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Ressources et tutoriels pour démarrer rapidement.</p>
      </main>
      <Footer />
    </div>
  );
}