import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Boekhouder, controller, CFO: waarom je KMO meer nodig heeft dan alleen een boekhouder | COBIZ',
  description:
    'Ontdek de drie financiële rollen die elk groot bedrijf heeft – en waarom ook jouw KMO ze nodig heeft. Leer het verschil tussen boekhouder, controller en CFO.',
  alternates: { canonical: '/inzichten/boekhouder-controller-cfo' },
  openGraph: {
    title: 'Boekhouder, controller, CFO | COBIZ',
    description: 'Drie financiële rollen die elk groot bedrijf heeft – en waarom ook jouw KMO ze nodig heeft.',
  },
};

export default function BoekhouderControllerCFOPage() {
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
            <span className="badge badge-coral">STRATEGIE</span>
            <span className="flex items-center gap-1 text-xs text-white/70">
              <Clock className="h-3 w-3" />8 min
            </span>
          </div>
          <h1 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Boekhouder, controller, CFO: waarom je KMO meer nodig heeft dan
            alleen een boekhouder
          </h1>
          <p className="text-base text-white/80 md:text-lg">
            Drie financi&euml;le rollen die elk groot bedrijf heeft &ndash; en
            waarom ook jouw klein of middelgroot bedrijf ze nodig heeft
          </p>
        </div>
      </section>

      {/* ── Article ── */}
      <section className="bg-white section-padding">
        <article className="prose mx-auto max-w-3xl">
          <p className="lead">
            Je hebt een bedrijf met een handvol medewerkers. De zaak groeit, je
            boekhouder levert goed werk, en toch heb je het gevoel dat je
            belangrijke beslissingen neemt zonder het volledige plaatje. Je
            krijgt keurig je kwartaalcijfers, maar wat moet je er eigenlijk mee?
            Klinkt dat herkenbaar?
          </p>

          <p>
            Veel KMO-ondernemers rekenen &ndash; heel begrijpelijk &ndash; op
            hun boekhouder als het om cijfers gaat. Maar in grotere bedrijven
            bestaan er drie aparte financi&euml;le functies, elk met een heel
            eigen rol. En die verdeling bestaat niet zomaar: elk van die drie
            functies beantwoordt een ander type vraag. Laten we eens kijken wat
            elke functie precies doet &ndash; en waarom dat ook voor jouw
            kleinere onderneming relevant is.
          </p>

          <h2>Drie functies, drie verschillende brillen</h2>

          <h3>De boekhouder: je wettelijke en fiscale basis</h3>
          <p>
            Je boekhouder is een onmisbare partner. Hij of zij zorgt ervoor dat
            je bedrijf in orde is met alle wettelijke en fiscale verplichtingen.
            Denk aan de btw-aangiften, de jaarrekening, de sociale balans en de
            samenwerking met de fiscalist voor je belastingaangifte. Een goede
            boekhouder bespaart je niet alleen zorgen, maar ook geld &ndash;
            door je fiscaal te optimaliseren en ervoor te zorgen dat je nooit
            voor verrassingen staat bij de belastingen.
          </p>
          <p>
            De focus van de boekhouder ligt op correcte registratie en wettelijke
            naleving. De cijfers die je krijgt zijn een betrouwbaar verslag van
            wat er is gebeurd. Essentieel en waardevol, maar het vertelt je nog
            niet wat je morgen moet doen of waar je over zes maanden wilt staan.
          </p>

          <h3>De business controller: van cijfers naar inzicht</h3>
          <p>
            De business controller &ndash; of management controller &ndash;
            vertaalt die cijfers naar bruikbare informatie. Waar de boekhouder
            vastlegt, gaat de controller analyseren en signaleren.
          </p>
          <p>
            Concreet betekent dat: budgetten en prognoses opstellen, uitzoeken
            welke producten of klanten echt winstgevend zijn, en heldere
            rapportages bouwen. Een goede controller ontwikkelt ook KPI&apos;s
            &ndash; dat zijn meetbare indicatoren waarmee je in &eacute;&eacute;n
            oogopslag ziet hoe je bedrijf presteert, bijvoorbeeld je winstmarge
            per klant of je gemiddelde betalingstermijn. De controller zegt niet
            alleen &ldquo;vorig kwartaal hadden we &euro;50.000 omzet&rdquo;,
            maar ook &ldquo;dat is 12% minder dan gepland, en dit is de
            oorzaak&rdquo;. Dat verschil is groot.
          </p>
          <p>
            Kort gezegd: de controller kijkt naar het heden en laat je zien waar
            je nu &eacute;cht staat.
          </p>

          <h3>De CFO: strategisch vooruitkijken</h3>
          <p>
            De CFO &ndash; voluit Chief Financial Officer, zeg maar de
            financi&euml;le eindverantwoordelijke &ndash; kijkt vooruit en denkt
            strategisch mee met de ondernemer. Moet je investeren of afwachten?
            Is die overname haalbaar? Hoe overtuig je de bank van je
            groeiplannen? De CFO helpt je die beslissingen onderbouwen met
            cijfers &eacute;n ervaring, en zorgt dat je financi&euml;le structuur
            klaar is voor de toekomst.
          </p>
          <p>
            De CFO kijkt naar de toekomst en helpt je de juiste koers bepalen.
          </p>

          <h2>Waarom dit ook voor jouw KMO belangrijk is</h2>
          <p>Als KMO-ondernemer herken je misschien deze situaties:</p>
          <ul>
            <li>
              Je neemt beslissingen op buikgevoel omdat je geen duidelijk
              financieel overzicht hebt.
            </li>
            <li>
              Je weet niet precies welke klanten of producten winstgevend zijn
              &ndash; en welke je stilletjes geld kosten.
            </li>
            <li>
              Je cashflow (het geld dat in- en uitstroomt) schommelt zonder dat
              je weet waarom.
            </li>
            <li>
              Je wilt groeien of investeren maar je hebt geen helder financieel
              plan.
            </li>
          </ul>
          <p>
            Dat is geen tekortkoming van je boekhouder. Die doet precies
            waarvoor je hem of haar hebt ingeschakeld: je wettelijke
            verplichtingen in orde houden en je fiscaal bijstaan. Maar de stap
            van cijfers naar stuurinformatie &ndash; van weten wat er is gebeurd
            naar begrijpen wat je nu moet doen &ndash; d&aacute;t is wat
            ontbreekt. Je mist de controller- en de CFO-rol. En hoe groter je
            bedrijf wordt, hoe meer die gap begint te wegen op je beslissingen.
          </p>

          <h2>
            &ldquo;Een CFO? Dat is toch alleen voor grote bedrijven?&rdquo;
          </h2>
          <p>
            Een voltijdse CFO kost al snel meer dan &euro;120.000 per jaar. Dat
            is voor de meeste kleine en middelgrote bedrijven niet haalbaar
            &ndash; en ook helemaal niet nodig. Maar de expertise die een CFO en
            controller bieden? Die heb je w&eacute;l nodig.
          </p>
          <p>
            De oplossing: flexibele, externe ondersteuning. Net zoals je
            waarschijnlijk geen voltijdse jurist in dienst hebt maar wel
            juridisch advies inschakelt wanneer nodig, kun je CFO- en
            controllingexpertise ook op maat inzetten.
          </p>

          <h2>Hoe COBIZ dit aanpakt</h2>
          <p>
            Bij COBIZ vullen we de controller- en CFO-rol flexibel in, afgestemd
            op wat jouw bedrijf nodig heeft. Vanuit Dendermonde werken we met
            KMO&apos;s in heel Oost-Vlaanderen en de regio
            Antwerpen&ndash;Brussel&ndash;Gent. We zijn zelf ondernemers &ndash;
            we weten dus uit ervaring hoe het voelt om beslissingen te moeten
            nemen zonder volledig zicht op de cijfers. Die combinatie van
            financi&euml;le expertise en ondernemerservaring maakt dat we niet in
            abstracte modellen denken, maar in praktische oplossingen.
          </p>
          <p>Concreet kan dat betekenen:</p>
          <ul>
            <li>
              Je rendabiliteit per product of klant in kaart brengen, zodat je
              weet waar je geld verdient.
            </li>
            <li>
              Heldere rapportages en dashboards bouwen die je elke maand inzicht
              geven &ndash; niet pas bij de jaarrekening.
            </li>
            <li>
              Investeringsbeslissingen financieel onderbouwen, zodat je met
              vertrouwen kunt beslissen.
            </li>
            <li>
              Meedenken als sparringpartner bij strategische vragen over groei,
              financiering of optimalisatie.
            </li>
          </ul>
          <p>
            We vervangen je boekhouder niet &ndash; we vullen aan wat er
            ontbreekt. Samen vormen we een compleet financieel team, op jouw
            tempo en binnen jouw budget.
          </p>

          <h2>Benieuwd wat dit voor jouw bedrijf kan betekenen?</h2>
          <p>
            Wil je weten hoe een flexibele CFO en business controller jouw
            bedrijf concreet kan helpen?{' '}
            <Link
              href="/gratis-gesprek"
              className="text-cobiz-green hover:underline"
            >
              Plan een vrijblijvend kennismakingsgesprek
            </Link>{' '}
            en ontdek waar de kansen liggen voor jouw KMO. Neem contact op via{' '}
            <a
              href="mailto:info@cobiz.be"
              className="text-cobiz-green hover:underline"
            >
              info@cobiz.be
            </a>{' '}
            &ndash; we denken graag met je mee.
          </p>

          <hr />

          <p className="text-sm text-gray-500">
            <strong>Over COBIZ</strong> &mdash; COBIZ is het adviesbureau van
            Anja Warrot en Dirk Colman, gevestigd in Dendermonde. Met meer dan
            20 jaar ervaring in finance en 7 jaar als ondernemer helpen we
            KMO&apos;s in de regio Dendermonde en de driehoek
            Antwerpen&ndash;Brussel&ndash;Gent met flexibele CFO- en
            controllingexpertise. Ondernemers die ondernemers helpen &ndash; dat
            is waar we voor staan.
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
            Benieuwd wat een flexibele CFO voor jou kan betekenen?
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
