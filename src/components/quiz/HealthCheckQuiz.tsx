'use client';

import { useState, useCallback, type FormEvent } from 'react';
import Link from 'next/link';
import {
  ThumbsUp,
  AlertTriangle,
  AlertOctagon,
  Loader2,
  ChevronLeft,
  Lock,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface QuizQuestion {
  category: string;
  question: string;
  options: { label: string; score: number }[];
}

type Category = 'fit' | 'zwalkend' | 'blind';

interface QuizResult {
  score: number;
  category: Category;
  percentage: number;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const questions: QuizQuestion[] = [
  // ---------- Inzicht (0-3) ----------
  {
    category: 'Inzicht',
    question: 'Hoe vaak bekijk je je financiële cijfers?',
    options: [
      { label: 'Dagelijks', score: 3 },
      { label: 'Wekelijks', score: 2 },
      { label: 'Maandelijks', score: 1 },
      { label: 'Zelden of nooit', score: 0 },
    ],
  },
  {
    category: 'Inzicht',
    question: 'Weet je welke producten of diensten het meeste opleveren?',
    options: [
      { label: 'Ja, tot op detail', score: 3 },
      { label: 'Globaal wel', score: 2 },
      { label: 'Niet echt', score: 1 },
      { label: 'Geen idee', score: 0 },
    ],
  },
  {
    category: 'Inzicht',
    question: 'Kun je op elk moment zeggen hoeveel winst je maakt?',
    options: [
      { label: 'Ja, realtime', score: 3 },
      { label: 'Ongeveer', score: 2 },
      { label: 'Pas na de boekhouder', score: 1 },
      { label: 'Nee', score: 0 },
    ],
  },
  {
    category: 'Inzicht',
    question: 'Begrijp je de cijfers die je boekhouder aanlevert?',
    options: [
      { label: 'Volledig', score: 3 },
      { label: 'Grotendeels', score: 2 },
      { label: 'Deels', score: 1 },
      { label: 'Het is Chinees', score: 0 },
    ],
  },
  // ---------- Cashflow (4-7) ----------
  {
    category: 'Cashflow',
    question: 'Hoe vaak word je verrast door cashflow problemen?',
    options: [
      { label: 'Nooit', score: 3 },
      { label: 'Zelden', score: 2 },
      { label: 'Regelmatig', score: 1 },
      { label: 'Vaak', score: 0 },
    ],
  },
  {
    category: 'Cashflow',
    question: 'Weet je hoeveel cash je nodig hebt voor de komende 3 maanden?',
    options: [
      { label: 'Ja, exact', score: 3 },
      { label: 'Ongeveer', score: 2 },
      { label: 'Niet echt', score: 1 },
      { label: 'Geen idee', score: 0 },
    ],
  },
  {
    category: 'Cashflow',
    question: 'Hoe snel betalen jouw klanten gemiddeld?',
    options: [
      { label: 'Binnen 14 dagen', score: 3 },
      { label: 'Binnen 30 dagen', score: 2 },
      { label: 'Binnen 60 dagen', score: 1 },
      { label: 'Ik volg dit niet op', score: 0 },
    ],
  },
  {
    category: 'Cashflow',
    question: 'Heb je een financiële buffer voor onverwachte kosten?',
    options: [
      { label: 'Ja, ruim voldoende', score: 3 },
      { label: 'Ja, maar krap', score: 2 },
      { label: 'Nauwelijks', score: 1 },
      { label: 'Nee', score: 0 },
    ],
  },
  // ---------- Sturing (8-11) ----------
  {
    category: 'Sturing',
    question: 'Neem je belangrijke beslissingen op basis van data?',
    options: [
      { label: 'Altijd', score: 3 },
      { label: 'Meestal', score: 2 },
      { label: 'Soms', score: 1 },
      { label: 'Vooral op buikgevoel', score: 0 },
    ],
  },
  {
    category: 'Sturing',
    question: 'Heb je duidelijke financiële doelen voor dit jaar?',
    options: [
      { label: 'Ja, SMART doelen', score: 3 },
      { label: 'Ja, globaal', score: 2 },
      { label: 'Vaag', score: 1 },
      { label: 'Nee', score: 0 },
    ],
  },
  {
    category: 'Sturing',
    question: 'Hoe vaak evalueer je of je op koers zit?',
    options: [
      { label: 'Maandelijks', score: 3 },
      { label: 'Per kwartaal', score: 2 },
      { label: 'Jaarlijks', score: 1 },
      { label: 'Nooit', score: 0 },
    ],
  },
  {
    category: 'Sturing',
    question:
      'Heb je een dashboard of rapportage die je regelmatig gebruikt?',
    options: [
      { label: 'Ja, automatisch', score: 3 },
      { label: 'Ja, manueel', score: 2 },
      { label: 'Beperkt', score: 1 },
      { label: 'Nee', score: 0 },
    ],
  },
];

const TOTAL_QUESTIONS = questions.length; // 12
const MAX_SCORE = TOTAL_QUESTIONS * 3; // 36

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function calculateResult(answers: number[]): QuizResult {
  const score = answers.reduce((sum, v) => sum + v, 0);
  const percentage = Math.round((score / MAX_SCORE) * 100);

  let category: Category;
  if (score >= 29) {
    category = 'fit';
  } else if (score >= 18) {
    category = 'zwalkend';
  } else {
    category = 'blind';
  }

  return { score, category, percentage };
}

function categoryScore(answers: number[], start: number): number {
  return answers.slice(start, start + 4).reduce((s, v) => s + v, 0);
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.min((current / total) * 100, 100);
  return (
    <div className="quiz-progress mb-8">
      <div className="quiz-progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

function CategoryBreakdown({ answers }: { answers: number[] }) {
  const categories = [
    { label: 'Inzicht', score: categoryScore(answers, 0) },
    { label: 'Cashflow', score: categoryScore(answers, 4) },
    { label: 'Sturing', score: categoryScore(answers, 8) },
  ];

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-bold text-cobiz-dark">Score per categorie</h3>
      {categories.map((cat) => {
        const pct = Math.round((cat.score / 12) * 100);
        return (
          <div key={cat.label}>
            <div className="mb-1 flex items-center justify-between text-sm font-medium text-gray-700">
              <span>{cat.label}</span>
              <span>
                {cat.score}/12 ({pct}%)
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-cobiz-green transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function HealthCheckQuiz() {
  /* --- state --- */
  const [currentQuestion, setCurrentQuestion] = useState(0); // 0-11 questions, 12 email gate, 13 result
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  /* --- handlers --- */
  const handleSelect = useCallback(
    (score: number, optionIndex: number) => {
      setSelectedOption(optionIndex);

      // Auto-advance after 500ms
      setTimeout(() => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = score;
        setAnswers(newAnswers);
        setSelectedOption(null);

        if (currentQuestion < TOTAL_QUESTIONS - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          // Move to email gate
          setCurrentQuestion(TOTAL_QUESTIONS); // 12
        }
      }, 500);
    },
    [answers, currentQuestion],
  );

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setSelectedOption(null);
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleEmailSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      const quizResult = calculateResult(answers);

      try {
        await fetch('/api/gezondheidscheck', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            firstName,
            companyName: companyName || undefined,
            answers,
            score: quizResult.score,
            category: quizResult.category,
          }),
        });
      } catch {
        // Silently continue - show result regardless
      }

      setResult(quizResult);
      setIsSubmitting(false);
      setCurrentQuestion(TOTAL_QUESTIONS + 1); // 13 = result
    },
    [answers, email, firstName, companyName],
  );

  /* ================================================================ */
  /*  Render: Question                                                 */
  /* ================================================================ */
  if (currentQuestion < TOTAL_QUESTIONS) {
    const q = questions[currentQuestion];

    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Progress */}
        <ProgressBar current={currentQuestion + 1} total={TOTAL_QUESTIONS} />

        {/* Meta */}
        <p className="mb-1 text-sm font-medium text-gray-400">
          Vraag {currentQuestion + 1} van {TOTAL_QUESTIONS}
        </p>
        <span className="badge badge-green mb-4 inline-block">{q.category}</span>

        {/* Question */}
        <h2 className="mb-8 text-2xl font-bold leading-snug text-cobiz-dark md:text-3xl">
          {q.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            const isSelected =
              selectedOption === idx ||
              (selectedOption === null && answers[currentQuestion] === opt.score);
            const isAnswered = selectedOption === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(opt.score, idx)}
                disabled={selectedOption !== null}
                className={`w-full cursor-pointer rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-cobiz-green bg-green-50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-cobiz-green/40 hover:shadow-sm'
                } ${isAnswered ? 'scale-[1.01]' : ''} ${selectedOption !== null && !isSelected ? 'opacity-50' : ''}`}
              >
                <span className="text-base font-medium text-cobiz-dark">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-cobiz-dark"
          >
            <ChevronLeft className="h-4 w-4" />
            Vorige
          </button>
        )}
      </div>
    );
  }

  /* ================================================================ */
  /*  Render: Email gate                                               */
  /* ================================================================ */
  if (currentQuestion === TOTAL_QUESTIONS) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cobiz-green/10">
              <Lock className="h-7 w-7 text-cobiz-green" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-cobiz-dark md:text-3xl">
              Je resultaat is klaar!
            </h2>
            <p className="text-gray-600">
              Vul je gegevens in om je persoonlijke score te ontvangen
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label htmlFor="quiz-email" className="form-label">
                E-mailadres *
              </label>
              <input
                id="quiz-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="jan@bedrijf.be"
              />
            </div>

            <div>
              <label htmlFor="quiz-firstname" className="form-label">
                Voornaam *
              </label>
              <input
                id="quiz-firstname"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-input"
                placeholder="Jan"
              />
            </div>

            <div>
              <label htmlFor="quiz-company" className="form-label">
                Bedrijfsnaam (optioneel)
              </label>
              <input
                id="quiz-company"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="form-input"
                placeholder="Jouw Bedrijf BV"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex w-full items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? 'EVEN GEDULD...' : 'BEKIJK MIJN RESULTAAT'}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-400">
            We respecteren je privacy. Geen spam, beloofd.
          </p>

          {/* Back link */}
          <button
            type="button"
            onClick={() => setCurrentQuestion(TOTAL_QUESTIONS - 1)}
            className="mt-4 inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-cobiz-dark"
          >
            <ChevronLeft className="h-4 w-4" />
            Terug naar de vragen
          </button>
        </div>
      </div>
    );
  }

  /* ================================================================ */
  /*  Render: Result                                                   */
  /* ================================================================ */
  if (result) {
    const configs: Record<
      Category,
      {
        Icon: typeof ThumbsUp;
        iconColor: string;
        iconBg: string;
        badgeClass: string;
        title: string;
        text: string;
        primaryLabel: string;
        primaryHref: string;
        secondaryLabel: string;
        secondaryHref: string;
      }
    > = {
      fit: {
        Icon: ThumbsUp,
        iconColor: 'text-cobiz-green',
        iconBg: 'bg-cobiz-green/10',
        badgeClass: 'badge-green',
        title: 'Goed bezig! Je hebt goede grip op je cijfers.',
        text: 'Je scoort bovengemiddeld. Je hebt al een solide basis. Een gratis gesprek kan je helpen om de laatste optimalisaties te doen.',
        primaryLabel: 'PLAN GRATIS GESPREK',
        primaryHref: '/gratis-gesprek',
        secondaryLabel: 'BEKIJK ONZE DIENSTEN',
        secondaryHref: '/diensten',
      },
      zwalkend: {
        Icon: AlertTriangle,
        iconColor: 'text-cobiz-yellow',
        iconBg: 'bg-yellow-50',
        badgeClass: 'badge-yellow',
        title: 'Belangrijke blinde vlekken gedetecteerd',
        text: 'Je hebt een basis, maar er zijn duidelijke verbeterpunten. De Workshop Stuurcijfers helpt je in 4,5 uur om grip te krijgen op je cijfers.',
        primaryLabel: 'BOEK WORKSHOP STUURCIJFERS - \u20AC125',
        primaryHref: '/workshop-stuurcijfers',
        secondaryLabel: 'PLAN GRATIS GESPREK',
        secondaryHref: '/gratis-gesprek',
      },
      blind: {
        Icon: AlertOctagon,
        iconColor: 'text-cobiz-coral',
        iconBg: 'bg-red-50',
        badgeClass: 'badge-coral',
        title: 'Je vaart grotendeels blind',
        text: 'Er is werk aan de winkel, maar dat is goed nieuws - er liggen veel kansen. Het Groeirapport geeft je een complete doorlichting met een concreet actieplan.',
        primaryLabel: 'ONTDEK HET GROEIRAPPORT - \u20AC1.500',
        primaryHref: '/groeirapport',
        secondaryLabel: 'START MET DE WORKSHOP - \u20AC125',
        secondaryHref: '/workshop-stuurcijfers',
      },
    };

    const cfg = configs[result.category];
    const ResultIcon = cfg.Icon;

    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10">
          {/* Icon + Badge */}
          <div className="mb-6 text-center">
            <div
              className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${cfg.iconBg}`}
            >
              <ResultIcon className={`h-10 w-10 ${cfg.iconColor}`} />
            </div>
            <span className={`badge ${cfg.badgeClass} mb-3`}>
              {result.category === 'fit'
                ? 'Financieel fit'
                : result.category === 'zwalkend'
                  ? 'Verbeterpunten'
                  : 'Aandacht nodig'}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-center text-2xl font-bold leading-snug text-cobiz-dark md:text-3xl">
            {cfg.title}
          </h2>

          {/* Score */}
          <p className="mb-6 text-center text-lg font-semibold text-gray-700">
            {result.score}/{MAX_SCORE} punten ({result.percentage}%)
          </p>

          {/* Description */}
          <p className="mb-8 text-center text-gray-600">{cfg.text}</p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href={cfg.primaryHref} className="btn-primary text-center">
              {cfg.primaryLabel}
            </Link>
            <Link href={cfg.secondaryHref} className="btn-secondary text-center">
              {cfg.secondaryLabel}
            </Link>
          </div>

          {/* Category breakdown */}
          <CategoryBreakdown answers={answers} />
        </div>
      </div>
    );
  }

  return null;
}
