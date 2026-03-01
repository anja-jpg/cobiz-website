import Link from "next/link";
import { BarChart3, FileText, GraduationCap, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Hero headline + CTA */}
        <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-16">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-cobiz-dark sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Van cijferchaos naar grip op je cijfers en rust in je hoofd
          </h1>
          <p className="mb-6 text-base text-gray-600 sm:mb-8 md:text-lg lg:text-xl">
            Flexibele CFO-expertise voor KMO&apos;s die vooruit willen kijken,
            niet achteruit
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/gezondheidscheck" className="btn-primary">
              DOE DE GRATIS GROEI-CHECK
            </Link>
            <Link href="/workshop-stuurcijfers" className="btn-secondary">
              BOEK DE WORKSHOP
            </Link>
          </div>
        </div>

        {/* SEO intro text */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <p className="text-base text-gray-600 sm:text-lg">
            COBIZ is jouw externe CFO in de regio Dendermonde. We helpen
            KMO-zaakvoerders met 5 tot 30 medewerkers om hun financi&euml;le
            stuurinformatie te begrijpen en benutten. Van een hands-on workshop
            tot een volledige financi&euml;le doorlichting &mdash; altijd
            praktisch, altijd op maat.
          </p>
        </div>

        {/* Mini services overview */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          <Link href="/workshop-stuurcijfers" className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10">
              <BarChart3 className="h-5 w-5 text-cobiz-green" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-cobiz-dark sm:text-base">Workshop Stuurcijfers</h3>
              <p className="text-xs text-gray-500 sm:text-sm">In 4,5 uur grip op je cijfers</p>
            </div>
          </Link>
          <Link href="/groeirapport" className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10">
              <FileText className="h-5 w-5 text-cobiz-green" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-cobiz-dark sm:text-base">Groeirapport</h3>
              <p className="text-xs text-gray-500 sm:text-sm">Financi&euml;le doorlichting met actieplan</p>
            </div>
          </Link>
          <Link href="/opleidingstraject" className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10">
              <GraduationCap className="h-5 w-5 text-cobiz-green" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-cobiz-dark sm:text-base">Opleidingstraject</h3>
              <p className="text-xs text-gray-500 sm:text-sm">4-daags intensief programma</p>
            </div>
          </Link>
          <Link href="/gratis-gesprek" className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobiz-green/10">
              <MessageCircle className="h-5 w-5 text-cobiz-green" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-cobiz-dark sm:text-base">Gratis Gesprek</h3>
              <p className="text-xs text-gray-500 sm:text-sm">1 uur vrijblijvend sparren</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
