import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'De 3 financiële groeipijnen die elke KMO tegenkomt | COBIZ',
  description:
    'Groei is fantastisch, maar brengt financiële uitdagingen mee die je niet verwacht. Herken de signalen voordat het te laat is.',
  alternates: { canonical: '/inzichten/groeipijnen-herkennen' },
  openGraph: {
    title: 'De 3 financiële groeipijnen die elke KMO tegenkomt | COBIZ',
    description: 'Groei is fantastisch, maar brengt financiële uitdagingen mee die je niet verwacht. Herken de signalen voordat het te laat is.',
  },
};

export default function GroeipijnenHerkennenPage() {
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
            <span className="badge badge-coral">GROEI</span>
            <span className="flex items-center gap-1 text-xs text-white/70">
              <Clock className="h-3 w-3" />10 min
            </span>
          </div>
          <h1 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            De 3 financi&euml;le groeipijnen die elke KMO tegenkomt
          </h1>
          <p className="text-base text-white/80 md:text-lg">
            Groei is fantastisch, maar brengt financi&euml;le uitdagingen mee die je niet verwacht. Herken de signalen voordat het te laat is.
          </p>
        </div>
      </section>

      {/* ── Article ── */}
      <section className="bg-white section-padding">
        <article className="prose mx-auto max-w-3xl">
          <p className="lead">
            Je bedrijf groeit. Meer klanten, meer omzet, meer mogelijkheden.
            Dat zou goed nieuws moeten zijn &ndash; en dat is het ook. Maar wat
            veel KMO-ondernemers onderschatten, is dat groei ook een keerzijde
            heeft. Niet omdat er iets mis is met je bedrijf, maar omdat groei
            financi&euml;le druk cre&euml;ert die je niet ziet aankomen als je
            er niet op let.
          </p>

          <p>
            In onze praktijk zien we het keer op keer: ondernemers die succesvol
            groeien en toch op een gegeven moment vastlopen. Niet door gebrek
            aan klanten of talent, maar door financi&euml;le groeipijnen die
            sluipenderwijs ontstaan. Er zijn drie uitdagingen die vrijwel elke
            groeiende KMO vroeg of laat tegenkomt.
          </p>

          <h2>1. Je cash groeit niet mee met je omzet</h2>

          <p>
            Dit is de meest voorkomende &ndash; en meest verrassende &ndash;
            groeipijn. Je omzet stijgt, je draait winst, maar je bankrekening
            wordt niet voller. Soms wordt het zelfs krapper. Hoe kan dat?
          </p>

          <p>
            Het antwoord zit in je werkkapitaal &ndash; het geld dat vastzit in
            je bedrijfsvoering. Als je groeit, heb je meer voorraad nodig, je
            stuurt meer facturen uit die pas later betaald worden, en je kosten
            lopen op v&oacute;&oacute;rdat de opbrengsten binnenkomen. Je
            financiert als het ware je eigen groei voor, en dat vreet cash.
          </p>

          <p>
            Een concreet voorbeeld: je maandomzet stijgt van &euro;40.000 naar
            &euro;60.000. Goed nieuws, maar als je klanten gemiddeld 45 dagen
            over hun betaling doen, heb je ineens &euro;30.000 meer aan
            openstaande facturen dan voorheen. Dat geld komt er wel, maar
            ondertussen moet jij je leveranciers en je team betalen.
          </p>

          <p>
            <strong>Het signaal:</strong> je omzet stijgt maar je hebt steeds
            vaker moeite om rekeningen op tijd te betalen. Of je moet steeds
            vaker je priv&eacute;rekening aanspreken om gaten te dichten.
          </p>

          <h2>2. Je kosten worden onzichtbaar complexer</h2>

          <p>
            In een klein bedrijf heb je overzicht. Je weet wat je uitgeeft, je
            kent elke leverancier, en je voelt wanneer iets te duur wordt. Maar
            naarmate je groeit, wordt dit overzicht minder vanzelfsprekend.
          </p>

          <p>
            Er komen meer abonnementen bij, meer leveranciers, meer
            personeelskosten. Je investeert in software, in marketing, in extra
            kantoorruimte. Elke individuele uitgave lijkt verantwoord, maar
            opgeteld kruipen je vaste kosten omhoog zonder dat je het door hebt.
            En voor je het weet is je winstmarge gehalveerd terwijl je omzet is
            verdubbeld.
          </p>

          <p>
            <strong>Het signaal:</strong> je omzet groeit mooi, maar onderaan de
            streep hou je niet meer over dan voorheen. Of zelfs minder. Je voelt
            het, maar je kunt niet precies aanwijzen waar het zit.
          </p>

          <p>
            De oplossing begint bij inzicht: welke kosten zijn er bijgekomen,
            welke zijn gestegen, en welke leveren onvoldoende op? Door je kosten
            regelmatig onder de loep te nemen &ndash; niet alleen in de
            jaarrekening, maar ook per kwartaal &ndash; kun je bijsturen voordat
            het een probleem wordt.
          </p>

          <h2>3. Je moet investeren, maar vliegt blind</h2>

          <p>
            Groei vraagt om investeringen. Een extra medewerker, een nieuw
            voertuig, een uitbreiding van je productielijn, betere software.
            Maar de vraag die veel ondernemers op buikgevoel beantwoorden is:
            kan ik dit nu w&eacute;l of niet betalen? En belangrijker nog:
            wanneer verdient die investering zich terug?
          </p>

          <p>
            Zonder een financi&euml;le onderbouwing neem je die beslissingen op
            gevoel. Soms gaat dat goed, maar soms investeer je op het verkeerde
            moment &ndash; bijvoorbeeld net wanneer je cash al onder druk staat
            door groeipijn nummer &eacute;&eacute;n. Of je stelt een investering
            t&eacute; lang uit en mist daardoor kansen.
          </p>

          <p>
            <strong>Het signaal:</strong> je twijfelt lang over investeringen,
            vraagt je af of het &ldquo;het juiste moment&rdquo; is, en mist de
            cijfers om die vraag echt te beantwoorden.
          </p>

          <p>
            Wat helpt is een investeringsanalyse &ndash; simpel gezegd: vooraf
            berekenen wat een investering kost, wat ze oplevert, en wanneer dat
            geld terugkomt. Samen met een cashflowprognose geeft dat je het
            vertrouwen om onderbouwde beslissingen te nemen.
          </p>

          <h2>Hoe herken en voorkom je deze groeipijnen?</h2>

          <p>
            Het goede nieuws: deze drie groeipijnen zijn stuk voor stuk te
            voorkomen &ndash; of in elk geval beheersbaar te maken. Het begint
            met &eacute;&eacute;n ding: op tijd inzicht hebben in je cijfers.
            Niet achteraf bij de jaarrekening, maar regelmatig &ndash;
            maandelijks of minstens per kwartaal.
          </p>

          <ul>
            <li>
              <strong>Volg je cashflow actief op.</strong> Maak een prognose van
              je in- en uitstroom voor de komende maanden. Zo zie je problemen
              aankomen voordat ze er zijn.
            </li>
            <li>
              <strong>Analyseer je kostenstructuur.</strong> Weet welke kosten er
              zijn bijgekomen en of ze in verhouding staan tot wat ze opleveren.
              Durf kosten te schrappen die niet meer bijdragen.
            </li>
            <li>
              <strong>Onderbouw je investeringen.</strong> Bereken vooraf wat een
              investering kost, oplevert, en wanneer je dat geld terugziet. Zo
              neem je beslissingen met vertrouwen in plaats van op hoop.
            </li>
            <li>
              <strong>Overweeg of financiering je groei kan versnellen.</strong>{' '}
              Veel ondernemers zien financiering als een laatste redmiddel, maar
              dat hoeft het niet te zijn. Een goed onderbouwde financiering
              &mdash; denk aan een investeringskrediet of een uitbreiding van je
              werkkapitaal &mdash; kan net de hefboom zijn om sneller en
              gezonder te groeien. De voorwaarde is dat je vooraf duidelijk in
              kaart brengt wat die financiering kost, wat ze oplevert, en hoe je
              ze terugbetaalt. Ga je met die onderbouwing naar je bank, dan sta
              je een stuk sterker dan wanneer je op het laatste moment aanklopt.
            </li>
            <li>
              <strong>Schakel tijdig hulp in.</strong> Je boekhouder is een
              belangrijke partner voor je wettelijke verplichtingen. Maar voor
              het sturen van je groei heb je een andere bril nodig &ndash;
              iemand die vooruitkijkt en samen met jou een cashplanning maakt.
            </li>
          </ul>

          <h2>Hoe COBIZ groeiende KMO&apos;s helpt</h2>

          <p>
            Bij COBIZ werken we vanuit Dendermonde met KMO&apos;s in heel
            Oost-Vlaanderen en de regio Antwerpen&ndash;Brussel&ndash;Gent die
            precies tegen deze uitdagingen aanlopen. We helpen je om inzicht te
            krijgen in je werkkapitaal, je kostenstructuur scherp te houden, en
            investeringsbeslissingen financieel te onderbouwen.
          </p>

          <p>
            Dat kan op verschillende manieren. Wil je direct aan de slag met je
            eigen cijfers? Dan begeleiden we je individueel, op jouw tempo. Wil
            je eerst de basis onder de knie krijgen? In onze{' '}
            <Link
              href="/workshop-stuurcijfers"
              className="text-cobiz-green hover:underline"
            >
              workshops
            </Link>{' '}
            en{' '}
            <Link
              href="/opleidingstraject"
              className="text-cobiz-green hover:underline"
            >
              opleidingstrajecten
            </Link>{' '}
            leer je samen met andere ondernemers hoe je financi&euml;le
            groeipijnen herkent en aanpakt &ndash; praktisch, zonder jargon, en
            meteen toepasbaar in je eigen bedrijf.
          </p>

          <p>
            Geen ingewikkelde rapporten, maar praktische inzichten waarmee je
            als ondernemer beter kunt sturen. Zodat groei geen bron van stress
            wordt, maar van vertrouwen.
          </p>

          <h2>Herken je deze groeipijnen in jouw bedrijf?</h2>

          <p>
            Neem contact op via{' '}
            <a
              href="mailto:info@cobiz.be"
              className="text-cobiz-green hover:underline"
            >
              info@cobiz.be
            </a>{' '}
            voor een vrijblijvend kennismakingsgesprek. We kijken graag met je
            mee naar waar de kansen &ndash; en de risico&apos;s &ndash; zitten
            in jouw groei.
          </p>

          <hr />

          <p className="text-sm text-gray-500">
            <strong>Over COBIZ</strong> &mdash; COBIZ is het adviesbureau van
            Anja Warrot en Dirk Colman, gevestigd in Dendermonde. Met meer dan
            20 jaar ervaring in finance en 7 jaar als ondernemer helpen we
            KMO&apos;s met flexibele CFO- en controllingexpertise. Ondernemers
            die ondernemers helpen &ndash; dat is waar we voor staan.
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
            Herken je deze groeipijnen?
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
