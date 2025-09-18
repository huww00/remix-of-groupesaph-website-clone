import React from 'react';

const ClientTestimonials = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold text-gray-700 mb-[31px]">
            Découvrez les témoignages de nos clients
          </h2>
          <a
            href="https://trustfolio.co/profil/saphelec-e7j99LmWS?utm_medium=widget&utm_source=endorsements-infinite-slider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 no-underline hover:underline"
          >
            <strong className="font-bold">24</strong> avis et témoignages clients authentifiés par Trustfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;