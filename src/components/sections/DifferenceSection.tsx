import { TrendingUp, Wrench, Sliders, Building2 } from "lucide-react";
import type { DifferenceContent } from "@/lib/content";

const icons = [TrendingUp, Wrench, Sliders, Building2];

export default function DifferenceSection({ content }: { content: DifferenceContent }) {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          {content.title}
        </h2>

        <div className="grid gap-6 grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[index] || icons[0];
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
