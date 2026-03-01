import type { Metadata } from 'next';
import { Users, Clock, FileText, MessageSquare } from 'lucide-react';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const stats = [
  {
    label: 'Workshop Boekingen',
    count: 0,
    Icon: Users,
    color: 'bg-cobiz-green/10 text-cobiz-green',
  },
  {
    label: 'Wachtlijst',
    count: 0,
    Icon: Clock,
    color: 'bg-cobiz-yellow/10 text-cobiz-yellow',
  },
  {
    label: 'Groeirapporten',
    count: 0,
    Icon: FileText,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Contacten',
    count: 0,
    Icon: MessageSquare,
    color: 'bg-cobiz-coral/10 text-cobiz-coral',
  },
];

export default function AdminDashboardPage() {
  const prisma = getDb();

  if (!prisma) {
    const hasUrl = !!process.env.DATABASE_URL;
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Database niet geconfigureerd</h1>
        <p className="mb-2">Stel DATABASE_URL in om het admin dashboard te gebruiken.</p>
        <p className="text-sm text-gray-400">
          Diagnose: DATABASE_URL is {hasUrl ? 'ingesteld maar de verbinding is mislukt' : 'niet ingesteld in de omgeving'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold text-cobiz-dark">Dashboard</h2>

      {/* Stat cards */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, count, Icon, color }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <p className="mt-1 text-3xl font-bold text-cobiz-dark">{count}</p>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-cobiz-dark">
          Recente activiteit
        </h3>
        <p className="text-sm text-gray-400">Nog geen activiteit</p>
      </div>
    </div>
  );
}
