import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, GraduationCap, Building2, Target } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import {
  getAboutPhotoUrl,
  getContent,
  getPageContent,
  type BannerContent,
  type OverOnsStoryContent,
  type OverOnsExpertiseContent,
  type OverOnsValuesContent,
  type OverOnsMissionContent,
} from '@/lib/content';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Over Ons | Anja Warrot & Dirk Colman | COBIZ Dendermonde',
  description:
    'Maak kennis met Anja Warrot en Dirk Colman, oprichters van COBIZ in Dendermonde. 20+ jaar financiële expertise en 7 jaar ervaring als KMO-zaakvoerder.',
  alternates: { canonical: '/over-ons' },
  openGraph: {
    title: 'Over Ons | COBIZ',
    description: 'Leer Anja Warrot en Dirk Colman kennen. 20+ jaar financiële expertise, nu ten dienste van KMO\'s.',
  },
};

const valueIcons = [Briefcase, GraduationCap, Building2, Target];

export default async function OverOnsPage() {
  const [photoUrl, banner, content] = await Promise.all([
    getAboutPhotoUrl(),
    getContent<BannerContent>('banners', 'over-ons'),
    getPageContent('overons'),
  ]);

  const story = content.story as OverOnsStoryContent;
  const expertise = content.expertise as OverOnsExpertiseContent;
  const values = content.values as OverOnsValuesContent;
  const mission = content.mission as OverOnsMissionContent;

  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            {banner.title}
          </h1>
          <p className="text-base text-white/80 md:text-lg lg:text-xl">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            {/* Photo */}
            <div className="w-full flex-1">
              <Image
                src={photoUrl}
                alt="Anja Warrot en Dirk Colman, oprichters van COBIZ"
                width={600}
                height={450}
                className="rounded-2xl object-cover"
                priority
              />
            </div>

            {/* Story text */}
            <div className="flex-1">
              <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
                {story.paragraph1}
              </p>

              <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
                {story.paragraph2}
              </p>

              <blockquote className="border-l-4 border-cobiz-green py-2 pl-5 sm:pl-6">
                <p className="text-base italic text-cobiz-dark sm:text-lg">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            {expertise.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {expertise.items.map(({ title, text }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                <h3 className="mb-2 text-base font-bold text-cobiz-dark sm:text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why COBIZ ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
            {values.title}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.items.map(({ title, description }, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div
                  key={title}
                  className="card-3d flex flex-col items-center rounded-xl bg-white p-5 text-center sm:p-6"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cobiz-green/10 sm:mb-4 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 text-cobiz-green sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-cobiz-dark sm:mb-2 sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-cobiz-dark sm:mb-8 sm:text-3xl md:text-4xl">
            {mission.title}
          </h2>
          <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
            {mission.paragraph1}
          </p>
          <p className="text-base text-gray-700 sm:text-lg">
            {mission.paragraph2}
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#51B848' }}>
        <div className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(92,201,80,0.4) 0%, transparent 70%)' }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl md:text-4xl">
            Benieuwd wat we voor jou kunnen betekenen?
          </h2>
          <Link href="/gratis-gesprek" className="btn-white w-full sm:w-auto">
            PLAN EEN GRATIS GESPREK
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
