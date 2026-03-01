'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Dankzij COBIZ weet ik eindelijk welke cijfers ertoe doen. Ik neem nu beslissingen op basis van feiten, niet op buikgevoel. Dat geeft enorm veel rust.',
    name: 'Placeholder',
    role: 'Zaakvoerder',
    company: 'KMO met 12 medewerkers',
  },
  {
    quote:
      'De workshop stuurcijfers was een eye-opener. In een halve dag had ik meer inzicht in mijn bedrijf dan in de afgelopen 3 jaar met mijn boekhouder.',
    name: 'Placeholder',
    role: 'CEO',
    company: 'Dienstenbedrijf, 8 medewerkers',
  },
  {
    quote:
      'Het groeirapport legde pijnlijk bloot waar het geld bleef. Drie maanden later is onze cashflow met 40% verbeterd. Beste investering ooit.',
    name: 'Placeholder',
    role: 'Eigenaar',
    company: 'Productiebedrijf, 22 medewerkers',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="bg-cobiz-mint section-padding">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Wat ondernemers zeggen
        </h2>

        <div className="relative rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          {/* Quote icon */}
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cobiz-green/10 sm:mb-6 sm:h-12 sm:w-12">
            <Quote className="h-5 w-5 text-cobiz-green sm:h-6 sm:w-6" />
          </div>

          {/* Quote text */}
          <blockquote className="mb-6 text-base leading-relaxed text-gray-700 sm:mb-8 sm:text-lg md:text-xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-cobiz-dark">{t.name}</p>
              <p className="text-sm text-gray-500">
                {t.role} &mdash; {t.company}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Vorige getuigenis"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-cobiz-green hover:text-cobiz-green sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Volgende getuigenis"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-cobiz-green hover:text-cobiz-green sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2 sm:mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Getuigenis ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? 'w-6 bg-cobiz-green'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400 sm:mt-6">
          Echte namen en bedrijven worden toegevoegd na toestemming van klanten.
        </p>
      </div>
    </section>
  );
}
