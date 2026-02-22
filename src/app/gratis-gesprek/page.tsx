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

export const metadata: Metadata = {
  title: 'Gratis Kennismakingsgesprek | COBIZ',
  description:
    '1 uur vrijblijvend sparren over jouw financiële uitdagingen. Online of fysiek in het COBIZ-center.',
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

export default function GratisGesprekPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-cobiz-dark md:text-5xl lg:text-6xl">
            Gratis Kennismakingsgesprek
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            1 uur vrijblijvend sparren over jouw financi&euml;le uitdagingen
          </p>
        </div>
      </section>

      {/* ── Content: Benefits + Form ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Benefits */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-cobiz-dark">
                Wat mag je verwachten?
              </h2>

              <div className="space-y-5">
                {benefits.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cobiz-green/10">
                      <Icon className="h-5 w-5 text-cobiz-green" />
                    </div>
                    <p className="pt-2 text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-cobiz-dark">
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
