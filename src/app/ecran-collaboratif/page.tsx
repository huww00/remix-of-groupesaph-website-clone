import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Écrans collaboratifs" };

export default function EcranCollaboratifPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="COMMUNICATION & COLLABORATION"
        title="Écrans collaboratifs"
        intro="Modernisez vos salles de réunion et espaces de travail avec des écrans collaboratifs: visio native, annotation, partage sans fil et intégration à vos outils (Teams/Zoom/Meet)."
        highlights={[
          "Salles MTR/Zoom Rooms clés en main",
          "Partage sans fil & BYOD/BYOM",
          "Tableaux blancs, annotation & enregistrement",
        ]}
        features={[
          { title: "Écrans interactifs", description: "Dalles 4K multi‑touch, stylets actifs, tableau blanc et annotation avancée.", icon: ServiceIcons.Smartphone },
          { title: "Salles de réunion Teams", description: "MTR certifiées (caméras, barres son, micros) pour des réunions fluides.", icon: ServiceIcons.Cpu },
          { title: "Interopérabilité", description: "Compatibilité Microsoft Teams, Zoom, Google Meet et solutions SIP/H323.", icon: ServiceIcons.Signal },
          { title: "Partage sans fil", description: "BYOD/BYOM, Miracast/AirPlay/Chromecast, dongles, hub USB et switchs.", icon: ServiceIcons.Wifi },
          { title: "Gestion & MCO", description: "Supervision, mises à jour, sécurité, inventaire et support du parc d'écrans.", icon: ServiceIcons.Settings },
          { title: "Déploiement & adoption", description: "Étude des salles, câblage, installation, scénarios d'usage et formation.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Concevoir ma salle", href: "/contactez-nous", note: "Audit de vos salles et recommandation sous 72h" }}
      />
      <Footer />
    </div>
  );
}