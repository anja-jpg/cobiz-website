import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  BarChart3,
  LayoutDashboard,
  Banknote,
  TrendingUp,
} from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Opleidingstraject Financiële Sturing | 4-daags KMO-programma | COBIZ',
  description:
    'In 4 intensieve dagen leer je financiële analyse, KPI-dashboards, cashflow management en strategische planning. Voor KMO-zaakvoerders met 5-30 medewerkers. Start september 2025.',
  alternates: { canonical: '/opleidingstraject' },
  openGraph: {
    title: 'Opleidingstraject Financiële Sturing | COBIZ',
    description: '4-daags intensief traject voor KMO-zaakvoerders. Financiële analyse, dashboards en strategische planning.',
  },
};

const practicalDetails = [
  {
    Icon: Calendar,
    label: 'Formaat',
    value: '4 dagen (9:00 - 16:00u) verspreid over 4 weken',
  },
  {
    Icon: MapPin,
    label: 'Locatie',
    value: 'Fysiek in het COBIZ-center',
  },
  {
    Icon: Users,
    label: 'Groepsgrootte',
    value: 'Max 15 deelnemers per groep',
  },
];

const learnings = [
  {
    Icon: BarChart3,
    text: 'Diepgaande financi\u00eble analyse',
  },
  {
    Icon: LayoutDashboard,
    text: 'Dashboard en KPI ontwikkeling',
  },
  {
    Icon: Banknote,
    text: 'Cashflow management en optimalisatie',
  },
  {
    Icon: TrendingUp,
    text: 'Strategische financi\u00eble planning',
  },
];

export default function OpleidingstrajectPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="badge badge-coral mb-3 sm:mb-4">START SEPTEMBER 2025</span>
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Opleidingstraject Financi&euml;le Sturing
          </h1>
          <p className="text-base text-white/80 md:text-lg lg:text-xl">
            4 dagen intensieve begeleiding voor KMO-zaakvoerders die &eacute;cht
            grip willen op hun cijfers
          </p>
        </div>
      </section>

      {/* ── Practical Info ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Praktische info
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {practicalDetails.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl bg-cobiz-mint p-4 sm:gap-4 sm:p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10 sm:h-10 sm:w-10">
                  <Icon className="h-4.5 w-4.5 text-cobiz-green sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 sm:text-sm">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-cobiz-dark sm:text-base">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-600 sm:mt-8 sm:text-base">
            De prijs wordt niet op de website vermeld. Neem contact op voor meer
            informatie.
          </p>
        </div>
      </section>

      {/* ── What You Learn ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Wat leer je?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {learnings.map(({ Icon, text }) => (
              <div
                key={text}
                className="card-3d flex flex-col items-center rounded-xl bg-white p-5 text-center sm:p-6"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cobiz-green/10 sm:mb-4 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-cobiz-green sm:h-7 sm:w-7" />
                </div>
                <p className="text-sm font-semibold text-cobiz-dark sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programma per dag ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Programma per dag
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                day: 'Dag 1',
                title: 'Financi\u00eble basis & analyse',
                items: [
                  'Jaarrekening lezen en begrijpen',
                  'Balans, resultatenrekening en cashflow',
                  'De 5 belangrijkste financi\u00eble ratio\u2019s',
                  'Praktijkoefening met eigen cijfers',
                ],
              },
              {
                day: 'Dag 2',
                title: 'KPI\u2019s & dashboard',
                items: [
                  'De juiste KPI\u2019s voor jouw sector',
                  'Je eigen dashboard opbouwen',
                  'Benchmarking: hoe presteer je tegenover de sector?',
                  'Van data naar stuurinformatie',
                ],
              },
              {
                day: 'Dag 3',
                title: 'Cashflow & werkkapitaal',
                items: [
                  'Cashflow-prognose opstellen',
                  'Werkkapitaal optimaliseren',
                  'Debiteurenbeheer en betalingsbeleid',
                  'Scenario-planning: wat als...?',
                ],
              },
              {
                day: 'Dag 4',
                title: 'Strategie & actieplan',
                items: [
                  'Financi\u00eble doelen formuleren',
                  'Groeistrategie\u00ebn evalueren',
                  'Persoonlijk actieplan opstellen',
                  'Presentatie en groepsfeedback',
                ],
              },
            ].map(({ day, title, items }) => (
              <div
                key={day}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <div className="mb-3 sm:mb-4">
                  <span className="badge badge-green">{day}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-cobiz-dark sm:mb-4 sm:text-xl">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600 sm:text-base"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobiz-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,201,80,0.4) 0%, transparent 70%)' }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl md:text-4xl">
            Interesse in het opleidingstraject?
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="btn-white inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              NEEM CONTACT OP
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/gratis-gesprek" className="btn-outline-white w-full sm:w-auto">
              OF PLAN EEN GRATIS GESPREK
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
