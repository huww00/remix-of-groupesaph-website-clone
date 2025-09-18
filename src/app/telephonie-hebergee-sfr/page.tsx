import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Téléphonie Hébergée SFR" };

export default function HebergeeSFRPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="COMMUNICATION & COLLABORATION"
        title="Téléphonie Hébergée SFR"
        intro="Passez à une téléphonie 100% cloud (Centrex) avec la fiabilité SFR Business : fonctionnalités avancées, mobilité native et administration simplifiée."
        highlights={[
          "Sans PABX sur site, haute disponibilité",
          "Softphones PC/Mobile et téléphones IP",
          "Numérotation, files d'attente, SVI, enregistrements",
        ]}
        features={[
          { title: "Fonctionnalités riches", description: "SVI, files d'attente, supervision, groupes d'appels, enregistrement et statistiques.", icon: ServiceIcons.Settings },
          { title: "Postes & softphones", description: "Téléphones IP, casques, applications desktop/mobile pour travailler partout.", icon: ServiceIcons.Smartphone },
          { title: "Mobilité & télétravail", description: "Accès sécurisé depuis n'importe où, continuité d'activité et qualité voix.", icon: ServiceIcons.Globe },
          { title: "Intégration Microsoft 365", description: "Connecteurs et présence unifiée pour un poste de travail moderne.", icon: ServiceIcons.Cpu },
          { title: "SLA opérés", description: "Supervision proactive, haute dispo et support de notre centre de services.", icon: ServiceIcons.Support },
          { title: "Pilotage centralisé", description: "Administration des utilisateurs, plans de numérotation et droits depuis un portail.", icon: ServiceIcons.Lock },
        ]}
        cta={{ label: "Planifier une démo", href: "/contactez-nous", note: "Présentation personnalisée sous 48h" }}
      />
      <Footer />
    </div>
  );
}