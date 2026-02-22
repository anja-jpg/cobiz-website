import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, GraduationCap, Building2, Target } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Over Ons | COBIZ',
  description:
    'Leer Anja Warrot en Dirk Colman kennen, de oprichters van COBIZ. 20 jaar financiële expertise en 7 jaar KMO-ervaring.',
};

const values = [
  {
    Icon: Briefcase,
    title: 'Praktijkervaring',
    description: 'Niet alleen theorie, maar bewezen in de praktijk als ondernemer',
  },
  {
    Icon: GraduationCap,
    title: 'Financiële expertise',
    description: 'Master Handelswetenschappen en 20+ jaar finance ervaring',
  },
  {
    Icon: Building2,
    title: 'KMO-focus',
    description:
      'We begrijpen de specifieke uitdagingen van KMO\u2019s met 5-30 medewerkers',
  },
  {
    Icon: Target,
    title: 'Resultaatgericht',
    description: 'Geen rapporten voor de lade, maar actieplannen die werken',
  },
];

export default function OverOnsPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-cobiz-dark md:text-5xl lg:text-6xl">
            Wij zijn COBIZ
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Ondernemers die ondernemers helpen met financieel inzicht
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Photo placeholder */}
            <div className="w-full flex-1">
              <div className="flex items-center justify-center rounded-2xl bg-gray-200 px-8 py-32">
                <p className="text-lg font-medium text-gray-500">
                  Foto Anja &amp; Dirk
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="flex-1">
              <p className="mb-6 text-lg text-gray-700">
                COBIZ is opgericht door Anja Warrot en Dirk Colman. Met meer dan
                20 jaar financi&euml;le expertise en 7 jaar ervaring als
                KMO-zaakvoerder begrijpen we de uitdagingen van ondernemers als
                geen ander.
              </p>

              <p className="mb-6 text-lg text-gray-700">
                We hebben zelf een selectiekantoor gerund. We weten hoe het voelt
                om &apos;s nachts wakker te liggen over cashflow, om beslissingen
                te nemen op buikgevoel, en om te veel bezig te zijn met andermans
                rekeningen betalen.
              </p>

              <blockquote className="border-l-4 border-cobiz-green py-2 pl-6">
                <p className="text-lg italic text-cobiz-dark">
                  &ldquo;Die ervaring is de basis van COBIZ. We willen dat elke
                  ondernemer toegang heeft tot de financi&euml;le inzichten die
                  het verschil maken.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why COBIZ ── */}
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
            Waarom COBIZ?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="card-hover flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cobiz-green/10">
                  <Icon className="h-7 w-7 text-cobiz-green" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-cobiz-dark">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-cobiz-dark md:text-4xl">
            Onze missie
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Elke KMO verdient toegang tot financi&euml;le stuurinformatie die
            &eacute;cht werkt. Niet de saaie spreadsheets van je boekhouder,
            maar heldere inzichten waarmee je gefundeerde beslissingen neemt.
          </p>
          <p className="text-lg text-gray-700">
            Wij zijn geen vervanging voor je boekhouder. We zijn de aanvulling
            die vooruit kijkt, terwijl je boekhouder achteruit kijkt.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cobiz-dark section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Benieuwd wat we voor jou kunnen betekenen?
          </h2>
          <Link href="/gratis-gesprek" className="btn-white">
            PLAN EEN GRATIS GESPREK
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
