import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export function getDb(): PrismaClient | null {
  if (globalForPrisma.prisma) return globalForPrisma.prisma

  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    return null
  }

  try {
    const adapter = new PrismaPg({ connectionString })
    const client = new PrismaClient({ adapter })
    globalForPrisma.prisma = client
    return client
  } catch {
    return null
  }
}

// Legacy export for existing code
export const prisma = getDb()
