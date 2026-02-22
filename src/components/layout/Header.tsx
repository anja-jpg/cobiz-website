'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const dienstenItems = [
  { label: 'Workshop Stuurcijfers', href: '/workshop-stuurcijfers' },
  { label: 'Groeirapport', href: '/groeirapport' },
  { label: 'Opleidingstraject', href: '/opleidingstraject' },
  { label: 'Gratis Kennismakingsgesprek', href: '/gratis-gesprek' },
];

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'OVER ONS', href: '/over-ons' },
  { label: 'DIENSTEN', href: '/diensten', hasDropdown: true },
  { label: 'STUURCIJFERS', href: '/stuurcijfers' },
  { label: 'INZICHTEN', href: '/inzichten' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [mobileDienstenOpen, setMobileDienstenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDienstenOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.svg"
            alt="COBIZ.be - samen jouw business verbeteren"
            width={180}
            height={42}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDienstenOpen(!dienstenOpen)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-cobiz-dark transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      dienstenOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {dienstenOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-64 overflow-hidden rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                    {dienstenItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-cobiz-dark transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
                        onClick={() => setDienstenOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-cobiz-dark transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Desktop CTA */}
          <Link
            href="/gezondheidscheck"
            className="btn-primary ml-4 !px-5 !py-2.5 text-sm"
          >
            GRATIS CHECK
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="rounded-md p-2 text-cobiz-dark md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[56px] z-40 bg-white md:hidden">
          <nav className="flex flex-col overflow-y-auto px-4 pb-8 pt-4">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileDienstenOpen(!mobileDienstenOpen)}
                    className="flex w-full items-center justify-between border-b border-gray-100 px-2 py-4 text-base font-semibold text-cobiz-dark"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileDienstenOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileDienstenOpen && (
                    <div className="border-b border-gray-100 bg-cobiz-mint/60 py-2">
                      {dienstenItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm text-cobiz-dark transition-colors hover:text-cobiz-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="border-b border-gray-100 px-2 py-4 text-base font-semibold text-cobiz-dark transition-colors hover:text-cobiz-green"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <Link
              href="/gezondheidscheck"
              className="btn-primary mt-6 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              GRATIS CHECK
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
