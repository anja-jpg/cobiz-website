import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient | null {
  try {
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL not set — database features disabled')
      return null
    }
    return new PrismaClient()
  } catch {
    console.warn('Failed to create Prisma client — database features disabled')
    return null
  }
}

const client = globalForPrisma.prisma ?? createPrismaClient()
export const prisma = client

if (process.env.NODE_ENV !== 'production' && client) {
  globalForPrisma.prisma = client
}
