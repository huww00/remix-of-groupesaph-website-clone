import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Téléphonie 3CX" };

export default function Telephonie3CXPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="COMMUNICATION & COLLABORATION"
        title="Téléphonie 3CX"
        intro="IPBX logiciel flexible, économique et riche en fonctionnalités. Déployez 3CX on‑premise ou en cloud avec softphones, mobilité et intégrations natives."
        highlights={[
          "On‑premise ou cloud",
          "Softphones PC/Mobile inclus",
          "Files, SVI, enregistrements",
        ]}
        features={[
          { title: "IPBX logiciel", description: "Pilotage complet de la téléphonie: numérotation, SVI, files d'attente, enregistrement d'appels.", icon: ServiceIcons.Settings },
          { title: "Clients & mobilité", description: "Apps desktop/mobile, WebRTC, présence et appels depuis n'importe où.", icon: ServiceIcons.Smartphone },
          { title: "Interopérabilité", description: "SIP trunks opérateurs, passerelles, casques et téléphones IP certifiés.", icon: ServiceIcons.Signal },
          { title: "Contact Center", description: "Supervision, wallboards, statistiques, rappels automatiques et files avancées.", icon: ServiceIcons.Cpu },
          { title: "Sécurité & sauvegarde", description: "Chiffrement, sauvegardes planifiées, mises à jour et durcissement.", icon: ServiceIcons.Lock },
          { title: "Exploit & support", description: "Supervision quotidienne, changements, assistance et accompagnement adoption.", icon: ServiceIcons.Support },
        ]}
        cta={{ label: "Démo 3CX", href: "/contactez-nous", note: "Scénario personnalisé sous 72h" }}
      />
      <Footer />
    </div>
  );
}