import React from 'react';
import Image from 'next/image';

const SolutionsMobiles = () => {
  return (
    <section className="bg-background py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-24">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-2/5 w-full text-center lg:text-left">
            <h5 className="text-muted-foreground font-semibold text-[14.4px] uppercase tracking-[2px] mb-[9.6px]">
              Vos collaborateurs sont de plus en plus nomades !
            </h5>
            <h2 className="text-foreground font-semibold text-[40px] leading-[52px] mb-5">
              Solutions <span className="text-primary">mobiles</span>
            </h2>
            <div className="text-muted-foreground text-base leading-[27.2px] mb-[21px]">
              <p>
                Nos équipes vous accompagnent dans tous vos projets de mobilité; du choix des forfaits à la configuration et à la sécurisation de vos terminaux mobiles.
                <br />
                Nous proposons également des <a href="https://www.groupesaph.com/flotte-mobile/" className="text-primary hover:underline transition-colors duration-200">services d'infogérance</a> afin que vous puissiez vous affranchir de la gestion au quotidien de vos équipements mobiles !
              </p>
            </div>
            <a 
              href="https://www.groupesaph.com/solutions-mobiles/"
              className="inline-block bg-background border border-foreground text-foreground text-[14.4px] font-semibold py-3 px-7 rounded-[6px] tracking-[0.5px] transition-all duration-200 hover:bg-foreground hover:text-primary-foreground"
            >
              Découvrir
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-3/5 w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/solution-mobiles-scaled.png"
              alt="SAPHELEC, votre intégrateur IT & Télécom en France | Solutions mobiles"
              width={2560}
              height={1598}
              className="w-full h-auto"
              unoptimized
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsMobiles;