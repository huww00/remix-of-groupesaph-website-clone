import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function RecrutementPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <p className="uppercase tracking-widest text-sm text-primary">Carrières</p>
        <h1 className="text-4xl font-bold mt-2">Rejoignez notre équipe</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Découvrez nos opportunités et construisez votre avenir avec nous.</p>
      </main>
      <Footer />
    </div>
  );
}