'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function BookingFormGesprek() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [preference, setPreference] = useState('online');
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
          firstName,
          lastName,
          email,
          phone,
          company: company || undefined,
          preference,
          message: message || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.message || 'Er ging iets mis. Probeer het opnieuw.'
        );
      }

      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setPreference('online');
      setMessage('');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Er ging iets mis. Probeer het opnieuw.'
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-green-50 p-8 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-cobiz-green" />
        <h3 className="mb-2 text-xl font-bold text-cobiz-dark">
          Bedankt voor je aanvraag!
        </h3>
        <p className="text-gray-600">
          We nemen binnen 2 werkdagen contact op om een moment in te plannen.
        </p>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name fields */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="gesprek-first-name" className="form-label">
              Voornaam
            </label>
            <input
              id="gesprek-first-name"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              placeholder="Jan"
            />
          </div>

          <div>
            <label htmlFor="gesprek-last-name" className="form-label">
              Achternaam
            </label>
            <input
              id="gesprek-last-name"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
              placeholder="Janssens"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="gesprek-email" className="form-label">
            E-mailadres
          </label>
          <input
            id="gesprek-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="jan@bedrijf.be"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="gesprek-phone" className="form-label">
            Telefoonnummer
          </label>
          <input
            id="gesprek-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            placeholder="+32 470 12 34 56"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="gesprek-company" className="form-label">
            Bedrijfsnaam{' '}
            <span className="font-normal text-gray-400">(optioneel)</span>
          </label>
          <input
            id="gesprek-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input"
            placeholder="Jouw Bedrijf BV"
          />
        </div>

        {/* Preference radio */}
        <fieldset>
          <legend className="form-label">Voorkeur</legend>
          <div className="mt-2 flex gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="preference"
                value="online"
                checked={preference === 'online'}
                onChange={(e) => setPreference(e.target.value)}
                className="h-4 w-4 border-gray-300 text-cobiz-green focus:ring-cobiz-green"
              />
              <span className="text-sm font-medium text-cobiz-dark">
                Online
              </span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="preference"
                value="fysiek"
                checked={preference === 'fysiek'}
                onChange={(e) => setPreference(e.target.value)}
                className="h-4 w-4 border-gray-300 text-cobiz-green focus:ring-cobiz-green"
              />
              <span className="text-sm font-medium text-cobiz-dark">
                Fysiek (COBIZ-center)
              </span>
            </label>
          </div>
        </fieldset>

        {/* Message */}
        <div>
          <label htmlFor="gesprek-message" className="form-label">
            Waar wil je het over hebben?{' '}
            <span className="font-normal text-gray-400">(optioneel)</span>
          </label>
          <textarea
            id="gesprek-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input resize-y"
            placeholder="Vertel kort waar je mee zit of wat je wil bespreken..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex w-full items-center justify-center gap-2"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'BEZIG MET PLANNEN...' : 'PLAN MIJN GESPREK'}
        </button>
      </form>
    </div>
  );
}
