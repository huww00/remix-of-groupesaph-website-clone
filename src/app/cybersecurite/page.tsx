import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Cybersécurité" };

export default function CybersecuritePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="RÉSEAUX & SÉCURITÉ"
        title="Cybersécurité"
        intro="Protégez vos utilisateurs, vos données et vos infrastructures contre les menaces modernes. De la sécurité périmétrique au poste de travail en passant par l'identité, nous bâtissons une défense en profondeur."
        highlights={[
          "Pare-feu NGFW & filtrage DNS",
          "EDR/XDR & anti‑ransomware",
          "MFA, SSO & gestion des identités",
        ]}
        features={[
          { title: "Sécurité périmétrique", description: "Pare‑feu nouvelle génération managés: IPS/IDS, filtrage web/DNS, sandboxing et politiques segmentées.", icon: ServiceIcons.Lock },
          { title: "Protection des endpoints", description: "EDR/XDR, anti‑ransomware, remédiation automatisée et visibilité centralisée.", icon: ServiceIcons.Cpu },
          { title: "Identité & accès (IAM)", description: "MFA, SSO, gestion des identités et des privilèges, politiques Zero Trust.", icon: ServiceIcons.Settings },
          { title: "Sécurisation email", description: "Anti‑phishing, DMARC, DKIM, SPF, sandbox pièces jointes et formation à l'hameçonnage.", icon: ServiceIcons.Signal },
          { title: "Sauvegarde & reprise", description: "Backups chiffrés, immutables et plans de reprise d'activité testés (PRA/PCI).", icon: ServiceIcons.Box },
          { title: "Supervision & MCO", description: "Monitoring 24/7, SOC partenaire, alertes, rapports de conformité et accompagnement.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Évaluer ma posture sécurité", href: "/contactez-nous", note: "Audit de maturité et plan d'actions sous 72h" }}
      />
      <Footer />
    </div>
  );
}