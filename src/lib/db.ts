import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Returns a PrismaClient instance, creating one if needed.
 * Checks process.env.DATABASE_URL on every call so it works
 * even when the module is first loaded before env vars are available
 * (e.g. during Next.js static analysis at build time).
 */
export function getDb(): PrismaClient | null {
  if (globalForPrisma.prisma) return globalForPrisma.prisma

  if (!process.env.DATABASE_URL) {
    return null
  }

  try {
    const client = new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL,
    })
    globalForPrisma.prisma = client
    return client
  } catch {
    return null
  }
}

// Legacy export for existing code — prefer getDb() in server components
export const prisma = getDb()
