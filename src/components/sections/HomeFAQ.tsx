'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Wat is een externe CFO en wat doet COBIZ precies?',
    answer:
      'Een externe CFO biedt dezelfde financiële expertise als een interne CFO, maar dan flexibel en op maat. COBIZ helpt KMO-zaakvoerders met stuurcijfers, cashflow-analyse, winstoptimalisatie en strategische financiële planning — zonder de kost van een voltijdse medewerker.',
  },
  {
    question: 'Voor welke bedrijven is COBIZ geschikt?',
    answer:
      'COBIZ richt zich op KMO\'s met 5 tot 30 medewerkers in de regio Dendermonde en heel Vlaanderen. Of je nu een dienstenbedrijf, handelsbedrijf of productiebedrijf runt — als je meer grip wilt op je financiële cijfers, kunnen wij helpen.',
  },
  {
    question: 'Wat is het verschil tussen een boekhouder en COBIZ?',
    answer:
      'Je boekhouder kijkt achteruit: hij verwerkt wat er is gebeurd. COBIZ kijkt vooruit: we vertalen je cijfers naar stuurinformatie waarmee je betere beslissingen neemt. We zijn geen vervanging voor je boekhouder, maar de strategische aanvulling die vooruit kijkt.',
  },
  {
    question: 'Welke dienst past het best bij mij?',
    answer:
      'Dat hangt af van je situatie. De Workshop Stuurcijfers (€125) is ideaal als snelle kennismaking. Het Groeirapport (€1.500) geeft je een volledige financiële doorlichting met actieplan. Twijfel je? Plan een gratis kennismakingsgesprek en we adviseren je vrijblijvend.',
  },
  {
    question: 'In welke regio is COBIZ actief?',
    answer:
      'COBIZ is gevestigd in Dendermonde en bedient KMO\'s in de regio: Lebbeke, Buggenhout, Hamme, Zele, Berlare, Wetteren, Aalst, Lokeren en Temse. We werken ook met ondernemers in Antwerpen, Gent en Brussel.',
  },
];

const faqSchema = {
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

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-cobiz-mint section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Veelgestelde vragen
        </h2>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl transition-all duration-300 ${
                  isOpen
                    ? 'bg-white shadow-lg border-2 border-cobiz-green/30'
                    : 'bg-white/80 shadow-sm border-2 border-transparent hover:border-cobiz-green/10 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center gap-4 p-5 text-left font-semibold text-cobiz-dark transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-cobiz-green text-white' : 'bg-cobiz-green/10 text-cobiz-green'
                  }`}>
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span className="flex-1">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cobiz-green transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-cobiz-green/10 px-5 pb-5 pt-3 pl-[4.5rem]">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
