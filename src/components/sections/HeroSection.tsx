import Link from "next/link";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left column - Copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-cobiz-dark md:text-5xl lg:text-6xl">
              Van cijfersalade naar heldere stuurinformatie
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Flexibele CFO-expertise voor KMO&apos;s die vooruit willen kijken,
              niet achteruit
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
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
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-100 px-8 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cobiz-green text-white">
                <Play className="h-8 w-8 ml-1" />
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
