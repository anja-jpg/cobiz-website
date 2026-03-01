import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', '@prisma/adapter-pg'],
  async redirects() {
    return [
      {
        source: '/stuurcijfers',
        destination: '/workshop-stuurcijfers',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
