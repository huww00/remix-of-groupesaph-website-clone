import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Solutions WiFi" };

export default function SolutionsWifiPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="RÉSEAUX & SÉCURITÉ"
        title="Solutions WiFi"
        intro="Déployez un WiFi professionnel, performant et sécurisé pour tous vos sites: bureaux, entrepôts, retail et sites évènementiels. Couverture optimale, supervision et portails captifs."
        highlights={[
          "Étude radio & design de couverture",
          "WiFi 6/6E, contrôleurs cloud",
          "Portail captif & segmentation",
        ]}
        features={[
          { title: "Étude & design radio", description: "Site survey, heatmaps, dimensionnement des AP et plan de canaux pour une couverture fiable.", icon: ServiceIcons.Signal },
          { title: "WiFi 6/6E managé", description: "Bornes haute performance, contrôleur cloud, mises à jour et optimisation automatique.", icon: ServiceIcons.Wifi },
          { title: "Sécurité & segmentation", description: "WPA3-Enterprise, VLAN, SSID multiples, PSK dynamique, IoT/guest isolés.", icon: ServiceIcons.Lock },
          { title: "Portail captif & guest", description: "Accès visiteurs (SMS, SSO, voucher), conformité légale et branding personnalisé.", icon: ServiceIcons.Box },
          { title: "Supervision & MCO", description: "Monitoring proactif, alertes, métriques d'expérience utilisateur et rapports SLA.", icon: ServiceIcons.Settings },
          { title: "Déploiement clés en main", description: "Câblage, installation, mesure de réception, documentation et formation.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Obtenir mon audit WiFi", href: "/contactez-nous", note: "Étude de couverture et recommandations sous 72h" }}
      />
      <Footer />
    </div>
  );
}