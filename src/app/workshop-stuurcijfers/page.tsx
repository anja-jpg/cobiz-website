import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Lightbulb,
  Target,
  BarChart3,
  ArrowUpRight,
  Clock,
  Utensils,
  MapPin,
  Users,
  Euro,
  Briefcase,
  ArrowRight,
  TrendingUp,
  PieChart,
  Gauge,
  CheckCircle,
} from 'lucide-react';
import WorkshopDateCard from '@/components/workshop/WorkshopDateCard';
import BookingForm from '@/components/workshop/BookingForm';
import WaitlistForm from '@/components/workshop/WaitlistForm';
import FAQAccordion from './FAQAccordion';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Workshop Stuurcijfers | COBIZ',
  description:
    'In 4,5 uur van cijfersalade naar heldere stuurinformatie. Workshop voor KMO-zaakvoerders die hun cijfers willen begrijpen en benutten.',
};

const workshopDates = [
  {
    id: 1,
    date: '2025-05-19',
    startTime: '17:00',
    endTime: '21:30',
    capacity: 10,
    booked: 3,
    location: 'COBIZ-center',
    price: 12500,
    status: 'open',
  },
  {
    id: 2,
    date: '2025-06-18',
    startTime: '17:00',
    endTime: '21:30',
    capacity: 10,
    booked: 8,
    location: 'COBIZ-center',
    price: 12500,
    status: 'open',
  },
];

const bookingDates = workshopDates.map((d) => ({
  id: d.id,
  date: d.date,
  startTime: d.startTime,
  endTime: d.endTime,
  remaining: d.capacity - d.booked,
}));

const learnings = [
  {
    Icon: Lightbulb,
    text: 'Je eigen cijfers lezen en begrijpen',
  },
  {
    Icon: Target,
    text: 'De juiste stuurinformatie identificeren',
  },
  {
    Icon: BarChart3,
    text: 'Een persoonlijke scoringskaart maken',
  },
  {
    Icon: ArrowUpRight,
    text: 'Direct toepasbare inzichten meenemen',
  },
];

const practicalInfo = [
  { Icon: Clock, label: 'Duur', value: '4,5 uur (17:00 - 21:30u)' },
  { Icon: Utensils, label: 'Inclusief', value: 'Broodjes, dranken en alle materialen' },
  { Icon: MapPin, label: 'Locatie', value: 'COBIZ-center' },
  { Icon: Users, label: 'Groepsgrootte', value: 'Max 10 deelnemers' },
  { Icon: Euro, label: 'Prijs', value: '\u20AC125 incl. BTW' },
  { Icon: Briefcase, label: 'Voor wie', value: 'KMO-zaakvoerders (5-30 medewerkers)' },
];

const faqItems = [
  {
    question: 'Voor wie is deze workshop?',
    answer:
      'Voor KMO-zaakvoerders met 5-30 medewerkers die meer inzicht willen in hun cijfers. Geen financi\u00eble voorkennis vereist.',
  },
  {
    question: 'Wat moet ik meebrengen?',
    answer:
      'Niets! Alle materialen worden voorzien. Breng wel je nieuwsgierigheid mee.',
  },
  {
    question: 'Kan ik annuleren?',
    answer:
      'Tot 7 dagen voor de workshop kun je kosteloos annuleren. Daarna is de volledige prijs verschuldigd, maar je mag altijd iemand in jouw plaats sturen.',
  },
  {
    question: 'Is er parking?',
    answer: 'Ja, gratis parking beschikbaar bij het COBIZ-center.',
  },
  {
    question: 'Wat als de workshop vol is?',
    answer:
      'Schrijf je in op de wachtlijst. Zodra er een plek vrijkomt of een nieuwe datum wordt gepland, word je als eerste ge\u00efnformeerd.',
  },
];

export default function WorkshopStuurcijfersPage() {
  return (
    <SiteLayout>
      {/* ── Hero Banner ── */}
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge badge-green mb-4">START MEI 2025</span>
          <h1 className="mb-4 text-4xl font-bold text-cobiz-dark md:text-5xl lg:text-6xl">
            Workshop Stuurcijfers
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            In 4,5 uur van cijfersalade naar heldere stuurinformatie
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-cobiz-dark md:gap-6 md:text-base">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cobiz-green" />
              17:00 - 21:30u
            </span>
            <span className="hidden text-gray-300 md:inline">|</span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-cobiz-green" />
              Max 10 deelnemers
            </span>
            <span className="hidden text-gray-300 md:inline">|</span>
            <span className="flex items-center gap-2">
              <Euro className="h-4 w-4 text-cobiz-green" />
              {'\u20AC'}125 incl. BTW
            </span>
          </div>
        </div>
      </section>

      {/* ── Voor / Na Cijfersalade ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
            Van cijfersalade naar heldere inzichten
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Dit is wat de workshop voor jou doet — in 4,5 uur.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* VOOR */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-cobiz-coral/30 bg-gradient-to-br from-red-50 to-orange-50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-cobiz-coral/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-cobiz-coral">
                  Voor de workshop
                </span>
              </div>

              {/* Chaotische cijfers simulatie */}
              <div className="mb-6 rounded-xl border border-gray-200 bg-white/80 p-5 font-mono text-sm">
                <div className="mb-3 flex items-center gap-2 border-b border-gray-100 pb-2 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-red-300"></span>
                  <span className="h-2 w-2 rounded-full bg-yellow-300"></span>
                  <span className="h-2 w-2 rounded-full bg-green-300"></span>
                  <span className="ml-2">jaarrekening_2024_v3_DEFINITIEF(2).xlsx</span>
                </div>
                <div className="space-y-2 text-gray-500">
                  <div className="flex justify-between">
                    <span>Omzet Q3</span>
                    <span className="text-gray-400">€ 847.293,41</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kosten variabel</span>
                    <span className="text-gray-400">€ 412.087,--</span>
                  </div>
                  <div className="flex justify-between">
                    <span>EBITDA (??)</span>
                    <span className="text-gray-400">€ ???.???</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Solvabiliteit</span>
                    <span className="text-gray-400">0,42... of 42%?</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current ratio</span>
                    <span className="text-gray-400">1,8 — is dit goed?</span>
                  </div>
                  <div className="mt-3 border-t border-dashed border-gray-200 pt-3 text-center text-xs italic text-gray-400">
                    &quot;Wat betekent dit allemaal?&quot;
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cobiz-coral">✗</span>
                  Spreadsheets vol cijfers zonder context
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cobiz-coral">✗</span>
                  Boekhouder praat in vakjargon
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cobiz-coral">✗</span>
                  Beslissingen op buikgevoel
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-cobiz-coral">✗</span>
                  Onzekerheid over financiële gezondheid
                </li>
              </ul>
            </div>

            {/* NA */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-cobiz-green/30 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-cobiz-green/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-cobiz-green">
                  Na de workshop
                </span>
              </div>

              {/* Clean dashboard simulatie */}
              <div className="mb-6 rounded-xl border border-cobiz-green/20 bg-white/80 p-5">
                <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-2 text-xs font-semibold text-cobiz-dark">
                  <Gauge className="h-3.5 w-3.5 text-cobiz-green" />
                  Jouw Scoringskaart
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-cobiz-dark">
                        <TrendingUp className="h-3.5 w-3.5 text-cobiz-green" />
                        Winstmarge
                      </span>
                      <span className="font-bold text-cobiz-green">18,2%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-3/4 rounded-full bg-cobiz-green"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-cobiz-dark">
                        <PieChart className="h-3.5 w-3.5 text-cobiz-green" />
                        Cashflow score
                      </span>
                      <span className="font-bold text-cobiz-green">Gezond</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-4/5 rounded-full bg-cobiz-green"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-cobiz-dark">
                        <BarChart3 className="h-3.5 w-3.5 text-cobiz-yellow" />
                        Solvabiliteit
                      </span>
                      <span className="font-bold text-cobiz-yellow">Aandacht</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-2/5 rounded-full bg-cobiz-yellow"></div>
                    </div>
                  </div>
                  <div className="mt-3 border-t border-gray-100 pt-3 text-center text-xs font-semibold text-cobiz-green">
                    → Actie: solvabiliteit verbeteren via plan X
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />
                  Persoonlijke scoringskaart met jouw KPI&apos;s
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />
                  Direct zien waar actie nodig is
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />
                  Beslissingen op basis van feiten
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />
                  Gesprek met boekhouder op niveau
                </li>
              </ul>
            </div>
          </div>

          {/* CTA onder de vergelijking */}
          <div className="mt-10 text-center">
            <a
              href="#kies-je-datum"
              className="btn-primary inline-flex items-center gap-2"
            >
              IK WIL HELDERE CIJFERS
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Wat leer je? ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
            Wat leer je?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learnings.map(({ Icon, text }) => (
              <div
                key={text}
                className="card-hover flex flex-col items-center rounded-xl bg-cobiz-beige/40 p-6 text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cobiz-green/10">
                  <Icon className="h-7 w-7 text-cobiz-green" />
                </div>
                <p className="font-semibold text-cobiz-dark">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Praktische info ── */}
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
            Praktische info
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practicalInfo.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10">
                  <Icon className="h-5 w-5 text-cobiz-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                    {label}
                  </p>
                  <p className="font-semibold text-cobiz-dark">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kies je datum ── */}
      <section id="kies-je-datum" className="bg-white section-padding scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
            Kies je datum
          </h2>

          <div className="mb-16 grid gap-6 sm:grid-cols-2">
            {workshopDates.map((wd) => (
              <WorkshopDateCard key={wd.id} {...wd} />
            ))}
          </div>

          {/* Booking + Waitlist forms */}
          <div className="space-y-16">
            <BookingForm dates={bookingDates} />
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── Veelgestelde vragen ── */}
      <section className="bg-cobiz-beige section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
            Veelgestelde vragen
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-cobiz-dark section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Nog twijfels? Plan een gratis gesprek
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            We bespreken vrijblijvend of deze workshop bij jouw situatie past.
          </p>
          <Link
            href="/gratis-gesprek"
            className="btn-white inline-flex items-center gap-2"
          >
            PLAN GRATIS GESPREK
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
