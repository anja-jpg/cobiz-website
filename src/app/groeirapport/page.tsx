import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ClipboardCheck,
  Search,
  FileText,
  Check,
  ArrowRight,
} from 'lucide-react';
import GroeirapportOrderForm from './GroeirapportOrderForm';
import FAQAccordion from './FAQAccordion';
import SiteLayout from '@/components/layout/SiteLayout';
import { getContent, type BannerContent } from '@/lib/content';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Groeirapport | Financiële doorlichting voor KMO\'s | COBIZ',
  description:
    'Volledige financiële doorlichting van je KMO met risicoscore op 5 valkuilen, actieplan en quick wins. €1.500 excl. BTW. Ontvang helder inzicht in 2-3 weken.',
  alternates: { canonical: '/groeirapport' },
  openGraph: {
    title: 'Groeirapport - Financiële Doorlichting | COBIZ',
    description: 'Volledige financiële doorlichting met risicoscore, actieplan en quick wins. €1.500 excl. BTW.',
  },
};

/* ── Section 2: "Wat krijg je?" data ── */
const whatYouGet = [
  {
    Icon: ClipboardCheck,
    title: 'Waar sta je?',
    items: [
      'Financiële gezondheid',
      'Rendement en marges',
      'Cashflow en werkkapitaal',
      'Bedrijfsstructuur',
      'Risicoscore op 5 valkuilen',
    ],
  },
  {
    Icon: Search,
    title: 'Wat kan beter?',
    items: [
      'Waar lekt rendement weg?',
      'Welke stuurinformatie ontbreekt?',
      'Waar liggen kansen?',
    ],
  },
  {
    Icon: FileText,
    title: 'Wat krijg je?',
    items: [
      'Management summary',
      'Bevindingen per domein',
      'Actieplan met prioriteiten en quick wins',
      'Optie op vervolgtraject',
    ],
  },
];

/* ── Section 3: "Voor jou als je..." data ── */
const forYouItems = [
  'Hard werkt maar te weinig overhoudt',
  'Worstelt met cashflow of rendement',
  'Groei nastreeft maar niet blind wil varen',
  'Voor een belangrijke beslissing staat',
  'Betere stuurinformatie nodig hebt',
  'Opvolging of exit voorbereidt',
];

/* ── Section 4: "Hoe werkt het?" data ── */
const steps = [
  {
    number: 1,
    title: 'Analyse van je cijfers op afstand',
    description:
      'We analyseren je jaarrekeningen, BTW-aangiftes en beschikbare financiële data.',
  },
  {
    number: 2,
    title: 'Gesprek ter plaatse',
    description:
      'We bespreken je ambities, pijnpunten en de context achter de cijfers.',
  },
  {
    number: 3,
    title: 'Persoonlijk groeirapport',
    description:
      'Je ontvangt een helder rapport met risicoscores, verbeterkansen en een geprioriteerd actieplan.',
  },
];

/* ── Section 5: "De investering" details ── */
const investmentDetails = [
  '50% bij ondertekening (\u20AC750)',
  '50% na oplevering (\u20AC750)',
  'Verplaatsingskosten: \u20AC0,50/km > 35km',
  'Betalingstermijn: 14 dagen',
];

/* ── Section 7: FAQ data ── */
const faqItems = [
  {
    question: 'Is het Groeirapport geschikt voor mijn bedrijf?',
    answer:
      'Het Groeirapport is ontworpen voor KMO\u2019s met 5-30 medewerkers. Of je nu al jaren draait of net in een groeifase zit, we passen de analyse aan op jouw situatie.',
  },
  {
    question: 'Hoelang duurt het proces?',
    answer:
      'Gemiddeld 2-3 weken van intake tot oplevering, afhankelijk van de beschikbaarheid van je cijfers.',
  },
  {
    question: 'Wat als ik niet tevreden ben?',
    answer:
      'We garanderen een kwalitatieve doorlichting. Als het rapport niet aan je verwachtingen voldoet, bespreken we dit en zoeken we een oplossing.',
  },
  {
    question: 'Kan ik hierna verdere begeleiding krijgen?',
    answer:
      'Absoluut. Het Groeirapport bevat een optie op een vervolgtraject met COBIZ voor doorlopende begeleiding.',
  },
];

const groeirapportFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default async function GroeirapportPage() {
  const banner = await getContent<BannerContent>('banners', 'groeirapport');

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groeirapportFaqSchema) }}
      />
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="badge badge-yellow mb-3 sm:mb-4">
            FINANCI&Euml;LE DOORLICHTING
          </span>
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {banner.title}
          </h1>
          <p className="mb-6 text-base text-white/80 sm:mb-8 md:text-lg lg:text-xl">
            {banner.subtitle}
          </p>
          <p className="mb-8 text-sm font-semibold text-white sm:mb-10 md:text-base">
            &euro;1.500 excl. BTW | Terugverdientijd = 1 goed inzicht
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="#bestel" className="btn-white">
              BESTEL DIRECT
            </a>
            <Link href="/gratis-gesprek" className="btn-outline-white">
              PLAN EERST EEN GRATIS GESPREK
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Wat krijg je? (white bg) ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Een praktische doorlichting van je cijfers &eacute;n
            bedrijfsstructuur
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {whatYouGet.map(({ Icon, title, items }) => (
              <div
                key={title}
                className="card-hover rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cobiz-green/10 sm:mb-5 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-cobiz-green sm:h-7 sm:w-7" />
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
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cobiz-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Voor jou als je... (mint bg) ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Voor jou als je&hellip;
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {forYouItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm sm:p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobiz-green sm:h-8 sm:w-8">
                  <Check className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                </div>
                <span className="text-sm font-semibold text-cobiz-dark sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Hoe werkt het? (white bg) ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Hoe werkt het?
          </h2>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cobiz-green text-xl font-bold text-white sm:mb-5 sm:h-16 sm:w-16 sm:text-2xl">
                  {number}
                </div>
                <h3 className="mb-2 text-lg font-bold text-cobiz-dark sm:mb-3 sm:text-xl">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. De investering ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,201,80,0.4) 0%, transparent 70%)' }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
            De investering
          </h2>
          <p className="mb-6 text-4xl font-bold text-white sm:mb-8 sm:text-5xl md:text-6xl">
            &euro;1.500{' '}
            <span className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">
              excl. BTW
            </span>
          </p>

          <ul className="mb-8 space-y-2 sm:mb-10 sm:space-y-3">
            {investmentDetails.map((detail) => (
              <li
                key={detail}
                className="flex items-center justify-center gap-2 text-sm text-gray-300 sm:text-base"
              >
                <Check className="h-4 w-4 shrink-0 text-cobiz-green" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <a
            href="#bestel"
            className="btn-white inline-flex items-center gap-2"
          >
            BESTEL NU
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── 6. Order form (white bg) ── */}
      <section id="bestel" className="scroll-mt-24 bg-white section-padding">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-cobiz-dark sm:mb-3 sm:text-3xl md:text-4xl">
            Bestel je Groeirapport
          </h2>
          <p className="mb-8 text-center text-sm text-gray-600 sm:mb-10 sm:text-base">
            Kies hieronder of je direct wilt bestellen of eerst een gratis
            gesprek wilt plannen.
          </p>

          <GroeirapportOrderForm />
        </div>
      </section>

      {/* ── 7. FAQ (mint bg) ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            Veelgestelde vragen
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </SiteLayout>
  );
}
