import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Téléphonie Mobile" };

export default function TelephonieMobilePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="SOLUTIONS MOBILES"
        title="Téléphonie Mobile"
        intro="Forfaits adaptés à chaque profil, gestion centralisée des lignes, terminaux et options. Maîtrisez vos coûts tout en offrant la meilleure expérience de téléphonie à vos collaborateurs."
        highlights={[
          "Catalogue multi-opérateurs (SFR Business, etc.)",
          "Pilotage des lignes et options en self-service",
          "Portabilité et déploiement clé en main",
        ]}
        features={[
          { title: "Forfaits 4G/5G pro", description: "Voix, SMS/MMS et data avec options internationales et roaming.", icon: ServiceIcons.Signal },
          { title: "Parc terminaux", description: "Smartphones iOS/Android, accessoires et services associés.", icon: ServiceIcons.Smartphone },
          { title: "Gestion des lignes", description: "Ouverture/fermeture, suspensions, options et suivi consommation.", icon: ServiceIcons.Settings },
          { title: "Sécurité des usages", description: "Bloquages ciblés, alerting conso, conformité RGPD.", icon: ServiceIcons.Lock },
          { title: "Support dédié", description: "Centre de services pour vos incidents et demandes.", icon: ServiceIcons.Support },
          { title: "Reporting & pilotage", description: "Tableaux de bord, analyse des coûts et recommandations.", icon: ServiceIcons.Cpu },
        ]}
        cta={{ label: "Demander une étude", href: "/contactez-nous", note: "Réponse sous 24h ouvrées" }}
      />
      <Footer />
    </div>
  );
}