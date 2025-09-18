import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function WebinarsPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <p className="uppercase tracking-widest text-sm text-primary">Événements</p>
        <h1 className="text-4xl font-bold mt-2">Webinars</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Inscrivez-vous à nos prochains webinars et ateliers.</p>
      </main>
      <Footer />
    </div>
  );
}