'use client';

import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta md:hidden">
      <div className="flex items-center gap-3">
        <Link
          href="/workshop-stuurcijfers"
          className="flex-1 rounded-lg px-4 py-3 text-center text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #133F3E, #51B848)' }}
        >
          BOEK WORKSHOP
        </Link>
        <Link
          href="/gezondheidscheck"
          className="flex-1 rounded-lg bg-white px-4 py-3 text-center text-sm font-bold text-cobiz-dark shadow-sm transition-all hover:shadow-md"
        >
          GRATIS CHECK
        </Link>
      </div>
    </div>
  );
}
