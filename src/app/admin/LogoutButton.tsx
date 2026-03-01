'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-white"
      title="Uitloggen"
    >
      <LogOut className="h-3.5 w-3.5" />
      Uitloggen
    </button>
  )
}
