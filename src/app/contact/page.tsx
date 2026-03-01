import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Contact | COBIZ Dendermonde | Financieel advies voor KMO\'s',
  description:
    'Neem contact op met COBIZ in Dendermonde. Bel +32 475 54 49 52, mail info@cobiz.be of plan een gratis kennismakingsgesprek.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | COBIZ',
    description: 'Neem contact op met COBIZ. Hoogveld 105, 9200 Dendermonde.',
  },
};

const contactInfo = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'info@cobiz.be',
    href: 'mailto:info@cobiz.be',
  },
  {
    Icon: Phone,
    label: 'Telefoon',
    value: '+32 475 54 49 52',
    href: 'tel:+32475544952',
  },
  {
    Icon: MapPin,
    label: 'Locatie',
    value: 'Hoogveld 105, 9200 Dendermonde',
    href: null,
  },
  {
    Icon: Clock,
    label: 'Openingsuren',
    value: 'Op afspraak',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Neem contact op
          </h1>
          <p className="text-base text-cobiz-dark md:text-lg lg:text-xl">
            We horen graag van je
          </p>
        </div>
      </section>

      {/* ── Content: Form + Contact Info ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Form */}
            <div>
              <h2 className="mb-5 text-xl font-bold text-cobiz-dark sm:mb-6 sm:text-2xl">
                Stuur ons een bericht
              </h2>
              <ContactForm />
            </div>

            {/* Right column - Contact info */}
            <div>
              <h2 className="mb-5 text-xl font-bold text-cobiz-dark sm:mb-6 sm:text-2xl">
                Contactgegevens
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10 sm:h-10 sm:w-10">
                      <Icon className="h-4.5 w-4.5 text-cobiz-green sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 sm:text-sm">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-semibold text-cobiz-dark transition-colors hover:text-cobiz-green sm:text-base"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-cobiz-dark sm:text-base">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center rounded-2xl bg-gray-200 px-8 py-16 sm:py-24">
            <p className="text-base font-medium text-gray-500 sm:text-lg">
              Google Maps - Binnenkort beschikbaar
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
