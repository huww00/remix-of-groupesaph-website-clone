"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-rose-500" />
      <div className="absolute inset-0 opacity-15" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-28 sm:py-36 text-center text-white">
        <p className="uppercase tracking-[3px] text-sm/none text-white/90">Solutions Télécom & IT pour l'entreprise</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold max-w-5xl mx-auto">
          Faites de votre infrastructure un avantage compétitif
        </h1>
        <p className="mt-5 text-white/90 max-w-2xl mx-auto">
          Conception, déploiement et infogérance de solutions mobiles, communications unifiées et réseaux sécurisés.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-red-600 font-semibold px-6 py-3 hover:opacity-90 transition">Demander un devis</a>
          <a href="/partenaires-it" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white border border-white/30 font-semibold px-6 py-3 hover:bg-white/15 transition">Voir nos partenaires</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;