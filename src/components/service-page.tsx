import Link from "next/link";
import { CheckCircle2, ShieldCheck, Smartphone, Wifi, Signal, Headphones, Recycle, Box, Lock, Settings, Globe2, Cpu } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export interface ServicePageProps {
  badge: string;
  title: string;
  intro: string;
  highlights?: string[];
  features: Feature[];
  cta?: {
    label: string;
    href: string;
    note?: string;
  };
}

export const ServicePage = ({ badge, title, intro, highlights = [], features, cta = { label: "Contactez-nous", href: "/contact" } }: ServicePageProps) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white border-b">
        <div className="container py-14 md:py-20">
          <p className="text-sm font-medium tracking-wide text-red-700 mb-3">{badge}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 max-w-3xl text-gray-600">{intro}</p>

          {highlights.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-red-700 mt-0.5" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg bg-red-50 text-red-700 p-2">
                  {f.icon ?? <ShieldCheck className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700">{f.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t">
        <div className="container py-12 md:py-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Parlons-en avec un expert</h2>
              <p className="text-gray-600 mt-2 max-w-2xl">Nos équipes vous accompagnent du cadrage à l'exploitation pour garantir performance, sécurité et maîtrise des coûts.</p>
              {cta.note && <p className="text-gray-500 text-sm mt-1">{cta.note}</p>}
            </div>
            <Link href={cta.href} className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white font-medium px-6 py-3 hover:bg-red-700 transition-colors">{cta.label}</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

// Handy default icons to reuse in pages
export const ServiceIcons = {
  Smartphone: <Smartphone className="h-5 w-5" />,
  Wifi: <Wifi className="h-5 w-5" />,
  Signal: <Signal className="h-5 w-5" />,
  Support: <Headphones className="h-5 w-5" />,
  Recycle: <Recycle className="h-5 w-5" />,
  Box: <Box className="h-5 w-5" />,
  Lock: <Lock className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
  Globe: <Globe2 className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
};