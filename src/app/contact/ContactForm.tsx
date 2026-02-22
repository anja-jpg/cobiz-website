'use client';

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
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
          type: 'contact',
          firstName,
          lastName,
          email,
          phone: phone || undefined,
          company: company || undefined,
          message,
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

  return (
    <div>
      {success && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Bedankt voor je bericht! We nemen zo snel mogelijk contact op.
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
        {/* Name fields */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-first-name" className="form-label">
              Voornaam
            </label>
            <input
              id="contact-first-name"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              placeholder="Jan"
            />
          </div>

          <div>
            <label htmlFor="contact-last-name" className="form-label">
              Achternaam
            </label>
            <input
              id="contact-last-name"
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

        {/* Phone & Company */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className="form-label">
              Telefoonnummer{' '}
              <span className="font-normal text-gray-400">(optioneel)</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              placeholder="+32 470 12 34 56"
            />
          </div>

          <div>
            <label htmlFor="contact-company" className="form-label">
              Bedrijfsnaam{' '}
              <span className="font-normal text-gray-400">(optioneel)</span>
            </label>
            <input
              id="contact-company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="form-input"
              placeholder="Jouw Bedrijf BV"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="form-label">
            Bericht
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input resize-y"
            placeholder="Hoe kunnen we je helpen?"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'BEZIG MET VERSTUREN...' : 'VERSTUUR BERICHT'}
        </button>
      </form>
    </div>
  );
}
