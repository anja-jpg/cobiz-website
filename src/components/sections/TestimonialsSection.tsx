import { Star } from 'lucide-react';
import type { TestimonialsContent } from '@/lib/content';

export default function TestimonialsSection({ content }: { content: TestimonialsContent }) {
  return (
    <section className="bg-cobiz-mint section-padding">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          {content.title}
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {content.items.map((t, i) => (
            <div
              key={i}
              className="card-3d flex flex-col rounded-2xl bg-white p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-cobiz-yellow text-cobiz-yellow" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-gray-700 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-cobiz-dark">{t.name}</p>
                <p className="text-xs text-gray-400">{t.source}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-gray-400 sm:mt-6">
          Bekijk alle reviews op{' '}
          <a
            href="https://share.google/HMIlC7q4j4Ud55mZB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobiz-green hover:underline"
          >
            Google
          </a>
        </p>
      </div>
    </section>
  );
}
