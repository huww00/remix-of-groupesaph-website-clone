import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Messagerie et Collaboration" };

export default function MessagerieCollabPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="COMMUNICATION & COLLABORATION"
        title="Messagerie & Collaboration"
        intro="Modernisez vos usages avec Microsoft 365 ou Google Workspace: email sécurisé, chat, visio, co‑édition et gouvernance pour un travail fluide et conforme."
        highlights={[
          "Microsoft 365 / Google Workspace",
          "Sécurité, conformité & gouvernance",
          "Accompagnement adoption & support",
        ]}
        features={[
          { title: "Messagerie sécurisée", description: "Exchange Online / Gmail avec antispam/antivirus avancés, archivage et continuité d'activité.", icon: ServiceIcons.Lock },
          { title: "Visio & chat", description: "Teams / Meet: réunions, webinaires, chat d'équipe, présence et télétravail performant.", icon: ServiceIcons.Signal },
          { title: "Co‑édition & GED", description: "SharePoint, OneDrive, Drive: espaces d'équipe, versions, workflows et recherche.", icon: ServiceIcons.Cpu },
          { title: "Sécurité & DLP", description: "MFA, classification, étiquettes de sensibilité, DLP et chiffrement des données.", icon: ServiceIcons.Settings },
          { title: "Gouvernance & lifecycle", description: "Politiques, rétention, eDiscovery, archivage légal et conformité RGPD.", icon: ServiceIcons.Lock },
          { title: "Adoption & support", description: "Kits de communication, formations, centre de services et monitoring qualité.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Lancer mon projet collaboratif", href: "/contactez-nous", note: "Audit de vos usages et roadmap sous 72h" }}
      />
      <Footer />
    </div>
  );
}