import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import { prisma } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Boekingen',
};

export default function BoekingenAdminPage() {
  if (!prisma) {
    return <div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Database niet geconfigureerd</h1><p>Stel DATABASE_URL in om het admin dashboard te gebruiken.</p></div>
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cobiz-dark">Boekingen</h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          <Download className="h-4 w-4" />
          Exporteer CSV
        </button>
      </div>

      {/* Bookings table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3.5 font-semibold text-gray-600">Naam</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Bedrijf</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Workshop Datum</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Betaalstatus</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-400">
                  Nog geen boekingen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
