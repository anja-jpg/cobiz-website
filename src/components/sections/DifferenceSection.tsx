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
        <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
          Hoe wij verschillen
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differences.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cobiz-green">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-cobiz-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
