import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function PartenairesITPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <p className="uppercase tracking-widest text-sm text-primary">Partenaires</p>
        <h1 className="text-4xl font-bold mt-2">Nos Partenaires IT</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Un écosystème de technologies et d’expertises au service de vos projets.</p>
      </main>
      <Footer />
    </div>
  );
}