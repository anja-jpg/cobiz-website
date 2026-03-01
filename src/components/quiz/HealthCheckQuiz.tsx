'use client';

import { useState, useCallback, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import {
  Star,
  ChevronLeft,
  Loader2,
  ArrowRight,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface CategoryData {
  name: string;
  icon: string;
  questions: string[];
  tips: { low: string; mid: string; high: string };
}

interface CategoryScore {
  name: string;
  icon: string;
  score: number;
  tips: { low: string; mid: string; high: string };
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const categories: CategoryData[] = [
  {
    name: 'Financieel inzicht',
    icon: '📊',
    questions: [
      'Heb je minstens op kwartaalbasis een duidelijk inzicht in je financiële cijfers?',
      'Heb je een duidelijk beeld van je marges per klant én per product of dienst?',
      'Kun je voorspellen hoeveel geld er de komende maanden binnenkomt en uitgaat?',
    ],
    tips: {
      low: 'Je financieel inzicht heeft aandacht nodig. Zonder helder zicht op je cijfers neem je beslissingen in het donker. Een maandelijkse financiële rapportering is de eerste stap naar grip op je bedrijf.',
      mid: 'Je hebt een basis, maar er zijn blinde vlekken. Meer inzicht in je marges en cashflow kan je helpen om gerichtere beslissingen te nemen en margelekken te dichten.',
      high: 'Sterk! Je hebt goed zicht op je cijfers. De volgende stap is om deze inzichten nog beter te vertalen naar strategische beslissingen.',
    },
  },
  {
    name: 'Operationele efficiëntie',
    icon: '⚙️',
    questions: [
      'Zijn je processen gedocumenteerd? Weet iedereen in je bedrijf wat ze moeten doen en hoe?',
      'Heb je zicht op de hoeveelheid geld die \u2018vastzit\u2019 in je voorraden en openstaande facturen?',
      'Helpt je bedrijfssoftware je vooruit bij de dagelijkse werking en bij het nemen van beslissingen?',
    ],
    tips: {
      low: 'Je operationele basis kan een stuk sterker. Onduidelijke processen en slecht afgestemde systemen kosten je dagelijks tijd en geld. Hier liggen vaak de snelste winstpunten.',
      mid: 'Je werking draait, maar er zijn optimalisatiekansen. Denk aan werkkapitaaloptimalisatie en betere systeembenutting \u2014 dat zijn hefbomen met direct financieel rendement.',
      high: 'Je bedrijfsvoering zit goed in elkaar. Kijk of je systemen en processen ook klaar zijn om mee te schalen bij groei.',
    },
  },
  {
    name: 'Strategische planning',
    icon: '🧭',
    questions: [
      'Heb je zicht op hoe je markt evolueert en wat dit betekent voor jouw bedrijf?',
      'Heb je een concreet plan voor waar je bedrijf over 3 jaar moet staan?',
      'Heb je in beeld welke middelen je nodig hebt om je groeiambities waar te maken?',
    ],
    tips: {
      low: 'Zonder strategisch kompas vaar je op onderbuikgevoel. Een meerjarenplan met duidelijke doelen en middelen maakt het verschil tussen \u2018druk zijn\u2019 en \u2018echt vooruitgaan\u2019.',
      mid: 'Je denkt na over de toekomst, maar het vertalen naar een concreet plan met duidelijke middelen kan scherper. Dat geeft richting aan elke dagelijkse beslissing.',
      high: 'Je hebt een duidelijke strategische visie. Zorg dat je plan regelmatig getoetst wordt aan de realiteit en bijgestuurd waar nodig.',
    },
  },
  {
    name: 'Groei & Waardering',
    icon: '🚀',
    questions: [
      'Weet je wat je bedrijf vandaag waard is als je het zou willen verkopen?',
      'Ken je de mogelijkheden om te groeien door andere bedrijven over te nemen?',
      'Als je morgen door omstandigheden 6 maanden out bent, kan je bedrijf dan verder zonder jou?',
    ],
    tips: {
      low: 'Je bedrijf is kwetsbaar op vlak van waardeopbouw en continuïteit. Kennis van je bedrijfswaarde en minder afhankelijkheid van jou als ondernemer zijn cruciaal voor duurzame groei.',
      mid: 'Je bent op weg, maar er zijn nog belangrijke stappen te zetten rond waardering, groeistrategie en bedrijfscontinuïteit. Dit zijn thema\u2019s die je beter nu dan later aanpakt.',
      high: 'Je scoort sterk op groeivoorbereiding. Je bedrijf staat er goed voor om de volgende stap te zetten, of dat nu schaalvergroting, overname of exit is.',
    },
  },
];

// Build flat question list
const allQuestions = categories.flatMap((cat, ci) =>
  cat.questions.map((text, qi) => ({
    text,
    categoryIndex: ci,
    questionInCat: qi,
  })),
);

const TOTAL_QUESTIONS = allQuestions.length; // 12

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function calculateScores(answers: number[]) {
  const catScores: CategoryScore[] = categories.map((cat, ci) => {
    const catAnswers = answers.filter(
      (_, i) => allQuestions[i].categoryIndex === ci,
    );
    const total = catAnswers.reduce((a, b) => a + b, 0);
    const max = cat.questions.length * 2;
    const pct = Math.round((total / max) * 100);
    return { name: cat.name, icon: cat.icon, score: pct, tips: cat.tips };
  });

  const overall = Math.round(
    catScores.reduce((a, c) => a + c.score, 0) / catScores.length,
  );
  return { catScores, overall };
}

function getScoreColor(pct: number): 'green' | 'orange' | 'red' {
  if (pct >= 80) return 'green';
  if (pct >= 50) return 'orange';
  return 'red';
}

function getVerdict(pct: number) {
  if (pct >= 80) return 'Sterk';
  if (pct >= 50) return 'Aandachtspunt';
  return 'Actie nodig';
}

function getOverallVerdict(pct: number) {
  if (pct >= 80) return 'Jouw bedrijf staat sterk. Tijd om te versnellen.';
  if (pct >= 50)
    return 'Er zit groeipotentieel in jouw bedrijf. Laten we dat ontgrendelen.';
  return 'Er liggen belangrijke kansen om je bedrijf sterker te maken.';
}

function getTipLevel(pct: number): 'low' | 'mid' | 'high' {
  if (pct >= 80) return 'high';
  if (pct >= 50) return 'mid';
  return 'low';
}

const scoreColorMap = {
  green: {
    text: 'text-cobiz-green',
    bg: 'bg-cobiz-green',
    stroke: '#51B848',
    borderL: 'border-l-cobiz-green',
  },
  orange: {
    text: 'text-cobiz-yellow',
    bg: 'bg-cobiz-yellow',
    stroke: '#F4BD1F',
    borderL: 'border-l-cobiz-yellow',
  },
  red: {
    text: 'text-cobiz-coral',
    bg: 'bg-cobiz-coral',
    stroke: '#DB685F',
    borderL: 'border-l-cobiz-coral',
  },
};

/* ------------------------------------------------------------------ */
/*  Animated score ring                                                */
/* ------------------------------------------------------------------ */

function ScoreRing({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) {
  const circumference = 2 * Math.PI * 62;
  const targetOffset = circumference - (percentage / 100) * circumference;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => setOffset(targetOffset), 100);
    return () => clearTimeout(timer);
  }, [targetOffset]);

  return (
    <div className="relative mx-auto h-40 w-40">
      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="62"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
        />
        <circle
          cx="64"
          cy="64"
          r="62"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-[1.5s] ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-white">
          {percentage}
          <span className="text-lg opacity-60">%</span>
        </span>
        <span className="text-xs text-white/50">groeiklaar</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Category bar                                                       */
/* ------------------------------------------------------------------ */

function CategoryBar({ cat }: { cat: CategoryScore }) {
  const color = getScoreColor(cat.score);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(cat.score), 100);
    return () => clearTimeout(timer);
  }, [cat.score]);

  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-bold text-cobiz-dark sm:text-base">
          {cat.icon} {cat.name}
        </span>
        <span
          className={`text-sm font-bold sm:text-base ${scoreColorMap[color].text}`}
        >
          {cat.score}%
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${scoreColorMap[color].bg} transition-[width] duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="mt-1.5 text-sm italic text-gray-500">
        {getVerdict(cat.score)}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function HealthCheckQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  /* --- handlers --- */
  const handleAnswer = useCallback(
    (score: number) => {
      const newAnswers = [...answers];
      newAnswers[currentQ] = score;
      setAnswers(newAnswers);

      if (currentQ < TOTAL_QUESTIONS - 1) {
        setCurrentQ((prev) => prev + 1);
      } else {
        setShowResults(true);
      }
    },
    [answers, currentQ],
  );

  const handlePrevious = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
    }
  }, [currentQ]);

  const handleGateSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError('');

      if (!firstName.trim() || !email.trim() || !email.includes('@')) {
        setSubmitError('Vul je naam en e-mailadres in');
        return;
      }

      setIsSubmitting(true);
      const { overall } = calculateScores(answers);

      try {
        await fetch('/api/gezondheidscheck', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email.trim(),
            firstName: firstName.trim(),
            companyName: companyName.trim() || undefined,
            answers,
            score: overall,
            category: getScoreColor(overall),
          }),
        });
      } catch {
        // Continue — show tips regardless
      }

      setIsSubmitting(false);
      setShowTips(true);
    },
    [answers, email, firstName, companyName],
  );

  /* ================================================================ */
  /*  Render: Questions                                                */
  /* ================================================================ */
  if (!showResults) {
    const q = allQuestions[currentQ];
    const cat = categories[q.categoryIndex];
    const progressPct = (currentQ / TOTAL_QUESTIONS) * 100;

    return (
      <div className="mx-auto max-w-xl px-4 py-8 sm:py-12">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="quiz-progress">
            <div
              className="quiz-progress-bar"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400 sm:text-sm">
              Vraag {currentQ + 1} van {TOTAL_QUESTIONS}
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-cobiz-green sm:text-sm">
              {cat.name}
            </span>
          </div>
        </div>

        {/* Question card */}
        <div
          key={currentQ}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8"
        >
          <p className="mb-2 text-xs text-gray-400 sm:text-sm">
            {cat.icon} {cat.name} — vraag {q.questionInCat + 1} van{' '}
            {cat.questions.length}
          </p>
          <h2 className="mb-6 text-xl font-bold leading-snug text-cobiz-dark sm:mb-8 sm:text-2xl">
            {q.text}
          </h2>

          {/* Answers */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleAnswer(2)}
              className="flex w-full items-center gap-3 rounded-xl bg-cobiz-mint/50 px-5 py-4 text-left text-base font-medium text-cobiz-dark transition-all hover:translate-x-1 hover:bg-cobiz-mint sm:gap-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobiz-green/10 text-lg">
                ✓
              </span>
              Ja, volledig
            </button>
            <button
              type="button"
              onClick={() => handleAnswer(1)}
              className="flex w-full items-center gap-3 rounded-xl bg-cobiz-yellow/5 px-5 py-4 text-left text-base font-medium text-cobiz-dark transition-all hover:translate-x-1 hover:bg-cobiz-yellow/10 sm:gap-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobiz-yellow/15 text-lg">
                ~
              </span>
              Gedeeltelijk
            </button>
            <button
              type="button"
              onClick={() => handleAnswer(0)}
              className="flex w-full items-center gap-3 rounded-xl bg-cobiz-coral/5 px-5 py-4 text-left text-base font-medium text-cobiz-dark transition-all hover:translate-x-1 hover:bg-cobiz-coral/10 sm:gap-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobiz-coral/10 text-lg">
                ✗
              </span>
              Nee
            </button>
          </div>
        </div>

        {/* Back button */}
        {currentQ > 0 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-cobiz-dark"
          >
            <ChevronLeft className="h-4 w-4" />
            Vorige
          </button>
        )}
      </div>
    );
  }

  /* ================================================================ */
  /*  Render: Results                                                  */
  /* ================================================================ */
  const { catScores, overall } = calculateScores(answers);
  const overallColor = getScoreColor(overall);

  return (
    <div className="mx-auto max-w-xl px-4 py-8 sm:py-12">
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
        {/* Hero section with score ring */}
        <div className="relative overflow-hidden bg-cobiz-dark px-6 py-10 text-center sm:px-8">
          <div
            className="pointer-events-none absolute -right-[30%] -top-[50%] h-[300px] w-[300px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(81,184,72,0.15) 0%, transparent 70%)',
            }}
          />
          <h2 className="relative mb-2 text-2xl font-bold text-white sm:text-3xl">
            Jouw Groei-Score
          </h2>
          <p className="relative text-sm text-white/60 sm:text-base">
            {getOverallVerdict(overall)}
          </p>
          <div className="relative mt-6">
            <ScoreRing
              percentage={overall}
              color={scoreColorMap[overallColor].stroke}
            />
          </div>
        </div>

        {/* Category breakdown */}
        <div className="p-6 sm:p-8">
          {catScores.map((cat) => (
            <CategoryBar key={cat.name} cat={cat} />
          ))}
        </div>

        {/* Email gate */}
        {!showTips && (
          <div className="border-t border-gray-100 p-6 text-center sm:p-8">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cobiz-green/10">
              <Star className="h-6 w-6 text-cobiz-green" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-cobiz-dark sm:text-2xl">
              Ontgrendel jouw persoonlijke tips
            </h3>
            <p className="mx-auto mb-6 max-w-sm text-sm text-gray-500 sm:text-base">
              Ontvang concrete aanbevelingen per categorie en ontdek hoe het
              COBIZ Groeirapport je verder kan helpen.
            </p>

            <form
              onSubmit={handleGateSubmit}
              className="mx-auto max-w-sm space-y-3"
            >
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Je voornaam"
                className="form-input"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Je e-mailadres"
                className="form-input"
                required
              />
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Je bedrijfsnaam (optioneel)"
                className="form-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex w-full items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {isSubmitting ? 'EVEN GEDULD...' : 'VERSTUUR MIJN RESULTATEN'}
              </button>
              {submitError && (
                <p className="text-sm font-medium text-cobiz-coral">
                  {submitError}
                </p>
              )}
              <p className="text-xs text-gray-400">
                We respecteren je privacy. Geen spam, enkel waardevolle
                inzichten.
              </p>
            </form>
          </div>
        )}

        {/* Unlocked tips */}
        {showTips && (
          <div className="border-t border-gray-100 p-6 sm:p-8">
            <h3 className="mb-5 text-center text-xl font-bold text-cobiz-dark sm:text-2xl">
              Jouw persoonlijke aanbevelingen
            </h3>

            <div className="space-y-4">
              {catScores.map((cat) => {
                const color = getScoreColor(cat.score);
                const level = getTipLevel(cat.score);

                return (
                  <div
                    key={cat.name}
                    className={`rounded-xl border-l-4 bg-gray-50 p-5 ${scoreColorMap[color].borderL}`}
                  >
                    <p
                      className={`mb-1 text-xs font-bold uppercase tracking-wide ${scoreColorMap[color].text}`}
                    >
                      {cat.icon} {cat.name} — {cat.score}%
                    </p>
                    <p className="text-sm leading-relaxed text-cobiz-dark sm:text-base">
                      {cat.tips[level]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA banner */}
            <div className="mt-8 rounded-2xl bg-cobiz-dark p-6 text-center sm:p-8">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Klaar voor de volgende stap?
              </h3>
              <p className="mb-5 text-sm text-white/60 sm:text-base">
                Het COBIZ Groeirapport gaat veel dieper: een volledige
                financiële analyse met een concreet groeiplan op maat van jouw
                bedrijf.
              </p>
              <Link
                href="/gratis-gesprek"
                className="btn-primary inline-flex items-center gap-2"
              >
                Plan een vrijblijvend gesprek
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
