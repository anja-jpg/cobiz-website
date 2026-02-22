import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-cobiz-mint section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-cobiz-dark md:text-4xl">
          Ondernemers voor ondernemers
        </h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left column - Photo placeholder */}
          <div className="w-full flex-1">
            <div className="flex items-center justify-center rounded-2xl bg-gray-200 px-8 py-32">
              <p className="text-lg font-medium text-gray-500">
                Foto Anja &amp; Dirk
              </p>
            </div>
          </div>

          {/* Right column - Story */}
          <div className="flex-1">
            <p className="mb-6 text-lg text-gray-700">
              Wij zijn Anja en Dirk. Met 20 jaar financi&euml;le expertise
              &eacute;n 7 jaar ervaring als KMO-zaakvoerder weten we precies
              waar het schoentje wringt.
            </p>

            <blockquote className="mb-6 border-l-4 border-cobiz-green py-2 pl-6">
              <p className="text-lg italic text-cobiz-dark">
                &ldquo;We waren te veel bezig met andermans rekeningen betalen,
                en te weinig met onze eigen cijfers. Die wake-up call werd de
                basis van COBIZ.&rdquo;
              </p>
            </blockquote>

            <p className="mb-8 text-lg text-gray-700">
              Vandaag helpen we ondernemers om niet dezelfde fouten te maken.
              Niet met dure rapporten die in een lade verdwijnen, maar met
              praktische tools en begeleiding die &eacute;cht werken.
            </p>

            <Link
              href="/over-ons"
              className="inline-block text-lg font-semibold text-cobiz-green transition-colors hover:text-cobiz-green-dark"
            >
              Lees ons verhaal &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
