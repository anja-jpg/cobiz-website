import Link from 'next/link';
import SiteLayout from '@/components/layout/SiteLayout';

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-6xl font-bold text-cobiz-green sm:text-8xl">404</p>
          <h1 className="mb-4 text-2xl font-bold text-cobiz-dark sm:text-3xl md:text-4xl">
            Pagina niet gevonden
          </h1>
          <p className="mb-8 text-base text-gray-600 sm:text-lg">
            De pagina die je zoekt bestaat niet of is verplaatst. Geen zorgen
            &mdash; we helpen je graag verder.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/" className="btn-primary w-full sm:w-auto">
              NAAR DE HOMEPAGE
            </Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">
              NEEM CONTACT OP
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
