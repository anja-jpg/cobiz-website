import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-cobiz-dark section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Klaar om grip te krijgen op je cijfers?
        </h2>
        <p className="mb-10 text-lg text-gray-300">
          Start met de gratis gezondheidscheck en ontdek waar jouw groeikansen
          liggen.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/gezondheidscheck" className="btn-white">
            DOE DE GRATIS CHECK
          </Link>
          <Link
            href="/workshop-stuurcijfers"
            className="inline-block rounded-lg border-2 border-white px-8 py-4 text-center font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-cobiz-dark"
          >
            BOEK DE WORKSHOP
          </Link>
        </div>
      </div>
    </section>
  );
}
