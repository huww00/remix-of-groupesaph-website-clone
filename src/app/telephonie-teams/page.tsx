import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Téléphonie Teams" };

export default function TelephonieTeamsPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="COMMUNICATION & COLLABORATION"
        title="Téléphonie Teams"
        intro="Activez la téléphonie d'entreprise dans Microsoft Teams (Direct Routing / Operator Connect) et unifiez appels, réunions et collaboration dans une seule application."
        highlights={[
          "Conservation de vos numéros",
          "Qualité opérateur & haute dispo",
          "Gestion centralisée Microsoft 365",
        ]}
        features={[
          { title: "Appels dans Teams", description: "Passer/recevoir des appels, transferts, files, messagerie vocale et enregistrements.", icon: ServiceIcons.Signal },
          { title: "Direct Routing / Operator Connect", description: "Intégration opérateur sécurisée, SLA et supervision bout-en-bout.", icon: ServiceIcons.Cpu },
          { title: "Équipements certifiés", description: "Casques, téléphones Teams, salles MTR pour une expérience optimale.", icon: ServiceIcons.Smartphone },
          { title: "Sécurité & conformité", description: "MFA, chiffrement, gouvernance, enregistrement conforme et archivage.", icon: ServiceIcons.Lock },
          { title: "Migration & portabilité", description: "Plan de numérotation, portage, scénarios d'accueil et SVI personnalisés.", icon: ServiceIcons.Settings },
          { title: "Support & adoption", description: "Centre de services, monitoring qualité, formation et kits d'adoption.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Activer la voix dans Teams", href: "/contactez-nous", note: "Audit de faisabilité sous 48h" }}
      />
      <Footer />
    </div>
  );
}