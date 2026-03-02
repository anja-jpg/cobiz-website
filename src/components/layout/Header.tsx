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

  // Close mobile menu on route change (resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? 'py-1.5' : 'py-2'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="COBIZ.be - samen jouw business verbeteren"
            width={1000}
            height={1000}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDienstenOpen(!dienstenOpen)}
                  className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-semibold text-cobiz-dark transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      dienstenOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown with animation */}
                <div
                  className={`absolute left-0 top-full z-50 mt-1 w-64 overflow-hidden rounded-lg border border-gray-100 bg-white py-1.5 shadow-lg transition-all duration-200 origin-top ${
                    dienstenOpen
                      ? 'scale-y-100 opacity-100'
                      : 'pointer-events-none scale-y-95 opacity-0'
                  }`}
                >
                  {dienstenItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-cobiz-dark transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
                      onClick={() => setDienstenOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-cobiz-dark transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Desktop CTA */}
          <Link
            href="/gezondheidscheck"
            className="ml-3 inline-block rounded-lg bg-cobiz-green px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            GRATIS GROEI-CHECK
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-cobiz-dark transition-colors hover:bg-cobiz-mint lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'top-[9px] rotate-45' : 'top-[3px] rotate-0'
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'top-[9px] -rotate-45' : 'top-[15px] rotate-0'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex h-12 items-center justify-between border-b border-gray-100 px-5">
          <span className="text-sm font-bold text-cobiz-dark">Menu</span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-cobiz-mint hover:text-cobiz-dark"
            aria-label="Menu sluiten"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex h-[calc(100%-48px)] flex-col overflow-y-auto px-5 pb-8 pt-4">
          <div className="flex-1 space-y-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileDienstenOpen(!mobileDienstenOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-cobiz-dark transition-colors hover:bg-cobiz-mint"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        mobileDienstenOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDienstenOpen ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className="ml-3 space-y-0.5 border-l-2 border-cobiz-green/20 py-1 pl-4">
                      {dienstenItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-cobiz-mint hover:text-cobiz-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-cobiz-dark transition-colors hover:bg-cobiz-mint"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
            <Link
              href="/gezondheidscheck"
              className="btn-primary block text-center text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              GRATIS GROEI-CHECK
            </Link>
            <Link
              href="/workshop-stuurcijfers"
              className="btn-secondary block text-center text-sm !py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              BOEK WORKSHOP
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
