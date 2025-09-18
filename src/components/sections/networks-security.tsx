import Image from 'next/image';

const NetworksSecurity = () => {
  return (
    <section className="bg-white py-[50px]">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-5">
            <h5 className="font-poppins text-sm font-medium uppercase tracking-[2px] text-gray-500 mb-[10px]">
              VOTRE RÉSEAU DOIT ÊTRE FIABLE, PERFORMANT ET SÉCURISÉ !
            </h5>
            <h2 className="font-poppins text-[36px] font-semibold text-gray-700 leading-[1.35] mb-5">
              Réseaux et sécurité
            </h2>
            <p className="font-poppins text-base text-gray-600 leading-[27.2px] mb-10">
              Votre réseau est ultra sollicité; vos besoins en bande passante explosent et vos équipes ont besoin d'une connexion sans faille ! Saphelec vous accompagne dans la transformation de votre réseau. Connexion très haut débit, haute disponibilité, VPN de nouvelle génération et solutions de sécurisation des données : nos experts vous accompagnent de l'analyse des besoins à l'installation et au support des solutions !
            </p>
            <a
              href="https://www.groupesaph.com/reseaux-et-securite/"
              className="inline-block py-3 px-7 border border-gray-600 text-gray-600 font-medium text-[15px] rounded-[5px] transition-all duration-300 ease-in-out hover:bg-gray-700 hover:text-white hover:border-gray-700"
            >
              Découvrir
            </a>
          </div>
          <div className="w-full md:w-1/2 md:pl-[50px] mt-12 md:mt-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/40a1aac7-534c-4ee4-86ff-ab172de797c7-groupesaph-com/assets/images/securite-scaled.png"
              alt="SAPHELEC, votre intégrateur IT & Télécom en France | Réseaux et sécurité"
              width={589}
              height={428}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworksSecurity;