'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

/* ── Tab A: Direct bestellen ── */
function OrderForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [revenue, setRevenue] = useState('');
  const [employees, setEmployees] = useState('');
  const [situation, setSituation] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/payments/groeirapport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          vatNumber: vatNumber || undefined,
          revenue,
          employees,
          situation,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.message || 'Er ging iets mis. Probeer het opnieuw.',
        );
      }

      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setVatNumber('');
      setRevenue('');
      setEmployees('');
      setSituation('');
      setAgreeTerms(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Er ging iets mis. Probeer het opnieuw.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {success && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Je bestelling is ontvangen! Je ontvangt een bevestiging per e-mail
            met de betaalinstructies.
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
        {/* 2-column grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="order-first-name" className="form-label">
              Voornaam
            </label>
            <input
              id="order-first-name"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              placeholder="Jan"
            />
          </div>

          <div>
            <label htmlFor="order-last-name" className="form-label">
              Achternaam
            </label>
            <input
              id="order-last-name"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
              placeholder="Janssens"
            />
          </div>

          <div>
            <label htmlFor="order-email" className="form-label">
              E-mailadres
            </label>
            <input
              id="order-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="jan@bedrijf.be"
            />
          </div>

          <div>
            <label htmlFor="order-phone" className="form-label">
              Telefoonnummer
            </label>
            <input
              id="order-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+32 470 12 34 56"
            />
          </div>

          <div>
            <label htmlFor="order-company" className="form-label">
              Bedrijfsnaam
            </label>
            <input
              id="order-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="form-input"
              placeholder="Jouw Bedrijf BV"
            />
          </div>

          <div>
            <label htmlFor="order-vat" className="form-label">
              BTW-nummer (optioneel)
            </label>
            <input
              id="order-vat"
              type="text"
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
              className="form-input"
              placeholder="BE0123.456.789"
            />
          </div>

          <div>
            <label htmlFor="order-revenue" className="form-label">
              Omzet
            </label>
            <select
              id="order-revenue"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="form-input"
            >
              <option value="" disabled>
                Selecteer omzet...
              </option>
              <option value="< €500K">&lt; &euro;500K</option>
              <option value="€500K - €1M">&euro;500K - &euro;1M</option>
              <option value="€1M - €5M">&euro;1M - &euro;5M</option>
              <option value="> €5M">&gt; &euro;5M</option>
            </select>
          </div>

          <div>
            <label htmlFor="order-employees" className="form-label">
              Aantal medewerkers
            </label>
            <select
              id="order-employees"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              className="form-input"
            >
              <option value="" disabled>
                Selecteer...
              </option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-20">11-20</option>
              <option value="21-50">21-50</option>
              <option value="50+">50+</option>
            </select>
          </div>
        </div>

        {/* Situation textarea (full width) */}
        <div>
          <label htmlFor="order-situation" className="form-label">
            Beschrijf kort je situatie en verwachtingen
          </label>
          <textarea
            id="order-situation"
            rows={4}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            className="form-input"
            placeholder="Vertel ons over je bedrijf, uitdagingen en wat je verwacht van het Groeirapport..."
          />
        </div>

        {/* Terms checkbox */}
        <div className="flex items-start gap-3">
          <input
            id="order-terms"
            type="checkbox"
            required
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-cobiz-green focus:ring-cobiz-green"
          />
          <label htmlFor="order-terms" className="text-sm text-gray-600">
            Ik ga akkoord met de{' '}
            <a
              href="/algemene-voorwaarden"
              className="font-semibold text-cobiz-green underline hover:text-cobiz-green-dark"
            >
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
          {loading ? 'BEZIG MET VERWERKEN...' : 'BETAAL \u20AC750 AANBETALING'}
        </button>
      </form>
    </>
  );
}

/* ── Tab B: Eerst gratis gesprek ── */
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'gratis-gesprek',
          name,
          email,
          phone,
          preferredTime,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.message || 'Er ging iets mis. Probeer het opnieuw.',
        );
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setPreferredTime('');
      setMessage('');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Er ging iets mis. Probeer het opnieuw.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {success && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Je aanvraag is ontvangen! We nemen zo snel mogelijk contact met je
            op.
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="contact-name" className="form-label">
              Naam
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Jan Janssens"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="form-label">
              E-mailadres
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="jan@bedrijf.be"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="form-label">
              Telefoonnummer
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+32 470 12 34 56"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-preferred-time" className="form-label">
              Voorkeur tijdstip
            </label>
            <input
              id="contact-preferred-time"
              type="text"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="form-input"
              placeholder="bijv. dinsdag- of donderdagochtend"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className="form-label">
              Bericht
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
              placeholder="Vertel kort wat je situatie is en wat je wilt bespreken..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'BEZIG MET VERSTUREN...' : 'PLAN GRATIS GESPREK'}
        </button>
      </form>
    </>
  );
}

/* ── Main component with tabs ── */
export default function GroeirapportOrderForm() {
  const [activeTab, setActiveTab] = useState<'order' | 'contact'>('order');

  return (
    <div>
      {/* Tab buttons */}
      <div className="mb-8 flex gap-1 rounded-lg bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setActiveTab('order')}
          className={`flex-1 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
            activeTab === 'order'
              ? 'bg-white text-cobiz-dark shadow-sm'
              : 'text-gray-500 hover:text-cobiz-dark'
          }`}
        >
          Direct bestellen
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('contact')}
          className={`flex-1 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
            activeTab === 'contact'
              ? 'bg-white text-cobiz-dark shadow-sm'
              : 'text-gray-500 hover:text-cobiz-dark'
          }`}
        >
          Eerst gratis gesprek
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'order' ? <OrderForm /> : <ContactForm />}
    </div>
  );
}
