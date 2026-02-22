import Link from 'next/link';

const dienstenLinks = [
  { label: 'Workshop Stuurcijfers', href: '/workshop-stuurcijfers' },
  { label: 'Groeirapport', href: '/groeirapport' },
  { label: 'Opleidingstraject', href: '/opleidingstraject' },
  { label: 'Gratis Kennismakingsgesprek', href: '/gratis-gesprek' },
  { label: 'Gezondheidscheck', href: '/gezondheidscheck' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className="bg-cobiz-dark text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: COBIZ Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                CO<span className="text-cobiz-green">BIZ</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Wij helpen ondernemers groeien met heldere stuurcijfers en
              strategisch inzicht. Samen maken we jouw bedrijf toekomstbestendig.
            </p>
          </div>

          {/* Column 2: Diensten */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Diensten
            </h3>
            <ul className="space-y-3">
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
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
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
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Volg Ons
            </h3>
            <ul className="space-y-3">
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/50">
            &copy; 2025 COBIZ. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
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
