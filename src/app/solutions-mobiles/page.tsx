import Link from "next/link";

export const metadata = { title: "Solutions mobiles" };

export default function Page() {
  const items = [
    { title: "Téléphonie Mobile", href: "/telephonie-mobile", desc: "Forfaits, gestion des lignes et terminaux pour vos équipes en mobilité." },
    { title: "Internet Mobile", href: "/internet-mobile", desc: "Accès 4G/5G sécurisés pour les usages nomades et sites distants." },
    { title: "Gestion & Sécurité des Terminaux", href: "/gestion-et-securite-des-terminaux-mobiles", desc: "MDM/UEM pour piloter, mettre à jour et protéger votre flotte mobile." },
    { title: "Location de Smartphone", href: "/location-de-smartphone", desc: "Optez pour l'OPEX: smartphones récents, services inclus et budget maîtrisé." },
    { title: "Équipements Reconditionnés", href: "/equipements-reconditionnes", desc: "Réduction des coûts et de l'empreinte carbone avec des terminaux reconditionnés." },
    { title: "Flotte Mobile", href: "/flotte-mobile", desc: "Infogérance et pilotage de bout en bout de votre flotte et de ses usages." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white border-b">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-medium tracking-wide text-red-700 mb-3">SOLUTIONS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Solutions mobiles</h1>
          <p className="mt-4 max-w-3xl text-gray-600">Equipez, sécurisez et pilotez la mobilité de vos collaborateurs. Nous vous accompagnons de la définition des besoins au run: équipements, forfaits, MDM/UEM, sécurité et infogérance.</p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it) => (
            <Link key={it.title} href={it.href} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700">{it.title}</h3>
                <span className="text-red-700 font-semibold">→</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
              <span className="mt-4 inline-block text-red-700 font-medium">Découvrir</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}