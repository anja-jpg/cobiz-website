import type { Metadata } from 'next';
import { Clock, HelpCircle, Gift } from 'lucide-react';
import HealthCheckQuiz from '@/components/quiz/HealthCheckQuiz';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Gratis Financiële Gezondheidscheck | COBIZ',
  description:
    'Ontdek in 5 minuten hoe gezond jouw bedrijf er financieel voor staat. Beantwoord 12 vragen en ontvang direct je persoonlijke score met concrete verbeterpunten.',
};

export default function GezondheidsCheckPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-white section-padding pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-cobiz-dark md:text-5xl">
            Financiële Gezondheidscheck
          </h1>
          <p className="mb-6 text-lg text-gray-600 md:text-xl">
            Ontdek in 5 minuten hoe gezond jouw bedrijf er financieel voor staat
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              12 vragen
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              5 minuten
            </span>
            <span className="flex items-center gap-1.5">
              <Gift className="h-4 w-4" />
              Gratis
            </span>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-cobiz-mint section-padding">
        <HealthCheckQuiz />
      </section>
    </SiteLayout>
  );
}
