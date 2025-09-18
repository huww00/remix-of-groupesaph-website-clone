"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';

export default function GlassHeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-neon-purple/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="scroll-reveal mb-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Intégrateur télécom & IT pour l'entreprise</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="scroll-reveal mb-6">
            <h1 className="text-gradient mb-4">
              Faites de votre infrastructure
            </h1>
            <h1 className="text-foreground">
              un avantage compétitif
            </h1>
          </div>

          {/* Subtext */}
          <div className="scroll-reveal mb-10">
            <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              Conception, déploiement et infogérance de solutions mobiles, communications unifiées et réseaux sécurisés avec une approche moderne et innovante.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlassButton 
              variant="primary" 
              size="lg" 
              neonGlow
              className="group"
            >
              <span>Demander un devis</span>
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </GlassButton>
            
            <GlassButton 
              variant="secondary" 
              size="lg"
            >
              Voir nos partenaires
            </GlassButton>
          </div>

          {/* Stats */}
          <div className="scroll-reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '+15', label: 'années d\'expertise' },
              { value: '24/7', label: 'support et supervision' },
              { value: '500+', label: 'entreprises accompagnées' },
              { value: '99.9%', label: 'SLA opérés' },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="glass rounded-full p-2 animate-bounce">
          <div className="w-1 h-6 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}