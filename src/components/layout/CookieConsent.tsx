'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'cobiz_cookie_consent';

export type CookieConsent = 'accepted' | 'declined' | null;

/** Read the stored consent value (safe for SSR). */
export function getStoredConsent(): CookieConsent {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === 'accepted' || v === 'declined') return v;
  return null;
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show banner if no consent has been recorded yet
    if (!getStoredConsent()) {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    // Dispatch event so analytics can initialize
    window.dispatchEvent(new Event('cookie-consent-change'));
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
    window.dispatchEvent(new Event('cookie-consent-change'));
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex-1">
            <p className="mb-1 text-sm font-bold text-cobiz-dark sm:text-base">
              We respecteren je privacy
            </p>
            <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
              We gebruiken cookies om je ervaring te verbeteren en anonieme
              bezoekersstatistieken bij te houden. Geen persoonlijke gegevens
              worden gedeeld met derden.{' '}
              <Link
                href="/cookie-policy"
                className="font-medium text-cobiz-green underline"
              >
                Meer info
              </Link>
            </p>
          </div>
          <div className="flex shrink-0 gap-2 sm:flex-col">
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 rounded-lg bg-cobiz-green px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-cobiz-green-dark sm:flex-none sm:text-sm"
            >
              Accepteren
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-gray-600 transition-colors hover:bg-gray-50 sm:flex-none sm:text-sm"
            >
              Weigeren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
