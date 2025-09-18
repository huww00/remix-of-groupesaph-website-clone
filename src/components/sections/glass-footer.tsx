"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassInput } from '@/components/ui/glass-input';

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

const linkColumns = [companyLinks, mobilityLinks, communicationLinks, networkLinks];

const LinkColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
  <div>
    <h4 className="font-semibold text-foreground mb-4 text-lg">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link 
            href={link.href} 
            className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function GlassFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-neon-pink/5 to-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="glass-strong border-t border-glass-border relative z-10">
        <div className="container py-16">
          {/* Newsletter section */}
          <div className="glass rounded-2xl p-8 mb-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Restez informé de nos actualités
              </h3>
              <p className="text-foreground-muted mb-6">
                Recevez nos dernières nouvelles, conseils techniques et invitations à nos webinars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <GlassInput
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1"
                />
                <GlassButton variant="primary" neonGlow className="group">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>S'abonner</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </GlassButton>
              </div>
            </div>
          </div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <Link href="/" className="block mb-6">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/SAPHELEC-SFR-02-scaled-1.png"
                  alt="Logo"
                  width={160}
                  height={21}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-foreground-muted text-sm mb-6 leading-relaxed">
                Intégrateur télécom & IT pour les entreprises. Nous accompagnons nos clients sur l'ensemble du cycle de vie.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="https://www.youtube.com/channel/UCX5eFZOg3m6Vfj7o4iX5T5w" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass rounded-lg p-2 hover:scale-110 transition-transform duration-200 group"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-foreground-muted group-hover:text-red-500 transition-colors" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/saphelec" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass rounded-lg p-2 hover:scale-110 transition-transform duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground-muted group-hover:text-blue-500 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Link columns */}
            {linkColumns.map((col, index) => (
              <LinkColumn key={index} {...col} />
            ))}
          </div>

          {/* Bottom section */}
          <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-foreground-muted text-center md:text-left">
              © 2025 SAPHELEC • 
              <Link href="/legal/cgv" className="hover:text-primary transition-colors ml-1">
                Mentions légales et C.G.V
              </Link> • 
              <Link href="/legal/confidentialite" className="hover:text-primary transition-colors ml-1">
                Charte de confidentialité
              </Link> • 
              <Link href="/credits" className="hover:text-primary transition-colors ml-1">
                Crédits
              </Link>
            </p>
            
            <GlassButton variant="secondary" size="sm">
              <Link href="/centre-de-service">Centre de service</Link>
            </GlassButton>
          </div>
        </div>
      </div>
    </footer>
  );
}