import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Accès Internet" };

export default function AccesInternetPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="RÉSEAUX & SÉCURITÉ"
        title="Accès Internet"
        intro="Connexions professionnelles fiables, performantes et sécurisées pour tous vos sites: fibre dédiée/FTTH, SDSL/EFM, 4G/5G et solutions de haute disponibilité."
        highlights={[
          "Fibre dédiée/FTTH, SDSL, 4G/5G, FWA",
          "Haute disponibilité & agrégation",
          "Surveillance proactive & SLA",
        ]}
        features={[
          { title: "Fibre dédiée & FTTH pro", description: "Débits symétriques/garantis, GTR et QoS pour vos usages critiques.", icon: ServiceIcons.Signal },
          { title: "Backup 4G/5G", description: "Secours automatique sur lien mobile pour assurer la continuité d'activité.", icon: ServiceIcons.Wifi },
          { title: "Agrégation & load‑balancing", description: "Multi‑liens, répartition de charge et bascule automatique pour plus de résilience.", icon: ServiceIcons.Cpu },
          { title: "Sécurité périmétrique", description: "Pare‑feu managé, filtrage DNS, IPS/IDS et segmentation.", icon: ServiceIcons.Lock },
          { title: "Supervision & reporting", description: "Monitoring 24/7, alertes, indicateurs SLA et capacity planning.", icon: ServiceIcons.Settings },
          { title: "Déploiement clé en main", description: "Étude d'éligibilité, raccordement, configuration et mise en service.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Vérifier mon éligibilité", href: "/contactez-nous", note: "Étude d'éligibilité et délais sous 48h" }}
      />
      <Footer />
    </div>
  );
}