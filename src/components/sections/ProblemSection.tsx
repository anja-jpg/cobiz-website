import Link from "next/link";
import { Check } from "lucide-react";

const problems = [
  "Je hebt veel cijfers, maar weinig bruikbare informatie",
  "Cashflow stress: geld binnen, geld buiten, maar waar sta je echt?",
  "Je boekhouder spreekt 'Chinees' - cijfers zonder context",
  "Je weet niet precies waarom je zo weinig overhoudt",
  "Beslissingen neem je op buikgevoel, niet op data",
  "Je bent meer bezig met overleven dan met groeien",
];

export default function ProblemSection() {
  return (
    <section className="bg-cobiz-mint section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Herken je dit?
        </h2>

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 sm:gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cobiz-green sm:h-7 sm:w-7">
                <Check className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={3} />
              </div>
              <p className="text-sm text-gray-700 sm:text-base">{problem}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <p className="mb-5 text-base text-gray-600 sm:mb-6 sm:text-lg">
            Je bent niet alleen.{" "}
            <span className="font-semibold text-cobiz-dark">
              De meeste KMO-zaakvoerders
            </span>{" "}
            herkennen minstens 3 van deze punten.
          </p>
          <Link
            href="/gezondheidscheck"
            className="inline-block text-base font-semibold text-cobiz-green transition-colors hover:text-cobiz-green-dark sm:text-lg"
          >
            Doe de gratis groei-check &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
