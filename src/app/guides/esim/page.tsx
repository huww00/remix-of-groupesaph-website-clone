import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function GuideEsimPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <h1 className="text-4xl font-bold">Guide d'utilisation eSIM</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Activez et gérez vos eSIM en quelques étapes.</p>
      </main>
      <Footer />
    </div>
  );
}