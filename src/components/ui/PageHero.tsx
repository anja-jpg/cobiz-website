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
      className={`relative overflow-hidden ${compact ? 'px-4 py-16 md:py-20' : 'section-padding'}`}
      style={{ backgroundColor: '#133F3E' }}
    >
      {/* Subtle dot pattern */}
      <div
        className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Subtle radial light in center-top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(26,86,84,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {badge && (
          <span className="animate-float animate-pulse-glow mb-6 inline-block rounded-full bg-cobiz-yellow px-5 py-2 text-sm font-bold uppercase tracking-wider text-cobiz-dark shadow-lg">
            {badge}
          </span>
        )}

        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70 md:text-xl">
            {subtitle}
          </p>
        )}

        {details && <div className="mb-10">{details}</div>}

        {ctas && ctas.length > 0 && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {ctas.map((cta) =>
              cta.variant === 'outline' ? (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="btn-outline-white inline-flex items-center gap-2"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="btn-white inline-flex items-center gap-2"
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
