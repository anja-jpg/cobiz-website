'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/workshop/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="waitlist-form" className="scroll-mt-24">
      <h3 className="mb-6 text-2xl font-bold text-cobiz-dark">
        Wachtlijst
      </h3>
      <p className="mb-6 text-gray-600">
        Alle data volzet? Schrijf je in op de wachtlijst en we verwittigen je zodra er een plek vrijkomt of een nieuwe datum wordt gepland.
      </p>

      {success && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Je staat op de wachtlijst! We houden je op de hoogte.
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
          <div>
            <label htmlFor="waitlist-first-name" className="form-label">
              Voornaam
            </label>
            <input
              id="waitlist-first-name"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              placeholder="Jan"
            />
          </div>

          <div>
            <label htmlFor="waitlist-last-name" className="form-label">
              Achternaam
            </label>
            <input
              id="waitlist-last-name"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
              placeholder="Janssens"
            />
          </div>

          <div>
            <label htmlFor="waitlist-email" className="form-label">
              E-mailadres
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="jan@bedrijf.be"
            />
          </div>

          <div>
            <label htmlFor="waitlist-phone" className="form-label">
              Telefoonnummer
            </label>
            <input
              id="waitlist-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+32 470 12 34 56"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="waitlist-company" className="form-label">
              Bedrijfsnaam
            </label>
            <input
              id="waitlist-company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="form-input"
              placeholder="Jouw Bedrijf BV"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-secondary flex w-full items-center justify-center gap-2 sm:w-auto"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'BEZIG...' : 'SCHRIJF ME IN OP DE WACHTLIJST'}
        </button>
      </form>
    </div>
  );
}
