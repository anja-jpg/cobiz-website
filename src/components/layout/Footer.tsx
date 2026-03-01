import Link from 'next/link';
import Image from 'next/image';

const dienstenLinks = [
  { label: 'Workshop Stuurcijfers', href: '/workshop-stuurcijfers' },
  { label: 'Groeirapport', href: '/groeirapport' },
  { label: 'Opleidingstraject', href: '/opleidingstraject' },
  { label: 'Gratis Kennismakingsgesprek', href: '/gratis-gesprek' },
  { label: 'Groei-Check', href: '/gezondheidscheck' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cobiz-consultancy/' },
  { label: 'Facebook', href: 'https://www.facebook.com/COBIZConsult' },
  { label: 'Instagram', href: 'https://www.instagram.com/cobizconsult/' },
];

export default function Footer() {
  return (
    <footer className="bg-cobiz-dark pb-20 text-white md:pb-0">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {/* Column 1: COBIZ Logo & Tagline */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-full-white.svg"
                alt="COBIZ.be"
                width={140}
                height={34}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4">
              Wij helpen ondernemers groeien met heldere stuurcijfers en
              strategisch inzicht. Samen maken we jouw bedrijf toekomstbestendig.
            </p>
          </div>

          {/* Column 2: Diensten */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:mb-4 sm:text-sm">
              Diensten
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {dienstenLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-cobiz-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:mb-4 sm:text-sm">
              Contact
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="text-sm text-white/70">
                Hoogveld 105<br />
                9200 Dendermonde
              </li>
              <li>
                <a
                  href="mailto:info@cobiz.be"
                  className="text-sm text-white/70 transition-colors hover:text-cobiz-green"
                >
                  info@cobiz.be
                </a>
              </li>
              <li>
                <a
                  href="tel:+32475544952"
                  className="text-sm text-white/70 transition-colors hover:text-cobiz-green"
                >
                  +32 475 54 49 52
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Volg Ons */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:mb-4 sm:text-sm">
              Volg Ons
            </h3>
            <ul className="flex gap-4 sm:flex-col sm:gap-0 sm:space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-cobiz-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:gap-4 sm:px-6 sm:py-6 lg:px-8">
          <p className="text-xs text-white/50">
            &copy; 2025 COBIZ. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
