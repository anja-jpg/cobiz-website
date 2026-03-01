import type { Metadata } from 'next';
import { Clock, HelpCircle, Activity } from 'lucide-react';
import HealthCheckQuiz from '@/components/quiz/HealthCheckQuiz';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Gratis Groei-Check | COBIZ',
  description:
    'Ontdek in 2 minuten hoe groeiklaar jouw bedrijf is. Beantwoord 12 vragen en ontvang direct je persoonlijke groei-score met concrete aanbevelingen per categorie.',
};

export default function GezondheidsCheckPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-white section-padding pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-cobiz-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cobiz-green sm:text-sm">
            <Activity className="h-4 w-4" />
            Gratis zelftest
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-cobiz-dark sm:text-4xl md:text-5xl">
            Hoe <span className="text-cobiz-green">groeiklaar</span> is jouw
            bedrijf?
          </h1>
          <p className="mb-6 text-base text-gray-600 sm:text-lg md:text-xl">
            Ontdek in 2 minuten waar jouw onderneming staat en waar groeikansen
            liggen.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              2 minuten
            </span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              12 vragen
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
