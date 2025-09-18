import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Location de smartphone" };

export default function LocationSmartphonePage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="SOLUTIONS MOBILES"
        title="Location de smartphone"
        intro="Passez d'un modèle CAPEX à OPEX: accédez aux derniers smartphones avec services inclus (assurance, SAV, remplacement) et un budget prévisible."
        highlights={[
          "Parc toujours à jour (iOS/Android)",
          "Assistance, casse/vol, remplacement J+1",
          "Reprise & effacement certifié en fin de bail",
        ]}
        features={[
          { title: "Catalogue multi‑marques", description: "Apple, Samsung, Google… choix des capacités et des gammes selon les profils.", icon: ServiceIcons.Smartphone },
          { title: "Pack services inclus", description: "Assurance, accessoires, MDM/UEM, préparation et mise en service.", icon: ServiceIcons.Settings },
          { title: "Budget maîtrisé", description: "Mensualités fixes, visibilité pluriannuelle et optimisation TCO.", icon: ServiceIcons.Cpu },
          { title: "SAV & remplacement", description: "Prise en charge rapide, prêt/échange express pour limiter l'immobilisation.", icon: ServiceIcons.Support },
          { title: "Fin de vie responsable", description: "Reprise, reconditionnement, recyclage avec effacement de données certifié.", icon: ServiceIcons.Recycle },
          { title: "Pilotage centralisé", description: "Suivi du parc, fin de contrats, renouvellements et rapports de coûts.", icon: ServiceIcons.Lock },
        ]}
        cta={{ label: "Demander une offre", href: "/contactez-nous", note: "Étude et chiffrage sous 48h" }}
      />
      <Footer />
    </div>
  );
}