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
      <section className="bg-white section-padding">
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
