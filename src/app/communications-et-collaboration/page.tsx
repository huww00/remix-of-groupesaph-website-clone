import Link from "next/link";

export const metadata = { title: "Communication et Collaboration" };

export default function Page() {
  const items = [
    { title: "Téléphonie Hébergée SFR", href: "/telephonie-hebergee-sfr", desc: "Centrex hébergé: fiabilité SFR Business, fonctionnalités avancées et simplicité." },
    { title: "Téléphonie Teams", href: "/telephonie-teams", desc: "Voice for Teams: appels entrants/sortants intégrés à Microsoft 365." },
    { title: "Téléphonie 3CX", href: "/telephonie-3cx", desc: "IPBX logiciel flexible, softphones, mobilité et coûts optimisés." },
    { title: "Écran Collaboratif", href: "/ecran-collaboratif", desc: "Salles de réunion modernes: visio, annotation, sans fil et interactivité." },
    { title: "Messagerie & Collaboration", href: "/messagerie-et-collaboration", desc: "Outils collaboratifs: chat, visio, GED, workflows et sécurité des données." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white border-b">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-medium tracking-wide text-red-700 mb-3">COMMUNICATIONS UNIFIÉES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Communication et collaboration</h1>
          <p className="mt-4 max-w-3xl text-gray-600">Faites évoluer vos méthodes de travail: téléphonie cloud, visio, chat, et intégration à vos outils métiers pour un travail fluide en présentiel ou à distance.</p>
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