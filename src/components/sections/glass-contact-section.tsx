"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { GlassInput, GlassTextarea } from '@/components/ui/glass-input';
import { GlassButton } from '@/components/ui/glass-button';

export default function GlassContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue de l'Innovation", "75001 Paris, France"],
      color: "from-neon-blue to-neon-purple"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "Support 24/7"],
      color: "from-neon-purple to-neon-pink"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@saphelec.com", "support@saphelec.com"],
      color: "from-neon-pink to-neon-green"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 8h - 18h", "Support: 24h/24"],
      color: "from-neon-green to-neon-blue"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-neon-pink/10 to-neon-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-reveal mb-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Send className="h-4 w-4 text-primary" />
              <span>Contactez-nous</span>
            </div>
          </div>
          
          <div className="scroll-reveal mb-6">
            <h2 className="text-gradient mb-4">
              Besoin de conseils ?
            </h2>
            <h2 className="text-foreground">
              Parlons de votre projet
            </h2>
          </div>
          
          <div className="scroll-reveal">
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Vous avez une question ou un projet ? Notre mission est de vous simplifier l'accès aux nouvelles technologies. Nous répondons en moins de 24h.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-reveal">
            <GlassCard variant="strong" hover={false}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Envoyez-nous un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassInput
                    label="Votre nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                  <GlassInput
                    label="Entreprise"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Votre entreprise"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                  <GlassInput
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <GlassTextarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet ou vos besoins..."
                  rows={5}
                />

                <GlassButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  neonGlow
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </GlassButton>
              </form>

              <p className="text-xs text-muted-foreground mt-4 italic">
                Ne partagez jamais d'informations sensibles par le biais de ce formulaire.
              </p>
            </GlassCard>
          </div>

          {/* Contact Information */}
          <div className="scroll-reveal space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Informations de contact
              </h3>
              <p className="text-foreground-muted">
                Plusieurs moyens de nous contacter selon vos préférences.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <GlassCard key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground-muted text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Map placeholder */}
            <GlassCard hover={false}>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-neon-purple/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-foreground-muted">Carte interactive</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}