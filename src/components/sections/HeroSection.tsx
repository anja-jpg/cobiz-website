import Link from "next/link";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Left column - Copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-cobiz-dark sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Van cijferchaos naar grip op je cijfers en rust in je hoofd
            </h1>
            <p className="mb-6 text-base text-gray-600 sm:mb-8 md:text-lg lg:text-xl">
              Flexibele CFO-expertise voor KMO&apos;s die vooruit willen kijken,
              niet achteruit
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/gezondheidscheck" className="btn-primary">
                DOE DE GRATIS GEZONDHEIDSCHECK
              </Link>
              <Link href="/workshop-stuurcijfers" className="btn-secondary">
                SCHRIJF JE IN VOOR DE WORKSHOP
              </Link>
            </div>
          </div>

          {/* Right column - Video placeholder */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-100 px-8 py-16 text-center sm:py-20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cobiz-green text-white sm:h-16 sm:w-16">
                <Play className="h-7 w-7 ml-1 sm:h-8 sm:w-8" />
              </div>
              <p className="text-sm font-medium text-gray-500">
                Video Anja &amp; Dirk - Binnenkort beschikbaar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
