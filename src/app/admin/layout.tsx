import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  FileText,
  MessageSquare,
  HeartPulse,
} from 'lucide-react';

export const metadata: Metadata = {
  title: {
    default: 'COBIZ Admin',
    template: '%s | COBIZ Admin',
  },
  description: 'COBIZ administratie dashboard',
  robots: { index: false, follow: false },
};

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard', Icon: LayoutDashboard },
  { href: '/admin/workshops', label: 'Workshops', Icon: CalendarDays },
  { href: '/admin/boekingen', label: 'Boekingen', Icon: BookOpen },
  { href: '/admin/groeirapporten', label: 'Groeirapporten', Icon: FileText },
  { href: '/admin/contacten', label: 'Contacten', Icon: MessageSquare },
  { href: '/admin/gezondheidscheck', label: 'Gezondheidscheck', Icon: HeartPulse },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 flex h-screen w-64 flex-col bg-cobiz-dark text-white">
        {/* Logo area */}
        <div className="flex h-16 items-center border-b border-white/10 px-6">
          <Link href="/admin" className="text-xl font-bold tracking-wide">
            COBIZ <span className="text-cobiz-green">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {sidebarLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4">
          <p className="text-xs text-gray-400">Ingelogd als Anja</p>
          <Link
            href="/"
            className="mt-1 block text-xs text-cobiz-green hover:underline"
          >
            Terug naar website
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="ml-64 flex min-h-screen flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center border-b border-gray-200 bg-white px-8 shadow-sm">
          <h1 className="text-lg font-semibold text-cobiz-dark">COBIZ Admin</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
