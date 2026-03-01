import Link from "next/link";
import type { FinalCTAContent } from "@/lib/content";

export default function FinalCTA({ content }: { content: FinalCTAContent }) {
  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: '#51B848' }}
    >
      <div
        className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,201,80,0.4) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
          {content.title}
        </h2>
        <p className="mb-8 text-base text-white/70 sm:mb-10 sm:text-lg">
          {content.subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/gezondheidscheck" className="btn-white w-full sm:w-auto">
            DOE DE GRATIS CHECK
          </Link>
          <Link href="/workshop-stuurcijfers" className="btn-outline-white w-full sm:w-auto">
            BOEK DE WORKSHOP
          </Link>
        </div>
      </div>
    </section>
  );
}
