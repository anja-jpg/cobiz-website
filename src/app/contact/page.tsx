import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Contact | COBIZ',
  description:
    'Neem contact op met COBIZ. Stuur ons een bericht of plan een gratis kennismakingsgesprek.',
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
    value: 'COBIZ-center, regio Antwerpen',
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
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-cobiz-dark md:text-5xl lg:text-6xl">
            Neem contact op
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            We horen graag van je
          </p>
        </div>
      </section>

      {/* ── Content: Form + Contact Info ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-cobiz-dark">
                Stuur ons een bericht
              </h2>
              <ContactForm />
            </div>

            {/* Right column - Contact info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-cobiz-dark">
                Contactgegevens
              </h2>

              <div className="space-y-6">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10">
                      <Icon className="h-5 w-5 text-cobiz-green" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-semibold text-cobiz-dark transition-colors hover:text-cobiz-green"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-cobiz-dark">{value}</p>
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
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center rounded-2xl bg-gray-200 px-8 py-24">
            <p className="text-lg font-medium text-gray-500">
              Google Maps - Binnenkort beschikbaar
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
