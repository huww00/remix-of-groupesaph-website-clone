import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Internet Mobile" };

export default function InternetMobilePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="SOLUTIONS MOBILES"
        title="Internet Mobile"
        intro="Accès data 4G/5G sécurisés pour sites distants, équipes nomades et usages temporaires. Déployez rapidement une connectivité performante partout en France."
        highlights={[
          "Routeurs 4G/5G professionnels (5G SA/NSA)",
          "Backup 4G/5G pour vos accès fixes",
          "Pool de data mutualisée & alertes conso",
          "APN privé, IP fixe, QoS et priorisation",
        ]}
        features={[
          { title: "Cartes SIM data & pools", description: "Data partagée entre vos lignes avec seuils, alertes et blocages automatiques.", icon: ServiceIcons.Signal },
          { title: "Routeurs 4G/5G", description: "CPE pro (Cisco, Cradlepoint, Huawei…) avec antennes MIMO et gestion distante.", icon: ServiceIcons.Wifi },
          { title: "Accès fixe sans fil (FWA)", description: "Alternative fibre pour sites non éligibles: débits élevés, mise en œuvre rapide.", icon: ServiceIcons.Cpu },
          { title: "Sécurité & APN privé", description: "Segmentation réseau, IP publique fixe, tunnels sécurisés vers votre SI.", icon: ServiceIcons.Lock },
          { title: "Supervision & reporting", description: "Pilotage en temps réel de l'usage, qualité radio, disponibilité et SLA.", icon: ServiceIcons.Settings },
          { title: "Support & déploiement", description: "Étude de couverture, installation, SAV et gestion des incidents par notre centre de services.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Étudier ma couverture", href: "/contactez-nous", note: "Audit de faisabilité et recommandations sous 48h" }}
      />
      <Footer />
    </div>
  );
}