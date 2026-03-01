import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroCTA {
  label: string;
  href: string;
  variant?: 'white' | 'outline';
}

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  /** Small detail items shown below subtitle (e.g. time, price) */
  details?: React.ReactNode;
  ctas?: HeroCTA[];
  /** Compact mode for secondary pages (less vertical padding) */
  compact?: boolean;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  details,
  ctas,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? 'px-4 py-10 md:py-14 lg:py-20' : 'section-padding'}`}
      style={{ backgroundColor: '#51B848' }}
    >
      {/* Subtle dot pattern */}
      <div
        className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Subtle radial light in center-top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,201,80,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {badge && (
          <span className="animate-float animate-pulse-glow mb-4 inline-block rounded-full bg-cobiz-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cobiz-dark shadow-lg sm:mb-6 sm:px-5 sm:py-2 sm:text-sm">
            {badge}
          </span>
        )}

        <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mb-6 max-w-2xl text-base text-white/80 sm:mb-8 md:text-lg lg:text-xl">
            {subtitle}
          </p>
        )}

        {details && <div className="mb-8 sm:mb-10">{details}</div>}

        {ctas && ctas.length > 0 && (
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {ctas.map((cta) =>
              cta.variant === 'outline' ? (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="btn-outline-white inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="btn-white inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
