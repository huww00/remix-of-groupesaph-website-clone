import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main id="content">
        {/* Hero */}
        <section className="bg-secondary border-b">
          <div className="container py-16 md:py-20">
            <p className="text-sm font-medium tracking-wide text-primary mb-3 uppercase">À propos</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Le groupe SAPHELEC
            </h1>
            <p className="mt-4 max-w-3xl text-gray-600">
              Intégrateur télécom & IT pour les entreprises. Nous accompagnons nos clients sur
              l'ensemble du cycle de vie: conseil, déploiement, exploitation et amélioration
              continue de vos solutions de communication, de mobilité et de sécurité réseau.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="container py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Notre mission</h2>
              <p className="mt-4 text-gray-600">
                Simplifier l'accès aux nouvelles technologies et en garantir la performance au
                quotidien. Nous conseillons, intégrons et opérons des solutions robustes pour vos
                collaborateurs nomades et vos sites, afin d'augmenter la productivité et la
                sécurité de votre organisation.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Mobilité d'entreprise: lignes, terminaux, MDM/UEM, sécurité</li>
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Communications unifiées: téléphonie, visio, messagerie, intégrations</li>
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Réseaux & sécurité: accès Internet, VPN/SD‑WAN, WiFi, cybersécurité</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border p-6 bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">+15</p>
                <p className="text-sm text-gray-600 mt-1">années d'expertise</p>
              </div>
              <div className="rounded-xl border p-6 bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-sm text-gray-600 mt-1">support et supervision</p>
              </div>
              <div className="rounded-xl border p-6 bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600 mt-1">entreprises accompagnées</p>
              </div>
              <div className="rounded-xl border p-6 bg-white shadow-sm">
                <p className="text-3xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600 mt-1">piliers: Mobilité, Comms, Réseaux</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="bg-muted border-y">
          <div className="container py-12 md:py-16">
            <h2 className="text-3xl font-semibold text-gray-900">Nos valeurs</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">Proximité</h3>
                <p className="mt-2 text-gray-600">Une équipe dédiée, disponible et à l'écoute de vos enjeux métiers.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">Exigence</h3>
                <p className="mt-2 text-gray-600">Des standards élevés de qualité, de sécurité et de performance opérationnelle.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">Responsabilité</h3>
                <p className="mt-2 text-gray-600">Engagés dans la durabilité: reconditionné, optimisation et sobriété numérique.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="container py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Nos engagements</h2>
              <p className="mt-4 text-gray-600">
                Nous pilotons vos projets de bout en bout et fournissons des indicateurs clairs sur
                les niveaux de service. Notre Centre de Services garantit la continuité et
                l'amélioration continue.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border bg-white p-4">
                  <p className="text-sm text-gray-600">SLA opérés</p>
                  <p className="text-2xl font-semibold text-gray-900">99,9%</p>
                </div>
                <div className="rounded-lg border bg-white p-4">
                  <p className="text-sm text-gray-600">Satisfaction</p>
                  <p className="text-2xl font-semibold text-gray-900">4,8/5</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-8">
              <h3 className="text-xl font-semibold text-gray-900">Domaines d'expertise</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Audits & cadrage des besoins</li>
                <li>• Architecture & intégration</li>
                <li>• Infogérance et support utilisateurs</li>
                <li>• Gouvernance, sécurité et conformité</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}