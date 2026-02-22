import { TrendingUp, Wrench, Sliders, Building2 } from "lucide-react";

const differences = [
  {
    icon: TrendingUp,
    title: "Toekomstgericht",
    text: "Waar je boekhouder achteruit kijkt, kijken wij vooruit. Proactief sturen in plaats van reactief rapporteren.",
  },
  {
    icon: Wrench,
    title: "Hands-on",
    text: "Niet alleen denken, maar ook doen. Van analyse tot implementatie - wij draaien mee.",
  },
  {
    icon: Sliders,
    title: "Flexibel",
    text: "Van een eenmalige workshop tot doorlopende begeleiding. Je kiest wat bij jouw situatie past.",
  },
  {
    icon: Building2,
    title: "KMO-DNA",
    text: "Geen corporate aanpak maar ondernemer-tot-ondernemer. Wij spreken jouw taal.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Hoe wij verschillen
        </h2>

        <div className="grid gap-6 grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {differences.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cobiz-green sm:mb-5 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-base font-bold text-cobiz-dark sm:mb-3 sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
