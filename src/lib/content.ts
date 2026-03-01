import { getDb } from './db'
import type {
  HeroContent,
  ProblemContent,
  ProductsContent,
  AboutContent,
  DifferenceContent,
  TestimonialsContent,
  FAQContent,
  FinalCTAContent,
} from './content-config'

// Re-export types and labels for server components
export type {
  HeroContent,
  ProblemContent,
  ProductsContent,
  AboutContent,
  DifferenceContent,
  TestimonialsContent,
  FAQContent,
  FinalCTAContent,
}
export { sectionLabels, pageLabels } from './content-config'

// ── Defaults (huidige hardcoded teksten) ───────────────────────

export const homeDefaults: Record<string, unknown> = {
  hero: {
    title: 'Van cijferchaos naar grip op je cijfers en rust in je hoofd',
    subtitle: 'Flexibele CFO-expertise voor KMO\'s die vooruit willen kijken, niet achteruit',
    seoText: 'COBIZ is jouw externe CFO in de regio Dendermonde. We helpen KMO-zaakvoerders met 5 tot 30 medewerkers om hun financiële stuurinformatie te begrijpen en benutten. Van een hands-on workshop tot een volledige financiële doorlichting — altijd praktisch, altijd op maat.',
  } satisfies HeroContent,

  problem: {
    title: 'Herken je dit?',
    problems: [
      'Je hebt veel cijfers, maar weinig bruikbare informatie',
      'Cashflow stress: geld binnen, geld buiten, maar waar sta je echt?',
      'Je boekhouder spreekt \'Chinees\' - cijfers zonder context',
      'Je weet niet precies waarom je zo weinig overhoudt',
      'Beslissingen neem je op buikgevoel, niet op data',
      'Je bent meer bezig met overleven dan met groeien',
    ],
    ctaDescription: 'Je bent niet alleen. De meeste KMO-zaakvoerders herkennen minstens 3 van deze punten.',
  } satisfies ProblemContent,

  products: {
    title: 'Onze Diensten',
    subtitle: 'Van quick scan tot diepgaande begeleiding',
    items: [
      {
        badge: 'BOEKBAAR',
        title: 'Workshop Stuurcijfers',
        description: 'In 4,5 uur leer je jouw cijfers omzetten naar heldere stuurinformatie. Kleine groep, hands-on.',
        price: '€125 incl. BTW',
        details: 'Inclusief broodjes & materiaal',
        ctaLabel: 'BOEK JE PLEK',
        ctaHref: '/workshop-stuurcijfers',
      },
      {
        badge: 'POPULAIR',
        title: 'Groeirapport',
        description: 'Volledige financiële doorlichting met risicoscore op 5 valkuilen. Helder rapport met actieplan en quick wins.',
        price: '€1.500 excl. BTW',
        details: '50% aanbetaling, 50% bij oplevering',
        ctaLabel: 'MEER INFO',
        ctaHref: '/groeirapport',
      },
      {
        badge: '',
        title: 'Gratis Kennismakingsgesprek',
        description: '1 uur vrijblijvend sparren over jouw financiële uitdagingen. Online of fysiek.',
        price: 'Gratis',
        details: 'Geen verplichtingen',
        ctaLabel: 'PLAN GESPREK',
        ctaHref: '/gratis-gesprek',
      },
    ],
  } satisfies ProductsContent,

  about: {
    title: 'Ondernemers voor ondernemers',
    paragraph1: 'Wij zijn Anja en Dirk. Met 20 jaar financiële expertise én 7 jaar ervaring als KMO-zaakvoerder weten we precies waar het schoentje wringt.',
    quote: 'We waren te veel bezig met andermans rekeningen betalen, en te weinig met onze eigen cijfers. Die wake-up call werd de basis van COBIZ.',
    paragraph2: 'Vandaag helpen we ondernemers om niet dezelfde fouten te maken. Niet met dure rapporten die in een lade verdwijnen, maar met praktische tools en begeleiding die écht werken.',
  } satisfies AboutContent,

  difference: {
    title: 'Hoe wij verschillen',
    items: [
      { title: 'Toekomstgericht', text: 'Waar je boekhouder achteruit kijkt, kijken wij vooruit. Proactief sturen in plaats van reactief rapporteren.' },
      { title: 'Hands-on', text: 'Niet alleen denken, maar ook doen. Van analyse tot implementatie - wij draaien mee.' },
      { title: 'Flexibel', text: 'Van een eenmalige workshop tot doorlopende begeleiding. Je kiest wat bij jouw situatie past.' },
      { title: 'KMO-DNA', text: 'Geen corporate aanpak maar ondernemer-tot-ondernemer. Wij spreken jouw taal.' },
    ],
  } satisfies DifferenceContent,

  testimonials: {
    title: 'Wat ondernemers zeggen',
    items: [
      {
        quote: 'Anja & Dirk hebben ons geweldig geholpen bij een screening van ons bedrijf. Wij hebben een gezond bedrijf maar toch was hun expertise heel interessant om meer inzicht te krijgen in onze cijfers.',
        name: 'Lenn Weckx',
        source: 'Google Review',
      },
      {
        quote: 'Wij zijn zeer tevreden over de samenwerking met Anja van COBIZ. Met haar financiële kennis en ervaring in het bedrijfsleven is ze een waardevolle toevoeging aan ons team!',
        name: 'Chiara De Vleminck',
        source: 'Google Review',
      },
      {
        quote: 'COBIZ beveel ik graag aan. Ze geven bedrijven een dieper inzicht in hun cijfers, het rendement en cashplanning. Een duidelijk beeld en sterk actieplan volgt.',
        name: 'Randy de Mol',
        source: 'Google Review',
      },
    ],
  } satisfies TestimonialsContent,

  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        question: 'Wat is een externe CFO en wat doet COBIZ precies?',
        answer: 'Een externe CFO biedt dezelfde financiële expertise als een interne CFO, maar dan flexibel en op maat. COBIZ helpt KMO-zaakvoerders met stuurcijfers, cashflow-analyse, winstoptimalisatie en strategische financiële planning — zonder de kost van een voltijdse medewerker.',
      },
      {
        question: 'Voor welke bedrijven is COBIZ geschikt?',
        answer: 'COBIZ richt zich op KMO\'s met 5 tot 30 medewerkers in de regio Dendermonde en heel Vlaanderen. Of je nu een dienstenbedrijf, handelsbedrijf of productiebedrijf runt — als je meer grip wilt op je financiële cijfers, kunnen wij helpen.',
      },
      {
        question: 'Wat is het verschil tussen een boekhouder en COBIZ?',
        answer: 'Je boekhouder kijkt achteruit: hij verwerkt wat er is gebeurd. COBIZ kijkt vooruit: we vertalen je cijfers naar stuurinformatie waarmee je betere beslissingen neemt. We zijn geen vervanging voor je boekhouder, maar de strategische aanvulling die vooruit kijkt.',
      },
      {
        question: 'Welke dienst past het best bij mij?',
        answer: 'Dat hangt af van je situatie. De Workshop Stuurcijfers (€125) is ideaal als snelle kennismaking. Het Groeirapport (€1.500) geeft je een volledige financiële doorlichting met actieplan. Twijfel je? Plan een gratis kennismakingsgesprek en we adviseren je vrijblijvend.',
      },
      {
        question: 'In welke regio is COBIZ actief?',
        answer: 'COBIZ is gevestigd in Dendermonde en bedient KMO\'s in de regio: Lebbeke, Buggenhout, Hamme, Zele, Berlare, Wetteren, Aalst, Lokeren en Temse. We werken ook met ondernemers in Antwerpen, Gent en Brussel.',
      },
    ],
  } satisfies FAQContent,

  finalcta: {
    title: 'Klaar om grip te krijgen op je cijfers?',
    subtitle: 'Start met de gratis groei-check en ontdek waar jouw groeikansen liggen.',
  } satisfies FinalCTAContent,
}

const allDefaults: Record<string, Record<string, unknown>> = {
  home: homeDefaults,
}

// ── Database functies ──────────────────────────────────────────

export async function ensureTable() {
  const prisma = getDb()
  if (!prisma) return
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "ContentBlock" (
        "id" SERIAL PRIMARY KEY,
        "page" TEXT NOT NULL,
        "section" TEXT NOT NULL,
        "content" TEXT NOT NULL,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "ContentBlock_page_section_key" UNIQUE ("page", "section")
      )
    `)
  } catch {
    // table likely already exists
  }
}

export async function getContent<T>(page: string, section: string): Promise<T> {
  const fallback = allDefaults[page]?.[section] as T
  const prisma = getDb()
  if (!prisma) return fallback

  try {
    await ensureTable()
    const block = await prisma.contentBlock.findUnique({
      where: { page_section: { page, section } },
    })
    return block ? (JSON.parse(block.content) as T) : fallback
  } catch {
    return fallback
  }
}

export async function getPageContent(page: string): Promise<Record<string, unknown>> {
  const defaults = allDefaults[page] || {}
  const prisma = getDb()
  if (!prisma) return defaults

  try {
    await ensureTable()
    const blocks = await prisma.contentBlock.findMany({
      where: { page },
    })
    const result = { ...defaults }
    for (const block of blocks) {
      try {
        result[block.section] = JSON.parse(block.content)
      } catch {
        // skip invalid JSON
      }
    }
    return result
  } catch {
    return defaults
  }
}

export function getDefaults(page: string): Record<string, unknown> {
  return allDefaults[page] || {}
}

// ── Photo URL ─────────────────────────────────────────────────

export async function getAboutPhotoUrl(): Promise<string> {
  const prisma = getDb()
  if (!prisma) return '/anja-dirk.jpg'

  try {
    await ensureTable()
    const block = await prisma.contentBlock.findUnique({
      where: { page_section: { page: 'settings', section: 'about-photo' } },
    })
    return block ? (JSON.parse(block.content) as string) : '/anja-dirk.jpg'
  } catch {
    return '/anja-dirk.jpg'
  }
}
