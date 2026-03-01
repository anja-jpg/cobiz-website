import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Lightbulb, TrendingUp, PiggyBank, BarChart3, Calculator, Users } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Inzichten | Financiële tips voor KMO\'s | COBIZ',
  description:
    'Praktische inzichten over financieel management voor KMO\'s. Lees artikelen over stuurcijfers, cashflow, winstgevendheid en financiële sturing.',
  alternates: { canonical: '/inzichten' },
  openGraph: {
    title: 'Inzichten over financieel management | COBIZ',
    description: 'Praktische tips en kennis over stuurcijfers, cashflow en winstgevendheid voor KMO\'s.',
  },
};

interface Article {
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  categoryClass: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const articles: Article[] = [
  {
    slug: 'waarom-stuurcijfers-onmisbaar',
    icon: BarChart3,
    category: 'STUURCIJFERS',
    categoryClass: 'badge badge-green',
    title: 'Waarom stuurcijfers onmisbaar zijn voor elke KMO',
    excerpt:
      'De meeste KMO-zaakvoerders nemen beslissingen op buikgevoel. Dat werkt — tot het niet meer werkt. Ontdek waarom stuurcijfers het verschil maken tussen overleven en groeien.',
    readTime: '5 min',
  },
  {
    slug: 'cashflow-verbeteren',
    icon: PiggyBank,
    category: 'CASHFLOW',
    categoryClass: 'badge badge-yellow',
    title: '5 manieren om je cashflow vandaag te verbeteren',
    excerpt:
      'Cashflow is de zuurstof van je bedrijf. Toch worstelen veel KMO\'s met het betalen van facturen. Vijf concrete acties die je meteen kunt toepassen.',
    readTime: '4 min',
  },
  {
    slug: 'verschil-boekhouder-cfo',
    icon: Users,
    category: 'STRATEGIE',
    categoryClass: 'badge badge-coral',
    title: 'Het verschil tussen een boekhouder en een CFO',
    excerpt:
      'Je boekhouder kijkt achteruit. Een CFO kijkt vooruit. Waarom je allebei nodig hebt en hoe een flexibele CFO jouw groei versnelt.',
    readTime: '3 min',
  },
  {
    slug: 'winstgevendheid-meten',
    icon: TrendingUp,
    category: 'WINSTGEVENDHEID',
    categoryClass: 'badge badge-green',
    title: 'Hoe meet je de echte winstgevendheid van je KMO?',
    excerpt:
      'Winst op papier is niet hetzelfde als geld op de rekening. Leer de juiste cijfers lezen om je winstgevendheid echt te begrijpen.',
    readTime: '6 min',
  },
  {
    slug: 'financiele-dashboard',
    icon: Calculator,
    category: 'TOOLS',
    categoryClass: 'badge badge-yellow',
    title: 'Je financieel dashboard in 30 minuten opzetten',
    excerpt:
      'Je hebt geen duur systeem nodig voor goede stuurinformatie. Met een simpele spreadsheet en de juiste KPI\'s ben je al ver.',
    readTime: '7 min',
  },
  {
    slug: 'groeipijnen-herkennen',
    icon: Lightbulb,
    category: 'GROEI',
    categoryClass: 'badge badge-coral',
    title: 'De 3 financiële groeipijnen die elke KMO tegenkomt',
    excerpt:
      'Groei is fantastisch, maar brengt financiële uitdagingen mee die je niet verwacht. Herken de signalen voordat het te laat is.',
    readTime: '5 min',
  },
];

export default function InzichtenPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Inzichten
          </h1>
          <p className="text-base text-cobiz-dark md:text-lg lg:text-xl">
            Praktische tips en kennis over financieel management voor KMO&apos;s
          </p>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <article
                  key={article.slug}
                  className="card-3d flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
                >
                  {/* Category badge */}
                  <div className="mb-3 flex items-center justify-between sm:mb-4">
                    <span className={article.categoryClass}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobiz-green/10">
                      <Icon className="h-5 w-5 text-cobiz-green" />
                    </div>
                    <h2 className="text-lg font-bold leading-snug text-cobiz-dark">
                      {article.title}
                    </h2>
                  </div>

                  {/* Excerpt */}
                  <p className="mb-5 flex-1 text-sm text-gray-600 sm:mb-6">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-cobiz-green">
                    Binnenkort beschikbaar
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-cobiz-dark sm:mb-6 sm:text-3xl md:text-4xl">
            Geen inzicht missen?
          </h2>
          <p className="mb-6 text-base text-gray-600 sm:mb-8 sm:text-lg">
            We delen regelmatig praktische tips over financieel management
            voor KMO&apos;s. Laat je e-mailadres achter en blijf op de hoogte.
          </p>
          <Link href="/contact" className="btn-primary">
            NEEM CONTACT OP
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden section-padding"
        style={{ backgroundColor: '#51B848' }}
      >
        <div
          className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,201,80,0.4) 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl md:text-4xl">
            Liever direct in gesprek?
          </h2>
          <Link href="/gratis-gesprek" className="btn-white w-full sm:w-auto">
            PLAN EEN GRATIS GESPREK
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
