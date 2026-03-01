import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, PiggyBank } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Cashflow: waarom een winstgevend bedrijf toch in de problemen kan komen | COBIZ',
  description:
    'Het verschil tussen winst en cash – en waarom dat voor elke ondernemer essentieel is. Ontdek waarom je bankrekening een ander verhaal vertelt dan je resultatenrekening.',
  alternates: { canonical: '/inzichten/cashflow-winst-verschil' },
  openGraph: {
    title: 'Cashflow: waarom een winstgevend bedrijf toch in de problemen kan komen | COBIZ',
    description: 'Het verschil tussen winst en cash – en waarom dat voor elke ondernemer essentieel is.',
  },
};

export default function CashflowWinstVerschilPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden section-padding"
        style={{ backgroundColor: '#51B848' }}
      >
        <div
          className="animate-pattern pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="badge badge-yellow">CASHFLOW</span>
            <span className="flex items-center gap-1 text-xs text-white/70">
              <Clock className="h-3 w-3" />9 min
            </span>
          </div>
          <h1 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Cashflow: waarom een winstgevend bedrijf toch in de problemen kan komen
          </h1>
          <p className="text-base text-cobiz-dark md:text-lg">
            Het verschil tussen winst en cash &ndash; en waarom dat voor elke ondernemer essentieel is
          </p>
        </div>
      </section>

      {/* ── Article ── */}
      <section className="bg-white section-padding">
        <article className="prose mx-auto max-w-3xl">
          <p className="lead">
            Je omzet stijgt, je klanten zijn tevreden, en op papier draai je winst.
            Toch lig je wakker omdat je niet weet of je volgende maand je leveranciers
            kunt betalen. Het is een van de meest voorkomende frustraties bij
            KMO-ondernemers: je bedrijf is winstgevend, maar je bankrekening vertelt
            een ander verhaal.
          </p>

          <p>
            Het antwoord zit in het verschil tussen winst en cashflow. Twee begrippen
            die vaak door elkaar worden gehaald, maar die in de praktijk heel anders
            werken. En juist bij groeiende KMO&apos;s &ndash; of je nu een
            handelsbedrijf runt, een dienstverlenend bedrijf hebt of in productie zit
            &ndash; kan dat verschil het onderscheid maken tussen rustig slapen en
            constant stress over je rekeningen.
          </p>

          <h2>Winst is niet hetzelfde als geld op je rekening</h2>

          <p>
            Winst is wat er overblijft als je al je kosten aftrekt van je omzet. Dat
            is wat je in je jaarrekening terugvindt. Cashflow is iets anders: dat is
            het geld dat daadwerkelijk in- en uitstroomt op je bankrekening. En die
            twee lopen lang niet altijd gelijk.
          </p>

          <p>
            Een eenvoudig voorbeeld: je levert in januari een grote opdracht af van
            &euro;20.000. Op papier is dat omzet &ndash; en als je kosten &euro;14.000
            bedragen, heb je &euro;6.000 winst. Mooi toch? Maar als je klant pas na
            60 dagen betaalt, en jij je leverancier en je medewerkers w&eacute;l deze
            maand moet betalen, dan heb je een cashflowprobleem. Je bent winstgevend,
            maar je hebt geen geld. En dat is precies de situatie waar veel
            ondernemers tegenaan lopen zonder te begrijpen hoe dat kan.
          </p>

          <h2>Waarom loopt het bij zoveel KMO&apos;s mis?</h2>

          <p>
            Het verschil tussen winst en cash sluipt er vaak ongemerkt in. Dit zijn de
            meest voorkomende oorzaken die we tegenkomen bij KMO&apos;s:
          </p>

          <h3>Klanten die laat betalen</h3>
          <p>
            Je factuur is verstuurd, maar het geld laat op zich wachten. Ondertussen
            lopen je eigen kosten gewoon door. Hoe meer je omzet groeit, hoe groter
            dit probleem wordt &ndash; want je financiert in feite het werkkapitaal van
            je klant.
          </p>

          <h3>Voorraad die geld vasthoudt</h3>
          <p>
            Als je producten verkoopt, zit er vaak flink wat geld vast in je voorraad.
            Die voorraad telt mee als bezit op je balans, maar het is geld dat je niet
            kunt gebruiken om rekeningen te betalen. Te veel voorraad is als geld dat
            in een kast ligt te slapen.
          </p>

          <h3>Groei kost geld v&oacute;&oacute;r het geld oplevert</h3>
          <p>
            Dit is misschien wel de grootste valkuil: je bedrijf groeit, je neemt
            mensen aan, je investeert in materiaal of marketing, maar de opbrengsten
            volgen pas later. Groei vreet cash &ndash; en hoe sneller je groeit, hoe
            meer cash je nodig hebt om die groei te financieren.
          </p>

          <h3>Onverwachte kosten</h3>
          <p>
            Een machine die kapotgaat, een belastingafrekening die hoger uitvalt dan
            verwacht, een klant die niet betaalt &ndash; als je geen buffer hebt,
            kunnen dit soort tegenvallers je direct in de problemen brengen.
          </p>

          <h2>Wat kun je er als ondernemer aan doen?</h2>

          <p>
            Het goede nieuws: cashflowproblemen zijn bijna altijd te voorkomen
            &oacute;f op te lossen, als je er op tijd bij bent. Het begint met
            inzicht.
          </p>

          <ul>
            <li>
              <strong>Maak je betalingstermijnen bespreekbaar.</strong> Durf kortere
              betaaltermijnen af te spreken met je klanten. En volg actief op als
              facturen over de vervaldatum gaan &ndash; elke dag dat je wacht,
              financier jij je klant.
            </li>
            <li>
              <strong>Houd je voorraad scherp in de gaten.</strong> Analyseer
              regelmatig welke voorraad snel draait en welke blijft liggen. Minder
              voorraad betekent meer cash.
            </li>
            <li>
              <strong>Plan vooruit bij groei.</strong> Ga niet alleen kijken of een
              investering winstgevend is, maar ook wanneer dat geld terugkomt. Een
              cashflowprognose &ndash; een voorspelling van je in- en uitstroom voor
              de komende maanden &ndash; is daarbij onmisbaar.
            </li>
            <li>
              <strong>Bouw een buffer op.</strong> Een vuistregel: houd minstens twee
              &agrave; drie maanden vaste kosten achter de hand. Dat geeft je de
              ruimte om tegenvallers op te vangen zonder direct in paniek te schieten.
            </li>
            <li>
              <strong>Betrek je bank op tijd.</strong> Als je duidelijk kunt aantonen
              w&aacute;&aacute;rom je cashflow tijdelijk onder druk staat en je een
              helder plan hebt, is je bank vaak bereid om bij te springen &ndash;
              bijvoorbeeld met een tijdelijke kredietlijn of
              overbruggingsfinanciering. Banken helpen graag mee, maar dan moet je
              w&eacute;l met een onderbouwd verhaal komen, niet pas als het water aan
              je lippen staat.
            </li>
            <li>
              <strong>Kijk m&aacute;&aacute;ndelijks naar je cashpositie.</strong> Niet
              pas bij de jaarrekening, maar elke maand. Hoe eerder je een probleem
              ziet aankomen, hoe meer opties je hebt om bij te sturen.
            </li>
          </ul>

          <h2>Van buikgevoel naar grip op je cash</h2>

          <p>
            Veel ondernemers voelen dat er iets niet klopt, maar kunnen het niet
            precies benoemen. Dat is logisch &ndash; je bent ondernemer, geen
            financieel specialist. En je boekhouder &ndash; hoe goed die ook is
            &ndash; richt zich vooral op je wettelijke verplichtingen, niet op het
            voorspellen van je cashflow over de komende zes maanden.
          </p>

          <p>
            Dat is precies waar COBIZ het verschil maakt. Vanuit Dendermonde werken
            we met KMO&apos;s in heel Oost-Vlaanderen en de regio
            Antwerpen&ndash;Brussel&ndash;Gent. We helpen je om inzicht te krijgen in
            je cashflow, een heldere prognose op te stellen, en concrete stappen te
            zetten om je werkkapitaal te optimaliseren. Geen ingewikkelde modellen,
            maar praktische oplossingen die passen bij jouw bedrijf en jouw situatie.
          </p>

          <p>
            Want uiteindelijk gaat het niet om de cijfers zelf. Het gaat om de rust
            en het vertrouwen om de juiste beslissingen te nemen &ndash; met een
            helder zicht op wat er binnenkomt, wat er uitgaat, en wat er de komende
            maanden te verwachten is. Zodat je je energie kunt steken in wat je het
            liefste doet: ondernemen.
          </p>

          <h2>Wil je meer grip op de cashflow in je bedrijf?</h2>

          <p>
            Neem contact op voor een vrijblijvend kennismakingsgesprek. We kijken
            graag samen met je naar de mogelijkheden.{' '}
            <Link
              href="/gratis-gesprek"
              className="text-cobiz-green hover:underline"
            >
              Plan een gratis gesprek
            </Link>{' '}
            of stuur een mail naar{' '}
            <a
              href="mailto:info@cobiz.be"
              className="text-cobiz-green hover:underline"
            >
              info@cobiz.be
            </a>{' '}
            &ndash; dan plannen we iets in.
          </p>

          <hr />

          <p className="text-sm text-gray-500">
            <strong>Over COBIZ</strong> &mdash; COBIZ is het adviesbureau van Anja
            Warrot en Dirk Colman, gevestigd in Dendermonde. Met meer dan 20 jaar
            ervaring in finance en 7 jaar als ondernemer helpen we KMO&apos;s met
            flexibele CFO- en controllingexpertise. Ondernemers die ondernemers
            helpen &ndash; dat is waar we voor staan.
          </p>
        </article>
      </section>

      {/* ── Back + CTA ── */}
      <section className="bg-cobiz-mint section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/inzichten"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-cobiz-green transition-colors hover:text-cobiz-green-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar alle inzichten
          </Link>
          <h2 className="mb-4 text-2xl font-bold text-cobiz-dark sm:mb-6 sm:text-3xl">
            Wil je meer grip op je cashflow?
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/gratis-gesprek" className="btn-primary w-full sm:w-auto">
              PLAN EEN GRATIS GESPREK
            </Link>
            <Link href="/gezondheidscheck" className="btn-secondary w-full sm:w-auto">
              DOE DE GROEI-CHECK
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
