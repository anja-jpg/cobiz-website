'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface WorkshopDate {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  remaining: number;
}

interface BookingFormProps {
  dates: WorkshopDate[];
}

function formatDateLabel(d: WorkshopDate): string {
  const date = new Date(d.date + 'T00:00:00');
  const formatted = new Intl.DateTimeFormat('nl-BE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
  return `${formatted} (${d.startTime} - ${d.endTime}u) — nog ${d.remaining} plaatsen`;
}

export default function BookingForm({ dates }: BookingFormProps) {
  const [selectedDateId, setSelectedDateId] = useState<string>('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const availableDates = dates.filter((d) => d.remaining > 0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/workshop/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workshopDateId: Number(selectedDateId),
          firstName,
          lastName,
          email,
          phone,
          company,
          vatNumber: vatNumber || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Er ging iets mis. Probeer het opnieuw.');
      }

      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setVatNumber('');
      setAgreeTerms(false);
      setSelectedDateId('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="booking-form" className="scroll-mt-24">
      <h3 className="mb-6 text-2xl font-bold text-cobiz-dark">
        Boek je plek
      </h3>

      {success && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Je boeking is ontvangen! Je ontvangt een bevestiging per e-mail.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Workshop date select */}
        <div>
          <label htmlFor="workshop-date" className="form-label">
            Kies je workshopdatum
          </label>
          <select
            id="workshop-date"
            required
            value={selectedDateId}
            onChange={(e) => setSelectedDateId(e.target.value)}
            className="form-input"
          >
            <option value="" disabled>
              Selecteer een datum...
            </option>
            {availableDates.map((d) => (
              <option key={d.id} value={d.id}>
                {formatDateLabel(d)}
              </option>
            ))}
          </select>
        </div>

        {/* 2-column grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="booking-first-name" className="form-label">
              Voornaam
            </label>
            <input
              id="booking-first-name"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              placeholder="Jan"
            />
          </div>

          <div>
            <label htmlFor="booking-last-name" className="form-label">
              Achternaam
            </label>
            <input
              id="booking-last-name"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
              placeholder="Janssens"
            />
          </div>

          <div>
            <label htmlFor="booking-email" className="form-label">
              E-mailadres
            </label>
            <input
              id="booking-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="jan@bedrijf.be"
            />
          </div>

          <div>
            <label htmlFor="booking-phone" className="form-label">
              Telefoonnummer
            </label>
            <input
              id="booking-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+32 470 12 34 56"
            />
          </div>

          <div>
            <label htmlFor="booking-company" className="form-label">
              Bedrijfsnaam
            </label>
            <input
              id="booking-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="form-input"
              placeholder="Jouw Bedrijf BV"
            />
          </div>

          <div>
            <label htmlFor="booking-vat" className="form-label">
              BTW-nummer (optioneel)
            </label>
            <input
              id="booking-vat"
              type="text"
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
              className="form-input"
              placeholder="BE0123.456.789"
            />
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="flex items-start gap-3">
          <input
            id="booking-terms"
            type="checkbox"
            required
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-cobiz-green focus:ring-cobiz-green"
          />
          <label htmlFor="booking-terms" className="text-sm text-gray-600">
            Ik ga akkoord met de{' '}
            <a href="/algemene-voorwaarden" className="font-semibold text-cobiz-green underline hover:text-cobiz-green-dark">
              algemene voorwaarden
            </a>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'BEZIG MET BOEKEN...' : 'BETAAL \u20AC125 EN BOEK'}
        </button>
      </form>
    </div>
  );
}
