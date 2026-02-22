import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: '#133F3E' }}
    >
      <div
        className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(26,86,84,0.6) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Klaar om grip te krijgen op je cijfers?
        </h2>
        <p className="mb-10 text-lg text-white/70">
          Start met de gratis gezondheidscheck en ontdek waar jouw groeikansen
          liggen.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/gezondheidscheck" className="btn-white">
            DOE DE GRATIS CHECK
          </Link>
          <Link href="/workshop-stuurcijfers" className="btn-outline-white">
            BOEK DE WORKSHOP
          </Link>
        </div>
      </div>
    </section>
  );
}
