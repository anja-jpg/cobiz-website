import type { Metadata } from 'next';
import { Plus, Pencil, Trash2, CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Workshops Beheren',
};

const workshopDates = [
  {
    id: 1,
    datum: '19 mei 2025',
    tijd: '17:00 - 21:30',
    capaciteit: 10,
    geboekt: 3,
    status: 'open' as const,
  },
  {
    id: 2,
    datum: '18 juni 2025',
    tijd: '17:00 - 21:30',
    capaciteit: 10,
    geboekt: 8,
    status: 'open' as const,
  },
];

function StatusBadge({ status, geboekt, capaciteit }: { status: string; geboekt: number; capaciteit: number }) {
  if (geboekt >= capaciteit) {
    return (
      <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">
        Volzet
      </span>
    );
  }
  if (status === 'open') {
    return (
      <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
        Open
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
      {status}
    </span>
  );
}

export default function WorkshopsAdminPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cobiz-dark">Workshops Beheren</h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-cobiz-green px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobiz-green-dark"
        >
          <Plus className="h-4 w-4" />
          Nieuwe datum toevoegen
        </button>
      </div>

      {/* Workshop dates table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3.5 font-semibold text-gray-600">Datum</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Tijd</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Capaciteit</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Geboekt</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {workshopDates.map((ws) => (
                <tr key={ws.id} className="transition-colors hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-cobiz-dark">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-cobiz-green" />
                      {ws.datum}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{ws.tijd}</td>
                  <td className="px-6 py-4 text-gray-600">{ws.capaciteit}</td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-cobiz-dark">{ws.geboekt}</span>
                    <span className="text-gray-400">/{ws.capaciteit}</span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ws.status} geboekt={ws.geboekt} capaciteit={ws.capaciteit} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-cobiz-dark"
                        title="Bewerken"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                        title="Verwijderen"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
