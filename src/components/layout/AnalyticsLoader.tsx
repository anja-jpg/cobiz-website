'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { getStoredConsent } from './CookieConsent';

/**
 * Only loads Vercel Web Analytics after the user has accepted cookies.
 * Listens for consent changes via a custom event dispatched by CookieConsent.
 */
export default function AnalyticsLoader() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => setConsented(getStoredConsent() === 'accepted');
    check();

    window.addEventListener('cookie-consent-change', check);
    return () => window.removeEventListener('cookie-consent-change', check);
  }, []);

  if (!consented) return null;
  return <Analytics />;
}
