import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Gestion & Sécurité des Terminaux Mobiles" };

export default function GstmPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="SOLUTIONS MOBILES"
        title="Gestion & Sécurité des Terminaux Mobiles"
        intro="MDM/UEM pour administrer, sécuriser et mettre à jour vos smartphones & tablettes. Standardisez les usages, réduisez les risques et gagnez du temps d'exploitation."
        highlights={[
          "iOS, iPadOS, Android Enterprise",
          "Enrôlement zero-touch / DEP / Knox",
          "Conformité, chiffrement, MFA",
        ]}
        features={[
          { title: "Enrôlement & provisioning", description: "Zéro-touch (Android), Apple DEP/ABM, Samsung Knox pour un déploiement industriel.", icon: ServiceIcons.Settings },
          { title: "Politiques & conformité", description: "Mots de passe, chiffrement, mises à jour, restrictions d'applications et sécurité réseau.", icon: ServiceIcons.Lock },
          { title: "Catalogue d'apps", description: "Distribution d'apps métiers, store privé, versions, licences et mises à jour contrôlées.", icon: ServiceIcons.Box },
          { title: "Sécurisation avancée", description: "Container pro/perso (COPE/COBO), VPN per-app, DLP, détection d'appareils compromis.", icon: ServiceIcons.Cpu },
          { title: "Localisation & actions à distance", description: "Verrouillage, effacement sélectif, réinitialisation et géolocalisation.", icon: ServiceIcons.Globe },
          { title: "Supervision & support", description: "Tableaux de bord, alertes, remédiations, centre de services dédié.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Évaluer mon parc", href: "/contactez-nous", note: "Audit MDM/UEM et recommandations rapides" }}
      />
      <Footer />
    </div>
  );
}