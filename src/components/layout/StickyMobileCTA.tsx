'use client';

import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta md:hidden">
      <div className="flex items-center gap-3">
        <Link
          href="/workshop-stuurcijfers"
          className="flex-1 rounded-lg bg-cobiz-green px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-cobiz-green-dark"
        >
          BOEK WORKSHOP
        </Link>
        <Link
          href="/gezondheidscheck"
          className="flex-1 rounded-lg border-2 border-cobiz-dark bg-white px-4 py-3 text-center text-sm font-bold text-cobiz-dark transition-colors hover:bg-cobiz-dark hover:text-white"
        >
          GRATIS CHECK
        </Link>
      </div>
    </div>
  );
}
