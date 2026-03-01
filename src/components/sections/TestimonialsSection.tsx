import { Quote } from 'lucide-react';

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
  return (
    <section className="bg-cobiz-mint section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Wat ondernemers zeggen
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-3d flex flex-col rounded-2xl bg-white p-6 sm:p-8"
            >
              {/* Quote icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cobiz-green/10">
                <Quote className="h-5 w-5 text-cobiz-green" />
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-gray-700 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-cobiz-dark">{t.name}</p>
                <p className="text-sm text-gray-500">
                  {t.role} &mdash; {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-gray-400 sm:mt-6">
          Echte namen en bedrijven worden toegevoegd na toestemming van klanten.
        </p>
      </div>
    </section>
  );
}
