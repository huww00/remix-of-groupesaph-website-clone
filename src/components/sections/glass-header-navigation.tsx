"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GlassButton } from "@/components/ui/glass-button";
import { cn } from "@/lib/utils";

const topNavItems = [
  { title: "Le groupe", href: "/about" },
  { title: "Rejoins-nous !", href: "/recrutement" },
  { title: "SFR Business", href: "/sfr-business" },
  { title: "Partenaires", href: "/partenaires-it" },
  { title: "Webinars", href: "/webinars" },
];

const solutionsMobilesItems = [
  { title: "Téléphonie Mobile", href: "/telephonie-mobile" },
  { title: "Internet mobile", href: "/internet-mobile" },
  { title: "Gestion et sécurité des terminaux mobiles", href: "/gestion-et-securite-des-terminaux-mobiles" },
  { title: "Location de smartphone", href: "/location-de-smartphone" },
  { title: "Recyclage et équipements reconditionnés", href: "/equipements-reconditionnes" },
  { title: "Infogérance mobile", href: "/flotte-mobile" },
];

const communicationCollaborationItems = [
  { title: "Téléphonie Hébergée SFR", href: "/telephonie-hebergee-sfr" },
  { title: "Téléphonie Teams", href: "/telephonie-teams" },
  { title: "Téléphonie 3CX", href: "/telephonie-3cx" },
  { title: "Écran collaboratif", href: "/ecran-collaboratif" },
  { title: "Messagerie et Collaboration", href: "/messagerie-et-collaboration" },
];

const reseauxSecuriteItems = [
  { title: "Accès Internet", href: "/acces-internet" },
  { title: "Réseaux VPN et SD-WAN", href: "/reseaux-vpn-et-sd-wan" },
  { title: "Cybersécurité", href: "/cybersecurite" },
  { title: "Solutions WiFi", href: "/solutions-wifi" },
];

export default function GlassHeaderNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DropdownMenu = ({ 
    title, 
    items, 
    isActive 
  }: { 
    title: string; 
    items: typeof solutionsMobilesItems; 
    isActive: boolean;
  }) => (
    <div className="relative group">
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300",
          "hover:bg-glass-light text-foreground font-medium",
          isActive && "bg-glass-light"
        )}
        onMouseEnter={() => setActiveDropdown(title)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {title}
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform duration-200",
          isActive && "rotate-180"
        )} />
      </button>
      
      {isActive && (
        <div 
          className="absolute top-full left-0 mt-2 w-80 glass-strong rounded-xl p-4 z-50 animate-glass-fade-in"
          onMouseEnter={() => setActiveDropdown(title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block p-3 rounded-lg hover:bg-glass-light transition-all duration-200 group"
              >
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground">
        Passer au contenu
      </a>
      
      <div className="font-navigation">
        {/* Top bar - hidden on mobile */}
        <div className="hidden lg:block border-b border-glass-border">
          <div className="container">
            <div className="flex justify-between items-center h-12">
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
              <nav className="flex items-center space-x-6 text-sm">
                {topNavItems.map((item) => (
                  <Link 
                    key={item.title} 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
                <GlassButton variant="primary" size="sm">
                  <Link href="/contactez-nous">Contactez-nous</Link>
                </GlassButton>
              </nav>
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          isScrolled ? "glass-strong" : "bg-transparent"
        )}>
          <div className="container">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="block">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/SAPHELEC-SFR-02-scaled-1.png"
                    alt="Logo"
                    width={200}
                    height={26}
                    priority
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2">
                <DropdownMenu
                  title="Solutions Mobiles"
                  items={solutionsMobilesItems}
                  isActive={activeDropdown === "Solutions Mobiles"}
                />
                <DropdownMenu
                  title="Communication & Collaboration"
                  items={communicationCollaborationItems}
                  isActive={activeDropdown === "Communication & Collaboration"}
                />
                <DropdownMenu
                  title="Réseaux & Sécurité"
                  items={reseauxSecuriteItems}
                  isActive={activeDropdown === "Réseaux & Sécurité"}
                />
                <Link 
                  href="/nos-partenaires-it"
                  className="px-4 py-2 rounded-lg hover:bg-glass-light text-foreground font-medium transition-all duration-300"
                >
                  Nos Partenaires IT
                </Link>
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <GlassButton variant="primary" neonGlow>
                  <Link href="/contactez-nous">Contactez Nous</Link>
                </GlassButton>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center gap-4">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="glass-button p-3"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 h-full w-80 glass-strong animate-glass-slide-up">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/SAPHELEC-SFR-02-scaled-1.png"
                      alt="Logo"
                      width={160}
                      height={21}
                      className="h-6 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="glass-button p-2"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fermer le menu</span>
                  </button>
                </div>

                <nav className="space-y-4">
                  {/* Mobile menu items would go here */}
                  <div className="space-y-2">
                    {topNavItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block p-3 rounded-lg hover:bg-glass-light transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <GlassButton variant="primary" className="w-full justify-center">
                      <Link href="/contactez-nous" onClick={() => setIsMobileMenuOpen(false)}>
                        Contactez Nous
                      </Link>
                    </GlassButton>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}