'use client';

import { Check, AlertTriangle, Flame, XCircle, MapPin, Clock, Users, Coffee } from 'lucide-react';

interface WorkshopDateCardProps {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  capacity: number;
  booked: number;
  location: string;
  price: number;
  status: string;
}

function formatDutchDate(dateString: string) {
  const date = new Date(dateString + 'T00:00:00');
  const day = new Intl.DateTimeFormat('nl-BE', { day: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('nl-BE', { month: 'long' }).format(date);
  const year = new Intl.DateTimeFormat('nl-BE', { year: 'numeric' }).format(date);
  const weekday = new Intl.DateTimeFormat('nl-BE', { weekday: 'long' }).format(date);
  return { day, month, year, weekday };
}

function formatPrice(cents: number): string {
  const euros = cents / 100;
  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(euros);
}

function getUrgencyInfo(remaining: number) {
  if (remaining >= 8) {
    return { text: 'Nog voldoende plaatsen', className: 'text-cobiz-green bg-cobiz-green/10', Icon: Check };
  }
  if (remaining >= 4) {
    return { text: `Nog ${remaining} plaatsen`, className: 'text-cobiz-yellow bg-cobiz-yellow/10', Icon: AlertTriangle };
  }
  if (remaining >= 1) {
    return { text: `Laatste ${remaining} plaatsen!`, className: 'text-cobiz-coral bg-cobiz-coral/10', pulse: true, Icon: Flame };
  }
  return { text: 'VOLZET', className: 'text-cobiz-coral bg-cobiz-coral/10', Icon: XCircle };
}

export default function WorkshopDateCard({
  date,
  startTime,
  endTime,
  capacity,
  booked,
  location,
  price,
  status,
}: WorkshopDateCardProps) {
  const remaining = capacity - booked;
  const isVolzet = status === 'volzet' || remaining <= 0;
  const urgency = getUrgencyInfo(remaining);
  const UrgencyIcon = urgency.Icon;
  const d = formatDutchDate(date);

  if (isVolzet) {
    return (
      <div className="card-hover relative overflow-hidden rounded-2xl bg-white shadow-lg opacity-60">
        <div className="h-2 bg-gray-300" />
        <div className="p-6">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-cobiz-coral/10 px-3 py-1 text-xs font-bold uppercase text-cobiz-coral">
            <XCircle className="h-3 w-3" /> Volzet
          </span>
          <div className="mb-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-cobiz-dark">{d.day}</span>
            <span className="text-sm font-semibold capitalize text-gray-500">{d.month} {d.year}</span>
          </div>
          <a href="#waitlist-form" className="btn-secondary block w-full text-center text-sm">
            SCHRIJF JE IN OP WACHTLIJST
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="card-3d group relative overflow-hidden rounded-2xl bg-white">
      {/* Gradient top bar */}
      <div className="h-2" style={{ background: 'linear-gradient(90deg, #133F3E, #51B848)' }} />

      {/* Urgency badge */}
      <div className="absolute right-4 top-5">
        <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${urgency.className} ${'pulse' in urgency && urgency.pulse ? 'animate-pulse-glow' : ''}`}>
          <UrgencyIcon className="h-3 w-3" />
          {remaining > 0 && remaining < 8
            ? `Nog ${remaining}/${capacity}`
            : urgency.text}
        </span>
      </div>

      <div className="p-6">
        {/* Date display */}
        <div className="mb-5">
          <div className="mb-1 flex items-baseline gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cobiz-green/10 text-2xl font-bold text-cobiz-green">
              {d.day}
            </span>
            <div>
              <p className="text-sm font-bold capitalize text-cobiz-dark">{d.weekday}</p>
              <p className="text-sm capitalize text-gray-500">{d.month} {d.year}</p>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="mb-5 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-cobiz-green/60" />
            {startTime} - {endTime}u
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-cobiz-green/60" />
            {location}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-cobiz-green/60" />
            Max {capacity} deelnemers
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Coffee className="h-4 w-4 text-cobiz-green/60" />
            Broodjes incl.
          </div>
        </div>

        {/* Price */}
        <div className="mb-5 text-center">
          <span className="text-3xl font-bold text-cobiz-green">{formatPrice(price)}</span>
          <span className="ml-1 text-sm text-gray-500">incl. BTW</span>
        </div>

        {/* CTA */}
        <a href="#booking-form" className="btn-gradient block w-full text-center">
          BOEK NU
        </a>
      </div>
    </div>
  );
}
