import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | COBIZ',
  description: 'Lees hoe COBIZ je persoonsgegevens beschermt conform de GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="bg-white section-padding">
        <article className="prose mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="text-sm text-gray-500">Laatst bijgewerkt: 1 maart 2025</p>

          <h2>1. Wie zijn wij?</h2>
          <p>
            COBIZ, gevestigd te Hoogveld 105, 9200 Dendermonde, België, is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals
            beschreven in deze privacyverklaring.
          </p>
          <p>
            <strong>Contactgegevens:</strong><br />
            E-mail: <a href="mailto:info@cobiz.be">info@cobiz.be</a><br />
            Telefoon: +32 475 54 49 52
          </p>

          <h2>2. Welke gegevens verwerken wij?</h2>
          <p>Wij verwerken de volgende persoonsgegevens:</p>
          <ul>
            <li>
              <strong>Contactformulieren:</strong> naam, e-mailadres, telefoonnummer
              (optioneel), bedrijfsnaam (optioneel), bericht
            </li>
            <li>
              <strong>Groei-Check:</strong> voornaam, e-mailadres, bedrijfsnaam
              (optioneel), quizantwoorden en score
            </li>
            <li>
              <strong>Workshop boekingen:</strong> naam, e-mailadres, bedrijfsnaam,
              gekozen datum
            </li>
            <li>
              <strong>Groeirapport bestelling:</strong> naam, e-mailadres,
              bedrijfsnaam, facturatiegegevens
            </li>
            <li>
              <strong>Website analytics:</strong> anonieme bezoekersstatistieken
              (geen IP-adressen, geen persoonlijke identificatie)
            </li>
          </ul>

          <h2>3. Waarom verwerken wij deze gegevens?</h2>
          <ul>
            <li>Om je aanvragen te beantwoorden en diensten te leveren</li>
            <li>Om workshops en groeirapporten te organiseren</li>
            <li>Om je gepersonaliseerde resultaten en tips te sturen</li>
            <li>Om onze website te verbeteren op basis van anonieme statistieken</li>
          </ul>

          <h2>4. Rechtsgrond</h2>
          <p>Wij verwerken je gegevens op basis van:</p>
          <ul>
            <li>
              <strong>Toestemming:</strong> voor het versturen van resultaten,
              tips en nieuwsbrieven
            </li>
            <li>
              <strong>Uitvoering van een overeenkomst:</strong> voor het leveren
              van workshops en groeirapporten
            </li>
            <li>
              <strong>Gerechtvaardigd belang:</strong> voor het verbeteren van
              onze website en diensten
            </li>
          </ul>

          <h2>5. Bewaartermijn</h2>
          <p>
            Wij bewaren je persoonsgegevens niet langer dan noodzakelijk voor het
            doel waarvoor ze verzameld zijn. Contactgegevens worden maximaal 2
            jaar bewaard. Boekhoudkundige gegevens worden conform de Belgische
            wetgeving 7 jaar bewaard.
          </p>

          <h2>6. Delen met derden</h2>
          <p>
            Wij delen je persoonsgegevens <strong>niet</strong> met derden voor
            commerciële doeleinden. We maken enkel gebruik van:
          </p>
          <ul>
            <li>
              <strong>Vercel:</strong> voor hosting en anonieme
              websitestatistieken
            </li>
          </ul>

          <h2>7. Je rechten (GDPR)</h2>
          <p>
            Conform de Algemene Verordening Gegevensbescherming (AVG/GDPR) heb
            je het recht om:
          </p>
          <ul>
            <li>Inzage te vragen in je persoonsgegevens</li>
            <li>Je gegevens te laten corrigeren of verwijderen</li>
            <li>De verwerking te beperken of bezwaar te maken</li>
            <li>Je gegevens over te dragen (dataportabiliteit)</li>
            <li>Je toestemming in te trekken</li>
          </ul>
          <p>
            Stuur je verzoek naar{' '}
            <a href="mailto:info@cobiz.be">info@cobiz.be</a>. We reageren
            binnen 30 dagen.
          </p>

          <h2>8. Beveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om je
            gegevens te beschermen tegen ongeautoriseerde toegang, verlies of
            vernietiging. De website is beveiligd met HTTPS-versleuteling.
          </p>

          <h2>9. Klachten</h2>
          <p>
            Heb je een klacht over de verwerking van je persoonsgegevens? Neem
            dan contact op met de Belgische Gegevensbeschermingsautoriteit
            (GBA):
          </p>
          <p>
            Gegevensbeschermingsautoriteit<br />
            Drukpersstraat 35, 1000 Brussel<br />
            <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">
              www.gegevensbeschermingsautoriteit.be
            </a>
          </p>

          <h2>10. Wijzigingen</h2>
          <p>
            Deze privacyverklaring kan van tijd tot tijd worden aangepast. De
            meest recente versie is altijd beschikbaar op deze pagina.
          </p>
        </article>
      </section>
    </SiteLayout>
  );
}
