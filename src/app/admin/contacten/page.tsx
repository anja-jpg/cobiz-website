import type { Metadata } from 'next';
import { prisma } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Contactverzoeken',
};

export default function ContactenAdminPage() {
  if (!prisma) {
    return <div className="p-8 text-center"><h1 className="text-2xl font-bold mb-4">Database niet geconfigureerd</h1><p>Stel DATABASE_URL in om het admin dashboard te gebruiken.</p></div>
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-cobiz-dark">Contactverzoeken</h2>
      </div>

      {/* Contact requests table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3.5 font-semibold text-gray-600">Naam</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Type</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Bericht</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                  Nog geen contactverzoeken
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
