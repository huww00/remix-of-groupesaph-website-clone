import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Infogérance mobile" };

export default function FlotteMobilePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="SOLUTIONS MOBILES"
        title="Infogérance mobile"
        intro="Externalisez la gestion de votre flotte mobile pour gagner en réactivité, en maîtrise des coûts et en satisfaction utilisateur. Nous opérons vos lignes, terminaux et outils MDM/UEM au quotidien."
        highlights={[
          "Single point of contact",
          "SLA & reporting réguliers",
          "Optimisation continue des coûts",
        ]}
        features={[
          { title: "Administration des lignes", description: "Ouvertures, portabilités, options, suspensions et suivis de consommation.", icon: ServiceIcons.Settings },
          { title: "Gestion du parc", description: "Préparation, envoi, inventaire des terminaux et accessoires.", icon: ServiceIcons.Smartphone },
          { title: "MDM/UEM au quotidien", description: "Politiques, applications, mises à jour, conformité et remédiations.", icon: ServiceIcons.Lock },
          { title: "Support utilisateurs", description: "Centre de services multi‑canal pour incidents et demandes.", icon: ServiceIcons.Support },
          { title: "Pilotage & reporting", description: "Tableaux de bord, KPIs, revues de service et plans d'amélioration.", icon: ServiceIcons.Cpu },
          { title: "Optimisation budgétaire", description: "Audit d'usages, recommandations d'offres, alertes et blocages.", icon: ServiceIcons.Signal },
        ]}
        cta={{ label: "Confier ma flotte", href: "/contactez-nous", note: "Onboarding en quelques jours" }}
      />
      <Footer />
    </div>
  );
}