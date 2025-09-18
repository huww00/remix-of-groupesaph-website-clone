import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Réseaux VPN & SD-WAN" };

export default function ReseauxVPNsdwanPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="RÉSEAUX & SÉCURITÉ"
        title="Réseaux VPN & SD-WAN"
        intro="Interconnectez en toute sécurité vos sites, utilisateurs distants et ressources cloud. Passez à un réseau agile avec priorisation applicative, haute disponibilité et visibilité de bout en bout."
        highlights={[
          "MPLS, IPsec, SSL, ZTNA",
          "SD‑WAN multi‑opérateurs",
          "Haute dispo & QoS applicative",
        ]}
        features={[
          { title: "Architecture hybride", description: "Combinez MPLS, Internet, 4G/5G pour un réseau résilient et optimisé coûts/perf.", icon: ServiceIcons.Cpu },
          { title: "SD‑WAN intelligent", description: "Routage applicatif, mesure en temps réel, correction d'erreurs et agrégation.", icon: ServiceIcons.Signal },
          { title: "Sécurité intégrée", description: "IPsec, firewalling, segmentation, ZTNA/SASE pour protéger vos accès et flux.", icon: ServiceIcons.Lock },
          { title: "Accès utilisateurs distants", description: "VPN SSL/Clientless, MFA, posture device et portails sécurisés.", icon: ServiceIcons.Globe },
          { title: "Supervision 24/7", description: "Monitoring, alertes, performance applicative et rapports SLA.", icon: ServiceIcons.Settings },
          { title: "Déploiement & MCO", description: "Sites prêts à l'emploi, templates, changements et accompagnement au quotidien.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Lancer mon projet SD‑WAN", href: "/contactez-nous", note: "Audit réseau et recommandations sous 72h" }}
      />
      <Footer />
    </div>
  );
}