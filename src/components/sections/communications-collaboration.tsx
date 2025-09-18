import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CommunicationsCollaboration() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/Communication-et-Collaboration-1-scaled-13.png"
              alt="SAPHELEC, votre intégrateur IT & Télécom en France | Communications unifiées"
              width={2560}
              height={1620}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              LES MÉTHODES DE TRAVAIL ÉVOLUENT !
            </h5>
            <h2 className="text-4xl font-semibold text-dark-gray mb-5 leading-tight">
              Communications unifiées et
              <br />
              <span className="text-primary">collaboration</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Télétravail, nomadisme, travail hybride… vos besoins et usages évoluent ! Saphelec vous accompagne dans la mise en place des solutions de communication dont vous avez besoin. Chat, Visio, Softphonie, Interconnexion avec vos outils métier… Quels que soient vos besoins, nos équipes ont surement une solution adaptée à vous proposer. Ils vous accompagnent de l’analyse des besoins à l’installation de la solution.
            </p>
            <Link href="https://www.groupesaph.com/communications-et-collaboration/">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 text-base font-medium rounded-md h-auto transition-colors duration-300"
                style={{ borderWidth: '1.5px', padding: '10.5px 23.5px' }}
              >
                Découvrir
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}