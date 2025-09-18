import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import { ServicePage, ServiceIcons } from "@/components/service-page";

export const metadata = { title: "Équipements reconditionnés" };

export default function ReconditionnesPage() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <ServicePage
        badge="SOLUTIONS MOBILES"
        title="Recyclage & équipements reconditionnés"
        intro="Réduisez vos coûts et votre empreinte carbone en prolongeant la vie de vos équipements. Nous gérons la reprise, l'effacement certifié des données et la fourniture de terminaux reconditionnés garantis."
        highlights={[
          "Jusqu'à -40% vs neuf",
          "Garantie et traçabilité complète",
          "Effacement certifié (RGPD)",
        ]}
        features={[
          { title: "Reprise de parc", description: "Audit, valorisation et collecte de vos anciens smartphones, tablettes et laptops.", icon: ServiceIcons.Box },
          { title: "Effacement certifié", description: "Wipe sécurisé avec certificat, conforme RGPD et normes industrielles.", icon: ServiceIcons.Lock },
          { title: "Reconditionné garanti", description: "Terminaux testés, réparés et garantis, prêts à l'emploi.", icon: ServiceIcons.Smartphone },
          { title: "Économie circulaire", description: "Réduction du TCO et de l'impact environnemental via la seconde vie.", icon: ServiceIcons.Recycle },
          { title: "Préparation & MDM", description: "Provisioning, accessoires, MDM/UEM et mise en service en série.", icon: ServiceIcons.Settings },
          { title: "Reporting & traçabilité", description: "Suivi des numéros de série, lots, états et certificats d'effacement.", icon: ServiceIcons.Cpu },
        ]}
        cta={{ label: "Obtenir un devis", href: "/contactez-nous", note: "Proposition sous 48h avec options de reprise" }}
      />
      <Footer />
    </div>
  );
}