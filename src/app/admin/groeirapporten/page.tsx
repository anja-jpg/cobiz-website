import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Groeirapport Orders',
};

export default function GroeirapportenAdminPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-cobiz-dark">Groeirapport Orders</h2>
      </div>

      {/* Orders table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3.5 font-semibold text-gray-600">Naam</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Bedrijf</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Bedrag</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Betaalstatus</th>
                <th className="px-6 py-3.5 font-semibold text-gray-600">Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-400">
                  Nog geen orders
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
