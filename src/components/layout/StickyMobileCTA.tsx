'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky-mobile-cta transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <Link
          href="/workshop-stuurcijfers"
          className="flex-1 rounded-lg bg-cobiz-green px-3 py-2.5 text-center text-xs font-bold text-white transition-all hover:opacity-90"
        >
          BOEK WORKSHOP
        </Link>
        <Link
          href="/gezondheidscheck"
          className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-center text-xs font-bold text-cobiz-dark transition-all hover:border-cobiz-green"
        >
          GROEI-CHECK
        </Link>
      </div>
    </div>
  );
}
