import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  Utensils,
  MapPin,
  Users,
  Euro,
  Briefcase,
  ArrowRight,
  TrendingUp,
  PieChart,
  BarChart3,
  Gauge,
  CheckCircle,
} from 'lucide-react';
import WorkshopDateCard from '@/components/workshop/WorkshopDateCard';
import BookingForm from '@/components/workshop/BookingForm';
import WaitlistForm from '@/components/workshop/WaitlistForm';
import FAQAccordion from './FAQAccordion';
import SiteLayout from '@/components/layout/SiteLayout';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

export const metadata: Metadata = {
  title: 'Workshop Stuurcijfers | COBIZ',
  description:
    'In 4,5 uur van cijferchaos naar grip op je cijfers en rust in je hoofd. Workshop voor KMO-zaakvoerders die hun cijfers willen begrijpen en benutten.',
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
  { emoji: '\uD83D\uDCCA', text: 'Je eigen cijfers lezen en begrijpen' },
  { emoji: '\uD83C\uDFAF', text: 'De juiste stuurinformatie identificeren' },
  { emoji: '\uD83D\uDCCB', text: 'Een persoonlijke scoringskaart maken' },
  { emoji: '\uD83D\uDCA1', text: 'Direct toepasbare inzichten meenemen' },
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
      <section
        className="relative overflow-hidden section-padding"
        style={{
          background: 'linear-gradient(135deg, #133F3E 0%, #1a5654 40%, #51B848 100%)',
        }}
      >
        {/* Animated subtle pattern overlay */}
        <div
          className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="animate-float animate-pulse-glow mb-6 inline-block rounded-full bg-cobiz-yellow px-5 py-2 text-sm font-bold uppercase tracking-wider text-cobiz-dark shadow-lg">
            START MEI 2025
          </span>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Workshop Stuurcijfers
          </h1>
          <p className="mb-8 text-lg text-white/80 md:text-xl">
            In 4,5 uur van cijferchaos naar grip op je cijfers en rust in je hoofd
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/90 md:gap-6 md:text-base">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cobiz-yellow" />
              17:00 - 21:30u
            </span>
            <span className="hidden text-white/30 md:inline">|</span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-cobiz-yellow" />
              Max 10 deelnemers
            </span>
            <span className="hidden text-white/30 md:inline">|</span>
            <span className="flex items-center gap-2">
              <Euro className="h-4 w-4 text-cobiz-yellow" />
              {'\u20AC'}125 incl. BTW
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#kies-je-datum" className="btn-white inline-flex items-center gap-2">
              BOEK JE PLEK
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#wat-leer-je" className="btn-outline-white inline-flex items-center gap-2">
              MEER INFO
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Wat leer je? ── */}
      <section id="wat-leer-je" className="bg-cobiz-mint section-padding scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <ScrollFadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
              Wat leer je?
            </h2>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {learnings.map(({ emoji, text }, i) => (
              <ScrollFadeIn key={text} delay={i * 100}>
                <div className="card-3d group flex items-center gap-5 rounded-xl border-l-4 border-cobiz-green bg-white p-6">
                  <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                    {emoji}
                  </span>
                  <p className="text-lg font-semibold text-cobiz-dark">{text}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Van Cijferchaos naar Grip ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-6xl">
          <ScrollFadeIn>
            <h2 className="mb-4 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
              Van cijferchaos naar grip op je cijfers
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Dit is wat de workshop voor jou doet — in 4,5 uur.
            </p>
          </ScrollFadeIn>

          <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
            {/* CHAOS - links */}
            <ScrollFadeIn delay={100}>
              <div className="relative h-full overflow-hidden rounded-2xl border-2 border-cobiz-coral/20 bg-gradient-to-br from-red-50/80 to-orange-50/60 p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full bg-cobiz-coral/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cobiz-coral">
                    Cijferchaos
                  </span>
                </div>

                {/* Chaotische spreadsheet */}
                <div className="mb-5 rounded-lg border border-gray-200 bg-white/90 p-4 font-mono text-xs">
                  <div className="mb-2 flex items-center gap-1.5 border-b border-gray-100 pb-2 text-[10px] text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                    <span className="ml-1.5">jaarrekening_v3_DEFINITIEF(2).xlsx</span>
                  </div>
                  <div className="space-y-1.5 text-gray-500">
                    <div className="flex justify-between"><span>Omzet Q3</span><span className="text-gray-400">&euro; 847.293,41</span></div>
                    <div className="flex justify-between"><span>EBITDA (??)</span><span className="text-gray-400">&euro; ???.???</span></div>
                    <div className="flex justify-between"><span>Solvabiliteit</span><span className="text-gray-400">0,42 of 42%?</span></div>
                    <div className="mt-2 border-t border-dashed border-gray-200 pt-2 text-center text-[10px] italic text-gray-400">
                      &quot;Wat betekent dit?&quot;
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Spreadsheets zonder context</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Boekhouder praat vakjargon</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Beslissingen op buikgevoel</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Stress over financiën</li>
                </ul>
              </div>
            </ScrollFadeIn>

            {/* Centrale pijl */}
            <ScrollFadeIn delay={300}>
              <div className="flex h-full items-center justify-center py-4 md:py-0">
                <div
                  className="animate-pulse-green flex h-16 w-16 items-center justify-center rounded-full text-white md:h-20 md:w-20"
                  style={{ background: 'linear-gradient(135deg, #133F3E, #51B848)' }}
                >
                  <ArrowRight className="h-7 w-7 md:h-8 md:w-8" />
                </div>
              </div>
            </ScrollFadeIn>

            {/* GRIP - rechts */}
            <ScrollFadeIn delay={200}>
              <div className="relative h-full overflow-hidden rounded-2xl border-2 border-cobiz-green/20 bg-gradient-to-br from-green-50/80 to-emerald-50/60 p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full bg-cobiz-green/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cobiz-green">
                    Grip &amp; Rust
                  </span>
                </div>

                {/* Clean dashboard */}
                <div className="mb-5 rounded-lg border border-cobiz-green/15 bg-white/90 p-4">
                  <div className="mb-3 flex items-center gap-2 border-b border-gray-100 pb-2 text-xs font-semibold text-cobiz-dark">
                    <Gauge className="h-3.5 w-3.5 text-cobiz-green" />
                    Jouw Scoringskaart
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 font-medium text-cobiz-dark">
                          <TrendingUp className="h-3 w-3 text-cobiz-green" />Winstmarge
                        </span>
                        <span className="font-bold text-cobiz-green">18,2%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100"><div className="h-1.5 w-3/4 rounded-full bg-cobiz-green" /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 font-medium text-cobiz-dark">
                          <PieChart className="h-3 w-3 text-cobiz-green" />Cashflow
                        </span>
                        <span className="font-bold text-cobiz-green">Gezond</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100"><div className="h-1.5 w-4/5 rounded-full bg-cobiz-green" /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 font-medium text-cobiz-dark">
                          <BarChart3 className="h-3 w-3 text-cobiz-yellow" />Solvabiliteit
                        </span>
                        <span className="font-bold text-cobiz-yellow">Actie nodig</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100"><div className="h-1.5 w-2/5 rounded-full bg-cobiz-yellow" /></div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Persoonlijke scoringskaart</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Direct zien waar actie nodig is</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Beslissingen op basis van feiten</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Rust in je hoofd</li>
                </ul>
              </div>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn delay={400}>
            <div className="mt-10 text-center">
              <a href="#kies-je-datum" className="btn-primary inline-flex items-center gap-2">
                IK WIL GRIP OP MIJN CIJFERS
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── Praktische info ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-5xl">
          <ScrollFadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
              Praktische info
            </h2>
          </ScrollFadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practicalInfo.map(({ Icon, label, value }, i) => (
              <ScrollFadeIn key={label} delay={i * 80}>
                <div className="card-3d flex items-start gap-4 rounded-xl bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cobiz-green/10">
                    <Icon className="h-5 w-5 text-cobiz-green" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {label}
                    </p>
                    <p className="font-semibold text-cobiz-dark">{value}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kies je datum ── */}
      <section id="kies-je-datum" className="bg-white section-padding scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <ScrollFadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
              Kies je datum
            </h2>
          </ScrollFadeIn>

          <div className="mb-16 grid gap-6 sm:grid-cols-2">
            {workshopDates.map((wd, i) => (
              <ScrollFadeIn key={wd.id} delay={i * 150}>
                <WorkshopDateCard {...wd} />
              </ScrollFadeIn>
            ))}
          </div>

          {/* Booking + Waitlist forms */}
          <div className="space-y-16">
            <ScrollFadeIn>
              <div className="glass rounded-2xl p-8 shadow-xl">
                <BookingForm dates={bookingDates} />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <div className="glass rounded-2xl p-8 shadow-xl">
                <WaitlistForm />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* ── Veelgestelde vragen ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-3xl">
          <ScrollFadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
              Veelgestelde vragen
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <FAQAccordion items={faqItems} />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(135deg, #133F3E 0%, #1a5654 50%, #51B848 100%)',
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <ScrollFadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Nog twijfels? Plan een gratis gesprek
            </h2>
            <p className="mb-8 text-lg text-white/70">
              We bespreken vrijblijvend of deze workshop bij jouw situatie past.
            </p>
            <Link
              href="/gratis-gesprek"
              className="btn-white inline-flex items-center gap-2"
            >
              PLAN GRATIS GESPREK
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </SiteLayout>
  );
}
