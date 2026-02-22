import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, FileText, GraduationCap, MessageCircle } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Diensten | COBIZ',
  description:
    'Van quick scan tot strategische begeleiding. Ontdek de diensten van COBIZ: Workshop Stuurcijfers, Groeirapport, Opleidingstraject en gratis kennismakingsgesprek.',
};

interface ServiceCard {
  Icon: React.ComponentType<{ className?: string }>;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
}

const services: ServiceCard[] = [
  {
    Icon: BarChart3,
    badge: 'START MEI',
    badgeClass: 'badge badge-green',
    title: 'Workshop Stuurcijfers',
    description:
      'In 4,5 uur van cijferchaos naar grip op je cijfers',
    price: '\u20AC125 incl. BTW',
    ctaLabel: 'MEER INFO',
    ctaHref: '/workshop-stuurcijfers',
  },
  {
    Icon: FileText,
    badge: 'POPULAIR',
    badgeClass: 'badge badge-yellow',
    title: 'Groeirapport',
    description:
      'Volledige financi\u00eble doorlichting met actieplan',
    price: '\u20AC1.500 excl. BTW',
    ctaLabel: 'MEER INFO',
    ctaHref: '/groeirapport',
  },
  {
    Icon: GraduationCap,
    badge: 'SEPTEMBER 2025',
    badgeClass: 'badge badge-coral',
    title: 'Opleidingstraject',
    description:
      '4-daags intensief traject voor diepgaande financi\u00eble sturing',
    price: 'Prijs op aanvraag',
    ctaLabel: 'MEER INFO',
    ctaHref: '/opleidingstraject',
  },
  {
    Icon: MessageCircle,
    badge: '',
    badgeClass: '',
    title: 'Gratis Kennismakingsgesprek',
    description:
      '1 uur vrijblijvend sparren over jouw situatie',
    price: 'Gratis',
    ctaLabel: 'PLAN GESPREK',
    ctaHref: '/gratis-gesprek',
  },
];

export default function DienstenPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-cobiz-dark md:text-5xl lg:text-6xl">
            Onze Diensten
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Van quick scan tot strategische begeleiding &mdash; altijd op maat
            van jouw KMO
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-3d flex flex-col rounded-2xl border border-gray-200 bg-white p-8"
              >
                {/* Badge */}
                <div className="mb-4 min-h-[1.5rem]">
                  {service.badge && (
                    <span className={service.badgeClass}>{service.badge}</span>
                  )}
                </div>

                {/* Icon + Title */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cobiz-green/10">
                    <service.Icon className="h-6 w-6 text-cobiz-green" />
                  </div>
                  <h2 className="text-xl font-bold text-cobiz-dark">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-gray-600">
                  {service.description}
                </p>

                {/* Price */}
                <p className="mb-6 text-2xl font-bold text-cobiz-dark">
                  {service.price}
                </p>

                {/* CTA */}
                <Link
                  href={service.ctaHref}
                  className="btn-primary w-full"
                >
                  {service.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-cobiz-dark md:text-4xl">
            Onze aanpak
          </h2>
          <p className="text-lg text-gray-700">
            We combineren 20 jaar financi&euml;le expertise met hands-on
            ondernemerservaring. Geen dure consultants die een rapport
            achterlaten, maar praktische begeleiding die resultaat oplevert.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#133F3E' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(26,86,84,0.6) 0%, transparent 70%)' }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Niet zeker welke dienst bij jou past?
          </h2>
          <Link href="/gratis-gesprek" className="btn-white">
            PLAN EEN GRATIS GESPREK
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
