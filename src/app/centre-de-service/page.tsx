import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function CentreServicePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content" className="container py-16">
        <h1 className="text-4xl font-bold">Centre de service</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Accédez à notre support et à nos ressources techniques.</p>
      </main>
      <Footer />
    </div>
  );
}