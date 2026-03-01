import type { Metadata } from 'next';
import {
  CheckCircle2,
  Monitor,
  Clock,
  Lightbulb,
  HeartHandshake,
} from 'lucide-react';
import BookingFormGesprek from './BookingFormGesprek';
import SiteLayout from '@/components/layout/SiteLayout';
import { getContent, type BannerContent } from '@/lib/content';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Gratis Kennismakingsgesprek | Vrijblijvend sparren | COBIZ',
  description:
    '1 uur vrijblijvend sparren over jouw financiële uitdagingen. Online of fysiek in Dendermonde. Eerlijk advies, geen verplichtingen.',
  alternates: { canonical: '/gratis-gesprek' },
  openGraph: {
    title: 'Gratis Kennismakingsgesprek | COBIZ',
    description: '1 uur vrijblijvend sparren over jouw financiële situatie. Online of fysiek.',
  },
};

const benefits = [
  {
    Icon: CheckCircle2,
    text: 'Geen verplichtingen, puur vrijblijvend',
  },
  {
    Icon: Monitor,
    text: 'Online of fysiek in het COBIZ-center',
  },
  {
    Icon: Clock,
    text: '1 uur persoonlijke aandacht',
  },
  {
    Icon: Lightbulb,
    text: 'Direct bruikbare tips en inzichten',
  },
  {
    Icon: HeartHandshake,
    text: 'Eerlijk advies over jouw situatie',
  },
];

export default async function GratisGesprekPage() {
  const banner = await getContent<BannerContent>('banners', 'gratis-gesprek');

  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {banner.title}
          </h1>
          <p className="text-base text-white/80 md:text-lg lg:text-xl">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* ── Content: Benefits + Form ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Benefits */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-cobiz-dark sm:mb-8 sm:text-2xl">
                Wat mag je verwachten?
              </h2>

              <div className="space-y-4 sm:space-y-5">
                {benefits.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobiz-green/10 sm:h-10 sm:w-10">
                      <Icon className="h-4.5 w-4.5 text-cobiz-green sm:h-5 sm:w-5" />
                    </div>
                    <p className="pt-1.5 text-base text-gray-700 sm:pt-2 sm:text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <h2 className="mb-5 text-xl font-bold text-cobiz-dark sm:mb-6 sm:text-2xl">
                Plan je gesprek
              </h2>
              <BookingFormGesprek />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
