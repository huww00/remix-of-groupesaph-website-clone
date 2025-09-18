"use client";

import React, { useEffect, useRef } from 'react';
import { Smartphone, MessageSquare, Shield, Zap, Users, Award } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const features = [
  {
    icon: Smartphone,
    title: "Solutions Mobiles",
    description: "Équipez, sécurisez et pilotez la mobilité de vos collaborateurs avec nos solutions complètes.",
    color: "from-neon-blue to-neon-purple"
  },
  {
    icon: MessageSquare,
    title: "Communications Unifiées",
    description: "Modernisez vos méthodes de travail avec téléphonie cloud, visio et collaboration intégrée.",
    color: "from-neon-purple to-neon-pink"
  },
  {
    icon: Shield,
    title: "Réseaux & Sécurité",
    description: "Transformez votre réseau avec haut-débit, haute disponibilité et cybersécurité avancée.",
    color: "from-neon-pink to-neon-green"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "SLA de 99,9% avec supervision 24/7 et support réactif pour garantir la continuité.",
    color: "from-neon-green to-neon-blue"
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Plus de 15 années d'expérience au service de 500+ entreprises accompagnées.",
    color: "from-neon-blue to-neon-purple"
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Satisfaction client de 4,8/5 avec des standards élevés de qualité et de sécurité.",
    color: "from-neon-purple to-neon-pink"
  }
];

export default function GlassFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/5 to-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-neon-pink/5 to-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-reveal mb-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span>Nos expertises</span>
            </div>
          </div>
          
          <div className="scroll-reveal mb-6">
            <h2 className="text-gradient mb-4">
              Une expertise complète
            </h2>
            <h2 className="text-foreground">
              pour votre transformation digitale
            </h2>
          </div>
          
          <div className="scroll-reveal">
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Nous accompagnons votre entreprise dans tous ses projets IT & Télécom avec une approche moderne et des solutions innovantes.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <GlassCard className="h-full group">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon with gradient background */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal text-center mt-16">
          <div className="glass-strong rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Prêt à transformer votre infrastructure ?
            </h3>
            <p className="text-foreground-muted mb-6">
              Nos experts vous accompagnent dans la définition de vos besoins et la mise en œuvre de solutions adaptées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button-primary">
                Demander une consultation
              </button>
              <button className="glass-button-secondary">
                Découvrir nos références
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}