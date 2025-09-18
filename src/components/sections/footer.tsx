import Image from 'next/image';
import { Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const companyLinks = {
  title: 'Notre entreprise',
  links: [
    { name: 'Le groupe', href: '/about' },
    { name: 'Recrutement', href: '/recrutement' },
    { name: 'Nos partenaires', href: '/partenaires-it' },
    { name: 'Nos webinars', href: '/webinars' },
    { name: 'Contactez-nous', href: '/contact' },
  ],
};

const mobilityLinks = {
  title: 'Mobilité',
  links: [
    { name: 'Téléphonie mobile', href: '/telephonie-mobile' },
    { name: 'Internet mobile', href: '/internet-mobile' },
    { name: 'Gestion et sécurité des terminaux mobiles', href: '/gestion-et-securite-des-terminaux-mobiles' },
    { name: 'Location de smartphone', href: '/location-de-smartphone' },
    { name: 'Recyclage et équipements reconditionnés', href: '/equipements-reconditionnes' },
    { name: 'Infogérance Mobile', href: '/flotte-mobile' },
  ],
};

const communicationLinks = {
  title: 'Communication et collaborations',
  links: [
    { name: 'Téléphonie Hébergée SFR', href: '/telephonie-hebergee-sfr' },
    { name: 'Téléphonie Teams', href: '/telephonie-teams' },
    { name: 'Téléphonie 3CX', href: '/telephonie-3cx' },
    { name: 'Visio et écran collaboratif', href: '/ecran-collaboratif' },
    { name: 'Messagerie et Collaboration', href: '/messagerie-et-collaboration' },
    { name: 'Saphelec Studio', href: '/studio' },
  ],
};

const networkLinks = {
  title: 'Réseaux et sécurité',
  links: [
    { name: 'Accès internet', href: '/acces-internet' },
    { name: 'Réseaux VPN et SD-WAN', href: '/reseaux-vpn-et-sd-wan' },
    { name: 'Cybersécurité', href: '/cybersecurite' },
    { name: 'Solutions WiFi', href: '/solutions-wifi' },
  ],
};

const supportLinks = {
  title: 'Support',
  links: [
    { name: "Guide d'utilisation IdeaHub", href: '/guides/ideahub' },
    { name: "Guide d'utilisation eSIM", href: '/guides/esim' },
  ],
};

const linkColumns = [companyLinks, mobilityLinks, communicationLinks, networkLinks];

const LinkColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
  <div>
    <p className="font-medium text-foreground_darker border-b-2 border-primary pb-3 mb-4 inline-block text-[15px] leading-[22.5px]">
      {title}
    </p>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-muted-foreground hover:text-primary text-sm leading-relaxed">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {linkColumns.map((col) => (
            <LinkColumn key={col.title} {...col} />
          ))}
          <div>
            <LinkColumn {...supportLinks} />
            <div className="mt-8">
              <p className="font-medium text-foreground_darker border-b-2 border-primary pb-3 mb-4 inline-block text-[15px] leading-[22.5px]">
                Nous suivre
              </p>
              <div className="flex space-x-2">
                <a href="https://www.youtube.com/channel/UCX5eFZOg3m6Vfj7o4iX5T5w" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary">
                  <span className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded">
                    <Youtube size={16} />
                  </span>
                </a>
                <a href="https://www.linkedin.com/company/saphelec" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                  <span className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded">
                    <Linkedin size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground text-center md:text-left order-2 md:order-1">
            © 2025 Votre Entreprise • <a href="/legal/cgv" className="hover:text-primary">Mentions légales et C.G.V</a> • <a href="/legal/confidentialite" className="hover:text-primary">Charte de confidentialité</a> • <a href="/credits" className="hover:text-primary">Crédits</a>
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-full px-5 py-2 h-auto text-xs font-semibold"
              asChild
            >
              <a href="/centre-de-service">Centre de service</a>
            </Button>
            <a href="/" aria-label="Accueil">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/SAPHELEC-SFR-02-scaled-1.png"
                alt="Logo"
                width={160}
                height={21}
                className="h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;