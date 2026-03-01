import Link from "next/link";

interface ProductCard {
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  price: string;
  details: string;
  ctaLabel: string;
  ctaHref: string;
  ctaClass: string;
}

const products: ProductCard[] = [
  {
    badge: "BOEKBAAR",
    badgeClass: "badge badge-green",
    title: "Workshop Stuurcijfers",
    description:
      "In 4,5 uur leer je jouw cijfers omzetten naar heldere stuurinformatie. Kleine groep, hands-on.",
    price: "\u20AC125 incl. BTW",
    details: "Inclusief broodjes & materiaal",
    ctaLabel: "BOEK JE PLEK",
    ctaHref: "/workshop-stuurcijfers",
    ctaClass: "btn-primary",
  },
  {
    badge: "POPULAIR",
    badgeClass: "badge badge-yellow",
    title: "Groeirapport",
    description:
      "Volledige financi\u00eble doorlichting met risicoscore op 5 valkuilen. Helder rapport met actieplan en quick wins.",
    price: "\u20AC1.500 excl. BTW",
    details: "50% aanbetaling, 50% bij oplevering",
    ctaLabel: "MEER INFO",
    ctaHref: "/groeirapport",
    ctaClass: "btn-secondary",
  },
  {
    badge: "",
    badgeClass: "",
    title: "Gratis Kennismakingsgesprek",
    description:
      "1 uur vrijblijvend sparren over jouw financi\u00eble uitdagingen. Online of fysiek.",
    price: "Gratis",
    details: "Geen verplichtingen",
    ctaLabel: "PLAN GESPREK",
    ctaHref: "/gratis-gesprek",
    ctaClass: "btn-secondary",
  },
];

export default function ProductSpotlight() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-2 text-2xl font-bold text-cobiz-dark sm:mb-3 sm:text-3xl md:text-4xl">
            Onze Diensten
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Van quick scan tot diepgaande begeleiding
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="card-hover flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
            >
              {/* Badge */}
              <div className="mb-3 min-h-[1.5rem] sm:mb-4">
                {product.badge && (
                  <span className={product.badgeClass}>{product.badge}</span>
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
                className={`${product.ctaClass} w-full`}
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
