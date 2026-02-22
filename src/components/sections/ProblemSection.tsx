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
    <section className="bg-cobiz-beige section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
          Herken je dit?
        </h2>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobiz-green">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-700">{problem}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Je bent niet alleen.{" "}
            <span className="font-semibold text-cobiz-dark">
              80% van de KMO-zaakvoerders
            </span>{" "}
            herkent minstens 3 van deze punten.
          </p>
          <Link
            href="/gezondheidscheck"
            className="inline-block text-lg font-semibold text-cobiz-green transition-colors hover:text-cobiz-green-dark"
          >
            Doe de gratis gezondheidscheck &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
