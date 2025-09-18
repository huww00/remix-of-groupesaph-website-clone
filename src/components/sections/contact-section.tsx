"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text and Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold text-foreground mb-5">
              Besoin de conseils ?
            </h2>
            <p className="text-base text-muted-foreground mb-[30px] leading-relaxed">
              Vous avez une question ou un projet ? Vous souhaitez un interlocuteur unique pour accompagner votre entreprise dans tous vos projets IT & Télécom ? Notre mission est de vous simplifier l'accès aux nouvelles technologies. Remplissez le formulaire de contact ci-dessous, nous répondrons en moins de 24h. Vous pouvez également nous contacter par téléphone ou Chat !
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium text-sm">Votre nom</Label>
                  <Input id="name" type="text" className="mt-1 bg-secondary p-[14px] h-auto text-base rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium text-sm">Nom de votre entreprise</Label>
                  <Input id="company" type="text" className="mt-1 bg-secondary p-[14px] h-auto text-base rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium text-sm">E-mail</Label>
                  <Input id="email" type="email" className="mt-1 bg-secondary p-[14px] h-auto text-base rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium text-sm">Téléphone</Label>
                  <Input id="phone" type="tel" className="mt-1 bg-secondary p-[14px] h-auto text-base rounded-md" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground font-medium text-sm">Notes (facultatif)</Label>
                <Textarea id="notes" className="mt-1 bg-secondary p-[14px] text-base rounded-md" rows={4} />
              </div>

              <div>
                <Button 
                  type="submit" 
                  className="w-auto bg-primary hover:opacity-90 text-primary-foreground font-bold uppercase tracking-[1px] text-[15px] py-[15px] px-[38px] rounded-md h-auto transition-colors duration-200"
                >
                  ENVOYER
                </Button>
              </div>
            </form>

            <p className="text-[11px] text-muted-foreground italic mt-5">
              Ne partagez jamais d'informations sensibles (numéros de carte de crédit, numéros de sécurité sociale, mots de passe) par le biais de ce formulaire.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/contactez-nous-scaled.png"
              alt="Contactez-nous pour toutes vos demandes relative à votre communication unifiée : coordonnés support, Agence la plus proche , ligne directe !"
              width={570}
              height={380}
              className="w-full h-auto max-w-[570px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;