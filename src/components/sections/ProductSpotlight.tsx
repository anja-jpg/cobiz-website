import Link from "next/link";
import type { ProductsContent } from "@/lib/content";

const ctaClasses: Record<string, string> = {
  '/workshop-stuurcijfers': 'btn-primary',
  '/groeirapport': 'btn-secondary',
  '/gratis-gesprek': 'btn-secondary',
}

const badgeClasses: Record<string, string> = {
  'BOEKBAAR': 'badge badge-green',
  'POPULAIR': 'badge badge-yellow',
}

export default function ProductSpotlight({ content }: { content: ProductsContent }) {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-2 text-2xl font-bold text-cobiz-dark sm:mb-3 sm:text-3xl md:text-4xl">
            {content.title}
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((product) => (
            <div
              key={product.title}
              className="card-hover flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
            >
              {/* Badge */}
              <div className="mb-3 min-h-[1.5rem] sm:mb-4">
                {product.badge && (
                  <span className={badgeClasses[product.badge] || 'badge'}>{product.badge}</span>
                )}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-cobiz-dark sm:mb-3 sm:text-xl">
                {product.title}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm text-gray-600 sm:mb-6 sm:text-base">{product.description}</p>

              {/* Price */}
              <div className="mb-5 sm:mb-6">
                <p className="text-xl font-bold text-cobiz-dark sm:text-2xl">
                  {product.price}
                </p>
                <p className="text-xs text-gray-500 sm:text-sm">{product.details}</p>
              </div>

              {/* CTA */}
              <Link
                href={product.ctaHref}
                className={`${ctaClasses[product.ctaHref] || 'btn-secondary'} w-full`}
              >
                {product.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
