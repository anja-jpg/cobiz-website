import type { Metadata } from 'next';
import { Activity, BarChart3, Users } from 'lucide-react';
import { prisma } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Gezondheidscheck Resultaten',
};

const statsData = [
  {
    label: 'Totaal ingevuld',
    value: 0,
    Icon: Users,
    color: 'bg-cobiz-green/10 text-cobiz-green',
  },
  {
    label: 'Gemiddelde score',
    value: '-',
    Icon: Activity,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Categorieverdeling',
    value: '-',
    Icon: BarChart3,
    color: 'bg-cobiz-yellow/10 text-cobiz-yellow',
  },
];

export default function GezondheidsCheckAdminPage() {
  if (!prisma) {
    return <div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Database niet geconfigureerd</h1><p>Stel DATABASE_URL in om het admin dashboard te gebruiken.</p></div>
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-cobiz-dark">Gezondheidscheck Resultaten</h2>
      </div>

      {/* Stats cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-3">
        {statsData.map(({ label, value, Icon, color }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <p className="mt-1 text-2xl font-bold text-cobiz-dark">{value}</p>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3.5 font-semibold text-gray-600">Naam</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Score</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Categorie</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                  Nog geen resultaten
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
