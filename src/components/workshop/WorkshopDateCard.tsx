'use client';

import { Check, AlertTriangle, Flame, XCircle, MapPin } from 'lucide-react';

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

function formatDutchDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  const weekday = new Intl.DateTimeFormat('nl-BE', { weekday: 'long' }).format(date);
  const day = new Intl.DateTimeFormat('nl-BE', { day: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('nl-BE', { month: 'long' }).format(date);
  const year = new Intl.DateTimeFormat('nl-BE', { year: 'numeric' }).format(date);
  return `${weekday} ${day} ${month} ${year}`.toUpperCase();
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
    return {
      text: 'Nog voldoende plaatsen',
      className: 'urgency-ok',
      Icon: Check,
    };
  }
  if (remaining >= 4) {
    return {
      text: `Nog ${remaining} plaatsen`,
      className: 'urgency-warning',
      Icon: AlertTriangle,
    };
  }
  if (remaining >= 1) {
    return {
      text: `Laatste ${remaining} plaatsen!`,
      className: 'urgency-critical',
      Icon: Flame,
    };
  }
  return {
    text: 'VOLZET',
    className: 'urgency-critical',
    Icon: XCircle,
  };
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

  if (isVolzet) {
    return (
      <div className="card-hover rounded-xl bg-white p-6 shadow-md opacity-75">
        <div className="mb-3 flex items-center gap-2 text-cobiz-coral">
          <XCircle className="h-5 w-5" />
          <span className="text-sm font-bold uppercase tracking-wide">Volzet</span>
        </div>

        <h3 className="mb-1 text-lg font-bold text-cobiz-dark">
          {formatDutchDate(date)}
        </h3>
        <p className="mb-4 text-sm text-gray-500">
          {startTime} - {endTime}u
        </p>

        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <a
          href="#waitlist-form"
          className="btn-secondary block w-full text-center text-sm"
        >
          SCHRIJF JE IN OP WACHTLIJST
        </a>
      </div>
    );
  }

  return (
    <div className="card-hover rounded-xl bg-white p-6 shadow-md">
      <h3 className="mb-1 text-lg font-bold text-cobiz-dark">
        {formatDutchDate(date)}
      </h3>
      <p className="mb-4 text-sm text-gray-500">
        {startTime} - {endTime}u
      </p>

      <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="h-4 w-4 shrink-0" />
        <span>{location}</span>
      </div>

      <div className={`mb-4 flex items-center gap-2 text-sm font-semibold ${urgency.className}`}>
        <UrgencyIcon className="h-4 w-4 shrink-0" />
        <span>
          {remaining > 0 && remaining < 8
            ? `Nog ${remaining} van ${capacity} plaatsen`
            : urgency.text}
        </span>
      </div>

      <p className="mb-4 text-lg font-bold text-cobiz-dark">
        {formatPrice(price)}{' '}
        <span className="text-sm font-normal text-gray-500">(incl. BTW)</span>
      </p>

      <a
        href="#booking-form"
        className="btn-primary block w-full text-center text-sm"
      >
        BOEK NU
      </a>
    </div>
  );
}
