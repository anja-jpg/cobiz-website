import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy | COBIZ',
  description: 'Lees hoe COBIZ cookies gebruikt op deze website.',
};

export default function CookiePolicyPage() {
  return (
    <SiteLayout>
      <section className="bg-white section-padding">
        <article className="prose mx-auto max-w-3xl">
          <h1>Cookie Policy</h1>
          <p className="text-sm text-gray-500">Laatst bijgewerkt: 1 maart 2025</p>

          <h2>Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen
            wanneer je een website bezoekt. Ze helpen de website om je apparaat te
            herkennen en bepaalde informatie te onthouden.
          </p>

          <h2>Welke cookies gebruiken wij?</h2>

          <h3>Strikt noodzakelijke cookies</h3>
          <p>
            Deze cookies zijn nodig voor het functioneren van de website. Ze worden
            bijvoorbeeld gebruikt om je cookievoorkeuren op te slaan. Deze cookies
            vereisen geen toestemming.
          </p>
          <table>
            <thead>
              <tr>
                <th>Naam</th>
                <th>Doel</th>
                <th>Bewaartermijn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cobiz_cookie_consent</td>
                <td>Slaat je cookievoorkeuren op</td>
                <td>1 jaar</td>
              </tr>
            </tbody>
          </table>

          <h3>Analytische cookies (na toestemming)</h3>
          <p>
            We gebruiken Vercel Web Analytics om anonieme bezoekersstatistieken
            bij te houden. Deze cookies worden <strong>alleen geplaatst als je
            hiermee instemt</strong>.
          </p>
          <ul>
            <li>Geen persoonlijke gegevens worden verzameld</li>
            <li>IP-adressen worden niet opgeslagen</li>
            <li>Er worden geen cookies gedeeld met derden</li>
            <li>De gegevens worden enkel gebruikt om onze website te verbeteren</li>
          </ul>

          <h2>Je toestemming beheren</h2>
          <p>
            Bij je eerste bezoek vragen we je toestemming voor analytische cookies.
            Je kunt je keuze op elk moment wijzigen door je browsergegevens te
            wissen, waarna de cookiebanner opnieuw verschijnt.
          </p>

          <h2>Contact</h2>
          <p>
            Heb je vragen over ons cookiebeleid? Neem contact op via{' '}
            <a href="mailto:info@cobiz.be">info@cobiz.be</a>.
          </p>
        </article>
      </section>
    </SiteLayout>
  );
}
