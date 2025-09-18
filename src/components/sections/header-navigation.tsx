"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Youtube, Linkedin, Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const HeaderNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground">
        Passer au contenu
      </a>
      <div className="bg-white text-foreground font-navigation">
        <div className="hidden lg:block bg-gray-50 border-b border-border">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[50px]">
              <div className="flex items-center space-x-3">
                <a href="https://www.youtube.com/channel/UCX5eFZOg3m6Vfj7o4iX5T5w" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-[#FF0000]">
                  <Youtube size={16} />
                </a>
                <a href="https://www.linkedin.com/company/saphelec" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-[#0A66C2]">
                  <Linkedin size={16} />
                </a>
              </div>
              <nav className="flex items-center space-x-6 text-sm">
                {topNavItems.map((item) => (
                  <Link key={item.title} href={item.href} className="font-medium text-gray-600 hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                ))}
                <Button asChild size="sm" className="bg-primary hover:opacity-90 text-primary-foreground text-sm font-medium py-[10px] px-[21px] h-auto rounded-lg">
                  <Link href="/contactez-nous">Contactez-nous</Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>

        <header className="sticky top-0 z-40 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[90px]">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/SAPHELEC-SFR-02-scaled-1.png"
                    alt="Logo"
                    width={200}
                    height={26}
                    priority
                  />
                </Link>
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base font-medium text-foreground hover:text-primary">Solutions Mobiles</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-6 w-[600px] lg:w-[750px] bg-white">
                          <ul className="grid grid-cols-3 gap-y-2 gap-x-8">
                            {solutionsMobilesItems.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link href={item.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm text-gray-700">
                                    {item.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base font-medium text-foreground hover:text-primary">Communication et Collaboration</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-6 w-[600px] lg:w-[750px] bg-white">
                           <ul className="grid grid-cols-3 gap-y-2 gap-x-8">
                            {communicationCollaborationItems.map((item) => (
                                <li key={item.title}>
                                <NavigationMenuLink asChild>
                                    <Link href={item.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm text-gray-700">
                                    {item.title}
                                    </Link>
                                </NavigationMenuLink>
                                </li>
                            ))}
                            </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-base font-medium text-foreground hover:text-primary">Réseaux et sécurité</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-6 w-[600px] lg:w-[750px] bg-white">
                          <ul className="grid grid-cols-3 gap-y-2 gap-x-8">
                            {reseauxSecuriteItems.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link href={item.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-medium text-sm text-gray-700">
                                    {item.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/nos-partenaires-it" legacyBehavior passHref>
                        <NavigationMenuLink className={cn("text-base font-medium text-foreground hover:text-primary", "bg-transparent hover:bg-transparent focus:bg-transparent", "px-4 py-2")}>
                          Nos Partenaires IT
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <Button asChild variant="outline" className="text-base font-semibold border-2 border-primary text-primary rounded-lg py-3 px-8 h-auto hover:bg-primary/10 hover:text-primary">
                  <Link href="/contactez-nous">Contactez Nous</Link>
                </Button>
              </div>

              <div className="lg:hidden">
                <Button onClick={() => setIsMobileMenuOpen(true)} variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white lg:hidden animate-in fade-in-20">
            <div className="p-4">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/SAPHELEC-SFR-02-scaled-1.png"
                    alt="Logo"
                    width={180}
                    height={23.4}
                  />
                </Link>
                <Button onClick={() => setIsMobileMenuOpen(false)} variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Fermer le menu</span>
                </Button>
              </div>

              <nav className="flex flex-col space-y-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="solutions-mobiles">
                    <AccordionTrigger className="text-base font-medium py-3 hover:no-underline">Solutions Mobiles</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-2 pt-2">
                        {solutionsMobilesItems.map((item) => (
                           <Link key={item.title} href={item.href} className="py-2 text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="communication-collaboration">
                    <AccordionTrigger className="text-base font-medium py-3 hover:no-underline">Communication et Collaboration</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-2 pt-2">
                        {communicationCollaborationItems.map((item) => (
                          <Link key={item.title} href={item.href} className="py-2 text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="reseaux-securite">
                    <AccordionTrigger className="text-base font-medium py-3 hover:no-underline">Réseaux et sécurité</AccordionTrigger>
                   <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-2 pt-2">
                        {reseauxSecuriteItems.map((item) => (
                          <Link key={item.title} href={item.href} className="py-2 text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/nos-partenaires-it" className="py-3 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Nos Partenaires IT</Link>
                
                <div className="border-t pt-4 mt-4 space-y-2">
                    {topNavItems.map((item) => (
                        <Link key={item.title} href={item.href} className="block py-2 text-base font-medium text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                     ))}
                </div>
                 <Button asChild className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/contactez-nous">Contactez Nous</Link>
                </Button>

              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderNavigation;