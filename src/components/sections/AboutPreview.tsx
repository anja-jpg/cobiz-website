import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-cobiz-mint section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          Ondernemers voor ondernemers
        </h2>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Left column - Photo */}
          <div className="w-full flex-1">
            <Image
              src="/anja-dirk.jpg"
              alt="Anja Warrot en Dirk Colman, oprichters van COBIZ"
              width={600}
              height={450}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Right column - Story */}
          <div className="flex-1">
            <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
              Wij zijn Anja en Dirk. Met 20 jaar financi&euml;le expertise
              &eacute;n 7 jaar ervaring als KMO-zaakvoerder weten we precies
              waar het schoentje wringt.
            </p>

            <blockquote className="mb-5 border-l-4 border-cobiz-green py-2 pl-5 sm:mb-6 sm:pl-6">
              <p className="text-base italic text-cobiz-dark sm:text-lg">
                &ldquo;We waren te veel bezig met andermans rekeningen betalen,
                en te weinig met onze eigen cijfers. Die wake-up call werd de
                basis van COBIZ.&rdquo;
              </p>
            </blockquote>

            <p className="mb-6 text-base text-gray-700 sm:mb-8 sm:text-lg">
              Vandaag helpen we ondernemers om niet dezelfde fouten te maken.
              Niet met dure rapporten die in een lade verdwijnen, maar met
              praktische tools en begeleiding die &eacute;cht werken.
            </p>

            <Link
              href="/over-ons"
              className="inline-block text-base font-semibold text-cobiz-green transition-colors hover:text-cobiz-green-dark sm:text-lg"
            >
              Lees ons verhaal &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
