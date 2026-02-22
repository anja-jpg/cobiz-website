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
  ArrowDown,
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
import PageHero from '@/components/ui/PageHero';
import SectionBlock from '@/components/ui/SectionBlock';
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
      {/* ── Hero ── */}
      <PageHero
        badge="START MEI 2025"
        title="Workshop Stuurcijfers"
        subtitle="In 4,5 uur van cijferchaos naar grip op je cijfers en rust in je hoofd"
        details={
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white/90 sm:gap-3 sm:text-sm md:gap-6 md:text-base">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3.5 w-3.5 text-cobiz-green sm:h-4 sm:w-4" />
              17:00 - 21:30u
            </span>
            <span className="hidden text-white/30 sm:inline">|</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Users className="h-3.5 w-3.5 text-cobiz-green sm:h-4 sm:w-4" />
              Max 10 deelnemers
            </span>
            <span className="hidden text-white/30 sm:inline">|</span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Euro className="h-3.5 w-3.5 text-cobiz-green sm:h-4 sm:w-4" />
              {'\u20AC'}125 incl. BTW
            </span>
          </div>
        }
        ctas={[
          { label: 'BOEK JE PLEK', href: '#kies-je-datum' },
          { label: 'MEER INFO', href: '#wat-leer-je', variant: 'outline' },
        ]}
      />

      {/* ── Wat leer je? ── */}
      <SectionBlock theme="mint" id="wat-leer-je">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Wat leer je?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {learnings.map(({ emoji, text }, i) => (
            <ScrollFadeIn key={text} delay={i * 100}>
              <div className="card-3d group flex items-center gap-4 rounded-xl border-l-4 border-cobiz-green bg-white p-5 sm:gap-5 sm:p-6">
                <span className="text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                  {emoji}
                </span>
                <p className="text-base font-semibold text-cobiz-dark sm:text-lg">{text}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionBlock>

      {/* ── Van Cijferchaos naar Grip ── */}
      <SectionBlock theme="white" maxWidth="max-w-6xl">
        <h2 className="mb-3 text-center text-2xl font-bold text-cobiz-dark sm:mb-4 sm:text-3xl md:text-4xl">
          Van cijferchaos naar grip op je cijfers
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600 sm:mb-12 sm:text-base">
          Dit is wat de workshop voor jou doet — in 4,5 uur.
        </p>

        {/* Mobile: stacked, Desktop: 3-col */}
        <div className="grid items-stretch gap-4 sm:gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* CHAOS */}
          <ScrollFadeIn delay={100}>
            <div className="relative h-full overflow-hidden rounded-2xl border-2 border-cobiz-coral/20 bg-gradient-to-br from-red-50/80 to-orange-50/60 p-5 sm:p-7">
              <div className="mb-4 sm:mb-5">
                <span className="rounded-full bg-cobiz-coral/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cobiz-coral sm:px-4 sm:py-1.5 sm:text-xs">
                  Cijferchaos
                </span>
              </div>
              <div className="mb-4 rounded-lg border border-gray-200 bg-white/90 p-3 font-mono text-xs sm:mb-5 sm:p-4">
                <div className="mb-2 flex items-center gap-1.5 border-b border-gray-100 pb-2 text-[10px] text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                  <span className="ml-1.5 truncate">jaarrekening_v3_DEFINITIEF(2).xlsx</span>
                </div>
                <div className="space-y-1.5 text-gray-500">
                  <div className="flex justify-between"><span>Omzet Q3</span><span className="text-gray-400">&euro; 847.293</span></div>
                  <div className="flex justify-between"><span>EBITDA (??)</span><span className="text-gray-400">&euro; ???.???</span></div>
                  <div className="flex justify-between"><span>Solvabiliteit</span><span className="text-gray-400">0,42 of 42%?</span></div>
                  <div className="mt-2 border-t border-dashed border-gray-200 pt-2 text-center text-[10px] italic text-gray-400">
                    &quot;Wat betekent dit?&quot;
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600 sm:space-y-2">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Spreadsheets zonder context</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Boekhouder praat vakjargon</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Beslissingen op buikgevoel</li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-cobiz-coral">&times;</span>Stress over financi&euml;n</li>
              </ul>
            </div>
          </ScrollFadeIn>

          {/* Arrow */}
          <ScrollFadeIn delay={300}>
            <div className="flex h-full items-center justify-center py-2 md:py-0">
              <div className="animate-pulse-green flex h-12 w-12 items-center justify-center rounded-full bg-cobiz-dark text-white sm:h-16 sm:w-16 md:h-20 md:w-20">
                <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 md:hidden" />
                <ArrowRight className="hidden h-7 w-7 md:block md:h-8 md:w-8" />
              </div>
            </div>
          </ScrollFadeIn>

          {/* GRIP */}
          <ScrollFadeIn delay={200}>
            <div className="relative h-full overflow-hidden rounded-2xl border-2 border-cobiz-green/20 bg-gradient-to-br from-green-50/80 to-emerald-50/60 p-5 sm:p-7">
              <div className="mb-4 sm:mb-5">
                <span className="rounded-full bg-cobiz-green/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cobiz-green sm:px-4 sm:py-1.5 sm:text-xs">
                  Grip &amp; Rust
                </span>
              </div>
              <div className="mb-4 rounded-lg border border-cobiz-green/15 bg-white/90 p-3 sm:mb-5 sm:p-4">
                <div className="mb-3 flex items-center gap-2 border-b border-gray-100 pb-2 text-xs font-semibold text-cobiz-dark">
                  <Gauge className="h-3.5 w-3.5 text-cobiz-green" />
                  Jouw Scoringskaart
                </div>
                <div className="space-y-2.5">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-cobiz-dark"><TrendingUp className="h-3 w-3 text-cobiz-green" />Winstmarge</span>
                      <span className="font-bold text-cobiz-green">18,2%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100"><div className="h-1.5 w-3/4 rounded-full bg-cobiz-green" /></div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-cobiz-dark"><PieChart className="h-3 w-3 text-cobiz-green" />Cashflow</span>
                      <span className="font-bold text-cobiz-green">Gezond</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100"><div className="h-1.5 w-4/5 rounded-full bg-cobiz-green" /></div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-cobiz-dark"><BarChart3 className="h-3 w-3 text-cobiz-yellow" />Solvabiliteit</span>
                      <span className="font-bold text-cobiz-yellow">Actie nodig</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100"><div className="h-1.5 w-2/5 rounded-full bg-cobiz-yellow" /></div>
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-600 sm:space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Persoonlijke scoringskaart</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Direct zien waar actie nodig is</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Beslissingen op basis van feiten</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />Rust in je hoofd</li>
              </ul>
            </div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn delay={400}>
          <div className="mt-8 text-center sm:mt-10">
            <a href="#kies-je-datum" className="btn-primary inline-flex items-center gap-2">
              IK WIL GRIP OP MIJN CIJFERS
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollFadeIn>
      </SectionBlock>

      {/* ── Praktische info ── */}
      <SectionBlock theme="mint">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Praktische info
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {practicalInfo.map(({ Icon, label, value }, i) => (
            <ScrollFadeIn key={label} delay={i * 80}>
              <div className="card-3d flex items-start gap-3 rounded-xl bg-white p-4 sm:gap-4 sm:p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobiz-green/10 sm:h-11 sm:w-11">
                  <Icon className="h-4 w-4 text-cobiz-green sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">{label}</p>
                  <p className="text-sm font-semibold text-cobiz-dark sm:text-base">{value}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionBlock>

      {/* ── Kies je datum ── */}
      <SectionBlock theme="white" id="kies-je-datum" noFade>
        <ScrollFadeIn>
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Kies je datum
          </h2>
        </ScrollFadeIn>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:gap-6 sm:mb-16">
          {workshopDates.map((wd, i) => (
            <ScrollFadeIn key={wd.id} delay={i * 150}>
              <WorkshopDateCard {...wd} />
            </ScrollFadeIn>
          ))}
        </div>

        <div className="space-y-10 sm:space-y-16">
          <ScrollFadeIn>
            <div className="glass rounded-2xl p-5 shadow-xl sm:p-8">
              <BookingForm dates={bookingDates} />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="glass rounded-2xl p-5 shadow-xl sm:p-8">
              <WaitlistForm />
            </div>
          </ScrollFadeIn>
        </div>
      </SectionBlock>

      {/* ── FAQ ── */}
      <SectionBlock theme="mint" maxWidth="max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Veelgestelde vragen
        </h2>
        <FAQAccordion items={faqItems} />
      </SectionBlock>

      {/* ── Final CTA ── */}
      <PageHero
        compact
        title="Nog twijfels? Plan een gratis gesprek"
        subtitle="We bespreken vrijblijvend of deze workshop bij jouw situatie past."
        ctas={[{ label: 'PLAN GRATIS GESPREK', href: '/gratis-gesprek' }]}
      />
    </SiteLayout>
  );
}
