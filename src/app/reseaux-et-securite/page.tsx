import Link from "next/link";

export const metadata = { title: "Réseaux et sécurité" };

export default function Page() {
  const items = [
    { title: "Accès Internet", href: "/acces-internet", desc: "Fibre, SDSL, 4G/5G, backup et haute disponibilité pour vos sites." },
    { title: "Réseaux VPN & SD-WAN", href: "/reseaux-vpn-et-sd-wan", desc: "Interconnexion sécurisée et intelligente de vos sites et utilisateurs." },
    { title: "Cybersécurité", href: "/cybersecurite", desc: "Protection des données, pare-feu nouvelle génération, EDR, MFA." },
    { title: "Solutions WiFi", href: "/solutions-wifi", desc: "WiFi managé, couverture performante et portails captifs sécurisés." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white border-b">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-medium tracking-wide text-red-700 mb-3">RÉSEAUX</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Réseaux et sécurité</h1>
          <p className="mt-4 max-w-3xl text-gray-600">Transformez votre réseau: haut-débit, haute dispo, VPN de nouvelle génération et cybersécurité intégrée pour protéger vos usages et données.</p>
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